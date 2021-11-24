---
sidebar_position: 1
title: 아폴로 클라이언트 성능 향상시키기(Improving Performance)
---

# 아폴로 클라이언트 성능 향상시키기

---

🧹 [Apollo Docs](https://www.apollographql.com/docs/react/performance/performance/)를 번역 및 의역한 내용입니다.

---

## 캐시데이터 리다이렉팅(cache redirecting)

종종 쿼리가 다르다는 이유로 똑같은 데이터가 요청될 때가 있습니다. 예를 들어 리스트용 데이터와 세부화면 데이터는 거의 같은 데이터죠.

이런 경우엔 캐시 리다이렉팅을 활용해서 추가 쿼리 없이 데이터를 페치해올 수 있습니다. [다음 링크](https://hojunin.github.io/apollo-client-docs/docs/caching/advanced#%EC%BA%90%EC%8B%9C-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8C%85)를 참고해주세요

## 데이터 미리 가져오기(prefetch)

데이터 미리 가져오기는 UI가 렌더링되기 전에 서버에서 데이터를 가져오는 것을 말합니다. 이를 통해 사용자의 쾌적한 경험을 증대시킬 수 있습니다.

prefetching을 하는 대부분의 경우엔 사용자가 필요하겠다 싶은 데이터를 추측하고 미리 쿼리하는 방식이었습니다.

예를 들어 아래 코드에서, 링크 컴포넌트의 onMouseOver 이벤트에서 GET_DOG 도큐먼트가 담긴 쿼리를 호출합니다. 그리고 사용자가 이 링크를 누르면 방금 호출한 쿼리에서 받아온 값으로 UI를 렌더링합니다.

```tsx
function Feed() {
  const { loading, error, data, client } = useQuery(GET_DOGS);

  let content;
  if (loading) {
    content = <Fetching />;
  } else if (error) {
    content = <Error />;
  } else {
    content = (
      <DogList
        data={data.dogs}
        renderRow={(type, data) => (
          <Link
            to={{
              pathname: `/${data.breed}/${data.id}`,
              state: { id: data.id },
            }}
            onMouseOver={() =>
              client.query({
                query: GET_DOG,
                variables: { breed: data.breed },
              })
            }
            style={{ textDecoration: "none" }}
          >
            <Dog {...data} url={data.displayImage} />
          </Link>
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {content}
    </View>
  );
}
```

GET_DOG를 쿼리하고 정상적으로 결과를 받게되면 이 값은 캐싱됩니다. 그리고 유저가 그 링크를 클릭했을 때 해당 상세 페이지가 캐시로부터 불러와지기 때문에 로딩동작 없이 즉각 반응하는 것 처럼 보이게 됩니다.

위의 예시처럼 마우스를 올리는 동작 말고도 데이터 미리 가져오기를 사용할만한 이벤트를 소개하자면 다음과 같습니다.

- 다음 페이지로 가기가 있는 페이지들, 미리 다음 페이지에서 필요한 쿼리를 해둘 수 있습니다.
- 만약 GA같은 분석도구에 우리 서비스의 특정 페이지들 간의 페이지 이동이 잦다고 나오면, 이들 페이지들에서 다른 페이지의 데이터를 미리 쿼리해두는 것도 좋겠죠.
- Carousel같은 UI나 Swiperble 리스트같은 경우 당장은 하나만 보이지만 여러개의 데이터가 있죠. 이런 경우 누를 때마다 가져오는 것 보다 ,미리 부분 아니면 전부를 쿼리해오는게 좋습니다.

prefetching의 정수는 SSR입니다. SPA의 단점인 첫 페이지를 로드하는데 오래 걸린다는 단점을 prefetching으로 커버해보세요. [다음 링크](https://www.apollographql.com/docs/react/performance/server-side-rendering/#rehydrating-the-client-side-cache)를 참고하시면 됩니다.
