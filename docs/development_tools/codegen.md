---
sidebar_position: 1
title: 코드제너레이터(codegen)
---

# Apollo Client Graphql Codegen

---

[Apollo Docs](https://www.apollographql.com/docs/react/development-testing/developer-tooling/#apollo-codegen)를 번역 및 의역한 내용입니다

---

## Apollo Codegen

Apollo Codegen은 graphql 상세를 기반으로 API코드나 타입을 생성해주는 도구입니다. 일반적으로 swift나 typescript, flow annotation, scala code와 같은 코드들로 변환해줍니다만, 지속적으로 다른 언어도 지원할 수 있도록 기능을 확장중에 있습니다.

### 사용법

몇몇 방법이 있지만 그 중 `apollo-codegen`을 사용하신다면, 다음 코드를 shell에 입력해서 패키지를 설치합니다. (전역으로)

```tsx
npm install -g apollo-codegen
//
yarn add global apollo-codegen
```

### introspect-schema

introspect-schema의 목적은 주어진 graphql 스키마를 읽고(해당 서버에 정의된) [introspection](https://graphql-kr.github.io/learn/introspection/)(링크참조) JSON 파일을 만들어냅니다. 만들 때 로컬에 저장된 파일을 사용할 수도 있고, graphql서버에서 가져올 수도 있습니다. 이렇게 만들어진 introspect-schma 파일은 codegen을 할 때 필요합니다.

서버에서 graphql 스키마를 다운받기 위해 다음과 같은 command를 shell에 입력합시다. 현재는 로컬서버를 8080포트에서 구동하고 있다고 가정한 것입니다.

```tsx
apollo-codegen introspect-schema http://localhost:8080/graphql --output schema.json
```

http 요청을 보낼 때 header 옵션을 추가해줘도 됩니다. 예를 들어 authentication token을 헤더에 실어 보내려면 `—header "Authorization: Bearer <token>`을 추가하시면 됩니다.`insecure`옵션을 추가해서 SSL에러를 무시할 수도 있습니다.

로컬에 저장된(파일로 가지고 있는) graphql 명세로부터 스키마르 만들어낼 땐 다음과 같이 입력하시면 됩니다.

```tsx
apollo-codegen introspect-schema schema.graphql --output schema.json
```

### generate

`generate`라는 명령어는 schema에 적힌대로 쿼리와 뮤테이션을 위한 type을 만들어냅니다.

예를 들어 다음 코드는 schema.json이라는 파일에 적힌대로 type을 만들어서 swift파일에 기록합니다.

```tsx
apollo-codegen generate **/*.graphql --schema schema.json --output API.swift
```

—를 붙히고 파일 이름을 .ts 등으로 정하면 typescript나 다른 언어로도 생성해서 받을 수 있습니다.

`target` option:

```tsx
# TypeScript
apollo-codegen generate **/*.graphql --schema schema.json --target typescript --output operation-result-types.ts
# Flow
apollo-codegen generate **/*.graphql --schema schema.json --target flow --output operation-result-types.flow.js
# Scala
apollo-codegen generate **/*.graphql --schema schema.json --target scala --output operation-result-types.scala
```

### gql` 템플릿 리터럴

만약 소스파일이 js나 ts파일이라면 codegen은 gql tag template을 보고 타입이나 쿼리를 추론합니다. tag이름은 command line에서 —tag-name옵션으로 구별 가능합니다.

### .graphqlconfig

사용할 graphql schema를 선택할 때 —schem 옵션을 사용하는 대신에 .graphqlconfig 파일에 적어둘 수도 있습니다. 여러 종류의 스키마 .graphqlconfig파일에 명시해둔 경우 —project-name 옵션으로 어떤 스키마를 적용할 지 선택할 수 있는 것입니다.

### Typescript나 Flow를 사용한다면?

만약 apollo graphql을 typescript나 flow를 사용한다면 모든 graphql selection set에 \_\_typename을 추가해줘야 한다는 점을 명심하세요.

:::info
selection set : graphql의 리턴값에서 원하는 필드를 고를 때 여는 중괄호와 그 내용이라고 이해하면 됩니다.
:::
`@apollo/client`를 사용중이라면 `apollo-codegen`에 `—addTypename`만 붙혀준다면 모든 graphql 동작에 대해 자동으로 `__tyepname`을 추가해줍니다. 이 과정은 `GraphQLUnionType`과 `GraphQLInterfaceType`을 정확하게 묘사할 수 있기 때문에 꼭 필요합니다.

**왜 `__typename` 필드가 필요한걸까요?**

Codegen을 할 때 Graphql 스키마에서 타입 정보를 받아서 가능한 타입을 최대한 추론합니다. 하지만  `GraphQLUnionType` 이나 `GraphQLInterfaceType`의 경우 해당 필드가 가질 수 있는 타입이 워낙 다양합니다. 이 떄, \_\_typename을 판별자로 활용해서 union으로부터 타입을 분별해낼 수 있습니다.

예를 들어 다음의 스키마를 한번 보세요.

```tsx
interface Character {
  name: String!
}

type Human implements Character {
  homePlanet: String
}

type Droid implements Character {
  primaryFunction: String
}
```

Character의 field를 정할 때 Human이든 Droid가 될 수 있습니다. 그리고 Human과 Droid 객체는 다른 필드들을 가지고 있습니다.

```tsx
query Characters {
  characters(episode: NEW_HOPE) {
    name

    ... on Human {
      homePlanet
    }

    ... on Droid {
      primaryFunction
    }
  }
}
```

Apollo Codegen은 위의 쿼리를 다음과 같은 타입으로 정의합니다.

```tsx
export type CharactersQuery = {
  characters: Array<
    | {
        __typename: "Human";
        name: string;
        homePlanet: ?string;
      }
    | {
        __typename: "Droid";
        name: string;
        primaryFunction: ?string;
      }
  >;
};
```

이 타입은 모든 가능한 타입을 다루도록 사용할 수 있습니다. 아래 코드를 보면 character객체의 \_\_typename으로 Human과 Droid가 구분됩니다.

```tsx
function CharacterFigures({ characters }: CharactersQuery) {
  return characters.map(character => {
    switch(character.__typename) {
      case "Human":
        return <HumanFigure homePlanet={character.homePlanet} name={character.name} />case "Droid":
        return <DroidFigure primaryFunction={character.primaryFunction} name={character.name} />}
  });
}
```
