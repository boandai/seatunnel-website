"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9826],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),u=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),k=a,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||r;return t?o.createElement(m,l(l({ref:n},c),{},{components:t})):o.createElement(m,l({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53712:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return k}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],s={},i="Console",u={unversionedId:"connector-v2/sink/Console",id:"version-2.3.4/connector-v2/sink/Console",title:"Console",description:"Console sink connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/sink/Console.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Console",permalink:"/zh-CN/docs/2.3.4/connector-v2/sink/Console",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/sink/Console.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"ClickhouseFile",permalink:"/zh-CN/docs/2.3.4/connector-v2/sink/ClickhouseFile"},next:{title:"CosFile",permalink:"/zh-CN/docs/2.3.4/connector-v2/sink/CosFile"}},c={},p=[{value:"Support Connector Version",id:"support-connector-version",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Multiple Sources Simple:",id:"multiple-sources-simple",level:3},{value:"Console Sample Data",id:"console-sample-data",level:2}],d={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"console"},"Console"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Console sink connector")),(0,r.kt)("h2",{id:"support-connector-version"},"Support Connector Version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All versions")),(0,r.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spark",(0,r.kt)("br",null),"\nFlink",(0,r.kt)("br",null),"\nSeaTunnel Zeta",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to send data to Console. Both support streaming and batch mode."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,r.kt)("inlineCode",{parentName:"p"},"age: 12, name: jared"),"]",", the content send to console is the following: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"name":"jared","age":17}'))),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/sink/common-options"},"Sink Common Options")," for details")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log.print.data"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to determine whether data should be printed in the logs. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log.print.delay.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Delay in milliseconds between printing each data item to the logs. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")))),(0,r.kt)("h2",{id:"task-example"},"Task Example"),(0,r.kt)("h3",{id:"simple"},"Simple:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a randomly generated data, written to the console, with a degree of parallelism of 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake"\n  }\n}\n')),(0,r.kt)("h3",{id:"multiple-sources-simple"},"Multiple Sources Simple:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a multiple source and you can specify a data source to write to the specified end")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake1"\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n        age = "int"\n        sex = "string"\n      }\n    }\n  }\n   FakeSource {\n    result_table_name = "fake2"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n  Console {\n    source_table_name = "fake2"\n  }\n}\n')),(0,r.kt)("h2",{id:"console-sample-data"},"Console Sample Data"),(0,r.kt)("p",null,"This is a printout from our console"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-12-19 11:01:45,417 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - output rowType: name<STRING>, age<INT>\n2022-12-19 11:01:46,489 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=1: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: CpiOd, 8520946\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=2: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: eQqTs, 1256802974\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=3: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: UsRgO, 2053193072\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=4: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jDQJj, 1993016602\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=5: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: rqdKp, 1392682764\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=6: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: wCoWN, 986999925\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=7: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: qomTU, 72775247\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=8: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: jcqXR, 1074529204\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=9: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: AkWIO, 1961723427\n2022-12-19 11:01:46,490 INFO  org.apache.seatunnel.connectors.seatunnel.console.sink.ConsoleSinkWriter - subtaskIndex=0 rowIndex=10: SeaTunnelRow#tableId=-1 SeaTunnelRow#kind=INSERT: hBoib, 929089763\n")))}k.isMDXComponent=!0}}]);