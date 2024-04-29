"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8948],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(58168),a=(t(96540),t(15680));const r={slug:"Upcoming API Connector Development Analysis",title:"Upcoming API Connector Development Analysis",tags:["Meetup"]},i="Apache SeaTunnel:  Upcoming API Connector Development Analysis",l={permalink:"/zh-CN/blog/Upcoming API Connector Development Analysis",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-06-23-New_Connector.md",source:"@site/blog/2022-06-23-New_Connector.md",title:"Upcoming API Connector Development Analysis",description:"After days of community development, the preliminary development of the new Connector API of SeaTunnel is completed. The next step is to adapt this new connector. In order to aid the developers to use this connector, this article provides guide to develop a new API.",date:"2022-06-23T00:00:00.000Z",formattedDate:"2022\u5e746\u670823\u65e5",tags:[{label:"Meetup",permalink:"/zh-CN/blog/tags/meetup"}],readingTime:3.28,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"Upcoming API Connector Development Analysis",title:"Upcoming API Connector Development Analysis",tags:["Meetup"]},prevItem:{title:"SeaTunnel 2.1.3 released! Introducing in Assert Sink connector and NullRate, Nulltf Transform",permalink:"/zh-CN/blog/2022/09/12/SeaTunnel-2.1.3-released"},nextItem:{title:"Apache SeaTunnel \u4e0e\u8ba1\u7b97\u5f15\u64ce\u7684\u89e3\u8026\u4e4b\u9053\uff0c\u91cd\u6784API\u6211\u4eec\u505a\u4e86\u4e9b\u4ec0\u4e48",permalink:"/zh-CN/blog/2022/05/31/engine"}},s={authorsImageUrls:[]},c=[{value:"Priliminary Setup",id:"priliminary-setup",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connector Testing",id:"connector-testing",level:2},{value:"Submit PR",id:"submit-pr",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,o.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"After days of community development, the preliminary development of the new Connector API of SeaTunnel is completed. The next step is to adapt this new connector. In order to aid the developers to use this connector, this article provides guide to develop a new API."),(0,a.yg)("h2",{id:"priliminary-setup"},"Priliminary Setup"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Environment configuration: JDK8 and Scala2.11 are recommended.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"As before, we need to download the latest code locally through git and import it into the IDE, project address: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel")," . At the same time, switch the branch to api-draft, and currently use this branch to develop the new version of the API and the corresponding Connector. The project structure is as follows:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"Project Structure",src:t(35795).A,width:"583",height:"1014"})))),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"At present, in order to distinguish different Connectors, we put the connectors that support"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Flink/Spark under the ",(0,a.yg)("inlineCode",{parentName:"li"},"seatunnel-connectors/seatunnel-connectors-flink(spark)")," module."),(0,a.yg)("li",{parentName:"ul"},"New version of the Connector is placed under the ",(0,a.yg)("inlineCode",{parentName:"li"},"seatunnel-connectors/seatunnel-connectors-seatunnel")," module.")),(0,a.yg)("p",{parentName:"li"},"As we can see from the above figure, we have implemented Fake, Console, Kafka Connector, and Clickhouse Connector is also being implemented.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"At present, the data type we support is SeaTunnelRow, so no matter the type of data generated by the Source or the type of data consumed by the Sink, it should be SeaTunnelRow."))),(0,a.yg)("h1",{id:"development-of-connector"},"Development of Connector"),(0,a.yg)("p",null,"Taking Fake Connector as an example, let's introduce how to implement a new Connector:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Create a corresponding module with a path under ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-connectors-seatunnel"),", which is at the same level as other new connectors.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-connectors-seatunnel/pom.xml")," file, add a new module to modules, modify ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-connectors-seatunnel/seatunnel-connector-seatunnel-fake/pom.xml"),", add seatunnel-api dependencies, and correct parent Quote. The resulting style is as follows:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"Style",src:t(96938).A,width:"949",height:"568"}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The next step is to create the corresponding package and related classes, create FakeSource, and need to inherit SeaTunnel Source."),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Note : The Source of SeaTunnel adopts the design of stream and batch integration. The Source of SeaTunnel determines whether current Source is a stream or batch through attribute getBoundedness.")),(0,a.yg)("p",{parentName:"li"},"So you can specify a Source as a stream or batch by dynamic configuration (refer to the default method). The configuration defined by the user in the configuration file can be obtained through the prepare method to realize the customized configuration."),(0,a.yg)("p",{parentName:"li"},"Then create FakeSourceReader, FakeSource SplitEnumerator, and FakeSourceSplit to inherit the corresponding abstract classes (which can be found in the corresponding classes). As long as we implement the corresponding methods of these classes, then our SeaTunnel Source Connector is basically completed.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Next, just follow the existing example to write the corresponding code. The most important one is the FakeSource Reader, which defines how we obtain data from the outside, which is the most critical part of the Source Connector. Every time a piece of data is generated, we need to place it in the collector as shown:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"Source",src:t(27521).A,width:"935",height:"424"}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"After the code development is complete, we need to configure the configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin-mapping.properties")," located under ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-connectors/modules"),". Adding a seatunnel\n",(0,a.yg)("inlineCode",{parentName:"p"},".source.FakeSource = seatunnel-connector-fake"),"\nmeans that SeaTunnel can find the jar package corresponding to the project by looking for a Source named FakeSource. This allows the Connector to be used in the normal configuration file.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"For a detailed description of writing Source and Sink and SeaTunnel API, please refer to the introduction at ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-connectors/seatunnel-connectors-seatunnel/ README.zh.md"),"."))),(0,a.yg)("h2",{id:"connector-testing"},"Connector Testing"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For testing, we can find the ",(0,a.yg)("inlineCode",{parentName:"li"},"seatunnel-flink(spark)-new-connector-example")," module in seatunnel-examples, and test it against different engines to ensure that the performance of the Connector is as consistent as possible. If you find any discrepancies, you can mark them in the document, modify the configuration file under resource, add our Connector to the configuration, and introduce ",(0,a.yg)("inlineCode",{parentName:"li"},"seatunnel-flink(spark)-new-connector-example/pom.xml")," dependency, you can execute ",(0,a.yg)("inlineCode",{parentName:"li"},"SeaTunnelApiExample")," to test."),(0,a.yg)("li",{parentName:"ul"},"The default is stream processing mode, and the execution mode is switched to batch mode by modifying ",(0,a.yg)("inlineCode",{parentName:"li"},"job.mode=BATCH")," in the environment of the configuration file.")),(0,a.yg)("h2",{id:"submit-pr"},"Submit PR"),(0,a.yg)("p",null,"When our Connector is ready, we can submit PR to github. After reviewing by other partners, our contributed Connector will become part of SeaTunnel!"))}d.isMDXComponent=!0},35795:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/0-82b23e9c80c8b70ce10feaccfc96a2a6.png"},96938:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/1-27a269d360e9ee05b1dd696eeb0aa8e4.png"},27521:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/2-6e56482ef5f497868040295fe7edff23.png"}}]);