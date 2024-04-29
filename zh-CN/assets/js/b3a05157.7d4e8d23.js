"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26243],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),y=r,g=d["".concat(p,".").concat(y)]||d[y]||c[y]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},84273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const o={},l="Download and install",i={unversionedId:"spark/installation",id:"version-2.1.0/spark/installation",title:"Download and install",description:"download",source:"@site/versioned_docs/version-2.1.0/spark/installation.md",sourceDirName:"spark",slug:"/spark/installation",permalink:"/zh-CN/docs/2.1.0/spark/installation",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/installation.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deployment",permalink:"/zh-CN/docs/2.1.0/spark/deployment"},next:{title:"Quick start",permalink:"/zh-CN/docs/2.1.0/spark/quick-start"}},p={},s=[{value:"download",id:"download",level:2},{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Prepare JDK1.8",id:"prepare-jdk18",level:3},{value:"Get Spark ready",id:"get-spark-ready",level:3},{value:"Install seatunnel",id:"install-seatunnel",level:2}],u={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"download-and-install"},"Download and install"),(0,r.yg)("h2",{id:"download"},"download"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"https://github.com/apache/incubator-seatunnel/releases\n")),(0,r.yg)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,r.yg)("h3",{id:"prepare-jdk18"},"Prepare JDK1.8"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel")," relies on the ",(0,r.yg)("inlineCode",{parentName:"p"},"JDK1.8")," operating environment."),(0,r.yg)("h3",{id:"get-spark-ready"},"Get Spark ready"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Seatunnel")," relies on ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," . Before installing ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel")," , you need to prepare ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," . Please ",(0,r.yg)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"download Spark")," first, please select ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark version >= 2.x.x"),". After downloading and decompressing, you can submit the Spark ",(0,r.yg)("inlineCode",{parentName:"p"},"deploy-mode = local")," mode task without any configuration. If you expect the task to run on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Standalone cluster")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Yarn cluster")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Mesos cluster"),", please refer to the Spark official website configuration document."),(0,r.yg)("h2",{id:"install-seatunnel"},"Install seatunnel"),(0,r.yg)("p",null,"Download the ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel")," installation package and unzip:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/apache/incubator-seatunnel/releases/download/v<version>/seatunnel-<version>.zip -O seatunnel-<version>.zip\nunzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,r.yg)("p",null,"There are no complicated installation and configuration steps. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/quick-start"},"Quick Start")," for how to use ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel")," , and refer to Configuration for ",(0,r.yg)("a",{parentName:"p",href:"./configuration"},"configuration"),"."))}c.isMDXComponent=!0}}]);