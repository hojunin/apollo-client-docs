---
sidebar_position: 5
title: 프래그먼트(fragment)
---

# Fragment - GQL 쿼리 간 필드 공유하기

---

[Apollo Docs](https://www.apollographql.com/docs/react/data/fragments/)를 번역 및 의역한 내용입니다.

---

GraphQL Fragment는 여러 쿼리나 뮤테이션 간 공유할 수 있는 재사용 가능한 단위입니다. OPP의 상속과 그 개념이 매우 유사합니다.
다만 GraphQL이지만 서버에서 정의해서 사용할 수는 없고, 클라이언트 단에서 사용하는 문법임을 알아두시면 되겠습니다.

예시를 통해 이해해봅시다.

아래 `NameParts`라는 fragment가 있습니다. 상속과 선언 방식도 똑같습i니다. 이렇게 정의된 `NameParts`는 어떤 `Person` 객체에서든 그 하위(selection set)에 사용될 수 있습니다.

```graphql
type Person {
	firstName
	lastName
	avatar(size: string)
}

fragment NameParts on Person {
  firstName
  lastName
}
```

모든 fragment는 부모 객체(여기선 Person)가 가진 field를 가질 수 있습니다. 그렇기 때문에 위 예시의 Person타입에는 firstName과 lastName 필드가 무조건 포함되어 있어야 합니다. (부모에게 없는 field를 추가할 순 없다는 뜻입니다) 이 점이 상속과는 다르다고 볼 수 있습니다.

이렇게 정의된 `NameParts`는 이제 Person 객체와 연관된 모든 부분에서 사용될 수 있습니다. 아래 예시를 볼께요. `Person`객체를 리턴하는 people 쿼리에 사용될 수 있습니다. 사용법은 JS의 구조 분해 연산자(...)과 같습니다.

```tsx
// fragment를 사용했을 때
query GetPerson {
  people(id: "7") {
    ...NameParts
    avatar(size: LARGE)
  }
}
// fragment를 사용하지 않았을 때
query GetPerson {
  people(id: "7") {
    firstName
    lastName
    avatar(size: LARGE)
  }
}
```

위 코드에서 두 쿼리는 완벽하게 동일합니다.

---

만약 나중에 `NameParts`의 일부 필드를 수정할 일이 생기면, 그저 `NamParts`를 고치는 것 만으로 `NameParts`를 사용하는 모든 `Person` 객체들이 변경됩니다.

## 예시를 통해 사용법 익히기

우리가 GraphQL을 활용한 블로그 서비스를 하고 있다고 가정해봅시다. 그 중 `Comment` 기능을 생각해봐요. 어떤 게시글의 댓글을 불러오는 기능, 댓글 작성 기능 등등이 있겠죠? 아마 이런 기능들은 전부 `Comment` 타입 객체를 포함하고 있을겁니다

이 중 필요한 field들만 골라내기 위해 다음과 같이 `Comment`의 일부를 fragment로 정의합니다.

```tsx
//fragments.ts
import { gql } from '@apollo/client';

export const CORE_COMMENT_FIELDS = gql`
    fragment CoreCommentFields on Comment {
        id
        postedBy {
            username
            displayName
        }
        createdAt
        content
    }
`;
```

> fragment 파일은 어떤 파일에든 만드셔도 됩니다. 이 예제에서는 특정 파일에 선언하고 export하는 방식으로 작성되어 있습니다.

그리고 `CoreCommentFields`를 gql document에 다음과 같이 적용할 수 있습니다. 아래 쿼리는 Post(게시글)을 불러오는 쿼리에 딸려오는 Comment쿼리의 모든 field들을 `CoreCommentField`라는 fragment로 치환해 버린겁니다.

```tsx
//PostDetails.jsx
import { gql } from '@apollo/client';
import { CORE_COMMENT_FIELDS } from './fragments'; // 1
export const GET_POST_DETAILS = gql`
    ${CORE_COMMENT_FIELDS}
    query CommentsForPost($postId: ID!) {
        post(postId: $postId) {
            title
            body
            author
            comments {
                ...CoreCommentFields
            }
        }
    }
`;

// ...PostDetails component definition...
```

1. 우선 다른 파일에 정의해놓은 fragment 파일을 불러옵니다.

-   불러온 파일을 gql document에 넘겨줍니다. 이 때 gql template litera에 넘겨주는 것이므로 JS template literal 문법을 사용합니다(ES6에 추가된 그 문법) ⇒ `${CoreCommentFileds}`
-   gql document에서 넘겨받았으면, fragment를 사용하고 싶은 부분에 사용하면 됩니다.

## Co-Located Component

Co-located fragment는 같은 곳에 위치한 fragment라는 뜻입니다.

트리모양의 GraphQL 결과값은 FrontEnd의 컴포넌트 렌더링 트리와 흡사합니다(Dom을 말하는듯 함) 덕분에 각각의 컴포넌트가 정확하게 자신이 사용하는 필드만 요청할 수 있게 컴포넌트들 간 쿼리 로직을 분리할 수 있습니다. 그렇게 컴포넌트의 로직이 간결해지는 장점이 있죠.

다음 웹/앱 컴포넌트 구조를 한번 봅시다. 아시다시피 트리모양입니다. 이해를 위해 저희 프로젝트 폴더구조에 적용해보면, FeedPage라는 페이지는 Feed라는 organism을 가지고, Feed는 데이터인 FeedEntry를 받아서 molcule인 EntryInfo와 VoteButtons를 렌더링합니다.

```
FeedPage
└── Feed
    └── FeedEntry
        ├── EntryInfo
        └── VoteButtons
```

이 앱에서 FeedPage 컴포넌트는 FeedEntry객체의 리스트를 가져오는 쿼리를 실행시킵니다. 하위 컴포넌트인EntryInfo와 VoteButtons는 그 FeedEntry 객체 데이터의 일부분만을 사용합니다.

### Co-located fragment 만들기

특정한 컴포넌트마다 할당된다는 점을 제외하면 colocated fragment라고 일반 fragment와 다를게 없습니다. 예를 들어 위의 예시에서 `FeedPage`의 child 컴포넌트인 `VoteButton` FeedEntry의 일부 field인 score와 vote{ choice } 를 사용합니다.

```tsx
// VoteButtons.jsx
VoteButtons.fragments = {
    entry: gql`
        fragment VoteButtonsFragment on FeedEntry {
            score
            vote {
                choice
            }
        }
    `,
};
```

After you define a fragment in a child component, the *parent* component can refer to it in its *own* colocated fragments, like so:

child 컴포넌트에 fragment를 정의한 후, parent 컴포넌트는 다음과 같이

```tsx
///FeedEntry.jsx
FeedEntry.fragments = {
    entry: gql`
        fragment FeedEntryFragment on FeedEntry {
            commentCount
            repository {
                full_name
                html_url
                owner {
                    avatar_url
                }
            }
            ...VoteButtonsFragment
            ...EntryInfoFragment
        }
        ${VoteButtons.fragments.entry}
        ${EntryInfo.fragments.entry}
    `,
};
```

There's nothing special about the naming of `VoteButtons.fragments.entry` or `EntryInfo.fragments.entry`. Any naming convention works as long as you can retrieve a component's fragments given the component.

## union과 interface를 활용한 fragment 활용

union과 interface방식으로도 fragment를 만들 수 있습니다. 그 예시로 inline fragment 3개가 함께 쓰인 쿼리를 보겠습니다. inline fragment란 fragment 선언 없이 사용하는 fragment입니다.

```tsx
query AllCharacters {
  all_characters {

    ... on Character {
      name
    }

    ... on Jedi {
      side
    }

    ... on Droid {
      model
    }
  }
}
```

The `all_characters` query above returns a list of `Character` objects. The `Character` type is an interface that both the `Jedi` and `Droid` types implement. Each item in the list includes a `side` field if it's an object of type `Jedi`, and it includes a `model` field if it's of type `Droid`.

위 예시에서 all_characters 쿼리는 Character 객체의 배열을 리턴합니다. Character 타입

**However**, for this query to work, your client needs to understand the polymorphic relationship between the `Character` interface and the types that implement it. To inform the client about these relationships, you can pass a `possibleTypes` option when you initialize your `InMemoryCache`.

### [Defining `possibleTypes` manually](https://www.apollographql.com/docs/react/data/fragments/#defining-possibletypes-manually)

> The possibleTypes option is available in Apollo Client 3.0 and later.

You can pass a `possibleTypes` option to the `InMemoryCache` constructor to specify supertype-subtype relationships in your schema. This object maps the name of an interface or union type (the supertype) to the types that implement or belong to it (the subtypes).

Here's an example `possibleTypes` declaration:

```tsx
const cache = new InMemoryCache({
    possibleTypes: {
        Character: ['Jedi', 'Droid'],
        Test: ['PassingTest', 'FailingTest', 'SkippedTest'],
        Snake: ['Viper', 'Python'],
    },
});
```

This example lists three interfaces (`Character`, `Test`, and `Snake`) and the object types that implement them.

If your schema includes only a few unions and interfaces, you can probably specify your `possibleTypes` manually without issue. However, as your schema grows in size and complexity, you should consider [generating `possibleTypes` automatically from your schema](https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically).

### [Generating `possibleTypes` automatically](https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically)

The following example script translates a GraphQL introspection query into a `possibleTypes` configuration object:

```tsx
const fetch = require('cross-fetch');
const fs = require('fs');

fetch(`${YOUR_API_HOST}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        variables: {},
        query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
    }),
})
    .then((result) => result.json())
    .then((result) => {
        const possibleTypes = {};

        result.data.__schema.types.forEach((supertype) => {
            if (supertype.possibleTypes) {
                possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => subtype.name);
            }
        });

        fs.writeFile('./possibleTypes.json', JSON.stringify(possibleTypes), (err) => {
            if (err) {
                console.error('Error writing possibleTypes.json', err);
            } else {
                console.log('Fragment types successfully extracted!');
            }
        });
    });
```

You can then `import` the generated `possibleTypes` JSON module into the file where you create your `InMemoryCache`:

```tsx
import possibleTypes from './path/to/possibleTypes.json';

const cache = new InMemoryCache({
    possibleTypes,
});
```
