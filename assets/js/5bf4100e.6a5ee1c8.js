"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[69253],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57989:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return u},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="SelectDB Cloud",d={unversionedId:"connector-v2/sink/SelectDB-Cloud",id:"version-2.3.4/connector-v2/sink/SelectDB-Cloud",title:"SelectDB Cloud",description:"SelectDB Cloud sink connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/sink/SelectDB-Cloud.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/SelectDB-Cloud",permalink:"/docs/2.3.4/connector-v2/sink/SelectDB-Cloud",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/sink/SelectDB-Cloud.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/docs/2.3.4/connector-v2/sink/S3File"},next:{title:"Sentry",permalink:"/docs/2.3.4/connector-v2/sink/Sentry"}},u={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Use JSON format to import data",id:"use-json-format-to-import-data",level:3},{value:"Use CSV format to import data",id:"use-csv-format-to-import-data",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],s={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"selectdb-cloud"},"SelectDB Cloud"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SelectDB Cloud sink connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeaTunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.4/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.4/concept/connector-v2-features"},"cdc"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to send data to SelectDB Cloud. Both support streaming and batch mode.\nThe internal implementation of SelectDB Cloud sink connector upload after batch caching and commit the CopyInto sql to load data into the table."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Version Supported"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"supported  ",(0,l.kt)("inlineCode",{parentName:"li"},"SelectDB Cloud version is >= 2.2.x"))))),(0,l.kt)("h2",{id:"sink-options"},"Sink Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SelectDB Cloud")," warehouse http address, the format is ",(0,l.kt)("inlineCode",{parentName:"td"},"warehouse_ip:http_port"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jdbc-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SelectDB Cloud")," warehouse jdbc address, the format is ",(0,l.kt)("inlineCode",{parentName:"td"},"warehouse_ip:mysql_port"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster-name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SelectDB Cloud")," cluster name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SelectDB Cloud")," user username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SelectDB Cloud")," user password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of ",(0,l.kt)("inlineCode",{parentName:"td"},"SelectDB Cloud")," table, the format is ",(0,l.kt)("inlineCode",{parentName:"td"},"database.table"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable deletion. This option requires SelectDB Cloud table to enable batch delete function, and only supports Unique model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"the max retry times if writing records to database failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"10 ",(0,l.kt)("em",{parentName:"td"}," 1024 ")," 1024 (1MB)"),(0,l.kt)("td",{parentName:"tr",align:null},"the buffer size to cache data for stream load.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"10000"),(0,l.kt)("td",{parentName:"tr",align:null},"the buffer count to cache data for stream load.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectdb.config"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,l.kt)("inlineCode",{parentName:"td"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"delete"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"update")," when automatically generate sql,and supported formats.")))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SelectDB Cloud Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT",(0,l.kt)("br",null),"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"INT",(0,l.kt)("br",null),"SMALLINT",(0,l.kt)("br",null),"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT",(0,l.kt)("br",null),"INT",(0,l.kt)("br",null),"SMALLINT",(0,l.kt)("br",null),"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT",(0,l.kt)("br",null),"INT",(0,l.kt)("br",null),"SMALLINT",(0,l.kt)("br",null),"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.kt)("br",null),"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL",(0,l.kt)("br",null),"DOUBLE",(0,l.kt)("br",null),"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAP"),(0,l.kt)("td",{parentName:"tr",align:null},"MAP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HLL"),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported yet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BITMAP"),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported yet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUANTILE_STATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported yet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRUCT"),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,l.kt)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,l.kt)("p",null,"The supported formats include CSV and JSON"),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The following example describes writing multiple data types to SelectDBCloud, and users need to create corresponding tables downstream")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    row.num = 10\n    map.size = 10\n    array.size = 10\n    bytes.length = 10\n    string.length = 10\n    schema = {\n      fields {\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(16, 1)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    }\n}\n\nsink {\n  SelectDBCloud {\n    load-url = "warehouse_ip:http_port"\n    jdbc-url = "warehouse_ip:mysql_port"\n    cluster-name = "Cluster"\n    table.identifier = "test.test"\n    username = "admin"\n    password = "******"\n    selectdb.config {\n        file.type = "json"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"use-json-format-to-import-data"},"Use JSON format to import data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url = "warehouse_ip:http_port"\n    jdbc-url = "warehouse_ip:mysql_port"\n    cluster-name = "Cluster"\n    table.identifier = "test.test"\n    username = "admin"\n    password = "******"\n    selectdb.config {\n        file.type = "json"\n    }\n  }\n}\n\n')),(0,l.kt)("h3",{id:"use-csv-format-to-import-data"},"Use CSV format to import data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url = "warehouse_ip:http_port"\n    jdbc-url = "warehouse_ip:mysql_port"\n    cluster-name = "Cluster"\n    table.identifier = "test.test"\n    username = "admin"\n    password = "******"\n    selectdb.config {\n        file.type = "csv"\n        file.column_separator = "," \n        file.line_delimiter = "\\n" \n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support SelectDB Cloud Sink Connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3958"},"3958")),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Refactor some SelectDB Cloud Sink code as well as support copy into batch and async flush and cdc ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4312"},"4312"))))}c.isMDXComponent=!0}}]);