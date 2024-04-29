"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[70324],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=g(n),d=r,u=s["".concat(p,".").concat(d)]||s[d]||y[d]||l;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},i="Iceberg",o={unversionedId:"connector/sink/Iceberg",id:"version-2.1.2/connector/sink/Iceberg",title:"Iceberg",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/sink/Iceberg.md",sourceDirName:"connector/sink",slug:"/connector/sink/Iceberg",permalink:"/docs/2.1.2/connector/sink/Iceberg",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/sink/Iceberg.md",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/2.1.2/connector/sink/Hudi"},next:{title:"InfluxDB",permalink:"/docs/2.1.2/connector/sink/InfluxDb"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"path",id:"path",level:3},{value:"saveMode",id:"savemode",level:3},{value:"target-file-size-bytes",id:"target-file-size-bytes",level:3},{value:"check-nullability",id:"check-nullability",level:3},{value:"snapshot-property.custom-key",id:"snapshot-propertycustom-key",level:3},{value:"fanout-enabled",id:"fanout-enabled",level:3},{value:"check-ordering",id:"check-ordering",level:3},{value:"Example",id:"example",level:2}],c={toc:g},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"iceberg"},"Iceberg"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to Iceberg."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Iceberg"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#path"},"path")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#saveMode"},"saveMode")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"append")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#target-file-size-bytes"},"target-file-size-bytes")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#check-nullability"},"check-nullability")),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#snapshot-property.custom-key"},"snapshot-property.custom-key")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#fanout-enabled"},"fanout-enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#check-ordering"},"check-ordering")),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/spark-configuration/"},"iceberg write options")," for more configurations."),(0,r.yg)("h3",{id:"path"},"path"),(0,r.yg)("p",null,"Iceberg table location."),(0,r.yg)("h3",{id:"savemode"},"saveMode"),(0,r.yg)("p",null,"append or overwrite. Only these two modes are supported by iceberg. The default value is append."),(0,r.yg)("h3",{id:"target-file-size-bytes"},"target-file-size-bytes"),(0,r.yg)("p",null,"Overrides this table\u2019s write.target-file-size-bytes"),(0,r.yg)("h3",{id:"check-nullability"},"check-nullability"),(0,r.yg)("p",null,"Sets the nullable check on fields"),(0,r.yg)("h3",{id:"snapshot-propertycustom-key"},"snapshot-property.custom-key"),(0,r.yg)("p",null,'Adds an entry with custom-key and corresponding value in the snapshot summary\neg: snapshot-property.aaaa="bbbb"'),(0,r.yg)("h3",{id:"fanout-enabled"},"fanout-enabled"),(0,r.yg)("p",null,"Overrides this table\u2019s write.spark.fanout.enabled"),(0,r.yg)("h3",{id:"check-ordering"},"check-ordering"),(0,r.yg)("p",null,"Checks if input schema and table schema are same"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'iceberg {\n    path = "hdfs://localhost:9000/iceberg/warehouse/db/table"\n  }\n')))}y.isMDXComponent=!0}}]);