"use strict";(self.webpackChunkapollo_client=self.webpackChunkapollo_client||[]).push([[2794],{3905:function(r,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function o(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function l(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function a(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function i(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},l=Object.keys(r);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}var p=t.createContext({}),c=function(r){var e=t.useContext(p),n=e;return r&&(n="function"==typeof r?r(e):a(a({},e),r)),n},s=function(r){var e=c(r.components);return t.createElement(p.Provider,{value:e},r.children)},u={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(r,e){var n=r.components,o=r.mdxType,l=r.originalType,p=r.parentName,s=i(r,["components","mdxType","originalType","parentName"]),k=c(n),d=o,E=k["".concat(p,".").concat(d)]||k[d]||u[d]||l;return n?t.createElement(E,a(a({ref:e},s),{},{components:n})):t.createElement(E,a({ref:e},s))}));function d(r,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var l=n.length,a=new Array(l);a[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=r,i.mdxType="string"==typeof r?r:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1787:function(r,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return k}});var t=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_position:6,title:"\uc5d0\ub7ec \ucc98\ub9ac(Error Handling)"},p="\uc5d0\ub7ec \ucc98\ub9ac\ud558\uae30",c={unversionedId:"fetcing/error_handling",id:"fetcing/error_handling",isDocsHomePage:!1,title:"\uc5d0\ub7ec \ucc98\ub9ac(Error Handling)",description:"---",source:"@site/docs/fetcing/error_handling.md",sourceDirName:"fetcing",slug:"/fetcing/error_handling",permalink:"/docs/fetcing/error_handling",editUrl:"https://github.com/hojunin/apollo-client-docs/docs/fetcing/error_handling.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\uc5d0\ub7ec \ucc98\ub9ac(Error Handling)"},sidebar:"tutorialSidebar",previous:{title:"\ud504\ub798\uadf8\uba3c\ud2b8(fragment)",permalink:"/docs/fetcing/fragment"},next:{title:"\uc88b\uc740 \uc608\uc2dc(Best Practice)",permalink:"/docs/fetcing/best_practice"}},s=[{value:"\uc5d0\ub7ec \uc885\ub958",id:"\uc5d0\ub7ec-\uc885\ub958",children:[{value:"1. GraphQL Error",id:"1-graphql-error",children:[],level:3},{value:"\ubd80\ubd84 \ub370\uc774\ud130\ub9cc \ub9ac\ud134\ud574\uc8fc\ub294 \uacbd\uc6b0",id:"\ubd80\ubd84-\ub370\uc774\ud130\ub9cc-\ub9ac\ud134\ud574\uc8fc\ub294-\uacbd\uc6b0",children:[],level:3},{value:"2. Network Error",id:"2-network-error",children:[],level:3}],level:2},{value:"GQL \uc5d0\ub7ec\uc815\ucc45 (Graphql Error Policy)",id:"gql-\uc5d0\ub7ec\uc815\ucc45-graphql-error-policy",children:[{value:"errorPolicy \uc124\uc815\ud558\uae30",id:"errorpolicy-\uc124\uc815\ud558\uae30",children:[],level:3}],level:2},{value:"Apollo Link\ub97c \ud65c\uc6a9\ud558\uc5ec \uace0\uae09\uae30\ub2a5 \uc0ac\uc6a9\ud558\uae30",id:"apollo-link\ub97c-\ud65c\uc6a9\ud558\uc5ec-\uace0\uae09\uae30\ub2a5-\uc0ac\uc6a9\ud558\uae30",children:[],level:2},{value:"\ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud574\ubcf4\uae30",id:"\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc801\uc6a9\ud574\ubcf4\uae30",children:[{value:"\uc11c\ubc84\uac00 \uaebc\uc838\uc788\ub294 \uacbd\uc6b0",id:"\uc11c\ubc84\uac00-\uaebc\uc838\uc788\ub294-\uacbd\uc6b0",children:[],level:3},{value:"Validation Check\uc5d0 \uac78\ub9b0 \uacbd\uc6b0",id:"validation-check\uc5d0-\uac78\ub9b0-\uacbd\uc6b0",children:[],level:3},{value:"\uc7ac\uc2dc\ub3c4 \ub85c\uc9c1",id:"\uc7ac\uc2dc\ub3c4-\ub85c\uc9c1",children:[],level:3},{value:"1. GraphQL Error\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1",id:"1-graphql-error\uac00-\ubc1c\uc0dd\ud588\uc744-\ub54c-\uc7ac\uc2dc\ub3c4-\ub85c\uc9c1",children:[],level:3},{value:"2. Network Error \ubc1c\uc0dd\ud588\uc744 \ub54c \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1",id:"2-network-error-\ubc1c\uc0dd\ud588\uc744-\ub54c-\uc7ac\uc2dc\ub3c4-\ub85c\uc9c1",children:[],level:3},{value:"\uc5d0\ub7ec \ubb34\uc2dc\ud558\uae30",id:"\uc5d0\ub7ec-\ubb34\uc2dc\ud558\uae30",children:[],level:3}],level:2}],u={toc:s};function k(r){var e=r.components,n=(0,o.Z)(r,a);return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc5d0\ub7ec-\ucc98\ub9ac\ud558\uae30"},"\uc5d0\ub7ec \ucc98\ub9ac\ud558\uae30"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/data/error-handling/#graphql-error-policies"},"Apollo Docs"),"\ub97c \uc758\uc5ed \ubc0f \ub0b4\uc6a9\ucd94\uac00\ud55c \uae00\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\ucffc\ub9ac\ub098 \ubba4\ud14c\uc774\uc158\uc744 \ub0a0\ub9ac\ub2e4\ubcf4\uba74 \ub2e4\uc591\ud55c \uc5d0\ub7ec\ub97c \ub9cc\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Apollo Client\ub294 \uc774\ub7f0 \uc5d0\ub7ec\ub4e4\uc774 \ubc1c\uc0dd\ud560 \ub54c GQL\ud0c0\uc785\uacfc Apollo \uc124\uc815\uc5d0 \ub530\ub77c \uc5d0\ub7ec\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4. \uc800\ud76c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uc544\ub798\uc5d0\uc11c \uc124\uba85\ud558\ub294 \uc5d0\ub7ec\ub4e4\uc744 apollo client instanse\uc5d0 \uae30\ubcf8\uc124\uc815\uc73c\ub85c \uac00\uc7a5 \uc55e\ub2e8\uc5d0\uc11c \uc7a1\uc544\ub0b8 \ub2e4\uc74c \ucc98\ub9ac\ud560 \uc0dd\uac01\uc785\ub2c8\ub2e4. (\uc544\ub798 Error Link \uc124\uc815 \ucc38\uace0)"),(0,l.kt)("h2",{id:"\uc5d0\ub7ec-\uc885\ub958"},"\uc5d0\ub7ec \uc885\ub958"),(0,l.kt)("p",null,"\ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc5d0\ub7ec\ub294 \ub450\uc885\ub958\uc785\ub2c8\ub2e4.\xa0GraphQL errors\xa0or\xa0Network errors."),(0,l.kt)("h3",{id:"1-graphql-error"},"1. GraphQL Error"),(0,l.kt)("p",null,"GraphQL \uc5d0\ub7ec\ub294 \uc11c\ubc84\uc5d0\uc11c GQL\uc744 \uc2e4\ud589\ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubb38\ubc95 \uc5d0\ub7ec(Syntax error",(0,l.kt)("strong",{parentName:"li"},") -"),"\xa0ex. \ucffc\ub9ac\ub97c \uc798\ubabb \uc791\uc131\ud55c \uacbd\uc6b0( bracket\uc744 \uc798\ubabb \ub2eb\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc74c )"),(0,l.kt)("li",{parentName:"ul"},"\uc720\ud6a8\uc131 \uac80\uc99d \uc5d0\ub7ec (Validation Error)\xa0- ex. \uc11c\ubc84\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud544\ub4dc\ub97c \uc694\uccad\ud55c \uacbd\uc6b0"),(0,l.kt)("li",{parentName:"ul"},"\ub9ac\uc878\ubc84 \uc5d0\ub7ec(Resolver) - ex. an error occurred while attempting to populate a query field")),(0,l.kt)("p",null,"\ub9cc\uc57d \ubb38\ubc95\uc5d0\ub7ec\ub098 \uc720\ud6a8\uc131 \uac80\uc99d \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uba74 \uadf8 GQL\uc740 \ud2c0\ub9b0\uac83\uc774\ubbc0\ub85c \uc11c\ubc84\ub294 \ud574\ub2f9 GQL\uc744 \uc544\uc608 \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadfc\ub370 \ub9ac\uc878\ubc84 \uc5d0\ub7ec\uba74, \ubd80\ubd84\uc801\uc73c\ub85c \uc2e4\ud589\ud558\uace0 \uc2e4\ud589\ub41c \uac12\uc740 \ub9ac\ud134\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apollo Server Docs\ub97c \uc77d\uc5b4\ubcf4\uba74 \ub354 \ub2e4\uc591\ud55c GQL Error\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4!")),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 GraphQL \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uba74, \uc11c\ubc84\ub294 \uc5d0\ub7ec\uc5d0 \ub300\ud55c \uc815\ubcf4(\uc5b4\ub514\uc11c \ubb34\uc2a8 \uc5d0\ub7ec\uac00 \ub0ac\ub2e4)\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"errors")," array\uc5d0 \ub2f4\uc544\uc11c \ubcf4\ub0b4\uc90d\ub2c8\ub2e4. \uc544\ub798\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c Gql Response \uc608\uc2dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "errors": [\n    {\n      "message": "Cannot query field \\"nonexistentField\\" on type \\"Query\\".",\n      "locations": [\n        {\n          "line": 2,\n          "column": 3\n        }\n      ],\n      "extensions": {\n        "code": "GRAPHQL_VALIDATION_FAILED",\n        "exception": {\n          "stacktrace": [\n            "GraphQLError: Cannot query field \\"nonexistentField\\" on type \\"Query\\".",\n            "...additional lines...",\n          ]\n        }\n      }\n    }\n  ],\n  "data": null\n}\n')),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud588\ub4ef GQL\uc5d0\ub7ec \uc911 \uc544\uc608 \uc2e4\ud589\uc744 \ub9ac\uc81d\uc2dc\ucf1c\ubc84\ub9ac\ub294 \uacbd\uc6b0(Validation Check\ub098 Syntax error)\ub294 400\ub300 \uc5d0\ub7ec\ub97c \ubc49\uace0, Resolver error\uac19\uc774 \uc2e4\ud589\uc740 \ud558\ub418 \ubd80\ubd84\ub370\uc774\ud130\ub9cc \ub0b4\ub824\uc8fc\ub294 \uacbd\uc6b0\ub294 200\uc744 \ub9ac\ud134\ud558\uc9c0\ub9cc error\ub3c4 \uac19\uc774 \ub9ac\ud134\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ubd80\ubd84-\ub370\uc774\ud130\ub9cc-\ub9ac\ud134\ud574\uc8fc\ub294-\uacbd\uc6b0"},"\ubd80\ubd84 \ub370\uc774\ud130\ub9cc \ub9ac\ud134\ud574\uc8fc\ub294 \uacbd\uc6b0"),(0,l.kt)("p",null,"\ub9ac\uc878\ubc84 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0\ub294 GQL \ucffc\ub9ac\uac00 \ubd80\ubd84\uc801\uc73c\ub85c\ub294 \ubb38\uc81c\uac00 \uc5c6\ub2e4\ub294 \ub73b\uc774\uace0, \uc815\ucc45\uc5d0 \ub530\ub77c \ud574\ub2f9 \ubd80\ubd84\uc740 \ub9ac\ud134\ud574\uc90d\ub2c8\ub2e4. \uc77c\ub2e8 Apollo Client\ub294 default\uac12\uc73c\ub85c \ud574\ub2f9 \ub370\uc774\ud130\ub97c \ubb34\uc2dc\ud558\ub294\ub370, \ub2e4\ub978 \uc815\ucc45\uc744 \uc4f0\uace0 \uc2f6\uc73c\uba74 errorPolicy\uac12\uc744 \uc870\uc815\ud558\uba74 \ub429\ub2c8\ub2e4(\uc544\ub798 \ub098\uc634)"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"2-network-error"},"2. Network Error"),(0,l.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c \uc5d0\ub7ec\ub294 \uc6b0\ub9ac\uac00 \uc798 \uc544\ub294 Http \ud1b5\uc2e0 \uc5d0\ub7ec\uc785\ub2c8\ub2e4. 400\ub300 \uc5d0\ub7ec\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc798\ubabb\ud588\ub2e4, 500\ub300 \uc5d0\ub7ec\uba74 \uc11c\ubc84\uac00 \uc798\ubabb\ud588\ub2e4 \ub77c\uace0 \uc774\ud574\ud558\uba74 \ud3b8\ud569\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ex)\n400:\uc694\uccad\uc774 \uc774\uc0c1\ud558\ub2e4. 401: \uc778\uc99d\ubb38\uc81c\uac00 \uc788\ub2e4. 403: \uad8c\ud55c\uc774 \uc5c6\ub2e4 ..\n500:\uc11c\ubc84\uc5d0\uc11c \ucc98\ub9ac\ud558\ub2e4 \ubed1\ub0ac\ub2e4. 504: Timeout.")),(0,l.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uba74 Apollo Client\ub294 \uc774 \uc5d0\ub7ec\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"error.networkError"),"\ud544\ub4dc\uc5d0 \ub2f4\uc544\uc11c \ub0b4\ub824\uc90d\ub2c8\ub2e4. \ub9cc\uc57d \ub124\ud2b8\uc6cc\ud06c \uc5d0\ub7ec\uc5d0 \ub530\ub77c \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 Apollo link\ub97c \uc774\uc6a9\ud558\uc138\uc694(\ub9e8 \uc544\ub798 \uc124\uba85 \uc788\uc74c)"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"gql-\uc5d0\ub7ec\uc815\ucc45-graphql-error-policy"},"GQL \uc5d0\ub7ec\uc815\ucc45 (Graphql Error Policy)"),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud588\ub4ef\uc774 \ub9cc\uc57d GQL \uc624\ud37c\ub808\uc774\uc158\uc774 \ub9ac\uc878\ubc84 \uc5d0\ub7ec\ub97c \ubc49\ub294\ub2e4\uba74 \uc11c\ubc84\ub294 \ubd80\ubd84\uc801\uc778 \ub370\uc774\ud130\uc640 \uc5d0\ub7ec\ub97c \uac19\uc774 \ubcf4\ub0b4\uc90d\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "data": {\n    "getInt": 12,\n    "getString": null\n  },\n  "errors": [\n    {\n      "message": "Failed to get string!",\n      // ...additional fields...\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c Apollo Client\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"error.graphQLErrors"),"\ubc30\uc5f4\uc5d0 \ub2f4\uc544\uc11c error\ud544\ub4dc\ub85c \ub0b4\ub824\uc90d\ub2c8\ub2e4. \uc544\ub798\ub294 Apollo Client\uac00 \uc81c\uacf5\ud558\ub294 \ub9ac\uc878\ubc84 \uc5d0\ub7ec \ucc98\ub9ac \uc635\uc158\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/c10b5878ca3546b6b830c6c08d6abed0"},"\uc635\uc158")),(0,l.kt)("h3",{id:"errorpolicy-\uc124\uc815\ud558\uae30"},"errorPolicy \uc124\uc815\ud558\uae30"),(0,l.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\uc640 \uac19\uc774 options \uac1d\uccb4\uc5d0 errorPolicy\ub97c \uba85\uc2dc\ud558\uba74 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const MY_QUERY = gql`\n    query WillFail {\n        badField # This field's resolver produces an error\n        goodField # This field is populated successfully\n    }\n`;\n\nfunction ShowingSomeErrors() {\n    const { loading, error, data } = useQuery(MY_QUERY, { errorPolicy: 'all' });\n    if (loading) return <span>loading...</span>;\n    return (\n        <div>\n            <h2>Good: {data.goodField}</h2>\n            <pre>\n                Bad:\n                {error.graphQLErrors.map(({ message }, i) => (\n                    <span key={i}>{message}</span>\n                ))}\n            </pre>\n        </div>\n    );\n}\n")),(0,l.kt)("p",null,"\uc704 \uc608\uc2dc\ub294 errorPolicy \uc911 ",(0,l.kt)("inlineCode",{parentName:"p"},"all"),"\uc744\uc0ac\uc6a9\ud558\uc5ec \ubd80\ubd84\ub370\uc774\ud130\uc640 \uc5d0\ub7ec\ub97c \ub3d9\uc2dc\uc5d0 \ud65c\uc6a9\ud55c \uacbd\uc6b0\uc785\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"apollo-link\ub97c-\ud65c\uc6a9\ud558\uc5ec-\uace0\uae09\uae30\ub2a5-\uc0ac\uc6a9\ud558\uae30"},"Apollo Link\ub97c \ud65c\uc6a9\ud558\uc5ec \uace0\uae09\uae30\ub2a5 \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"Apollo link \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc4f0\uba74 \ucd94\uac00\uc801\uc778 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uccab\ubc88\uc9f8\ub85c, onError \ub9c1\ud06c\ub97c \ub9c1\ud06c\uccb4\uc778\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. onError \ub9c1\ud06c\ub294 \uc5d0\ub7ec\ub97c \ubc1b\uc544\uc11c \uadf8\uc5d0 \ub530\ub978 \ud589\ub3d9\uc744 \uc815\uc758\ud574\ub193\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\ub294 ApolloClient\uc758 \uc0dd\uc131\uc790\uc5d0 2\uac1c\uc758 link chain\uc744 \ucd94\uac00\ud558\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"onError \ub9c1\ud06c\ub294 GQL \uc624\ud37c\ub808\uc774\uc158\uc758 response\uac12\uc5d0\uc11c graphQLErrors\uc640 networkError\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"HttpLink\ub294 GQL \uc624\ud37c\ub808\uc774\uc158\uc744 \ubcf4\ub0b4\uc8fc\ub294 \ub9c1\ud06c\uc785\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';\nimport { onError } from '@apollo/client/link/error';\n\nconst httpLink = new HttpLink({\n    uri: 'http://localhost:4000/graphql',\n});\n\nconst errorLink = onError(({ graphQLErrors, networkError }) => {\n    if (graphQLErrors)\n        graphQLErrors.forEach(({ message, locations, path }) =>\n            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),\n        );\n\n    if (networkError) console.log(`[Network error]: ${networkError}`);\n});\n\n// If you provide a link chain to ApolloClient, you\n// don't provide the `uri` option.\nconst client = new ApolloClient({\n    // The `from` function combines an array of individual links\n    // into a link chain\n    link: from([errorLink, httpLink]),\n    cache: new InMemoryCache(),\n});\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc801\uc6a9\ud574\ubcf4\uae30"},"\ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud574\ubcf4\uae30"),(0,l.kt)("p",null,"\uc800\ud76c \ud504\ub85c\uc81d\ud2b8\ub3c4 Error Handling Link\ub97c \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\ub294 \uc5d0\ub7ec\ubc1c\uc0dd \uc2dc GQL\uc5d0\ub7ec\uc778\uc9c0 Network \uc5d0\ub7ec\uc778\uc9c0\ub9cc \uad6c\ubd84\ud558\uc5ec \ucf58\uc194\uc744 \ucc0d\uc9c0\ub9cc, Network \uc5d0\ub7ec\ub77c\uba74 404 Page\ub85c \ub9c1\ud0b9\ud558\uace0, GraphQL\uc5d0\ub7ec\uba74 \uc885\ub958\uc5d0 \ub9de\uac8c \uc5d0\ub7ec\uba54\uc2dc\uc9c0\ub97c \ub744\uc6cc\uc8fc\ub3c4\ub85d \ubc14\uafd4\uc57c \ud569\ub2c8\ub2e4. (\uc544\uc9c1 \uc0dd\uac01\uc911)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a877bb84-c1e0-49a7-97a1-6a6d8eea8a9b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.08.29.png",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-09-24 \u110b\u1169\u1112\u116e 10.08.29.png"})),(0,l.kt)("p",null,"\uc77c\ub2e8 Alert\ub85c \uc784\uc2dc\ub300\ucc98\ub97c \ud574\ub450\uc5c8\uc2b5\ub2c8\ub2e4. GraphQL Error\uba74 Error Occur ${message}\ub97c \ub744\uc6b0\ub3c4\ub85d, Network Error\uba74 \uadf8\ub0e5 Network Error Occur\ub77c\uace0 Alert\uc744 \ub744\uc6c1\ub2c8\ub2e4. \uc5b4\ub5a4 \uc0c1\ud669\uc774 \uc0dd\uae30\ub294\uc9c0 \ud55c\ubc88 \ubd05\uc2dc\ub2e4."),(0,l.kt)("h3",{id:"\uc11c\ubc84\uac00-\uaebc\uc838\uc788\ub294-\uacbd\uc6b0"},"\uc11c\ubc84\uac00 \uaebc\uc838\uc788\ub294 \uacbd\uc6b0"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6858e926-ae06-487e-b0e0-76fd91ce658a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.08.11.png",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-09-24 \u110b\u1169\u1112\u116e 10.08.11.png"})),(0,l.kt)("p",null,"\uc11c\ubc84\uac00 \uaebc\uc838\uc788\ub294 \uacbd\uc6b0\uc5d4 Network Error\uac00 \ub0a9\ub2c8\ub2e4. \uc5f0\uacb0\uc870\ucc28 \ub418\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc704 \ucf54\ub4dc\uc5d0\uc11c \uc124\uc815\ud574\uc900\ub300\ub85c Network Error\uac00 \uc788\ub294 \uacbd\uc6b0\ub294 Alert\uc774 \ub739\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"validation-check\uc5d0-\uac78\ub9b0-\uacbd\uc6b0"},"Validation Check\uc5d0 \uac78\ub9b0 \uacbd\uc6b0"),(0,l.kt)("p",null,"data fetch\ud560 \ub54c resolver\uc5d0 Handling Function\uc774 \uc5c6\uc5b4\uc11c \ucc98\ub9ac\uac00 \uc548\ub418\ub294(null\uc744 return\ud558\ub294) Review Article\uc744 \ud638\ucd9c\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c63375b8-069c-4db9-bca5-c3b7be9be159/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.12.25.png",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-09-24 \u110b\u1169\u1112\u116e 10.12.25.png"})),(0,l.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0\uc5d4 GraphQL Error\uac00 \ub0a9\ub2c8\ub2e4. \ubd84\uba85 Nullable\uc774 \uc544\ub2cc \ub370\uc774\ud130\ub97c Fetch\ud574\ubcf4\ub2c8\uae4c Null\uc774\ub2c8 \uc5d0\ub7ec\ub97c \ubc49\ub294 \uac83\uc785\ub2c8\ub2e4. Validation Check Error\uc5d0 \ud574\ub2f9\ud558\uace0 Network Error\uac00 \uc544\ub2cc GraphQL Error\uc5d0 \ud574\ub2f9\ud558\ub294 Alert\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e80e1e21-6ddb-4103-99a8-5bf032593d05/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.18.52.png",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-09-24 \u110b\u1169\u1112\u116e 10.18.52.png"})),(0,l.kt)("p",null,'\uc704 \uc608\uc2dc\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4. Validation Check\uc5d0\uc11c \uac78\ub9bd\ub2c8\ub2e4. Board_Type\uc740 Enum\uc774\ub77c\uc11c \ubbf8\ub9ac \uc120\uc5b8\ub41c \ud0c0\uc785\ubc16\uc5d0 \uc62c \uc218 \uc5c6\ub294\ub370 "\uba4d\uba4d" \uac8c\uc2dc\ud310\uc740 \uc120\uc5b8\ub418\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 Validation Check\uc5d0\uc11c \uac78\ub824\ubc84\ub9b0\uac81\ub2c8\ub2e4. \uc704\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c GraphQL Error\uac00 \ubc1c\uc0dd\ud574\uc11c Alert\uc774 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97305450-48b4-4c26-8809-7de894912846/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-24_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.20.32.png",alt:"\u1109\u1173\u110f\u1173\u1105\u1175\u11ab\u1109\u1163\u11ba 2021-09-24 \u110b\u1169\u1112\u116e 10.20.32.png"})),(0,l.kt)("p",null,"\ub610\ud55c \uc774 \ucffc\ub9ac\ub294 Client\uc5d0\uc11c \uc798\ubabb \ubcf4\ub0b8 \ucffc\ub9ac\uc785\ub2c8\ub2e4. variable\uc744 \uc11c\ubc84\uc640 \uc57d\uc18d\ud55c\ub300\ub85c \ubcf4\ub0b4\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 Network Error \ub610\ud55c \uac19\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \ub4a4\uc774\uc5b4 Network Error Alert\ub3c4 \uac19\uc774 \ub5b4\uc2b5\ub2c8\ub2e4 (\uac19\uc774 \ub728\uc9c0 \uc54a\uac8c \ud558\ub824\uba74 GQL Error Occur \ubd80\ubd84\uc5d0\uc11c return\ud574\ubc84\ub9ac\uba74 \ub429\ub2c8\ub2e4)"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\uc7ac\uc2dc\ub3c4-\ub85c\uc9c1"},"\uc7ac\uc2dc\ub3c4 \ub85c\uc9c1"),(0,l.kt)("p",null,"Apollo Link\ub294 \ub2e4\uc2dc \uc2dc\ub3c4\ud588\uc744 \ub54c \uc815\uc0c1 \uc791\ub3d9\ud560 \uc218 \ub3c4 \uc788\ub294\ub370 \ubc29\uae08 \uc2dc\ub3c4\uc5d0\uc11c\ub294 \uc2e4\ud328\ud55c \uc624\ud37c\ub808\uc774\uc158\uc744 \uc7ac\uc2dc\ub3c4\ud560 \uc218 \uc788\uac8c \ub3c4\uc640\uc90d\ub2c8\ub2e4. \uc5b4\ub5a4 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\ub290\ub0d0\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc635\uc158\uc744 \uc918\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL Error\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \u2192 \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"onError")),(0,l.kt)("li",{parentName:"ul"},"Network Error\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \u2192\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"RetryLink"))),(0,l.kt)("p",null,"\uad6c\uccb4\uc801\uc774 \ub0b4\uc6a9\uc740 \uc544\ub798\uc5d0 \uc815\ub9ac\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"1-graphql-error\uac00-\ubc1c\uc0dd\ud588\uc744-\ub54c-\uc7ac\uc2dc\ub3c4-\ub85c\uc9c1"},"1. ",(0,l.kt)("a",{parentName:"h3",href:"https://www.apollographql.com/docs/react/data/error-handling/#on-graphql-errors"},"G"),"raphQL Error\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1"),(0,l.kt)("p",null,"onError\ub294 \ubc1c\uc0dd\ud55c GQL error\uc758 \ud0c0\uc785\uc5d0 \ub530\ub77c \uc624\ud37c\ub808\uc774\uc158\uc744 \uc7ac\uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 token \uae30\ubc18 \uc778\uc99d\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uace0 \uce69\uc2dc\ub2e4. \ud1a0\ud070\uc774 \ub9cc\ub8cc\ub418\uc5c8\ub2e4\uba74 \uc0ac\uc6a9\uc790\ub294 \uc601\ubb38\ub3c4 \ubaa8\ub978 \ucc44 \ub2e4\uc2dc \ub85c\uadf8\uc778\uc744 \ud574\uc57c\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774\ub7f4 \ub54c \ub9ac\ud504\ub808\uc2dc \ud1a0\ud070\uc744 \uc870\ud68c\ud558\uace0 \uc544\uc9c1 \uc720\ud6a8\ud558\ub2e4\uba74 \uc790\ub3d9\uc73c\ub85c \uc7ac\uc778\uc99d\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc624\ud37c\ub808\uc774\uc158\uc744 \uc7ac\uc2dc\ub3c4\ud558\uae30 \uc704\ud574 onError\uc758 \ucf5c\ubc31\ud568\uc218\uc5d0\uc11c forward(operation)\uc744 \ub9ac\ud134\ud574\uc918\uc57c\ud569\ub2c8\ub2e4. \uc544\ub798\ub294 \uadf8 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"onError(({ graphQLErrors, networkError, operation, forward }) => {\n    if (graphQLErrors) {\n        for (let err of graphQLErrors) {\n            switch (err.extensions.code) {\n                // Apollo Server sets code to UNAUTHENTICATED\n                // when an AuthenticationError is thrown in a resolver\n                case 'UNAUTHENTICATED':\n                    // Modify the operation context with a new token\n                    const oldHeaders = operation.getContext().headers;\n                    operation.setContext({\n                        headers: {\n                            ...oldHeaders,\n                            authorization: getNewToken(),\n                        },\n                    });\n                    // Retry the request, returning the new observable\n                    return forward(operation);\n            }\n        }\n    }\n\n    // To retry on network errors, we recommend the RetryLink\n    // instead of the onError link. This just logs the error.\n    if (networkError) {\n        console.log(`[Network error]: ${networkError}`);\n    }\n});\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ub9cc\uc57d \uc7ac\uc2dc\ub3c4\ub41c \uc624\ud37c\ub808\uc774\uc158\uc774 \ub610 \uc5d0\ub7ec\ub97c \ubc49\ub294\ub2e4\uba74, \uc774\uac74 \ub2e4\uc2dc \ubb34\ud55c\ud638\ucd9c\ub418\ub294 \uac83\uc744 \ub9c9\uae30 \uc704\ud574 \ub2e4\uc2dc onError \ub85c\uc9c1\uc744 \ud0c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc989, \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1\uc740 1\ud68c\ub9cc \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\ub9cc\uc57d \uc7ac\uc2dc\ub3c4\ub97c \uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 onError\uc758 \ud568\uc218\uc5d0\uc11c \uc544\ubb34\uac83\ub3c4 \ub9ac\ud134\ud558\uc9c0 \uc54a\uc73c\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"2-network-error-\ubc1c\uc0dd\ud588\uc744-\ub54c-\uc7ac\uc2dc\ub3c4-\ub85c\uc9c1"},"2. Network Error \ubc1c\uc0dd\ud588\uc744 \ub54c \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1"),(0,l.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c \uc5d0\ub7ec\uac00 \ub0ac\uc744 \ub54c, \ucffc\ub9ac\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud558\ub824\uba74 RetryLink\ub97c link chain\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc744 \uad8c\uace0\ud569\ub2c8\ub2e4. \uc774 \ub9c1\ud06c\ub294 \ucd5c\ub300 \ud638\ucd9c\ud69f\uc218\ub098 exponential backoff\uacfc \uac19\uc740 \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1\uc744 \uc9e4 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4\u3163."),(0,l.kt)("h3",{id:"\uc5d0\ub7ec-\ubb34\uc2dc\ud558\uae30"},"\uc5d0\ub7ec \ubb34\uc2dc\ud558\uae30"),(0,l.kt)("p",null,"\uc870\uac74\uc5d0 \ub530\ub77c \uc5d0\ub7ec\ub97c \ubb34\uc2dc\ud558\uace0 \uc2f6\uc744 \ub550 \ucffc\ub9ac\uc758 onError\uac12\uc744 \ubc1b\uc544 response.errors\ub97c null\ub85c \uc124\uc815\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"onError(({ response, operation }) => {\n    if (operation.operationName === 'IgnoreErrorsQuery') {\n        response.errors = null;\n    }\n});\n")))}k.isMDXComponent=!0}}]);