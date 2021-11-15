---
sidebar_position: 6
title: 캐시를 더욱 똑똑하게 사용하기(Advanced)
---

# 캐시를 더욱 똑똑하게 사용하기(Advanced)

---

[Apollo Docs](https://www.apollographql.com/docs/react/caching/advanced-topics/)를 번역 및 의역한 내용입니다.

---

이 문서에서는 아폴로 캐시를 사용할 때 참고하면 좋을 이슈들을 소개합니다.

## 불필요한 캐시는 사용하지 않기

캐시는 좋은 기능이지만 딱히 쓰지 않아도 될 때가 있습니다. 예를 들어 딱 한번만 사용되고 마는 token을 받는 쿼리가 있을 수 있습니다. 이럴 땐 fetchPolicy를 `no-cache`로 지정해주세요

```tsx
const { loading, error, data } = useQuery(GET_DOGS, {
  fetchPolicy: "no-cache",
});
```

이렇게 fetch policy를 지정하면 서버에 다녀올 때 cache에 기록하지 않고, 클라이언트가 데이터를 요청할 때도 cache에 먼저 확인하는 절차를 생략하고 바로 서버에 요청합니다.

## 캐시를 저장하기

[apollo3-cache-persist](https://github.com/apollographql/apollo-cache-persist) 라이브러리를 사용하면 캐시된 데이터를 localStorage나 asyncStorage에 저장해두고 사용할 수 있습니다.

구현하는 방법은 persistCache 메소드에 apollo cache 인스턴스와 사용할 storage를 넘겨주는겁니다. 기본적으로 캐시에 저장된 값들은 즉각 동기화되지만 디바운싱을 적용해서 일정 시간마다 동기화시킬 수도 있습니다.

> Note: The persistCache 메소드는 비동기로 동작하며 Promise를 리턴합니다.

```tsx
import { AsyncStorage } from "react-native";
import { InMemoryCache } from "@apollo/client";
import { persistCache } from "apollo3-cache-persist";

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: AsyncStorage,
}).then(() => {
  // Continue setting up Apollo Client as usual.
});
```

:::info
persistCache에 대한 더 다양한 사용방법에 대해서는 [README of `apollo3-cache-persist`](https://github.com/apollographql/apollo-cache-persist)를 참고하세요!
:::

## 캐시 리셋하기

사용자가 로그아웃을 하는 경우처럼 캐시를 비워야 하는 경우가 있습니다. 이 때 client.resetStore() 메소드를 호출하면 됩니다. 이 메소드는 활성 쿼리(active queries)를 리페칭하는 과정을 포함하기 때문에 비동기로 동작합니다.

```tsx
export default withApollo(
  graphql(PROFILE_QUERY, {
    props: ({ data: { loading, currentUser }, ownProps: { client } }) => ({
      loading,
      currentUser,
      resetOnLogout: async () => client.resetStore(),
    }),
  })(Profile)
);
```

:::tip
Tip : 활성쿼리를 리페칭하는 과정 없이 캐시를 비우고 싶다면 client.clearStore()를 사용하면 됩니다.
:::

### 캐시 리셋 후 동작 설정하기

캐시를 리셋했을 때, 즉 `client.resetStore()` 메소드가 호출되었을 때 실행하는 콜백함수를 등록할 수 있습니다. `client.onResetStore`에 매개변수로 콜백을 넘겨주면 됩니다. 여러개의 콜백을 넘기려면 이 메소드를 여러번 호출하시면 됩니다. 여러개를 넣게되면 하나의 배열로 뭉쳐져서 캐시가 리셋될 때 한번에 실행됩니다.

아래 예시에서는 캐시가 초기화되었을 때 캐시에 기본값을 넣어주기 위해 `client.onResetStore` 메소드를 사용했습니다. 이 기능은 특히 아폴로 클라이언트의 로컬 상태관리 기능을 사용할 때 좋습니다.

```tsx
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withClientState } from "apollo-link-state";

import { resolvers, defaults } from "./resolvers";

const cache = new InMemoryCache();
const stateLink = withClientState({ cache, resolvers, defaults });

const client = new ApolloClient({
  cache,
  link: stateLink,
});

client.onResetStore(stateLink.writeDefaults);
```

캐시 초기화를 리액트 컴포넌트 내부에서 실행하기도 하는데, 이는 캐시 리셋 후 UI를 강제 리렌더링하기 위해 사용합니다.

clinet.onResetStore의 리턴값은 콜백을 unregister하기 위해 호출하는 함수입니다.

```tsx
import { withApollo } from "@apollo/react-hoc";

export class Foo extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = props.client.onResetStore(() => this.setState({ reset: false }));
    this.state = { reset: false };
  }
  componentDidUnmount() {
    this.unsubscribe();
  }
  render() {
    return this.state.reset ? <div /> : <span />;
  }
}

export default withApollo(Foo);
```

## 뮤테이션 후 리페칭

뮤테이션을 하고 update함수로 뮤테이션의 결과값을 직접 캐시에 업데이트하는 경우가 있는데, 이 과정이 워낙 복잡하기도 하고, 특정 뮤테이션은 리턴값으로 해당 객체를 온전히 반환해주지 않는 경우도 있어서 다른 방법을 모색해야 할 때가 생깁니다.

이런 경우엔 `useMutation` 훅에 `refetchQueries` 옵션을 넣어보세요. 자동으로 해당 데이터를 페치해오는 쿼리를 호출해줍니다.

:::info
refetchQueries옵션을 넣어주는게 update함수를 구현하는 것 보다 훨씬 쉽지만 어쨋든 추가적인 네트워킹이 발생하는건 자명합니다. 성능이 낮아지죠.
:::

## 캐시 리다이렉팅

쿼리가 다른 참조로 같은 데이터를 요청하는 경우가 있습니다. 예를 들자면 게시글 리스트 데이터와 게시글 상세화면 데이터가 있을 수 있겠네요. 둘은 같은 데이터를 참조합니다.

리스트뷰에 쓰이는 데이터는 다음과 같이 필요한 필드만 요청합니다.

```tsx
query Books {
  books {
    id
    title
    abstract
  }
}
```

리스트에서 특정 book 객체가 선택되었다면, 상세화면에선 다음과 같이 모든 필드를 요청합니다.

```tsx
query Book($id: ID!) {
  book(id: $id) {
    id
    title
    abstract
  }
}
```

위 예시처럼 두번째 쿼리를 호출했을 때 이미 같은 참조를 가진 데이터가 캐시에 존재하고 있을겁니다. 하지만 아폴로 클라이언트는 그 사실을 모릅니다. 인지하게 하기 위해선 다음과 같이 Cache 인스턴스를 정의할 때 typePolicies에 toReference로 알려줘야합니다.

```tsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          book: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Book',
                id: args.id,
              });
            }
          }
        }
      }
    }
  }
});
```

이 read함수는 `toReference`라는 Book 객체에 대해 `__typename`과 `id`로 참조를 생성하고 반환해주는 헬퍼 메소드를 사용합니다.

이렇게 정의해놓으면 클라이언트가 Book이라는 객체를 읽을 때마다 read 메소드를 호출하고 Book에 대한 참조를 반환하게 됩니다. 아폴로 클라이언트는 이 참조객체를 가지고 캐시를 뒤져 현재의 Book객체를 찾아 반환합니다. 만약 캐시를 찾아봤는데 해당 데이터가 없다면, 자동으로 서버에 데이터를 요청합니다.

:::info
네트워크 요청을 막으려면 모든 데이터는 캐시안에 있어야합니다. 만약 상세화면 데이터를 요청했을 때 리스트뷰 데이터를 요청하면 필요한 필드가 일부밖에 없으므로 어쩔 수 없이 서버를 다녀오게됩니다.
:::

## 페이지네이션 유틸

### 데이터 추가로 로드하기 [: `fetchMore`](https://www.apollographql.com/docs/react/caching/advanced-topics/#incremental-loading-fetchmore)

인피니티 스크롤이나 페이지네이션처럼 동일한 쿼리를 연속으로 호출할 때 fetchMore 메소드를 사용합니다.

### 데코레이터 - [`@connection`](https://www.apollographql.com/docs/react/caching/advanced-topics/#the-connection-directive)

궁극적으로 페이지네이션 쿼리는 fetchMore메서드를 날려 같은 캐시 키를 가진 데이터를 업데이트한다는 점을 제외하면 일반 쿼리와 다를게 없습니다. 하지만 최초 호출데이터와 뒤이어 호출될 때 쓰이는 매개변수들이 함께 캐싱되어지며, 이 데이터를 업데이트할 때 문제가 발생합니다. 우린 매개변수(offset이나 start같은 값)은 필요없고, 단순히 캐시된 데이터에 액세스하기 위해 제공하는 것도 또한 원치 않습니다.

이 문제를 해결하기 위해 아폴로 클라이언트 1.6에서 데코레이터 `@connection`을 도입했습니다. 특정 필드의 캐시 키를 커스텀하는 역할을 합니다. connection로 특정 필드에 대한 캐시 키를 설정하고 쿼리를 실제로 변경하는 인수를 필터링할 수 있습니다.

@connection을 사용하는 방법은 간단합니다. 커스텀하고싶은 쿼리 옆에 key 매개변수를 설정하고 옵션으로 filter값을 쿼리 파라미터 이름을 배열로 넣어줄 수 있습니다.

```tsx
const query = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    feed(type: $type, offset: $offset, limit: $limit) @connection(key: "feed", filter: ["type"]) {
      ...FeedEntry
    }
  }
`;
```

위 예시대로 쿼리를 해보면 `fetchMore`가 여러번 호출되더라도 결과값은 캐시에서 feed라는 키로 마지막까지 누적된 데이터가 리턴됩니다. 또한 그 데이터는 type 인자를 filter옵션으로 넣어줬기 때문에 feed의 타입별로 정렬됩니다.

이제 (stable key)키를 가지고 있으니 손쉽게 writeQuery로 캐시 업데이트를 할 수 있습니다. 아래 예시에서는 feed를 빈 배열로 초기화(날려버림)합니다.

```tsx
client.writeQuery({
  query: gql`
    query Feed($type: FeedType!) {
      feed(type: $type) @connection(key: "feed", filter: ["type"]) {
        id
      }
    }
  `,
  variables: {
    type: "top",
  },
  data: {
    feed: [],
  },
});
```

:::info
위 예시에선 type이라는 인자만 넣어줬기 때문에 offset이나 limit값은 따로 넣지 않은겁니다. 추가되면 같이 추가해주세요
:::
