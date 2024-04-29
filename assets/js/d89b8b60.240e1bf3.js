"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67474],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=g(n),u=a,s=y["".concat(p,".").concat(u)]||y[u]||d[u]||l;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const l={},i="Filter",o={unversionedId:"transform-v2/filter",id:"version-2.3.2/transform-v2/filter",title:"Filter",description:"Filter transform plugin",source:"@site/versioned_docs/version-2.3.2/transform-v2/filter.md",sourceDirName:"transform-v2",slug:"/transform-v2/filter",permalink:"/docs/2.3.2/transform-v2/filter",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/transform-v2/filter.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"FilterRowKind",permalink:"/docs/2.3.2/transform-v2/filter-rowkind"},next:{title:"Replace",permalink:"/docs/2.3.2/transform-v2/replace"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"fields array",id:"fields-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],m={toc:g},y="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"filter"},"Filter"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Filter transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Filter the field."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fields"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"fields-array"},"fields ","[array]"),(0,a.yg)("p",null,"The list of fields that need to be kept. Fields not in the list will be deleted"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.2/transform-v2/common-options"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"The data read from source is a table like this:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"age"),(0,a.yg)("th",{parentName:"tr",align:null},"card"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")))),(0,a.yg)("p",null,"We want to delete field ",(0,a.yg)("inlineCode",{parentName:"p"},"age"),", we can add ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," Transform like this"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'transform {\n  Filter {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    fields = [name, card]\n  }\n}\n')),(0,a.yg)("p",null,"Then the data in result table ",(0,a.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"card"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"123")))),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"new-version"},"new version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Filter Transform Connector")))}d.isMDXComponent=!0}}]);