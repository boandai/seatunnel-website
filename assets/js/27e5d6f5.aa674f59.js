"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5888],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1002:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],p={},o=void 0,u={unversionedId:"configuration/input-plugins/Tidb",id:"configuration/input-plugins/Tidb",title:"Tidb",description:"Input plugin : TiDB",source:"@site/docs/configuration/input-plugins/Tidb.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Tidb",permalink:"/docs/configuration/input-plugins/Tidb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/input-plugins/Tidb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SocketStream",permalink:"/docs/configuration/input-plugins/SocketStream"},next:{title:"Alluxio",permalink:"/docs/configuration/output-plugins/Alluxio"}},s=[{value:"Input plugin : TiDB",id:"input-plugin--tidb",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"database string",id:"database-string",children:[],level:5},{value:"pre_sql string",id:"pre_sql-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],c={toc:s};function d(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"input-plugin--tidb"},"Input plugin : TiDB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.kt)("li",{parentName:"ul"},"Homepage: ",(0,a.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.kt)("li",{parentName:"ul"},"Version: 1.1.5")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tispark"},"TiSpark"),"\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB"),"\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5f53\u524d\u4ec5\u4ec5\u652f\u6301Spark 2.1"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#pre_sql-string"},"pre_sql")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h5",{id:"database-string"},"database ","[string]"),(0,a.kt)("p",null,"TiDB\u5e93\u540d"),(0,a.kt)("h5",{id:"pre_sql-string"},"pre_sql ","[string]"),(0,a.kt)("p",null,"\u8fdb\u884c\u9884\u5904\u7406\u7684sql, \u5982\u679c\u4e0d\u9700\u8981\u9884\u5904\u7406,\u53ef\u4ee5\u4f7f\u7528select * from tidb_db.tidb_table"),(0,a.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"\u4f7f\u7528TiDB Input\u5fc5\u987b\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"spark-defaults.conf"),"\u6216\u8005seatunnel\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"spark.tispark.pd.addresses"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"spark.sql.extensions"),"\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2aseatunnel\u8bfb\u53d6TiDB\u6570\u636e\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'spark {\n  ...\n  spark.tispark.pd.addresses = "localhost:2379"\n  spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\n\ninput {\n    tidb {\n        database = "test"\n        pre_sql = "select * from test.my_table"\n        result_table_name = "myTable"\n    }\n}\n\nfilter {\n   ...\n}\n\noutput {\n    ...\n}\n')))}d.isMDXComponent=!0}}]);