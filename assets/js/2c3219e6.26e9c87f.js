"use strict";(self.webpackChunkapollo_client=self.webpackChunkapollo_client||[]).push([[7884],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),k=l,m=c["".concat(u,".").concat(k)]||c[k]||g[k]||a;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2288:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={sidebar_position:1,title:"\ucffc\ub9ac(query)"},u=void 0,p={unversionedId:"fetcing/query",id:"fetcing/query",isDocsHomePage:!1,title:"\ucffc\ub9ac(query)",description:"---",source:"@site/docs/fetcing/query.md",sourceDirName:"fetcing",slug:"/fetcing/query",permalink:"/docs/fetcing/query",editUrl:"https://github.com/hojunin/apollo-client-docs/docs/fetcing/query.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ucffc\ub9ac(query)"},sidebar:"tutorialSidebar",previous:{title:"\ud29c\ud1a0\ub9ac\uc5bc",permalink:"/docs/apollo-intro/tutorial"},next:{title:"\ubba4\ud14c\uc774\uc158(mutation)",permalink:"/docs/fetcing/mutation"}},d=[{value:"\uc0ac\uc804 \uc9c0\uc2dd",id:"\uc0ac\uc804-\uc9c0\uc2dd",children:[],level:2},{value:"\ucffc\ub9ac \uc2e4\ud589",id:"\ucffc\ub9ac-\uc2e4\ud589",children:[],level:2},{value:"\ucffc\ub9ac \uacb0\uacfc \uce90\uc2f1",id:"\ucffc\ub9ac-\uacb0\uacfc-\uce90\uc2f1",children:[],level:2},{value:"\uce90\uc2dc \uc5c5\ub370\uc774\ud2b8",id:"\uce90\uc2dc-\uc5c5\ub370\uc774\ud2b8",children:[],level:2},{value:"<strong>\ud480\ub9c1(Polling)</strong>",id:"\ud480\ub9c1polling",children:[],level:2},{value:"<strong>\ub9ac\ud398\uce58(Refetch)</strong>",id:"\ub9ac\ud398\uce58refetch",children:[],level:2},{value:"\ub85c\ub529 \uc0c1\ud0dc \uac10\uc9c0\ud558\uae30",id:"\ub85c\ub529-\uc0c1\ud0dc-\uac10\uc9c0\ud558\uae30",children:[],level:2},{value:"\uc5d0\ub7ec \uc0c1\ud0dc\uac12 \uac10\uc9c0\ud558\uae30",id:"\uc5d0\ub7ec-\uc0c1\ud0dc\uac12-\uac10\uc9c0\ud558\uae30",children:[],level:2},{value:"\ucffc\ub9ac\ub97c \ub2a5\ub3d9\uc801\uc73c\ub85c \uc2e4\ud589\uc2dc\ud0a4\uae30",id:"\ucffc\ub9ac\ub97c-\ub2a5\ub3d9\uc801\uc73c\ub85c-\uc2e4\ud589\uc2dc\ud0a4\uae30",children:[],level:2},{value:"\ud398\uce58 \uc815\ucc45 \uc138\ud305\ud558\uae30",id:"\ud398\uce58-\uc815\ucc45-\uc138\ud305\ud558\uae30",children:[],level:2},{value:"useQuery API",id:"usequery-api",children:[],level:2},{value:"\uacb0\uacfc\uac12",id:"\uacb0\uacfc\uac12",children:[],level:2}],g={toc:d};function c(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/data/queries/"},"Apollo Docs"),"\ub97c \ubc88\uc5ed \ubc0f \uc758\uc5ed\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc774 \uae00\uc740 React\uc5d0\uc11c useQuery Hook\uc73c\ub85c \uc5b4\ub5bb\uac8c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294\uc9c0(fetch)\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774 \uae00\uc744 \ud1b5\ud574 Apollo Client\uac00 \uc5bc\ub9c8\ub098 \ub370\uc774\ud130\ub97c \ucf54\ub4dc\ub97c \uc27d\uac8c \uad00\ub9ac\ud558\ub3c4\ub85d \ud558\ub294\uc9c0 \ubc30\uc6b0\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc804-\uc9c0\uc2dd"},"\uc0ac\uc804 \uc9c0\uc2dd"),(0,a.kt)("p",null,"\uc774 \uae00\uc740 \uc55e\uc120 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ud1b5\ud574 \uae30\ubcf8\uc801\uc73c\ub85c graphql \ucffc\ub9ac\uc5d0 \uc5b4\ub290\uc815\ub3c4 \uc801\uc751\ub418\uc5b4\uc788\uace0 Apollo Client \uc138\ud305\uc744 \ub05d\ub9c8\ucce4\uc73c\uba70 React \uc571\uc744 ApolloProvider \ucef4\ud3ec\ub10c\ud2b8\ub85c \uac10\uc2f8\ub1a8\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ucffc\ub9ac-\uc2e4\ud589"},"\ucffc\ub9ac \uc2e4\ud589"),(0,a.kt)("p",null,"useQuery \ub9ac\uc561\ud2b8 \ud6c5\uc740 apollo \uc571\uc5d0\uc11c \ucffc\ub9ac\ub97c \uad6c\ud604\ud558\ub294 \uac00\uc7a5 \uc911\uc694\ud55c API\uc785\ub2c8\ub2e4. \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \uc548\uc5d0\uc11c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 useQuery\ub97c \uc0ac\uc6a9\ud574\uc57c\ud558\uace0 \uc774\uac78 graphql \ucffc\ub9ac\ubb38\uc5d0 \ub118\uaca8\uc918\uc57c\ud569\ub2c8\ub2e4. \uc571\uc758 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c useQuery\ub294 loading, error, data\ub77c\ub294 \uac12\uc744 \uac00\uc9c4(\ubc1b\ub294 \uac12\uc774 \ub354 \ub9ce\uae34 \ud569\ub2c8\ub2e4) Apollo Client\uc758 \uac1d\uccb4 \ub369\uc5b4\ub9ac \ud558\ub098\ub97c \ub9ac\ud134\ubc1b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uacf5\uc2dd \ubb38\uc11c\uc758 \uc608\uc81c\ub97c \ubd05\uc2dc\ub2e4. \uccab\ubc88\uc9f8\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"GET_DOGS"),"\ub77c\ub294 GraphQL Document\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. gql \ud568\uc218\ub85c \ucffc\ub9ac\uc2a4\ud2b8\ub9c1\uc744 \uac10\uc2f8\uc900\ub2e4\ub294 \uc810\uc744 \uaf2d \uae30\uc5b5\ud558\uc138\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"import { gql, useQuery } from '@apollo/client';\n\nconst GET_DOGS = gql`\n  query GetDogs {\n    dogs {\n      id\n      breed\n    }\n  }\n`;\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"Dogs"),"\ub77c\ub294 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uaecd\ub2c8\ub2e4. \uc774 \uc548\uc5d0\uc11c GET_DOGS \ucffc\ub9ac\ub97c useQuery \ud6c5\uc744 \ud1b5\ud574 \ub118\uaca8\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"function Dogs({ onDogSelected }) {\n  const { loading, error, data } = useQuery(GET_DOGS);\n\n  if (loading) return 'Loading...';\n  if (error) return `Error! ${error.message}`;\n\n  return (\n    <select name=\"dog\" onChange={onDogSelected}>\n      {data.dogs.map(dog => (\n        <option key={dog.id} value={dog.breed}>\n          {dog.breed}\n        </option>\n      ))}\n    </select>\n  );\n}\n")),(0,a.kt)("p",null,"\uc704\uc758 \ucffc\ub9ac\uac00 \uc2e4\ud589\ub418\uba74\uc11c loading, error, data\uac00 \ubcc0\ud654\ud569\ub2c8\ub2e4. Dogs\ub77c\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc774 \uac12\uc774 \ubcc0\ud654\ud568\uc5d0 \ub530\ub77c \ubc1b\uc740 \uac12\uc5d0 \ub9de\ucdb0 \ubcc0\ud654\ub41c UI\ub97c \ub9ac\ud134\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 loading\uc774\uba74 \ub2e8\uc21c\ud788 string \uac12\uc744 \ub9ac\ud134\ud558\uace0, error \uac12\uc774 true\uba74 \uc5d0\ub7ec\uba54\uc2dc\uc9c0\ub97c \ub9ac\ud134\ud569\ub2c8\ub2e4. \ub450 \uac12 \ub2e4 false\ub77c\uba74 data\uac00 \ub4e4\uc5b4\uc654\uc744\ud14c\ub2c8, \uc774 data \uac12\uc5d0 \ub530\ub77c \uc6b0\ub9ac\uac00 \ub9cc\ub4e0 DropDown Component\uac00 \ub9ac\ud134\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 dog\ub77c\ub294 \ub370\uc774\ud130 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud558\uba74 onDogSelected \ud568\uc218\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub2e4\uc74c \uacfc\uc815\uc5d0\uc11c\ub294 \ub354 \uae34\ubc00\ud788 \uc5f0\uad00\ub41c graphql \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 query\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\ucffc\ub9ac-\uacb0\uacfc-\uce90\uc2f1"},"\ucffc\ub9ac \uacb0\uacfc \uce90\uc2f1"),(0,a.kt)("p",null,"Apollo Client\uac00 \ucffc\ub9ac \uacb0\uacfc\ub97c \uc11c\ubc84\uc5d0\uc11c \uc77d\uc5b4\uc62c \ub54c\ub9c8\ub2e4 \uc774 \uacb0\uacfc\uac12\uc744 \uc790\ub3d9\uc73c\ub85c \ub85c\uceec\uc800\uc7a5\uc18c \uaca9\uc778 \uce90\uc2dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774\ub294 \uc774 \ub2e4\uc74c\uc5d0 \ub611\uac19\uc740 \ucffc\ub9ac\ub97c \ucf5c \ud588\uc744 \ub54c \uacb0\uacfc\ub97c \ud68d\uae30\uc801\uc73c\ub85c \ube60\ub974\uac8c \ucc98\ub9ac\ud558\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc2e4\uc81c\ub85c \uce90\uc2f1\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uac83\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 DogPhoto\ub77c\ub294 \uc0c8\ub85c\uc6b4 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4. \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc544\uae4c \ub9cc\ub4e0 Dogs\ub77c\ub294 DropDown \uba54\ub274\uc758 \uac12\uc5d0 \uc601\ud5a5\uc744 \uc8fc\ub294 breed\ub77c\ub294 prop\uc744 \ubc1b\uc2b5\ub2c8\ub2e4(\uc120\ud0dd\ud558\uba74 \ub9ac\uc2a4\ud2b8\uac00 \ub80c\ub354\ub9c1\ud558\ub294 \ub370\uc774\ud130\uac00 \ub2ec\ub77c\uc9c4\ub2e4\ub294 \ub73b)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"const GET_DOG_PHOTO = gql`\n  query Dog($breed: String!) {\n    dog(breed: $breed) {\n      id\n      displayImage\n    }\n  }\n`;\n\nfunction DogPhoto({ breed }) {\n  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {\n    variables: { breed },\n  });\n\n  if (loading) return null;\n  if (error) return `Error! ${error}`;\n\n  return (\n    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />\n  );\n}\n")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \ub208\uc5ec\uaca8\ubd10\uc57c\ud560 \uc810\uc740 useQuery \ud6c5 \uc548\uc5d0 ",(0,a.kt)("strong",{parentName:"p"},"variables"),"\ub77c\ub294 \uba85\uc2dc\uc801\uc778 \uc635\uc158\uc744 \uc8fc\uc5c8\ub2e4\ub294 \uc810 \uc785\ub2c8\ub2e4. \uc774 variables\ub77c\ub294 \uc635\uc158\uc740 \uc6b0\ub9ac\uac00 graphql\ucffc\ub9ac\uc5d0 \ub118\uaca8\uc8fc\uace0\uc2f6\uc740 \ubaa8\ub4e0 \ubcc0\uc218\uac00 \ub2f4\uaca8\uc788\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4.\n\uc774 \ucffc\ub9ac\uc5d0\uc11c\ub294 \ud604\uc7ac \uc120\ud0dd\ub41c breed(\ud488\uc885)\ub77c\ub294 \ubcc0\uc218\ub97c \ub118\uae30\uace0 \uc2f6\uc740\uac81\ub2c8\ub2e4."),(0,a.kt)("p",null,"Dogs(\ub4dc\ub86d\ub2e4\uc6b4 \ucef4\ud3ec\ub10c\ud2b8 \ub77c\uace0 \uac00\uc815)\uc5d0\uc11c 'bulldog'\uc774\ub77c\ub294 \uac12\uc744 \ud074\ub9ad\ud574\uc11c \uc120\ud0dd\ud569\uc2dc\ub2e4. \uadf8\ub7fc \ubd88\ub3c4\uadf8 \uc0ac\uc9c4\uc774 \ub80c\ub354\ub9c1 \ub420\uac70\uc5d0\uc694. \uadf8 \ub2e4\uc74c \uc544\ubb34\uac70\ub098 \ub2e4\ub978 \uc0ac\uc9c4\uc744 \ud074\ub9ad\ud558\uc2dc\uace0, \ub2e4\uc2dc bulldog\ub77c\ub294 \uac12\uc744 \uc120\ud0dd\ud574\ubcf4\uc138\uc694. \uadf8\ub7ec\uba74 bulldog\uc774\ub77c\ub294 \uac12\uc774 breed\ubcc0\uc218\ub85c \ub118\uaca8\uc9c0\uace0 bulldog \uc0ac\uc9c4\uc774 \uc989\uac01 \ub80c\ub354\ub9c1\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\uae4c \ubd88\ub7ec\uc654\ub358 bulldog\ub97c \ub610 \ubd80\ub974\ub2c8 cache\uc5d0\uc11c \ube60\ub974\uac8c \ub370\uc774\ud130\ub97c \uac00\uc838\uc628 \uac83\uc785\ub2c8\ub2e4. Apollo cache\uac00 \uc798 \uc791\ub3d9\ud55c \uac83\uc774\uc8e0."),(0,a.kt)("h2",{id:"\uce90\uc2dc-\uc5c5\ub370\uc774\ud2b8"},"\uce90\uc2dc \uc5c5\ub370\uc774\ud2b8"),(0,a.kt)("p",null,"\ucffc\ub9ac \uacb0\uacfc\ub97c \uce90\uc2f1\ud558\ub294\uac83\uc744 \uc870\uc791\ud558\ub294 \uc77c\uc740 \uc544\uc8fc \uc27d\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc885\uc885 \uce90\uc2dc\ub41c \ub370\uc774\ud130\uac00 \uc11c\ubc84\ub791 \ub3d9\uae30\ud654\ub41c \uc218\uc900\uc73c\ub85c \ucd5c\uc2e0 \ubc84\uc804\uc774\uae38 \uc6d0\ud560 \uc218 \uc788\uc5b4\uc694. Apollo Client\ub294 \uadf8\ub798\uc11c \ub450\uac00\uc9c0 \uc804\ub7b5\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4. \ubc14\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\ud480\ub9c1(Pooling)"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"\ub9ac\ud398\uce6d(Refetching)"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ud480\ub9c1polling"},(0,a.kt)("strong",{parentName:"h2"},"\ud480\ub9c1(Polling)")),(0,a.kt)("p",null,"\ud480\ub9c1\uc740 \uc815\ud574\uc9c4 \uc8fc\uae30\ub85c \ucffc\ub9ac\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ubc1c\uc0dd\uc2dc\ucf1c \uac70\uc758 \uc2e4\uc2dc\uac04\uc73c\ub85c \uc11c\ubc84\uc640 \uce90\uc2dc\ub97c \ub3d9\uae30\ud654\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ucffc\ub9ac\ub97c \ud480\ub9c1\ud558\uae30 \uc704\ud574\uc11c\ub294 pollInterval\uc774\ub77c\ub294 milliseconds \ub2e8\uc704\uc758 \uc635\uc154\ub110\ud55c \uac12\uc744 useQuery \ud6c5\uc5d0\ub2e4\uac00 \ub118\uaca8\uc918\uc57c\ud574\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"function DogPhoto({ breed }) {\n  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {\n    variables: { breed },\n    pollInterval: 500,\n  });\n\n  if (loading) return null;\n  if (error) return `Error! ${error}`;\n\n  return (\n    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />\n  );\n}\n")),(0,a.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \ubcf4\uba74, pollInterval\uc744 500\uc73c\ub85c \uc138\ud305\ud568\uc73c\ub85c\uc368 \ud604\uc7ac \ud488\uc885\uc758 \uac15\uc544\uc9c0 \uc0ac\uc9c4\uc744 \uc11c\ubc84\uc5d0\uc11c 0.5\ucd08\ub9c8\ub2e4 \ud55c\ubc88\uc529 \ubc1b\uc544\uc635\ub2c8\ub2e4.\n\uc8fc\uc758\ud560 \uc810\uc740 \ub9cc\uc57d \uc644\ubcbd\ud55c \uc2e4\uc2dc\uac04\uc744 \uc6d0\ud574\uc11c pollInterval\uc744 0\uc73c\ub85c \uc138\ud305\ud558\uba74 \ud480\ub9c1\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"startPolling\uacfc stopPolling\uc774\ub77c\ub294 \uc635\uc158\uc744 \ucd94\uac00\ub85c \ubd80\uc5ec\ud574\uc11c \ub3d9\uc801\uc73c\ub85c \ucffc\ub9ac\ub97c \uc2dc\uc791\ud558\uace0 \uc885\ub8cc\uc2dc\ud0ac \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\ub9ac\ud398\uce58refetch"},(0,a.kt)("strong",{parentName:"h2"},"\ub9ac\ud398\uce58(Refetch)")),(0,a.kt)("p",null,"\ub9ac\ud398\uce58\ub294 \ud2b9\uc815 \uc8fc\uae30\ub9c8\ub2e4 \ucffc\ub9ac \uacb0\uacfc\ub97c \ucd5c\uc2e0\ud654\ud558\ub294\uac83\uacfc \ubc18\ub300\ub85c, \uc0ac\uc6a9\uc790\uc758 \ud2b9\uc815\ud55c \uc561\uc158\uc5d0 \ub9de\ucd94\uc5b4 \ucffc\ub9ac \uacb0\uacfc\ub97c \ucd5c\uc2e0\ud654\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\n\ud074\ub9ad\ud560 \ub54c\ub9c8\ub2e4 \ucffc\ub9ac\ub97c \ub9ac\ud398\uce58\ud558\ub294 \ubc84\ud2bc\uc778 DogPhoto\ub77c\ub294 \ubc84\ud2bc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucd94\uac00\ud574\ubd05\uc2dc\ub2e4.\n\ucffc\ub9ac\uc758 \ub9ac\ud134\uac12 \uc911 data, error, loading \ub9d0\uace0\ub3c4 refetch\ub77c\ub294 \ud568\uc218\ub97c \uc81c\uacf5\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc774\uc804\ucc98\ub7fc \uc774\uac78 \ubc1b\uc9c0 \uc54a\ub294\ub2e4\uba74, \ucffc\ub9ac\ub294 \uc774\uc804\uacfc \uac19\uc740 \ubcc0\uc218\ub97c \uacc4\uc18d \uc0ac\uc6a9\ud560\uaecd\ub2c8\ub2e4(\ucd5c\uc2e0\ud654\ub97c \uc2dc\ucf1c\ub3c4 \uacc4\uc18d \uac19\uc740\uac83\ub9cc \uac00\uc838\uc628\ub2e4\ub294 \ub9d0\uc785\ub2c8\ub2e4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"function DogPhoto({ breed }) {\n  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {\n    variables: { breed }\n  });\n\n  if (loading) return null;\n  if (error) return `Error! ${error}`;\n\n  return (\n    <div>\n      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />\n      <button onClick={() => refetch()}>Refetch!</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uc0c8\ub85c\uc6b4 \uac15\uc544\uc9c0\uc758 \uc0ac\uc9c4\uc73c\ub85c \ubc14\ub010\ub2e4\ub294 \uc0ac\uc2e4\uc5d0 \uc8fc\ubaa9\ud558\uc138\uc694.\nRefetch\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \ucd5c\uc2e0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uac00\uc7a5 \ud655\uc2e4\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc798\ubabb \uc0ac\uc6a9\ud558\uba74 refetch\ub294 loading state\uc5d0 \uad00\ud55c \ubcf5\uc7a1\ud55c \ubb38\uc81c\uc758 \uc2dc\uc791\uc77c \uc9c0 \ubaa8\ub985\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub85c\ub529-\uc0c1\ud0dc-\uac10\uc9c0\ud558\uae30"},"\ub85c\ub529 \uc0c1\ud0dc \uac10\uc9c0\ud558\uae30"),(0,a.kt)("p",null,"\uc6b0\ub9ac\ub294 useQuery \ud6c5\uc774 \ud604\uc7ac\uc758 \ub85c\ub529 \uc0c1\ud0dc\uac12\uc744 \ub9ac\ud134\ud55c\ub2e4\ub294 \uac78 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac74 \ucffc\ub9ac\uac00 \uccab\ubc88\uc9f8\ub85c \ub85c\ub4dc\ub420 \ub54c\ub294 \uc720\uc6a9\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc6b0\ub9ac\uac00 \ud480\ub9c1\ud558\uac70\ub098 \ub9ac\ud398\uce6d\ud560 \ub54c\ub294 \uc5b4\ub5a8\uae4c\uc694?\n\uc77c\uc804\uc5d0 \ub9ac\ud398\uce58\ud558\ub358 \uc608\uc2dc\ub85c \ub3cc\uc544\uac00\ubd05\uc2dc\ub2e4. \ub9cc\uc57d \ub9ac\ud398\uce58\ud558\ub294 \ubc84\ud2bc\uc744 \ub20c\ub800\ub2e4\uba74, \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \ubc1b\uae30 \uc804\uae4c\uc9c4 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\ub294 \ubaa8\uc2b5\uc744 \ubd24\uc744\uac81\ub2c8\ub2e4.\n\uadf8\ub7fc \ub9cc\uc57d \uc6b0\ub9ac\uac00 \ub370\uc774\ud130\ub97c \ub9ac\ud398\uce6d\ud55c\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc54c\ub824\uc92c\ub2e4\uba74 \uc5b4\ub560\uc744\uae4c\uc694?"),(0,a.kt)("p",null,"useQuery \ud6c5\uc758 response \uac1d\uccb4\ub294 networkStatus\ub77c\ub294 \ucffc\ub9ac\uc758 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub294 \uc798 \uc815\uc81c\ub41c(fine-grained) \uac12\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774 \uac12\uc744 \uc694\uae34\ud558\uac8c \uc0ac\uc6a9\ud558\ub824\uba74 \uc6b0\ub9ac\ub294 notifyOnNetworkStatusChange\ub77c\ub294 \uc635\uc158\uc744 true\ub85c \uc918\uc57c\ud569\ub2c8\ub2e4. \uadf8\ub798\uc57c \uc6b0\ub9ac\uac00 refetch\ub97c \ucf5c \ud588\uc744 \ub54c \uc989\uac01 \ub370\uc774\ud130\uac00 \ubc14\ub01d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"import { NetworkStatus } from '@apollo/client';\n\nfunction DogPhoto({ breed }) {\n  const { loading, error, data, refetch, networkStatus } = useQuery(\n    GET_DOG_PHOTO,\n    {\n      variables: { breed },\n      notifyOnNetworkStatusChange: true,\n    },\n  );\n\n  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';\n  if (loading) return null;\n  if (error) return `Error! ${error}`;\n\n  return (\n    <div>\n      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />\n      <button onClick={() => refetch()}>Refetch!</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\uc774 \uc635\uc158\uc744 \ucf1c\uba74 loading\uac12\ub3c4 \ub530\ub77c\uc11c \uc989\uac01 \ubc14\ub01d\ub2c8\ub2e4. networkStatus\uac12\uc744 \ud1b5\ud574 \ub354\uc6b1 \uc815\ud655\ud55c \ub370\uc774\ud130\ub97c \uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4 \ud558\ub354\ub77c\ub3c4 loading\uac12\uc744 \ubcc0\ud569\ub2c8\ub2e4.\nnetworkStatus\ub294 \uac01\uae30 \ub2e4\ub978 loading \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub290 NetworkStatus enum\uac12 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4.\nRefetch\ub294 NetworkStatus.refetch\ub85c \ud45c\ud604\ub418\uace0 \uc774\uc640 \ube44\uc2b7\ud558\uac8c pooling\uc774\ub098 \ud398\uc774\uc9c0\ub124\uc774\uc158\ub3c4 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5d0\ub7ec-\uc0c1\ud0dc\uac12-\uac10\uc9c0\ud558\uae30"},"\uc5d0\ub7ec \uc0c1\ud0dc\uac12 \uac10\uc9c0\ud558\uae30"),(0,a.kt)("p",null,"errorPolicy\ub77c\ub294 \uc635\uc158\uc744 useQuery \ud6c5\uc5d0 \ub118\uaca8\uc90c\uc73c\ub85c\uc368 \ucffc\ub9ac\uc758 \uc5d0\ub7ec\ub97c \uc790\uc720\uc790\uc7ac\ub85c \ucee8\ud2b8\ub864\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\ndefault\uac12\uc740 'none'\uc778\ub370\uc694, \uc774\uac74 Apollo Client\uac00 \ubaa8\ub4e0 graphql \uc5d0\ub7ec\ub97c \uc2e4\uc2dc\uac04 \uc5d0\ub7ec\ub85c \ubc1b\uc544\ub4e4\uc778\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4.\n\uc774 \uacbd\uc6b0\uc5d0\ub294 error\uac12\uc744 true\ub85c \ucc98\ub9ac\ud574\ubc84\ub9ac\uace0 \uc11c\ubc84\uac00 \ubc1b\uc544\uc624\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ubc84\ub9bd\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9cc\uc57d errorPolicy\ub97c 'all'\ub85c \uc138\ud305\ud558\uba74 useQuery\ub294 graphql \ucffc\ub9ac\uac00 \uc2e4\ud328\ud558\ub354\ub77c\ub3c4 \ub370\uc774\ud130\ub97c \ubc84\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc2e4\ud328\ud55c \ub370\uc774\ud130 \ub9d0\uace0 \ub0a8\uc740 \ub370\uc774\ud130\ub77c\ub3c4 \ub80c\ub354\ub9c1 \ud558\uac8c \ub450\ub294 \uac83\uc774\uc8e0."),(0,a.kt)("h2",{id:"\ucffc\ub9ac\ub97c-\ub2a5\ub3d9\uc801\uc73c\ub85c-\uc2e4\ud589\uc2dc\ud0a4\uae30"},"\ucffc\ub9ac\ub97c \ub2a5\ub3d9\uc801\uc73c\ub85c \uc2e4\ud589\uc2dc\ud0a4\uae30"),(0,a.kt)("p",null,"\ub9ac\uc561\ud2b8\uac00 useQuery \ud6c5\uc744 \ucf5c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1(or \ub9c8\uc6b4\ud2b8)\ud560 \ub54c, \uc790\ub3d9\uc73c\ub85c \uc774 \ucffc\ub9ac\ub97c \ud558\ub098 \uc2e4\ud589\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc0ac\uc6a9\uc790\uc758 \ud074\ub9ad \uac19\uc740 \ud2b9\ubcc4\ud55c \uc774\ubca4\ud2b8\uc5d0 \ud55c\ud574\uc11c\ub9cc \uc774 \ucffc\ub9ac\ub97c \ub0a0\ub9ac\uace0 \uc2f6\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?"),(0,a.kt)("p",null,"\uc774\ub54c \uc0ac\uc6a9\ud558\ub294\uac83\uc774 ",(0,a.kt)("strong",{parentName:"p"},"useLazyQuery")," \ud6c5 \uc785\ub2c8\ub2e4. useLazyQuery\uc740 \ud2b9\uc815 \uc561\uc158\uc758 \uacb0\uacfc\ub85c \uc2e4\ud589\ud558\uae30\uc5d0 \uc801\uaca9\uc778 \ucffc\ub9ac\uc785\ub2c8\ub2e4.\n\uc774 \ud6c5\uc740 \ub531 1\uac00\uc9c0 \ud2b9\uc9d5\uc744 \uc81c\uc678\ud558\uba74 useQuery\ub791 \ub611\uac19\uc740 \uae30\ub2a5\uc744 \ud569\ub2c8\ub2e4. \uadf8\uac74, useLazyQuery\uac00 \ud638\ucd9c \ub420 \ub54c \uc989\uac01 \ucffc\ub9ac\ub97c \ub0a0\ub9ac\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \ucffc\ub9ac\ub97c \ub0a0\ub9ac\ub294 \ud568\uc218\ub97c \ub9ac\ud134\ud558\uc8e0.\n\uadf8\ub9ac\uace0 \uadf8 \ud568\uc218\ub97c \ucffc\ub9ac\ub97c \ubc1c\uc0dd\ud560 \uc900\ube44\uac00 \ub418\uba74 \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"import React from 'react';\nimport { useLazyQuery } from '@apollo/client';\n\nfunction DelayedQuery() {\n  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);\n\n  if (loading) return <p>Loading ...</p>;\n\n  return (\n    <div>\n      {data && data.dog && <img src={data.dog.displayImage} />}\n      <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>\n        Click me!\n      </button>\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"\ud398\uce58-\uc815\ucc45-\uc138\ud305\ud558\uae30"},"\ud398\uce58 \uc815\ucc45 \uc138\ud305\ud558\uae30"),(0,a.kt)("p",null,"\uae30\ubcf8\uac12\uc73c\ub85c useQuery \ud6c5\uc740 \uc694\uccad\ud55c \ub370\uc774\ud130\uac00 \uc774\ubbf8 \ub85c\uceec\uc5d0 \uc788\ub294\uc9c0 \uce90\uc2dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ub9cc\uc57d \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uce90\uc2dc\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub2e4\uba74 \uad73\uc774 graphql \uc11c\ubc84\uc5d0 \uc694\uccad\ud558\uc9c0 \uc54a\uace0 \uce90\uc2dc \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\uc90d\ub2c8\ub2e4. \uc774\uac78 ",(0,a.kt)("strong",{parentName:"p"},"cache-first")," \uc815\ucc45\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \uae30\ubcf8 \uc815\ucc45\uc774\uae30\ub3c4 \ud558\uc8e0.\n\uc774\uac83 \ub9d0\uace0\ub3c4 \ub2e4\ub978 \uc815\ucc45\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub294\ub370 \ub2e4\uc74c \ucf54\ub4dc\uc640 \uac19\uc774 \uc635\uc154\ub110\ud558\uac8c fetchPolicy\ub77c\ub294 \uc635\uc158\uc744 useQuery\ub97c \ucf5c \ud560 \ub54c \ub123\uc5b4\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'const { loading, error, data } = useQuery(GET_DOGS, {\n  fetchPolicy: "network-only"\n});\n')),(0,a.kt)("p",null,"\ud604\uc7ac Apollo Client\uac00 \uc81c\uacf5\ud558\ub294 fetch-policy\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\uc815\ucc45 \uc774\ub984"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\uc124\uba85"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cache-first"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apollo Clinet\uac00 cache\ub97c \uba3c\uc800 \ud655\uc778\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc694\uccad\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uce90\uc2dc\uc5d0 \uc874\uc7ac\ud55c\ub2e4\uba74 \uadf8\ub0e5 \uadf8 \ub370\uc774\ud130\ub97c \ub9ac\ud134\ud574\uc90d\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 graphQL\uc11c\ubc84\uc5d0 \uc694\uccad\ud574\uc11c \ubc1b\uc544 \ub118\uaca8\uc90d\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cache-only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apollo Client\uac00 \uce90\uc2dc\ub9cc \ud655\uc778\ud569\ub2c8\ub2e4. \uc694\uccad\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uce90\uc2dc\uc5d0\uc11c \ud655\uc778\ud588\uc744 \ub54c \ub9cc\uc57d \ud558\ub098\ub77c\ub3c4 \uc5c6\ub2e4\uba74 Apollo Clinet\ub294 error\ub97c \ubc49\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cache-and-network"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apollo Client\uac00 \uce90\uc2dc\uc640 gql \uc11c\ubc84 \ub458\ub2e4 \ucffc\ub9ac\ud569\ub2c8\ub2e4. \ucffc\ub9ac\ub294 \uc790\ub3d9\uc73c\ub85c \uce90\uc2dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \uc11c\ubc84 \ub370\uc774\ud130\uc640 \uce90\uc2dc\ub41c \ub370\uc774\ud130\uc758 \uc2f1\ud06c\ub97c \ub9de\ucdb0\uc8fc\uba74\uc11c\ub3c4 \ube60\ub978 \uc751\ub2f5\uc18d\ub3c4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"network-only"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apollo Clinet\ub294 \uba3c\uc800 graphql \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \uc694\uccad\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 cache\uc5d0 \uadf8 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \uc774 \uc815\ucc45\uc740 \uc11c\ubc84 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \ub54c\ubb38\uc5d0 \uc815\ud655\ud558\uc9c0\ub9cc \uc815\uc791 \uce90\uc2dc\uc5d0 \uadf8 \ub370\uc774\ud130\uac00 \uc788\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uc11c\ubc84\ub97c \ub2e4\ub140\uc624\uae30 \ub54c\ubb38\uc5d0 \ube44\ud6a8\uc728\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"no-cache"),(0,a.kt)("td",{parentName:"tr",align:"left"},"network-only\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \ucffc\ub9ac \uacb0\uacfc\uac00 \uce90\uc2dc\uc5d0 \uc800\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \ucc28\uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"standby"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ud2b9\uc815 \uac12\uc774 \ubcc0\ud588\uc744 \ub54c \uc790\ub3d9\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc9c0 \uc54a\ub294\ub2e4\ub77c\ub294 \uc0ac\uc2e4\uc744 \uc81c\uc678\ud558\uba74 cache-first\uc640 \ube44\uc2b7\ud55c \ub85c\uc9c1\uc785\ub2c8\ub2e4. \ub2a5\ub3d9\uc801\uc73c\ub85c(\ubc84\ud2bc\uac19\uc740\uac70 \ub20c\ub7ec\uc11c) \ub9ac\ud398\uce58\ub97c \ud558\ub358\uac00 update\ucffc\ub9ac\ub97c \ub0a0\ub824\uc11c \uac12\uc744 \ucd5c\uc2e0\ud654 \ud574\uc57c\ub429\ub2c8\ub2e4.")))),(0,a.kt)("h2",{id:"usequery-api"},"useQuery API"),(0,a.kt)("p",null,"useQuery \ud6c5\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc635\uc158\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\uc635\uc158"),(0,a.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"DocumentNode"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variables"),(0,a.kt)("td",{parentName:"tr",align:null},"{","[key:string]",":any}"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucffc\ub9ac\uac00 \ud544\uc694\ub85c\ud558\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ub2f4\uc740 \ubcc0\uc218 \uac1d\uccb4"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pollInterval"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ub97c \ud480\ub9c1\ud560 \uc8fc\uae30, ms\ub2e8\uc704\ub85c \uc368\uc918\uc57c \ud568. default\ub294 0\uc774\uba70 0\uc774\uba74 \ud480\ub9c1 \uc548\ud568"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"notifyOnNetworkStatusChange"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"networkStatus\uc5d0 \ub530\ub77c \ub80c\ub354\ub9c1\ud560 \uc9c0 \uc548\ud560\uc9c0. default\ub294 false (\uc704\uc5d0 \uc124\uba85 \ub418\uc5b4\uc788\uc74c)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fetchPolicy"),(0,a.kt)("td",{parentName:"tr",align:null},"FetchPolicy"),(0,a.kt)("td",{parentName:"tr",align:null},"Apollo cache\ub97c \uc5bc\ub9c8\ub098 \uc0ac\uc6a9\ud560\uc9c0. \uc815\ucc45\uc5d0\ub300\ud55c \uc124\uba85\uc740 \uc704\uc5d0 \uc790\uc138\ud788 \ud574\ub193\uc558\uc74c"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextFetchPolicy"),(0,a.kt)("td",{parentName:"tr",align:null},"FetchPolicy"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucffc\ub9ac\ub97c \ud55c\ubc88 \uc2e4\ud589\ud558\uace0 \ub2e4\uc74c \uc2e4\ud589\ud560 \ub54c\uc758 FetchPolicy\ub97c \uc815\ud568. cache-and-network\ub098 network-only\ub85c \uc77c\ub2e8 \uc2e4\ud589\ud558\uace0 cache-first\ub85c \ub3cc\uc544\uac08 \ub54c \uc720\uc6a9\ud558\ub2e4"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorPolicy"),(0,a.kt)("td",{parentName:"tr",align:null},"ErrorPolicy"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucffc\ub9ac\uc758 \uacb0\uacfc\ub85c \ub098\uc624\ub294 \uc5d0\ub7ec\ub97c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560\uc9c0. default\ub294 'none'\uc774\uace0 \uc774\ub294 gql \uc5d0\ub7ec\ub294 \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\uc774\uae30\ub54c\ubb38\uc5d0 \uc5b4\ub5a4 \ub370\uc774\ud130\ub3c4 \uc8fc\uc9c0 \uc54a\ub294\ub2e4. (\uc704\uc5d0 \uc798 \uc124\uba85\ud574\ub1a8\uc74c)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ssr"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc11c\ubc84\ucabd \ub80c\ub354\ub9c1 \uc2dc\uc5d0\ub294 \ucffc\ub9ac\ub97c \uc2a4\ud0b5\ud560\uc9c0"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"displayName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"React devTools\uc5d0 \ubb50\ub77c\uace0 \ub098\uc62c\uc9c0. Default\ub294 'Query'"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"skip"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub9cc\uc57d skip\uac12\uc774 true\uba74 \ucffc\ub9ac\ub294 \uc2a4\ud0b5\ub41c\ub2e4(Call \uc548\ub428). useLazeQuery\uc5d0\uc120 \ubabb\uc500."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onComplelted"),(0,a.kt)("td",{parentName:"tr",align:null},"data: TData","|","{} => void"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucffc\ub9ac\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uacb0\uacfc\ub97c \uac00\uc9c0\uace0 \ub3cc\uc544\uc654\uc744 \ub54c(error\uac00 false\uc77c \ub54c) \ucf5c\ubc31\uc73c\ub85c \uc2e4\ud589\ud560 \ud568\uc218"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onError"),(0,a.kt)("td",{parentName:"tr",align:null},"(error: ApolloError) => void"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc704\uc640 \ubc18\ub300\ub85c error\uac00 true\uc77c \ub54c \uc2e4\ud589\ud560 \ucf5c\ubc31\ud568\uc218"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"Record<string, any>"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucef4\ud3ec\ub10c\ud2b8\uc640 \ub124\ud2b8\uc6cc\ud06c \uac04 \uacf5\uc720\ub418\ub294 context"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"partialRefetch"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\ub9cc\uc57d \uc774 \uac12\uc774 true\uba74 \ucffc\ub9ac\uc758 \uacb0\uacfc\ub85c \ubc1b\uc740 \uac12\uc774 \ubd80\ubd84\uc801\uc774\ub77c\uba74 \ub9ac\ud328\uce58\ud569\ub2c8\ub2e4. \uadf8\ub807\uac8c \ubc1b\uc740 data\ub294 Apollo Client QueryManager\uc5d0 \uc758\ud574 \ud145 \ube48 \uac1d\uccb4\ub85c \ucd08\uae30\ud654\ub41c\ub2e4. partialRefetch\ub294 \ubc31\uc5d4\ub4dc\ucabd \ud638\ud658\uc131 \uc774\uc288 \ub54c\ubb38\uc5d0 default\uac00 false\uc9c0\ub9cc \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d0\uc11c true\ub85c \ubc14\uafb8\ub294\uac8c \ud0c0\ub2f9\ud568"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client"),(0,a.kt)("td",{parentName:"tr",align:null},"ApolloClient"),(0,a.kt)("td",{parentName:"tr",align:null},"ApolloClinet \uc778\uc2a4\ud134\uc2a4. useQuery\ub098 Query\ub294 context\ub97c \ud1b5\ud574 \uac74\ub124\ubc1b\uc544 \uc0ac\uc6a9\ud55c\ub2e4. \ud558\uc9c0\ub9cc \ub2e4\ub978 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc0ac\uc6a9\ud560\uaebc\uba74 \uc5ec\uae30\uc5d0\uc11c \uba85\uc2dc\uc801\uc73c\ub85c \ub118\uaca8\uc918\uc57c\ud55c\ub2e4."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"returnPartialData"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\uce90\uc2dc\uc5d0 \uc694\uccad\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uc5c6\ub354\ub77c\ub3c4, \uadf8 \ubd80\ubd84\ub9cc\uc774\ub77c\ub3c4 \ub118\uaca8\ubc1b\uc744\uc9c0. default\ub294 false"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"\uacb0\uacfc\uac12"},"\uacb0\uacfc\uac12"),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ub2e4\uc591\ud55c API\ub97c \ub2f4\uc544 useQuery \ud6c5\uc744 \ub0a0\ub9ac\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 property\ub4e4\uc744 \ub2f4\uc740 result \uac1d\uccb4\uac00 \ub9ac\ud134\ub429\ub2c8\ub2e4. \uc774 \uac1d\uccb4\ub294 \ucffc\ub9ac \uacb0\uacfc\uc640 \ub354\ubd88\uc5b4 \ub9ac\ud398\uce6d\uc774\ub098 \ub3d9\uc801 \ud480\ub9c1, \ud398\uc774\uc9c0\ub124\uc774\uc158\uacfc \uad00\ub828\ub41c \ud568\uc218\ub4e4\ub3c4 \uac19\uc774 \ubc18\ud658\ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub85c\uc368 Query\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.useQuery \ud6c5\uc73c\ub85c \uc5b4\ub5bb\uac8c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294\uc9c0(Fetch)\uc5d0 \ub300\ud574 \uc774\ud574\ud558\uc168\uc73c\ub9ac\ub77c \uc0dd\uac01\ub429\ub2c8\ub2e4.\n\ub2e4\uc74c \uc2dc\uac04\uc5d0\ub294 useMutation \ud6c5\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8(\uc0dd\uc131, \uc218\uc815, \uc0ad\uc81c)\ud558\ub294\uc9c0 \ubc30\uc6cc\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);