"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[2998],{7942:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(959);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),b=l,d=c["".concat(u,".").concat(b)]||c[b]||m[b]||n;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(5882),l=r(950),n=(r(959),r(7942)),o=["components"],i={id:"mui-table-virtual-scroll",title:"Table Virtuoso with Material UI table",sidebar_label:"Material UI Table",slug:"/mui-table-virtual-scroll/"},u=void 0,p={unversionedId:"table/mui-table-virtual-scroll",id:"table/mui-table-virtual-scroll",title:"Table Virtuoso with Material UI table",description:"The structure of TableVirtuoso is compatible with the markup of Material UI Table. Notice the adjustment of the borderCollapse styling.",source:"@site/docs/table/mui-table-virtual-scroll.md",sourceDirName:"table",slug:"/mui-table-virtual-scroll/",permalink:"/mui-table-virtual-scroll/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/table/mui-table-virtual-scroll.md",tags:[],version:"current",frontMatter:{id:"mui-table-virtual-scroll",title:"Table Virtuoso with Material UI table",sidebar_label:"Material UI Table",slug:"/mui-table-virtual-scroll/"},sidebar:"defaultSidebar",previous:{title:"Basic Example",permalink:"/hello-table/"},next:{title:"React Table",permalink:"/react-table-integration/"}},s={},c=[{value:"Material UI Table virtualized with Table Virtuoso",id:"material-ui-table-virtualized-with-table-virtuoso",level:2}],m={toc:c},b="wrapper";function d(e){var t=e.components,r=(0,l.Z)(e,o);return(0,n.kt)(b,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The structure of ",(0,n.kt)("inlineCode",{parentName:"p"},"TableVirtuoso")," is compatible with the markup of Material UI Table. Notice the adjustment of the ",(0,n.kt)("inlineCode",{parentName:"p"},"borderCollapse")," styling."),(0,n.kt)("p",null,"Notice that you should keep table components outside of the component defniition to avoid re-renders.\nif you need to interact with a state within the component, you can pass the state through the table's ",(0,n.kt)("inlineCode",{parentName:"p"},"context")," prop.\nits value will be propagaded in the below component ",(0,n.kt)("inlineCode",{parentName:"p"},"context")," prop.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"../press-to-load-more/"},"press to load more example")," for an example usage of the context."),(0,n.kt)("h2",{id:"material-ui-table-virtualized-with-table-virtuoso"},"Material UI Table virtualized with Table Virtuoso"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data import=@mui/material",live:!0,"include-data":!0,import:"@mui/material"},"import { TableVirtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport React from 'react'\nimport Table from '@mui/material/Table'\nimport TableBody from '@mui/material/TableBody'\nimport TableCell from '@mui/material/TableCell'\nimport TableContainer from '@mui/material/TableContainer'\nimport TableHead from '@mui/material/TableHead'\nimport TableRow from '@mui/material/TableRow'\nimport Paper from '@mui/material/Paper'\n\nconst TableComponents = {\n  Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),\n  Table: (props) => <Table {...props} style={{ borderCollapse: 'separate' }} />,\n  TableHead: TableHead,\n  TableRow: TableRow,\n  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),\n}\n\nexport default function App() {\n  return (\n    <TableVirtuoso\n      style={{ height: 400 }}\n      data={generateUsers(100)}\n      components={TableComponents}\n      fixedHeaderContent={() => (\n        <TableRow>\n          <TableCell style={{ width: 150, background: 'white' }}>\n            Name\n          </TableCell>\n          <TableCell style={{ background: 'white' }}>\n            Description\n          </TableCell>\n        </TableRow>\n      )}\n      itemContent={(index, user) => (\n        <>\n          <TableCell style={{ width: 150, background: 'white' }}>\n            {user.name}\n          </TableCell>\n          <TableCell style={{ background: 'white'  }}>\n            {user.description}\n          </TableCell>\n        </>\n      )}\n    />\n  )\n}\n")))}d.isMDXComponent=!0}}]);