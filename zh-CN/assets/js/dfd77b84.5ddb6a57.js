"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20785],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var a=t(58168),r=t(96540),o=t(20053),l=t(23104),i=t(56347),u=t(57485),s=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,s]=m({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=u??p;return y({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==i&&(p(n),u(a))},y=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:y,onClick:d},l,{className:(0,o.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function N(e){const n=(0,f.A)();return r.createElement(w,(0,a.A)({key:String(n)},e))}},29196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));t(11470),t(19365);const o={sidebar_position:1},l=void 0,i={unversionedId:"start-v2/locally/deployment",id:"version-2.3.1/start-v2/locally/deployment",title:"deployment",description:"----------------",source:"@site/versioned_docs/version-2.3.1/start-v2/locally/deployment.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/deployment",permalink:"/zh-CN/docs/2.3.1/start-v2/locally/deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/start-v2/locally/deployment.md",tags:[],version:"2.3.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"About Seatunnel",permalink:"/zh-CN/docs/2.3.1/about"},next:{title:"quick-start-seatunnel-engine",permalink:"/zh-CN/docs/2.3.1/start-v2/locally/quick-start-seatunnel-engine"}},u={},s=[{value:"Step 1: Prepare the environment",id:"step-1-prepare-the-environment",level:2},{value:"Step 2: Download SeaTunnel",id:"step-2-download-seatunnel",level:2},{value:"Step 3: Install connectors plugin",id:"step-3-install-connectors-plugin",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"deployment"},"Deployment"),(0,r.yg)("h2",{id:"step-1-prepare-the-environment"},"Step 1: Prepare the environment"),(0,r.yg)("p",null,"Before you getting start the local run, you need to make sure you already have installed the following software which SeaTunnel required:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (Java 8 or 11, other versions greater than Java 8 can theoretically work as well) installed and ",(0,r.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," set.")),(0,r.yg)("h2",{id:"step-2-download-seatunnel"},"Step 2: Download SeaTunnel"),(0,r.yg)("p",null,"Enter the ",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"seatunnel download page")," and download the latest version of distribute\npackage ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,r.yg)("p",null,"Or you can download it by terminal"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export version="2.3.1"\nwget "https://archive.apache.org/dist/incubator/seatunnel/${version}/apache-seatunnel-incubating-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-incubating-${version}-bin.tar.gz"\n')),(0,r.yg)("h2",{id:"step-3-install-connectors-plugin"},"Step 3: Install connectors plugin"),(0,r.yg)("p",null,"Since 2.2.0-beta, the binary package does not provide connector dependencies by default, so when using it for the first time, we need to execute the following command to install the connector: (Of course, you can also manually download the connector from ","[Apache Maven Repository]","(",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/seatunnel/"},"https://repo.maven.apache.org/maven2/org/apache/seatunnel/")," to download, then manually move to the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors/seatunnel")," directory)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sh bin/install-plugin.sh 2.3.1\n")),(0,r.yg)("p",null,"If you need to specify the version of the connector, take 2.3.0-beta as an example, we need to execute"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sh bin/install-plugin.sh 2.3.1\n")),(0,r.yg)("p",null,"Usually you don't need all the connector plugins, so you can specify the plugins you need by configuring ",(0,r.yg)("inlineCode",{parentName:"p"},"config/plugin_config"),", for example, you only need the ",(0,r.yg)("inlineCode",{parentName:"p"},"connector-console")," plugin, then you can modify ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin_config")," as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plugin_config"},"--connectors-v2--\nconnector-console\n--end--\n")),(0,r.yg)("p",null,"If you'd like to make the sample application to work properly, you need to add the following plugins"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plugin_config"},"--connectors-v2--\nconnector-fake\nconnector-console\n--end--\n")),(0,r.yg)("p",null,"You can find out all supported connectors and corresponding plugin_config configuration names under ",(0,r.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/plugins-mapping.properties"),"."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you want to install the connector plugin by manually downloading the connector, you need to pay special attention to the following"),(0,r.yg)("p",{parentName:"admonition"},"The connectors directory contains the following subdirectories, if they do not exist, you need to create them manually"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"seatunnel\n")),(0,r.yg)("p",{parentName:"admonition"},"If you want to install the V2 connector plugin manually, you only need to download the V2 connector plugin you need and put them in the seatunnel directory")),(0,r.yg)("h2",{id:"whats-more"},"What's More"),(0,r.yg)("p",null,"For now, you are already deployment SeaTunnel complete. You can follow ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start")," to configure and run a data synchronization job."))}d.isMDXComponent=!0}}]);