"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[95576],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var g=a.createContext({}),p=function(e){var n=a.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return a.createElement(g.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,g=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=t,m=u["".concat(g,".").concat(s)]||u[s]||y[s]||l;return r?a.createElement(m,o(o({ref:n},c),{},{components:r})):a.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73084:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(58168),t=(r(96540),r(15680));const l={sidebar_position:8},o=void 0,i={unversionedId:"seatunnel-engine/engine-jar-storage-mode",id:"seatunnel-engine/engine-jar-storage-mode",title:"engine-jar-storage-mode",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/engine-jar-storage-mode.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/engine-jar-storage-mode",permalink:"/zh-CN/docs/seatunnel-engine/engine-jar-storage-mode",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/engine-jar-storage-mode.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docs",previous:{title:"tcp",permalink:"/zh-CN/docs/seatunnel-engine/tcp"},next:{title:"Seatunnel runs on Flink",permalink:"/zh-CN/docs/other-engine/flink"}},g={},p=[{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"\u9694\u79bb\u8fde\u63a5\u5668Jar\u5b58\u50a8\u7b56\u7565",id:"\u9694\u79bb\u8fde\u63a5\u5668jar\u5b58\u50a8\u7b56\u7565",level:2},{value:"\u5171\u4eab\u8fde\u63a5\u5668Jar\u5b58\u50a8\u7b56\u7565",id:"\u5171\u4eab\u8fde\u63a5\u5668jar\u5b58\u50a8\u7b56\u7565",level:2}],c={toc:p},u="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("hr",null),(0,t.yg)("h1",{id:"\u914d\u7f6e\u5f15\u64ce-jar-\u5b58\u50a8\u6a21\u5f0f"},"\u914d\u7f6e\u5f15\u64ce Jar \u5b58\u50a8\u6a21\u5f0f"),(0,t.yg)("p",null,":::\u8b66\u544a"),(0,t.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6b64\u529f\u80fd\u76ee\u524d\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u8fd8\u6709\u8bb8\u591a\u65b9\u9762\u9700\u8981\u6539\u8fdb\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u4f7f\u7528\u6b64\u529f\u80fd\u65f6\u8c28\u614e\u884c\u4e8b\uff0c\u4ee5\u907f\u514d\u6f5c\u5728\u7684\u95ee\u9898\u548c\u4e0d\u5fc5\u8981\u7684\u98ce\u9669\u3002\n\u6211\u4eec\u81f4\u529b\u4e8e\u6301\u7eed\u52aa\u529b\u589e\u5f3a\u548c\u7a33\u5b9a\u6b64\u529f\u80fd\uff0c\u786e\u4fdd\u4e3a\u60a8\u63d0\u4f9b\u66f4\u597d\u7684\u4f53\u9a8c\u3002"),(0,t.yg)("p",null,":::"),(0,t.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u542f\u7528\u4f18\u5316\u7684\u4f5c\u4e1a\u63d0\u4ea4\u8fc7\u7a0b\uff0c\u8fd9\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml")," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u542f\u7528\u4e86 Seatunnel \u4f5c\u4e1a\u63d0\u4ea4\u8fc7\u7a0b\u914d\u7f6e\u9879\u7684\u4f18\u5316\u540e\uff0c\n\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 Seatunnel Zeta \u5f15\u64ce\u4f5c\u4e3a\u6267\u884c\u5f15\u64ce\uff0c\u800c\u65e0\u9700\u5728\u6bcf\u4e2a\u5f15\u64ce ",(0,t.yg)("inlineCode",{parentName:"p"},"connector")," \u76ee\u5f55\u4e2d\u653e\u7f6e\u4efb\u52a1\u6267\u884c\u6240\u9700\u7684\u8fde\u63a5\u5668 Jar \u5305\u6216\u8fde\u63a5\u5668\u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 Jar \u5305\u3002\n\u7528\u6237\u53ea\u9700\u5728\u63d0\u4ea4\u4f5c\u4e1a\u7684\u5ba2\u6237\u7aef\u4e0a\u653e\u7f6e\u6240\u6709\u4efb\u52a1\u6267\u884c\u6240\u9700\u7684 Jar \u5305\uff0c\u5ba2\u6237\u7aef\u5c06\u81ea\u52a8\u4e0a\u4f20\u4efb\u52a1\u6267\u884c\u6240\u9700\u7684 Jars \u5230 Zeta \u5f15\u64ce\u3002\u5728 Docker \u6216 k8s \u6a21\u5f0f\u4e0b\u63d0\u4ea4\u4f5c\u4e1a\u65f6\uff0c\u542f\u7528\u6b64\u914d\u7f6e\u9879\u662f\u5fc5\u8981\u7684\uff0c\n\u8fd9\u53ef\u4ee5\u4ece\u6839\u672c\u4e0a\u89e3\u51b3\u7531 Seatunnel Zeta \u5f15\u64ce\u7684\u91cd\u91cf\u9020\u6210\u7684\u5927\u578b\u5bb9\u5668\u955c\u50cf\u95ee\u9898\u3002\u5728\u955c\u50cf\u4e2d\uff0c\u53ea\u9700\u8981\u63d0\u4f9b Zeta \u5f15\u64ce\u7684\u6838\u5fc3\u6846\u67b6\u5305\uff0c\n\u7136\u540e\u53ef\u4ee5\u5c06\u8fde\u63a5\u5668\u7684 jar \u5305\u548c\u8fde\u63a5\u5668\u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 jar \u5305\u5206\u522b\u4e0a\u4f20\u5230 pod \u8fdb\u884c\u5206\u53d1\u3002"),(0,t.yg)("p",null,"\u542f\u7528\u4e86\u4f18\u5316\u4f5c\u4e1a\u63d0\u4ea4\u8fc7\u7a0b\u914d\u7f6e\u9879\u540e\uff0c\u60a8\u4e0d\u9700\u8981\u5728 Zeta \u5f15\u64ce\u4e2d\u653e\u7f6e\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u7684 Jar \u5305\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"COMMON_PLUGIN_JARS"),(0,t.yg)("li",{parentName:"ul"},"CONNECTOR_PLUGIN_JARS")),(0,t.yg)("p",null,"COMMON",(0,t.yg)("em",{parentName:"p"}," PLUGIN")," JARS \u6307\u7684\u662f\u8fde\u63a5\u5668\u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 Jar \u5305\uff0c CONNECTOR",(0,t.yg)("em",{parentName:"p"}," PLUGIN")," JARS \u6307\u7684\u662f\u8fde\u63a5\u5668 Jar \u5305\u3002\n\u5f53 Zeta \u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"lib")," \u4e2d\u4e0d\u5b58\u5728\u516c\u5171 jars \u65f6\uff0c\u5b83\u53ef\u4ee5\u5c06\u5ba2\u6237\u7aef\u7684\u672c\u5730\u516c\u5171 jars \u4e0a\u4f20\u5230\u6240\u6709\u5f15\u64ce\u8282\u70b9\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"lib")," \u76ee\u5f55\u3002\n\u8fd9\u6837\uff0c\u5373\u4f7f\u7528\u6237\u6ca1\u6709\u5728 Zeta \u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"lib")," \u4e2d\u653e\u7f6e jar\uff0c\u4efb\u52a1\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\u3002\n\u7136\u800c\uff0c\u6211\u4eec\u4e0d\u63a8\u8350\u4f9d\u8d56\u6253\u5f00\u4f18\u5316\u4f5c\u4e1a\u63d0\u4ea4\u8fc7\u7a0b\u7684\u914d\u7f6e\u9879\u6765\u4e0a\u4f20\u8fde\u63a5\u5668\u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 Jar \u5305\u3002\n\u5982\u679c\u60a8\u4f7f\u7528 Zeta \u5f15\u64ce\uff0c\u8bf7\u5c06\u8fde\u63a5\u5668\u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 jar \u5305\u6587\u4ef6\u6dfb\u52a0\u5230\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/lib/")," \u76ee\u5f55\u4e2d\uff0c\u4f8b\u5982 jdbc \u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,t.yg)("h1",{id:"\u8fde\u63a5\u5668-jar-\u5b58\u50a8\u7b56\u7565"},"\u8fde\u63a5\u5668 Jar \u5b58\u50a8\u7b56\u7565"),(0,t.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u5f53\u524d\u8fde\u63a5\u5668 Jar \u5305\u548c\u8fde\u63a5\u5668\u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 Jar \u5305\u7684\u5b58\u50a8\u7b56\u7565\u3002\n\u53ef\u4ee5\u914d\u7f6e\u4e24\u79cd\u5b58\u50a8\u7b56\u7565\uff0c\u5373\u5171\u4eab Jar \u5305\u5b58\u50a8\u7b56\u7565\u548c\u9694\u79bb Jar \u5305\u5b58\u50a8\u7b56\u7565\u3002\n\u4e24\u79cd\u4e0d\u540c\u7684\u5b58\u50a8\u7b56\u7565\u4e3a Jar \u6587\u4ef6\u63d0\u4f9b\u4e86\u66f4\u7075\u6d3b\u7684\u5b58\u50a8\u6a21\u5f0f\u3002\n\u60a8\u53ef\u4ee5\u914d\u7f6e\u5b58\u50a8\u7b56\u7565\uff0c\u4f7f\u5f15\u64ce\u4e2d\u7684\u591a\u4e2a\u6267\u884c\u4f5c\u4e1a\u5171\u4eab\u76f8\u540c\u7684 Jar \u5305\u6587\u4ef6\u3002"),(0,t.yg)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,t.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,t.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"connector-jar-storage-enable"),(0,t.yg)("td",{parentName:"tr",align:null},"false"),(0,t.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e0a\u4f20\u8fde\u63a5\u5668 Jar \u5305\u5230\u5f15\u64ce\u3002\u9ed8\u8ba4\u542f\u7528\u72b6\u6001\u4e3a false\u3002")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"connector-jar-storage-mode"),(0,t.yg)("td",{parentName:"tr",align:null},"SHARED"),(0,t.yg)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7aef Jar \u5305\u5b58\u50a8\u6a21\u5f0f\u9009\u62e9\u3002\u6709\u4e24\u4e2a\u53ef\u9009\u6a21\u5f0f\uff0cSHARED\uff08\u5171\u4eab\uff09\u548c ISOLATED\uff08\u9694\u79bb\uff09\u3002\u9ed8\u8ba4\u7684 Jar \u5305\u5b58\u50a8\u6a21\u5f0f\u662f SHARED\u3002")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"connector-jar-storage-path"),(0,t.yg)("td",{parentName:"tr",align:null},'" "'),(0,t.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49\u7684 Jar \u5305\u5b58\u50a8\u8def\u5f84\u3002")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"connector-jar-cleanup-task-interval"),(0,t.yg)("td",{parentName:"tr",align:null},"3600s"),(0,t.yg)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7aef Jar \u5305\u6e05\u7406\u5b9a\u65f6\u4efb\u52a1\u6267\u884c\u95f4\u9694\u3002")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"connector-jar-expiry-time"),(0,t.yg)("td",{parentName:"tr",align:null},"600s"),(0,t.yg)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7aef Jar \u5305\u5b58\u50a8\u8fc7\u671f\u65f6\u95f4\u3002")))),(0,t.yg)("h2",{id:"\u9694\u79bb\u8fde\u63a5\u5668jar\u5b58\u50a8\u7b56\u7565"},"\u9694\u79bb\u8fde\u63a5\u5668Jar\u5b58\u50a8\u7b56\u7565"),(0,t.yg)("p",null,"\u5728\u4f5c\u4e1a\u63d0\u4ea4\u4e4b\u524d\uff0c\u8fde\u63a5\u5668 Jar \u5305\u5c06\u88ab\u4e0a\u4f20\u5230 Master \u8282\u70b9\u4e0a\u7684\u4e00\u4e2a\u72ec\u7acb\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\u4e2d\u3002\n\u4e0d\u540c\u4f5c\u4e1a\u7684\u8fde\u63a5\u5668 Jar \u5305\u4f4d\u4e8e\u4e0d\u540c\u7684\u5b58\u50a8\u8def\u5f84\u4e2d\uff0c\u56e0\u6b64\u4e0d\u540c\u4f5c\u4e1a\u7684\u8fde\u63a5\u5668 Jar \u5305\u5f7c\u6b64\u9694\u79bb\u3002\n\u4f5c\u4e1a\u6267\u884c\u6240\u9700\u7684 Jar \u5305\u6587\u4ef6\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u4f5c\u4e1a\u3002\u5f53\u5f53\u524d\u4f5c\u4e1a\u6267\u884c\u7ed3\u675f\u65f6\uff0c\u57fa\u4e8e ",(0,t.yg)("inlineCode",{parentName:"p"},"JobId")," \u751f\u6210\u7684\u5b58\u50a8\u8def\u5f84\u4e2d\u7684 Jar \u5305\u6587\u4ef6\u5c06\u88ab\u5220\u9664\u3002"),(0,t.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'jar-storage:\n   connector-jar-storage-enable: true\n   connector-jar-storage-mode: ISOLATED\n   connector-jar-storage-path: ""\n   connector-jar-cleanup-task-interval: 3600\n   connector-jar-expiry-time: 600\n')),(0,t.yg)("p",null,"\u914d\u7f6e\u53c2\u6570\u7684\u8be6\u7ec6\u89e3\u91ca\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"connector-jar-storage-enable: \u5728\u6267\u884c\u4f5c\u4e1a\u524d\u542f\u7528\u4e0a\u4f20\u8fde\u63a5\u5668 Jar \u5305\u7684\u529f\u80fd\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-storage-mode: \u8fde\u63a5\u5668 Jar \u5305\u7684\u5b58\u50a8\u6a21\u5f0f\uff0c\u6709\u4e24\u79cd\u5b58\u50a8\u6a21\u5f0f\u53ef\u4f9b\u9009\u62e9\uff1a\u5171\u4eab\u6a21\u5f0f\uff08SHARED\uff09\u548c\u9694\u79bb\u6a21\u5f0f\uff08ISOLATED\uff09\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-storage-path: \u5728 Zeta \u5f15\u64ce\u4e0a\u7528\u6237\u81ea\u5b9a\u4e49\u8fde\u63a5\u5668 Jar \u5305\u7684\u672c\u5730\u5b58\u50a8\u8def\u5f84\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-cleanup-task-interval: Zeta \u5f15\u64ce\u8fde\u63a5\u5668 Jar \u5305\u5b9a\u65f6\u6e05\u7406\u4efb\u52a1\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 3600 \u79d2\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-expiry-time: \u8fde\u63a5\u5668 Jar \u5305\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 600 \u79d2\u3002")),(0,t.yg)("h2",{id:"\u5171\u4eab\u8fde\u63a5\u5668jar\u5b58\u50a8\u7b56\u7565"},"\u5171\u4eab\u8fde\u63a5\u5668Jar\u5b58\u50a8\u7b56\u7565"),(0,t.yg)("p",null,"\u5728\u4f5c\u4e1a\u63d0\u4ea4\u4e4b\u524d\uff0c\u8fde\u63a5\u5668 Jar \u5305\u5c06\u88ab\u4e0a\u4f20\u5230 Master \u8282\u70b9\u3002\u5982\u679c\u4e0d\u540c\u7684\u4f5c\u4e1a\u4f7f\u7528\u76f8\u540c\u7684 Jar \u5305\u6587\u4ef6\uff0c\u5b83\u4eec\u53ef\u4ee5\u5728 Master \u8282\u70b9\u4e0a\u5171\u4eab\u8fde\u63a5\u5668 Jars\u3002\n\u6240\u6709 Jar \u5305\u6587\u4ef6\u90fd\u88ab\u6301\u4e45\u5316\u5230\u4e00\u4e2a\u5171\u4eab\u7684\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\u4e2d\uff0c\u5f15\u7528 Master \u8282\u70b9\u7684 Jar \u5305\u53ef\u4ee5\u5728\u4e0d\u540c\u4f5c\u4e1a\u4e4b\u95f4\u5171\u4eab\u3002\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\uff0c\n\u5171\u4eab\u8fde\u63a5\u5668Jar\u5b58\u50a8\u7b56\u7565 \u4e0d\u4f1a\u7acb\u5373\u5220\u9664\u4e0e\u5f53\u524d\u4efb\u52a1\u6267\u884c\u76f8\u5173\u7684\u6240\u6709 Jar \u5305\uff0c\u800c\u662f\u6709\u4e00\u4e2a\u72ec\u7acb\u7684\u7ebf\u7a0b\u8d1f\u8d23\u6e05\u7406\u5de5\u4f5c\u3002\n\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u8bbe\u7f6e\u4e86\u6e05\u7406\u5de5\u4f5c\u7684\u8fd0\u884c\u65f6\u95f4\u548c Jar \u5305\u7684\u5b58\u6d3b\u65f6\u95f4\u3002"),(0,t.yg)("p",null,"\u793a\u4f8b:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'jar-storage:\n   connector-jar-storage-enable: true\n   connector-jar-storage-mode: SHARED\n   connector-jar-storage-path: ""\n   connector-jar-cleanup-task-interval: 3600\n   connector-jar-expiry-time: 600\n')),(0,t.yg)("p",null,"\u914d\u7f6e\u53c2\u6570\u7684\u8be6\u7ec6\u89e3\u91ca\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"connector-jar-storage-enable: \u5728\u6267\u884c\u4f5c\u4e1a\u524d\u542f\u7528\u4e0a\u4f20\u8fde\u63a5\u5668 Jar \u5305\u7684\u529f\u80fd\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-storage-mode: \u8fde\u63a5\u5668 Jar \u5305\u7684\u5b58\u50a8\u6a21\u5f0f\uff0c\u6709\u4e24\u79cd\u5b58\u50a8\u6a21\u5f0f\u53ef\u4f9b\u9009\u62e9\uff1a\u5171\u4eab\u6a21\u5f0f\uff08SHARED\uff09\u548c\u9694\u79bb\u6a21\u5f0f\uff08ISOLATED\uff09\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-storage-path: \u5728 Zeta \u5f15\u64ce\u4e0a\u7528\u6237\u81ea\u5b9a\u4e49\u8fde\u63a5\u5668 Jar \u5305\u7684\u672c\u5730\u5b58\u50a8\u8def\u5f84\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-cleanup-task-interval: Zeta \u5f15\u64ce\u8fde\u63a5\u5668 Jar \u5305\u5b9a\u65f6\u6e05\u7406\u4efb\u52a1\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 3600 \u79d2\u3002"),(0,t.yg)("li",{parentName:"ul"},"connector-jar-expiry-time: \u8fde\u63a5\u5668 Jar \u5305\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 600 \u79d2\u3002")))}y.isMDXComponent=!0}}]);