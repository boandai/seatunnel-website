"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72269],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(y,i(i({ref:t},g),{},{components:n})):r.createElement(y,i({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const l={},i="Sentry",o={unversionedId:"connector-v2/sink/Sentry",id:"version-2.2.0-beta/connector-v2/sink/Sentry",title:"Sentry",description:"Description",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/sink/Sentry.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Sentry",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Sentry",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/sink/Sentry.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Redis"},next:{title:"Socket",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Socket"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"dsn string",id:"dsn-string",level:3},{value:"env string",id:"env-string",level:3},{value:"release string",id:"release-string",level:3},{value:"cacheDirPath string",id:"cachedirpath-string",level:3},{value:"enableExternalConfiguration boolean",id:"enableexternalconfiguration-boolean",level:3},{value:"maxCacheItems number",id:"maxcacheitems-number",level:3},{value:"flushTimeoutMillis number",id:"flushtimeoutmillis-number",level:3},{value:"maxQueueSize number",id:"maxqueuesize-number",level:3},{value:"Example",id:"example",level:2}],g={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sentry"},"Sentry"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Write message to Sentry."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"schema projection"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dsn"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"env"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"release"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cacheDirPath"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enableExternalConfiguration"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"maxCacheItems"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"flushTimeoutMills"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"maxQueueSize"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"dsn-string"},"dsn ","[string]"),(0,a.yg)("p",null,"The DSN tells the SDK where to send the events to."),(0,a.yg)("h3",{id:"env-string"},"env ","[string]"),(0,a.yg)("p",null,"specify the environment"),(0,a.yg)("h3",{id:"release-string"},"release ","[string]"),(0,a.yg)("p",null,"specify the release"),(0,a.yg)("h3",{id:"cachedirpath-string"},"cacheDirPath ","[string]"),(0,a.yg)("p",null,"the cache dir path for caching offline events"),(0,a.yg)("h3",{id:"enableexternalconfiguration-boolean"},"enableExternalConfiguration ","[boolean]"),(0,a.yg)("p",null,"if loading properties from external sources is enabled."),(0,a.yg)("h3",{id:"maxcacheitems-number"},"maxCacheItems ","[number]"),(0,a.yg)("p",null,"The max cache items for capping the number of events Default is 30"),(0,a.yg)("h3",{id:"flushtimeoutmillis-number"},"flushTimeoutMillis ","[number]"),(0,a.yg)("p",null,"Controls how many seconds to wait before flushing down. Sentry SDKs cache events from a background queue and this queue is given a certain amount to drain pending events Default is 15000 = 15s"),(0,a.yg)("h3",{id:"maxqueuesize-number"},"maxQueueSize ","[number]"),(0,a.yg)("p",null,"Max queue size before flushing events/envelopes to the disk"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  Sentry {\n    dsn = "https://xxx@sentry.xxx.com:9999/6"\n    enableExternalConfiguration = true\n    maxCacheItems = 1000\n    env = prod\n  }\n\n')))}p.isMDXComponent=!0}}]);