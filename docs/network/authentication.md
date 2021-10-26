---
sidebar_position: 3
title: Apollo 인증방식
---

# Apollo Client 인증방식

---

[Apollo Docs](https://www.apollographql.com/docs/react/networking/authentication/)를 번역 및 의역한 내용입니다.

우리가 활용하는 모든 데이터가 개방되어있다고 하더라도 서비스되는 어플리케이션의 측면에서는 사용자나 계정, 권한과 같은 민감한 사안들이 있습니다. 만약 우리 서비스에서 다양한 유저들이 각기 다른 권한을 가지고 있다고 한다면 우리는 서버에 요청을 보낼 때마다 해당 유저가 어떤 권한을 가진 유저인지를 알려줄 필요가 있습니다. Apollo Client는 인증의 측면에서 정말 유연하게 사용할 수 있는 Apollo Link를 기본적으로 제공합니다.

Apollo Client에서 인증을 구현하는 방식은 2가지가 있습니다. 첫번째는 Cookie를 활용하는 방식이고 두번째는 Header를 활용하는 방식입니다.

## 1. Cookie

만약 우리 서비스가 브라우저 기반이고 쿠키를 로그인이나 세션관리에 사용한다면 모든 요청에 쿠키를 보내야함을 공유해야 합니다. 만약 같은 도메인이라면 `credential` 옵션을 `same-origin`으로, 반대로 다른 도메인이라면 `include`를 넘겨서 http link를 만들고 이를 Apollo Client 인스턴스를 생성할 때 link 옵션으로 넘겨주면 됩니다. 아래 코드를 참고하세요.

```tsx
const link = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin',
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});
```

이 옵션은 쿼리를 보낼 떼 HttpLink가 사용하는 `[fetch` implementation](https://github.com/github/fetch) 에 의해 사용됩니다.

서버에서도 클라이언트 origin에 맞게 꼭 credential을 허용 해놔야합니다. 만약 cors 패키지를 사용한다면 아래 세팅을 사용하세요

```tsx
// enable cors
var corsOptions = {
    origin: '<insert uri of front-end domain>',
    credentials: true, // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));
```

## 2. Hedaer

흔히 쓰이는 다른 방법 중 하나는 http로 요청을 보낼 때 header에 스스로를 인증하는 방법입니다. 모든 HTTP요청에 authorization 헤더를 담아서 Apollo Link에 담아 보내는 방식입니다. 아래 예시는 어떤 요청dmf 보낼 때마다 LocalStorage에서 Token을 꺼내서 헤더에 담아 보내는 과정입니다.

```tsx
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // LocalStorage에서 미리 저장해둔 토큰을 꺼내옵니다.
    const token = localStorage.getItem('token');
    // 만약 저장해둔게 없다면 비워두고 있으면 헤더에 토큰을 실어 보냅니다.
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
```

서버는 이 헤더에서 사용자의 인증정보를 GraphQL 쿼리의 컨텍스트에 붙히고, resolver는 이 컨텍스트에서 사용자의 권한이나 role(계급이나 역할)을 확인하고 그에 맞는 동작을 하게됩니다.

## 로그아웃할 때 캐시 비우기

Apollo가 모든 쿼리 결과값을 캐싱하기 시작한 이래로 사용자의 로그인 상태에 따라 캐시값을 전부 지우는 것이 굉장히 중요해졌습니다.

가장 직관적인 방법은 로그인이나 로그아웃이 문제없이 진행되었을 때 `client.resetStore()`를 호출하는겁니다. 이 함수가 호출되면 store(cache)는 싹 비워지고 모든 쿼리는 refetch(refresh)됩니다. 만약 store만 비우고 싶은거라면 client.clearStore()을 호출하시면 됩니다. 이러면 쿼리 refetch는 실행되지 않아요. 또다른 방법은 그냥 페이지를 reload하는것입니다.

```tsx
const PROFILE_QUERY = gql`
    query CurrentUserForLayout {
        currentUser {
            login
            avatar_url
        }
    }
`;

function Profile() {
    const {
        client,
        loading,
        data: { currentUser },
    } = useQuery(PROFILE_QUERY, { fetchPolicy: 'network-only' });

    if (loading) {
        return <p className="navbar-text navbar-right">Loading...</p>;
    }

    if (currentUser) {
        return (
            <span>
                <p className="navbar-text navbar-right">
                    {currentUser.login}
                    &nbsp;
                    <button
                        onClick={() => {
                            // call your auth logout code then reset store
                            App.logout().then(() => client.resetStore());
                        }}
                    >
                        Log out
                    </button>
                </p>
            </span>
        );
    }

    return (
        <p className="navbar-text navbar-right">
            <a href="/login/github">Log in with GitHub</a>
        </p>
    );
}
```
