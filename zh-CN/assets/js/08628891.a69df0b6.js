"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[44665],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),y=a,m=d["".concat(s,".").concat(y)]||d[y]||c[y]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},42455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={},i="Download and install",l={unversionedId:"installation",id:"version-1.x/installation",title:"Download and install",description:"download",source:"@site/versioned_docs/version-1.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-CN/docs/1.x/installation",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/installation.md",tags:[],version:"1.x",frontMatter:{}},s={},u=[{value:"download",id:"download",level:2},{value:"Community Edition (Community)",id:"community-edition-community",level:3},{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Ready for JDK1.8",id:"ready-for-jdk18",level:3},{value:"Ready for Spark",id:"ready-for-spark",level:3},{value:"Install seatunnel",id:"install-seatunnel",level:3}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"download-and-install"},"Download and install"),(0,a.yg)("h2",{id:"download"},"download"),(0,a.yg)("h3",{id:"community-edition-community"},"Community Edition (Community)"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/releases"},"https://github.com/InterestingLab/seatunnel/releases")),(0,a.yg)("h2",{id:"environment-preparation"},"Environment preparation"),(0,a.yg)("h3",{id:"ready-for-jdk18"},"Ready for JDK1.8"),(0,a.yg)("p",null,"Seatunnel relies on the JDK1.8 operating environment."),(0,a.yg)("h3",{id:"ready-for-spark"},"Ready for Spark"),(0,a.yg)("p",null,"Seatunnel depends on Spark. Before installing seatunnel, you need to prepare Spark.\nPlease ",(0,a.yg)("a",{parentName:"p",href:"http://spark.apache.org/downloads.html"},"download Spark")," first, and select Spark version >= 2.x.x. After downloading and decompressing, you can submit tasks in Spark deploy-mode = local mode without any configuration.\nIf you expect the task to run on a Standalone cluster or a Yarn or Mesos cluster, please refer to the Spark official website configuration documentation."),(0,a.yg)("h3",{id:"install-seatunnel"},"Install seatunnel"),(0,a.yg)("p",null,"Download the seatunnel installation package and unzip it, here is the community version as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"wget https://github.com/InterestingLab/seatunnel/releases/download/v<version>/seatunnel-<version>.zip -O seatunnel-<version>.zip\nunzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,a.yg)("p",null,"There are no complicated installation and configuration steps, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-cn/v1/quick-start.md"},"Quick Start")," for the usage of seatunnel, and ","[Configuration]","(/zh-cn/v1/configuration/base for configuration )."),(0,a.yg)("p",null,"If you want to deploy seatunnel to run on Spark Standalone/Yarn/Mesos cluster, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-cn/v1/deployment"},"seatunnel deployment")))}c.isMDXComponent=!0}}]);