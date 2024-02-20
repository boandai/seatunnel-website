"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83765],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14181:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={},c="Seatunnel runs on Flink",u={unversionedId:"other-engine/flink",id:"version-2.3.4/other-engine/flink",title:"Seatunnel runs on Flink",description:"Flink is a powerful high-performance distributed stream processing engine,More information about it you can,You can search for Apacke Flink",source:"@site/versioned_docs/version-2.3.4/other-engine/flink.md",sourceDirName:"other-engine",slug:"/other-engine/flink",permalink:"/docs/2.3.4/other-engine/flink",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/other-engine/flink.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"tcp",permalink:"/docs/2.3.4/seatunnel-engine/tcp"},next:{title:"spark",permalink:"/docs/2.3.4/other-engine/spark"}},s={},p=[{value:"Set Flink configuration information in the job",id:"set-flink-configuration-information-in-the-job",level:3},{value:"How to set up a simple Flink job",id:"how-to-set-up-a-simple-flink-job",level:3},{value:"How to run a job in a project",id:"how-to-run-a-job-in-a-project",level:3}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"seatunnel-runs-on-flink"},"Seatunnel runs on Flink"),(0,i.kt)("p",null,"Flink is a powerful high-performance distributed stream processing engine,More information about it you can,You can search for ",(0,i.kt)("inlineCode",{parentName:"p"},"Apacke Flink")),(0,i.kt)("h3",{id:"set-flink-configuration-information-in-the-job"},"Set Flink configuration information in the job"),(0,i.kt)("p",null,"Begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"flink.")),(0,i.kt)("p",null,"Example:\nI set a precise Checkpoint for this job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"env {\n  parallelism = 1  \n  flink.execution.checkpointing.unaligned.enabled=true\n}\n")),(0,i.kt)("p",null,"Enumeration types are not currently supported, you need to specify them in the Flink conf file ,Only these types of Settings are supported for the time being:",(0,i.kt)("br",null),"\nInteger/Boolean/String/Duration"),(0,i.kt)("h3",{id:"how-to-set-up-a-simple-flink-job"},"How to set up a simple Flink job"),(0,i.kt)("p",null,"This is a simple job that runs on Flink Randomly generated data is printed to the console"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'env {\n  # common parameter\n  parallelism = 1\n  checkpoint.interval = 5000\n\n  # flink special parameter\n  flink.execution.checkpointing.mode = "EXACTLY_ONCE"\n  flink.execution.checkpointing.timeout = 600000\n}\n\nsource {\n  FakeSource {\n    row.num = 16\n    result_table_name = "fake_table"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_int = int\n        c_bigint = bigint\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(33, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_int = int\n          c_bigint = bigint\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(33, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n  }\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n  # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink{\n   Console{}   \n}\n')),(0,i.kt)("h3",{id:"how-to-run-a-job-in-a-project"},"How to run a job in a project"),(0,i.kt)("p",null,"After you pull the code to the local, go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-flink-connector-v2-example")," module find ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.example.flink.v2.SeaTunnelApiExample")," To complete the operation of the job"))}m.isMDXComponent=!0}}]);