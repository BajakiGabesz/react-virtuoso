"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[4009],{7942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var m=2;m<i;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>m,toc:()=>u});var r=n(5882),o=n(950),i=(n(959),n(7942)),s=["components"],a={id:"material-ui-endless-scrolling",title:"MUI List",sidebar_label:"MUI List",slug:"/material-ui-endless-scrolling/"},l=void 0,m={unversionedId:"scenarios/material-ui-endless-scrolling",id:"scenarios/material-ui-endless-scrolling",title:"MUI List",description:"The React Virtuoso component supports customization of its internal components to accommodate styled components from frameworks like MUI.",source:"@site/docs/scenarios/material-ui-endless-scrolling.md",sourceDirName:"scenarios",slug:"/material-ui-endless-scrolling/",permalink:"/material-ui-endless-scrolling/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/material-ui-endless-scrolling.md",tags:[],version:"current",frontMatter:{id:"material-ui-endless-scrolling",title:"MUI List",sidebar_label:"MUI List",slug:"/material-ui-endless-scrolling/"},sidebar:"defaultSidebar",previous:{title:"Keyboard Navigation",permalink:"/keyboard-navigation/"},next:{title:"Mocking in tests",permalink:"/mocking-in-tests/"}},c={},u=[],p={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The React Virtuoso component supports customization of its internal components to accommodate styled components from frameworks like MUI."),(0,i.kt)("p",null,"The example below displays 500 records grouped by name, using the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/components/lists/"},"the List components from MUI"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data import=@mui/material",live:!0,"include-data":!0,import:"@mui/material"},"import { GroupedVirtuoso } from 'react-virtuoso'\nimport { generateGroupedUsers, generateUsers } from './data'\nimport List from '@mui/material/List'\nimport ListSubheader from '@mui/material/ListSubheader'\nimport ListItem from '@mui/material/ListItem'\nimport ListItemAvatar from '@mui/material/ListItemAvatar'\nimport Avatar from '@mui/material/Avatar'\nimport ListItemText from '@mui/material/ListItemText'\nimport React, { useMemo } from 'react'\n\nexport default function App() {\n  const { users, groups, groupCounts } = generateGroupedUsers(500)\n\n  return (\n    <GroupedVirtuoso\n      style={{ height: 400 }}\n      groupCounts={groupCounts}\n      components={MUIComponents}\n      groupContent={(index) => {\n        return <div>{groups[index]}</div>\n      }}\n      itemContent={(index) => {\n        const user = users[index]\n        return (\n          <>\n            <ListItemAvatar>\n              <Avatar>{user.initials}</Avatar>\n            </ListItemAvatar>\n\n            <ListItemText primary={user.name} secondary={<span>{user.description}</span>} />\n          </>\n        )\n      }}\n    />\n  )\n}\n\n\nconst MUIComponents = {\n  List: React.forwardRef(({ style, children }, listRef) => {\n    return (\n      <List style={{ padding: 0, ...style, margin: 0 }} component=\"div\" ref={listRef}>\n        {children}\n      </List>\n    )\n  }),\n\n  Item: ({ children, ...props }) => {\n    return (\n      <ListItem component=\"div\" {...props} style={{ margin: 0 }}>\n        {children}\n      </ListItem>\n    )\n  },\n\n  Group: ({ children, style, ...props }) => {\n    return (\n      <ListSubheader\n        component=\"div\"\n        {...props}\n        style={{\n          ...style,\n          backgroundColor: 'white',\n          margin: 0,\n        }}\n      >\n        {children}\n      </ListSubheader>\n    )\n  },\n}\n")))}f.isMDXComponent=!0}}]);