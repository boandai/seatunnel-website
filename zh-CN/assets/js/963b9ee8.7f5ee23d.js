"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[40736],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,h=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(h,c(c({ref:n},p),{},{components:t})):r.createElement(h,c({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={},c="Intro To Connector V2 Features",s={unversionedId:"concept/connector-v2-features",id:"version-2.3.2/concept/connector-v2-features",title:"Intro To Connector V2 Features",description:"Differences Between Connector V2 And Connector v1",source:"@site/versioned_docs/version-2.3.2/concept/connector-v2-features.md",sourceDirName:"concept",slug:"/concept/connector-v2-features",permalink:"/zh-CN/docs/2.3.2/concept/connector-v2-features",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/concept/connector-v2-features.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"config",permalink:"/zh-CN/docs/2.3.2/concept/config"},next:{title:"Intro to schema feature",permalink:"/zh-CN/docs/2.3.2/concept/schema-feature"}},i={},l=[{value:"Differences Between Connector V2 And Connector v1",id:"differences-between-connector-v2-and-connector-v1",level:2},{value:"Source Connector Features",id:"source-connector-features",level:2},{value:"exactly-once",id:"exactly-once",level:3},{value:"column projection",id:"column-projection",level:3},{value:"batch",id:"batch",level:3},{value:"stream",id:"stream",level:3},{value:"parallelism",id:"parallelism",level:3},{value:"support user-defined split",id:"support-user-defined-split",level:3},{value:"Sink Connector Features",id:"sink-connector-features",level:2},{value:"exactly-once",id:"exactly-once-1",level:3},{value:"cdc(change data capture)",id:"cdcchange-data-capture",level:3}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"intro-to-connector-v2-features"},"Intro To Connector V2 Features"),(0,o.yg)("h2",{id:"differences-between-connector-v2-and-connector-v1"},"Differences Between Connector V2 And Connector v1"),(0,o.yg)("p",null,"Since ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/1608"},"https://github.com/apache/seatunnel/issues/1608")," We Added Connector V2 Features.\nConnector V2 is a connector defined based on the Seatunnel Connector API interface. Unlike Connector V1, Connector V2 supports the following features."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multi Engine Support")," SeaTunnel Connector API is an engine independent API. The connectors developed based on this API can run in multiple engines. Currently, Flink and Spark are supported, and we will support other engines in the future."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multi Engine Version Support")," Decoupling the connector from the engine through the translation layer solves the problem that most connectors need to modify the code in order to support a new version of the underlying engine."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Unified Batch And Stream")," Connector V2 can perform batch processing or streaming processing. We do not need to develop connectors for batch and stream separately."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multiplexing JDBC/Log connection.")," Connector V2 supports JDBC resource reuse and sharing database log parsing.")),(0,o.yg)("h2",{id:"source-connector-features"},"Source Connector Features"),(0,o.yg)("p",null,"Source connectors have some common core features, and each source connector supports them to varying degrees."),(0,o.yg)("h3",{id:"exactly-once"},"exactly-once"),(0,o.yg)("p",null,"If each piece of data in the data source will only be sent downstream by the source once, we think this source connector supports exactly once."),(0,o.yg)("p",null,"In SeaTunnel, we can save the read ",(0,o.yg)("strong",{parentName:"p"},"Split")," and its ",(0,o.yg)("strong",{parentName:"p"},"offset"),"(The position of the read data in split at that time,\nsuch as line number, byte size, offset, etc) as ",(0,o.yg)("strong",{parentName:"p"},"StateSnapshot")," when checkpoint. If the task restarted, we will get the last ",(0,o.yg)("strong",{parentName:"p"},"StateSnapshot"),"\nand then locate the ",(0,o.yg)("strong",{parentName:"p"},"Split")," and ",(0,o.yg)("strong",{parentName:"p"},"offset")," read last time and continue to send data downstream."),(0,o.yg)("p",null,"For example ",(0,o.yg)("inlineCode",{parentName:"p"},"File"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Kafka"),"."),(0,o.yg)("h3",{id:"column-projection"},"column projection"),(0,o.yg)("p",null,"If the connector supports reading only specified columns from the data source (note that if you read all columns first and then filter unnecessary columns through the schema, this method is not a real column projection)"),(0,o.yg)("p",null,"For example ",(0,o.yg)("inlineCode",{parentName:"p"},"JDBCSource")," can use sql define read columns."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"KafkaSource")," will read all content from topic and then use ",(0,o.yg)("inlineCode",{parentName:"p"},"schema")," to filter unnecessary columns, This is not ",(0,o.yg)("inlineCode",{parentName:"p"},"column projection"),"."),(0,o.yg)("h3",{id:"batch"},"batch"),(0,o.yg)("p",null,"Batch Job Mode, The data read is bounded and the job will stop when all data read complete."),(0,o.yg)("h3",{id:"stream"},"stream"),(0,o.yg)("p",null,"Streaming Job Mode, The data read is unbounded and the job never stop."),(0,o.yg)("h3",{id:"parallelism"},"parallelism"),(0,o.yg)("p",null,"Parallelism Source Connector support config ",(0,o.yg)("inlineCode",{parentName:"p"},"parallelism"),", every parallelism will create a task to read the data.\nIn the ",(0,o.yg)("strong",{parentName:"p"},"Parallelism Source Connector"),", the source will be split into multiple splits, and then the enumerator will allocate the splits to the SourceReader for processing."),(0,o.yg)("h3",{id:"support-user-defined-split"},"support user-defined split"),(0,o.yg)("p",null,"User can config the split rule."),(0,o.yg)("h2",{id:"sink-connector-features"},"Sink Connector Features"),(0,o.yg)("p",null,"Sink connectors have some common core features, and each sink connector supports them to varying degrees."),(0,o.yg)("h3",{id:"exactly-once-1"},"exactly-once"),(0,o.yg)("p",null,"When any piece of data flows into a distributed system, if the system processes any piece of data accurately only once in the whole processing process and the processing results are correct, it is considered that the system meets the exact once consistency."),(0,o.yg)("p",null,"For sink connector, the sink connector supports exactly-once if any piece of data only write into target once. There are generally two ways to achieve this:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The target database supports key deduplication. For example ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"Kudu"),"."),(0,o.yg)("li",{parentName:"ul"},"The target support ",(0,o.yg)("strong",{parentName:"li"},"XA Transaction"),"(This transaction can be used across sessions. Even if the program that created the transaction has ended, the newly started program only needs to know the ID of the last transaction to resubmit or roll back the transaction). Then we can use ",(0,o.yg)("strong",{parentName:"li"},"Two-phase Commit")," to ensure ",(0,o.yg)("strong",{parentName:"li"},"exactly-once"),". For example ",(0,o.yg)("inlineCode",{parentName:"li"},"File"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"MySQL"),".")),(0,o.yg)("h3",{id:"cdcchange-data-capture"},"cdc(change data capture)"),(0,o.yg)("p",null,"If a sink connector supports writing row kinds(INSERT/UPDATE_BEFORE/UPDATE_AFTER/DELETE) based on primary key, we think it supports cdc(change data capture)."))}d.isMDXComponent=!0}}]);