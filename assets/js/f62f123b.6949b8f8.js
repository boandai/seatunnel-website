"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79973],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),o=g(n),u=r,m=o["".concat(p,".").concat(u)]||o[u]||y[u]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[o]="string"==typeof e?e:r,l[1]=s;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const i={},l="TiDb",s={unversionedId:"connector/sink/Tidb",id:"version-2.1.1/connector/sink/Tidb",title:"TiDb",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/sink/Tidb.md",sourceDirName:"connector/sink",slug:"/connector/sink/Tidb",permalink:"/docs/2.1.1/connector/sink/Tidb",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/sink/Tidb.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/docs/2.1.1/connector/sink/Redis"},next:{title:"Common Options",permalink:"/docs/2.1.1/connector/sink/common-options"}},p={},g=[{value:"Description",id:"description",level:3},{value:"Env Options",id:"env-options",level:3},{value:"spark.tispark.pd.addresses string",id:"sparktisparkpdaddresses-string",level:5},{value:"spark.sql.extensions string",id:"sparksqlextensions-string",level:5},{value:"Options",id:"options",level:3},{value:"addr string",id:"addr-string",level:5},{value:"port string",id:"port-string",level:5},{value:"user string",id:"user-string",level:5},{value:"password string",id:"password-string",level:5},{value:"table string",id:"table-string",level:5},{value:"database string",id:"database-string",level:5},{value:"options",id:"options-1",level:5},{value:"Examples",id:"examples",level:3}],d={toc:g},o="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(o,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tidb"},"TiDb"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to TiDB."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: TiDb"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,r.yg)("h3",{id:"env-options"},"Env Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#spark.tispark.pd.addresses-string"},"spark.tispark.pd.addresses")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#spark.sql.extensions-string"},"spark.sql.extensions")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.spark.sql.TiExtensions")))),(0,r.yg)("h5",{id:"sparktisparkpdaddresses-string"},"spark.tispark.pd.addresses ","[string]"),(0,r.yg)("p",null,"TiDB Pd Address"),(0,r.yg)("h5",{id:"sparksqlextensions-string"},"spark.sql.extensions ","[string]"),(0,r.yg)("p",null,"Spark Sql Extensions"),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#addr-string"},"addr")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#port-string"},"port")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#user-string"},"user")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#password-string"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#table-string"},"table")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#database-string"},"database")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h5",{id:"addr-string"},"addr ","[string]"),(0,r.yg)("p",null,"TiDB address, which currently only supports one instance"),(0,r.yg)("h5",{id:"port-string"},"port ","[string]"),(0,r.yg)("p",null,"TiDB port"),(0,r.yg)("h5",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"TiDB user"),(0,r.yg)("h5",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"TiDB password"),(0,r.yg)("h5",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"TiDB table name"),(0,r.yg)("h5",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"TiDB database name"),(0,r.yg)("h5",{id:"options-1"},"options"),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pingcap/tispark/blob/v2.4.1/docs/datasource_api_userguide.md"},"TiSpark Configurations")),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    spark.tispark.pd.addresses = "127.0.0.1:2379"\n    spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\n\ntidb {\n    addr = "127.0.0.1",\n    port = "4000"\n    database = "database",\n    table = "tableName",\n    user = "userName",\n    password = "***********"\n}\n')))}y.isMDXComponent=!0}}]);