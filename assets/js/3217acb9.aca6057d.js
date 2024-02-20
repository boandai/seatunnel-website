"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[37131],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,c=d["".concat(u,".").concat(k)]||d[k]||s[k]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return m},toc:function(){return s},default:function(){return k}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},u="Hbase",p={unversionedId:"connector-v2/sink/Hbase",id:"version-2.3.4/connector-v2/sink/Hbase",title:"Hbase",description:"Hbase sink connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/sink/Hbase.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hbase",permalink:"/docs/2.3.4/connector-v2/sink/Hbase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/sink/Hbase.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/docs/2.3.4/connector-v2/sink/Greenplum"},next:{title:"HdfsFile",permalink:"/docs/2.3.4/connector-v2/sink/HdfsFile"}},m={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"rowkey_column list",id:"rowkey_column-list",level:3},{value:"family_name config",id:"family_name-config",level:3},{value:"rowkey_delimiter string",id:"rowkey_delimiter-string",level:3},{value:"version_column string",id:"version_column-string",level:3},{value:"null_mode double",id:"null_mode-double",level:3},{value:"wal_write boolean",id:"wal_write-boolean",level:3},{value:"write_buffer_size int",id:"write_buffer_size-int",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hbase"},"Hbase"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hbase sink connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Output data to Hbase"),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.4/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rowkey_column"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"family_name"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rowkey_delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version_column"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"skip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wal_write"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"write_buffer_size"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"8 ",(0,r.kt)("em",{parentName:"td"}," 1024 ")," 1024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"utf8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,r.kt)("p",null,'The zookeeper cluster host of hbase, example: "hadoop001:2181,hadoop002:2181,hadoop003:2181"'),(0,r.kt)("h3",{id:"table-string"},"table ","[string]"),(0,r.kt)("p",null,'The table name you want to write, example: "seatunnel"'),(0,r.kt)("h3",{id:"rowkey_column-list"},"rowkey_column ","[list]"),(0,r.kt)("p",null,"The column name list of row keys, example: ",'["id", "uuid"]'),(0,r.kt)("h3",{id:"family_name-config"},"family_name ","[config]"),(0,r.kt)("p",null,"The family name mapping of fields. For example the row from upstream like the following shown:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,r.kt)("td",{parentName:"tr",align:null},"27")))),(0,r.kt)("p",null,"id as the row key and other fields written to the different families, you can assign"),(0,r.kt)("p",null,'family_name {\nname = "info1"\nage = "info2"\n}'),(0,r.kt)("p",null,"this means that ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," will be written to the family ",(0,r.kt)("inlineCode",{parentName:"p"},"info1")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," will be written to the family ",(0,r.kt)("inlineCode",{parentName:"p"},"info2")),(0,r.kt)("p",null,"if you want other fields written to the same family, you can assign"),(0,r.kt)("p",null,'family_name {\nall_columns = "info"\n}'),(0,r.kt)("p",null,"this means that all fields will be written to the family ",(0,r.kt)("inlineCode",{parentName:"p"},"info")),(0,r.kt)("h3",{id:"rowkey_delimiter-string"},"rowkey_delimiter ","[string]"),(0,r.kt)("p",null,"The delimiter of joining multi row keys, default ",(0,r.kt)("inlineCode",{parentName:"p"},'""')),(0,r.kt)("h3",{id:"version_column-string"},"version_column ","[string]"),(0,r.kt)("p",null,"The version column name, you can use it to assign timestamp for hbase record"),(0,r.kt)("h3",{id:"null_mode-double"},"null_mode ","[double]"),(0,r.kt)("p",null,"The mode of writing null value, support ","[",(0,r.kt)("inlineCode",{parentName:"p"},"skip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"empty"),"]",", default ",(0,r.kt)("inlineCode",{parentName:"p"},"skip")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"skip: When the field is null, connector will not write this field to hbase"),(0,r.kt)("li",{parentName:"ul"},"empty: When the field is null, connector will write generate empty value for this field")),(0,r.kt)("h3",{id:"wal_write-boolean"},"wal_write ","[boolean]"),(0,r.kt)("p",null,"The wal log write flag, default ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h3",{id:"write_buffer_size-int"},"write_buffer_size ","[int]"),(0,r.kt)("p",null,"The write buffer size of hbase client, default ",(0,r.kt)("inlineCode",{parentName:"p"},"8 * 1024 * 1024")),(0,r.kt)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,r.kt)("p",null,"The encoding of string field, support ","[",(0,r.kt)("inlineCode",{parentName:"p"},"utf8"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gbk"),"]",", default ",(0,r.kt)("inlineCode",{parentName:"p"},"utf8")),(0,r.kt)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,r.kt)("p",null,"The extra configuration of hbase"),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.4/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'\nHbase {\n  zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181"\n  table = "seatunnel_test"\n  rowkey_column = ["name"]\n  family_name {\n    all_columns = seatunnel\n  }\n}\n\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"next-version"},"next version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add hbase sink connector (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4049"},"4049"),")")))}k.isMDXComponent=!0}}]);