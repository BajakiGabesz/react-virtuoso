(window.webpackJsonp=window.webpackJsonp||[]).push([[70,89,110],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(0),r(187)),i=r(56),c=r(57),b={id:"virtuoso-grid-api-reference",title:"Virtuoso Grid API Reference",sidebar_label:"Virtuoso Grid",slug:"/virtuoso-grid-api-reference/"},s={unversionedId:"virtuoso-grid-api-reference",id:"virtuoso-grid-api-reference",isDocsHomePage:!1,title:"Virtuoso Grid API Reference",description:"All properties are optional - by default, the component will render empty.",source:"@site/docs/virtuoso-grid-api-reference.md",slug:"/virtuoso-grid-api-reference/",permalink:"/virtuoso-grid-api-reference/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/virtuoso-grid-api-reference.md",version:"current",sidebar_label:"Virtuoso Grid",sidebar:"someSidebar",previous:{title:"Virtuoso API Reference",permalink:"/virtuoso-api-reference/"},next:{title:"Table Virtuoso API Reference",permalink:"/table-virtuoso-api-reference/"}},l=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],p={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All properties are optional - by default, the component will render empty. "),Object(a.b)("p",null,"  If you are using TypeScript and want to use correctly typed component ",Object(a.b)("inlineCode",{parentName:"p"},"ref"),", you can use ",Object(a.b)("inlineCode",{parentName:"p"},"VirtuosoGridHandle")," types."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso'\n//...\nconst ref = useRef<VirtuosoGridHandle>(null)\n//...\n<VirtuosoGrid ref={ref} /*...*/ />\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(i.default,{mdxType:"Props"})),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(c.default,{mdxType:"Methods"})))}d.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(187)),i={id:"_component_interfaces_virtuosogrid_.virtuosogridprops",title:"Interface: VirtuosoGridProps<D, C>",sidebar_label:"VirtuosoGridProps"},c={unversionedId:"api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridprops",id:"api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridprops",isDocsHomePage:!1,title:"Interface: VirtuosoGridProps<D, C>",description:'"component-interfaces/VirtuosoGrid".VirtuosoGridProps',source:"@site/docs/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridprops.md",slug:"/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridprops",permalink:"/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridprops",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridprops.md",version:"current",sidebar_label:"VirtuosoGridProps"},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"atBottomStateChange",id:"atbottomstatechange",children:[]},{value:"atTopStateChange",id:"attopstatechange",children:[]},{value:"components",id:"components",children:[]},{value:"computeItemKey",id:"computeitemkey",children:[]},{value:"customScrollParent",id:"customscrollparent",children:[]},{value:"data",id:"data",children:[]},{value:"endReached",id:"endreached",children:[]},{value:"initialItemCount",id:"initialitemcount",children:[]},{value:"isScrolling",id:"isscrolling",children:[]},{value:"itemClassName",id:"itemclassname",children:[]},{value:"itemContent",id:"itemcontent",children:[]},{value:"listClassName",id:"listclassname",children:[]},{value:"overscan",id:"overscan",children:[]},{value:"rangeChanged",id:"rangechanged",children:[]},{value:"scrollSeekConfiguration",id:"scrollseekconfiguration",children:[]},{value:"scrollerRef",id:"scrollerref",children:[]},{value:"startReached",id:"startreached",children:[]},{value:"totalCount",id:"totalcount",children:[]},{value:"useWindowScroll",id:"usewindowscroll",children:[]}]}],s={rightToc:b};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_component_interfaces_virtuosogrid_"}),'"component-interfaces/VirtuosoGrid"'),".VirtuosoGridProps"),Object(a.b)("h2",{id:"type-parameters"},"Type parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"D")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"C")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"VirtuosoGridProps")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"atbottomstatechange"},"atBottomStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atBottomStateChange"),": (atBottom: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L82"}),"src/component-interfaces/VirtuosoGrid.ts:82"))),Object(a.b)("p",null,"Called with true / false when the list has reached the bottom / gets scrolled up.\nCan be used to load newer items, like ",Object(a.b)("inlineCode",{parentName:"p"},"tail -f"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"attopstatechange"},"atTopStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atTopStateChange"),": (atTop: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L87"}),"src/component-interfaces/VirtuosoGrid.ts:87"))),Object(a.b)("p",null,"Called with ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," when the list has reached the top / gets scrolled down."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"components"},"components"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"components"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.gridcomponents"}),"GridComponents"),"<","C>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L36"}),"src/component-interfaces/VirtuosoGrid.ts:36"))),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"components")," property for advanced customization of the elements rendered by the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"computeitemkey"},"computeItemKey"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"computeItemKey"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.gridcomputeitemkey"}),"GridComputeItemKey"),"<","D, C>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L48"}),"src/component-interfaces/VirtuosoGrid.ts:48"))),Object(a.b)("p",null,"If specified, the component will use the function to generate the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," property for each list item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"customscrollparent"},"customScrollParent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"customScrollParent"),": HTMLElement"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L112"}),"src/component-interfaces/VirtuosoGrid.ts:112"))),Object(a.b)("p",null,"Pass a reference to a scrollable parent element, so that the grid won't wrap in its own."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"data"},"data"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"data"),": readonly D[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L20"}),"src/component-interfaces/VirtuosoGrid.ts:20"))),Object(a.b)("p",null,"The data items to be rendered. If data is set, the total count will be inferred from the length of the array."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"endreached"},"endReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"endReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L66"}),"src/component-interfaces/VirtuosoGrid.ts:66"))),Object(a.b)("p",null,"Gets called when the user scrolls to the end of the list.\nReceives the last item index as an argument. Can be used to implement endless scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"initialitemcount"},"initialItemCount"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"initialItemCount"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L26"}),"src/component-interfaces/VirtuosoGrid.ts:26"))),Object(a.b)("p",null,"Use for server-side rendering - if set, the list will render the specified amount of items\nregardless of the container / item size."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"isscrolling"},"isScrolling"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"isScrolling"),": (isScrolling: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L60"}),"src/component-interfaces/VirtuosoGrid.ts:60"))),Object(a.b)("p",null,"Called when the list starts/stops scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemclassname"},"itemClassName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemClassName"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L102"}),"src/component-interfaces/VirtuosoGrid.ts:102"))),Object(a.b)("p",null,"Sets the grid items' className"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemcontent"},"itemContent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemContent"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.griditemcontent"}),"GridItemContent"),"<","D, C>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L31"}),"src/component-interfaces/VirtuosoGrid.ts:31"))),Object(a.b)("p",null,"Set the callback to specify the contents of the item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"listclassname"},"listClassName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"listClassName"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L97"}),"src/component-interfaces/VirtuosoGrid.ts:97"))),Object(a.b)("p",null,"Sets the className for the list DOM element"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"overscan"},"overscan"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"overscan"),": number ","|"," { main: number ; reverse: number  }"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L43"}),"src/component-interfaces/VirtuosoGrid.ts:43"))),Object(a.b)("p",null,'Set the overscan property to make the component "chunk" the rendering of new items on scroll.\nThe property causes the component to render more items than the necessary, but reduces the re-renders on scroll.\nSetting ',Object(a.b)("inlineCode",{parentName:"p"},"{ main: number, reverse: number }")," lets you extend the list in both the main and the reverse scrollable directions."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"rangechanged"},"rangeChanged"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"rangeChanged"),": (range: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.listrange"}),"ListRange"),") => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L76"}),"src/component-interfaces/VirtuosoGrid.ts:76"))),Object(a.b)("p",null,"Called with the new set of items each time the list items are rendered due to scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollseekconfiguration"},"scrollSeekConfiguration"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollSeekConfiguration"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekconfiguration"}),"ScrollSeekConfiguration")," ","|"," false"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L55"}),"src/component-interfaces/VirtuosoGrid.ts:55"))),Object(a.b)("p",null,"Use to display placeholders if the user scrolls fast through the list."),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"components.ScrollSeekPlaceholder")," to change the placeholder content."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollerref"},"scrollerRef"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollerRef"),": (ref: HTMLElement ","|"," null) => any"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L92"}),"src/component-interfaces/VirtuosoGrid.ts:92"))),Object(a.b)("p",null,"Provides access to the root DOM element"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"startreached"},"startReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"startReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L71"}),"src/component-interfaces/VirtuosoGrid.ts:71"))),Object(a.b)("p",null,"Called when the user scrolls to the start of the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"totalcount"},"totalCount"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"totalCount"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L15"}),"src/component-interfaces/VirtuosoGrid.ts:15"))),Object(a.b)("p",null,"The total amount of items to be rendered."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usewindowscroll"},"useWindowScroll"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"useWindowScroll"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L107"}),"src/component-interfaces/VirtuosoGrid.ts:107"))),Object(a.b)("p",null,"Uses the document scroller rather than wrapping the grid in its own."))}l.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(187)),i={id:"_component_interfaces_virtuosogrid_.virtuosogridhandle",title:"Interface: VirtuosoGridHandle",sidebar_label:"VirtuosoGridHandle"},c={unversionedId:"api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridhandle",id:"api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridhandle",isDocsHomePage:!1,title:"Interface: VirtuosoGridHandle",description:'"component-interfaces/VirtuosoGrid".VirtuosoGridHandle',source:"@site/docs/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridhandle.md",slug:"/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridhandle",permalink:"/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridhandle",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_component_interfaces_virtuosogrid_.virtuosogridhandle.md",version:"current",sidebar_label:"VirtuosoGridHandle"},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"scrollBy",id:"scrollby",children:[]},{value:"scrollTo",id:"scrollto",children:[]},{value:"scrollToIndex",id:"scrolltoindex",children:[]}]}],s={rightToc:b};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_component_interfaces_virtuosogrid_"}),'"component-interfaces/VirtuosoGrid"'),".VirtuosoGridHandle"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"VirtuosoGridHandle"))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"scrollby"},"scrollBy"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollBy"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L118"}),"src/component-interfaces/VirtuosoGrid.ts:118"))),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollto"},"scrollTo"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollTo"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L117"}),"src/component-interfaces/VirtuosoGrid.ts:117"))),Object(a.b)("h4",{id:"parameters-1"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrolltoindex"},"scrollToIndex"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollToIndex"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": number ","|"," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_#indexlocationwithalign"}),"IndexLocationWithAlign"),"): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f61e769/src/component-interfaces/VirtuosoGrid.ts#L116"}),"src/component-interfaces/VirtuosoGrid.ts:116"))),Object(a.b)("h4",{id:"parameters-2"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," ",Object(a.b)("a",Object(n.a)({parentName:"td"},{href:"/api/modules/_interfaces_#indexlocationwithalign"}),"IndexLocationWithAlign"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"))}l.isMDXComponent=!0}}]);