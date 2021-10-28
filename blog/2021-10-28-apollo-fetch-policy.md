---
slug: apollo-fetch-policy
title: 아폴로 캐시정책(fetchPolicy)
authors: hojunin
tags: [cache]
---

# [Apollo Clinet Query - Cache & Network](https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980)

이 글은 위 블로그의 글을 의역 및 내용추가한 글입니다.

Apollo Client는 굉장히 똑똑하게 자원을 관리하는데, 그 중 으뜸인 기능이 바로 Apollo Cache입니다. 왜냐하면 속도의 측면에서 다음과 같은 공식이 성립하기 때문에 그렇습니다.

Network < Cache

즉, 직접 서버에 call하는 동작보다 과거에 받았던 데이터를 잠깐 저장하는 cache에서 받아오는게 훨씬 빠릅니다.그렇게 좋은거면 항상 cache를 이용하면 되지 않을까요? 하지만 cache는 실제 데이터와의 괴리가 발생할 가능성이 있어 명확함을 요하는 부분에서는 사용해서는 안되고, 토큰같이 저장해선 안되는 데이터가 캐시에 저장되어있는 경우도 있으므로 개발 단계에서 이 부분을 신경써야 합니다.

Apollo는 그래서, 우리가 그 방식을 선택할 수 있게 fetching policy를 만들어 놓았습니다. 쿼리를 날리고 받은 결과값을 cache memory에 저장하고 나중에 똑같은 콜을 하면 불필요하게 서버에 다시 요청하지 않고 그냥 cache에 있는 결과값을 그대로 가져다 씁니다. 이를 fetch Policy라고 부르는데, 효율성을 위해 cache를 활용할지 network를 활용할 지 정하는 것입니다.

![스크린샷 2021-09-19 오후 3.21.51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c097d9b4-0ed1-4026-bf8f-6d5970742262/스크린샷_2021-09-19_오후_3.21.51.png)

위 사진을 보면 `useGetArticlesQuery`라는 쿼리를 날려서 데이터를 가져오려고 합니다. 이 때 Apollo Client는 Cache에 저장된 데이터를 긁어올지, 서버로 직접 콜을 날릴지에 대한 정책을 선택하게 되는데 그 선택지가 우측에 보이는 6가지 옵션들입니다.

---

## Cache-First

cache-first는 default 옵션입니다. fetchPolicy를 따로 지정하지 않는다면 이 옵션이 선택된다는 뜻입니다.

cache를 먼저 체크하기 때문에 응답이 빠르다는 점이 특징이고, 데이터가 바뀔 것 같지 않을 때 선택하기 좋습니다. 데이터가 자주 바뀐다면 cache를 거치고 network도 거쳐야 하기 때문에 크게 효율적이지 않습니다.

작동방식은 다음과 같습니다.

![https://miro.medium.com/max/1400/1*Akd1I7jc0teE_mz15fnZog.jpeg](https://miro.medium.com/max/1400/1*Akd1I7jc0teE_mz15fnZog.jpeg)

1. 쿼리를 날려 데이터를 fetch해옵니다. Apollo는 Cache에 이전에 받은적 있나 확인해봅니다. 만약 있다면 2,3번 스킵하고 4번으로 이동합니다.
2. Cache에 데이터가 없다면 Network Request를 날린다.
3. Network Request를 받아서 cache를 update한다.
4. Data를 Client에 넘겨준다.

## Cache-and-Network

자주 업데이트되는 데이터를 fetch해올 때 특히 좋습니다. cache-first가 빠른 응답이 특징이라면, cache-and network는 cache를 서버에 맞추어 최신화된 상태로 유지하는데 비중을 둔 정책이라고 볼 수 있습니다. 데이터가 자주 바뀌어서 쿼리가 자꾸 옛날 데이터를 가져온다면, 이 정책을 시도해보면 됩니다.

작동방식은 다음과 같습니다.

![https://miro.medium.com/max/1400/1*nNwmukDGTnMJ_xDpGndFJw.jpeg](https://miro.medium.com/max/1400/1*nNwmukDGTnMJ_xDpGndFJw.jpeg)

1. 쿼리를 날려 데이터를 fetch를 시도한다. Apollo는 Cache를 뒤져서 이전에 받은적 있나 확인한다.
2. 만약 데이터가 cache안에 있으면 cache된 데이터를 리턴한다.
3. 2번에서 데이터가 있었건 없었건, 서버에다가 요청보내서 Cache에 있는 데이터랑 서버랑 맞는지 확인한다.
4. 그대로 cache를 update한다.
5. update된 데이터를 client에 보내준다.

## Network-Only

만약 실수하면 안되는 타입의 데이터(돈 관련된?) cache에 update되지 않은 데이터가 들어있어서 혹시라도 옛날 데이터로 나온다면 큰 문제가 될 겁니다. 이럴 땐 그냥 속편하게 **효율성 가져다 버리고** network-only policy를 쓰면 됩니다.

다만 cache를 거치긴 하는데, 이유는 다른 쿼리에서 해당 데이터를 cache-frst나 cache and network로 가져다 쓸 수도 있고 나중에 쓸 수도 있으니까 일단 update 하는겁니다.

작동 방식은 다음과 같습니다.

![https://miro.medium.com/max/1400/1*I2k6x1p4bWqBhfrBqU5O1w.jpeg](https://miro.medium.com/max/1400/1*I2k6x1p4bWqBhfrBqU5O1w.jpeg)

1. Apollo가 cache는 체크하지 않고 직통으로 network request를 날린다.
2. 서버는 받아서 response를 날려준다. 이걸 받아서 cache를 업데이트 한다.
3. update된 cache를 보내준다.

## no-cache

이건 network-only와 비슷한 정책인데 차이점이라면 cache를 업데이트 하지 않는다는 점입니다.

만약 캐쉬나 쿠키같은 곳에 절대 저장되지 않아야 하는 데이터, 꼭 서버에 암호화해서 보관해야 하는 데이터 등은 아예 cache를 이용하지 않아야 합니다. 그럴 때 쓰는 정책이라고 보면 됩니다.

작동방식은 다음과 같습니다.

![https://miro.medium.com/max/1400/1*LAP8kvXA--rMysxvLDLjuw.jpeg](https://miro.medium.com/max/1400/1*LAP8kvXA--rMysxvLDLjuw.jpeg)

1. Apollo가 cache를 거치지 않고 직통으로 network request를 서버에 보낸다.
2. 서버도 cache를 거치지 않고 직통으로 client에 데이터를 쏴준다.

## cache-only

no-cache 정책과 반대로, 이 정책은 network request를 만들어내는걸 금지합니다. 만약 이 정책을 쓰고 cache를 들여댜 봤는데 원하는 데이터가 없다면 바로 error를 뱉습니다. 만약 offline에서 사용할 때 필요한 쿼리가 있다면, 일관된 데이터를 보여줘야 하는 쿼리가 있다면 이 정책을 쓰면 좋습니다.

작동방식은 다음과 같습니다.

![https://miro.medium.com/max/1400/1*CeTQH5SP2i_XfFFroT6N7Q.jpeg](https://miro.medium.com/max/1400/1*CeTQH5SP2i_XfFFroT6N7Q.jpeg)

1. Apollo가 cache를 뒤져서 데이터를 찾는다.
2. 데이터가 있으면 client에 리턴해주고 없으면 에러를 뱉는다.

---

### Standby

cache-first와 동일한 논리로 생각하면 편합니다. 다른점은 특정 필드값이 변할 때 자동으로 캐시를 업데이트해주지 않습니다. refetch나 updateQueries함수를 활용해서 직접 업데이트 해줘야 합니다. 해당 글에서도 다루지 않고 자주 쓰이지도 않으니 알고만 계시면 될 것 같습니다.

---

이 fetch-policy 옵션은 거의 default값인 cache-first로 두기 쉬운데, 은근히 이 fetch policy를 아무거나 했다가 무한 쿼리 콜을 한다던가 데이터가 있어야 하는데 비어있다던가 하는 일이 많습니다. 처음 겪어보면 이게 무슨일인가 싶지만, Apollo를 좀 다루다 보면 아, 이거 cache문제가 아닐까 의심하게 됩니다.

그럴 때 잘 대처하려면 애초에 fetch-policy를 명확하게 알고 사용하는게 좋습니다.
