"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18821],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,f=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return n?r.createElement(f,i(i({ref:e},m),{},{components:n})):r.createElement(f,i({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40998:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="Filter",u={unversionedId:"transform-v2/filter",id:"version-2.3.4/transform-v2/filter",title:"Filter",description:"Filter transform plugin",source:"@site/versioned_docs/version-2.3.4/transform-v2/filter.md",sourceDirName:"transform-v2",slug:"/transform-v2/filter",permalink:"/zh-CN/docs/2.3.4/transform-v2/filter",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/transform-v2/filter.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"FilterRowKind",permalink:"/zh-CN/docs/2.3.4/transform-v2/filter-rowkind"},next:{title:"JsonPath",permalink:"/zh-CN/docs/2.3.4/transform-v2/jsonpath"}},m={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"fields array",id:"fields-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],s={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filter"},"Filter"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Filter the field."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"fields-array"},"fields ","[array]"),(0,l.kt)("p",null,"The list of fields that need to be kept. Fields not in the list will be deleted"),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/transform-v2/common-options"},"Transform Plugin")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The data read from source is a table like this:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"card"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"123")))),(0,l.kt)("p",null,"We want to delete field ",(0,l.kt)("inlineCode",{parentName:"p"},"age"),", we can add ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," Transform like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'transform {\n  Filter {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    fields = [name, card]\n  }\n}\n')),(0,l.kt)("p",null,"Then the data in result table ",(0,l.kt)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"card"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"May Ding"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.kt)("td",{parentName:"tr",align:null},"123")))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"new-version"},"new version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Filter Transform Connector")))}c.isMDXComponent=!0}}]);