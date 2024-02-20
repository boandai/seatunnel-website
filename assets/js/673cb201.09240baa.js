"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72967],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},assets:function(){return d},toc:function(){return u},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={},o="FieldMapper",m={unversionedId:"transform-v2/field-mapper",id:"version-2.3.4/transform-v2/field-mapper",title:"FieldMapper",description:"FieldMapper transform plugin",source:"@site/versioned_docs/version-2.3.4/transform-v2/field-mapper.md",sourceDirName:"transform-v2",slug:"/transform-v2/field-mapper",permalink:"/docs/2.3.4/transform-v2/field-mapper",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/transform-v2/field-mapper.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Copy",permalink:"/docs/2.3.4/transform-v2/copy"},next:{title:"FilterRowKind",permalink:"/docs/2.3.4/transform-v2/filter-rowkind"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"field_mapper config",id:"field_mapper-config",level:3},{value:"common options config",id:"common-options-config",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],c={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fieldmapper"},"FieldMapper"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"FieldMapper transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Add input schema and output schema mapping."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_mapper"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"field_mapper-config"},"field_mapper ","[config]"),(0,l.kt)("p",null,"Specify the field mapping relationship between input and output"),(0,l.kt)("h3",{id:"common-options-config"},"common options ","[config]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.4/transform-v2/common-options"},"Transform Plugin")," for details."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The data read from source is a table like this:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"card"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")))),(0,l.kt)("p",null,"We want to delete ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," field and update the filed order to ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"card"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and rename ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"new_name"),". We can add ",(0,l.kt)("inlineCode",{parentName:"p"},"FieldMapper")," transform like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'transform {\n  FieldMapper {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    field_mapper = {\n        id = id\n        card = card\n        name = new_name\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Then the data in result table ",(0,l.kt)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"card"),(0,l.kt)("th",{parentName:"tr",align:null},"new_name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"May Ding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom")))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"new-version"},"new version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Copy Transform Connector")))}s.isMDXComponent=!0}}]);