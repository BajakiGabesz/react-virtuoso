"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[4170],{7942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(5882),n=r(950),o=(r(959),r(7942)),l=["components"],i={id:"react-table-integration",title:"Table Virtuoso integrated with React Table",sidebar_label:"React Table",slug:"/react-table-integration/"},s=void 0,c={unversionedId:"table/react-table-integration",id:"table/react-table-integration",title:"Table Virtuoso integrated with React Table",description:"The following example virtualizes the basic example of React Table. makeData comes from the React Table samples.",source:"@site/docs/table/react-table-integration.md",sourceDirName:"table",slug:"/react-table-integration/",permalink:"/react-table-integration/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/table/react-table-integration.md",tags:[],version:"current",frontMatter:{id:"react-table-integration",title:"Table Virtuoso integrated with React Table",sidebar_label:"React Table",slug:"/react-table-integration/"},sidebar:"defaultSidebar",previous:{title:"Material UI Table",permalink:"/mui-table-virtual-scroll/"},next:{title:"Fixed Headers",permalink:"/table-fixed-headers/"}},p={},u=[{value:"Virtualized React Table with Table Virtuoso",id:"virtualized-react-table-with-table-virtuoso",level:2}],d={toc:u},b="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)(b,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following example virtualizes the ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/examples/basic"},"basic example of React Table"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"makeData")," comes ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/tannerlinsley/react-table/master/examples/basic/src/makeData.js"},"from the React Table samples"),"."),(0,o.kt)("h2",{id:"virtualized-react-table-with-table-virtuoso"},"Virtualized React Table with Table Virtuoso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data import=react-table",live:!0,"include-data":!0,import:"react-table"},"import { TableVirtuoso } from 'react-virtuoso'\nimport { useTable } from 'react-table'\nimport { makeData } from './data'\nimport React, { useMemo } from 'react'\n\nexport default function App() {\n  const data = useMemo(() => makeData(200), [])\n  const columns = useMemo(\n    () => [\n      {\n        Header: 'Name',\n        columns: [\n          {\n            Header: 'First Name',\n            accessor: 'firstName',\n          },\n          {\n            Header: 'Last Name',\n            accessor: 'lastName',\n          },\n        ],\n      },\n      {\n        Header: 'Info',\n        columns: [\n          {\n            Header: 'Age',\n            accessor: 'age',\n          },\n          {\n            Header: 'Visits',\n            accessor: 'visits',\n          },\n          {\n            Header: 'Status',\n            accessor: 'status',\n          },\n          {\n            Header: 'Profile Progress',\n            accessor: 'progress',\n          },\n        ],\n      },\n    ],\n    []\n  )\n  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({\n    columns,\n    data,\n  })\n\n  return (\n    <TableVirtuoso\n      style={{ height: 400 }}\n      totalCount={rows.length}\n      components={{\n        Table: ({ style, ...props }) => <table {...getTableProps()} {...props} style={{ ...style, width: 800, tableLayout: 'fixed' }} />,\n        TableBody: React.forwardRef(({ style, ...props }, ref) => <tbody {...getTableBodyProps()} {...props} ref={ref} />),\n        TableRow: (props) => {\n          const index = props['data-index']\n          const row = rows[index]\n          return <tr {...props} {...row.getRowProps()} />\n        },\n      }}\n      fixedHeaderContent={() => {\n        return headerGroups.map((headerGroup) => (\n          <tr {...headerGroup.getHeaderGroupProps()} style={{ background: 'white' }}>\n            {headerGroup.headers.map((column) => (\n              <th {...column.getHeaderProps()}>{column.render('Header')}</th>\n            ))}\n          </tr>\n        ))\n      }}\n      itemContent={(index, user) => {\n        const row = rows[index]\n        prepareRow(row)\n        return row.cells.map((cell) => {\n          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>\n        })\n      }}\n    />\n  )\n}\n")))}m.isMDXComponent=!0}}]);