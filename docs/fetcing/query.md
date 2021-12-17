---
sidebar_position: 1
title: 쿼리(query)
---

---

[Apollo Docs](https://www.apollographql.com/docs/react/data/queries/)를 번역 및 의역한 내용입니다.

---

이 글은 React에서 useQuery Hook으로 어떻게 데이터를 가져오는지(fetch)에 대해 설명합니다. 이 글을 통해 Apollo Client가 얼마나 데이터를 코드를 쉽게 관리하도록 하는지 배우실 수 있습니다.

## 사전 지식

이 글은 앞선 튜토리얼을 통해 기본적으로 graphql 쿼리에 어느정도 적응되어있고 Apollo Client 세팅을 끝마쳤으며 React 앱을 ApolloProvider 컴포넌트로 감싸놨다고 가정합니다.

## 쿼리 실행

useQuery 리액트 훅은 apollo 앱에서 쿼리를 구현하는 가장 중요한 API입니다. 리액트 컴포넌트 안에서 쿼리를 실행하기 위해서는 useQuery를 사용해야하고 이걸 graphql 쿼리문에 넘겨줘야합니다. 앱의 컴포넌트가 렌더링될 때 useQuery는 loading, error, data라는 값을 가진(받는 값이 더 많긴 합니다) Apollo Client의 객체 덩어리 하나를 리턴받습니다.

공식 문서의 예제를 봅시다. 첫번째로 `GET_DOGS`라는 GraphQL Document를 생성합니다. gql 함수로 쿼리스트링을 감싸준다는 점을 꼭 기억하세요.

```graphql
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
```

다음으로 `Dogs`라는 함수형 컴포넌트를 만들껍니다. 이 안에서 GET_DOGS 쿼리를 useQuery 훅을 통해 넘겨줍니다.

```graphql
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}
```

위의 쿼리가 실행되면서 loading, error, data가 변화합니다. Dogs라는 컴포넌트는 이 값이 변화함에 따라 받은 값에 맞춰 변화된 UI를 리턴합니다. 예를 들어 loading이면 단순히 string 값을 리턴하고, error 값이 true면 에러메시지를 리턴합니다. 두 값 다 false라면 data가 들어왔을테니, 이 data 값에 따라 우리가 만든 DropDown Component가 리턴됩니다.

사용자가 dog라는 데이터 중 하나를 선택하면 onDogSelected 함수가 실행됩니다. 다음 과정에서는 더 긴밀히 연관된 graphql 변수를 사용하는 query에 대해 알아보겠습니다.

---

## 쿼리 결과 캐싱

Apollo Client가 쿼리 결과를 서버에서 읽어올 때마다 이 결과값을 자동으로 로컬저장소 격인 캐시에 저장합니다. 이는 이 다음에 똑같은 쿼리를 콜 했을 때 결과를 획기적으로 빠르게 처리하도록 해줍니다.

실제로 캐싱이 이루어지는 것을 확인하기 위해 DogPhoto라는 새로운 컴포넌트를 만들어봅시다. 이 컴포넌트는 아까 만든 Dogs라는 DropDown 메뉴의 값에 영향을 주는 breed라는 prop을 받습니다(선택하면 리스트가 렌더링하는 데이터가 달라진다는 뜻)

```graphql
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
```

여기서 눈여겨봐야할 점은 useQuery 훅 안에 **variables**라는 명시적인 옵션을 주었다는 점 입니다. 이 variables라는 옵션은 우리가 graphql쿼리에 넘겨주고싶은 모든 변수가 담겨있는 객체입니다.
이 쿼리에서는 현재 선택된 breed(품종)라는 변수를 넘기고 싶은겁니다.

Dogs(드롭다운 컴포넌트 라고 가정)에서 'bulldog'이라는 값을 클릭해서 선택합시다. 그럼 불도그 사진이 렌더링 될거에요. 그 다음 아무거나 다른 사진을 클릭하시고, 다시 bulldog라는 값을 선택해보세요. 그러면 bulldog이라는 값이 breed변수로 넘겨지고 bulldog 사진이 즉각 렌더링된 것을 볼 수 있습니다. 아까 불러왔던 bulldog를 또 부르니 cache에서 빠르게 데이터를 가져온 것입니다. Apollo cache가 잘 작동한 것이죠.

## 캐시 업데이트

쿼리 결과를 캐싱하는것을 조작하는 일은 아주 쉽습니다. 하지만 종종 캐시된 데이터가 서버랑 동기화된 수준으로 최신 버전이길 원할 수 있어요. Apollo Client는 그래서 두가지 전략을 제시합니다. 바로 **풀링(Pooling)**과 **리페칭(Refetching)**입니다.

## **풀링(Polling)**

풀링은 정해진 주기로 쿼리를 주기적으로 발생시켜 거의 실시간으로 서버와 캐시를 동기화하는 방법입니다. 쿼리를 풀링하기 위해서는 pollInterval이라는 milliseconds 단위의 옵셔널한 값을 useQuery 훅에다가 넘겨줘야해요.

```graphql
function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    pollInterval: 500,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
```

위 코드를 보면, pollInterval을 500으로 세팅함으로써 현재 품종의 강아지 사진을 서버에서 0.5초마다 한번씩 받아옵니다.
주의할 점은 만약 완벽한 실시간을 원해서 pollInterval을 0으로 세팅하면 풀링이 발생하지 않는다는 점입니다.

-   startPolling과 stopPolling이라는 옵션을 추가로 부여해서 동적으로 쿼리를 시작하고 종료시킬 수도 있습니다.

## **리페치(Refetch)**

리페치는 특정 주기마다 쿼리 결과를 최신화하는것과 반대로, 사용자의 특정한 액션에 맞추어 쿼리 결과를 최신화하는 방법입니다.
클릭할 때마다 쿼리를 리페치하는 버튼인 DogPhoto라는 버튼 컴포넌트를 추가해봅시다.
쿼리의 리턴값 중 data, error, loading 말고도 refetch라는 함수를 제공받을 수 있습니다. 만약 이전처럼 이걸 받지 않는다면, 쿼리는 이전과 같은 변수를 계속 사용할껍니다(최신화를 시켜도 계속 같은것만 가져온다는 말입니다)

```graphql
function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}
```

버튼을 클릭하면 새로운 강아지의 사진으로 바뀐다는 사실에 주목하세요.
Refetch를 사용하는 것은 최신 데이터를 가져오는 가장 확실한 방법입니다.
하지만 잘못 사용하면 refetch는 loading state에 관한 복잡한 문제의 시작일 지 모릅니다.

## 로딩 상태 감지하기

우리는 useQuery 훅이 현재의 로딩 상태값을 리턴한다는 걸 알고 있습니다. 이건 쿼리가 첫번째로 로드될 때는 유용합니다. 하지만 우리가 풀링하거나 리페칭할 때는 어떨까요?
일전에 리페치하던 예시로 돌아가봅시다. 만약 리페치하는 버튼을 눌렀다면, 컴포넌트가 새로운 데이터를 받기 전까진 다시 렌더링되지 않는 모습을 봤을겁니다.
그럼 만약 우리가 데이터를 리페칭한다는 사실을 알려줬다면 어땠을까요?

useQuery 훅의 response 객체는 networkStatus라는 쿼리의 상태를 나타내는 잘 정제된(fine-grained) 값을 제공합니다.
이 값을 요긴하게 사용하려면 우리는 notifyOnNetworkStatusChange라는 옵션을 true로 줘야합니다. 그래야 우리가 refetch를 콜 했을 때 즉각 데이터가 바뀝니다.

```graphql
import { NetworkStatus } from '@apollo/client';

function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
    },
  );

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}
```

이 옵션을 켜면 loading값도 따라서 즉각 바뀝니다. networkStatus값을 통해 더욱 정확한 데이터를 원하지 않는다 하더라도 loading값을 변합니다.
networkStatus는 각기 다른 loading 상태를 나타내느 NetworkStatus enum값 중 하나입니다.
Refetch는 NetworkStatus.refetch로 표현되고 이와 비슷하게 pooling이나 페이지네이션도 쓸 수 있습니다.

## 에러 상태값 감지하기

errorPolicy라는 옵션을 useQuery 훅에 넘겨줌으로써 쿼리의 에러를 자유자재로 컨트롤할 수 있습니다.
default값은 'none'인데요, 이건 Apollo Client가 모든 graphql 에러를 실시간 에러로 받아들인다는 뜻입니다.
이 경우에는 error값을 true로 처리해버리고 서버가 받아오는 모든 데이터를 버립니다.

만약 errorPolicy를 'all'로 세팅하면 useQuery는 graphql 쿼리가 실패하더라도 데이터를 버리지 않습니다. 실패한 데이터 말고 남은 데이터라도 렌더링 하게 두는 것이죠.

## 쿼리를 능동적으로 실행시키기

리액트가 useQuery 훅을 콜하는 컴포넌트를 렌더링(or 마운트)할 때, 자동으로 이 쿼리를 하나 실행합니다. 하지만 사용자의 클릭 같은 특별한 이벤트에 한해서만 이 쿼리를 날리고 싶다면 어떻게 할까요?

이때 사용하는것이 **useLazyQuery** 훅 입니다. useLazyQuery은 특정 액션의 결과로 실행하기에 적격인 쿼리입니다.
이 훅은 딱 1가지 특징을 제외하면 useQuery랑 똑같은 기능을 합니다. 그건, useLazyQuery가 호출 될 때 즉각 쿼리를 날리지 않습니다. 대신 쿼리를 날리는 함수를 리턴하죠.
그리고 그 함수를 쿼리를 발생할 준비가 되면 호출합니다.

```graphql
import React from 'react';
import { useLazyQuery } from '@apollo/client';

function DelayedQuery() {
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {data && data.dog && <img src={data.dog.displayImage} />}
      <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
        Click me!
      </button>
    </div>
  );
}
```

## 페치 정책 세팅하기

기본값으로 useQuery 훅은 요청한 데이터가 이미 로컬에 있는지 캐시를 확인합니다. 만약 모든 데이터가 캐시에 저장되어 있다면 굳이 graphql 서버에 요청하지 않고 캐시 데이터를 보내줍니다. 이걸 **cache-first** 정책이라고 합니다. 기본 정책이기도 하죠.
이것 말고도 다른 정책을 선택할 수 있는데 다음 코드와 같이 옵셔널하게 fetchPolicy라는 옵션을 useQuery를 콜 할 때 넣어주면 됩니다.

```graphql
const { loading, error, data } = useQuery(GET_DOGS, {
  fetchPolicy: "network-only"
});
```

현재 Apollo Client가 제공하는 fetch-policy는 다음과 같습니다.

| 정책 이름         | 설명                                                                                                                                                                                                                                          |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cache-first       | Apollo Clinet가 cache를 먼저 확인합니다. 만약 요청한 모든 데이터가 캐시에 존재한다면 그냥 그 데이터를 리턴해줍니다. 그렇지 않으면 graphQL서버에 요청해서 받아 넘겨줍니다.                                                                     |
| cache-only        | Apollo Client가 캐시만 확인합니다. 요청한 모든 데이터를 캐시에서 확인했을 때 만약 하나라도 없다면 Apollo Clinet는 error를 뱉습니다.                                                                                                           |
| cache-and-network | Apollo Client가 캐시와 gql 서버 둘다 쿼리합니다. 쿼리는 자동으로 캐시를 업데이트합니다. 서버 데이터와 캐시된 데이터의 싱크를 맞춰주면서도 빠른 응답속도를 제공합니다.                                                                         |
| network-only      | Apollo Clinet는 먼저 graphql 서버에 데이터를 요청합니다. 그리고 cache에 그 데이터를 업데이트합니다. 이 정책은 서버 데이터를 가져오기 때문에 정확하지만 정작 캐시에 그 데이터가 있음에도 불구하고 서버를 다녀오기 때문에 비효율일 수 있습니다. |
| no-cache          | network-only와 비슷하지만 쿼리 결과가 캐시에 저장되지 않는다는 차이점이 있습니다.                                                                                                                                                             |
| standby           | 특정 값이 변했을 때 자동으로 데이터를 업데이트하지 않는다라는 사실을 제외하면 cache-first와 비슷한 로직입니다. 능동적으로(버튼같은거 눌러서) 리페치를 하던가 update쿼리를 날려서 값을 최신화 해야됩니다.                                      |

## useQuery API

useQuery 훅에는 다음과 같은 옵션을 줄 수 있습니다.

| 옵션                        | 타입                         | 설명                                                                                                                                                                                                                                                           |
| --------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| query                       | DocumentNode                 |                                                                                                                                                                                                                                                                |
| variables                   | {[key:string]:any}           | 쿼리가 필요로하는 모든 데이터를 담은 변수 객체                                                                                                                                                                                                                 |
| pollInterval                | number                       | 데이터를 풀링할 주기, ms단위로 써줘야 함. default는 0이며 0이면 풀링 안함                                                                                                                                                                                      |
| notifyOnNetworkStatusChange | boolean                      | networkStatus에 따라 렌더링할 지 안할지. default는 false (위에 설명 되어있음)                                                                                                                                                                                  |
| fetchPolicy                 | FetchPolicy                  | Apollo cache를 얼마나 사용할지. 정책에대한 설명은 위에 자세히 해놓았음                                                                                                                                                                                         |
| nextFetchPolicy             | FetchPolicy                  | 쿼리를 한번 실행하고 다음 실행할 때의 FetchPolicy를 정함. cache-and-network나 network-only로 일단 실행하고 cache-first로 돌아갈 때 유용하다                                                                                                                    |     |
| errorPolicy                 | ErrorPolicy                  | 쿼리의 결과로 나오는 에러를 어떻게 처리할지. default는 'none'이고 이는 gql 에러는 런타임 에러이기때문에 어떤 데이터도 주지 않는다. (위에 잘 설명해놨음)                                                                                                        |     |
| ssr                         | boolean                      | 서버쪽 렌더링 시에는 쿼리를 스킵할지                                                                                                                                                                                                                           |
| displayName                 | string                       | React devTools에 뭐라고 나올지. Default는 'Query'                                                                                                                                                                                                              |
| skip                        | boolean                      | 만약 skip값이 true면 쿼리는 스킵된다(Call 안됨). useLazeQuery에선 못씀.                                                                                                                                                                                        |
| onComplelted                | data: TData\|{} => void      | 쿼리가 성공적으로 결과를 가지고 돌아왔을 때(error가 false일 때) 콜백으로 실행할 함수                                                                                                                                                                           |
| onError                     | (error: ApolloError) => void | 위와 반대로 error가 true일 때 실행할 콜백함수                                                                                                                                                                                                                  |
| context                     | Record<string, any>          | 컴포넌트와 네트워크 간 공유되는 context                                                                                                                                                                                                                        |
| partialRefetch              | boolean                      | 만약 이 값이 true면 쿼리의 결과로 받은 값이 부분적이라면 리패치합니다. 그렇게 받은 data는 Apollo Client QueryManager에 의해 텅 빈 객체로 초기화된다. partialRefetch는 백엔드쪽 호환성 이슈 때문에 default가 false지만 대부분의 경우에서 true로 바꾸는게 타당함 |     |
| client                      | ApolloClient                 | ApolloClinet 인스턴스. useQuery나 Query는 context를 통해 건네받아 사용한다. 하지만 다른 클라이언트를 사용할꺼면 여기에서 명시적으로 넘겨줘야한다.                                                                                                              |
| returnPartialData           | boolean                      | 캐시에 요청한 모든 데이터가 없더라도, 그 부분만이라도 넘겨받을지. default는 false                                                                                                                                                                              |

## 결과값

이렇게 다양한 API를 담아 useQuery 훅을 날리면 다음과 같은 property들을 담은 result 객체가 리턴됩니다. 이 객체는 쿼리 결과와 더불어 리페칭이나 동적 풀링, 페이지네이션과 관련된 함수들도 같이 반환해줍니다.

이로써 Query에 대한 설명은 끝났습니다.useQuery 훅으로 어떻게 데이터를 가져오는지(Fetch)에 대해 이해하셨으리라 생각됩니다.
다음 시간에는 useMutation 훅으로 데이터를 업데이트(생성, 수정, 삭제)하는지 배워보겠습니다.
