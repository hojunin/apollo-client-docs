---
sidebar_position: 1
---

# Apollo Client 시작하기

---

### [Apollo Docs](https://www.apollographql.com/docs/react/)를 번역 및 의역한 내용입니다.

---

아폴로 클라이언트는 local(Cache)과 remote(Server)를 동시에 아우르는 JS를 위한상태 관리 라이브러리입니다. Apollo Client를 사용하여 데이터를 당겨오고, 수정하는 과정 속에서 당신의 웹앱의 UI가 자동으로 업데이트 됩니다.

아폴로 클라이언트는 현대 개발 방식과 같이 효율적이고 예측 가능하면서 명확한 방식으로 코드를 구성할 수 있게 해줍니다. Apollo Client의 코어인 @apollo/client 라이브러리는 React와 다른 FE FrameWork(Vue, Angular..)들을 위한 기능들이 이미 구현되어 있습니다.

## 특징

-   명확한 데이터 가져오기 : 따로 추적하지 않아도 쿼리만 작성하면 데이터가 불러와집니다.
-   양질의 개발자 경험 : TypeScript와 Chrome, Firefox DevTools, VSCode에서 제공하는 Apollo 기능들을 활용하여 개발을 즐겨보세요
-   최신 리액트를 위한 디자인 : 훅과 같은 최신 리액트의 이점을 살려보세요
-   증가하는 범용성 : 어떤 JS 앱에서든 Apollo를 활용해봇베요.
-   확장성 : 어떤 GraphQL API든 ?
-   커뮤니티 : GraphQL 커뮤니티에서 다양한 개발자들과 소통해보세요.

---

## 추천하는 문서

윗 부분을 다 읽으셨다면 Apollo에서 제공하는 문서를 확인해보세요. 우리는 특히 이런 문서들을 추천드립니다.

-   **[쿼리](https://www.apollographql.com/docs/react/data/queries/)와[뮤테이션](https://www.apollographql.com/docs/react/data/mutations/)** : graphQL을 활용하여 데이터를 읽거나 쓰는 기능입니다.
-   **[캐싱](https://www.apollographql.com/docs/react/caching/overview/)** : 아폴로 클라이언트의 데이터가 이미 로컬 캐시에 저장되어 있다면 서버를 거치지 않고 데이터를 읽어오는 정형화된 캐시입니다.
-   **[로컬 상태 관리](https://www.apollographql.com/docs/react/local-state/local-state-management/) :** 아폴로 클라이언트는 당신의 어플리케이션의 상태를 통합 관리할 수 있도록 서버(remote)와 캐시(local)에서 데이터를 관리할 수 있는 API를 제공합니다.
-   **[기본 HTTP 네트워킹](https://www.apollographql.com/docs/react/networking/basic-http-networking/)** : 당신의 쿼리에서 커스텀 헤더나 다른 인증 메타데이터를 보낼 수 있는지 배울 수 있는 페이지입니다.
-   **[리액트 컴포넌트 테스트하기](https://www.apollographql.com/docs/react/development-testing/testing/)** : 서버와의 통신 없이 GraphQL 동작을 시험해보세요

---

이 문서는 리액트에 초점을 맞추고 있으나 Apollo Client는 많은 라이브러리와 프레임워크, 언어를 지원합니다.

### JavaScript

-   Angular
-   Vue
-   Svelte
-   Ember
-   Meteor

### Web Component

-   Apollo Elements

### Native Mobile

-   IOS (Swift)
-   안드로이드 (Java or Kotlion)
