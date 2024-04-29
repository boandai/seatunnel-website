"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6249],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(d,l(l({ref:t},g),{},{components:n})):a.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={},l="Hive",o={unversionedId:"connector/sink/Hive",id:"version-2.1.1/connector/sink/Hive",title:"Hive",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/sink/Hive.md",sourceDirName:"connector/sink",slug:"/connector/sink/Hive",permalink:"/docs/2.1.1/connector/sink/Hive",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/sink/Hive.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Hbase",permalink:"/docs/2.1.1/connector/sink/Hbase"},next:{title:"Hudi",permalink:"/docs/2.1.1/connector/sink/Hudi"}},s={},p=[{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"sql string",id:"sql-string",level:5},{value:"Source_table_name string",id:"source_table_name-string",level:5},{value:"result_table_name string",id:"result_table_name-string",level:5},{value:"save_mode string",id:"save_mode-string",level:5},{value:"sink_columns string",id:"sink_columns-string",level:5},{value:"partition_by [Arraystring]",id:"partition_by-arraystring",level:5},{value:"Example",id:"example",level:3}],g={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hive"},"Hive"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Write Rows to ",(0,r.yg)("a",{parentName:"p",href:"https://hive.apache.org"},"Apache Hive"),"."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Hive"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#sql-string"},"sql")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#result_table_name-string"},"result_table_name")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#sink_columns-string"},"sink_columns")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#partition_by-arraystring"},"partition_by")),(0,r.yg)("td",{parentName:"tr",align:null},"Array","[string]"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h5",{id:"sql-string"},"sql ","[string]"),(0,r.yg)("p",null,"Hive sql\uff1athe whole insert data sql, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"insert into/overwrite $table  select * from xxx_table "),", If this option exists, other options will be ignored."),(0,r.yg)("h5",{id:"source_table_name-string"},"Source_table_name ","[string]"),(0,r.yg)("p",null,"Datasource of this plugin."),(0,r.yg)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,r.yg)("p",null,"The output hive table name if the ",(0,r.yg)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,r.yg)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,r.yg)("p",null,"Same with option ",(0,r.yg)("inlineCode",{parentName:"p"},"spark.mode")," in Spark, combined with ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," if the ",(0,r.yg)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,r.yg)("h5",{id:"sink_columns-string"},"sink_columns ","[string]"),(0,r.yg)("p",null,"Specify the selected fields which write to result_table_name, separated by commas, combined with ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name"),"\xa0if the ",(0,r.yg)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,r.yg)("h5",{id:"partition_by-arraystring"},"partition_by [Array","[string]","]"),(0,r.yg)("p",null,"Hive partition fields, combined with ",(0,r.yg)("inlineCode",{parentName:"p"},"result_table_name")," if the ",(0,r.yg)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},'sink {\n  Hive {\n    sql = "insert overwrite table seatunnel.test1 partition(province) select name,age,province from myTable2"\n  }\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},'sink {\n  Hive {\n    source_table_name = "myTable2"\n    result_table_name = "seatunnel.test1"\n    save_mode = "overwrite"\n    sink_columns = "name,age,province"\n    partition_by = ["province"]\n  }\n}\n')))}c.isMDXComponent=!0}}]);