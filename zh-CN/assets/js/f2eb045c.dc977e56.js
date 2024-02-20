"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[58824],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8636:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="Split",u={unversionedId:"transform-v2/split",id:"version-2.3.4/transform-v2/split",title:"Split",description:"Split transform plugin",source:"@site/versioned_docs/version-2.3.4/transform-v2/split.md",sourceDirName:"transform-v2",slug:"/transform-v2/split",permalink:"/zh-CN/docs/2.3.4/transform-v2/split",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/transform-v2/split.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Replace",permalink:"/zh-CN/docs/2.3.4/transform-v2/replace"},next:{title:"SQL Functions",permalink:"/zh-CN/docs/2.3.4/transform-v2/sql-functions"}},m={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"separator string",id:"separator-string",level:3},{value:"split_fieldstring",id:"split_fieldstring",level:3},{value:"output_fieldsarray",id:"output_fieldsarray",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],d={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"split"},"Split"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Split transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Split a field to more than one field."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split_field"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_fields"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"separator-string"},"separator ","[string]"),(0,l.kt)("p",null,"The list of fields that need to be kept. Fields not in the list will be deleted"),(0,l.kt)("h3",{id:"split_fieldstring"},"split_field","[string]"),(0,l.kt)("p",null,"The field to be split"),(0,l.kt)("h3",{id:"output_fieldsarray"},"output_fields","[array]"),(0,l.kt)("p",null,"The result fields after split"),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/transform-v2/common-options"},"Transform Plugin")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The data read from source is a table like this:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"card"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")))),(0,l.kt)("p",null,"We want split ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field to ",(0,l.kt)("inlineCode",{parentName:"p"},"first_name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"second name"),", we can add ",(0,l.kt)("inlineCode",{parentName:"p"},"Split")," transform like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'transform {\n  Split {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    separator = " "\n    split_field = "name"\n    output_fields = [first_name, second_name]\n  }\n}\n')),(0,l.kt)("p",null,"Then the data in result table ",(0,l.kt)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"card"),(0,l.kt)("th",{parentName:"tr",align:null},"first_name"),(0,l.kt)("th",{parentName:"tr",align:null},"last_name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy"),(0,l.kt)("td",{parentName:"tr",align:null},"Ding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"May"),(0,l.kt)("td",{parentName:"tr",align:null},"Ding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Kin"),(0,l.kt)("td",{parentName:"tr",align:null},"Dom")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Joy"),(0,l.kt)("td",{parentName:"tr",align:null},"Dom")))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"new-version"},"new version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Split Transform Connector")))}k.isMDXComponent=!0}}]);