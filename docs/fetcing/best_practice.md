---
sidebar_position: 7
title: 좋은 예시(Best Practice)
---

# Apollo Client Query, 좋은 예시와 나쁜 예시

---

[Apollo Docs](https://www.apollographql.com/docs/react/data/operation-best-practices/)를 번역 및 의역한 내용입니다.

---

아래 예시들은 아폴로 클라이언트와 그래프큐엘을 활용한 쿼리나 뮤테이션을 날릴 때 도움이 되는 Best Practice들입니다.

## 쿼리에 이름 붙혀주기

아래 두 쿼리는 같은 데이터를 리턴합니다.

```graphql
# Recommended ✅
query GetBooks {
  books {
    title
  }
}

# Not recommended ❌
query {
  books {
    title
  }
}
```

첫번째 쿼리는 GetBooks라는 이름이 있지만 두번째 쿼리는 이름이 없습니다. (익명)

쿼리 작성하실 때는 첫번째 쿼리처럼 이름을 꼭 붙혀주셔야 다음의 이점들을 활용하실 수 있습니다.

- 스스로 디버깅할 때나 팀원들이게 해당 쿼리가 어떤 쿼리인지에 대한 부분을 명확히 할 수 있습니다.
- 여러개의 오퍼레이션을 하나의 쿼리에 담을 때 에러를 트래킹하기 쉽습니다.
- 어떤 이름을 가진 쿼리가 에러를 뱉는지를 알려주기에, 클라이언트와 서버 둘 다에서 디버깅에 용이합니다.
- Apollo Studio에서 쿼리를 분석할 때 쿼리 이름이 꼭 필요합니다.

## 인자를 변수로 넘기세요

아래 두 쿼리는 동일하게 id가 5인 Dog 객체를 쿼리합니다.

```graphql
# Recommended ✅
query GetDog($dogId: ID!) {
  dog(id: $dogId) {
    name
    breed
  }
}

# Not recommended ❌
query GetDog {
  dog(id: "5") {
    name
    breed
  }
}
```

첫번째 쿼리는 변수 $dogId를 사용하고, 어떤 id든 넣기만 하면 해당 데이터가 나오므로 재사용성이 뛰어나다고 볼 수 있습니다. 아래의 예시처럼요

```tsx
const GET_DOG = gql`
  query GetDog($dogId: ID!) {
    dog(id: $dogId) {
      name
      breed
    }
  }
`;

function Dog({ id }) {
  const { loading, error, data } = useQuery(GET_DOG, {
    variables: {
      dogId: id,
    },
  });
  // ...render component...
}
```

### 만약 변수를 쓰지 않고, 인자를 하드코딩한다면?

재사용성을 제외하고도 안좋은 점이 많습니다.

### 1. (서버)캐시 효용성이 떨어집니다.

만약 두 쿼리가 다르게 하드코딩된 값으로 정의되어 있다고 생각해보세요. 그래프큐엘 서버의 캐시는 두 쿼리들이 전혀 다른 오퍼레이션이라고 생각합니다. 이 캐시는 서버에서 이미 보냈던 데이터에 한하여 파싱과 유효성 검증 과정을 생략하게 해주는데 성능에 상당부분 기여합니다.

서버 캐시는 또한 [automatic persisted queries](https://www.apollographql.com/docs/apollo-server/performance/apq/) 와 같은 고급 기능이나 [federated gateway](https://www.apollographql.com/docs/federation/gateway/) 에서 쿼리 스케쥴링을 가능하게 해주는데, 하드코딩된 인자는 이런 기능들의 성능을 떨어뜨리고 애꿎은 캐시 공간을 더 잡아먹습니다.

### 개인정보나 민감한 데이터로부터의 보호

그래프큐엘 인자에는 민감한 정보가 담겨있을 수 있습니다. access token이나 사용자 프로필과 관련된 데이터가 그 예시가 되겠네요. 만약 이런 정보가 쿼리스트링에 그대로 포함된다면 그대로 노출될 겁니다.

## 필요한 곳에서 필요한 데이터만 호출하세요.

RestApi에 비해서 그래프큐엘이 뛰어난 점 중 하나는 바로 선언적 데이터 페칭입니다. 각각의 컴포넌트는 렌더링할 데이터만을 오버페칭 없이 서버에 요청할 수 있습니다.

만약 최상단 컴포넌트에서 쿼리 한번으로 자식 컴포넌트들이 필요한 모든 데이터를 전부 받아오겠다고 하면, 현재 state가 지정되지 않은 컴포넌트들을 대신해서 쿼리해올 수 있다는 장점은 있겠습니다. 하지만 이 쿼리는 오래걸릴 것이고, 서버 캐시가 쿼리를 재사용하는 경우보다 속도가 눈에 띄게 줄어들진 않을겁니다.

대부분의 경우 아래와 같은 쿼리는 여러개의 작은 쿼리로 나눠서 각각 해당 데이터를 필요로하는 컴포넌트에서 호출하게됩니다.

```graphql
# Not recommended ❌
query GetGlobalStatus {
  stores {
    id
    name
    address {
      street
      city
    }
    employees {
      id
    }
    manager {
      id
    }
  }
  products {
    id
    name
    price {
      amount
      currency
    }
  }
  employees {
    id
    role
    name {
      firstName
      lastName
    }
    store {
      id
    }
  }
  offers {
    id
    products {
      id
    }
    discount {
      discountType
      amount
    }
  }
}
```

- 항상 동시에 렌더링되는 컴포넌트들이 있다면 fragment를 활용하여 재사용성 있는 구조를 만들 수 있습니다.
- 만약 데이터 리스트를 쿼리하는데 컴포넌트가 당장 보여줘야 할 데이터보다 많이 가져온다면 [페이지네이션](https://www.apollographql.com/docs/react/pagination/overview/)을 활용하셔야 합니다.

## 반복되는 Selection Set은 Fragment로 묶으세요

[GraphQL fragments](https://www.apollographql.com/docs/react/data/fragments/) 는 여러 쿼리들 안에서 공유할 수 있도록 캡슐화한 Selection Set입니다. 아래 예시를 봅시다.

```graphql
# Recommended ✅
fragment NameParts on Person {
  title
  firstName
  middleName
  lastName
}
```

Person 객체에서 위 4개 field는 이름을 나눠놓은것입니다. 저 4가지가 합쳐져야 full name이 나오죠. 이 full name을 아마 다양한 쿼리에서 사용할 것입니다. 이럴 때 fragment로 해당하는 Selection Set을 지정해두고 아래와 같이 가져다 사용하시면 됩니다.

```graphql
# Recommended ✅
query GetAttendees($eventId: ID!) {
  attendees(id: $eventId) {
    id
    rsvp
    ...NameParts # Include all fields from the NameParts fragment
  }
}
```

### 과도하거나 잘못된 Fragment를 사용하지 마세요

너무 프래그먼트를 많이 사용하면 코드 가독성이 떨어집니다. 아래 코드를 보세요.

```graphql
# Use caution ⚠️
query GetAttendees($eventId: ID!) {
  attendees(id: $eventId) {
    id
    rsvp
    ...NameParts
    profile {
      ...VisibilitySettings
      events {
        ...EventSummary
      }
      avatar {
        ...ImageDetails
      }
    }
  }
}
```

추가로, 논리적으로 연관된 데이터들만 묶으세요. 그냥 특정 필드가 반복된다고 다 묶는게 아닙니다.

```graphql
# Recommended ✅
fragment NameParts on Person {
  title
  firstName
  middleName
  lastName
}

# Not recommended ❌
fragment SharedFields on Country {
  population
  neighboringCountries {
    capital
    rivers {
      name
    }
  }
}
```

## 유저마다 다른 데이터와 균일하게 반환하는 쿼리를 구분하세요.

어떤 유저가 쿼리했는지 신경쓰지 않고 모든 요청에 같은 데이터를 내려줄 때가 있습니다.

```graphql
# Returns all elements of the periodic table
query GetAllElements {
  elements {
    atomicNumber
    name
    symbol
  }
}
```

반면, 사용자가 누구냐에 따라 다른 데이터를 내려줄 수도 있습니다.

```graphql
# 요청을 보낸 유저의 데이터가 반환됩니다.
query GetMyDocuments {
  myDocuments {
    id
    title
    url
    updatedAt
  }
}
```

[server-side response cache](https://www.apollographql.com/docs/apollo-server/performance/caching/) 의 성능을 높히려면, 위에서 설명한 두 쿼리를 따로 호출하세요. 이렇게 하게되면 서버는 `GetAllElements`,`GetMyDocuments` 를 각각 캐시합니다.

## merics 분석(유료)을 위해 서비스 이름과 버전을 기입하세요

> 이건 그냥 아폴로 스튜디오를 사용하는 사람들을 위한 기능입니다.

ApolloClient 인스턴스를 만들 때 name, version을 넣어주세요

```tsx
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  name: "MarketingSite",
  version: "1.2",
});
```

이 값을 세팅하면 모든 http 요청에(헤더) 이 데이터가 들어갑니다. 그리고 아폴로 스튜디오의 metric 분석 탭에서 해당 쿼리를 확인하실 수 있습니다.
