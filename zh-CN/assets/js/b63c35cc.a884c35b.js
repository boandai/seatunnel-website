"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[45107],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),s=a(57485),u=a(31682),p=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=d({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??c;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(c(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(N,(0,n.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},25438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={},s="File",u={unversionedId:"connector/source/File",id:"version-2.3.0-beta/connector/source/File",title:"File",description:"File source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/source/File.mdx",sourceDirName:"connector/source",slug:"/connector/source/File",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/File",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/source/File.mdx",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Feishu Sheet",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/FeishuSheet"},next:{title:"HBase",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Hbase"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format string",id:"format-string",level:5},{value:"format.type string",id:"formattype-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"path string",id:"path-string",level:5},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"file"},"File"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"File source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from local or hdfs file."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: File"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: File"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h5",{id:"format-string"},"format ","[string]"),(0,r.yg)("p",null,"Format for reading files, currently supports text, parquet, json, orc, csv.")),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format.type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"formattype-string"},"format.type ","[string]"),(0,r.yg)("p",null,"The format for reading files from the file system, currently supports ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"parquet")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"orc")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," ."),(0,r.yg)("h3",{id:"schema-string"},"schema ","[string]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"csv",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," of ",(0,r.yg)("inlineCode",{parentName:"li"},"csv")," is a string of ",(0,r.yg)("inlineCode",{parentName:"li"},"jsonArray")," , such as ",(0,r.yg)("inlineCode",{parentName:"li"},'"[{\\"type\\":\\"long\\"},{\\"type\\":\\"string\\"}]"')," , this can only specify the type of the field , The field name cannot be specified, and the common configuration parameter ",(0,r.yg)("inlineCode",{parentName:"li"},"field_name")," is generally required."))),(0,r.yg)("li",{parentName:"ul"},"json",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,r.yg)("inlineCode",{parentName:"li"},"json")," is to provide a ",(0,r.yg)("inlineCode",{parentName:"li"},"json string")," of the original data, and the ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," can be automatically generated, but the original data with the most complete content needs to be provided, otherwise the fields will be lost."))),(0,r.yg)("li",{parentName:"ul"},"parquet",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," of ",(0,r.yg)("inlineCode",{parentName:"li"},"parquet")," is an ",(0,r.yg)("inlineCode",{parentName:"li"},"Avro schema string")," , such as ",(0,r.yg)("inlineCode",{parentName:"li"},'{\\"type\\":\\"record\\",\\"name\\":\\"test\\",\\"fields\\":[{\\"name\\" :\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"string\\"}]}')," ."))),(0,r.yg)("li",{parentName:"ul"},"orc",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," of ",(0,r.yg)("inlineCode",{parentName:"li"},"orc")," is the string of ",(0,r.yg)("inlineCode",{parentName:"li"},"orc schema")," , such as ",(0,r.yg)("inlineCode",{parentName:"li"},'"struct<name:string,addresses:array<struct<street:string,zip:smallint>>>"')," ."))),(0,r.yg)("li",{parentName:"ul"},"text",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," of ",(0,r.yg)("inlineCode",{parentName:"li"},"text")," can be filled with ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," .")))),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.yg)("p",null,"The parallelism of an individual operator, for FileSource"))),(0,r.yg)("h5",{id:"path-string"},"path ","[string]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If read data from hdfs , the file path should start with ",(0,r.yg)("inlineCode",{parentName:"li"},"hdfs://"),"  "),(0,r.yg)("li",{parentName:"ul"},"If read data from local , the file path should start with ",(0,r.yg)("inlineCode",{parentName:"li"},"file://"))),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector/source/common-options"},"Source Plugin")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'file {\n    path = "hdfs:///var/logs"\n    result_table_name = "access_log"\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'file {\n    path = "file:///var/logs"\n    result_table_name = "access_log"\n}\n'))),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'    FileSource{\n    path = "hdfs://localhost:9000/input/"\n    format.type = "json"\n    schema = "{\\"data\\":[{\\"a\\":1,\\"b\\":2},{\\"a\\":3,\\"b\\":4}],\\"db\\":\\"string\\",\\"q\\":{\\"s\\":\\"string\\"}}"\n    result_table_name = "test"\n}\n')))))}d.isMDXComponent=!0}}]);