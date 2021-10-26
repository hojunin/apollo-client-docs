---
sidebar_position: 2
title: 뮤테이션(mutation)
---

# Mutation -useMutation 훅으로 데이터 업데이트

-   지난 시간과 동일하게 아래 [](https://www.apollographql.com/docs/react/data/mutations/)[Apollo 공식 문서](https://www.notion.so/Apollo-Mutation-gql-d502c9c1986147b9a1c9d68d91d77f66)를 번역 및 추가설명한 글입니다.

이전 시간에 Apollo Client로 데이터를 fetch해오는 과정을 배웠습니다. 다음 단계는 mutation으로 데이터를 업데이트 하는 법입니다. 이 이 글은 useMutation 훅을 graphQL 서버에 날리는 법을 배울겁니다. 또한 mutation을 날린 직후에 Apollo Cache에 업데이트하는 방법과 loading과 error값을 추적하는 방법까지 알아봅니다.

또한 React 앱을 Apollo Provider 컴포넌트로 감싸서 Apollo Client를 구성했다고 가정합니다. 만약 안하셨다면 다음 문서를 참조하세요

useMutation 리액트 훅은 Apollo 앱에서 mutation을 사용하기 위한 가장 기본적이면서 중요한 API입니다. mutation을 실행하기 위해 가장 먼저, useMutation을 리액트 컴포넌트 안에서 콜하고 mutation임을 알리는 graphQL string을 넘겨줘야합니다.컴포넌트가 렌더링될 때, useMutation은 일련의 값들을 리턴해줍니다.

1. 어디서든 콜할 수 있는 mutate 함수

2. 여러 field가 들어있는 데이터 object(loading, error, data ...)

그럼 예를 들어봅시다. 첫째로 ADD_TODO라는 graphQL mutation을 만들어봅니다. 간단히 to-do list에 할 일 하나를 추가하는 기능을 합니다. query document 형태로 변환시켜주는 gql 함수로 감싸는 것을 잊지 마세요.

```graphql
import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
```

다음으로, AddToDo라는 컴포넌트를 만듭니다. 입력받아서 제출하는 React 컴포넌트입니다. 여기 안에 아까 만든ADD_TODO를 넘겨줄겁니다.

```graphql
function AddTodo() {
  let input;
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

mutation함수 호출하기
Calling the mutate function

useMutation 훅은 useQuery처럼 컴포넌트가 렌더링될 때 자동으로 실행되지 않습니다. 그 대신에 선언할 때 받은 mutate 함수(위에 코드에서 addToDo가 함수입니다) 를 리턴받아 사용합니다. 당신은 이 함수를 원하는 곳에서 원하는 때 콜하면 됩니다. 위 코드에서 보면 submit 버튼을 누를 때 콜하죠

옵션 추가하기
Providing option

useMutation과 mutate 함수 둘 다 다음 링크에서 볼 수 있는 모든 option을 받을 수 있습니다.

**[Hooks**
Apollo Client react hooks API reference
www.apollographql.com](https://www.apollographql.com/docs/react/api/react/hooks/#usemutation)

---

다만 알아두셔야 할 점은, 어떤 옵션을 주던 mutate function은 useMutation에 종속되어 있기 때문에 만약 같은 옵션을 줬다면 useMutation에 준 옵션이 mutate function에 준 옵션을 덮어씁니다.

옵션위의 예시에서, addToDo 함수에 variables를 줬습니다.

mutation 상태 추적하기
Tracking mutation status

mutate function과 더불어 useMutation 훅은 mutation의 현재 실행상태를 나타내는 객체를 리턴받습니다. 그 object가 가진 field 목록은 다음 링크를 참고하세요

**[Hooks**
Apollo Client react hooks API reference
www.apollographql.com](https://www.apollographql.com/docs/react/api/react/hooks/)

이 안에는 mutate function이 call되었는지 여부인 **called,** mutation 결과값이 오고 있는지의 여부인 **loading** 등이 포함됩니다.

Mutation 후 캐시 업데이트
Updating the cache after a mutation

mutation을 실행하고나면 서버사이드 데이터가 변합니다. 만약 그 데이터가 Apollo Client Cache에 남아있다면 당신은 그 백엔드 데이터와 캐시를 동기화하기 위해 캐시 업데이트를 해야할껍니다. 이는 single existing entity를 mutation했는지 여부에 달렸습니다.

1. 이미 존재하는 하나의 데이터를 업데이트 했을 때

만약 mutation이 이미 존재하는 하나의 데이터를 업데이트 했을 때, Apollo Clinet는 자동으로 mutation이 값을 리턴할 때 캐시를 업데이트합니다. 그러기 위해서는 mutation이 반드시 업데이트 된 데이터의 **id** 를 리턴해야합니다. 편리하게도 Apollo Client의 모든 mutation이 이걸 기본으로 합니다.

아래 todo list에서 이미 존재하는 아이템을 mutate하는 예시를 봅시다.

```graphql
const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
      </div>
    );
  });
}
```

이 컴포넌트에서 UPDATE_TODO muation을 실행시켰을 때, mutation은 업데이트 된 데이터의 id와 새롭게 변한 type까지 두 가지 데이터를 리턴합니다. Apollo Clinet가 id로 데이터를 캐싱하기 때문에, 어떻게 자동으로 id에 맞는 데이터를 캐시에 업데이트하는지 알 수 있습니다. 이에 따라 앱의 UI도 자동으로 변하겠지요?

entitiy가 여러개일 떄
Making all other cache updates

만약 mutation이 2개 이상의 entitiy를 변화시킨다면 혹은 생성이나 삭제같은 작업을 할 때 Apollo Client의 캐시는 그 결과값을 자동으로 업데이트하지 않습니다. 이 문제를 풀기 위해 update function이라는 걸 useMutation에 옵션으로 끼워넣어야합니다.

update function의 목적은 mutation을 통해 바뀐 서버 데이터를 Apollo Clinet cache 데이터와 동기화하는 것이다. 다음 예시를 보자.

```graphql
const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  type
                }
              `});
            return [...existingTodos, newTodoRef];
          }
        }
      });
    }
  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

코드를 보면, update function은 cache객체를 Apollo Client cache로부터 넘겨받는다. 이 객체는 readQuery나 writeQuery, readFragment, writeFragment, modify같은 cache에 읽고 쓸 수 있는 Cache API를 사용할 수 있게 해준다. 이런 메소드들은 graphQL 서버와 통신하듯 cache와도 할 수 있게 해줍니다.

아래 링크에서 저것들 말고도 더 많은 cache 관련 메소드들을 만날 수 있습니다.

**[Reading and writing data to the cache**
A guide to using the Apollo GraphQL Client with React
www.apollographql.com](https://www.apollographql.com/docs/react/caching/cache-interaction/)

update function은 또한 data가 포함된 객체를 넘겨받습니다. 이걸 가지고 cache.writeQuery나 cache.modify 같은 메소드를 실행시키면 됩니다.

ADD_TODO mutation이 위 예제에서 실행될 때, 새롭게 추가되어 리턴 된 객체는 cache에 저장됩니다. 하지만GET_TODOS 쿼리가 받아온, 이전에 캐시에 저장되어 있던 todos는 자동으로 업데이트되지 않습니다. 이 말은 다시 말해 GET_TODOS 쿼리는 새롭게 추가된 todo 객체를 todo list에 반영할 수 없다는 것입니다.

이 문제를 해결하기 위해 cache.modify라는 메소드를 쓸껀데, 이 메소드는 강제로 캐시 데이터를 삭제하거나 추가합니다. 위 예시에서 GET_TODOS 쿼리의 결과값은 cache의 ROOT_QUERY.todos 배열에 저장됩니다.그래서 우리는 todos modifier 함수를 사용해서 새롭게 추가된 배열로 캐시된 배열을 업데이트합니다. cache.writeFragment 메소드를 활용해서 우리는 새로 추가될 todo 아이템의 reference(id같은 것?)를 얻을 수 있고 그걸 Apollo cache의 ROOT_QUERY배열에 저장하는 것이죠.

위의 과정을 거쳐 변경된 캐시된 데이터들은 자동으로 broadcast합니다. 이 말은, 이 데이터를 기다리는 쿼리들이 listening하고 있다가 변경되는 즉시 그 데이터와 관련된 UI를 update한다는 뜻입니다.

loading과 error 상태값 추적하기
Tracking loading and error states

useMutation 훅에는 mutate의 loading과 error 상태값을 추적할 수 있는 매커니즘이 있습니다.

Single existing entity를 업데이트하는 위의 예제를 다시한번 살펴볼까요?

```graphql
function Todos() {
  const { loading: queryLoading, error: queryError, data } = useQuery(
    GET_TODOS,
  );

  const [
    updateTodo,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_TODO);

  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error :(</p>;

  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
      </div>
    );
  });
}
```

위 코드에서 UI내에서 mutation의 상태를 추적할 수 있는 loading과 error 값을 useMutation이 리턴해주는 result 객체에서 구조분해할 수 있습니다. 만약 콜백으로 사용하길 원하신다면 onComplete과 onError 옵션도 제공하니 사용하면 됩니다.

---

useMutation aPI

제공되는 옵션과 리턴되는 result 객체가 가진 field들을 설명하겠습니다.

useMutation을 콜할 때 대부분의 옵션들은 생략해도 좋습니다. 하지만 이런 옵션들도 있다는 사실을 알고 계시는게 좋습니다. [이 링크](https://www.apollographql.com/docs/react/api/react/hooks/)에서 더 자세한 사용법을 공부하세요

[제목 없음](https://www.notion.so/07be792c73a9433c9bd52d046d731ed4)

useMutation Response

useMutation Response값은 mutate function이 첫번째로 오고 두번째로는 mutation의 결과값이 온다.

mutate

다음은 결과(Result) 객체의 필드들이다.

[result](https://www.notion.so/216cdf4f0bc04f2198d0749d0a731580)

---

useQuery와 useMutation 훅은 grpahQL을 원활하게 사용하기 위한 Apollo Clients의 핵심 API다. 이제 많이 익숙해졌으리라 믿는다. 이제 Optimistic UI나 Local State같은 Apollo Client가 제공하는 특별한 기능을 공부해보자.
