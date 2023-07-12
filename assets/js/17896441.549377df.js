"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[7918],{3439:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(690),r=n(959),l=n(8145);const o=function(e){var t=e.children,n=e.template,o=void 0===n?"react":n,s=e.file,i=void 0===s?"/App.js":s;if(e.live){var c,d=t.split(/(```([\s\S]*?[^\\])```)/gm).filter((function(e){return e.startsWith("```")})),m=d.reduce((function(e,t){var n,a,r,l=t.replace(/```/g,"").split("\n"),o=l[0],s=l.slice(1),i=null!=(n=null==(a=o.match(/file=(.+)/))?void 0:a[1])?n:"";return Object.assign({},e,((r={})[i]={code:s.join("\n")},r))}),{});return r.createElement(a.xR,{editorHeight:600,customSetup:{dependencies:Object.assign({"react-virtuoso":"latest"},e["include-data"]?{faker:"5.1.0",lodash:"latest"}:{},"@mui/material"===e.import?{"@mui/material":"latest","@emotion/styled":"latest","@emotion/react":"latest"}:{},"react-table"===e.import?{"react-table":"latest"}:{},"react-sortable-hoc"===e.import?{"react-sortable-hoc":"^1.11.0"}:{},"react-beautiful-dnd"===e.import?{"react-beautiful-dnd":"latest"}:{},"@emotion/styled"===e.import?{"@emotion/styled":"latest","@emotion/react":"latest"}:{})},files:t?d.length?m:Object.assign((c={},c[i]=t,c),e["include-data"]?{"/data.js":{code:"\nimport faker from 'faker'\nimport { groupBy } from 'lodash'\nimport React from 'react'\n\nconst randomHeight = () => Math.floor(Math.random() * 30 + 24)\n\nconst generateRandomItems = (count) => {\n  return Array.from({ length: count }).map((_, i) => ({\n    text: `Item ${i + 1}`,\n    height: randomHeight(),\n    longText: faker.lorem.paragraphs(1),\n  }))\n}\n\nconst generated = []\n\nexport function toggleBg(index) {\n  return index % 2 ? '#f5f5f5' : 'white'\n}\n\nexport function user(index = 0) {\n  let firstName = faker.name.firstName()\n  let lastName = faker.name.lastName()\n\n  return {\n    index: index + 1,\n    bgColor: toggleBg(index),\n    name: `${firstName} ${lastName}`,\n    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,\n    jobTitle: faker.name.jobTitle(),\n    description: faker.lorem.sentence(10),\n    longText: faker.lorem.paragraphs(1),\n  }\n}\n\nexport const getUser = (index) => {\n  if (!generated[index]) {\n    generated[index] = user(index)\n  }\n\n  return generated[index]\n}\n\nconst userSorter = (a, b) => {\n  if (a.name < b.name) {\n    return -1\n  }\n  if (a.name > b.name) {\n    return 1\n  }\n  return 0\n}\n\nexport function generateUsers(length, startIndex = 0) {\n  return Array.from({ length }).map((_, i) => getUser(i + startIndex))\n}\n\nexport function generateGroupedUsers(length) {\n  const users = Array.from({ length })\n    .map((_, i) => getUser(i))\n    .sort(userSorter)\n  const groupedUsers = groupBy(users, (user) => user.name[0])\n  const groupCounts = Object.values(groupedUsers).map((users) => users.length)\n  const groups = Object.keys(groupedUsers)\n\n  return { users, groupCounts, groups }\n}\n\nexport const avatar = () =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: 'blue',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n        paddingTop: 15,\n        paddingLeft: 15,\n        color: 'white',\n        boxSizing: 'border-box'\n      },\n    },\n    \"AB\"\n  )\n\nexport const avatarPlaceholder = (text = ' ') =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: '#eef2f4',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n      },\n    },\n    text\n  )\n\nconst range = (len) => {\n  const arr = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = () => {\n  const statusChance = Math.random()\n  return {\n    firstName: faker.name.firstName(),\n    lastName: faker.name.lastName(),\n    age: Math.floor(Math.random() * 30),\n    visits: Math.floor(Math.random() * 100),\n    progress: Math.floor(Math.random() * 100),\n    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',\n  }\n}\n\nexport function makeData(...lens) {\n  const makeDataLevel = (depth = 0) => {\n    const len = lens[depth]\n    return range(len).map((d) => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n",hidden:!0}}:{}):void 0,template:o,theme:l.FM})}return r.createElement(a.oT,null,r.createElement(a.uR,{theme:l.FM},r.createElement("button",{className:"sandpack__copy-button",onClick:function(){navigator.clipboard.writeText(t.trim())}},r.createElement("svg",{fill:"none",height:"100%",viewBox:"0 0 12 13",width:"100%"},r.createElement("g",{clipPath:"url(#a)"},r.createElement("path",{d:"M8.21 1.344H2.317c-.54 0-.983.463-.983 1.03v7.212h.983V2.374H8.21v-1.03Zm1.474 2.06H4.281c-.54 0-.983.464-.983 1.03v7.213c0 .566.442 1.03.983 1.03h5.403c.54 0 .983-.464.983-1.03V4.435c0-.567-.442-1.03-.983-1.03Zm0 8.243H4.281V4.435h5.403v7.212Z",fill:"currentColor"})),r.createElement("defs",null,r.createElement("clipPath",{id:"a"},r.createElement("path",{d:"M0 0h12v12H0z",fill:"currentColor",transform:"translate(0 .676)"}))))),r.createElement(a.pq,{showLineNumbers:!0,code:t.trim(),readOnly:!0,fileType:(e.className||"language-js").replace(/language-/,"")})))}},5211:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(959),r=n(5080),l=n(3409),o=a.createContext(null);function s(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(o.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function c(){var e,t=i(),n=t.metadata,l=t.frontMatter,o=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:l.keywords,image:null!=(e=o.image)?e:l.image})}var d=n(5924),m=n(3559),u=n(5882),v=n(5572),p=n(3085);function f(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(p.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(p.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){var e=i().metadata;return a.createElement(f,{previous:e.previous,next:e.next})}var b=n(6583),g=n(5291),E=n(4258),L=n(8474),N=n(2990),C=n(5974);var x={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){var t=x[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(g.Z,{to:n,onClick:r},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){var t,n=e.className,r=e.versionMetadata,l=(0,b.Z)().siteConfig.title,o=(0,E.gA)({failfast:!0}).pluginId,s=(0,N.J)(o).savePreferredVersionName,i=(0,E.Jo)(o),c=i.latestDocSuggestion,m=i.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,d.Z)(n,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(k,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:m.label,to:u.path,onClick:function(){return s(m.name)}})))}function y(e){var t=e.className,n=(0,C.E)();return n.banner?a.createElement(Z,{className:t,versionMetadata:n}):null}function H(e){var t=e.className,n=(0,C.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function T(e){var t=e.lastUpdatedBy;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(T,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var M=n(8376),A=n(6694);const I={lastUpdated:"lastUpdated_E_KV"};function B(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(A.Z,e)))}function O(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(M.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I.lastUpdated)},(n||r)&&a.createElement(w,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function P(){var e=i().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,o=e.tags,s=o.length>0,c=!!(t||n||l);return s||c?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(B,{tags:o}),c&&a.createElement(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var S=n(2210),R=n(8593),V=n(950);const j={tocCollapsibleButton:"tocCollapsibleButton_LQSp",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_PKQL"};var D=["collapsed"];function z(e){var t=e.collapsed,n=(0,V.Z)(e,D);return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",j.tocCollapsibleButton,!t&&j.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const F={tocCollapsible:"tocCollapsible_EGiQ",tocCollapsibleContent:"tocCollapsibleContent_NxPI",tocCollapsibleExpanded:"tocCollapsibleExpanded_kPXL"};function $(e){var t=e.toc,n=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,o=(0,S.u)({initialState:!0}),s=o.collapsed,i=o.toggleCollapsed;return a.createElement("div",{className:(0,d.Z)(F.tocCollapsible,!s&&F.tocCollapsibleExpanded,n)},a.createElement(z,{collapsed:s,onClick:i}),a.createElement(S.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:s},a.createElement(R.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const q={tocMobile:"tocMobile_whUO"};function Q(){var e=i(),t=e.toc,n=e.frontMatter;return a.createElement($,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,q.tocMobile)})}var G=n(7980);function K(){var e=i(),t=e.toc,n=e.frontMatter;return a.createElement(G.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var J=n(2826),W=n(7905);function X(e){var t,n,r,l,o=e.children,s=(t=i(),n=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:n.title);return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},s&&a.createElement("header",null,a.createElement(J.Z,{as:"h1"},s)),a.createElement(W.Z,null,o))}var Y=n(2219),ee=n(6170),te=n(6540);function ne(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_ogLU"};function re(){var e=(0,te.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(g.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ne,{className:ae.breadcrumbHomeIcon})))}const le={breadcrumbsContainer:"breadcrumbsContainer_xpwo"};function oe(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(g.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function se(e){var t=e.children,n=e.active,r=e.index,l=e.addMicrodata;return a.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ie(){var e=(0,Y.s1)(),t=(0,ee.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(re,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(se,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(oe,{href:t.href,isLast:r},t.label))})))):null}const ce={docItemContainer:"docItemContainer_i0K2",docItemCol:"docItemCol_sadT"};function de(e){var t,n,r,l,o,s,c=e.children,u=(t=i(),n=t.frontMatter,r=t.toc,l=(0,m.i)(),o=n.hide_table_of_contents,s=!o&&r.length>0,{hidden:o,mobile:s?a.createElement(Q,null):void 0,desktop:!s||"desktop"!==l&&"ssr"!==l?void 0:a.createElement(K,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!u.hidden&&ce.docItemCol)},a.createElement(y,null),a.createElement("div",{className:ce.docItemContainer},a.createElement("article",null,a.createElement(ie,null),a.createElement(H,null),u.mobile,a.createElement(X,null,c),a.createElement(P,null)),a.createElement(h,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function me(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(s,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(c,null),a.createElement(de,null,a.createElement(n,null))))}},7980:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(5882),r=n(950),l=n(959),o=n(5924),s=n(8593);const i={tableOfContents:"tableOfContents_uQu1",docItemContainer:"docItemContainer_Lh80"};var c=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,n=(0,r.Z)(e,c);return l.createElement("div",{className:(0,o.Z)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(s.Z,(0,a.Z)({},n,{linkClassName:d,linkActiveClassName:m})))}},8593:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(5882),r=n(950),l=n(959),o=n(9691),s=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,s);n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,l.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=u();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=m(s,{anchorTopOffset:n.current}),c=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function p(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}const f=l.memo(p);var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,p=void 0===u?void 0:u,b=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,h),L=(0,o.L)(),N=null!=b?b:L.tableOfContents.minHeadingLevel,C=null!=g?g:L.tableOfContents.maxHeadingLevel,x=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:C});return v((0,l.useMemo)((function(){if(m&&p)return{linkClassName:m,linkActiveClassName:p,minHeadingLevel:N,maxHeadingLevel:C}}),[m,p,N,C])),l.createElement(f,(0,a.Z)({toc:x,className:s,linkClassName:m},E))}},5974:(e,t,n)=>{n.d(t,{E:()=>s,q:()=>o});var a=n(959),r=n(3409),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function s(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);