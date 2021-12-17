---
sidebar_position: 2
title: 낙관적 UI 업데이트(Optimistic UI)
---

# 낙관적 UI 업데이트 (Optimistic UI)

---

🧹 [Apollo Docs](https://www.apollographql.com/docs/react/performance/optimistic-ui/)를 번역 및 의역한 내용입니다.

---

우리가 보낸 요청에 서버가 요청 실패를 리턴할 확률이 얼마나될까요? 아마 거의 없을것이며, 대부분 성공할것입니다. 그리고 성공했을 때 받을 데이터 또한 요청을 보내는 클라이언트는 이미 알고있죠. 그래서 아폴로 클라이언트는 반응성을 높이고 유저 친화적인 UI를 위해 `아마 성공할 데이터`로 UI를 업데이트합니다.

예를 들어 우리가 블로그 서비스를 하는데 다음과 같은 뮤테이션을 해야한다고 생각해보세요.

```tsx
type Mutation {
  updateComment(commentId: ID!, content: String!): Comment!

  # ...other mutations...
}
```

만약 사용자가 댓글을 수정하려고 하면 updateComment 뮤테이션을 요청할것이고, 만약 그 요청이 성공한다면 새롭게 변경된 content가 담긴 Comment객체가 리턴될겁니다.

클라이언트는 성공했을 시 받게 될 Comment객체가 뭔지 정확히 알고 있습니다. 즉 서버에 다녀오기 전에 미리 UI를 업데이트해둘 수 있다는 뜻이죠.
:::info
Q. 그렇다면 만약 에러가 난다면 어떻하죠?
A. 그럴 경우엔 원래 데이터로 돌아갑니다.
:::

## optimisticResponse 옵션

낙관적 UI 업데이트를 구현하기 위해서는 optimisticResponse라는 옵션을 mutate 함수에 넣어줘야합니다.

코드 보면서 설명해보겠습니다.

```tsx
// CommentPageWithData.jsx
// Mutation definition
const UPDATE_COMMENT = gql`
  mutation UpdateComment($commentId: ID!, $commentContent: String!) {
    updateComment(commentId: $commentId, content: $commentContent) {
      id
      __typename
      content
    }
  }
`;

// Component definition
function CommentPageWithData() {
  const [mutate] = useMutation(UPDATE_COMMENT);
  return (
    <Comment
      updateComment={({ commentId, commentContent }) =>
        mutate({
          variables: { commentId, commentContent },
          optimisticResponse: {
            updateComment: {
              id: commentId,
              __typename: "Comment",
              content: commentContent,
            },
          },
        })
      }
    />
  );
}
```

예시코드에서 볼 수 있듯이 optimisticResponse는 서버에서 받게 될 뮤테이션 결과값과 똑같이 생긴 객체입니다. 중요한 점은 id와 \_\_typename 필드를 가지고 있다는 점입니다. (\*아폴로 클라이언트 캐시가 이 두 값으로 cacheID라는 유니크한 값을 만들어 캐싱합니다.)

## 낙관적 UI업데이트의생명주기

1.  코드에서 뮤테이션 함수를 호출하는 순간 아폴로 클라이언트는 optimisticResponse에 적힌대로 Comment객체를 캐싱합니다. 하지만 같은 아이디로 존재하던 객체를 덮어쓰진 않습니다. 그 대신에 다른곳에 따로 저장하고, 따로 저장하기 때문에 실패했을 때 되돌아갈 수 있는 것입니다. (Optimistic Version으로 저장합니다)
2.  아폴로 클라이언트는 해당하는 Comment객체를 포함하는 모든 활성 쿼리에 broadcast하고 이 쿼리들은 자동으로 UI를 업데이트합니다. 이 동작까지는 서버에 다녀올 필요가 없으므로 거의 즉각 반영됩니다.
3.  그리고 얼마 뒤, 서버가 결과값을 보내옵니다. 이 결과값은 실제값이겠지요.
4.  아폴로 클라이언트는 아까 저장했던 Optimistic Version인 Comment객체를 삭제하고 서버에서 받은 데이터로 캐시를 업데이트합니다.
5.  그 다음 아까처럼 이 Comment 객체를 포함하는 활성쿼리에 캐시가 바뀌었음을 알려줍니다. 관련된 모든 UI가 업데이트되겠지요. 하지만 서버에서 받은 객체가 원래와 똑같다면 업데이트조차 되지 않을 것이고, 사용자는 아무일 없던 것 처럼 느낄것입니다.

## 추가 예시 - 새로운 아이템 추가하기

위 예시는 이미 캐시에 있는 데이터를 업데이트하는 예시만을 보여줬습니다. 하지만 새로운 객체를 생성하는 경우는 어떻하죠? 결론부터 말하면 업데이트와 유사하게 동작합니다.

가장 큰 차이점은 새로운 객체의 id가 없다는 점입니다. 이런 경우엔 아폴로 클라이언트가 Optimistic 버전으로 캐시를 저장할 수 있도록 id 값에 아무 더미데이터나 넣어주면 됩니다.

예를 들어 아래에 Todo 리스트에 아이템을 하나 추가하는 뮤테이션의 optimisticResponse값입니다.

```tsx
optimisticResponse: {
  addTodo: {
    id: 'temp-id',
    __typename: "Todo",
    description: input.value // Obtained from user input
  }
}
```

위 예시처럼 뮤테이션 함수를 보내면 아폴로 클라이언트는 새로운 Todo객체를 Todo:temp-id라는 캐시아이디로 저장합니다. 서버가 실제 id값을 가진 Todo객체를 보내면 어처피 아까 더미 데이터로 만든 캐시는 삭제되고 새로운 캐시가 쓰여지게 되므로 아무 문제가 없습니다.

### 예시 코드를 코드 샌드박스에서 보기

[이 코드 샌드박스](https://codesandbox.io/s/github/apollographql/docs-examples/tree/main/full-stack/todo-list/todo-list-client?fontsize=14&hidenavigation=1&theme=dark)에서 전체 예시를 볼 수 있습니다.
:::info
[이 링크](https://github.com/apollographql/docs-examples/tree/main/full-stack/todo-list)에서 클라이언트와 서버를 각각 로컬 환경에서 돌려 확인하실 수도 있습니다.
:::
