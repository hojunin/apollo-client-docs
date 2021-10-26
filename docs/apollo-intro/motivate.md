---
sidebar_position: 1
title: 왜 꼭 아폴로인가요?
---

[Apollo Docs](https://www.apollographql.com/docs/react/why-apollo/)를 번역 및 의역한 내용입니다.

---

## 왜 데이터 관리를 위해 아폴로 클라이언트를 선택해야 하나요?

---

데이터 관리는 어려워선 안됩니다. 만약 당신이 리액트 앱에서 서버와 로컬 데이터 관리를 어떻게 쉽게 할 수 있는지 궁금하시다면 Apollo Client를 잘 찾아오신겁니다. 이 문서를 통해 당신은 Apollo Client가 얼마나 적은 코드만으로도 똑똑하게 캐싱을 하고 명확하게 데이터를 불러오는지 배울 수 있습니다. 지금부터 시작합니다.

## [명확한 데이터 불러오기](https://www.apollographql.com/docs/react/why-apollo/#declarative-data-fetching)

아폴로의 명확한 데이터 불러오기에 대한 접근 방식을 통해 데이터 복구나 로딩상태 및 에러 상태에 대한 추적, UI 업데이트를 위한 로직은 useQuery라는 훅을 통해 캡슐화됩니다. 이 훅은 당신의 컴포넌트에 쿼리 결과를 만들어냅니다. 실제로 어떻게 동작하는지 확인해봅시다.

```tsx
function Feed() {
    const { loading, error, data } = useQuery(GET_DOGS);
    if (error) return <Error />;
    if (loading) return <Fetching />;

    return <DogList dogs={data.dogs} />;
}
```

이것이 useQuery훅을 사용하여 dogs에 대한 데이터를 graphQL 서버로부터 받아 리스트로 렌더링하는 코드입니다. useQuery는 쿼리와 컴포넌트를 결합하여 리액트 훅의 효과를 극대합니다. 쿼리가 데이터를 받으면 <DogList/> 컴포넌트가 데이터가 업데이트되는 즉각 반영됩니다.

아폴로 클라이언트는 데이터가 로드되는 상태, 에러를 포함하여 데이터 요청의 시작부터 끝까지 관여합니다. 첫 요청을 위한 boilerplate(상용어구)를 세팅하기 위한 미들웨어를 설치할 필요도 없고, 응답을 캐싱하거나 변환하기 위한 수고도 필요없습니다. 당신이 할 일은 그저 데이터의 명세를 컴포넌트에 입력하고 Apollo Client가 데이터를 받아오길 기다리면 됩니다.

Apollo Client로 전환하여 개발하다 보면, 당신은 데이터 관리를 위한 불필요한 코드를 많이 제거할 수 있습니다. 정확히 얼마나 제거될 지는 당신의 앱에 따라 다릅니다. 하지만 몇몇 팀은 수천줄에 달한다고 합니다. 코드를 많이 줄인다고 해서 당신이 기능과 타협했다고 볼 순 없습니다. optimistic UI나 refetching, pagination과 같은 상급 기술들은 useQuery의 옵션을 통해 접근할 수 있기 때문입니다.

## [별다른 설정 없이 사용가능한 캐시](https://www.apollographql.com/docs/react/why-apollo/#zero-config-caching)

다른 데이터 관리 라이브러리들과 다른 Apollo Client의 핵심 기능 중 하나는 단일화된 캐시입니다. Apollo Client는 아주 간단한 설정만으로도 시작 가능한 똘똘한 캐시입니다.

```tsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
});
```

Graphql을 캐싱하는 것은 그다지 어려운 일은 아닙니다만, Apollo team은 이 문제를 푸는 데 2년을 집중했습니다. 같은 데이터에 여러 path가 있으므로 정형화는 여러 컴포넌트에서 데이터를 관리할 때 가장 중요한 문제 입니다. 다음 예시를 보며 이해해봅시다.

```tsx
const GET_ALL_DOGS = gql`
    query GetAllDogs {
        dogs {
            id
            breed
            displayImage
        }
    }
`;

const UPDATE_DISPLAY_IMAGE = gql`
    mutation UpdateDisplayImage($id: String!, $displayImage: String!) {
        updateDisplayImage(id: $id, displayImage: $displayImage) {
            id
            displayImage
        }
    }
`;
```

GET_ALL_DOGS라는 쿼리는 displayImage가 포함된 dogs데이터의 리스트를 불러옵니다. UPDATE_DISPLAY_IMAGE라는 뮤테이션은 하나의 dog데이터의 displayImage를 업데이트합니다. 만약 특정 dog 데이터의 displayImage를 업데이트 한다면 우리는 또한 dogs데이터에서 해당하는 dog 데이터가 필요할 것입니다. Apollo Client는 \_\_typename과 id를 기준으로 graphql 결과값을 분리해놨습니다. 이는 뮤테이션의 결과로 받는 object와 같은 id를 갖는 query가 요청될 때 서버를 거치지 않고 cache의 데이터를 불러온다는 것을 보장합니다. 또한 같은 데이터를 리턴하는 쿼리도 항상 id를 통해 동기화됩니다.

이전 예시인 GET_ALL_DOGS 쿼리로 돌아가봅시다. 만약 이 리스트에서 특정 dog에 대한 페이지로 넘어가고 싶다면 어떻게 해야하죠? 우리는 이미 dogs에 대한 데이터를 다 불러왔습니다. 그렇기 때문에 다시 서버에 데이터를 요청하여 가져오긴 싫습니다. Apollo Client의 캐시 정책 API덕분에 우리는 이미 가져왔다고 알려져 있는 데이터를 한번 더 가져오지 않아도 됩니다.

여기 하나의 dog를 쿼리하는 코드입니다.

```tsx
const GET_DOG = gql`
    query GetDog {
        dog(id: "abc") {
            id
            breed
            displayImage
        }
    }
`;
```

이 코드는 FieldPolicy를 자유롭게 정하고 캐시에서 Dog 데이터를 받아옵니다.

```tsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                dog(_, { args, toReference }) {
                    return toReference({
                        __typename: 'Dog',
                        id: args.id,
                    });
                },
            },
        },
    },
});

const client = new ApolloClient({ cache });
```

## [Combine local & remote data](https://www.apollographql.com/docs/react/why-apollo/#combine-local--remote-data)

굉장히 많은 개발자들은 Apollo Client가 서버 데이터를 관리하는데 탁월하다고 말합니다. 대략 전체의 80%에 해당하죠. 하지만 로컬데이터는 어떨까요? 전역 flag나 기기 API 결과값 같은 것들을 포함하여 전체 필요 데이터의 20%정도를 차지합니다. Apollo Client는 당신의 어플리케이션에서 Apollo Cache를 사용할 수 있게끔 로컬 상태 관리 기능을 제공합니다.

모든 데이터를 Apollo Client를 통해 관리하는 것은 통일된 인터페이스로 데이터에 접근하는 graphQL의 이점을 잘 살린 처사라고 볼 수 있습니다. 아폴로를 통해 서버와 로컬 데이터의 스키마를 Apollo Client Dev Tools와 GraphiQL을 통해 확인해보세요.

```tsx
const GET_DOG = gql`
    query GetDogByBreed($breed: String!) {
        dog(breed: $breed) {
            images {
                url
                id
                isLiked @client
            }
        }
    }
`;
```

극단적으로 Apollo Client의 로컬 데이터 활용 능력을 사용하면 당신은 client에서만 작동하는 필드를 서버데이터에 추가해줄 수 있고 컴포넌트에 내려줄 수 있습니다. 위 예시에서 isLike 필드 옆의 @client를 확인해보세요. 컴포넌트는 서버와 로컬 데이터가 합쳐진 데이터로 렌더링됩니다.

## [다양한 에코시스템](https://www.apollographql.com/docs/react/why-apollo/#vibrant-ecosystem)

Apollo Client는 시작하기는 쉽지만, 향상된 기능을 위해 확장가능합니다. 만약 app-specific middleware나 캐시 지속과 같은 @apollo/client가 다루지 않는 기능을 원한다면 Apollo Link 아키텍쳐를 통해 새로운 네트워크 스택을 붙힐 수 있습니다.

-   `[apollo3-cache-persist](https://github.com/apollographql/apollo-cache-persist)`: 간단한 Apollo Cache 저장 기능
-   `[apollo-storybook-decorator](https://github.com/abhiaiyer91/apollo-storybook-decorator)`: 리액트 스토리북을 Apollo Client로 감싸는 라이브러리
-   [AppSync by AWS](https://blog.apollographql.com/aws-appsync-powered-by-apollo-df61eb706183): Apollo Client를 활용한 AWS 실시간 graphql 클라이언트

당신의 데이터 관리 라이브러리로 Apollo Client를 선택했다면 당신은 방대한 커뮤니티의 도움 또한 받을 수 있습니다. [Apollo Client 포럼](https://community.apollographql.com/)에는 굉장히 많은 개발자들과 아이디어를 공유할 수 있습니다. 또한 [Apollo blog](https://blog.apollographql.com/)에서는 주기적으로 업데이트되는 좋은 예시들에 대한 글을 읽을 수 있습니다.

---
