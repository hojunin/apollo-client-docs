---
sidebar_position: 4
title: 구독(Subscription)
---

# 구독(Subscriptions)

---

[Apollo Docs](https://www.apollographql.com/docs/react/data/subscriptions/)를 번역 및 의역한 내용입니다.

---

GraphQL은 [queries](https://www.apollographql.com/docs/react/data/queries/) and [mutations](https://www.apollographql.com/docs/react/data/mutations/)에 이어 3번째로 Subscription이라는 기능을 제공합니다.

query나 mutation처럼 subscription도 graphql server로부터 데이터를 가져오는(fetch) 기능을 합니다. 하지만 query와는 다르게 subscription은 오래 지속되면서 변화하는 결과값을 계속 보내줍니다. 대부분 웹소켓을 사용하여 graphql 서버와 연결을 유지하고 서버가 변경된 사항을 추적하여 해당 사항을 클라이언트로 쏴줍니다(push)

Subscription은 클라이언트에 알림을 보내는 작업과 같이 실시간으로 처리해야하는 목적에 부합하는 타입의 연산입니다

## 왜 굳이 Subscription을 사용해야하나요?

대부분의 경우 클라이언트가 항상 모든 렌더링 데이터를 서버에 맞춰 최신 데이터로 유지하려고 Subscription을 사용하진 않습니다. 그러고 싶으면 일정 주기마다 쿼리를 날리는 Polling이나 버튼 클릭과 같은 특정 트리거에 결부해 다시 데이터를 쿼리하는 refetching 함수를 쓰죠.

하지만 다음의 경우엔 Subscription을 써야합니다.

-   큰 객체에서 작은 변화를 감지할 때. 큰 데이터에서 작은 데이터 변화를 감지하려고 1초에 1회씩 서버를 호출한다고 생각해보면, 가져오는 객체가 거대하기 때문에 손해입니다. 대신에, 일단 객체의 최초 상태를 쿼리로 가져오고 나머지 업데이트 과정은 서버가 바뀐 field만 내려보내(push) 줄겁니다.
-   호출시간이 작고 실시간 업데이트가 필요한 작업을 할 때. 예를 들어 채팅이 있겠습니다. 엄청냔 량의 대화 데이터 리스트 중 하나가 새로 추가된다고 생각해봅시다. refetching은 애초에 데이터가 왔는지도 모르니 사용할 수 없고, polling은 너무 부하가 큽니다.

## Subsciprion 정의하기

query나 mutation과 마찬가지로 Subscription도 정의할 때 서버와 클라이언트 단 둘다 정의해주셔야 합니다.

### 서버 파트

Subscriptioin 할 대상이 되는 스키마에 Subscription 타입으로 정의해줍니다.

아래 보이는 예시의 commentAdded는 구독하고 있는 client에게 인자로 넣어준 postID에 해당하는 글에 새로운 코멘트가 생성되면 알림을 보낸다는 뜻의 subscription 정의입니다.

```tsx
type Subscription {
  commentAdded(postID: ID!): Comment
}
```

서버 쿼리 정의에 대해 이보다 더 자세한 내용은 Apollo Server Docs에 설명되어 있습니다.

### 클라이언트 파트

클라이언트 단에서는 쿼리를 다음과 같이 구성하시면 됩니다.

```graphql
const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;
```

Apollo Client가 onCommentAdded를 실행하면 GraphQL 서버가 내려줄 데이터를 위해 listening을 시작합니다. 다만 쿼리와 다르게 즉각 데이터를 내려보내주는 건 아니고, 서버 단에서 뭔가 변화가 있을 때 보내줍니다.

GQL 서버가 데이터를 보내기(push) 시작하면 그 데이터는 아래와 같은 구조로 내려받게됩니다. data 필드 아래subscription 이름이 있고, 그 아래 받기로 했던 field들이 있는 것입니다.

```graphql
{
  "data": {
    "commentAdded": {
      "id": "123",
      "content": "What a thoughtful and well written post!"
    }
  }
}
```

---

## [Subscription](https://www.apollographql.com/docs/react/data/subscriptions/#setting-up-the-transport)을 위한 준비

Subscription이 지속적으로 서버와 연결을 해야하는 특성 때문에 query나 mutation을 위해 사용했던 기본 HTTP 통신을 쓸 수 없습니다. 그 대신에 Apollo Client Subscription은 가장 잘 알려진 실시간 통신 방식인 WebSocket을 쓰겠습니다([subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws))

### 1.필요한 패키지를 설치합니다.

[Apollo Link](https://www.apollographql.com/docs/react/api/link/introduction/) 는 Apollo Client의 네트워크 관리를 도와주는 라이브러리입니다. 권고사항입니다.

WebSocket으로 Subscription을 이용하려면 우리 link chain에 WebSoketLink를 추가해야합니다. 이 링크는 subscription-transport-ws 라이브러리를 필요로합니다. 그러므로 이걸 설치합니다.

```bash
npm install subscriptions-transport-ws
```

### 2. WebSocketLink를 초기화합니다.

ApolloClient를 생성했던 파일(index.js)에 WebSocketLink 객체를 생성하고 초기화합니다

```tsx
//index.js
import { WebSocketLink } from '@apollo/client/link/ws';

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/subscriptions',
    options: {
        reconnect: true,
    },
});
```

여기서 ApolloClient 객체의 uri와 다른점은 GraphQL서버의 ws://로 시작하는 subscription 전용 엔드포인트를 넣어주셔야 한다는 점입니다. Apollo Server를 사용중이라면 이 [독스](https://www.apollographql.com/docs/apollo-server/data/subscriptions/#setting-a-subscription-endpoint)를 참고해주세요

### 3. Split communication by operation (recommended)

Although Apollo Client *can* use your `WebSocketLink` to execute all operation types, in most cases it should continue using HTTP for queries and mutations. This is because queries and mutations don't require a stateful or long-lasting connection, making HTTP more efficient and scalable if a WebSocket connection isn't already present.

To support this, the `@apollo/client` library provides a `split` function that lets you use one of two different `Link`s, according to the result of a boolean check.

The following example expands on the previous one by initializing both a `WebSocketLink` *and* an `HttpLink`. It then uses the `split` function to combine those two `Link`s into a *single* `Link` that uses one or the other according to the type of operation being executed.

```tsx
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/subscriptions',
    options: {
        reconnect: true,
    },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
);
```

Using this logic, queries and mutations will use HTTP as normal, and subscriptions will use WebSocket.

### [4. Provide the link chain to Apollo Client](https://www.apollographql.com/docs/react/data/subscriptions/#4-provide-the-link-chain-to-apollo-client)

After you define your link chain, you provide it to Apollo Client via the `link` constructor option:

index.js

**Copy**

```tsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

// ...code from the above example goes here...

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});
```

> If you provide the link option, it takes precedence over the uri option (uri sets up a default HTTP link chain using the provided URL).

### [5. Authenticate over WebSocket (optional)](https://www.apollographql.com/docs/react/data/subscriptions/#5-authenticate-over-websocket-optional)

It is often necessary to authenticate a client before allowing it to receive subscription results. To do this, you can provide a `connectionParams` option to the `WebSocketLink` constructor, like so:

**Copy**

```tsx
import { WebSocketLink } from '@apollo/client/link/ws';

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/subscriptions',
    options: {
        reconnect: true,
        connectionParams: { authToken: user.authToken },
    },
});
```

Your `WebSocketLink` passes the `connectionParams` object to your server whenever it connects. If your server has a [SubscriptionsServer](https://www.apollographql.com/docs/graphql-subscriptions/authentication) object that's listening for WebSocket connections, it receives the `connectionParams` object and can use it to perform authentication, along with any other connection-related tasks.
