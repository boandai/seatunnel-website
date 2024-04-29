"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[97244],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={},l="Common Options",i={unversionedId:"connector-v2/sink/common-options",id:"version-2.3.0-beta/connector-v2/sink/common-options",title:"Common Options",description:"Common parameters of sink connectors",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/sink/common-options.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/common-options",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/common-options",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/sink/common-options.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/Socket"},next:{title:"DingTalk",permalink:"/zh-CN/docs/2.3.0-beta/connector-v2/sink/dingtalk"}},s={},p=[{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common-options"},"Common Options"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Common parameters of sink connectors")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset")," output by the previous plugin in the configuration file;"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plug-in is processing the data set corresponding to this parameter."),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,r.yg)("p",null,"When ",(0,r.yg)("inlineCode",{parentName:"p"},"parallelism")," is not specified, the ",(0,r.yg)("inlineCode",{parentName:"p"},"parallelism")," in env is used by default."),(0,r.yg)("p",null,"When parallelism is specified, it will override the parallelism in env."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake"\n      sql = "select name from fake"\n      result_table_name = "fake_name"\n    }\n    sql {\n      source_table_name = "fake"\n      sql = "select age from fake"\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    console {\n      parallelism = 3\n      source_table_name = "fake_name"\n    }\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the console outputs the data of the last transform, and if it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_name")," , it will output the data of ",(0,r.yg)("inlineCode",{parentName:"p"},"fake_name"))))}u.isMDXComponent=!0}}]);