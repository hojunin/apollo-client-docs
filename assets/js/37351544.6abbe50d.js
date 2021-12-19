"use strict";(self.webpackChunkapollo_client=self.webpackChunkapollo_client||[]).push([[4463],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8809:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:6,title:"\uce90\uc2dc\ub97c \ub354\uc6b1 \ub611\ub611\ud558\uac8c \uc0ac\uc6a9\ud558\uae30(Advanced)"},c="\uce90\uc2dc\ub97c \ub354\uc6b1 \ub611\ub611\ud558\uac8c \uc0ac\uc6a9\ud558\uae30(Advanced)",p={unversionedId:"caching/advanced",id:"caching/advanced",isDocsHomePage:!1,title:"\uce90\uc2dc\ub97c \ub354\uc6b1 \ub611\ub611\ud558\uac8c \uc0ac\uc6a9\ud558\uae30(Advanced)",description:"---",source:"@site/docs/caching/advanced.md",sourceDirName:"caching",slug:"/caching/advanced",permalink:"/docs/caching/advanced",editUrl:"https://github.com/hojunin/apollo-client-docs/docs/caching/advanced.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\uce90\uc2dc\ub97c \ub354\uc6b1 \ub611\ub611\ud558\uac8c \uc0ac\uc6a9\ud558\uae30(Advanced)"},sidebar:"tutorialSidebar",previous:{title:"\uce90\uc2dc \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",permalink:"/docs/caching/custom_cache"},next:{title:"Apollo Client\uc5d0\uc11c Local State \uad00\ub9ac\ud558\uae30",permalink:"/docs/local_state/overview"}},s=[{value:"\ubd88\ud544\uc694\ud55c \uce90\uc2dc\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30",id:"\ubd88\ud544\uc694\ud55c-\uce90\uc2dc\ub294-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\uae30",children:[],level:2},{value:"\uce90\uc2dc\ub97c \uc800\uc7a5\ud558\uae30",id:"\uce90\uc2dc\ub97c-\uc800\uc7a5\ud558\uae30",children:[],level:2},{value:"\uce90\uc2dc \ub9ac\uc14b\ud558\uae30",id:"\uce90\uc2dc-\ub9ac\uc14b\ud558\uae30",children:[{value:"\uce90\uc2dc \ub9ac\uc14b \ud6c4 \ub3d9\uc791 \uc124\uc815\ud558\uae30",id:"\uce90\uc2dc-\ub9ac\uc14b-\ud6c4-\ub3d9\uc791-\uc124\uc815\ud558\uae30",children:[],level:3}],level:2},{value:"\ubba4\ud14c\uc774\uc158 \ud6c4 \ub9ac\ud398\uce6d",id:"\ubba4\ud14c\uc774\uc158-\ud6c4-\ub9ac\ud398\uce6d",children:[],level:2},{value:"\uce90\uc2dc \ub9ac\ub2e4\uc774\ub809\ud305",id:"\uce90\uc2dc-\ub9ac\ub2e4\uc774\ub809\ud305",children:[],level:2},{value:"\ud398\uc774\uc9c0\ub124\uc774\uc158 \uc720\ud2f8",id:"\ud398\uc774\uc9c0\ub124\uc774\uc158-\uc720\ud2f8",children:[{value:"\ub370\uc774\ud130 \ucd94\uac00\ub85c \ub85c\ub4dc\ud558\uae30 :\xa0fetchMore",id:"\ub370\uc774\ud130-\ucd94\uac00\ub85c-\ub85c\ub4dc\ud558\uae30-fetchmore",children:[],level:3},{value:"\ub370\ucf54\ub808\uc774\ud130 -\xa0@connection",id:"\ub370\ucf54\ub808\uc774\ud130--connection",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uce90\uc2dc\ub97c-\ub354\uc6b1-\ub611\ub611\ud558\uac8c-\uc0ac\uc6a9\ud558\uae30advanced"},"\uce90\uc2dc\ub97c \ub354\uc6b1 \ub611\ub611\ud558\uac8c \uc0ac\uc6a9\ud558\uae30(Advanced)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/caching/advanced-topics/"},"Apollo Docs"),"\ub97c \ubc88\uc5ed \ubc0f \uc758\uc5ed\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \uc544\ud3f4\ub85c \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud560 \ub54c \ucc38\uace0\ud558\uba74 \uc88b\uc744 \uc774\uc288\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubd88\ud544\uc694\ud55c-\uce90\uc2dc\ub294-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\uae30"},"\ubd88\ud544\uc694\ud55c \uce90\uc2dc\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30"),(0,r.kt)("p",null,"\uce90\uc2dc\ub294 \uc88b\uc740 \uae30\ub2a5\uc774\uc9c0\ub9cc \ub531\ud788 \uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub420 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub531 \ud55c\ubc88\ub9cc \uc0ac\uc6a9\ub418\uace0 \ub9c8\ub294 token\uc744 \ubc1b\ub294 \ucffc\ub9ac\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f4 \ub550 fetchPolicy\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"no-cache"),"\ub85c \uc9c0\uc815\ud574\uc8fc\uc138\uc694"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { loading, error, data } = useQuery(GET_DOGS, {\n  fetchPolicy: "no-cache",\n});\n')),(0,r.kt)("p",null,"\uc774\ub807\uac8c fetch policy\ub97c \uc9c0\uc815\ud558\uba74 \uc11c\ubc84\uc5d0 \ub2e4\ub140\uc62c \ub54c cache\uc5d0 \uae30\ub85d\ud558\uc9c0 \uc54a\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \ub54c\ub3c4 cache\uc5d0 \uba3c\uc800 \ud655\uc778\ud558\ub294 \uc808\ucc28\ub97c \uc0dd\ub7b5\ud558\uace0 \ubc14\ub85c \uc11c\ubc84\uc5d0 \uc694\uccad\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uce90\uc2dc\ub97c-\uc800\uc7a5\ud558\uae30"},"\uce90\uc2dc\ub97c \uc800\uc7a5\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-cache-persist"},"apollo3-cache-persist"),"\xa0\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba74 \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c localStorage\ub098 asyncStorage\uc5d0 \uc800\uc7a5\ud574\ub450\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc740 persistCache \uba54\uc18c\ub4dc\uc5d0 apollo cache \uc778\uc2a4\ud134\uc2a4\uc640 \uc0ac\uc6a9\ud560 storage\ub97c \ub118\uaca8\uc8fc\ub294\uac81\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uce90\uc2dc\uc5d0 \uc800\uc7a5\ub41c \uac12\ub4e4\uc740 \uc989\uac01 \ub3d9\uae30\ud654\ub418\uc9c0\ub9cc \ub514\ubc14\uc6b4\uc2f1\uc744 \uc801\uc6a9\ud574\uc11c \uc77c\uc815 \uc2dc\uac04\ub9c8\ub2e4 \ub3d9\uae30\ud654\uc2dc\ud0ac \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The\xa0persistCache \uba54\uc18c\ub4dc\ub294 \ube44\ub3d9\uae30\ub85c \ub3d9\uc791\ud558\uba70 Promise\ub97c \ub9ac\ud134\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AsyncStorage } from "react-native";\nimport { InMemoryCache } from "@apollo/client";\nimport { persistCache } from "apollo3-cache-persist";\n\nconst cache = new InMemoryCache();\n\npersistCache({\n  cache,\n  storage: AsyncStorage,\n}).then(() => {\n  // Continue setting up Apollo Client as usual.\n});\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"persistCache\uc5d0 \ub300\ud55c \ub354 \ub2e4\uc591\ud55c \uc0ac\uc6a9\ubc29\ubc95\uc5d0 \ub300\ud574\uc11c\ub294\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-cache-persist"},"README of\xa0",(0,r.kt)("inlineCode",{parentName:"a"},"apollo3-cache-persist")),"\ub97c \ucc38\uace0\ud558\uc138\uc694!"))),(0,r.kt)("h2",{id:"\uce90\uc2dc-\ub9ac\uc14b\ud558\uae30"},"\uce90\uc2dc \ub9ac\uc14b\ud558\uae30"),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc544\uc6c3\uc744 \ud558\ub294 \uacbd\uc6b0\ucc98\ub7fc \uce90\uc2dc\ub97c \ube44\uc6cc\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub54c client.resetStore() \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ud65c\uc131 \ucffc\ub9ac(active queries)\ub97c \ub9ac\ud398\uce6d\ud558\ub294 \uacfc\uc815\uc744 \ud3ec\ud568\ud558\uae30 \ub54c\ubb38\uc5d0 \ube44\ub3d9\uae30\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default withApollo(\n  graphql(PROFILE_QUERY, {\n    props: ({ data: { loading, currentUser }, ownProps: { client } }) => ({\n      loading,\n      currentUser,\n      resetOnLogout: async () => client.resetStore(),\n    }),\n  })(Profile)\n);\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tip : \ud65c\uc131\ucffc\ub9ac\ub97c \ub9ac\ud398\uce6d\ud558\ub294 \uacfc\uc815 \uc5c6\uc774 \uce90\uc2dc\ub97c \ube44\uc6b0\uace0 \uc2f6\ub2e4\uba74 client.clearStore()\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."))),(0,r.kt)("h3",{id:"\uce90\uc2dc-\ub9ac\uc14b-\ud6c4-\ub3d9\uc791-\uc124\uc815\ud558\uae30"},"\uce90\uc2dc \ub9ac\uc14b \ud6c4 \ub3d9\uc791 \uc124\uc815\ud558\uae30"),(0,r.kt)("p",null,"\uce90\uc2dc\ub97c \ub9ac\uc14b\ud588\uc744 \ub54c, \uc989 ",(0,r.kt)("inlineCode",{parentName:"p"},"client.resetStore()")," \uba54\uc18c\ub4dc\uac00 \ud638\ucd9c\ub418\uc5c8\uc744 \ub54c \uc2e4\ud589\ud558\ub294 \ucf5c\ubc31\ud568\uc218\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"client.onResetStore"),"\uc5d0 \ub9e4\uac1c\ubcc0\uc218\ub85c \ucf5c\ubc31\uc744 \ub118\uaca8\uc8fc\uba74 \ub429\ub2c8\ub2e4. \uc5ec\ub7ec\uac1c\uc758 \ucf5c\ubc31\uc744 \ub118\uae30\ub824\uba74 \uc774 \uba54\uc18c\ub4dc\ub97c \uc5ec\ub7ec\ubc88 \ud638\ucd9c\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. \uc5ec\ub7ec\uac1c\ub97c \ub123\uac8c\ub418\uba74 \ud558\ub098\uc758 \ubc30\uc5f4\ub85c \ubb49\uccd0\uc838\uc11c \uce90\uc2dc\uac00 \ub9ac\uc14b\ub420 \ub54c \ud55c\ubc88\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\uc5d0\uc11c\ub294 \uce90\uc2dc\uac00 \ucd08\uae30\ud654\ub418\uc5c8\uc744 \ub54c \uce90\uc2dc\uc5d0 \uae30\ubcf8\uac12\uc744 \ub123\uc5b4\uc8fc\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"client.onResetStore")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc740 \ud2b9\ud788 \uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \ub85c\uceec \uc0c1\ud0dc\uad00\ub9ac \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ApolloClient, InMemoryCache } from "@apollo/client";\nimport { withClientState } from "apollo-link-state";\n\nimport { resolvers, defaults } from "./resolvers";\n\nconst cache = new InMemoryCache();\nconst stateLink = withClientState({ cache, resolvers, defaults });\n\nconst client = new ApolloClient({\n  cache,\n  link: stateLink,\n});\n\nclient.onResetStore(stateLink.writeDefaults);\n')),(0,r.kt)("p",null,"\uce90\uc2dc \ucd08\uae30\ud654\ub97c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \uc2e4\ud589\ud558\uae30\ub3c4 \ud558\ub294\ub370, \uc774\ub294 \uce90\uc2dc \ub9ac\uc14b \ud6c4 UI\ub97c \uac15\uc81c \ub9ac\ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"clinet.onResetStore\uc758 \ub9ac\ud134\uac12\uc740 \ucf5c\ubc31\uc744 unregister\ud558\uae30 \uc704\ud574 \ud638\ucd9c\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { withApollo } from "@apollo/react-hoc";\n\nexport class Foo extends Component {\n  constructor(props) {\n    super(props);\n    this.unsubscribe = props.client.onResetStore(() => this.setState({ reset: false }));\n    this.state = { reset: false };\n  }\n  componentDidUnmount() {\n    this.unsubscribe();\n  }\n  render() {\n    return this.state.reset ? <div /> : <span />;\n  }\n}\n\nexport default withApollo(Foo);\n')),(0,r.kt)("h2",{id:"\ubba4\ud14c\uc774\uc158-\ud6c4-\ub9ac\ud398\uce6d"},"\ubba4\ud14c\uc774\uc158 \ud6c4 \ub9ac\ud398\uce6d"),(0,r.kt)("p",null,"\ubba4\ud14c\uc774\uc158\uc744 \ud558\uace0 update\ud568\uc218\ub85c \ubba4\ud14c\uc774\uc158\uc758 \uacb0\uacfc\uac12\uc744 \uc9c1\uc811 \uce90\uc2dc\uc5d0 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\ub294\ub370, \uc774 \uacfc\uc815\uc774 \uc6cc\ub099 \ubcf5\uc7a1\ud558\uae30\ub3c4 \ud558\uace0, \ud2b9\uc815 \ubba4\ud14c\uc774\uc158\uc740 \ub9ac\ud134\uac12\uc73c\ub85c \ud574\ub2f9 \uac1d\uccb4\ub97c \uc628\uc804\ud788 \ubc18\ud658\ud574\uc8fc\uc9c0 \uc54a\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc5b4\uc11c \ub2e4\ub978 \ubc29\ubc95\uc744 \ubaa8\uc0c9\ud574\uc57c \ud560 \ub54c\uac00 \uc0dd\uae41\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0\uc5d4 ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," \ud6c5\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"refetchQueries")," \uc635\uc158\uc744 \ub123\uc5b4\ubcf4\uc138\uc694. \uc790\ub3d9\uc73c\ub85c \ud574\ub2f9 \ub370\uc774\ud130\ub97c \ud398\uce58\ud574\uc624\ub294 \ucffc\ub9ac\ub97c \ud638\ucd9c\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"refetchQueries\uc635\uc158\uc744 \ub123\uc5b4\uc8fc\ub294\uac8c update\ud568\uc218\ub97c \uad6c\ud604\ud558\ub294 \uac83 \ubcf4\ub2e4 \ud6e8\uc52c \uc27d\uc9c0\ub9cc \uc5b4\uca0b\ub4e0 \ucd94\uac00\uc801\uc778 \ub124\ud2b8\uc6cc\ud0b9\uc774 \ubc1c\uc0dd\ud558\ub294\uac74 \uc790\uba85\ud569\ub2c8\ub2e4. \uc131\ub2a5\uc774 \ub0ae\uc544\uc9c0\uc8e0."))),(0,r.kt)("h2",{id:"\uce90\uc2dc-\ub9ac\ub2e4\uc774\ub809\ud305"},"\uce90\uc2dc \ub9ac\ub2e4\uc774\ub809\ud305"),(0,r.kt)("p",null,"\ucffc\ub9ac\uac00 \ub2e4\ub978 \ucc38\uc870\ub85c \uac19\uc740 \ub370\uc774\ud130\ub97c \uc694\uccad\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc790\uba74 \uac8c\uc2dc\uae00 \ub9ac\uc2a4\ud2b8 \ub370\uc774\ud130\uc640 \uac8c\uc2dc\uae00 \uc0c1\uc138\ud654\uba74 \ub370\uc774\ud130\uac00 \uc788\uc744 \uc218 \uc788\uaca0\ub124\uc694. \ub458\uc740 \uac19\uc740 \ub370\uc774\ud130\ub97c \ucc38\uc870\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9ac\uc2a4\ud2b8\ubdf0\uc5d0 \uc4f0\uc774\ub294 \ub370\uc774\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud544\uc694\ud55c \ud544\ub4dc\ub9cc \uc694\uccad\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"query Books {\n  books {\n    id\n    title\n    abstract\n  }\n}\n")),(0,r.kt)("p",null,"\ub9ac\uc2a4\ud2b8\uc5d0\uc11c \ud2b9\uc815 book \uac1d\uccb4\uac00 \uc120\ud0dd\ub418\uc5c8\ub2e4\uba74, \uc0c1\uc138\ud654\uba74\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 \ubaa8\ub4e0 \ud544\ub4dc\ub97c \uc694\uccad\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"query Book($id: ID!) {\n  book(id: $id) {\n    id\n    title\n    abstract\n  }\n}\n")),(0,r.kt)("p",null,"\uc704 \uc608\uc2dc\ucc98\ub7fc \ub450\ubc88\uc9f8 \ucffc\ub9ac\ub97c \ud638\ucd9c\ud588\uc744 \ub54c \uc774\ubbf8 \uac19\uc740 \ucc38\uc870\ub97c \uac00\uc9c4 \ub370\uc774\ud130\uac00 \uce90\uc2dc\uc5d0 \uc874\uc7ac\ud558\uace0 \uc788\uc744\uac81\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uadf8 \uc0ac\uc2e4\uc744 \ubaa8\ub985\ub2c8\ub2e4. \uc778\uc9c0\ud558\uac8c \ud558\uae30 \uc704\ud574\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 Cache \uc778\uc2a4\ud134\uc2a4\ub97c \uc815\uc758\ud560 \ub54c typePolicies\uc5d0 toReference\ub85c \uc54c\ub824\uc918\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ApolloClient, InMemoryCache } from '@apollo/client';\n\nconst client = new ApolloClient({\n  cache: new InMemoryCache({\n    typePolicies: {\n      Query: {\n        fields: {\n          book: {\n            read(_, { args, toReference }) {\n              return toReference({\n                __typename: 'Book',\n                id: args.id,\n              });\n            }\n          }\n        }\n      }\n    }\n  }\n});\n")),(0,r.kt)("p",null,"\uc774 read\ud568\uc218\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"toReference"),"\ub77c\ub294 Book \uac1d\uccb4\uc5d0 \ub300\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\ub85c \ucc38\uc870\ub97c \uc0dd\uc131\ud558\uace0 \ubc18\ud658\ud574\uc8fc\ub294 \ud5ec\ud37c \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub807\uac8c \uc815\uc758\ud574\ub193\uc73c\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 Book\uc774\ub77c\ub294 \uac1d\uccb4\ub97c \uc77d\uc744 \ub54c\ub9c8\ub2e4 read \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud558\uace0 Book\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \ubc18\ud658\ud558\uac8c \ub429\ub2c8\ub2e4. \uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc774 \ucc38\uc870\uac1d\uccb4\ub97c \uac00\uc9c0\uace0 \uce90\uc2dc\ub97c \ub4a4\uc838 \ud604\uc7ac\uc758 Book\uac1d\uccb4\ub97c \ucc3e\uc544 \ubc18\ud658\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uce90\uc2dc\ub97c \ucc3e\uc544\ubd24\ub294\ub370 \ud574\ub2f9 \ub370\uc774\ud130\uac00 \uc5c6\ub2e4\uba74, \uc790\ub3d9\uc73c\ub85c \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \uc694\uccad\ud569\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ub9c9\uc73c\ub824\uba74 \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \uce90\uc2dc\uc548\uc5d0 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc0c1\uc138\ud654\uba74 \ub370\uc774\ud130\ub97c \uc694\uccad\ud588\uc744 \ub54c \ub9ac\uc2a4\ud2b8\ubdf0 \ub370\uc774\ud130\ub97c \uc694\uccad\ud558\uba74 \ud544\uc694\ud55c \ud544\ub4dc\uac00 \uc77c\ubd80\ubc16\uc5d0 \uc5c6\uc73c\ubbc0\ub85c \uc5b4\uca54 \uc218 \uc5c6\uc774 \uc11c\ubc84\ub97c \ub2e4\ub140\uc624\uac8c\ub429\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"\ud398\uc774\uc9c0\ub124\uc774\uc158-\uc720\ud2f8"},"\ud398\uc774\uc9c0\ub124\uc774\uc158 \uc720\ud2f8"),(0,r.kt)("h3",{id:"\ub370\uc774\ud130-\ucd94\uac00\ub85c-\ub85c\ub4dc\ud558\uae30-fetchmore"},"\ub370\uc774\ud130 \ucd94\uac00\ub85c \ub85c\ub4dc\ud558\uae30 ",(0,r.kt)("a",{parentName:"h3",href:"https://www.apollographql.com/docs/react/caching/advanced-topics/#incremental-loading-fetchmore"},":\xa0",(0,r.kt)("inlineCode",{parentName:"a"},"fetchMore"))),(0,r.kt)("p",null,"\uc778\ud53c\ub2c8\ud2f0 \uc2a4\ud06c\ub864\uc774\ub098 \ud398\uc774\uc9c0\ub124\uc774\uc158\ucc98\ub7fc \ub3d9\uc77c\ud55c \ucffc\ub9ac\ub97c \uc5f0\uc18d\uc73c\ub85c \ud638\ucd9c\ud560 \ub54c fetchMore \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ub370\ucf54\ub808\uc774\ud130--connection"},"\ub370\ucf54\ub808\uc774\ud130 -\xa0",(0,r.kt)("a",{parentName:"h3",href:"https://www.apollographql.com/docs/react/caching/advanced-topics/#the-connection-directive"},(0,r.kt)("inlineCode",{parentName:"a"},"@connection"))),(0,r.kt)("p",null,"\uad81\uadf9\uc801\uc73c\ub85c \ud398\uc774\uc9c0\ub124\uc774\uc158 \ucffc\ub9ac\ub294 fetchMore\uba54\uc11c\ub4dc\ub97c \ub0a0\ub824 \uac19\uc740 \uce90\uc2dc \ud0a4\ub97c \uac00\uc9c4 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uba74 \uc77c\ubc18 \ucffc\ub9ac\uc640 \ub2e4\ub97c\uac8c \uc5c6\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ucd5c\ucd08 \ud638\ucd9c\ub370\uc774\ud130\uc640 \ub4a4\uc774\uc5b4 \ud638\ucd9c\ub420 \ub54c \uc4f0\uc774\ub294 \ub9e4\uac1c\ubcc0\uc218\ub4e4\uc774 \ud568\uaed8 \uce90\uc2f1\ub418\uc5b4\uc9c0\uba70, \uc774 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc6b0\ub9b0 \ub9e4\uac1c\ubcc0\uc218(offset\uc774\ub098 start\uac19\uc740 \uac12)\uc740 \ud544\uc694\uc5c6\uace0, \ub2e8\uc21c\ud788 \uce90\uc2dc\ub41c \ub370\uc774\ud130\uc5d0 \uc561\uc138\uc2a4\ud558\uae30 \uc704\ud574 \uc81c\uacf5\ud558\ub294 \uac83\ub3c4 \ub610\ud55c \uc6d0\uce58 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 1.6\uc5d0\uc11c \ub370\ucf54\ub808\uc774\ud130 ",(0,r.kt)("inlineCode",{parentName:"p"},"@connection"),"\uc744 \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4. \ud2b9\uc815 \ud544\ub4dc\uc758 \uce90\uc2dc \ud0a4\ub97c \ucee4\uc2a4\ud140\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. connection\ub85c \ud2b9\uc815 \ud544\ub4dc\uc5d0 \ub300\ud55c \uce90\uc2dc \ud0a4\ub97c \uc124\uc815\ud558\uace0 \ucffc\ub9ac\ub97c \uc2e4\uc81c\ub85c \ubcc0\uacbd\ud558\ub294 \uc778\uc218\ub97c \ud544\ud130\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"@connection\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4. \ucee4\uc2a4\ud140\ud558\uace0\uc2f6\uc740 \ucffc\ub9ac \uc606\uc5d0 key \ub9e4\uac1c\ubcc0\uc218\ub97c \uc124\uc815\ud558\uace0 \uc635\uc158\uc73c\ub85c filter\uac12\uc744 \ucffc\ub9ac \ud30c\ub77c\ubbf8\ud130 \uc774\ub984\uc744 \ubc30\uc5f4\ub85c \ub123\uc5b4\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const query = gql`\n  query Feed($type: FeedType!, $offset: Int, $limit: Int) {\n    feed(type: $type, offset: $offset, limit: $limit) @connection(key: "feed", filter: ["type"]) {\n      ...FeedEntry\n    }\n  }\n`;\n')),(0,r.kt)("p",null,"\uc704 \uc608\uc2dc\ub300\ub85c \ucffc\ub9ac\ub97c \ud574\ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchMore"),"\uac00 \uc5ec\ub7ec\ubc88 \ud638\ucd9c\ub418\ub354\ub77c\ub3c4 \uacb0\uacfc\uac12\uc740 \uce90\uc2dc\uc5d0\uc11c feed\ub77c\ub294 \ud0a4\ub85c \ub9c8\uc9c0\ub9c9\uae4c\uc9c0 \ub204\uc801\ub41c \ub370\uc774\ud130\uac00 \ub9ac\ud134\ub429\ub2c8\ub2e4. \ub610\ud55c \uadf8 \ub370\uc774\ud130\ub294 type \uc778\uc790\ub97c filter\uc635\uc158\uc73c\ub85c \ub123\uc5b4\uc92c\uae30 \ub54c\ubb38\uc5d0 feed\uc758 \ud0c0\uc785\ubcc4\ub85c \uc815\ub82c\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c (stable key)\ud0a4\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\ub2c8 \uc190\uc27d\uac8c writeQuery\ub85c \uce90\uc2dc \uc5c5\ub370\uc774\ud2b8\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc608\uc2dc\uc5d0\uc11c\ub294 feed\ub97c \ube48 \ubc30\uc5f4\ub85c \ucd08\uae30\ud654(\ub0a0\ub824\ubc84\ub9bc)\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'client.writeQuery({\n  query: gql`\n    query Feed($type: FeedType!) {\n      feed(type: $type) @connection(key: "feed", filter: ["type"]) {\n        id\n      }\n    }\n  `,\n  variables: {\n    type: "top",\n  },\n  data: {\n    feed: [],\n  },\n});\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc704 \uc608\uc2dc\uc5d0\uc120 type\uc774\ub77c\ub294 \uc778\uc790\ub9cc \ub123\uc5b4\uc92c\uae30 \ub54c\ubb38\uc5d0 offset\uc774\ub098 limit\uac12\uc740 \ub530\ub85c \ub123\uc9c0 \uc54a\uc740\uac81\ub2c8\ub2e4. \ucd94\uac00\ub418\uba74 \uac19\uc774 \ucd94\uac00\ud574\uc8fc\uc138\uc694"))))}m.isMDXComponent=!0}}]);