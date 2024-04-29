"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[68875],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(n),c=r,y=g["".concat(s,".").concat(c)]||g[c]||d[c]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const l={},o="IoTDB",i={unversionedId:"connector-v2/source/IoTDB",id:"version-2.2.0-beta/connector-v2/source/IoTDB",title:"IoTDB",description:"IoTDB source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/source/IoTDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/IoTDB",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/IoTDB",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/source/IoTDB.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Apache Iceberg",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/Iceberg"},next:{title:"JDBC",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/Jdbc"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"single node, you need to set host and port to connect to the remote data source.",id:"single-node-you-need-to-set-host-and-port-to-connect-to-the-remote-data-source",level:3},{value:"multi node, you need to set node_urls to connect to the remote data source.",id:"multi-node-you-need-to-set-node_urls-to-connect-to-the-remote-data-source",level:3},{value:"other parameters",id:"other-parameters",level:3},{value:"fields string",id:"fields-string",level:3},{value:"option parameters",id:"option-parameters",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"num_partitions int",id:"num_partitions-int",level:3},{value:"thrift_default_buffer_size int",id:"thrift_default_buffer_size-int",level:3},{value:"enable_cache_leader boolean",id:"enable_cache_leader-boolean",level:3},{value:"version string",id:"version-string",level:3},{value:"split partitions",id:"split-partitions",level:3},{value:"num_partitions int",id:"num_partitions-int-1",level:4},{value:"upper_bound long",id:"upper_bound-long-1",level:3},{value:"lower_bound long",id:"lower_bound-long-1",level:3}],p={toc:u},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"iotdb"},"IoTDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"IoTDB source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through IoTDB."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"schema projection"))),(0,r.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_urls"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sql"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"num_partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thrift_default_buffer_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_cache_leader"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"single-node-you-need-to-set-host-and-port-to-connect-to-the-remote-data-source"},"single node, you need to set host and port to connect to the remote data source."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"host")," ","[string]"," the host of the IoTDB when you select host of the IoTDB"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"port")," ","[int]"," the port of the IoTDB when you select"),(0,r.yg)("h3",{id:"multi-node-you-need-to-set-node_urls-to-connect-to-the-remote-data-source"},"multi node, you need to set node_urls to connect to the remote data source."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"node_urls")," ","[string]"," the node_urls of the IoTDB when you select"),(0,r.yg)("p",null,"e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"127.0.0.1:8080,127.0.0.2:8080\n")),(0,r.yg)("h3",{id:"other-parameters"},"other parameters"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"sql")," ","[string]","\nexecute sql statement e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select name,age from test\n")),(0,r.yg)("h3",{id:"fields-string"},"fields ","[string]"),(0,r.yg)("p",null,"the fields of the IoTDB when you select"),(0,r.yg)("p",null,"the field type is SeaTunnel field type ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.table.type.SqlType")),(0,r.yg)("p",null,"e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"fields{\n    name=STRING\n    age=INT\n    }\n")),(0,r.yg)("h3",{id:"option-parameters"},"option parameters"),(0,r.yg)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,r.yg)("p",null,"the fetch_size of the IoTDB when you select"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,"the username of the IoTDB when you select"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"the password of the IoTDB when you select"),(0,r.yg)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,r.yg)("p",null,"the lower_bound of the IoTDB when you select"),(0,r.yg)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,r.yg)("p",null,"the upper_bound of the IoTDB when you select"),(0,r.yg)("h3",{id:"num_partitions-int"},"num_partitions ","[int]"),(0,r.yg)("p",null,"the num_partitions of the IoTDB when you select"),(0,r.yg)("h3",{id:"thrift_default_buffer_size-int"},"thrift_default_buffer_size ","[int]"),(0,r.yg)("p",null,"the thrift_default_buffer_size of the IoTDB when you select"),(0,r.yg)("h3",{id:"enable_cache_leader-boolean"},"enable_cache_leader ","[boolean]"),(0,r.yg)("p",null,"enable_cache_leader of the IoTDB when you select"),(0,r.yg)("h3",{id:"version-string"},"version ","[string]"),(0,r.yg)("p",null,"Version represents the SQL semantic version used by the client, which is used to be compatible with the SQL semantics of\n0.12 when upgrading 0.13. The possible values are: V_0_12, V_0_13."),(0,r.yg)("h3",{id:"split-partitions"},"split partitions"),(0,r.yg)("p",null,"we can split the partitions of the IoTDB and we used time column split"),(0,r.yg)("h4",{id:"num_partitions-int-1"},"num_partitions ","[int]"),(0,r.yg)("p",null,"split num"),(0,r.yg)("h3",{id:"upper_bound-long-1"},"upper_bound ","[long]"),(0,r.yg)("p",null,"upper bound of the time column"),(0,r.yg)("h3",{id:"lower_bound-long-1"},"lower_bound ","[long]"),(0,r.yg)("p",null,"lower bound of the time column"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'     split the time range into numPartitions parts\n     if numPartitions is 1, use the whole time range\n     if numPartitions < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, numPartitions = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test  where (time >= 1 and time < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test  where (time >= 6 and time < 11) and (  age > 0 and age < 10 )\n\n')))}d.isMDXComponent=!0}}]);