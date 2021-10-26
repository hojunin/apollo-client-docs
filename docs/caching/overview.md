---
sidebar_position: 1
title: 캐시 개념잡기
---

# Apollo에서 Cache란 무엇일까요?

---

[Apollo Docs](https://www.apollographql.com/docs/react/caching/overview/)를 번역 및 의역한 내용입니다.

---

아주 간단하게 생각해서 Apollo Client가 데이터를 달라고 요청을 보내면 데이터를 가져올 수 있는 선택지는 두가지 밖에 없습니다. 첫번째는 Cache이고, 두번째는 Graphql Server입니다. 두 곳은 다음과 같은 특징이 있습니다.

1. Cache : 매우 빠르다. 하지만 실제 데이터와 다를 수 있다. (동기화가 안되어있을 수 있다)
2. Graphql Server : 속도가 느리다. 서버를 다녀오는 부하도 있다. 하지만 실제 데이터를 직접 가져온다.

그렇기 때문에 우리는 최대한 Cache를 활용해야 하고(성능을 위해), 실제 데이터와 다를 수 있는 부분을 생각하여 GraphQL Server를 다녀오는 횟수를 최소한으로 줄여야 합니다.

---

Apollo Client는 Graphql 쿼리의 결과를 in-memory cache에 정규화된 형태로 저장합니다. 그래서 이미 캐쉬된 데이터를 읽어올 땐 서버에 다녀오지 않고도 즉각 읽어올 수 있는겁니다.

예를 들어서 id가 5인 Book 객체를 처음 호출했다고 가정해봅시다. Apollo client는 이 요청을 다음과 같은 흐름으로 처리할겁니다.

![스크린샷 2021-09-06 오전 8.20.54.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c01413d0-7e4d-4486-9ea8-99907fa39930/스크린샷_2021-09-06_오전_8.20.54.png)

Apollo Client는 id가 5인 Book 객체가 cache에 있는지 확인해봅니다. 첫 호출이니 당연히 없습니다. 그렇다면 GraphQL 서버로 가서 해당 데이터를 가져옵니다. 중간에 cache에 들러 해당 데이터를 cache에도 업데이트 해두고, 이 데이터를 Client에 돌려줍니다.

그리고 이 최초요청 이후에 똑같이 id가 5인 Book 객체를 호출한다면 위의 Flow와 다르게 다음과 같이 처리합니다.

![스크린샷 2021-09-06 오전 8.21.12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/02b19919-7091-4440-8a66-0c771984d799/스크린샷_2021-09-06_오전_8.21.12.png)

Apollo Client는 id가 5인 Book 객체가 cache에 있는지 확인합니다. 아까 최초 요청때 서버에 다녀와서 캐싱해둔 데이터가 존재합니다. 그렇다면 서버를 다녀오지 않아도 됩니다. 그냥 캐시에 있는 데이터를 바로 리턴해줍니다.

---

Apollo Client Cache는 굉장히 많은 옵션을 제공하고, 이에 따라 cache의 동작 방식을 커스터마이징 할 수 있습니다. Graphql 서버를 다녀오지 않고도 타입 하나하나, 필드 하나하나의 동작을 컨트롤 할 수 있고, 직접 캐시에 저장하거나 변경하는 기능도 제공합니다.

## Cache에 데이터가 저장되는 방식

Apollo Client가 제공하는 `InMemoryCache`는 서로가 서로를 참조할 수 있는 flat lookup table형태로 유지됩니다.

flat lookup table : 간단히 말해, Deps가 1인 Object의 Array라고 이해하면 좋습니다 (Javascript의 .flat()함수를 생각해보세요)

이 객체들은 GraphQL 쿼리가 리턴하는 객체의 필드들을 재구성한 데이터들입니다. 예를 들어 만약에 여러 쿼리가 동일한 id의 객체를 수정하는 쿼리들이었다면 그 하나의 캐시된 데이터는 여러개의 쿼리가 리턴한 데이터들의 자잘한 수정값들을 모두 반영한 데이터일 수도 있습니다.

cache는 flat합니다. (flat하다는 것은 deps가 1이라는 뜻입니다) 하지만 gql이 리턴한 객체는 그렇지 않아요. 사실상 deps가 제멋대로입니다. 다음의 예시는 어떤 쿼리가 리턴한 결과값입니다.

```tsx
{
  "data": {
    "person": {
      "__typename": "Person",
      "id": "cGVvcGxlOjE=",
      "name": "Luke Skywalker",
      "homeworld": {
        "__typename": "Planet",
        "id": "cGxhbmV0czox",
        "name": "Tatooine"
      }
    }
  }
}
```

결과값을 간단히 살펴보면 data에는 `person` 객체를 담고 있습니다. 이 person 객체는 여러 필드를 리턴하지만 그 중 `homeworld` 필드가 `planet` 객체를 리턴합니다. 보시다시피 대부분의 JSON이 그러하듯 deps가 3인, 계층적 구조를 띄고 있습니다.

이런 계층적 데이터를 `InMemoryCache`는 어떻게 flat lookup table에 저장할까요? 정답은 정규화(normalize)에 있습니다.

### 데이터 정규화

Apollo client가 GQL이 리턴한 데이터를 받을 때 다음과 같은 과정을 거칩니다.

### [1.](https://www.apollographql.com/docs/react/caching/overview/#1-identify-objects) 객체 확인

가장 먼저 cache는 쿼리의 결과값에서 객체단위로 구분합니다. 바로 위의 예시를 다시 이용해보면, id가 `cGvvcGx10jE=`라는 `id`를 가진 `Person` 객체가 있었고, `cGxhbmV0czox`라는 `id`를 가진 `Planet` 객체가 있었죠. 캐시는 먼저 쿼리를 파싱해서 id로 어떤 Object들이 있는지 확인합니다.

### [2.](https://www.apollographql.com/docs/react/caching/overview/#2-generate-cache-ids) cache id 발급하기

cache는 이렇게 쿼리에서 객체들을 분류해낸 다음, 각각의 객체에게 cache ID라는 것을 발급합니다. cache ID는 `InMemoryCache`에서 각각의 객체에게 부여되는 고유ID입니다.

기본적으로 cache ID 생성규칙은 간단합니다. \_\_typename 필드의 값과 id를 콜론(:)으로 이어붙힌겁니다(\_id도 가능)

위의 예시를 따르면 아래와 같은 cache ID를 발급받습니다.

-   `Person:cGVvcGxlOjE=`
-   `Planet:cGxhbmV0czox`

저희 서버의 데이터를 한번 보겠습니다.

![스크린샷 2021-09-06 오전 8.49.53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec51e118-865b-4eb8-8e04-e6700b5f86b4/스크린샷_2021-09-06_오전_8.49.53.png)

id: "11" , \_\_typename : "User"

사진의 상단에, 발급된 Cache ID를 보면 위에 설명된대로 발급되었다고 볼 수 있습니다.

> Cache ID를 커스터마이징 하실 수도 있지만, 딱히 문제가 없다면 그냥 쓰셔도 됩니다.

만약에 cache가 **typename 필드가 있는데도 해당 객체의 cache ID를 발급하지 않는다면 그 객체는 부모 객체에 직접 참조된 상태인 것입니다. 예를 들면 위 사진의 info 필드의 객체를 예로 들 수 있습니다. 실제로 확인해보면 아래와 같이 User 데이터만 cache되고, 엄연히 **typename필드가 있는 UserInfo 객체는 cache되지 않은 것을 볼 수 있습니다.

![스크린샷 2021-09-06 오전 8.55.25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2de0c337-3d4c-455b-b4b6-d8af99dd9d27/스크린샷_2021-09-06_오전_8.55.25.png)

그래서 cache는 엄밀히 말하자면 100% flat한 구조는 아닌겁니다 (이에 대해선 왜 그런지 엄격하게 알아볼 필요가 있는데 아직 모르겠쓰으읍니다)

### [3.](https://www.apollographql.com/docs/react/caching/overview/#3-replace-object-fields-with-references) 객체를 \_\_ref값(참조 객체 아이디)로 변경하기

3번째로, cache는 다른 타입이 아닌 객체를 담고 있던 field의 값을 객체가 아닌 참조 ID로 변경합니다.

예를 들어 위의 예시에서 `Person` 객체에서 `homeworld`필드는 `Planet`객체를 담고 있었습니다. 이 값을 cache된 Planet 객체의 cache ID를 담고 있는 \_\_ref라는 필드로 대체합니다. 아래 Before & After를 확인해주세요.

-   Before

```tsx
{
  "__typename": "Person",
  "id": "cGVvcGxlOjE=",
  "name": "Luke Skywalker",
  "homeworld": {
		"__typename": "Planet",
    "id": "cGxhbmV0czox",
    "name": "Tatooine"
	}}
```

-   After

```tsx
{
  "__typename": "Person",
  "id": "cGVvcGxlOjE=",
  "name": "Luke Skywalker",
  "homeworld": {    "__ref": "Planet:cGxhbmV0czox"  }}
```

> 이 변경과정은 이전 단계에서 cache ID생성에 실패한다면 진행되지 않습니다. 그 대신 그 객체가 그대로 남습니다.

이후에 만약 똑같은 homeworld 필드를 가진 다른 Person객체가 호출되었을 때 정규화된 Person객체는 아까 생성된 Planet객체의 cache ID를 참조하고 있을 것이므로 두번 일하지 않게 되는것입니다. 또한 서버와 동기화 또한 자동으로 진행되겠지요.

### [4.](https://www.apollographql.com/docs/react/caching/overview/#4-store-normalized-objects) 정규화된 객체 저장하기

3번 과정에서 생성된 객체는 비로소 cache의 flat lookup table에 저장됩니다.

Apollo Client가 쿼리를 보냈을 때 Graphql 서버로부터 같은 cache ID를 가진 객체가 들어오면 해당 필드의 객체는 다음의 규칙을 참고하여 합쳐(merged)집니다.

-   만약 서버에서 들어온 데이터와 이미 캐시에 존재하는 객체가 어떤 field를 공유한다면 서버의 데이터가 캐시의 데이터를 덮어씁니다(override)
-   만약 어떤 field들이 캐시된 데이터엔 없지만 서버에서 온 데이터에는 존재하는 경우, 혹은 캐시된 데이터엔 있는데 cache된 데이터엔 없다면 그 field는 건들지 않습니다(보존됩니다)

---

결론적으로 정규화 구조는 client의 변화에 능동적으로 대처할 수 있도록, 읽기에 최적화된 형태로 gql 데이터의 부분적인 복사본을 구축합니다.

## Cached Data를 직접 확인하기

이 구조를 명확히 눈으로 보고 확인하려면 Apollo Dev Tools을 설치하시면 됩니다. 실제로 호출한 쿼리의 Object List가 좌측에, Normalize된 데이터가 우측에 나옵니다.

---

## 설치방법

1. [이 링크](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm)로 들어가서 구글 크롬 확장프로그램 설치.
2. Client를 실행하고 구글 디버거 켜기 (cmd+shift+j)
3. 아래 그림처럼 우측 상단 Apollo 탭 누르기

![https://www.apollographql.com/docs/react/22e1f98e0ea11849ee24813de8edeac2/cache-inspector.jpg](https://www.apollographql.com/docs/react/22e1f98e0ea11849ee24813de8edeac2/cache-inspector.jpg)
