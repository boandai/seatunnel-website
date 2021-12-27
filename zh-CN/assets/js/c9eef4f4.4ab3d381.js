"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7463],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=a,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(c,o(o({ref:e},d),{},{components:n})):r.createElement(c,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2552:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p=void 0,u={unversionedId:"configuration/output-plugins/Alluxio",id:"configuration/output-plugins/Alluxio",title:"Alluxio",description:"Output plugin : Alluxio",source:"@site/docs/configuration/output-plugins/Alluxio.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Alluxio",permalink:"/zh-CN/docs/configuration/output-plugins/Alluxio",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/output-plugins/Alluxio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tidb",permalink:"/zh-CN/docs/configuration/input-plugins/Tidb"},next:{title:"Clickhouse",permalink:"/zh-CN/docs/configuration/output-plugins/Clickhouse"}},d=[{value:"Output plugin : Alluxio",id:"output-plugin--alluxio",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"options object",id:"options-object",children:[],level:5},{value:"partition_by array",id:"partition_by-array",children:[],level:5},{value:"path string",id:"path-string",children:[],level:5},{value:"path_time_format string",id:"path_time_format-string",children:[],level:5},{value:"save_mode string",id:"save_mode-string",children:[],level:5},{value:"format string",id:"format-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Note",id:"note",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],m={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"output-plugin--alluxio"},"Output plugin : Alluxio"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u8f93\u51fa\u6570\u636e\u5230Alluxio\u6587\u4ef6"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#options-object"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#partition_by-array"},"partition_by")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#path-string"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#path_time_format-string"},"path_time_format")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#format-string"},"format")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"options-object"},"options ","[object]"),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u53c2\u6570"),(0,l.kt)("h5",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.kt)("p",null,"\u6839\u636e\u6240\u9009\u5b57\u6bb5\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a"),(0,l.kt)("h5",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"Alluxio\u5185\u5b58\u6587\u4ef6\u8def\u5f84\uff0c\u4ee5alluxio://\u5f00\u5934"),(0,l.kt)("h5",{id:"path_time_format-string"},"path_time_format ","[string]"),(0,l.kt)("p",null,"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"path"),"\u53c2\u6570\u4e2d\u7684\u683c\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"xxxx-${now}"),"\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"path_time_format"),"\u53ef\u4ee5\u6307\u5b9aalluxio\u8def\u5f84\u7684\u65f6\u95f4\u683c\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd"),"\u3002\u5e38\u7528\u7684\u65f6\u95f4\u683c\u5f0f\u5217\u4e3e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.kt)("p",null,"\u8be6\u7ec6\u7684\u65f6\u95f4\u683c\u5f0f\u8bed\u6cd5\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"\u3002"),(0,l.kt)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,l.kt)("p",null,"\u5b58\u50a8\u6a21\u5f0f\uff0c\u5f53\u524d\u652f\u6301overwrite\uff0cappend\uff0cignore\u4ee5\u53caerror\u3002\u6bcf\u4e2a\u6a21\u5f0f\u5177\u4f53\u542b\u4e49\u89c1",(0,l.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/2.2.0/sql-programming-guide.html#save-modes"},"save-modes")),(0,l.kt)("h5",{id:"format-string"},"format ","[string]"),(0,l.kt)("p",null,"\u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u5f53\u524d\u652f\u6301csv\u3001json\u3001parquet\u3001orc\u548ctext"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/output-plugin"},"Output Plugin")),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528zookeeper\u63a7\u5236alluxio\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u8bed\u53e5\u52a0\u5165\u5230start-seatunnel.sh\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'driverJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\nexecutorJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\n')),(0,l.kt)("p",null,"\u6216\u8005\u57281.5\u7248\u672c\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684spark{}\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'spark.driverJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\nspark.executorJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\n')),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'alluxio {\n    path = "alluxio:///var/logs-${now}"\n    format = "json"\n    path_time_format = "yyyy.MM.dd"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6309\u5929\u751f\u6210Alluxio\u6587\u4ef6\uff0c\u4f8b\u5982",(0,l.kt)("strong",{parentName:"p"},"logs-2018.02.12"))))}s.isMDXComponent=!0}}]);