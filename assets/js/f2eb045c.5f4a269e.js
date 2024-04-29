"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[89330],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=g(n),d=r,u=y["".concat(o,".").concat(d)]||y[d]||s[d]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},i="Split",p={unversionedId:"transform-v2/split",id:"version-2.3.4/transform-v2/split",title:"Split",description:"Split transform plugin",source:"@site/versioned_docs/version-2.3.4/transform-v2/split.md",sourceDirName:"transform-v2",slug:"/transform-v2/split",permalink:"/docs/2.3.4/transform-v2/split",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/transform-v2/split.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Replace",permalink:"/docs/2.3.4/transform-v2/replace"},next:{title:"SQL Functions",permalink:"/docs/2.3.4/transform-v2/sql-functions"}},o={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"separator string",id:"separator-string",level:3},{value:"split_fieldstring",id:"split_fieldstring",level:3},{value:"output_fieldsarray",id:"output_fieldsarray",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],m={toc:g},y="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"split"},"Split"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Split transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Split a field to more than one field."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"separator"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"separator-string"},"separator ","[string]"),(0,r.yg)("p",null,"The list of fields that need to be kept. Fields not in the list will be deleted"),(0,r.yg)("h3",{id:"split_fieldstring"},"split_field","[string]"),(0,r.yg)("p",null,"The field to be split"),(0,r.yg)("h3",{id:"output_fieldsarray"},"output_fields","[array]"),(0,r.yg)("p",null,"The result fields after split"),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.4/transform-v2/common-options"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")))),(0,r.yg)("p",null,"We want split ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field to ",(0,r.yg)("inlineCode",{parentName:"p"},"first_name")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"second name"),", we can add ",(0,r.yg)("inlineCode",{parentName:"p"},"Split")," transform like this"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'transform {\n  Split {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    separator = " "\n    split_field = "name"\n    output_fields = [first_name, second_name]\n  }\n}\n')),(0,r.yg)("p",null,"Then the data in result table ",(0,r.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"),(0,r.yg)("th",{parentName:"tr",align:null},"first_name"),(0,r.yg)("th",{parentName:"tr",align:null},"last_name"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy"),(0,r.yg)("td",{parentName:"tr",align:null},"Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"May"),(0,r.yg)("td",{parentName:"tr",align:null},"Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Kin"),(0,r.yg)("td",{parentName:"tr",align:null},"Dom")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy"),(0,r.yg)("td",{parentName:"tr",align:null},"Dom")))),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Split Transform Connector")))}s.isMDXComponent=!0}}]);