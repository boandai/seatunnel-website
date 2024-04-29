"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[27547],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=a.createContext({}),p=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(g.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),s=l,d=m["".concat(g,".").concat(s)]||m[s]||y[s]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},79792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(58168),l=(t(96540),t(15680));const r={},i="Hbase",o={unversionedId:"connector-v2/sink/Hbase",id:"version-2.3.1/connector-v2/sink/Hbase",title:"Hbase",description:"Hbase sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/Hbase.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hbase",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Hbase",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/Hbase.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Greenplum"},next:{title:"HdfsFile",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/HdfsFile"}},g={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"rowkey_column list",id:"rowkey_column-list",level:3},{value:"family_name config",id:"family_name-config",level:3},{value:"rowkey_delimiter string",id:"rowkey_delimiter-string",level:3},{value:"version_column string",id:"version_column-string",level:3},{value:"null_mode double",id:"null_mode-double",level:3},{value:"wal_write boolean",id:"wal_write-boolean",level:3},{value:"write_buffer_size int",id:"write_buffer_size-int",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],u={toc:p},m="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hbase"},"Hbase"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hbase sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Output data to Hbase"),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowkey_column"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"family_name"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rowkey_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'""')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"version_column"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"skip")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"wal_write"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"write_buffer_size"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"8 ",(0,l.yg)("em",{parentName:"td"}," 1024 ")," 1024")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"utf8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,l.yg)("p",null,'The zookeeper cluster host of hbase, example: "hadoop001:2181,hadoop002:2181,hadoop003:2181"'),(0,l.yg)("h3",{id:"table-string"},"table ","[string]"),(0,l.yg)("p",null,'The table name you want to write, example: "seatunnel"'),(0,l.yg)("h3",{id:"rowkey_column-list"},"rowkey_column ","[list]"),(0,l.yg)("p",null,"The column name list of row keys, example: ",'["id", "uuid"]'),(0,l.yg)("h3",{id:"family_name-config"},"family_name ","[config]"),(0,l.yg)("p",null,"The family name mapping of fields. For example the row from upstream like the following shown:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"id"),(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"27")))),(0,l.yg)("p",null,"id as the row key and other fields written to the different families, you can assign"),(0,l.yg)("p",null,'family_name {\nname = "info1"\nage = "info2"\n}'),(0,l.yg)("p",null,"this means that ",(0,l.yg)("inlineCode",{parentName:"p"},"name")," will be written to the family ",(0,l.yg)("inlineCode",{parentName:"p"},"info1")," and the ",(0,l.yg)("inlineCode",{parentName:"p"},"age")," will be written to the family ",(0,l.yg)("inlineCode",{parentName:"p"},"info2")),(0,l.yg)("p",null,"if you want other fields written to the same family, you can assign"),(0,l.yg)("p",null,'family_name {\nall_columns = "info"\n}'),(0,l.yg)("p",null,"this means that all fields will be written to the family ",(0,l.yg)("inlineCode",{parentName:"p"},"info")),(0,l.yg)("h3",{id:"rowkey_delimiter-string"},"rowkey_delimiter ","[string]"),(0,l.yg)("p",null,"The delimiter of joining multi row keys, default ",(0,l.yg)("inlineCode",{parentName:"p"},'""')),(0,l.yg)("h3",{id:"version_column-string"},"version_column ","[string]"),(0,l.yg)("p",null,"The version column name, you can use it to assign timestamp for hbase record"),(0,l.yg)("h3",{id:"null_mode-double"},"null_mode ","[double]"),(0,l.yg)("p",null,"The mode of writing null value, support ","[",(0,l.yg)("inlineCode",{parentName:"p"},"skip"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"empty"),"]",", default ",(0,l.yg)("inlineCode",{parentName:"p"},"skip")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"skip: When the field is null, connector will not write this field to hbase"),(0,l.yg)("li",{parentName:"ul"},"empty: When the field is null, connector will write generate empty value for this field")),(0,l.yg)("h3",{id:"wal_write-boolean"},"wal_write ","[boolean]"),(0,l.yg)("p",null,"The wal log write flag, default ",(0,l.yg)("inlineCode",{parentName:"p"},"false")),(0,l.yg)("h3",{id:"write_buffer_size-int"},"write_buffer_size ","[int]"),(0,l.yg)("p",null,"The write buffer size of hbase client, default ",(0,l.yg)("inlineCode",{parentName:"p"},"8 * 1024 * 1024")),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"The encoding of string field, support ","[",(0,l.yg)("inlineCode",{parentName:"p"},"utf8"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"gbk"),"]",", default ",(0,l.yg)("inlineCode",{parentName:"p"},"utf8")),(0,l.yg)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,l.yg)("p",null,"The extra configuration of hbase"),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nHbase {\n  zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181"\n  table = "seatunnel_test"\n  rowkey_column = ["name"]\n  family_name {\n    all_columns = seatunnel\n  }\n}\n\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"next-version"},"next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add hbase sink connector (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/4049"},"4049"),")")))}y.isMDXComponent=!0}}]);