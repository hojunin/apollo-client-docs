"use strict";(self.webpackChunkapollo_client=self.webpackChunkapollo_client||[]).push([[549],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6223:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:1,title:"\uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1\uc2dc\ud0a4\uae30(Improving Performance)"},l="\uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1\uc2dc\ud0a4\uae30",p={unversionedId:"perfomance/overview",id:"perfomance/overview",isDocsHomePage:!1,title:"\uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1\uc2dc\ud0a4\uae30(Improving Performance)",description:"---",source:"@site/docs/perfomance/overview.md",sourceDirName:"perfomance",slug:"/perfomance/overview",permalink:"/docs/perfomance/overview",editUrl:"https://github.com/hojunin/apollo-client-docs/docs/perfomance/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1\uc2dc\ud0a4\uae30(Improving Performance)"},sidebar:"tutorialSidebar",previous:{title:"\ucf54\ub4dc\uc81c\ub108\ub808\uc774\ud130(codegen)",permalink:"/docs/development_tools/codegen"},next:{title:"\ub099\uad00\uc801 UI \uc5c5\ub370\uc774\ud2b8(Optimistic UI)",permalink:"/docs/perfomance/optimisticUI"}},u=[{value:"\uce90\uc2dc\ub370\uc774\ud130 \ub9ac\ub2e4\uc774\ub809\ud305(cache redirecting)",id:"\uce90\uc2dc\ub370\uc774\ud130-\ub9ac\ub2e4\uc774\ub809\ud305cache-redirecting",children:[],level:2},{value:"\ub370\uc774\ud130 \ubbf8\ub9ac \uac00\uc838\uc624\uae30(prefetching)",id:"\ub370\uc774\ud130-\ubbf8\ub9ac-\uac00\uc838\uc624\uae30prefetching",children:[],level:2}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc544\ud3f4\ub85c-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc131\ub2a5-\ud5a5\uc0c1\uc2dc\ud0a4\uae30"},"\uc544\ud3f4\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1\uc2dc\ud0a4\uae30"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud83e\uddf9 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/performance/performance/"},"Apollo Docs"),"\ub97c \ubc88\uc5ed \ubc0f \uc758\uc5ed\ud55c \ub0b4\uc6a9\uc785\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uce90\uc2dc\ub370\uc774\ud130-\ub9ac\ub2e4\uc774\ub809\ud305cache-redirecting"},"\uce90\uc2dc\ub370\uc774\ud130 \ub9ac\ub2e4\uc774\ub809\ud305(cache redirecting)"),(0,a.kt)("p",null,"\uc885\uc885 \ucffc\ub9ac\uac00 \ub2e4\ub974\ub2e4\ub294 \uc774\uc720\ub85c \ub611\uac19\uc740 \ub370\uc774\ud130\uac00 \uc694\uccad\ub420 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub9ac\uc2a4\ud2b8\uc6a9 \ub370\uc774\ud130\uc640 \uc138\ubd80\ud654\uba74 \ub370\uc774\ud130\ub294 \uac70\uc758 \uac19\uc740 \ub370\uc774\ud130\uc8e0."),(0,a.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0\uc5d4 \uce90\uc2dc \ub9ac\ub2e4\uc774\ub809\ud305\uc744 \ud65c\uc6a9\ud574\uc11c \ucd94\uac00 \ucffc\ub9ac \uc5c6\uc774 \ub370\uc774\ud130\ub97c \ud398\uce58\ud574\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://hojunin.github.io/apollo-client-docs/docs/caching/advanced#%EC%BA%90%EC%8B%9C-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8C%85"},"\ub2e4\uc74c \ub9c1\ud06c"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694"),(0,a.kt)("h2",{id:"\ub370\uc774\ud130-\ubbf8\ub9ac-\uac00\uc838\uc624\uae30prefetching"},"\ub370\uc774\ud130 \ubbf8\ub9ac \uac00\uc838\uc624\uae30(prefetching)"),(0,a.kt)("p",null,"\ub370\uc774\ud130 \ubbf8\ub9ac \uac00\uc838\uc624\uae30\ub294 UI\uac00 \ub80c\ub354\ub9c1\ub418\uae30 \uc804\uc5d0 \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\uc758 \ucf8c\uc801\ud55c \uacbd\ud5d8\uc744 \uc99d\ub300\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"prefetching\uc744 \ud558\ub294 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d4 \uc0ac\uc6a9\uc790\uac00 \ud544\uc694\ud558\uaca0\ub2e4 \uc2f6\uc740 \ub370\uc774\ud130\ub97c \ucd94\uce21\ud558\uace0 \ubbf8\ub9ac \ucffc\ub9ac\ud558\ub294 \ubc29\uc2dd\uc774\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \uc544\ub798 \ucf54\ub4dc\uc5d0\uc11c, \ub9c1\ud06c \ucef4\ud3ec\ub10c\ud2b8\uc758 onMouseOver \uc774\ubca4\ud2b8\uc5d0\uc11c GET_DOG \ub3c4\ud050\uba3c\ud2b8\uac00 \ub2f4\uae34 \ucffc\ub9ac\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc0ac\uc6a9\uc790\uac00 \uc774 \ub9c1\ud06c\ub97c \ub204\ub974\uba74 \ubc29\uae08 \ud638\ucd9c\ud55c \ucffc\ub9ac\uc5d0\uc11c \ubc1b\uc544\uc628 \uac12\uc73c\ub85c UI\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function Feed() {\n  const { loading, error, data, client } = useQuery(GET_DOGS);\n\n  let content;\n  if (loading) {\n    content = <Fetching />;\n  } else if (error) {\n    content = <Error />;\n  } else {\n    content = (\n      <DogList\n        data={data.dogs}\n        renderRow={(type, data) => (\n          <Link\n            to={{\n              pathname: `/${data.breed}/${data.id}`,\n              state: { id: data.id },\n            }}\n            onMouseOver={() =>\n              client.query({\n                query: GET_DOG,\n                variables: { breed: data.breed },\n              })\n            }\n            style={{ textDecoration: "none" }}\n          >\n            <Dog {...data} url={data.displayImage} />\n          </Link>\n        )}\n      />\n    );\n  }\n\n  return (\n    <View style={styles.container}>\n      <Header />\n      {content}\n    </View>\n  );\n}\n')),(0,a.kt)("p",null,"GET_DOG\ub97c \ucffc\ub9ac\ud558\uace0 \uc815\uc0c1\uc801\uc73c\ub85c \uacb0\uacfc\ub97c \ubc1b\uac8c\ub418\uba74 \uc774 \uac12\uc740 \uce90\uc2f1\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc720\uc800\uac00 \uadf8 \ub9c1\ud06c\ub97c \ud074\ub9ad\ud588\uc744 \ub54c \ud574\ub2f9 \uc0c1\uc138 \ud398\uc774\uc9c0\uac00 \uce90\uc2dc\ub85c\ubd80\ud130 \ubd88\ub7ec\uc640\uc9c0\uae30 \ub54c\ubb38\uc5d0 \ub85c\ub529\ub3d9\uc791 \uc5c6\uc774 \uc989\uac01 \ubc18\uc751\ud558\ub294 \uac83 \ucc98\ub7fc \ubcf4\uc774\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc704\uc758 \uc608\uc2dc\ucc98\ub7fc \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\ub294 \ub3d9\uc791 \ub9d0\uace0\ub3c4 \ub370\uc774\ud130 \ubbf8\ub9ac \uac00\uc838\uc624\uae30\ub97c \uc0ac\uc6a9\ud560\ub9cc\ud55c \uc774\ubca4\ud2b8\ub97c \uc18c\uac1c\ud558\uc790\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \ud398\uc774\uc9c0\ub85c \uac00\uae30\uac00 \uc788\ub294 \ud398\uc774\uc9c0\ub4e4, \ubbf8\ub9ac \ub2e4\uc74c \ud398\uc774\uc9c0\uc5d0\uc11c \ud544\uc694\ud55c \ucffc\ub9ac\ub97c \ud574\ub458 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9cc\uc57d GA\uac19\uc740 \ubd84\uc11d\ub3c4\uad6c\uc5d0 \uc6b0\ub9ac \uc11c\ube44\uc2a4\uc758 \ud2b9\uc815 \ud398\uc774\uc9c0\ub4e4 \uac04\uc758 \ud398\uc774\uc9c0 \uc774\ub3d9\uc774 \uc7a6\ub2e4\uace0 \ub098\uc624\uba74, \uc774\ub4e4 \ud398\uc774\uc9c0\ub4e4\uc5d0\uc11c \ub2e4\ub978 \ud398\uc774\uc9c0\uc758 \ub370\uc774\ud130\ub97c \ubbf8\ub9ac \ucffc\ub9ac\ud574\ub450\ub294 \uac83\ub3c4 \uc88b\uaca0\uc8e0."),(0,a.kt)("li",{parentName:"ul"},"Carousel\uac19\uc740 UI\ub098 Swiperble \ub9ac\uc2a4\ud2b8\uac19\uc740 \uacbd\uc6b0 \ub2f9\uc7a5\uc740 \ud558\ub098\ub9cc \ubcf4\uc774\uc9c0\ub9cc \uc5ec\ub7ec\uac1c\uc758 \ub370\uc774\ud130\uac00 \uc788\uc8e0. \uc774\ub7f0 \uacbd\uc6b0 \ub204\ub97c \ub54c\ub9c8\ub2e4 \uac00\uc838\uc624\ub294 \uac83 \ubcf4\ub2e4 ,\ubbf8\ub9ac \ubd80\ubd84 \uc544\ub2c8\uba74 \uc804\ubd80\ub97c \ucffc\ub9ac\ud574\uc624\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"prefetching\uc758 \uc815\uc218\ub294 SSR\uc785\ub2c8\ub2e4. SPA\uc758 \ub2e8\uc810\uc778 \uccab \ud398\uc774\uc9c0\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc624\ub798 \uac78\ub9b0\ub2e4\ub294 \ub2e8\uc810\uc744 prefetching\uc73c\ub85c \ucee4\ubc84\ud574\ubcf4\uc138\uc694. ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/performance/server-side-rendering/#rehydrating-the-client-side-cache"},"\ub2e4\uc74c \ub9c1\ud06c"),"\ub97c \ucc38\uace0\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);