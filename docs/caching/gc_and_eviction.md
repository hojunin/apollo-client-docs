---
sidebar_position: 4
title: 가비지 컬랙션
---

# 가비지 컬렉션

---

[이 링크를 번역했습니다.](https://www.apollographql.com/docs/react/caching/garbage-collection/)

---

아폴로 클라이언트는 더이상 사용하지 않는 캐시 데이터를 삭제할 수 있게 해줍니다. 기본적으로 gc메소드를 호출해서 사용하면 되지만 더 세밀한 컨트롤을 위해 evict 메소드도 활용할 수 있습니다.

> 아래에 나오는 모든 메소드는 아폴로 클라이언트 객체(client)가 아닌 캐시 객체(cache)에서 직접 호출할 수 있습니다.

## cache.gc()

접근이 불가능한(not reachable) 캐시 데이터를 gc 메소드로 모두 삭제할 수있습니다.

```tsx
cache.gc();
```

어떤 객체가 접근 가능하고 아닌지 (reachable) 판단하기 위해 캐시는 root 객체(Query, Mutation..)부터 시작해서 모든 자식 객체에 재귀적으로 확인합니다. 그렇게 모든 객체에 방문했음에도 아직 방문되지 않은 객체는 제거됩니다. cache.gc() 메소드는 이렇게 제거된 데이터의 ID 배열을 리턴하고, 데이터를 제거하는 것 뿐만 아니라 점유하고 있던 메모리까지 확보해줍니다.

```tsx
cache.gc({ resetResultCache: true });
```

이렇게 메모리를 확보하는 과정에서 일시적으로 캐시 읽기 속도가 저하됩니다. 왜냐하면 이 시점에서의 읽기 과정은 이전의 작업물에서 읽었던 캐시된 데이터를 참조하지 않기 때문입니다.

canonizeResults옵션의 값을 true로 주면 gc 메소드는 canonical result 객체를 찾을 때 사용했던 메모리도 리셋시킵니다.

```tsx
cache.gc({
  resetResultCache: true,
  resetResultIdentities: true,
});
```

gc 메소드에 추가적인 옵션을 주면 메모리 사용, 누수 방지 관련 패턴을 더 디테일하게 다룰 수 있습니다. 허나 heap 스냅샷이나 메모리 할당 타임라인을 보기 전에, 브라우저에서 사용중인 자바스크립트 자체 가비지 컬렉션이 캐시 동작 후에 메모리를 힙에 잘 반환하는지 확인하는게 좋습니다.

### 가비지 컬렉션 설정하기

retain 메소드로 특정 객체와 그 자식 객체들까지 가비지 컬렉션으로부터 삭제되는 일을 방지할 수 있습니다.

```tsx
cache.retain("my-object-id");
```

이렇게 retain된 객체를 다시 불러오고 싶다면 release 메소드를 사용하면 됩니다.

```tsx
cache.release("my-object-id");
```

그런데 만약 그 객체가 닿을 수 없는(unreachable) 상태라면 다음 gc 메소드가 호출될 때 아마 삭제될 겁니다.

## cache.evict()

evict 메소드를 사용하여 캐시에서 특정 Id를 가진 객체를 제거할 수 있습니다.

```tsx
cache.evict({ id: "my-object-id" });
```

이뿐만이 아니라 특정 id를 가진 객체의 특정 field만 제거할 수도 있습니다.

```tsx
cache.evict({ id: "my-object-id", fieldName: "yearOfFounding" });
```

evict 메소드를 사용하면 종종 다른 캐시데이터에 영향을 줍니다(unreachable하게 됨). 이런 이유 때문에 evict 메소드를 호출하면 반드시 gc메소드를 뒤이어 호출해주어야 합니다.

## 허상 포인터

어떤 객체가 캐시에서 제거(evict)되면 그 객체를 참조하고 있던 다른 객체는 허상을 가리키게 되고, 다른 캐시 객체 안에 남겨지게 됩니다. 이렇게 남겨진 데이터를 허상 포인터(Dangling references)라고 부릅니다. 아폴로 클라이언트에서는 기본적으로 이런 데이터를 그냥 냅둡니다. 참조되었던 그 객체가 다시 돌아올 수도 있기 때문이에요. (포인터는 잘 쓰면 편합니다👍)

이 허상 포인터의 동작을 [read 함수](https://www.apollographql.com/docs/react/caching/cache-field-behavior/#the-read-function)를 커스텀해서 제어할 수 있어요. read 함수는 참조하고 있던 객체가 사라짐으로 인해 정리가 필요할 때 사용하면 좋습니다. 예를 들어 read 함수는 다음과 같은 동작을 할 수 있어요.

- 특정 객체에 참조되지 않는 객체들을 필터링
- 특정 필드의 값을 null로 만들기
- 기본값(default value)을 리턴한다.

모든 read 함수는 canRead 함수를 넘겨받습니다. canRead함수는 해당 객체의 특정 필드가 허상포인터를 포함하고 있는지(reachable 한지) 리턴해주는 함수입니다.

예를 들어 아래의 코드는 2개의 read함수(Query.ruler, Deity.offspring)를 정의하고 canRead 함수를 호출합니다.

```tsx
new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ruler(existingRuler, { canRead, toReference }) {
          // If there is no existing ruler, Apollo becomes the ruling deity
          return canRead(existingRuler)
            ? existingRuler
            : toReference({
                __typename: "Deity",
                name: "Apollo",
              });
        },
      },
    },

    Deity: {
      keyFields: ["name"],
      fields: {
        offspring(existingOffspring: Reference[], { canRead }) {
          // Filter out any dangling references left over from removing
          // offspring, supplying a default empty array if there are no
          // offspring left.
          return existingOffspring ? existingOffspring.filter(canRead) : [];
        },
      },
    },
  },
});
```

- 첫번째 예시로 Query의 ruler필드에 대한 read 함수는 canRead함수로 현재 객체가 허상포인터가 아니면 그대로 리턴하고, 허상포인터면 toReference를 통해 기본값을 리턴합니다.
- 두번째는 Deity객체의 offspring 필드에 대한 read함수는 canRead함수가 true인(reachable한) 값만 필터링해서 리턴합니다.

:::tip
💁🏻‍♂️ 허상 포인터를 필터링해서 캐시 목록에서 지워버리는 것은 기본 read 함수가 자동으로 처리해줄만큼 당연한 동작입니다. 그래서 read함수를 정의하면 이 동작을 덮어쓸 수 있습니다.

:::

아폴로에는 특정 필드에 대한 허상 포인터를 다룰 수 있는 방법이 없기 때문에 read함수를 커스터마이징해서 사용해야만합니다.
