"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72206],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=p(n),m=l,u=y["".concat(g,".").concat(m)]||y[m]||d[m]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const r={},i="OssFile",o={unversionedId:"connector-v2/source/OssFile",id:"version-2.3.4/connector-v2/source/OssFile",title:"OssFile",description:"Oss file source connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/source/OssFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/OssFile",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/OssFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/source/OssFile.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Oracle",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Oracle"},next:{title:"OssJindoFile",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/OssJindoFile"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Usage Dependency",id:"usage-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key features",id:"key-features",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"JSON File Type",id:"json-file-type",level:3},{value:"Text Or CSV File Type",id:"text-or-csv-file-type",level:3},{value:"Orc File Type",id:"orc-file-type",level:3},{value:"Parquet File Type",id:"parquet-file-type",level:3},{value:"Options",id:"options",level:2},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"file_filter_pattern string",id:"file_filter_pattern-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"How to Create a Oss Data Synchronization Jobs",id:"how-to-create-a-oss-data-synchronization-jobs",level:2},{value:"Multiple Table",id:"multiple-table",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Tips",id:"tips",level:3}],s={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,l.yg)(y,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"ossfile"},"OssFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Oss file source connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"usage-dependency"},"Usage Dependency"),(0,l.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("li",{parentName:"ol"},"You must ensure ",(0,l.yg)("inlineCode",{parentName:"li"},"hadoop-aliyun-xx.jar"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-xx.jar")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"jdom-xx.jar")," in ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/")," dir and the version of ",(0,l.yg)("inlineCode",{parentName:"li"},"hadoop-aliyun")," jar need equals your hadoop version which used in spark/flink and ",(0,l.yg)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-xx.jar")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"jdom-xx.jar")," version needs to be the version corresponding to the ",(0,l.yg)("inlineCode",{parentName:"li"},"hadoop-aliyun")," version. Eg: ",(0,l.yg)("inlineCode",{parentName:"li"},"hadoop-aliyun-3.1.4.jar")," dependency ",(0,l.yg)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-3.4.1.jar")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"jdom-1.1.jar"),".")),(0,l.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"You must ensure ",(0,l.yg)("inlineCode",{parentName:"li"},"seatunnel-hadoop3-3.1.4-uber.jar"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"aliyun-sdk-oss-3.4.1.jar"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"hadoop-aliyun-3.1.4.jar")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"jdom-1.1.jar")," in ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/")," dir.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel")))),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("p",null,"Data type mapping is related to the type of file being read, We supported as the following file types:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")),(0,l.yg)("h3",{id:"json-file-type"},"JSON File Type"),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want."),(0,l.yg)("p",null,"For example:"),(0,l.yg)("p",null,"upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.yg)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'\n{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n\n')),(0,l.yg)("p",null,"you should assign schema as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("h3",{id:"text-or-csv-file-type"},"Text Or CSV File Type"),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not."),(0,l.yg)("p",null,"For example, upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"\ntyrantlucifer#26#male\n\n")),(0,l.yg)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"content"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer#26#male")))),(0,l.yg)("p",null,"If you assign data schema, you should also assign the option ",(0,l.yg)("inlineCode",{parentName:"p"},"field_delimiter")," too except CSV file type"),(0,l.yg)("p",null,"you should assign schema and delimiter as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nfield_delimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n\n')),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"gender"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26"),(0,l.yg)("td",{parentName:"tr",align:null},"male")))),(0,l.yg)("h3",{id:"orc-file-type"},"Orc File Type"),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Orc Data type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BYTE"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SHORT"),(0,l.yg)("td",{parentName:"tr",align:null},"SHORT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LONG"),(0,l.yg)("td",{parentName:"tr",align:null},"LONG")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,l.yg)("td",{parentName:"tr",align:null},"BINARY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING",(0,l.yg)("br",null),"VARCHAR",(0,l.yg)("br",null),"CHAR",(0,l.yg)("br",null)),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"LOCAL_DATE_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"LOCAL_DATE_TIME_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(STRING)"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(BOOLEAN)"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(TINYINT)"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTE_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(SMALLINT)"),(0,l.yg)("td",{parentName:"tr",align:null},"SHORT_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(INT)"),(0,l.yg)("td",{parentName:"tr",align:null},"INT_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(BIGINT)"),(0,l.yg)("td",{parentName:"tr",align:null},"LONG_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(FLOAT)"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(DOUBLE)"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Map<K,V>"),(0,l.yg)("td",{parentName:"tr",align:null},"MapType, This type of K and V will transform to SeaTunnel type")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,l.yg)("td",{parentName:"tr",align:null},"SeaTunnelRowType")))),(0,l.yg)("h3",{id:"parquet-file-type"},"Parquet File Type"),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Orc Data type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT_8"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT_16"),(0,l.yg)("td",{parentName:"tr",align:null},"SHORT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_MILLIS"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT64"),(0,l.yg)("td",{parentName:"tr",align:null},"LONG")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT96"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FIXED_LEN_BYTE_ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,l.yg)("br",null)," DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(STRING)"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(BOOLEAN)"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(TINYINT)"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTE_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(SMALLINT)"),(0,l.yg)("td",{parentName:"tr",align:null},"SHORT_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(INT)"),(0,l.yg)("td",{parentName:"tr",align:null},"INT_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(BIGINT)"),(0,l.yg)("td",{parentName:"tr",align:null},"LONG_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(FLOAT)"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LIST(DOUBLE)"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE_ARRAY_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Map<K,V>"),(0,l.yg)("td",{parentName:"tr",align:null},"MapType, This type of K and V will transform to SeaTunnel type")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,l.yg)("td",{parentName:"tr",align:null},"SeaTunnelRowType")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},'The Oss path that needs to be read can have sub paths, but the sub paths need to meet certain format requirements. Specific requirements can be referred to "parse_partition_from_path" option')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"File type, supported as the following file types: ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"td"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"td"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"excel"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bucket"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The bucket address of oss file system, for example: ",(0,l.yg)("inlineCode",{parentName:"td"},"oss://seatunnel-test"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"endpoint"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"fs oss endpoint")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The read column list of the data source, user can use it to implement field projection. The file type supported column projection as the following shown: ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"td"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"td"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"excel")," . If the user wants to use this feature when reading ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv"),' files, the "schema" option must be configured.')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"access_key"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"access_secret"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"\\001"),(0,l.yg)("td",{parentName:"tr",align:null},"Field delimiter, used to tell connector how to slice and dice fields when reading text files. Default ",(0,l.yg)("inlineCode",{parentName:"td"},"\\001"),", the same as hive's default delimiter.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Control whether parse the partition keys and values from file path. For example if you read a file from path ",(0,l.yg)("inlineCode",{parentName:"td"},"oss://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26"),'. Every record data from file will be added these two fields: name="tyrantlucifer", age=16')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,l.yg)("td",{parentName:"tr",align:null},"Date type format, used to tell connector how to convert string to date, supported as the following formats:",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd"),". default ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"datetime_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats:",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"Time type format, used to tell connector how to convert string to time, supported as the following formats:",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss.SSS"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"Skip the first few lines, but only for the txt and csv. For example, set like following:",(0,l.yg)("inlineCode",{parentName:"td"},"skip_header_row_number = 2"),". Then SeaTunnel will skip the first 2 lines from source files")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The schema of upstream data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Reader the sheet of the workbook,Only used when file_format is excel.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null},"Which compress codec the files used.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_filter_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"*.txt")," means you only need read the files end with ",(0,l.yg)("inlineCode",{parentName:"td"},".txt"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/common-options"},"Source Common Options")," for details.")))),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc/parquet:",(0,l.yg)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,l.yg)("h3",{id:"file_filter_pattern-string"},"file_filter_pattern ","[string]"),(0,l.yg)("p",null,"Filter pattern, which used for filtering files."),(0,l.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.yg)("p",null,"Only need to be configured when the file_format_type are text, json, excel or csv ( Or other format we can't read the schema from metadata)."),(0,l.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.yg)("p",null,"The schema of upstream data."),(0,l.yg)("h2",{id:"how-to-create-a-oss-data-synchronization-jobs"},"How to Create a Oss Data Synchronization Jobs"),(0,l.yg)("p",null,"The following example demonstrates how to create a data synchronization job that reads data from Oss and prints it on the local client:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to Oss\nsource {\n  OssFile {\n    path = "/seatunnel/orc"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "orc"\n  }\n}\n\n# Console printing of the read Oss data\nsink {\n  Console {\n  }\n}\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to Oss\nsource {\n  OssFile {\n    path = "/seatunnel/json"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "json"\n    schema {\n      fields {\n        id = int \n        name = string\n      }\n    }\n  }\n}\n\n# Console printing of the read Oss data\nsink {\n  Console {\n  }\n}\n')),(0,l.yg)("h3",{id:"multiple-table"},"Multiple Table"),(0,l.yg)("p",null,"No need to config schema file type, eg: ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  spark.app.name = "SeaTunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  spark.master = local\n  job.mode = "BATCH"\n}\n\nsource {\n  OssFile {\n    tables_configs = [\n      {\n          schema = {\n              table = "fake01"\n          }\n          bucket = "oss://whale-ops"\n          access_key = "xxxxxxxxxxxxxxxxxxx"\n          access_secret = "xxxxxxxxxxxxxxxxxxx"\n          endpoint = "https://oss-accelerate.aliyuncs.com"\n          path = "/test/seatunnel/read/orc"\n          file_format_type = "orc"\n      },\n      {\n          schema = {\n              table = "fake02"\n          }\n          bucket = "oss://whale-ops"\n          access_key = "xxxxxxxxxxxxxxxxxxx"\n          access_secret = "xxxxxxxxxxxxxxxxxxx"\n          endpoint = "https://oss-accelerate.aliyuncs.com"\n          path = "/test/seatunnel/read/orc"\n          file_format_type = "orc"\n      }\n    ]\n    result_table_name = "fake"\n  }\n}\n\nsink {\n  Assert {\n    rules {\n        table-names = ["fake01", "fake02"]\n    }\n  }\n}\n')),(0,l.yg)("p",null,"Need config schema file type, eg: ",(0,l.yg)("inlineCode",{parentName:"p"},"json")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'\nenv {\n  execution.parallelism = 1\n  spark.app.name = "SeaTunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  spark.master = local\n  job.mode = "BATCH"\n}\n\nsource {\n  OssFile {\n    tables_configs = [\n      {\n          bucket = "oss://whale-ops"\n          access_key = "xxxxxxxxxxxxxxxxxxx"\n          access_secret = "xxxxxxxxxxxxxxxxxxx"\n          endpoint = "https://oss-accelerate.aliyuncs.com"\n          path = "/test/seatunnel/read/json"\n          file_format_type = "json"\n          schema = {\n            table = "fake01"\n            fields {\n              c_map = "map<string, string>"\n              c_array = "array<int>"\n              c_string = string\n              c_boolean = boolean\n              c_tinyint = tinyint\n              c_smallint = smallint\n              c_int = int\n              c_bigint = bigint\n              c_float = float\n              c_double = double\n              c_bytes = bytes\n              c_date = date\n              c_decimal = "decimal(38, 18)"\n              c_timestamp = timestamp\n              c_row = {\n                C_MAP = "map<string, string>"\n                C_ARRAY = "array<int>"\n                C_STRING = string\n                C_BOOLEAN = boolean\n                C_TINYINT = tinyint\n                C_SMALLINT = smallint\n                C_INT = int\n                C_BIGINT = bigint\n                C_FLOAT = float\n                C_DOUBLE = double\n                C_BYTES = bytes\n                C_DATE = date\n                C_DECIMAL = "decimal(38, 18)"\n                C_TIMESTAMP = timestamp\n              }\n            }\n          }\n      },\n      {\n          bucket = "oss://whale-ops"\n          access_key = "xxxxxxxxxxxxxxxxxxx"\n          access_secret = "xxxxxxxxxxxxxxxxxxx"\n          endpoint = "https://oss-accelerate.aliyuncs.com"\n          path = "/test/seatunnel/read/json"\n          file_format_type = "json"\n          schema = {\n            table = "fake02"\n            fields {\n              c_map = "map<string, string>"\n              c_array = "array<int>"\n              c_string = string\n              c_boolean = boolean\n              c_tinyint = tinyint\n              c_smallint = smallint\n              c_int = int\n              c_bigint = bigint\n              c_float = float\n              c_double = double\n              c_bytes = bytes\n              c_date = date\n              c_decimal = "decimal(38, 18)"\n              c_timestamp = timestamp\n              c_row = {\n                C_MAP = "map<string, string>"\n                C_ARRAY = "array<int>"\n                C_STRING = string\n                C_BOOLEAN = boolean\n                C_TINYINT = tinyint\n                C_SMALLINT = smallint\n                C_INT = int\n                C_BIGINT = bigint\n                C_FLOAT = float\n                C_DOUBLE = double\n                C_BYTES = bytes\n                C_DATE = date\n                C_DECIMAL = "decimal(38, 18)"\n                C_TIMESTAMP = timestamp\n              }\n            }\n          }\n      }\n    ]\n    result_table_name = "fake"\n  }\n}\n\nsink {\n  Assert {\n    rules {\n      table-names = ["fake01", "fake02"]\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add OSS File Source Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2980"},"2980"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support extract partition from SeaTunnelRow fields (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3085"},"3085"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support parse field from file path (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2985"},"2985"),")")),(0,l.yg)("h3",{id:"tips"},"Tips"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"1.",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/start-v2/locally/deployment"},"SeaTunnel Deployment Document"),".")))}d.isMDXComponent=!0}}]);