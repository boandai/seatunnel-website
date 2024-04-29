"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[60421],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,c=d["".concat(o,".").concat(u)]||d[u]||y[u]||l;return n?a.createElement(c,s(s({ref:t},g),{},{components:n})):a.createElement(c,s({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},s="Elasticsearch",i={unversionedId:"connector-v2/sink/Elasticsearch",id:"version-2.3.4/connector-v2/sink/Elasticsearch",title:"Elasticsearch",description:"Description",source:"@site/versioned_docs/version-2.3.4/connector-v2/sink/Elasticsearch.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Elasticsearch",permalink:"/zh-CN/docs/2.3.4/connector-v2/sink/Elasticsearch",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/sink/Elasticsearch.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/zh-CN/docs/2.3.4/connector-v2/sink/Doris"},next:{title:"Email",permalink:"/zh-CN/docs/2.3.4/connector-v2/sink/Email"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"index string",id:"index-string",level:3},{value:"index_type string",id:"index_type-string",level:3},{value:"primary_keys list",id:"primary_keys-list",level:3},{value:"key_delimiter string",id:"key_delimiter-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"max_retry_count int",id:"max_retry_count-int",level:3},{value:"max_batch_size int",id:"max_batch_size-int",level:3},{value:"tls_verify_certificate boolean",id:"tls_verify_certificate-boolean",level:3},{value:"tls_verify_hostname boolean",id:"tls_verify_hostname-boolean",level:3},{value:"tls_keystore_path string",id:"tls_keystore_path-string",level:3},{value:"tls_keystore_password string",id:"tls_keystore_password-string",level:3},{value:"tls_truststore_path string",id:"tls_truststore_path-string",level:3},{value:"tls_truststore_password string",id:"tls_truststore_password-string",level:3},{value:"common options",id:"common-options",level:3},{value:"schema_save_mode",id:"schema_save_mode",level:3},{value:"data_save_mode",id:"data_save_mode",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"next version",id:"next-version",level:3}],g={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Output data to ",(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch"),"."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"cdc"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"supported  ",(0,r.yg)("inlineCode",{parentName:"li"},"ElasticSearch version is >= 2.x and <= 8.x")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"index"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"index_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"_"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_count"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_verify_certificate"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_verify_hostnames"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_keystore_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_keystore_password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_truststore_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_truststore_password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch")," cluster http address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple hosts to be specified. Such as ",(0,r.yg)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]'),"."),(0,r.yg)("h3",{id:"index-string"},"index ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch"),"  ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," name.Index support contains variables of field name,such as ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel_${age}"),",and the field must appear at seatunnel row.\nIf not, we will treat it as a normal index."),(0,r.yg)("h3",{id:"index_type-string"},"index_type ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch")," index type, it is recommended not to specify in elasticsearch 6 and above"),(0,r.yg)("h3",{id:"primary_keys-list"},"primary_keys ","[list]"),(0,r.yg)("p",null,"Primary key fields used to generate the document ",(0,r.yg)("inlineCode",{parentName:"p"},"_id"),", this is cdc required options."),(0,r.yg)("h3",{id:"key_delimiter-string"},"key_delimiter ","[string]"),(0,r.yg)("p",null,'Delimiter for composite keys ("_" by default), e.g., "$" would result in document ',(0,r.yg)("inlineCode",{parentName:"p"},"_id"),' "KEY1$KEY2$KEY3".'),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,"x-pack username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"x-pack password"),(0,r.yg)("h3",{id:"max_retry_count-int"},"max_retry_count ","[int]"),(0,r.yg)("p",null,"one bulk request max try size"),(0,r.yg)("h3",{id:"max_batch_size-int"},"max_batch_size ","[int]"),(0,r.yg)("p",null,"batch bulk doc max size"),(0,r.yg)("h3",{id:"tls_verify_certificate-boolean"},"tls_verify_certificate ","[boolean]"),(0,r.yg)("p",null,"Enable certificates validation for HTTPS endpoints"),(0,r.yg)("h3",{id:"tls_verify_hostname-boolean"},"tls_verify_hostname ","[boolean]"),(0,r.yg)("p",null,"Enable hostname validation for HTTPS endpoints"),(0,r.yg)("h3",{id:"tls_keystore_path-string"},"tls_keystore_path ","[string]"),(0,r.yg)("p",null,"The path to the PEM or JKS key store. This file must be readable by the operating system user running SeaTunnel."),(0,r.yg)("h3",{id:"tls_keystore_password-string"},"tls_keystore_password ","[string]"),(0,r.yg)("p",null,"The key password for the key store specified"),(0,r.yg)("h3",{id:"tls_truststore_path-string"},"tls_truststore_path ","[string]"),(0,r.yg)("p",null,"The path to PEM or JKS trust store. This file must be readable by the operating system user running SeaTunnel."),(0,r.yg)("h3",{id:"tls_truststore_password-string"},"tls_truststore_password ","[string]"),(0,r.yg)("p",null,"The key password for the trust store specified"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h3",{id:"schema_save_mode"},"schema_save_mode"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.\nOption introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n","RECREATE_SCHEMA \uff1aWill create when the table does not exist, delete and rebuild when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n","CREATE_SCHEMA_WHEN_NOT_EXIST \uff1aWill Created when the table does not exist, skipped when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n","ERROR_WHEN_SCHEMA_NOT_EXIST \uff1aError will be reported when the table does not exist"),(0,r.yg)("h3",{id:"data_save_mode"},"data_save_mode"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.\nOption introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n","DROP_DATA\uff1a Preserve database structure and delete data",(0,r.yg)("br",{parentName:"p"}),"\n","APPEND_DATA\uff1aPreserve database structure, preserve data",(0,r.yg)("br",{parentName:"p"}),"\n","ERROR_WHEN_DATA_EXISTS\uff1aWhen there is data, an error is reported"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"Simple"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n    }\n}\n')),(0,r.yg)("p",null,"CDC(Change data capture) event"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n        \n        # cdc required options\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n')),(0,r.yg)("p",null,"SSL (Disable certificates validation)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_verify_certificate = false\n    }\n}\n')),(0,r.yg)("p",null,"SSL (Disable hostname validation)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_verify_hostname = false\n    }\n}\n')),(0,r.yg)("p",null,"SSL (Enable certificates validation)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_keystore_path = "${your elasticsearch home}/config/certs/http.p12"\n        tls_keystore_password = "${your password}"\n    }\n}\n')),(0,r.yg)("p",null,"SAVE_MODE (Add saveMode function)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n        data_save_mode = "APPEND_DATA"\n    }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Elasticsearch Sink Connector")),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3673"},"3673"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support https protocol & compatible with opensearch (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3997"},"3997"),")")))}y.isMDXComponent=!0}}]);