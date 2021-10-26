---
sidebar_position: 6
title: 에러 처리(Error Handling)
---

# 에러 처리하기

---

[Apollo Docs](https://www.apollographql.com/docs/react/data/error-handling/#graphql-error-policies)를 의역 및 내용추가한 글입니다.

---

쿼리나 뮤테이션을 날리다보면 다양한 에러를 만날 수 있습니다. Apollo Client는 이런 에러들이 발생할 때 GQL타입과 Apollo 설정에 따라 에러를 처리할 수 있도록 도와줍니다. 저희 프로젝트에서는 아래에서 설명하는 에러들을 apollo client instanse에 기본설정으로 가장 앞단에서 잡아낸 다음 처리할 생각입니다. (아래 Error Link 설정 참고)

## 에러 종류

발생할 수 있는 에러는 두종류입니다. GraphQL errors or Network errors.

### 1. GraphQL Error

GraphQL 에러는 서버에서 GQL을 실행할 때 발생하는 에러입니다. 예를 들어 다음과 같은 에러가 발생할 수 있습니다.

-   문법 에러(Syntax error**) -** ex. 쿼리를 잘못 작성한 경우( bracket을 잘못 닫는 경우가 많음 )
-   유효성 검증 에러 (Validation Error) - ex. 서버에 존재하지 않는 필드를 요청한 경우
-   리졸버 에러(Resolver) - ex. an error occurred while attempting to populate a query field

만약 문법에러나 유효성 검증 에러가 발생하면 그 GQL은 틀린것이므로 서버는 해당 GQL을 아예 실행하지 않습니다. 근데 리졸버 에러면, 부분적으로 실행하고 실행된 값은 리턴해줍니다.

> Apollo Server Docs를 읽어보면 더 다양한 GQL Error에 대해 배울 수 있습니다!

위와 같은 GraphQL 에러가 발생하면, 서버는 에러에 대한 정보(어디서 무슨 에러가 났다)를 `errors` array에 담아서 보내줍니다. 아래는 에러가 발생한 Gql Response 예시입니다.

```tsx
{
  "errors": [
    {
      "message": "Cannot query field \"nonexistentField\" on type \"Query\".",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "extensions": {
        "code": "GRAPHQL_VALIDATION_FAILED",
        "exception": {
          "stacktrace": [
            "GraphQLError: Cannot query field \"nonexistentField\" on type \"Query\".",
            "...additional lines...",
          ]
        }
      }
    }
  ],
  "data": null
}
```

위에서 설명했듯 GQL에러 중 아예 실행을 리젝시켜버리는 경우(Validation Check나 Syntax error)는 400대 에러를 뱉고, Resolver error같이 실행은 하되 부분데이터만 내려주는 경우는 200을 리턴하지만 error도 같이 리턴합니다.

### 부분 데이터만 리턴해주는 경우

리졸버 에러가 발생한 경우는 GQL 쿼리가 부분적으로는 문제가 없다는 뜻이고, 정책에 따라 해당 부분은 리턴해줍니다. 일단 Apollo Client는 default값으로 해당 데이터를 무시하는데, 다른 정책을 쓰고 싶으면 errorPolicy값을 조정하면 됩니다(아래 나옴)

---

### 2. Network Error

네트워크 에러는 우리가 잘 아는 Http 통신 에러입니다. 400대 에러면 클라이언트가 잘못했다, 500대 에러면 서버가 잘못했다 라고 이해하면 편합니다.

> Ex)
> 400:요청이 이상하다. 401: 인증문제가 있다. 403: 권한이 없다 ..
> 500:서버에서 처리하다 뻑났다. 504: Timeout.

네트워크 에러가 발생하면 Apollo Client는 이 에러를 `error.networkError`필드에 담아서 내려줍니다. 만약 네트워크 에러에 따라 재시도 로직을 사용하려면 Apollo link를 이용하세요(맨 아래 설명 있음)

---

## GQL 에러정책 (Graphql Error Policy)

위에서 설명했듯이 만약 GQL 오퍼레이션이 리졸버 에러를 뱉는다면 서버는 부분적인 데이터와 에러를 같이 보내줍니다.

```tsx
{
  "data": {
    "getInt": 12,
    "getString": null
  },
  "errors": [
    {
      "message": "Failed to get string!",
      // ...additional fields...
    }
  ]
}
```

기본적으로 Apollo Client는 `error.graphQLErrors`배열에 담아서 error필드로 내려줍니다. 아래는 Apollo Client가 제공하는 리졸버 에러 처리 옵션입니다.

[옵션](https://www.notion.so/c10b5878ca3546b6b830c6c08d6abed0)

### errorPolicy 설정하기

아래 예시와 같이 options 객체에 errorPolicy를 명시하면 기능을 사용할 수 있습니다.

```tsx
const MY_QUERY = gql`
    query WillFail {
        badField # This field's resolver produces an error
        goodField # This field is populated successfully
    }
`;

function ShowingSomeErrors() {
    const { loading, error, data } = useQuery(MY_QUERY, { errorPolicy: 'all' });
    if (loading) return <span>loading...</span>;
    return (
        <div>
            <h2>Good: {data.goodField}</h2>
            <pre>
                Bad:
                {error.graphQLErrors.map(({ message }, i) => (
                    <span key={i}>{message}</span>
                ))}
            </pre>
        </div>
    );
}
```

위 예시는 errorPolicy 중 `all`을사용하여 부분데이터와 에러를 동시에 활용한 경우입니다.

---

## Apollo Link를 활용하여 고급기능 사용하기

Apollo link 라이브러리를 쓰면 추가적인 에러 핸들링 기능을 사용할 수 있습니다.

첫번째로, onError 링크를 링크체인에 추가하는 것입니다. onError 링크는 에러를 받아서 그에 따른 행동을 정의해놓는 것입니다.

아래 예시는 ApolloClient의 생성자에 2개의 link chain을 추가하는 경우입니다.

-   onError 링크는 GQL 오퍼레이션의 response값에서 graphQLErrors와 networkError를 확인합니다.
-   HttpLink는 GQL 오퍼레이션을 보내주는 링크입니다.

```tsx
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const client = new ApolloClient({
    // The `from` function combines an array of individual links
    // into a link chain
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
});
```

---

## 프로젝트에 적용해보기

저희 프로젝트도 Error Handling Link를 추가했습니다. 현재는 에러발생 시 GQL에러인지 Network 에러인지만 구분하여 콘솔을 찍지만, Network 에러라면 404 Page로 링킹하고, GraphQL에러면 종류에 맞게 에러메시지를 띄워주도록 바꿔야 합니다. (아직 생각중)

![스크린샷 2021-09-24 오후 10.08.29.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a877bb84-c1e0-49a7-97a1-6a6d8eea8a9b/스크린샷_2021-09-24_오후_10.08.29.png)

일단 Alert로 임시대처를 해두었습니다. GraphQL Error면 Error Occur ${message}를 띄우도록, Network Error면 그냥 Network Error Occur라고 Alert을 띄웁니다. 어떤 상황이 생기는지 한번 봅시다.

### 서버가 꺼져있는 경우

![스크린샷 2021-09-24 오후 10.08.11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6858e926-ae06-487e-b0e0-76fd91ce658a/스크린샷_2021-09-24_오후_10.08.11.png)

서버가 꺼져있는 경우엔 Network Error가 납니다. 연결조차 되지 않았기 때문입니다. 위 코드에서 설정해준대로 Network Error가 있는 경우는 Alert이 뜹니다.

### Validation Check에 걸린 경우

data fetch할 때 resolver에 Handling Function이 없어서 처리가 안되는(null을 return하는) Review Article을 호출해보겠습니다.

![스크린샷 2021-09-24 오후 10.12.25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c63375b8-069c-4db9-bca5-c3b7be9be159/스크린샷_2021-09-24_오후_10.12.25.png)

이런 경우엔 GraphQL Error가 납니다. 분명 Nullable이 아닌 데이터를 Fetch해보니까 Null이니 에러를 뱉는 것입니다. Validation Check Error에 해당하고 Network Error가 아닌 GraphQL Error에 해당하는 Alert이 나옵니다.

![스크린샷 2021-09-24 오후 10.18.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e80e1e21-6ddb-4103-99a8-5bf032593d05/스크린샷_2021-09-24_오후_10.18.52.png)

위 예시도 마찬가지입니다. Validation Check에서 걸립니다. Board_Type은 Enum이라서 미리 선언된 타입밖에 올 수 없는데 "멍멍" 게시판은 선언되지 않았기 때문에 Validation Check에서 걸려버린겁니다. 위와 마찬가지로 GraphQL Error가 발생해서 Alert이 발생했습니다.

![스크린샷 2021-09-24 오후 10.20.32.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97305450-48b4-4c26-8809-7de894912846/스크린샷_2021-09-24_오후_10.20.32.png)

또한 이 쿼리는 Client에서 잘못 보낸 쿼리입니다. variable을 서버와 약속한대로 보내지 않았기 때문에 Network Error 또한 같이 발생합니다. 그래서 뒤이어 Network Error Alert도 같이 떴습니다 (같이 뜨지 않게 하려면 GQL Error Occur 부분에서 return해버리면 됩니다)

---

### 재시도 로직

Apollo Link는 다시 시도했을 때 정상 작동할 수 도 있는데 방금 시도에서는 실패한 오퍼레이션을 재시도할 수 있게 도와줍니다. 어떤 에러가 발생했느냐에 따라 다른 옵션을 줘야합니다.

-   GraphQL Error가 발생했을 때 →  `onError`
-   Network Error가 발생했을 때 → `RetryLink`

구체적이 내용은 아래에 정리되어 있습니다.

### 1. [G](https://www.apollographql.com/docs/react/data/error-handling/#on-graphql-errors)raphQL Error가 발생했을 때 재시도 로직

onError는 발생한 GQL error의 타입에 따라 오퍼레이션을 재시도합니다. 예를 들어 token 기반 인증을 사용한다고 칩시다. 토큰이 만료되었다면 사용자는 영문도 모른 채 다시 로그인을 해야할 것입니다. 이럴 때 리프레시 토큰을 조회하고 아직 유효하다면 자동으로 재인증하도록 설정할 수 있습니다.

오퍼레이션을 재시도하기 위해 onError의 콜백함수에서 forward(operation)을 리턴해줘야합니다. 아래는 그 예제입니다.

```tsx
onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        for (let err of graphQLErrors) {
            switch (err.extensions.code) {
                // Apollo Server sets code to UNAUTHENTICATED
                // when an AuthenticationError is thrown in a resolver
                case 'UNAUTHENTICATED':
                    // Modify the operation context with a new token
                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                        headers: {
                            ...oldHeaders,
                            authorization: getNewToken(),
                        },
                    });
                    // Retry the request, returning the new observable
                    return forward(operation);
            }
        }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});
```

> 만약 재시도된 오퍼레이션이 또 에러를 뱉는다면, 이건 다시 무한호출되는 것을 막기 위해 다시 onError 로직을 타지 않습니다. 즉, 재시도 로직은 1회만 발생합니다.

만약 재시도를 원하지 않는다면 onError의 함수에서 아무것도 리턴하지 않으면 됩니다.

### 2. Network Error 발생했을 때 재시도 로직

네트워크 에러가 났을 때, 쿼리를 다시 실행하려면 RetryLink를 link chain에 추가하는 것을 권고합니다. 이 링크는 최대 호출횟수나 exponential backoff과 같은 재시도 로직을 짤 때 사용합니다ㅣ.

### 에러 무시하기

조건에 따라 에러를 무시하고 싶을 땐 쿼리의 onError값을 받아 response.errors를 null로 설정하면 됩니다.

```tsx
onError(({ response, operation }) => {
    if (operation.operationName === 'IgnoreErrorsQuery') {
        response.errors = null;
    }
});
```
