"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[21040],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,u=g["".concat(c,".").concat(d)]||g[d]||m[d]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},o="RocketMQ",i={unversionedId:"connector-v2/source/RocketMQ",id:"version-2.3.3/connector-v2/source/RocketMQ",title:"RocketMQ",description:"RocketMQ source connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/RocketMQ.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/RocketMQ",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/RocketMQ",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/RocketMQ.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Redis"},next:{title:"S3File",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/S3File"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topics string",id:"topics-string",level:3},{value:"name.srv.addr string",id:"namesrvaddr-string",level:3},{value:"consumer.group string",id:"consumergroup-string",level:3},{value:"acl.enabled boolean",id:"aclenabled-boolean",level:3},{value:"access.key string",id:"accesskey-string",level:3},{value:"secret.key string",id:"secretkey-string",level:3},{value:"batch.size int",id:"batchsize-int",level:3},{value:"commit.on.checkpoint boolean",id:"commitoncheckpoint-boolean",level:3},{value:"partition.discovery.interval.millis long",id:"partitiondiscoveryintervalmillis-long",level:2},{value:"schema",id:"schema",level:3},{value:"format",id:"format",level:2},{value:"field.delimiter",id:"fielddelimiter",level:2},{value:"start.mode",id:"startmode",level:2},{value:"start.mode.timestamp",id:"startmodetimestamp",level:2},{value:"start.mode.offsets",id:"startmodeoffsets",level:2},{value:"common-options config",id:"common-options-config",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3}],p={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq"},"RocketMQ"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"RocketMQ source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Source connector for Apache RocketMQ."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name.srv.addr"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"acl.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"access.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secret.key"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"commit.on.checkpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field.delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},",")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"CONSUME_FROM_GROUP_OFFSETS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start.mode.offsets"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start.mode.timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.discovery.interval.millis"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"topics-string"},"topics ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"RocketMQ topic")," name. If there are multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"topics"),", use ",(0,r.yg)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,r.yg)("inlineCode",{parentName:"p"},'"tpc1,tpc2"'),"."),(0,r.yg)("h3",{id:"namesrvaddr-string"},"name.srv.addr ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"RocketMQ")," name server cluster address."),(0,r.yg)("h3",{id:"consumergroup-string"},"consumer.group ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"RocketMQ consumer group id"),", used to distinguish different consumer groups."),(0,r.yg)("h3",{id:"aclenabled-boolean"},"acl.enabled ","[boolean]"),(0,r.yg)("p",null,"If true, access control is enabled, and access key and secret key need to be configured."),(0,r.yg)("h3",{id:"accesskey-string"},"access.key ","[string]"),(0,r.yg)("p",null,"When ACL_ENABLED is true, access key cannot be empty."),(0,r.yg)("h3",{id:"secretkey-string"},"secret.key ","[string]"),(0,r.yg)("p",null,"When ACL_ENABLED is true, secret key cannot be empty."),(0,r.yg)("h3",{id:"batchsize-int"},"batch.size ","[int]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"RocketMQ")," consumer pull batch size"),(0,r.yg)("h3",{id:"commitoncheckpoint-boolean"},"commit.on.checkpoint ","[boolean]"),(0,r.yg)("p",null,"If true the consumer's offset will be periodically committed in the background."),(0,r.yg)("h2",{id:"partitiondiscoveryintervalmillis-long"},"partition.discovery.interval.millis ","[long]"),(0,r.yg)("p",null,"The interval for dynamically discovering topics and partitions."),(0,r.yg)("h3",{id:"schema"},"schema"),(0,r.yg)("p",null,"The structure of the data, including field names and field types."),(0,r.yg)("h2",{id:"format"},"format"),(0,r.yg)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ", ".\nIf you customize the delimiter, add the "field.delimiter" option.'),(0,r.yg)("h2",{id:"fielddelimiter"},"field.delimiter"),(0,r.yg)("p",null,"Customize the field delimiter for data format."),(0,r.yg)("h2",{id:"startmode"},"start.mode"),(0,r.yg)("p",null,"The initial consumption pattern of consumers,there are several types:\n","[CONSUME_FROM_LAST_OFFSET]",",","[CONSUME_FROM_FIRST_OFFSET]",",","[CONSUME_FROM_GROUP_OFFSETS]",",","[CONSUME_FROM_TIMESTAMP]","\n,","[CONSUME_FROM_SPECIFIC_OFFSETS]"),(0,r.yg)("h2",{id:"startmodetimestamp"},"start.mode.timestamp"),(0,r.yg)("p",null,'The time required for consumption mode to be "CONSUME_FROM_TIMESTAMP".'),(0,r.yg)("h2",{id:"startmodeoffsets"},"start.mode.offsets"),(0,r.yg)("p",null,'The offset required for consumption mode to be "CONSUME_FROM_SPECIFIC_OFFSETS".'),(0,r.yg)("p",null,"for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"start.mode.offsets = {\n         topic1-0 = 70\n         topic1-1 = 10\n         topic1-2 = 10\n      }\n")),(0,r.yg)("h3",{id:"common-options-config"},"common-options ","[config]"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.3/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test-topic-002"\n    consumer.group = "consumer-group"\n    parallelism = 2\n    batch.size = 20\n    schema = {\n       fields {\n            age = int\n            name = string\n       }\n     }\n    start.mode = "CONSUME_FROM_SPECIFIC_OFFSETS"\n    start.mode.offsets = {\n                test-topic-002-0 = 20\n             }\n            \n  }\n}\n')))}m.isMDXComponent=!0}}]);