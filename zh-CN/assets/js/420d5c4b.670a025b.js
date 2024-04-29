"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43131],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(c,i(i({ref:t},g),{},{components:n})):a.createElement(c,i({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="SqlServer CDC",o={unversionedId:"connector-v2/source/SqlServer-CDC",id:"version-2.3.2/connector-v2/source/SqlServer-CDC",title:"SqlServer CDC",description:"SqlServer CDC source connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/source/SqlServer-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/SqlServer-CDC",permalink:"/zh-CN/docs/2.3.2/connector-v2/source/SqlServer-CDC",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/source/SqlServer-CDC.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/zh-CN/docs/2.3.2/connector-v2/source/Socket"},next:{title:"StarRocks",permalink:"/zh-CN/docs/2.3.2/connector-v2/source/StarRocks"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"username String",id:"username-string",level:3},{value:"password String",id:"password-string",level:3},{value:"database-names List",id:"database-names-list",level:3},{value:"table-names List",id:"table-names-list",level:3},{value:"base-url String",id:"base-url-string",level:3},{value:"startup.mode Enum",id:"startupmode-enum",level:3},{value:"startup.timestamp Long",id:"startuptimestamp-long",level:3},{value:"startup.specific-offset.file String",id:"startupspecific-offsetfile-string",level:3},{value:"startup.specific-offset.pos Long",id:"startupspecific-offsetpos-long",level:3},{value:"stop.mode Enum",id:"stopmode-enum",level:3},{value:"stop.timestamp Long",id:"stoptimestamp-long",level:3},{value:"stop.specific-offset.file String",id:"stopspecific-offsetfile-string",level:3},{value:"stop.specific-offset.pos Long",id:"stopspecific-offsetpos-long",level:3},{value:"incremental.parallelism Integer",id:"incrementalparallelism-integer",level:3},{value:"snapshot.split.size Integer",id:"snapshotsplitsize-integer",level:3},{value:"snapshot.fetch.size Integer",id:"snapshotfetchsize-integer",level:3},{value:"chunk-key.even-distribution.factor.upper-bound Double",id:"chunk-keyeven-distributionfactorupper-bound-double",level:3},{value:"chunk-key.even-distribution.factor.lower-bound Double",id:"chunk-keyeven-distributionfactorlower-bound-double",level:3},{value:"sample-sharding.threshold Integer",id:"sample-shardingthreshold-integer",level:3},{value:"inverse-sampling.rate Integer",id:"inverse-samplingrate-integer",level:3},{value:"server-time-zone String",id:"server-time-zone-string",level:3},{value:"connect.timeout Duration",id:"connecttimeout-duration",level:3},{value:"connect.max-retries Integer",id:"connectmax-retries-integer",level:3},{value:"connection.pool.size Integer",id:"connectionpoolsize-integer",level:3},{value:"debezium Config",id:"debezium-config",level:3},{value:"format Enum",id:"format-enum",level:3},{value:"example",id:"example",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example-1",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],g={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sqlserver-cdc"},"SqlServer CDC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SqlServer CDC source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The SqlServer CDC connector allows for reading snapshot data and incremental data from SqlServer database. This document\ndescribes how to setup the SqlServer CDC connector to run SQL queries against SqlServer databases."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-names"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-names"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"base-url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"INITIAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"NEVER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"incremental.parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"8096")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server-time-zone"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"UTC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0.05")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium.*"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"DEFAULT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"username-string"},"username ","[String]"),(0,r.yg)("p",null,"Name of the database to use when connecting to the database server."),(0,r.yg)("h3",{id:"password-string"},"password ","[String]"),(0,r.yg)("p",null,"Password to use when connecting to the database server."),(0,r.yg)("h3",{id:"database-names-list"},"database-names ","[List]"),(0,r.yg)("p",null,"Database name of the database to monitor."),(0,r.yg)("h3",{id:"table-names-list"},"table-names ","[List]"),(0,r.yg)("p",null,"Table name is a combination of schema name and table name (databaseName.schemaName.tableName)."),(0,r.yg)("h3",{id:"base-url-string"},"base-url ","[String]"),(0,r.yg)("p",null,'URL has to be with database, like "jdbc:sqlserver://localhost:1433;databaseName=test".'),(0,r.yg)("h3",{id:"startupmode-enum"},"startup.mode ","[Enum]"),(0,r.yg)("p",null,'Optional startup mode for SqlServer CDC consumer, valid enumerations are "initial", "earliest", "latest" and "specific".'),(0,r.yg)("h3",{id:"startuptimestamp-long"},"startup.timestamp ","[Long]"),(0,r.yg)("p",null,"Start from the specified epoch timestamp (in milliseconds)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,r.yg)("inlineCode",{parentName:"strong"},"'timestamp'"),".")),(0,r.yg)("h3",{id:"startupspecific-offsetfile-string"},"startup.specific-offset.file ","[String]"),(0,r.yg)("p",null,"Start from the specified binlog file name."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,r.yg)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,r.yg)("h3",{id:"startupspecific-offsetpos-long"},"startup.specific-offset.pos ","[Long]"),(0,r.yg)("p",null,"Start from the specified binlog file position."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,r.yg)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,r.yg)("h3",{id:"stopmode-enum"},"stop.mode ","[Enum]"),(0,r.yg)("p",null,'Optional stop mode for SqlServer CDC consumer, valid enumerations are "never".'),(0,r.yg)("h3",{id:"stoptimestamp-long"},"stop.timestamp ","[Long]"),(0,r.yg)("p",null,"Stop from the specified epoch timestamp (in milliseconds)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,r.yg)("inlineCode",{parentName:"strong"},"'timestamp'"),".")),(0,r.yg)("h3",{id:"stopspecific-offsetfile-string"},"stop.specific-offset.file ","[String]"),(0,r.yg)("p",null,"Stop from the specified binlog file name."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,r.yg)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,r.yg)("h3",{id:"stopspecific-offsetpos-long"},"stop.specific-offset.pos ","[Long]"),(0,r.yg)("p",null,"Stop from the specified binlog file position."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,r.yg)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,r.yg)("h3",{id:"incrementalparallelism-integer"},"incremental.parallelism ","[Integer]"),(0,r.yg)("p",null,"The number of parallel readers in the incremental phase."),(0,r.yg)("h3",{id:"snapshotsplitsize-integer"},"snapshot.split.size ","[Integer]"),(0,r.yg)("p",null,"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot\nof table."),(0,r.yg)("h3",{id:"snapshotfetchsize-integer"},"snapshot.fetch.size ","[Integer]"),(0,r.yg)("p",null,"The maximum fetch size for per poll when read table snapshot."),(0,r.yg)("h3",{id:"chunk-keyeven-distributionfactorupper-bound-double"},"chunk-key.even-distribution.factor.upper-bound ","[Double]"),(0,r.yg)("p",null,"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"sample-sharding.threshold"),". The default value is 100.0."),(0,r.yg)("h3",{id:"chunk-keyeven-distributionfactorlower-bound-double"},"chunk-key.even-distribution.factor.lower-bound ","[Double]"),(0,r.yg)("p",null,"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"sample-sharding.threshold"),". The default value is 0.05."),(0,r.yg)("h3",{id:"sample-shardingthreshold-integer"},"sample-sharding.threshold ","[Integer]"),(0,r.yg)("p",null,"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards."),(0,r.yg)("h3",{id:"inverse-samplingrate-integer"},"inverse-sampling.rate ","[Integer]"),(0,r.yg)("p",null,"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000."),(0,r.yg)("h3",{id:"server-time-zone-string"},"server-time-zone ","[String]"),(0,r.yg)("p",null,"The session time zone in database server."),(0,r.yg)("h3",{id:"connecttimeout-duration"},"connect.timeout ","[Duration]"),(0,r.yg)("p",null,"The maximum time that the connector should wait after trying to connect to the database server before timing out."),(0,r.yg)("h3",{id:"connectmax-retries-integer"},"connect.max-retries ","[Integer]"),(0,r.yg)("p",null,"The max retry times that the connector should retry to build database server connection."),(0,r.yg)("h3",{id:"connectionpoolsize-integer"},"connection.pool.size ","[Integer]"),(0,r.yg)("p",null,"The connection pool size."),(0,r.yg)("h3",{id:"debezium-config"},"debezium ","[Config]"),(0,r.yg)("p",null,"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from SqlServer server."),(0,r.yg)("p",null,"See more about\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.6/connectors/sqlserver.html#sqlserver-connector-properties"},"Debezium's SqlServer Connector properties")),(0,r.yg)("h3",{id:"format-enum"},"format ","[Enum]"),(0,r.yg)("p",null,'Optional output format for SqlServer CDC, valid enumerations are "DEFAULT"\u3001"COMPATIBLE_DEBEZIUM_JSON".'),(0,r.yg)("h4",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},'source {\n  SqlServer-CDC {\n    debezium {\n        snapshot.mode = "never"\n        decimal.handling.mode = "double"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.2/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,r.yg)("h2",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Jdbc",metastring:"{","{":!0},'source {\n  SqlServer-CDC {\n    result_table_name = "customers"\n    \n    username = "sa"\n    password = "Password!"\n    database-names = ["exampledb"]\n    table-names = ["exampledb.dbo.table_x"]\n    base-url="jdbc:sqlserver://localhost:1433;databaseName=exampledb"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add SqlServer CDC Source Connector"),(0,r.yg)("li",{parentName:"ul"},"[Doc]"," Add SqlServer CDC Source Connector document (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3993"},"3993"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support multi-table read (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4377"},"4377"),")")))}d.isMDXComponent=!0}}]);