"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26466],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(y,i(i({ref:t},g),{},{components:n})):a.createElement(y,i({ref:t},g))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Hive",s={unversionedId:"connector-v2/sink/Hive",id:"version-2.3.4/connector-v2/sink/Hive",title:"Hive",description:"Hive sink connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/sink/Hive.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hive",permalink:"/docs/2.3.4/connector-v2/sink/Hive",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/sink/Hive.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"HdfsFile",permalink:"/docs/2.3.4/connector-v2/sink/HdfsFile"},next:{title:"Http",permalink:"/docs/2.3.4/connector-v2/sink/Http"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"metastore_uri string",id:"metastore_uri-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"hive_site_path string",id:"hive_site_path-string",level:3},{value:"krb5_path string",id:"krb5_path-string",level:3},{value:"kerberos_principal string",id:"kerberos_principal-string",level:3},{value:"kerberos_keytab_path string",id:"kerberos_keytab_path-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"example 1",id:"example-1",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3},{value:"Next version",id:"next-version",level:3}],g={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hive"},"Hive"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Hive sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to Hive."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,r.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, You need put seatunnel-hadoop3-3.1.4-uber.jar and hive-exec-2.3.9.jar in $SEATUNNEL_HOME/lib/ dir.")),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.4/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,r.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"))),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","compress codec",(0,r.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","lzo")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metastore_uri"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"none")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hive_site_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,r.yg)("p",null,"Target Hive table name eg: db1.table1"),(0,r.yg)("h3",{id:"metastore_uri-string"},"metastore_uri ","[string]"),(0,r.yg)("p",null,"Hive metastore uri"),(0,r.yg)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,r.yg)("p",null,"The path of ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml"),", used to load ha configuration of namenodes"),(0,r.yg)("h3",{id:"hive_site_path-string"},"hive_site_path ","[string]"),(0,r.yg)("h3",{id:"krb5_path-string"},"krb5_path ","[string]"),(0,r.yg)("p",null,"The path of ",(0,r.yg)("inlineCode",{parentName:"p"},"krb5.conf"),", used to authentication kerberos"),(0,r.yg)("p",null,"The path of ",(0,r.yg)("inlineCode",{parentName:"p"},"hive-site.xml"),", used to authentication hive metastore"),(0,r.yg)("h3",{id:"kerberos_principal-string"},"kerberos_principal ","[string]"),(0,r.yg)("p",null,"The principal of kerberos"),(0,r.yg)("h3",{id:"kerberos_keytab_path-string"},"kerberos_keytab_path ","[string]"),(0,r.yg)("p",null,"The keytab path of kerberos"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.4/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'\n  Hive {\n    table_name = "default.seatunnel_orc"\n    metastore_uri = "thrift://namenode001:9083"\n  }\n\n')),(0,r.yg)("h3",{id:"example-1"},"example 1"),(0,r.yg)("p",null,"We have a source table like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_source(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE,\n     test_array                            ARRAY<INT>,\n     test_map                              MAP<STRING, FLOAT>,\n     test_struct                           STRUCT<street:STRING, city:STRING, state:STRING, zip:INT>\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n\n")),(0,r.yg)("p",null,"We need read data from the source table and write to another table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_sink_text_simple(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n\n")),(0,r.yg)("p",null,"The job config file can like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 3\n  job.name="test_hive_source_to_hive"\n}\n\nsource {\n  Hive {\n    table_name = "test_hive.test_hive_source"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n\nsink {\n  # choose stdout output plugin to output data to console\n\n  Hive {\n    table_name = "test_hive.test_hive_sink_text_simple"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Hive Sink Connector")),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Hive Sink supports automatic partition repair (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3133"},"3133"),")")),(0,r.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3258"},"3258"),")",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,r.yg)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,r.yg)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed")))),(0,r.yg)("h3",{id:"next-version"},"Next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Support kerberos authentication (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3840"},"3840"),")"),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Added partition_dir_expression validation logic (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3886"},"3886"),")")))}c.isMDXComponent=!0}}]);