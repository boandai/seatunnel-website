"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2907],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||d[c]||i;return n?r.createElement(g,l(l({ref:e},m),{},{components:n})):r.createElement(g,l({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},933:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"configuration/filter-plugins/Watermark",id:"configuration/filter-plugins/Watermark",title:"Watermark",description:"Filter plugin : Watermark",source:"@site/docs/configuration/filter-plugins/Watermark.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Watermark",permalink:"/zh-CN/docs/configuration/filter-plugins/Watermark",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/filter-plugins/Watermark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uuid",permalink:"/zh-CN/docs/configuration/filter-plugins/Uuid"},next:{title:"Alluxio",permalink:"/zh-CN/docs/configuration/input-plugins/Alluxio"}},m=[{value:"Filter plugin : Watermark",id:"filter-plugin--watermark",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"time_field string",id:"time_field-string",children:[],level:5},{value:"time_type string",id:"time_type-string",children:[],level:5},{value:"time_pattern string",id:"time_pattern-string",children:[],level:5},{value:"delay_threshold string",id:"delay_threshold-string",children:[],level:5},{value:"watermark_field string",id:"watermark_field-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],d={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"filter-plugin--watermark"},"Filter plugin : Watermark"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.3.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Spark Structured Streaming Watermark"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#time_field-string"},"time_field")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#time_type-string"},"time_type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"UNIX")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#time_pattern-string"},"time_pattern")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#delay_threshold-string"},"delay_threshold")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#watermark_field-string"},"watermark_field")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"time_field-string"},"time_field ","[string]"),(0,i.kt)("p",null,"\u65e5\u5fd7\u4e2d\u7684\u4e8b\u4ef6\u65f6\u95f4\u5b57\u6bb5"),(0,i.kt)("h5",{id:"time_type-string"},"time_type ","[string]"),(0,i.kt)("p",null,"\u65e5\u5fd7\u4e2d\u7684\u4e8b\u4ef6\u65f6\u95f4\u5b57\u6bb5\u7684\u7c7b\u578b\uff0c\u652f\u6301\u4e09\u79cd\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIX_MS|UNIX|string"),"\uff0cUNIX_MS\u4e3a13\u4f4d\u7684\u65f6\u95f4\u6233\uff0cUNIX\u4e3a10\u4f4d\u7684\u65f6\u95f4\u6233\uff0cstring\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u65f6\u95f4,\u59822019-04-08 22:10:23"),(0,i.kt)("h5",{id:"time_pattern-string"},"time_pattern ","[string]"),(0,i.kt)("p",null,"\u5f53\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"time_type"),"\u9009\u62e9\u4e3astring\u65f6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\u6765\u8fdb\u884c\u65f6\u95f4\u5b57\u7b26\u4e32\u7684\u5339\u914d\uff0c\u9ed8\u8ba4\u5339\u914d\u683c\u5f0f\u4e3ayyyy-MM-dd HH:mm:ss"),(0,i.kt)("h5",{id:"delay_threshold-string"},"delay_threshold ","[string]"),(0,i.kt)("p",null,"\u7b49\u5f85\u6570\u636e\u5230\u8fbe\u7684\u6700\u5c0f\u5ef6\u8fdf\u3002"),(0,i.kt)("h5",{id:"watermark_field-string"},"watermark_field ","[string]"),(0,i.kt)("p",null,"\u7ecf\u8fc7\u8fd9\u4e2afilter\u5904\u7406\u4e4b\u540e\u5c06\u4f1a\u589e\u52a0\u4e00\u4e2atimestamp\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7528\u4e8e\u6dfb\u52a0watermark"),(0,i.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/filter-plugin"},"Filter Plugin")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Watermark {\n         delay_threshold = "5 minutes"\n         time_field = "tf"\n         time_type = "UNIX"\n         watermark_field = "wm"\n}\n')))}s.isMDXComponent=!0}}]);