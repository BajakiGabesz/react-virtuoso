"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[8470],{7942:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var o=n(959);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||s;return n?o.createElement(d,a(a({ref:e},c),{},{components:n})):o.createElement(d,a({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3684:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(5882),r=n(950),s=(n(959),n(7942)),a=["components"],i={id:"stick-to-bottom",title:"Stick to Bottom",sidebar_label:"Stick to Bottom",slug:"/stick-to-bottom/"},l=void 0,u={unversionedId:"scenarios/stick-to-bottom",id:"scenarios/stick-to-bottom",title:"Stick to Bottom",description:'This example "follows" the live updates of a list by auto-scrolling to the last item when totalCount is increased.',source:"@site/docs/scenarios/stick-to-bottom.md",sourceDirName:"scenarios",slug:"/stick-to-bottom/",permalink:"/stick-to-bottom/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/stick-to-bottom.md",tags:[],version:"current",frontMatter:{id:"stick-to-bottom",title:"Stick to Bottom",sidebar_label:"Stick to Bottom",slug:"/stick-to-bottom/"},sidebar:"defaultSidebar",previous:{title:"Scroll Seek Placeholders",permalink:"/scroll-seek-placeholders/"},next:{title:"Window Scrolling",permalink:"/window-scrolling/"}},c={},p=[],m={toc:p},f="wrapper";function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,s.kt)(f,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'This example "follows" the live updates of a list by auto-scrolling to the last item when ',(0,s.kt)("inlineCode",{parentName:"p"},"totalCount")," is increased.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"atBottomStateChange")," callback is used to suspend / resume the updates."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"followOutput")," property accepts ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,s.kt)("inlineCode",{parentName:"p"},'"smooth"'),". The smooth mode looks better visually but might not keep up with very fast updates."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},"import { Virtuoso } from 'react-virtuoso'\nimport { user, generateUsers, toggleBg } from './data'\nimport { useState, useMemo, useCallback, useEffect, useRef } from 'react'\n\nexport default function App() {\n  const [users, setUsers] = useState(() => generateUsers(100))\n  const appendInterval = useRef(null)\n  const virtuosoRef = useRef(null)\n  const [atBottom, setAtBottom] = useState(false)\n  const showButtonTimeoutRef = useRef(null)\n  const [showButton, setShowButton] = useState(false)\n\n  useEffect(() => {\n    return () => {\n      clearInterval(appendInterval.current)\n      clearTimeout(showButtonTimeoutRef.current)\n    }\n  }, [])\n\n  useEffect(() => {\n    clearTimeout(showButtonTimeoutRef.current)\n    if (!atBottom) {\n      showButtonTimeoutRef.current = setTimeout(() => setShowButton(true), 500)\n    } else {\n      setShowButton(false)\n    }\n  }, [atBottom, setShowButton])\n\n  return (\n    <>\n      <Virtuoso\n        style={{ height: 400 }}\n        ref={virtuosoRef}\n        initialTopMostItemIndex={999}\n        data={users}\n        atBottomStateChange={(bottom) => {\n          clearInterval(appendInterval.current)\n          if (bottom) {\n            appendInterval.current = setInterval(() => {\n              setUsers((users) => [...users, user(), user(), user(), user(), user()])\n            }, 400)\n          }\n          setAtBottom(bottom)\n        }}\n        itemContent={(index, user) => {\n          return (\n            <div style={{ backgroundColor: toggleBg(index), padding: '1rem 0.5rem' }}>\n              <h4>{user.name}</h4>\n              <div style={{ marginTop: '1rem' }}>{user.description}</div>\n            </div>\n          )\n        }}\n        followOutput={'auto'}\n      />\n      {showButton && (\n        <button\n          onClick={() => virtuosoRef.current.scrollToIndex({ index: users.length - 1, behavior: 'smooth' })}\n          style={{ float: 'right', transform: 'translate(-1rem, -2rem)' }}\n        >\n          Bottom\n        </button>\n      )}\n    </>\n  )\n}\n")))}d.isMDXComponent=!0}}]);