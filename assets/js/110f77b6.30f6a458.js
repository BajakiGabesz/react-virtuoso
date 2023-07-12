"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[3669],{7942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(5882),o=n(950),i=(n(959),n(7942)),s=["components"],l={id:"endless-scrolling",title:"Endless Scrolling",sidebar_label:"Endless Scrolling",slug:"/endless-scrolling/",description:"The React Virtuoso component makes it trivial to implement infinite scrolling lists in both directions with variably sized items."},a=void 0,c={unversionedId:"scenarios/endless-scrolling",id:"scenarios/endless-scrolling",title:"Endless Scrolling",description:"The React Virtuoso component makes it trivial to implement infinite scrolling lists in both directions with variably sized items.",source:"@site/docs/scenarios/endless-scrolling.md",sourceDirName:"scenarios",slug:"/endless-scrolling/",permalink:"/endless-scrolling/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/endless-scrolling.md",tags:[],version:"current",frontMatter:{id:"endless-scrolling",title:"Endless Scrolling",sidebar_label:"Endless Scrolling",slug:"/endless-scrolling/",description:"The React Virtuoso component makes it trivial to implement infinite scrolling lists in both directions with variably sized items."},sidebar:"defaultSidebar",previous:{title:"Responsive Columns",permalink:"/grid-responsive-columns/"},next:{title:"Keyboard Navigation",permalink:"/keyboard-navigation/"}},u={},p=[],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"endReached")," callback to automatically load more items when the user scrolls to the bottom of the list, creating endless scrolling.\nIf you want to load items more aggressively, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"overscan")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"increaseViewportBy")," property."),(0,i.kt)("p",null,"For reverse endless scrolling implementation, check ",(0,i.kt)("a",{parentName:"p",href:"/prepend-items/"},"the prepend items")," example."),(0,i.kt)("p",null,"Scroll fast to the bottom of the list to load additional items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport { useState, useCallback, useEffect } from 'react'\n\nexport default function App() {\n  const [users, setUsers] = useState(() => [])\n\n  const loadMore = useCallback(() => {\n    return setTimeout(() => {\n      setUsers((users) => [...users, ...generateUsers(100, users.length)])\n    }, 200)\n  }, [setUsers])\n\n  useEffect(() => {\n    const timeout = loadMore()\n    return () => clearTimeout(timeout)\n  }, [])\n\n  return (\n    <Virtuoso\n      style={{ height: 300 }}\n      data={users}\n      endReached={loadMore}\n      overscan={200}\n      itemContent={(index, user) => {\n        return <div style={{ backgroundColor: user.bgColor }}>{user.name}</div>\n      }}\n      components={{ Footer }}\n    />\n  )\n}\n\n\nconst Footer = () => {\n  return (\n    <div\n      style={{\n        padding: '2rem',\n        display: 'flex',\n        justifyContent: 'center',\n      }}\n    >\n      Loading...\n    </div>\n  )\n}\n\n")))}f.isMDXComponent=!0}}]);