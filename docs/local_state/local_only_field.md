---
sidebar_position: 2
title: 로컬 전용 필드(Local-only Fields)
---

# 로컬 전용 필드

---

🧹 [Apollo Docs](https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/)를 번역 및 의역한 내용입니다.

---

**쿼리에 로컬데이터와 리모트 데이터를 동시에 담기**

아폴로 클라이언트에서는 GraphQL 서버에 정의된 스키마 뿐만 아니라 로컬에서 사용하는 필드 또한 활용할 수 있습니다.

```graphql
query ProductDetails($productId: ID!) {
  product(id: $productId) {
    name
    price
    isInCart @client # This is a local-only field  }
}
```

서버에 없는 이 로컬 전용 필드들은 원하는 로직으로 계산하여 읽어올 수 있습니다. 예를 들어 localStorage에서 불러오는 등의 로직을 통해서요. 이런 방식으로 클라이언트에서는 서버에 없는 데이터와 서버 스키마에 정의된 데이터 모두를 하나의 쿼리에서 활용할 수 있게 됩니다.

## 정의하기

우리가 E-커머스 서비스를 개발한다고 가정해봅시다. 아마 대부분의 데이터는 서버가 가지고 있을 것입니다. 하지만 우리가 장바구니 기능을 위해 `Product.isInCart`라는 boolean 필드가 필요하다고 생각해보세요. 이 값은 주로 로컬데이터에 저장하죠. 우선 이 값을 쿼리에 포함시키기 위해 우리는 isInCart값에 대한 `field policy`를 정의해야 합니다.

field policy는 특정 필드에 대한 fetch 로직을 커스터마이징하고 캐시에 쓰는 과정입니다. 여기서 로컬 데이터와 서버 데이터에 대한 페칭 로직을 정의하실 수 있습니다.
:::info
field policy는 캐시에서 특정 필드의 동작을 커스터마이징합니다.이 글은 그 중에서 로컬 데이터의 커스터마이징을 다루겠습니다.
:::

아래와 같이 캐시 인스턴스를 만들 때 typePolices를 넣어서 만듭니다. 이 안에는 각각의 타입에 대해, 또한 그 안의 특정 필드에 대해 어떻게 읽어(read)올지, 어떻게 병합(merge)할지 정할 수 있습니다. 아래는 위 예시에서 보여드린 로컬필드인 isInCart에 대한 정의를 볼 수 있습니다.

```graphql
const cache = new InMemoryCache({
  typePolicies: { // Type policy map
    Product: {
      fields: { // Field policy map for the Product type
        isInCart: { // Field policy for the isInCart field
          read(_, { variables }) { // The read function for the isInCart field
            return localStorage.getItem('CART').includes(
              variables.productId
            );
          }
        }
      }
    }
  }
});
```

코드를 보면 isInCart 필드에 대해 read함수가 정의되어 있습니다. 쿼리가 호출되면 특정 필드에 대해 read함수가 정의되어있는 경우 캐시는 이 함수를 호출하여 필드를 커스텀해서 읽어옵니다. 여기선 localStorage에 CART라고 저장된 목록에 해당 제품의 id(productId)가 있는지 없는지를 계산해서 boolean으로 리턴하네요.

\*read함수는 다음의 경우 많이 쓰입니다.

- 다른 타입의 캐시 동작을 조작하고 싶을 때
- Validation 체크나 보안같은 유틸리티로 쿼리를 한번 필터링하고 싶을 때
- 서로 다른 스토어에서 데이터를 가져고오고 싶을 때
- Logging usage metrics (?)

> 만약에 local-only로 선언한 필드에 read함수를 정의해놓지 않는다면 아폴로 클라이언트는 그 필드가 이미 있는지 캐시를 훑습니다.

## 쿼리하기

위에서 isInCart에 대한 field policy를 정의했으니 이제 서버로 쿼리를 날려봅시다.

```graphql
const GET_PRODUCT_DETAILS = gql`
  query ProductDetails($productId: ID!) {
    product(id: $productId) {
      name
      price
      isInCart @client
    }
  }
`;
```

이게 끝입니다. 데코레이터 패턴으로 `@client`라고 적어주면 아폴로 클라이언트는 `isInCart`라는 필드가 local-only 필드라고 인식합니다. 알아서 서버로 보내는 쿼리에서 이 필드를 생략하고 `name`, `price`만 보냅니다. 그리고 돌아온 값과 로컬에서 계산한 값을 합쳐서 리턴해주게 됩니다.
:::caution
주의할 점은 아래 예시처럼 subfield에다가 @client를 붙힌다면 그 이하 모든 필드가 전부 로컬 전용으로 취급받습니다.
:::

```graphql
const GET_PRODUCT_DETAILS = gql`
  query ProductDetails($productId: ID!) {
    product(id: $productId) {
      name
      price

      purchaseStatus @client {
        isInCart
        isOnWishlist
      }
    }
  }
`;
```

## 저장하기

지금까지 잘 따라오셨다면 이제 아폴로 클라이언트로 서버에 뭐가 있던 로컬 전용 필드로 원하는 데이터를 가져올 수 있으실겁니다. 더 나아가 두가지 유용한 메커니즘을 소개해드리겠습니다.

- 반응형 변수(reactive variables)
- 캐싱하기 (caching itself)

:::info
아폴로 클라이언트 3. 버전 이상부터는 로컬 리졸버 사용을 지원하지 않습니다.
아래 설명할 반응형 변수에 저장하기나 캐시에 직접 쓰기를 이용해주세요
:::

### 1. 로컬 전용 데이터를 반응형 변수에 저장하기

반응형 변수는 로컬 전용 필드를 사용할 때 굉장히 유용합니다.

- 로컬 전용 필드를 수정할 때 gql 동작 없이도 가능하게 합니다.
- 캐시와 다르게 데이터 정규화 과정이 없습니다. 이 말은 원하는 형식으로 데이터를 저장하셔도 된다는 뜻입니다.
- 만약 캐시에 이 반응형 변수를 포함하는 혹은 로직이 포함되는 값이 있다면 반응형 변수가 변경되었을 때 활성 쿼리들의 결과값이 자동으로 변경됩니다.

다시 아까 예시로 들었던 E-커머스 쇼핑몰 서비스의 장바구니 목록을 생각해봅시다. 로컬스토리지에 저장하고 있는 장바구니 아이템들의 id목록이 필요해졌습니다. 쿼리는 아래와 같습니다.

```tsx
// Cart.js
export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
```

이런 경우엔 `makeVar` 함수를 사용해서 일단 그 id 목록을 담을 반응형 변수를 생성해줍니다.

```tsx
// cache.js
import { makeVar } from "@apollo/client";

export const cartItemsVar = makeVar([]);
```

이렇게 하면 반응형 변수가 빈 배열로 초기화됩니다. (초기화값은 원하시는대로) 다만 유의할 점은 `makeVar`함수의 리턴값은 그 변수 자체가 아니라 함수라는 점입니다. 여기선 `cartItemVar()`라고 이름붙히고, 새로운 값으로 업데이트할 때

```tsx
cartItemsVar(newValue);
```

이런식으로 호출해서 변경해주면 됩니다.

이제 캐시 인스턴스 생성부로 가서 `cartItems`필드에 대한 field policy를 정의합니다.

```tsx
//cache.js
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});
```

이 read함수는 cartItems가 쿼리될 때 항상 호출되어 아까 정의한 반응형 변수를 리턴합니다. 이제 버튼 컴포넌트를 만들어서 장바구니에 새로운 아이템을 담아볼까요?

```tsx
// AddToCartButton.js
import { cartItemsVar } from "./cache";
// ... other imports

export function AddToCartButton({ productId }) {
  return (
    <div class="add-to-cart-button">
      <Button onClick={() => cartItemsVar([...cartItemsVar(), productId])}>Add to Cart</Button>
    </div>
  );
}
```

위 예시르 보면버튼을 클릭하면 현재 장바구니 값에 특정 productId값을 추가합니다. 아폴로 클라이언트는 cartItems 필드를 가진 모든 쿼리에 이 필드의 변경사실을 브로드캐스팅합니다.

아래 예시는 `GET_CART_ITEMS` 쿼리를 호출하는 `Cart`컴포넌트입니다. 장바구니에 들어있는 값이 변경되면 자동으로 업데이트가 되어야합니다.

```tsx
//Cart.js
export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

export function Cart() {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div class="cart">
      <Header>My Cart</Header>
      {data && data.cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <Fragment>{data && data.cartItems.map((productId) => <CartItem key={productId} />)}</Fragment>
      )}
    </div>
  );
}
```

cartItems를 쿼리하는 것대신 Cart 컴포넌트는 useReactiveVar 훅으로 즉각 반응할 수 있습니다.

```tsx
// Cart.js
import { useReactiveVar } from "@apollo/client";

export function Cart() {
  const cartItems = useReactiveVar(cartItemsVar);
  return (
    <div class="cart">
      <Header>My Cart</Header>
      {cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <Fragment>
          {cartItems.map((productId) => (
            <CartItem key={productId} />
          ))}
        </Fragment>
      )}
    </div>
  );
}
```

위와같이 작성하면, useQuery 예시와 같이 cartItemsVar 변수가 업데이트되면 Cart컴포넌트는 자동으로 업데이트되게 됩니다.
:::tip
중요! - 만약 위 예시에서 useReactiveVar(cartItemsVar)대신  cartItemsVar() 를 호출한다면 Cart컴포넌트는 자동으로 리-렌더링되지 않습니다.
:::

### 2. 로컬 전용 데이터를 캐싱하기

로컬 전용 데이터를 직접 캐싱하는 것은 여러모로 좋을 수 있지만, 반응형 변수에 저장하는 것 보다 작업량이 높을 수도 있습니다.

- You don't *have* to [define a field policy](https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/#defining) for local-only fields that are present in the cache. If you query a field that doesn't define a `read` function, by default Apollo Client attempts to fetch that field's value directly from the cache. 직접 캐싱하는 경우엔 field policy를 정의해줄 필요가 없습니다. 기본적으로 아폴로 클라이언트는 해당 필드의 값을 캐시에서 얻어옵니다.
- 캐시를 writeQuery나 writeFragment로 직접 수정하면 자동으로 모든 활성쿼리에 업데이트가 됩니다.

다음과 같은 쿼리를 정의했다고 가정해봅시다.

```tsx
const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
```

여기서 isLoggedIn 필드는 로컬 전용 필드입니다. writeQuery 메소드로 해당하는 값을 캐시에 직접 쓸 수 있습니다.

```tsx
cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});
```

이 예시에서는 로컬스토리지에 토큰이 있는지 없는지를 확인하고 리턴합니다.

이렇게 하면 read함수 없이도 아래처럼 isLoggedIn 필드에 따라 자동으로 리렌더링을 할 수 있게 됩니다.

```tsx
function App() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Login />;
}
```

아래는 위 예시의 전체 코드입니다.

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

import Pages from "./pages";
import Login from "./pages/login";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});

function App() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Login />;
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
```

알아두실 점은 이렇게 read함수를 쓸 일이 없다고 하더라도 default값 설정과 같은 기능을 위해선 read함수를 여전히 쓸 수 있다는 것입니다. 유용한 유틸함수이니 고려해보세요.

### 세션과 상관없이 로컬데이터 유지하기

기본적으로 반응형 변수나 캐시나 사용자가 브라우저를 끄거나 앱을 끄면 다 날아가는 값입니다. 이 값들을 보존하려면 추가적인 로직을 넣어야합니다.

`apollo-3-cache-persist` 라이브러리를 사용하면 캐시를 복원할 수 있습니다. 더 많은 정보는 [이 링크](https://www.apollographql.com/docs/react/caching/advanced-topics/#persisting-the-cache)를 참고해주세요. 아직 아폴로 클라이언트 자체적으로 제공하는 캐시 보존 기능은 없습니다. localStorage나 다른 방법을 활용해주세요.

## 수정하기

로컬 전용 필드를 수정하는 방식은 위에서 서술한대로, 어떻게 수정하냐에 따라 다릅니다.

- 반응형 변수를 사용한다면 개발자가 할 일은 그저 새로운 값으로 업데이트 해주는 것 뿐입니다.
- 캐시를 직접 수정하는 방식을 택한다면 `writeQuery`, `writeFragment`, or `cache.modify` 메소드를 호출하면 되고, 반응형 변수와같이 이렇게 수정한 캐시는 자동으로 모든 활성 쿼리에 브로드캐스팅되어 리렌더링됩니다.
- 만약 localStorage같은 다른 방식을 택한다면 값을 변경하고 해당 필드를 가진 객체의 id를 넘겨서 cache.evict와 같은 메소드를 호출하면 강제 업데이트를 할 수 있습니다.

## 로컬 전용 필드를 gql 쿼리의 변수로 사용하는 경우

변수를 사용하는 쿼리에 로컬 전용 필드를 변수로 제공해야 하는 경우가 있습니다.

이런 경우엔 `@export(as: "variableName")` 로 해결할 수 있습니다.

```tsx
const GET_CURRENT_AUTHOR_POST_COUNT = gql`
  query CurrentAuthorPostCount($authorId: Int!) {
    currentAuthorId @client @export(as: "authorId")
    postCount(authorId: $authorId)
  }
`;
```

위 예시에서 로컬 전용 필드인 currentAuthorId의 결과값은 postCount쿼리의 변수인 authorId로 사용됩니다. postCount 또한 로컬 전용 필드라도 상관 없습니다.

### @export를 사용할 때 고려할 점

- @export를 사용하러면 해당 필드는 @client데코레이터가 꼭 붙어있어야 합니다.
- `@export` 가 붙은 필드는 이 필드가 변수로 사용되는 필드보다 위에 있어야 합니다.
- 만약 @export를 여러개 붙혀서 그 값들을 하나의 변수에 할당하려고 하면 마지막에 선언된 필드가 모두 오버라이드 합니다. 이런 경우엔 아폴로 클라이언트에서 워닝을 뱉습니다.
