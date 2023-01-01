(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(197),i=a(199),s=a(188);var o=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(s.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(196),c=a(207);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,s=t.metadata,d=s.title,u=s.description,g=s.nextItem,p=s.prevItem,h=s.editUrl,v=n.hide_table_of_contents;return r.a.createElement(l.a,{title:d,description:u},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:a})),r.a.createElement("div",{className:"col col--8"},r.a.createElement(i.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,h&&r.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(g||p)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:g,prevItem:p}))),!v&&t.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{headings:t.rightToc})))))}},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),l=a(188),i=a(52),s=a.n(i);function o(e){var t=e.sidebar;return 0===t.items.length?null:r.a.createElement("div",{className:s.a.sidebar},r.a.createElement("h3",{className:s.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:s.a.sidebarItemList},t.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(190),i=a(187),s=a(198),o=a(188),m=a(204),c=a(192),d=a(55),u=a.n(d),g=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,d,p,h=e.children,v=e.frontMatter,f=e.metadata,E=e.truncated,b=e.isBlogPostPage,N=void 0!==b&&b,_=f.date,k=f.permalink,x=f.tags,y=f.readingTime,w=v.author,C=v.title,I=v.image,M=v.keywords,L=v.author_url||v.authorURL,j=v.author_title||v.authorTitle,R=v.author_image_url||v.authorImageURL,O=Object(c.a)(I,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,M&&M.length&&r.a.createElement("meta",{name:"keywords",content:M.join(",")}),I&&r.a.createElement("meta",{property:"og:image",content:O}),I&&r.a.createElement("meta",{property:"twitter:image",content:O}),I&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+C})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(t=N?"h1":"h2",a=_.substring(0,10).split("-"),n=a[0],d=g[parseInt(a[1],10)-1],p=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},N?C:r.a.createElement(o.a,{to:k},C)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:_,className:u.a.blogPostDate},d," ",p,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},R&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:L,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:R,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:L,target:"_blank",rel:"noreferrer noopener"},w)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:m.a},h)),(x.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},x.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),x.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:f.permalink,"aria-label":"Read more about "+C},r.a.createElement("strong",null,"Read More"))))))}},202:function(e,t,a){"use strict";var n=a(203),r=a(0),l=a.n(r),i=a(189);a(53);t.a=function(e){var t=Object(i.a)().siteConfig.themeConfig.sandpack,a=e.children,r=e.template,s=void 0===r?"react":r,o=e.file,m=void 0===o?"/App.js":o,c=e.theme,d=void 0===c?t.theme:c;if(e.live){var u,g=a.split(/(```([\s\S]*?(?:(?!\\)[\s\S]))```)/gm).filter((function(e){return e.startsWith("```")})),p=g.reduce((function(e,t){var a,n,r,l=t.replace(/```/g,"").split("\n"),i=l[0],s=l.slice(1),o=null!==(a=null===(n=i.match(/file=(.+)/))||void 0===n?void 0:n[1])&&void 0!==a?a:"";return Object.assign({},e,((r={})[o]={code:s.join("\n")},r))}),{});return l.a.createElement(n.a,{editorHeight:600,customSetup:{dependencies:Object.assign({"react-virtuoso":"latest"},e["include-data"]?{faker:"5.1.0",lodash:"latest"}:{},"@mui/material"===e.import?{"@mui/material":"latest","@emotion/styled":"latest","@emotion/react":"latest"}:{},"react-table"===e.import?{"react-table":"latest"}:{},"react-sortable-hoc"===e.import?{"react-sortable-hoc":"^1.11.0"}:{},"react-beautiful-dnd"===e.import?{"react-beautiful-dnd":"latest"}:{},"@emotion/styled"===e.import?{"@emotion/styled":"latest","@emotion/react":"latest"}:{})},files:a?g.length?p:Object.assign((u={},u[m]=a,u),e["include-data"]?{"/data.js":{code:"\nimport faker from 'faker'\nimport { groupBy } from 'lodash'\nimport React from 'react'\n\nconst randomHeight = () => Math.floor(Math.random() * 30 + 24)\n\nconst generateRandomItems = (count) => {\n  return Array.from({ length: count }).map((_, i) => ({\n    text: `Item ${i + 1}`,\n    height: randomHeight(),\n    longText: faker.lorem.paragraphs(1),\n  }))\n}\n\nconst generated = []\n\nexport function toggleBg(index) {\n  return index % 2 ? '#f5f5f5' : 'white'\n}\n\nexport function user(index = 0) {\n  let firstName = faker.name.firstName()\n  let lastName = faker.name.lastName()\n\n  return {\n    index: index + 1,\n    bgColor: toggleBg(index),\n    name: `${firstName} ${lastName}`,\n    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,\n    jobTitle: faker.name.jobTitle(),\n    description: faker.lorem.sentence(10),\n    longText: faker.lorem.paragraphs(1),\n  }\n}\n\nexport const getUser = (index) => {\n  if (!generated[index]) {\n    generated[index] = user(index)\n  }\n\n  return generated[index]\n}\n\nconst userSorter = (a, b) => {\n  if (a.name < b.name) {\n    return -1\n  }\n  if (a.name > b.name) {\n    return 1\n  }\n  return 0\n}\n\nexport function generateUsers(length, startIndex = 0) {\n  return Array.from({ length }).map((_, i) => getUser(i + startIndex))\n}\n\nexport function generateGroupedUsers(length) {\n  const users = Array.from({ length })\n    .map((_, i) => getUser(i))\n    .sort(userSorter)\n  const groupedUsers = groupBy(users, (user) => user.name[0])\n  const groupCounts = Object.values(groupedUsers).map((users) => users.length)\n  const groups = Object.keys(groupedUsers)\n\n  return { users, groupCounts, groups }\n}\n\nexport const avatar = () =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: 'blue',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n        paddingTop: 15,\n        paddingLeft: 15,\n        color: 'white',\n        boxSizing: 'border-box'\n      },\n    },\n    \"AB\"\n  )\n\nexport const avatarPlaceholder = (text = ' ') =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: '#eef2f4',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n      },\n    },\n    text\n  )\n\nconst range = (len) => {\n  const arr = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = () => {\n  const statusChance = Math.random()\n  return {\n    firstName: faker.name.firstName(),\n    lastName: faker.name.lastName(),\n    age: Math.floor(Math.random() * 30),\n    visits: Math.floor(Math.random() * 100),\n    progress: Math.floor(Math.random() * 100),\n    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',\n  }\n}\n\nexport function makeData(...lens) {\n  const makeDataLevel = (depth = 0) => {\n    const len = lens[depth]\n    return range(len).map((d) => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n",hidden:!0}}:{}):void 0,template:s,theme:d})}return l.a.createElement(n.c,{customSetup:{entry:"index.ts",files:{"index.ts":a.trim()}}},l.a.createElement(n.d,{theme:d},l.a.createElement("button",{className:"sandpack__copy-button",onClick:function(){navigator.clipboard.writeText(a.trim())}},l.a.createElement("svg",{fill:"none",height:"100%",viewBox:"0 0 12 13",width:"100%"},l.a.createElement("g",{clipPath:"url(#a)"},l.a.createElement("path",{d:"M8.21 1.344H2.317c-.54 0-.983.463-.983 1.03v7.212h.983V2.374H8.21v-1.03Zm1.474 2.06H4.281c-.54 0-.983.464-.983 1.03v7.213c0 .566.442 1.03.983 1.03h5.403c.54 0 .983-.464.983-1.03V4.435c0-.567-.442-1.03-.983-1.03Zm0 8.243H4.281V4.435h5.403v7.212Z",fill:"currentColor"})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"a"},l.a.createElement("path",{d:"M0 0h12v12H0z",fill:"currentColor",transform:"translate(0 .676)"}))))),l.a.createElement(n.b,null)))}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n);var l=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var m=o[r],c=m.href,d=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),m.classList.add(t),i(m),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(59),s=a.n(i),o="table-of-contents__link";function m(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return l(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:s.a.tableOfContents},r.a.createElement(m,{headings:t}))}}}]);