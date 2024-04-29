"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[45686],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function g(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):g(g({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),y=r,m=u["".concat(i,".").concat(y)]||u[y]||s[y]||l;return a?t.createElement(m,g(g({ref:n},c),{},{components:a})):t.createElement(m,g({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:r,g[1]=o;for(var p=2;p<l;p++)g[p]=a[p];return t.createElement.apply(null,g)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},39910:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={},g="Apache SeaTunnel \u4e0e\u8ba1\u7b97\u5f15\u64ce\u7684\u89e3\u8026\u4e4b\u9053\uff0c\u91cd\u6784API\u6211\u4eec\u505a\u4e86\u4e9b\u4ec0\u4e48",o={permalink:"/zh-CN/blog/2022/05/31/engine",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-05-31-engine.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-05-31-engine.md",title:"Apache SeaTunnel \u4e0e\u8ba1\u7b97\u5f15\u64ce\u7684\u89e3\u8026\u4e4b\u9053\uff0c\u91cd\u6784API\u6211\u4eec\u505a\u4e86\u4e9b\u4ec0\u4e48",description:"Apache SeaTunnel (Incubating) \u4e0e Apache Inlong (Incubating) \u76845\u6708\u8054\u5408Meetup\u4e2d\uff0c\u7b2c\u4e8c\u4f4d\u5206\u4eab\u7684\u5609\u5bbe\u662f\u6765\u81ea\u767d\u9cb8\u5f00\u6e90\u7684\u9ad8\u7ea7\u5de5\u7a0b\u5e08\u674e\u5b97\u6587\u3002\u5728\u4f7f\u7528Apache SeaTunnel (Incubating) \u7684\u8fc7\u7a0b\u4e2d\uff0c\u4ed6\u53d1\u73b0\u4e86 Apache SeaTunnel (Incubating) \u5b58\u5728\u7684\u56db\u5927\u95ee\u9898\uff1aConnector\u5b9e\u73b0\u6b21\u6570\u591a\u3001\u53c2\u6570\u4e0d\u7edf\u4e00\u3001\u96be\u4ee5\u652f\u6301\u591a\u4e2a\u7248\u672c\u7684\u5f15\u64ce\u4ee5\u53ca\u5f15\u64ce\u5347\u7ea7\u96be\u7684\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u7684\u96be\u9898\uff0c\u674e\u5b97\u6587\u5c06\u76ee\u6807\u653e\u5728\u5c06Apache SeaTunnel (Incubating)\u4e0e\u8ba1\u7b97\u5f15\u64ce\u8fdb\u884c\u89e3\u8026\uff0c\u91cd\u6784\u5176\u4e2dSource\u4e0eSink API\uff0c\u5b9e\u73b0\u6539\u826f\u4e86\u5f00\u53d1\u4f53\u9a8c\u3002",date:"2022-05-31T00:00:00.000Z",formattedDate:"2022\u5e745\u670831\u65e5",tags:[],readingTime:15.505,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Upcoming API Connector Development Analysis",permalink:"/zh-CN/blog/Upcoming API Connector Development Analysis"},nextItem:{title:"\u767e\u4ebf\u7ea7\u6570\u636e\u540c\u6b65\uff0c\u5982\u4f55\u57fa\u4e8e SeaTunnel \u7684 ClickHouse \u5b9e\u73b0\uff1f",permalink:"/zh-CN/blog/2022/05/10/ClickHouse"}},i={authorsImageUrls:[]},p=[{value:"<strong>01</strong> \u91cd\u6784\u7684\u80cc\u666f\u4e0e\u52a8\u673a",id:"01-\u91cd\u6784\u7684\u80cc\u666f\u4e0e\u52a8\u673a",level:2},{value:"01 Apache SeaTunnel(Incubating)\u4e0e\u5f15\u64ce\u8026\u5408",id:"01-apache-seatunnelincubating\u4e0e\u5f15\u64ce\u8026\u5408",level:3},{value:"<strong>02</strong> Apache SeaTunnel(Incubating)\u4e0e\u5f15\u64ce\u89e3\u8026",id:"02-apache-seatunnelincubating\u4e0e\u5f15\u64ce\u89e3\u8026",level:2},{value:"<strong>03</strong> Apache SeaTunnel(Incubating)\u91cd\u6784\u6574\u4f53\u7684\u8bbe\u8ba1",id:"03-apache-seatunnelincubating\u91cd\u6784\u6574\u4f53\u7684\u8bbe\u8ba1",level:2},{value:"<strong>04</strong> Source API",id:"04-source-api",level:2},{value:"<strong>\u5982\u4f55\u9002\u914dSpark\u548cFlink\u5f15\u64ce</strong>",id:"\u5982\u4f55\u9002\u914dspark\u548cflink\u5f15\u64ce",level:3},{value:"<strong>05</strong> Sink API",id:"05-sink-api",level:2}],c={toc:p},u="wrapper";function s(e){let{components:n,...l}=e;return(0,r.yg)(u,(0,t.A)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(3073).A,width:"1920",height:"1316"})),(0,r.yg)("p",null,"Apache SeaTunnel (Incubating) \u4e0e Apache Inlong (Incubating) \u76845\u6708\u8054\u5408Meetup\u4e2d\uff0c\u7b2c\u4e8c\u4f4d\u5206\u4eab\u7684\u5609\u5bbe\u662f\u6765\u81ea\u767d\u9cb8\u5f00\u6e90\u7684\u9ad8\u7ea7\u5de5\u7a0b\u5e08\u674e\u5b97\u6587\u3002\u5728\u4f7f\u7528Apache SeaTunnel (Incubating) \u7684\u8fc7\u7a0b\u4e2d\uff0c\u4ed6\u53d1\u73b0\u4e86 Apache SeaTunnel (Incubating) \u5b58\u5728\u7684\u56db\u5927\u95ee\u9898\uff1aConnector\u5b9e\u73b0\u6b21\u6570\u591a\u3001\u53c2\u6570\u4e0d\u7edf\u4e00\u3001\u96be\u4ee5\u652f\u6301\u591a\u4e2a\u7248\u672c\u7684\u5f15\u64ce\u4ee5\u53ca\u5f15\u64ce\u5347\u7ea7\u96be\u7684\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u7684\u96be\u9898\uff0c\u674e\u5b97\u6587\u5c06\u76ee\u6807\u653e\u5728\u5c06Apache SeaTunnel (Incubating)\u4e0e\u8ba1\u7b97\u5f15\u64ce\u8fdb\u884c\u89e3\u8026\uff0c\u91cd\u6784\u5176\u4e2dSource\u4e0eSink API\uff0c\u5b9e\u73b0\u6539\u826f\u4e86\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,r.yg)("p",null,"\u672c\u6b21\u6f14\u8bb2\u4e3b\u8981\u5305\u542b\u56db\u4e2a\u90e8\u5206\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Apache SeaTunnel (Incubating)",(0,r.yg)("strong",{parentName:"li"},"\u91cd\u6784\u7684\u80cc\u666f\u548c\u52a8\u673a")),(0,r.yg)("li",{parentName:"ol"},"Apache SeaTunnel (Incubating)",(0,r.yg)("strong",{parentName:"li"},"\u91cd\u6784\u7684\u76ee\u6807")),(0,r.yg)("li",{parentName:"ol"},"Apache SeaTunnel (Incubating)",(0,r.yg)("strong",{parentName:"li"},"\u91cd\u6784\u6574\u4f53\u7684\u8bbe\u8ba1")),(0,r.yg)("li",{parentName:"ol"},"Apache SeaTunnel (Incubating) ",(0,r.yg)("strong",{parentName:"li"},"Source API\u7684\u8bbe\u8ba1")),(0,r.yg)("li",{parentName:"ol"},"Apache SeaTunnel (Incubating) ",(0,r.yg)("strong",{parentName:"li"},"Sink API\u7684\u8bbe\u8ba1"))),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(25028).A,width:"1440",height:"810"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u674e\u5b97\u6587")),(0,r.yg)("p",null,"\u767d\u9cb8\u5f00\u6e90 \u9ad8\u7ea7\u5de5\u7a0b\u5e08"),(0,r.yg)("p",null,"Apache SeaTunnel(Incubating)"),(0,r.yg)("p",null,"& Flink Contributor, Flink CDC & Debezium Contributor"),(0,r.yg)("h2",{id:"01-\u91cd\u6784\u7684\u80cc\u666f\u4e0e\u52a8\u673a"},(0,r.yg)("strong",{parentName:"h2"},"01")," \u91cd\u6784\u7684\u80cc\u666f\u4e0e\u52a8\u673a"),(0,r.yg)("h3",{id:"01-apache-seatunnelincubating\u4e0e\u5f15\u64ce\u8026\u5408"},"01 Apache SeaTunnel(Incubating)\u4e0e\u5f15\u64ce\u8026\u5408"),(0,r.yg)("p",null,"\u7528\u8fc7Apache SeaTunnel (Incubating) \u7684\u5c0f\u4f19\u4f34\u6216\u8005\u5f00\u53d1\u8005\u5e94\u8be5\u77e5\u9053\uff0c\u76ee\u524dApache SeaTunnel (Incubating) \u4e0e\u5f15\u64ce\u5b8c\u5168\u8026\u5408\uff0c\u5b8c\u5168\u57fa\u4e8eSpark\u3001Flink\u5f00\u53d1\uff0c\u5176\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u53c2\u6570\u90fd\u57fa\u4e8eFlink\u3001Spark\u5f15\u64ce\u3002\u4ece\u8d21\u732e\u8005\u548c\u7528\u6237\u7684\u89d2\u5ea6\u51fa\u53d1\uff0c\u6211\u4eec\u80fd\u53d1\u73b0\u4e00\u4e9b\u95ee\u9898\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4ece\u8d21\u732e\u8005\u7684\u89d2\u5ea6"),"\uff1a\u53cd\u590d\u5b9e\u73b0Connector\uff0c\u6ca1\u6709\u6536\u83b7\u611f\uff1b\u6f5c\u5728\u8d21\u732e\u8005\u7531\u4e8e\u5f15\u64ce\u7248\u672c\u4e0d\u4e00\u81f4\u65e0\u6cd5\u8d21\u732e\u793e\u533a\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4ece\u7528\u6237\u7684\u89d2\u5ea6"),"\uff1a\u76ee\u524d\u5f88\u591a\u516c\u53f8\u91c7\u7528Lambda\u67b6\u6784\uff0c\u79bb\u7ebf\u4f5c\u4e1a\u4f7f\u7528Spark\uff0c\u5b9e\u65f6\u4f5c\u4e1a\u4f7f\u7528Flink\uff0c \u4f7f\u7528\u4e2d\u5c31\u4f1a\u53d1\u73b0SeaTunnel \u7684Connector\u53ef\u80fdSpark\u6709\uff0c\u4f46\u662fFlink\u6ca1\u6709\uff0c\u4ee5\u53ca\u4e24\u4e2a\u5f15\u64ce\u5bf9\u4e8e\u540c\u4e00\u5b58\u50a8\u5f15\u64ce\u7684Connector\u7684\u53c2\u6570\u4e5f\u4e0d\u7edf\u4e00\uff0c\u6709\u8f83\u9ad8\u7684\u4f7f\u7528\u6210\u672c\uff0c\u8131\u79bb\u4e86SeaTunnel\u7b80\u5355\u6613\u7528\u7684\u521d\u8877\uff1b\u8fd8\u6709\u7528\u6237\u63d0\u95ee\u8bf4\u76ee\u524d\u652f\u4e0d\u652f\u6301Flink\u76841.14\u7248\u672c\uff0c\u6309\u7167\u76ee\u524dSeaTunnel\u7684\u67b6\u6784\uff0c\u60f3\u8981\u652f\u6301Flink\u76841.14\u5c31\u5fc5\u987b\u629b\u5f03\u4e4b\u524d\u7684\u7248\u672c\uff0c\u56e0\u6b64\u8fd9\u4e5f\u4f1a\u5bf9\u4e4b\u524d\u7248\u672c\u7684\u7528\u6237\u9020\u6210\u5f88\u5927\u7684\u95ee\u9898\u3002"),(0,r.yg)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u4e0d\u7ba1\u662f\u505a\u5f15\u64ce\u5347\u7ea7\u6216\u8005\u652f\u6301\u66f4\u591a\u7684\u7248\u672c\u7684\u7528\u6237\u90fd\u5f88\u56f0\u96be\u3002"),(0,r.yg)("p",null,"\u53e6\u5916Spark\u548cFlink\u90fd\u91c7\u7528\u4e86Chandy-lamport\u7b97\u6cd5\u5b9e\u73b0\u7684Checkpoint\u5bb9\u9519\u673a\u5236\uff0c\u4e5f\u5728\u5185\u90e8\u8fdb\u884c\u4e86DataSet\u4e0eDataStream\u7684\u7edf\u4e00\uff0c\u4ee5\u6b64\u4e3a\u524d\u63d0\u6211\u4eec\u8ba4\u4e3a\u89e3\u8026\u662f\u53ef\u884c\u7684\u3002"),(0,r.yg)("h2",{id:"02-apache-seatunnelincubating\u4e0e\u5f15\u64ce\u89e3\u8026"},(0,r.yg)("strong",{parentName:"h2"},"02")," Apache SeaTunnel(Incubating)\u4e0e\u5f15\u64ce\u89e3\u8026"),(0,r.yg)("p",null,"\u56e0\u6b64\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u63d0\u51fa\u7684\u95ee\u9898\uff0c\u6211\u4eec\u6709\u4e86\u4ee5\u4e0b\u7684\u76ee\u6807\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Connector\u53ea\u5b9e\u73b0\u4e00\u6b21"),"\uff1a\u9488\u5bf9\u53c2\u6570\u4e0d\u7edf\u4e00\u3001Connector\u591a\u6b21\u5b9e\u73b0\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5e0c\u671b\u5b9e\u73b0\u4e00\u4e2a\u7edf\u4e00\u7684Source \u4e0eSink API;"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301\u591a\u4e2a\u7248\u672c\u7684Spark\u4e0eFlink\u5f15\u64ce"),"\uff1a\u5728Source\u4e0eSink API\u4e0a\u518d\u52a0\u5165\u7ffb\u8bd1\u5c42\u53bb\u652f\u6301\u591a\u4e2a\u7248\u672c\u4e0eSpark\u548cFlink\u5f15\u64ce\uff0c\u89e3\u8026\u540e\u8fd9\u4e2a\u4ee3\u4ef7\u4f1a\u5c0f\u5f88\u591a\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u660e\u786eSource\u7684\u5206\u7247\u5e76\u884c\u903b\u8f91\u548cSink\u7684\u63d0\u4ea4\u903b\u8f91"),"\uff1a\u6211\u4eec\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a\u826f\u597d\u7684API\u53bb\u652f\u6301Connector\u5f00\u53d1\uff1b"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301\u5b9e\u65f6\u573a\u666f\u4e0b\u7684\u6570\u636e\u5e93\u6574\u5e93\u540c\u6b65"),"\uff1a\u8fd9\u4e2a\u662f\u76ee\u524d\u5f88\u591a\u7528\u6237\u63d0\u5230",(0,r.yg)("strong",{parentName:"li"},"\u9700\u8981CDC"),"\u652f\u6301\u884d\u751f\u7684\u9700\u6c42\u3002\u6211\u4e4b\u524d\u53c2\u4e0e\u8fc7Flink CDC\u793e\u533a\uff0c\u5f53\u65f6\u6709\u8bb8\u591a\u7528\u6237\u63d0\u51fa\u5728CDC\u7684\u573a\u666f\u4e2d\uff0c\u5982\u679c\u76f4\u63a5\u4f7f\u7528Flink CDC\u7684\u8bdd\u4f1a\u5bfc\u81f4\u6bcf\u4e00\u4e2a\u8868\u90fd\u6301\u6709\u4e00\u4e2a\u94fe\u63a5\uff0c\u5f53\u9047\u5230\u9700\u8981\u6574\u5e93\u540c\u6b65\u9700\u6c42\u65f6\uff0c\u5343\u5f20\u8868\u5c31\u6709\u5343\u4e2a\u94fe\u63a5\uff0c\u8be5\u60c5\u51b5\u65e0\u8bba\u662f\u5bf9\u4e8e\u6570\u636e\u5e93\u8fd8\u662fDBA\u90fd\u662f\u4e0d\u80fd\u63a5\u53d7\u7684\uff0c\u5982\u679c\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\u5f15\u5165Canal\u3001Debezium\u7b49\u7ec4\u4ef6\uff0c\u4f7f\u7528\u5176\u62c9\u53d6\u589e\u91cf\u6570\u636e\u5230Kafka\u7b49MQ\u505a\u4e2d\u95f4\u5b58\u50a8\uff0c\u518d\u4f7f\u7528Flink SQL\u8fdb\u884c\u540c\u6b65\uff0c\u8fd9\u5b9e\u9645\u5df2\u7ecf\u8fdd\u80cc\u4e86Flink CDC\u6700\u65e9\u51cf\u5c11\u94fe\u8def\u7684\u60f3\u6cd5\uff0c\u4f46\u662fFlink CDC\u7684\u5b9a\u4f4d\u53ea\u662f\u4e00\u4e2aConnector\uff0c\u65e0\u6cd5\u505a\u5168\u94fe\u8def\u7684\u9700\u6c42\uff0c\u6240\u4ee5\u8be5proposal\u5728Flink CDC\u793e\u533a\u4e2d\u6ca1\u6709\u88ab\u63d0\u51fa\uff0c\u6211\u4eec\u501f\u7740\u672c\u6b21\u91cd\u6784\uff0c\u5c06proposa\u63d0\u4ea4\u5230\u4e86SeaTunnel\u793e\u533a\u4e2d\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301\u5143\u4fe1\u606f\u7684\u81ea\u52a8\u53d1\u73b0\u4e0e\u5b58\u50a8"),"\uff1a\u8fd9\u4e00\u90e8\u5206\u7528\u6237\u5e94\u8be5\u6709\u6240\u4f53\u9a8c\uff0c\u5982Kafka\u8fd9\u7c7b\u5b58\u50a8\u5f15\u64ce\uff0c\u6ca1\u6709\u8bb0\u5f55\u6570\u636e\u7ed3\u6784\u7684\u529f\u80fd\uff0c\u4f46\u6211\u4eec\u5728\u8bfb\u53d6\u6570\u636e\u65f6\u53c8\u5fc5\u987b\u662f\u7ed3\u6784\u5316\u7684\uff0c\u5bfc\u81f4\u6bcf\u6b21\u8bfb\u53d6\u4e00\u4e2atopic\u4e4b\u524d\uff0c\u7528\u6237\u90fd\u5fc5\u987b\u5b9a\u4e49topic\u7684\u7ed3\u6784\u5316\u6570\u636e\u7c7b\u578b\uff0c\u6211\u4eec\u5e0c\u671b\u505a\u5230\u7528\u6237\u53ea\u9700\u8981\u5b8c\u6210\u4e00\u6b21\u914d\u7f6e\uff0c\u51cf\u5c11\u91cd\u590d\u7684\u64cd\u4f5c\u3002")),(0,r.yg)("p",null,"\u53ef\u80fd\u4e5f\u6709\u540c\u5b66\u6709\u7591\u60d1\u4e3a\u4ec0\u4e48\u6211\u4eec\u4e0d\u76f4\u63a5\u4f7f\u7528Apache Beam\uff0cBeam\u7684Source\u5206\u4e3aBOUNDED\u4e0eUNBOUNDED\uff0c\u4e5f\u5c31\u662f\u9700\u8981\u5b9e\u73b0\u4e24\u904d\uff0c\u5e76\u4e14\u6709\u4e9bSource\u4e0eSink\u7684\u7279\u6027\u4e5f\u4e0d\u652f\u6301\uff0c\u5177\u4f53\u6240\u9700\u7684\u7279\u6027\u5728\u540e\u9762\u4f1a\u63d0\u5230\uff1b"),(0,r.yg)("h2",{id:"03-apache-seatunnelincubating\u91cd\u6784\u6574\u4f53\u7684\u8bbe\u8ba1"},(0,r.yg)("strong",{parentName:"h2"},"03")," Apache SeaTunnel(Incubating)\u91cd\u6784\u6574\u4f53\u7684\u8bbe\u8ba1"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(25028).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"Apache SeaTunnel(Incubating) API\u603b\u4f53\u7ed3\u6784\u7684\u8bbe\u8ba1\u5982\u4e0a\u56fe\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Source & Sink API"),"\uff1a\u6570\u636e\u96c6\u6210\u7684\u6838\u5fc3API\u4e4b\u4e00\uff0c\u660e\u786eSource\u7684\u5206\u7247\u5e76\u884c\u903b\u8f91\u548cSink\u7684\u63d0\u4ea4\u903b\u8f91\uff0c\u7528\u4e8e\u5b9e\u73b0Connector\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Engine API"),"\uff1a"),(0,r.yg)("p",null,"Translation: \u7ffb\u8bd1\u5c42\uff0c\u7528\u4e8e\u5c06SeaTunnel\u7684Souce\u4e0eSink API\u7ffb\u8bd1\u6210\u5f15\u64ce\u5185\u90e8\u53ef\u4ee5\u8fd0\u884c\u7684Connector\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Execution"),"\uff1a\u6267\u884c\u903b\u8f91\uff0c\u7528\u4e8e\u5b9a\u4e49Source\u3001Transform\u3001Sink\u7b49\u64cd\u4f5c\u5728\u5f15\u64ce\u5185\u90e8\u7684\u6267\u884c\u903b\u8f91\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Table API"),"\uff1a"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Table SPI"),"\uff1a\u4e3b\u8981\u7528\u4e8e\u4ee5SPI\u7684\u65b9\u5f0f\u66b4\u9732Source\u4e0eSink\u63a5\u53e3\uff0c\u5e76\u660e\u786eConnector\u7684\u5fc5\u586b\u4e0e\u53ef\u9009\u53c2\u6570\u7b49\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"DataType"),"\uff1aSeaTunnel\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u9694\u79bb\u5f15\u64ce\uff0c\u58f0\u660eTable Schema\u7b49\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Catalog"),"\uff1a\u7528\u4e8e\u83b7\u53d6Table Scheme\u3001Options\u7b49\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Catalog Storage"),": \u7528\u4e8e\u5b58\u50a8\u7528\u6237\u5b9a\u4e49Kafka\u7b49\u975e\u7ed3\u6784\u5316\u5f15\u64ce\u7684Table Scheme\u7b49\uff1b"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(25075).A,width:"1440",height:"810"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4ece\u4e0a\u56fe\u662f\u6211\u4eec\u73b0\u5728\u8bbe\u60f3\u7684\u6267\u884c\u6d41\u7a0b"),"\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4ece\u914d\u7f6e\u6587\u4ef6\u6216UI\u7b49\u65b9\u5f0f\u83b7\u53d6\u4efb\u52a1\u53c2\u6570\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u901a\u8fc7\u53c2\u6570\u4eceCatalog\u4e2d\u89e3\u6790\u5f97\u5230Table Schema\u3001Option\u7b49\u4fe1\u606f\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u4ee5SPI\u65b9\u5f0f\u62c9\u8d77SeaTunnel\u7684Connector\uff0c\u5e76\u6ce8\u5165Table\u4fe1\u606f\u7b49\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u5c06SeaTunnel\u7684Connector\u7ffb\u8bd1\u4e3a\u5f15\u64ce\u5185\u90e8\u7684Connector\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c\u5f15\u64ce\u7684\u4f5c\u4e1a\u903b\u8f91\uff0c\u56fe\u4e2d\u7684\u591a\u8868\u5206\u53d1\u76ee\u524d\u53ea\u5b58\u5728CDC\u6574\u5e93\u540c\u6b65\u573a\u666f\u4e0b\uff0c\u5176\u4ed6Connector\u90fd\u662f\u5355\u8868\uff0c\u4e0d\u9700\u8981\u5206\u53d1\u903b\u8f91\uff1b")),(0,r.yg)("p",null,"\u4ece\u4ee5\u4e0a\u53ef\u4ee5\u770b\u51fa\uff0c\u6700\u96be\u7684\u90e8\u5206\u662f",(0,r.yg)("strong",{parentName:"p"},"\u5982\u4f55\u5c06Apache SeaTunnel(Incubating) \u7684Source\u548cSink\u7ffb\u8bd1\u6210\u5f15\u64ce\u5185\u90e8\u7684Source\u548cSink\u3002")),(0,r.yg)("p",null,"\u5f53\u4e0b\u8bb8\u591a\u7528\u6237\u4e0d\u4ec5\u628aApache SeaTunnel (Incubating) \u5f53\u505a\u4e00\u4e2a\u6570\u636e\u96c6\u6210\u65b9\u5411\u7684\u5de5\u5177\uff0c\u4e5f\u5f53\u505a\u6570\u4ed3\u65b9\u5411\u7684\u5de5\u5177\uff0c\u4f1a\u4f7f\u7528\u5f88\u591aSpark\u548cFlink\u7684SQL\uff0c\u6211\u4eec\u76ee\u524d\u5e0c\u671b\u80fd\u591f\u4fdd\u7559\u8fd9\u6837\u7684SQL\u80fd\u529b\uff0c\u8ba9\u7528\u6237\u5b9e\u73b0\u65e0\u7f1d\u5347\u7ea7\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(53462).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"\u6839\u636e\u6211\u4eec\u7684\u8c03\u7814\uff0c\u5982\u4e0a\u56fe\uff0c\u662f\u5bf9Source\u4e0eSink\u7684\u7406\u60f3\u6267\u884c\u903b\u8f91\uff0c\u7531\u4e8eSeaTunnel\u4ee5WaterDrop\u5b75\u5316\uff0c\u6240\u4ee5\u56fe\u4e0a\u7684\u672f\u8bed\u504f\u5411Spark\uff1b"),(0,r.yg)("p",null,"\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u5728Driver\u4e0a\u53ef\u4ee5\u8fd0\u884cSource\u548cSink\u7684\u534f\u8c03\u5668\uff0c\u7136\u540eWorker\u4e0a\u8fd0\u884cSource\u7684Reader\u548cSink\u7684Writer\u3002\u5728Source\u534f\u8c03\u5668\u65b9\u9762\uff0c\u6211\u4eec\u5e0c\u671b\u5b83\u80fd\u652f\u6301\u51e0\u4e2a\u80fd\u529b\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4e00\u3001\u662f\u6570\u636e\u7684\u5206\u7247\u903b\u8f91"),"\uff0c\u53ef\u4ee5\u5c06\u5206\u7247\u52a8\u6001\u6dfb\u52a0\u5230Reader\u4e2d\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4e8c\u3001\u662f\u53ef\u4ee5\u652f\u6301Reader\u7684\u534f\u8c03"),"\u3002SourceReader\u7528\u4e8e\u8bfb\u53d6\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u53d1\u9001\u5230\u5f15\u64ce\u4e2d\u6d41\u8f6c\uff0c\u6700\u7ec8\u6d41\u8f6c\u5230Source Writer\u4e2d\u8fdb\u884c\u6570\u636e\u5199\u5165\uff0c\u540c\u65f6Writer\u53ef\u4ee5\u652f\u6301\u4e8c\u9636\u6bb5\u4e8b\u52a1\u63d0\u4ea4\uff0c\u5e76\u7531Sink\u7684\u534f\u8c03\u5668\u652f\u6301Iceberg\u7b49Connector\u7684\u805a\u5408\u63d0\u4ea4\u9700\u6c42\uff1b"),(0,r.yg)("h2",{id:"04-source-api"},(0,r.yg)("strong",{parentName:"h2"},"04")," Source API"),(0,r.yg)("p",null,"\u901a\u8fc7\u6211\u4eec\u7684\u8c03\u7814\uff0c\u53d1\u73b0Source\u6240\u9700\u8981\u7684\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u7edf\u4e00\u79bb\u7ebf\u548c\u5b9e\u65f6API"),"\uff1aSource\u53ea\u5b9e\u73b0\u4e00\u6b21\uff0c\u540c\u65f6\u652f\u6301\u79bb\u7ebf\u548c\u5b9e\u65f6\uff1b"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u80fd\u591f\u652f\u6301\u5e76\u884c\u8bfb\u53d6"),"\uff1a\u6bd4\u5982Kafka\u6bcf\u4e00\u4e2a\u5206\u533a\u90fd\u751f\u6210\u4e00\u4e2a\u7684\u8bfb\u53d6\u5668\uff0c\u5e76\u884c\u7684\u6267\u884c\uff1b"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301\u52a8\u6001\u6dfb\u52a0\u5206\u7247"),"\uff1a\u6bd4\u5982Kafka\u5b9a\u4e8e\u4e00\u4e2atopic\u6b63\u5219\uff0c\u7531\u4e8e\u4e1a\u52a1\u91cf\u7684\u9700\u6c42\uff0c\u9700\u8981\u65b0\u589e\u4e00\u4e2atopic\uff0c\u8be5Source API\u53ef\u4ee5\u652f\u6301\u6211\u4eec\u52a8\u6001\u6dfb\u52a0\u5230\u4f5c\u4e1a\u4e2d\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301\u534f\u8c03\u8bfb\u53d6\u5668\u7684\u5de5\u4f5c"),"\uff1a\u8fd9\u4e2a\u76ee\u524d\u53ea\u53d1\u73b0\u5728CDC\u8fd9\u79cdConnector\u9700\u8981\u652f\u6301\u3002CDC\u76ee\u524d\u90fd\u662f\u57fa\u4e8eNetfilx\u7684DBlog\u5e76\u884c\u7b97\u6cd5\u53bb\u652f\u6301\uff0c\u8be5\u60c5\u51b5\u5728\u5168\u91cf\u540c\u6b65\u548c\u589e\u91cf\u540c\u6b65\u4e24\u4e2a\u9636\u6bb5\u7684\u5207\u6362\u65f6\u9700\u8981\u534f\u8c03\u8bfb\u53d6\u5668\u7684\u5de5\u4f5c\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u652f\u6301\u5355\u4e2a\u8bfb\u53d6\u5668\u5904\u7406\u591a\u5f20\u8868"),"\uff1a\u5373\u7531\u524d\u9762\u63d0\u5230\u7684\u652f\u6301\u5b9e\u65f6\u573a\u666f\u4e0b\u7684\u6570\u636e\u5e93\u6574\u5e93\u540c\u6b65\u9700\u6c42\uff1b")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(10333).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"\u5bf9\u5e94\u4ee5\u4e0a\u9700\u6c42\uff0c\u6211\u4eec\u505a\u51fa\u4e86\u57fa\u7840\u7684API\uff0c\u5982\u4e0a\u56fe\uff0c\u76ee\u524d\u4ee3\u7801\u4ee5\u63d0\u4ea4\u5230Apache SeaTunnel(Incubating)\u7684\u793e\u533a\u4e2dapi-draft\u5206\u652f\uff0c\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u67e5\u770b\u4ee3\u7801\u8be6\u7ec6\u4e86\u89e3\u3002"),(0,r.yg)("h3",{id:"\u5982\u4f55\u9002\u914dspark\u548cflink\u5f15\u64ce"},(0,r.yg)("strong",{parentName:"h3"},"\u5982\u4f55\u9002\u914dSpark\u548cFlink\u5f15\u64ce")),(0,r.yg)("p",null,"Flink\u4e0eSpark\u90fd\u5728\u540e\u9762\u7edf\u4e00\u4e86DataSet\u4e0eDataStream API\uff0c\u5373\u80fd\u591f\u652f\u6301\u524d\u4e24\u4e2a\u7279\u6027\uff0c\u90a3\u4e48\u5bf9\u4e8e\u5269\u4e0b\u76843\u4e2a\u7279\u6027\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u4f55\u652f\u6301\u52a8\u6001\u6dfb\u52a0\u5206\u7247\uff1f"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u4f55\u652f\u6301\u534f\u8c03\u8bfb\u53d6\u5668\uff1f"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u4f55\u652f\u6301\u5355\u4e2a\u8bfb\u53d6\u5668\u5904\u7406\u591a\u5f20\u8868\uff1f")),(0,r.yg)("p",null,"\u5e26\u7740\u95ee\u9898\uff0c\u8fdb\u5165\u76ee\u524d\u7684\u8bbe\u8ba1\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(84768).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"\u6211\u4eec\u53d1\u73b0\u9664\u4e86",(0,r.yg)("strong",{parentName:"p"},"CDC"),"\u4e4b\u5916\uff0c\u5176\u4ed6Connector\u662f\u4e0d\u9700\u8981\u534f\u8c03\u5668\u7684\uff0c\u9488\u5bf9\u4e0d\u9700\u8981\u534f\u8c03\u5668\u7684\uff0c\u6211\u4eec\u4f1a\u6709\u4e00\u4e2a\u652f\u6301\u5e76\u884c\u7684Source\uff0c\u5e76\u8fdb\u884c\u5f15\u64ce\u7ffb\u8bd1\u3002"),(0,r.yg)("p",null,"\u5982\u4e0a\u56fe\u4e2d\u5de6\u8fb9\u662f\u4e00\u4e2a",(0,r.yg)("strong",{parentName:"p"},"\u5206\u7247\u7684enumerator"),"\uff0c\u53ef\u4ee5\u5217\u4e3esource\u9700\u8981\u54ea\u4e9b\u5206\u7247\uff0c\u6709\u54ea\u4e9b\u5206\u7247\uff0c\u5b9e\u65f6\u8fdb\u884c\u5206\u7247\u7684\u679a\u4e3e\uff0c\u968f\u540e\u5c06\u6bcf\u4e2a\u5206\u7247\u5206\u53d1\u5230\u771f\u6b63\u7684\u6570\u636e\u8bfb\u53d6\u6a21\u5757SourceReader\u4e2d\u3002",(0,r.yg)("strong",{parentName:"p"},"\u5bf9\u4e8e\u79bb\u7ebf\u4e0e\u5b9e\u65f6\u4f5c\u4e1a\u7684\u533a\u5206\u4f7f\u7528Boundedness\u6807\u8bb0"),"\uff0cConnector\u53ef\u4ee5\u5728\u5206\u7247\u4e2d\u6807\u8bb0\u662f\u5426\u6709\u505c\u6b62\u7684Offset\uff0c\u5982Kafka\u53ef\u4ee5\u652f\u6301\u5b9e\u65f6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u652f\u6301\u79bb\u7ebf\u3002ParallelSource\u53ef\u4ee5\u5728\u5f15\u64ce\u8bbe\u7f6e\u4efb\u610f\u5e76\u884c\u5ea6\uff0c\u4ee5\u652f\u6301\u5e76\u884c\u8bfb\u53d6\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(67759).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"\u5728\u9700\u8981\u534f\u8c03\u5668\u7684\u573a\u666f\uff0c\u5982\u4e0a\u56fe\uff0c\u9700\u8981\u5728Reader\u548cEnumerator\u4e4b\u95f4\u8fdb\u884cEvent\u4f20\u8f93\uff0c",(0,r.yg)("strong",{parentName:"p"}," Enumerator"),"\u901a\u8fc7Reader\u53d1\u9001\u7684Event\u8fdb\u884c\u534f\u8c03\u5de5\u4f5c\u3002",(0,r.yg)("strong",{parentName:"p"},"Coordinated Source"),"\u9700\u8981\u5728\u5f15\u64ce\u5c42\u9762\u4fdd\u8bc1\u5355\u5e76\u884c\u5ea6\uff0c\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\uff1b\u5f53\u7136\u8fd9\u4e5f\u4e0d\u80fd\u826f\u597d\u7684\u4f7f\u7528\u5f15\u64ce\u7684\u5185\u5b58\u7ba1\u7406\u673a\u5236\uff0c\u4f46\u662f\u53d6\u820d\u662f\u5fc5\u8981\u7684\uff1b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5bf9\u4e8e\u6700\u540e\u4e00\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5982\u4f55\u652f\u6301\u5355\u4e2a\u8bfb\u53d6\u5668\u5904\u7406\u591a\u5f20\u8868\u3002\u8fd9\u4f1a\u6d89\u53ca\u5230Table API\u5c42"),"\uff0c\u901a\u8fc7Catalog\u8bfb\u53d6\u5230\u4e86\u6240\u6709\u9700\u8981\u7684\u8868\u540e\uff0c\u6709\u4e9b\u8868\u53ef\u80fd\u5c5e\u4e8e\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u94fe\u63a5\u53bb\u8bfb\u53d6\uff0c\u6709\u4e9b\u53ef\u80fd\u9700\u8981\u5206\u5f00\uff0c\u8fd9\u4e2a\u4f9d\u8d56\u4e8eSource\u662f\u600e\u4e48\u5b9e\u73b0\u7684\u3002\u57fa\u4e8e\u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u9700\u6c42\uff0c\u6211\u4eec\u60f3\u8981\u51cf\u5c11\u666e\u901a\u5f00\u53d1\u8005\u7684\u96be\u5ea6\uff0c\u5728Table API\u8fd9\u4e00\u5c42\uff0c\u6211\u4eec\u4f1a\u63d0\u4f9b\u4e00\u4e2aSupportMultipleTable\u63a5\u53e3\uff0c\u7528\u4e8e\u58f0\u660eSource\u652f\u6301\u591a\u8868\u7684\u8bfb\u53d6\u3002Source\u5728\u5b9e\u73b0\u65f6\uff0c\u8981\u6839\u636e\u591a\u5f20\u8868\u5b9e\u73b0\u5bf9\u5e94\u7684\u53cd\u5e8f\u5217\u5316\u5668\u3002\u9488\u5bf9\u884d\u751f\u7684\u591a\u8868\u6570\u636e\u5982\u4f55\u5206\u79bb\uff0cFlink\u5c06\u91c7\u7528Side Output\u673a\u5236\uff0cSpark\u9884\u60f3\u4f7f\u7528Filter\u6216Partition\u673a\u5236\u3002"),(0,r.yg)("h2",{id:"05-sink-api"},(0,r.yg)("strong",{parentName:"h2"},"05")," Sink API"),(0,r.yg)("p",null,"\u76ee\u524dSink\u6240\u9700\u7684\u7279\u6027\u5e76\u4e0d\u662f\u5f88\u591a\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u7ecf\u8fc7\u8c03\u7814\u76ee\u524d\u53d1\u73b0\u6709\u4e09\u4e2a\u9700\u6c42"),"\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5e42\u7b49\u5199\u5165\uff0c\u8fd9\u4e2a\u4e0d\u9700\u8981\u5199\u4ee3\u7801\uff0c\u4e3b\u8981\u770b\u5b58\u50a8\u5f15\u64ce\u662f\u5426\u80fd\u652f\u6301\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u4e3b\u6d41\u662f\u4e8c\u9636\u6bb5\u63d0\u4ea4\uff0c\u5982Kafka\u90fd\u662f\u53ef\u4ee5\u652f\u6301\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u805a\u5408\u63d0\u4ea4\uff0c\u5bf9\u4e8eIceberg\u3001hoodie\u7b49\u5b58\u50a8\u5f15\u64ce\u800c\u8a00\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u6709\u5c0f\u6587\u4ef6\u95ee\u9898\uff0c\u4e8e\u662f\u671f\u671b\u5c06\u8fd9\u4e9b\u6587\u4ef6\u805a\u5408\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u518d\u8fdb\u884c\u63d0\u4ea4\u3002")),(0,r.yg)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u4e09\u4e2a\u9700\u6c42\uff0c\u6211\u4eec\u6709\u5bf9\u5e94\u7684",(0,r.yg)("strong",{parentName:"p"},"\u4e09\u4e2aAPI"),"\uff0c\u5206\u522b\u662f",(0,r.yg)("strong",{parentName:"p"},"SinkWriter\u3001SinkCommitter\u3001SinkAggregated Committer"),"\u3002SinkWriter\u662f\u4f5c\u4e3a\u57fa\u7840\u5199\u5165\uff0c\u53ef\u80fd\u662f\u5e42\u7b49\u5199\u5165\uff0c\u4e5f\u53ef\u80fd\u4e0d\u662f\u3002SinkCommitter\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4\u3002SinkAggregatedCommitter\u652f\u6301\u805a\u5408\u63d0\u4ea4\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(91378).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"\u7406\u60f3\u72b6\u6001\u4e0b\uff0c",(0,r.yg)("strong",{parentName:"p"},"AggregatedCommitter"),"\u5355\u5e76\u884c\u7684\u5728Driver\u4e2d\u8fd0\u884c\uff0cWriter\u4e0eCommitter\u8fd0\u884c\u5728Worker\u4e2d\uff0c\u53ef\u80fd\u6709\u591a\u4e2a\u5e76\u884c\u5ea6\uff0c\u6bcf\u4e2a\u5e76\u884c\u5ea6\u90fd\u6709\u81ea\u5df1\u7684\u9884\u63d0\u4ea4\u5de5\u4f5c\uff0c\u7136\u540e\u628a\u81ea\u5df1\u63d0\u4ea4\u7684\u4fe1\u606f\u53d1\u9001\u7ed9Aggregated Committer\u518d\u8fdb\u884c\u805a\u5408\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u76ee\u524dSpark\u548cFlink\u7684\u9ad8\u7248\u672c\u90fd\u652f\u6301\u5728Driver"),"(Job Manager)\u8fd0\u884cAggregatedCommitter\uff0cworker(Job Manager)\u8fd0\u884cwriter\u548cCommitter\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(62185).A,width:"1440",height:"810"})),(0,r.yg)("p",null,"\u4f46\u662f\u5bf9\u4e8e",(0,r.yg)("strong",{parentName:"p"},"Flink\u4f4e\u7248\u672c"),"\uff0c\u65e0\u6cd5\u652f\u6301AggregatedCommitter\u5728JM\u4e2d\u8fd0\u884c\uff0c\u6211\u4eec\u4e5f\u8fdb\u884c\u7ffb\u8bd1\u9002\u914d\u7684\u8bbe\u8ba1\u3002Writer\u4e0eCommitter\u4f1a\u4f5c\u4e3a\u524d\u7f6e\u7684\u7b97\u5b50\uff0c\u4f7f\u7528Flink\u7684ProcessFunction\u8fdb\u884c\u5305\u88f9\uff0c\u652f\u6301\u5e76\u53d1\u7684\u9884\u63d0\u4ea4\u4e0e\u5199\u5165\u5de5\u4f5c\uff0c\u57fa\u4e8eFlink\u7684Checkpoint\u673a\u5236\u5b9e\u73b0\u4e8c\u9636\u6bb5\u63d0\u4ea4\uff0c\u8fd9\u4e5f\u662f\u76ee\u524dFlink\u7684\u5f88\u591aConnector\u76842PC\u5b9e\u73b0\u65b9\u5f0f\u3002\u8fd9\u4e2aProcessFunction\u4f1a\u5c06\u9884\u63d0\u4ea4\u4fe1\u606f\u53d1\u9001\u5230\u4e0b\u6e38\u7684Aggregated Committer\u4e2d\uff0cAggregated Committer\u53ef\u4ee5\u91c7\u7528SinkFunction\u6216Process Function\u7b49\u7b97\u5b50\u5305\u88f9\uff0c\u5f53\u7136\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u6211\u4eec\u9700\u8981\u4fdd\u8bc1AggregatedCommitter\u53ea\u4f1a\u542f\u52a8\u4e00\u4e2a\uff0c\u5373\u5355\u5e76\u884c\u5ea6"),"\uff0c\u5426\u5219\u805a\u5408\u63d0\u4ea4\u7684\u903b\u8f91\u5c31\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"),(0,r.yg)("p",null,"\u611f\u8c22\u5404\u4f4d\u7684\u89c2\u770b\uff0c\u5982\u679c\u5927\u5bb6\u5bf9\u5177\u4f53\u5b9e\u73b0\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u53bb Apache SeaTunnel (Incubating) \u7684\u793e\u533a\u67e5\u770b",(0,r.yg)("strong",{parentName:"p"},"api-draft"),"\u5206\u652f\u4ee3\u7801\uff0c\u8c22\u8c22\u5927\u5bb6\u3002"))}s.isMDXComponent=!0},3073:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/0-1b0b7ccac22c107239f10a37321c7719.jpg"},25028:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/1-cbc169e3bc121f1008b807103abe9fd8.jpg"},25075:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/2-507471aef3b2e7dc6ee4bc03188bc784.jpg"},53462:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/3-68113e215aa8e91a5d2469ccb37a3c22.jpg"},10333:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/4-ac907e3f8e305b9f6585d2171013a973.jpg"},84768:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/5-f743cf882b36bb3c383c66dec4bad95f.jpg"},67759:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/6-ef5d53449db28f4466c14827335d07a6.jpg"},91378:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/7-e9830d63f81f7139a7cd1d4d9b9f5e43.jpg"},62185:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/8-aa0537c76d15543b46623445ff00e490.jpg"}}]);