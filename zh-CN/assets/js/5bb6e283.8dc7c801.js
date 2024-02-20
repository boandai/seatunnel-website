"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[86990],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99774:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="Hive",p={unversionedId:"connector-v2/source/Hive",id:"version-2.3.4/connector-v2/source/Hive",title:"Hive",description:"Hive source connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/source/Hive.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hive",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Hive",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/source/Hive.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Hive",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Hive-jdbc"},next:{title:"Http",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Http"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"metastore_uri string",id:"metastore_uri-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"hive_site_path string",id:"hive_site_path-string",level:3},{value:"read_partitions list",id:"read_partitions-list",level:3},{value:"krb5_path string",id:"krb5_path-string",level:3},{value:"kerberos_principal string",id:"kerberos_principal-string",level:3},{value:"kerberos_keytab_path string",id:"kerberos_keytab_path-string",level:3},{value:"read_columns list",id:"read_columns-list",level:3},{value:"abort_drop_partition_metadata list",id:"abort_drop_partition_metadata-list",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next version",id:"next-version",level:3}],u={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hive"},"Hive"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hive source connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from Hive."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,i.kt)("p",{parentName:"div"},"If you use SeaTunnel Engine, You need put seatunnel-hadoop3-3.1.4-uber.jar and hive-exec-2.3.9.jar in $SEATUNNEL_HOME/lib/ dir."))),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"batch")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"stream")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"schema projection")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"parallelism")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"support user-defined split")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"table_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metastore_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"krb5_path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"/etc/krb5.conf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hive_site_path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"read_partitions"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"read_columns"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"abort_drop_partition_metadata"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,i.kt)("p",null,"Target Hive table name eg: db1.table1"),(0,i.kt)("h3",{id:"metastore_uri-string"},"metastore_uri ","[string]"),(0,i.kt)("p",null,"Hive metastore uri"),(0,i.kt)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,i.kt)("p",null,"The path of ",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml"),", used to load ha configuration of namenodes"),(0,i.kt)("h3",{id:"hive_site_path-string"},"hive_site_path ","[string]"),(0,i.kt)("p",null,"The path of ",(0,i.kt)("inlineCode",{parentName:"p"},"hive-site.xml"),", used to authentication hive metastore"),(0,i.kt)("h3",{id:"read_partitions-list"},"read_partitions ","[list]"),(0,i.kt)("p",null,"The target partitions that user want to read from hive table, if user does not set this parameter, it will read all the data from hive table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tips: Every partition in partitions list should have the same directory depth. For example, a hive table has two partitions: par1 and par2, if user sets it like as the following:"),"\n",(0,i.kt)("strong",{parentName:"p"},"read_partitions = ","[par1=xxx, par1=yyy/par2=zzz]",", it is illegal")),(0,i.kt)("h3",{id:"krb5_path-string"},"krb5_path ","[string]"),(0,i.kt)("p",null,"The path of ",(0,i.kt)("inlineCode",{parentName:"p"},"krb5.conf"),", used to authentication kerberos"),(0,i.kt)("h3",{id:"kerberos_principal-string"},"kerberos_principal ","[string]"),(0,i.kt)("p",null,"The principal of kerberos authentication"),(0,i.kt)("h3",{id:"kerberos_keytab_path-string"},"kerberos_keytab_path ","[string]"),(0,i.kt)("p",null,"The keytab file path of kerberos authentication"),(0,i.kt)("h3",{id:"read_columns-list"},"read_columns ","[list]"),(0,i.kt)("p",null,"The read column list of the data source, user can use it to implement field projection."),(0,i.kt)("h3",{id:"abort_drop_partition_metadata-list"},"abort_drop_partition_metadata ","[list]"),(0,i.kt)("p",null,"Flag to decide whether to drop partition metadata from Hive Metastore during an abort operation. Note: this only affects the metadata in the metastore, the data in the partition will always be deleted(data generated during the synchronization process)."),(0,i.kt)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,i.kt)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"txt: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"json: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"csv: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"orc/parquet:",(0,i.kt)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Source plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n  Hive {\n    table_name = "default.seatunnel_orc"\n    metastore_uri = "thrift://namenode001:9083"\n  }\n\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Hive Source Connector")),(0,i.kt)("h3",{id:"next-version"},"Next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Support kerberos authentication (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3840"},"3840"),")"),(0,i.kt)("li",{parentName:"ul"},"Support user-defined partitions (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3842"},"3842"),")")))}m.isMDXComponent=!0}}]);