"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[50922],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(58168),r=t(96540),l=t(20053),o=t(23104),s=t(56347),i=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,u]=f({queryString:t,groupId:a}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),g=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function k(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(h,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function w(e){const n=(0,g.A)();return r.createElement(k,(0,a.A)({key:String(n)},e))}},35166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),l=t(11470),o=t(19365);const s={},i="Deployment",u={unversionedId:"deployment",id:"version-2.1.2/deployment",title:"Deployment",description:"This section will show you how to submit your SeaTunnel application in all kinds of cluster engine. If you still not installation",source:"@site/versioned_docs/version-2.1.2/deployment.mdx",sourceDirName:".",slug:"/deployment",permalink:"/zh-CN/docs/2.1.2/deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/deployment.mdx",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Command usage",permalink:"/zh-CN/docs/2.1.2/command/usage"},next:{title:"Set Up Develop Environment",permalink:"/zh-CN/docs/2.1.2/contribution/setup"}},c={},p=[{value:"Deployment in All Kind of Engine",id:"deployment-in-all-kind-of-engine",level:2},{value:"Local Mode(Spark Only)",id:"local-modespark-only",level:3},{value:"Standalone Cluster",id:"standalone-cluster",level:3},{value:"Yarn Cluster",id:"yarn-cluster",level:3},{value:"Mesos Cluster(Spark Only)",id:"mesos-clusterspark-only",level:3},{value:"Run Your Engine in Scaling",id:"run-your-engine-in-scaling",level:2}],d={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"deployment"},"Deployment"),(0,r.yg)("p",null,"This section will show you how to submit your SeaTunnel application in all kinds of cluster engine. If you still not installation\nSeaTunnel you could go to see ",(0,r.yg)("a",{parentName:"p",href:"/docs/category/start"},"quick start")," about how to prepare and change SeaTunnel configuration firstly."),(0,r.yg)("h2",{id:"deployment-in-all-kind-of-engine"},"Deployment in All Kind of Engine"),(0,r.yg)("h3",{id:"local-modespark-only"},"Local Mode(Spark Only)"),(0,r.yg)("p",null,"Local mode only support Spark engine for now."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/application.conf\n")),(0,r.yg)("h3",{id:"standalone-cluster"},"Standalone Cluster"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# client mode\n./bin/start-seatunnel-spark.sh \\\n--master spark://ip:7077 \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master spark://ip:7077 \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/start-seatunnel-flink.sh \\\n--config config-path\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n--config config-path\n")))),(0,r.yg)("h3",{id:"yarn-cluster"},"Yarn Cluster"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# client mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n"))),(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n--config config-path\n\n# -ynm seatunnel specifies the name displayed in the yarn webUI as seatunnel, you can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n-ynm seatunnel \\\n--config config-path\n")))),(0,r.yg)("h3",{id:"mesos-clusterspark-only"},"Mesos Cluster(Spark Only)"),(0,r.yg)("p",null,"Mesos cluster deployment only support Spark engine for now."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master mesos://ip:7077 \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n")),(0,r.yg)("h2",{id:"run-your-engine-in-scaling"},"Run Your Engine in Scaling"),(0,r.yg)("p",null,"(This section is about engine instead of SeaTunnel itself, it is background knowledge for user who not understand engine\ncluster type). Both Spark and Flink could be run in different kind of cluster and any scale. This guide only show the basic\nusage of SeaTunnel which build above engine Spark or Flink, if you want to scale your engine cluster see\n",(0,r.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"Spark"),"\nor ",(0,r.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/native_kubernetes/"},"Flink")," document."))}f.isMDXComponent=!0}}]);