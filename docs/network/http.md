---
sidebar_position: 1
title: Apollo HTTP 기본
---

# **Apollo HTTP 기본**

---

[공식 문서](https://www.apollographql.com/docs/react/networking/basic-http-networking/)를 번역 및 의역한 내용입니다.

---

## **GraphQL 서버와 HTTP 통신하기**

---

사실 이미 Apollo Client에는 HTTP로 Graphql 서버와 통신할 준비가 다 되어있습니다. 최초 튜토리얼에서 ApolloClient 인스턴스를 생성할 때 간단히 http로 시작하는 uri만 넘겨주면 됩니다.

```graphql
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com',
  cache: new InMemoryCache()
});
```

## Credential 옵션 부여하기

credential은 Client단에서 인증이나 권한 등을 위해 HTTP 헤더나 요청에 끼워 보내주는 데이터라고 생각하면 됩니다. 이 값을 보낼 때 조금 더 엄격하게 관리할 수도 있고, 인증을 사용하지 않을 수도 있으며 적당히 주고받을 수도 있습니다.

Apollo Client에서는 HTTP요청을 보낼 때 기본적인 인증이나 쿠키 활용등을 위해 credential이라는 옵션값을 부여할 수 있습니다. 기본적으로 credential은 Same Origin일때만 included입니다. 만약 이 값을 조정하고 싶으면 아래 코드와 같이 ApolloClient 인스턴스에 옵션으로 credential 값을 부여해주면 됩니다.

Same Origin이란 같은 host에서 웹 어플리케이션과 서버가 서비스되고 있을 때를 말합니다. 반대 개념은 Cross Origin입니다.

```graphql
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com',
  cache: new InMemoryCache(),
  // Enable sending cookies over cross-origin requests
  credentials: 'include'
});
```

아래 3가지 타입의 credentials 을 제공합니다.

[credentials](https://www.notion.so/4d040dd82ea241d597e629a998a9f8bc)

## 헤더 커스터마이징

ApolloClient 인스턴스를 생성할 때 `headers` 옵션에 여러 값을 넣어서 커스터마이징 할 수 있습니다. 아래 코드에서는 인증을 위해 localStorage에 보관중이던 토큰을 읽어와서 넣어줬고, client name, version도 헤더에 넣고 있습니다. 이제 모든 Graphql 요청에 이 헤더가 붙어서 날아갈 것이고, 서버는 이걸 받아서 사용자 권한이나 인증 등을 처리할 것입니다.

```graphql
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token'),
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0'
  }
});
```
