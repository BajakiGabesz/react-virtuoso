(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{187:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(O,b(b({ref:t},l),{},{components:r})):a.a.createElement(O,b({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(187)),c={id:"_urx_actions_.subscription",title:"Interface: Subscription<T>",sidebar_label:"Subscription"},b={unversionedId:"api/interfaces/_urx_actions_.subscription",id:"api/interfaces/_urx_actions_.subscription",isDocsHomePage:!1,title:"Interface: Subscription<T>",description:'"urx/actions".Subscription',source:"@site/docs/api/interfaces/_urx_actions_.subscription.md",slug:"/api/interfaces/_urx_actions_.subscription",permalink:"/api/interfaces/_urx_actions_.subscription",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_urx_actions_.subscription.md",version:"current",sidebar_label:"Subscription",sidebar:"someSidebar",previous:{title:"Interface: Stream<T>",permalink:"/api/interfaces/_urx_actions_.stream"},next:{title:"Interface: Unsubscribe",permalink:"/api/interfaces/_urx_actions_.unsubscribe"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],l={rightToc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_urx_actions_"}),'"urx/actions"'),".Subscription"),Object(i.b)("p",null,"Subscriptions are bound to Emitters with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_urx_actions_#subscribe"}),"subscribe")," action, and get called with the new values."),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"T")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the Emitter value type.")))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Subscription"))),Object(i.b)("h2",{id:"callable"},"Callable"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"value"),": T): any"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/urx/actions.ts#L37"}),"src/urx/actions.ts:37"))),Object(i.b)("p",null,"Subscriptions are bound to Emitters with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_urx_actions_#subscribe"}),"subscribe")," action, and get called with the new values."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"value")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," any"))}p.isMDXComponent=!0}}]);