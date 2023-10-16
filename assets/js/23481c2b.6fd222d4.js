"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[5156],{7942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[u]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=t(5882),o=t(950),i=(t(959),t(7942)),a=["components"],d={id:"react-beautiful-dnd-window-scroller",title:"RB DND + Window Scroller",sidebar_label:"RB DND + Window Scroller",slug:"/react-beautiful-dnd-window-scroller/"},s=void 0,l={unversionedId:"scenarios/react-beautiful-dnd-window-scroller",id:"scenarios/react-beautiful-dnd-window-scroller",title:"RB DND + Window Scroller",description:"The example below integrates React Virtuoso with React Beautiful DND and the document scroller.",source:"@site/docs/scenarios/react-beautiful-dnd-window-scroller.md",sourceDirName:"scenarios",slug:"/react-beautiful-dnd-window-scroller/",permalink:"/react-beautiful-dnd-window-scroller/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/react-beautiful-dnd-window-scroller.md",tags:[],version:"current",frontMatter:{id:"react-beautiful-dnd-window-scroller",title:"RB DND + Window Scroller",sidebar_label:"RB DND + Window Scroller",slug:"/react-beautiful-dnd-window-scroller/"},sidebar:"defaultSidebar",previous:{title:"Press to Load More",permalink:"/press-to-load-more/"},next:{title:"React Beautiful DND",permalink:"/react-beautiful-dnd/"}},c={},u=[{value:"List attached to RB DND + Window Scroller",id:"list-attached-to-rb-dnd--window-scroller",level:2}],p={toc:u},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The example below integrates React Virtuoso with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/atlassian/react-beautiful-dnd"},"React Beautiful DND")," and the document scroller."),(0,i.kt)("h2",{id:"list-attached-to-rb-dnd--window-scroller"},"List attached to RB DND + Window Scroller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live import=react-beautiful-dnd",live:!0,import:"react-beautiful-dnd"},'import React, { useEffect, useState } from "react";\nimport ReactDOM from "react-dom";\nimport { Virtuoso } from "react-virtuoso";\nimport * as ReactBeautifulDnd from "react-beautiful-dnd";\n\n// Virtuoso\'s resize observer can this error,\n// which is caught by DnD and aborts dragging.\nwindow.addEventListener("error", (e) => {\n  if (\n    e.message ===\n      "ResizeObserver loop completed with undelivered notifications." ||\n    e.message === "ResizeObserver loop limit exceeded"\n  ) {\n    e.stopImmediatePropagation();\n  }\n});\n\nexport default function App(){  \n  const [items, setItems] = useState(() => {\n    return Array.from({ length: 1000 }, (_, k) => ({\n      id: `id:${k}`,\n      text: `item ${k}`,\n    }))\n  })\n\n  const reorder = React.useCallback((list, startIndex, endIndex) => {\n    const result = Array.from(list)\n    const [removed] = result.splice(startIndex, 1)\n    result.splice(endIndex, 0, removed)\n\n    return result\n  }, [])\n\n  const onDragEnd = React.useCallback(\n    (result) => {\n      if (!result.destination) {\n        return\n      }\n      if (result.source.index === result.destination.index) {\n        return\n      }\n\n      setItems((items) => reorder(items, result.source.index, result.destination.index))\n    },\n    [setItems, reorder]\n  )\n\n  const Item = React.useMemo(() => {\n    return ({ provided, item, isDragging }) => {\n      // For borders and visual space,\n      // use container with padding rather than a margin\n      // margins confuse virtuoso rendering\n      return (\n        <div\n          {...provided.draggableProps}\n          {...provided.dragHandleProps}\n          ref={provided.innerRef}\n          style={{ ...provided.draggableProps.style, paddingBottom: \'8px\' }}\n        >\n          <div\n            style={{\n              border: `1px solid ${isDragging ? \'red\' : \'black\'}`,\n            }}\n          >\n            {item.text}\n          </div>\n        </div>\n      )\n    }\n  }, [])\n\n  const HeightPreservingItem = React.useMemo(() => {\n    return ({ children, ...props }) => {\n      return (\n        // the height is necessary to prevent the item container from collapsing, which confuses Virtuoso measurements\n        <div {...props} style={{ height: props[\'data-known-size\'] || undefined }}>\n          {children}\n        </div>\n      )\n    }\n  }, [])\n\n  return (\n    <div style={{ overflow: \'auto\' }}>\n      <ReactBeautifulDnd.DragDropContext onDragEnd={onDragEnd}>\n        <ReactBeautifulDnd.Droppable\n          droppableId="droppable"\n          mode="virtual"\n          renderClone={(provided, snapshot, rubric) => (\n            <Item provided={provided} isDragging={snapshot.isDragging} item={items[rubric.source.index]} />\n          )}\n        >\n          {(provided) => {\n            return (\n              <div ref={provided.innerRef}>\n                <Virtuoso\n                  useWindowScroll\n                  components={{\n                    Item: HeightPreservingItem,\n                  }}\n                  data={items}\n                  itemContent={(index, item) => {\n                    return (\n                      <ReactBeautifulDnd.Draggable draggableId={item.id} index={index} key={item.id}>\n                        {(provided) => <Item provided={provided} item={item} isDragging={false} />}\n                      </ReactBeautifulDnd.Draggable>\n                    )\n                  }}\n                />\n              </div>\n            )\n          }}\n        </ReactBeautifulDnd.Droppable>\n      </ReactBeautifulDnd.DragDropContext>\n    </div>\n  )\n}\n')))}f.isMDXComponent=!0}}]);