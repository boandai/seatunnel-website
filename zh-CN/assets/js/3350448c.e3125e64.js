"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[32833],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const o={slug:"During the joint Apache SeaTunnel & IoTDB Meetup on October 15,",title:"Mafengwo finally chose Apache SeaTunnel after analyzing these 9 points of how it works!",tags:["Meetup"]},s="Mafengwo finally chose Apache SeaTunnel after analyzing these 9 points of how it works!",r={permalink:"/zh-CN/blog/During the joint Apache SeaTunnel & IoTDB Meetup on October 15,",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-11-17-Mafengwo-finally-chose-Apache-SeaTunnel-after-analyzing-these-9-points-of-how-it-works.md",source:"@site/blog/2022-11-17-Mafengwo-finally-chose-Apache-SeaTunnel-after-analyzing-these-9-points-of-how-it-works.md",title:"Mafengwo finally chose Apache SeaTunnel after analyzing these 9 points of how it works!",description:"Bo Bi, data engineer at Mafengwo",date:"2022-11-17T00:00:00.000Z",formattedDate:"2022\u5e7411\u670817\u65e5",tags:[{label:"Meetup",permalink:"/zh-CN/blog/tags/meetup"}],readingTime:18.22,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"During the joint Apache SeaTunnel & IoTDB Meetup on October 15,",title:"Mafengwo finally chose Apache SeaTunnel after analyzing these 9 points of how it works!",tags:["Meetup"]},prevItem:{title:"SeaTunnel engine, designed for tens-of-billions data integration",permalink:"/zh-CN/blog/Apache SeaTunnel Committer | Zongwen Li"},nextItem:{title:"A tutorial to help you develop a SeaTunnel Connector hand-by-hand while avoiding pitfalls",permalink:"/zh-CN/blog/2022/09/20/A-tutorial-to-help-you develop-a-SeaTunnel-Connector-hand-by-hand-while-avoiding -pitfalls"}},l={authorsImageUrls:[]},c=[{value:"Introduction to the technical principle of SeaTunnel",id:"introduction-to-the-technical-principle-of-seatunnel",level:2},{value:"SeaTunnel Connector API Version V1 Architecture Breakdown",id:"seatunnel-connector-api-version-v1-architecture-breakdown",level:2},{value:"SeaTunnel Basic API",id:"seatunnel-basic-api",level:2},{value:"SeaTunnel Base API Implementation",id:"seatunnel-base-api-implementation",level:2},{value:"SeaTunnel Connector V1 API Architecture Summary",id:"seatunnel-connector-v1-api-architecture-summary",level:2},{value:"SeaTunnel Connector V2 API Architecture",id:"seatunnel-connector-v2-api-architecture",level:2},{value:"SeaTunnel V2 API Architecture",id:"seatunnel-v2-api-architecture",level:2},{value:"1.Table API",id:"1table-api",level:3},{value:"2. Source &amp; Sink API",id:"2-source--sink-api",level:3},{value:"3.Engine API",id:"3engine-api",level:3},{value:"SeaTunnel Connector V2 Source API",id:"seatunnel-connector-v2-source-api",level:2},{value:"SeaTunnel Connector V2 Sink API",id:"seatunnel-connector-v2-sink-api",level:2},{value:"Comparison of SeaTunnel V1 and V2 API processing flows",id:"comparison-of-seatunnel-v1-and-v2-api-processing-flows",level:2},{value:"Practice and reflections on our off-line development scheduling platform",id:"practice-and-reflections-on-our-off-line-development-scheduling-platform",level:2},{value:"Practice and reflections on our off-line development scheduling platform",id:"practice-and-reflections-on-our-off-line-development-scheduling-platform-1",level:3},{value:"Platform Capabilities",id:"platform-capabilities",level:2},{value:"The architecture of the platform",id:"the-architecture-of-the-platform",level:2},{value:"Open Data Sync Capability Scenarios",id:"open-data-sync-capability-scenarios",level:2},{value:"Outbound scenario: Hive data sync to StarRocks",id:"outbound-scenario-hive-data-sync-to-starrocks",level:2},{value:"How to get involved in community building",id:"how-to-get-involved-in-community-building",level:2},{value:"SeaTunnel Community Contribution",id:"seatunnel-community-contribution",level:3},{value:"How to get involved in community contributions quickly",id:"how-to-get-involved-in-community-contributions-quickly",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(23658).A,width:"720",height:"480"})),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(46679).A,width:"360",height:"309"}),"\nBo Bi, data engineer at Mafengwo"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"During the joint Apache SeaTunnel & IoTDB Meetup on October 15, Bo Bi, the data engineer at a leading Chinese travel-social e-commerce platform Mafengwo, introduced the basic principles of SeaTunnel and related enterprise practice thinking, the pain points and optimization thinking in typical scenarios of Mafengwo\u2019s big data development and scheduling platform, and shared his experience of participating in community contributions. We hope to help you understand SeaTunnel and the paths and skills of community building at the same time.")),(0,i.yg)("h2",{id:"introduction-to-the-technical-principle-of-seatunnel"},"Introduction to the technical principle of SeaTunnel"),(0,i.yg)("p",null,"SeaTunnel is a distributed, high-performance data integration platform for the synchronization and transformation of large volumes of data (offline and real-time)"),(0,i.yg)("p",null,"The diagram above shows the workflow of SeaTunnel, which in simple terms consists of 3 parts: input, transformation, and output; more complex data processing is just a combination of several actions."),(0,i.yg)("p",null,"In a synchronization scenario, such as importing Kafka to Elasticsearch, Kafka is the Source of the process and Elasticsearch is the Sink of the process."),(0,i.yg)("p",null,"If, during the import process, the field columns do not match the external data columns to be written and some column or type conversion is required, or if you need to join multiple data sources and then do some data widening, field expansion, etc., then you need to add some Transform in the process, corresponding to the middle part of the picture."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(96544).A,width:"660",height:"781"}),"\nThis shows that the core of SeaTunnel is the Source, Transform and Sink process definitions."),(0,i.yg)("p",null,"In Source we can define the data sources we need to read, in Sink, we can define the data pipeline and eventually write the external storage, and we can transform the data in between, either using SQL or custom functions."),(0,i.yg)("h2",{id:"seatunnel-connector-api-version-v1-architecture-breakdown"},"SeaTunnel Connector API Version V1 Architecture Breakdown"),(0,i.yg)("p",null,"For a mature component framework, there must be something unique about the design pattern of the API design implementation that makes the framework scalable."),(0,i.yg)("p",null,"The SeaTunnel architecture consists of three main parts."),(0,i.yg)("p",null,"1\u3001SeaTunnel Basic API."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"the implementation of the SeaTunnel base API.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"SeaTunnel\u2019s plug-in system."))),(0,i.yg)("h2",{id:"seatunnel-basic-api"},"SeaTunnel Basic API"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(14885).A,width:"720",height:"194"}),"\nThe above diagram shows the definition of the interface, the Plugin interface in SeaTunnel abstracts the various actions of data processing into a Plugin."),(0,i.yg)("p",null,"The five parts of the diagram below, Basesource, Basetransfform, Basesink, Runtimeenv, and Execution, all inherit from the Plugin interface.\n",(0,i.yg)("img",{src:n(72719).A,width:"720",height:"229"})),(0,i.yg)("p",null,"As a process definition plug-in, Source is responsible for reading data, Transform is responsible for transforming, Sink is responsible for writing and Runtimeenv is setting the base environment variables."),(0,i.yg)("p",null,"The overall SeaTunnel base API is shown below"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(69335).A,width:"720",height:"347"}),"\nExecution, the data flow builder used to build the entire data flow based on the first three, is also part of the base API"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(40910).A,width:"720",height:"192"})),(0,i.yg)("h2",{id:"seatunnel-base-api-implementation"},"SeaTunnel Base API Implementation"),(0,i.yg)("p",null,"Based on the previous basic APIs, SeaTunnel has been implemented in separate packages for different computing engines, currently the Spark API abstraction and the Flink API abstraction, which logically completes the process of building the data pipeline."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(72719).A,width:"720",height:"229"})),(0,i.yg)("p",null,"Due to space constraints, we will focus on Spark batch processing. Based on the wrapped implementation of the previous base Api, the first is that Base spark source implements Base source, base Spark transform implements Base transform and Base Spark sink implements Base sink."),(0,i.yg)("p",null,"The method definition uses Spark\u2019s Dataset as the carrier of the data, and all data processing is based on the Dataset, including reading, processing and exporting."),(0,i.yg)("p",null,"The SparkEnvironment, which internally encapsulates Spark\u2019s Sparksession in an Env, makes it easy for individual plugins to use."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(25490).A,width:"720",height:"350"})),(0,i.yg)("p",null,"The Spark batch process ends with SparkBatchExecution (the data stream builder), which is the core code snippet used to functionally build our data stream Pipeline, the most basic data stream on the left in the diagram below."),(0,i.yg)("p",null,"The user-based definition of each process component is also the configuration of Source Sink, Transform. More complex data flow logic can be implemented, such as multi-source Join, multi-pipeline processing, etc., all of which can be built through Execution."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(51830).A,width:"720",height:"405"})),(0,i.yg)("h2",{id:"seatunnel-connector-v1-api-architecture-summary"},"SeaTunnel Connector V1 API Architecture Summary"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(48709).A,width:"720",height:"405"}),"\nSeaTunnel\u2019s API consists of three main parts."),(0,i.yg)("p",null,"The first part is the SeaTunnel base API, which provides the basic abstract interfaces such as Source, Sink, Transform, and Plugin."),(0,i.yg)("p",null,"The second part is based on a set of interfaces Transform, Sink, Source, Runtime, and Execution provided by the SeaTunnel base API, which is wrapped and implemented on the Flink and Spark engines respectively, i.e. Spark engine API layer abstraction and Flink engine API layer abstraction."),(0,i.yg)("p",null,"Both Flink and Spark engines support stream and batch processing, so there are different ways to use streams/batches under the Flink API abstraction and Spark abstraction APIs, such as Flinkstream and Flinkbatch under the Flink abstraction API, and Sparkbatch and Sparkstreaming under the Spark abstraction API."),(0,i.yg)("p",null,"The third part is the plug-in system, based on Spark abstraction and Flink API abstraction, SeaTunnel engine implements rich connectors and processing plug-ins, while developers can also be based on different engine API abstractions, and extensions to achieve their own Plugin."),(0,i.yg)("p",null,"SeaTunnel Implementation Principle\nCurrently, SeaTunnel offers a variety of ways to use Flink, Spark, and FlinkSQL. Due to space limitations, we will introduce the execution principles of the Spark method."),(0,i.yg)("p",null,"First, the entry starts the command Start-seatunnel-spark.sh via the shell, which internally calls Sparkstarter\u2019s Class, which parses the parameters passed by the shell script, and also parses the Config file to determine which Connectors are defined in the Config file, such as Fake, Console, etc.\n",(0,i.yg)("img",{src:n(64676).A,width:"720",height:"405"}),"\nThen find the Connector path from the Connector plugin directory and stitch it into the Spark-submit launch command with \u2014 jar, so that the found Plugin jar package can be passed to the Spark cluster as a dependency."),(0,i.yg)("p",null,"For Connector plugins, all Spark Connectors are packaged in the plugin directory of the distribution (this directory is managed centrally)."),(0,i.yg)("p",null,"After Spark-submit is executed, the task is submitted to the Spark cluster, and the Main class of the Spark job\u2019s Driver builds the data flow Pipeline through the data flow builder Execution, combined with Souce, Sink, and Transform so that the whole chain is connected."),(0,i.yg)("h2",{id:"seatunnel-connector-v2-api-architecture"},"SeaTunnel Connector V2 API Architecture"),(0,i.yg)("p",null,"In the latest community release of SeaTunnel 2.2.0-beta, the refactoring of the Connectorapi, now known as the SeaTurnelV2 API, has been completed!"),(0,i.yg)("p",null,"Why do we need to reconfigure?"),(0,i.yg)("p",null,"As the Container is currently a strongly coupled engine, i.e. Flink and Spark API, if the Flink or Spark engine is upgraded, the Connector will also have to be adjusted, possibly with changes to parameters or interfaces."),(0,i.yg)("p",null,"This can lead to multiple implementations for different engines and inconsistent parameters to develop a new Connector. Therefore, the community has designed and implemented the V2 version of the API based on these pain points."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(37735).A,width:"720",height:"405"})),(0,i.yg)("h2",{id:"seatunnel-v2-api-architecture"},"SeaTunnel V2 API Architecture"),(0,i.yg)("p",null,"SeaTunnel V2 API Architecture"),(0,i.yg)("h3",{id:"1table-api"},"1.Table API"),(0,i.yg)("p",null,"\xb7DataType: defines SeaTunnel\u2019s data structure SeaTunnelRow, which is used to isolate the engine"),(0,i.yg)("p",null,"\xb7Catalog: used to obtain Table Scheme, Options, etc.."),(0,i.yg)("p",null,"\xb7Catalog Storage: used to store user-defined Table Schemes etc. for unstructured engines such as Kafka."),(0,i.yg)("p",null,"\xb7Table SPI: mainly used to expose the Source and Sink interfaces as an SPI"),(0,i.yg)("h3",{id:"2-source--sink-api"},"2. Source & Sink API"),(0,i.yg)("p",null,"Define the Connector\u2019s core programming interface for implementing the Connector"),(0,i.yg)("h3",{id:"3engine-api"},"3.Engine API"),(0,i.yg)("p",null,"\xb7Translation: The translation layer, which translates the Source and Sink APIs implemented by the Connector into a runnable API inside the engine."),(0,i.yg)("p",null,"\xb7Execution: Execution logic, used to define the execution logic of Source, Transform, Sink and other operations within the engine."),(0,i.yg)("p",null,"The Source & Sink API is the basis for the implementation of the connector and is very important for developers."),(0,i.yg)("p",null,"The design of the v2 Source & Sink API is highlighted below"),(0,i.yg)("h2",{id:"seatunnel-connector-v2-source-api"},"SeaTunnel Connector V2 Source API"),(0,i.yg)("p",null,"The current version of SeaTunnel\u2019s API design draws on some of Flink\u2019s design concepts, and the more core classes of the Source API are shown below."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(98947).A,width:"720",height:"405"}),"\n",(0,i.yg)("img",{src:n(14927).A,width:"720",height:"405"}),"\nThe core Source API interaction flow is shown above. In the case of concurrent reads, the enumerator SourceSplitEnumerator is required to split the task and send the SourceSplit down to the SourceReader, which receives the split and uses it to read the external data source."),(0,i.yg)("p",null,"In order to support breakpoints and Eos semantics, it is necessary to preserve and restore the state, for example by preserving the current Reader\u2019s Split consumption state and restoring it after a failure in each Reader through the Checkpoint state and Checkpoint mechanism, so that the data can be read from the place where it failed."),(0,i.yg)("h2",{id:"seatunnel-connector-v2-sink-api"},"SeaTunnel Connector V2 Sink API"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(18134).A,width:"720",height:"405"}),"\nThe overall Sink API interaction flow is shown in the diagram below. The SeaTunnel sink is currently designed to support distributed transactions, based on a two-stage transaction commit."),(0,i.yg)("p",null,"First SinkWriter continuously writes data to an external data source, then when the engine does a checkpoint, it triggers a first-stage commit."),(0,i.yg)("p",null,"SinkWriter needs to do a Prepare commit, which is the first stage of the commit."),(0,i.yg)("p",null,"The engine will determine if all the Writer's first stage succeeds, and if they all succeed, the engine will combine the Subtask\u2019s Commit info with the Commit method of the Committer to do the actual commit of the transaction and operate the database for the Commit, i.e. the second stage of the commit. This is the second stage of commit."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(12893).A,width:"570",height:"814"}),"\nFor the Kafka sink connector implementation, the first stage is to do a pre-commit by calling KafkaProducerSender.prepareCommit()."),(0,i.yg)("p",null,"The second commit is performed via Producer.commitTransaction();."),(0,i.yg)("p",null,"flush(); flushes the data from the Broker\u2019s system cache to disk."),(0,i.yg)("p",null,"Finally, it is worth noting!"),(0,i.yg)("p",null,"Both SinkCommitter and SinkAggregatedCommitter can perform a second stage commit to replace the Committer in the diagram. The difference is that SinkCommitter can only do a partial commit of a single Subtask\u2019s CommitInfo, which may be partially successful and partially unsuccessful, and cannot be handled globally. The difference is that the SinkCommitter can only do partial commits of a single Subtask\u2019s CommitInfo, which may be partially successful and partially unsuccessful."),(0,i.yg)("p",null,"SinkAggregatedCommitter is a single parallel, aggregating the CommitInfo of all Subtask, and can do the second stage commit as a whole, either all succeed or all fail, avoiding the problem of inconsistent status due to partial failure of the second stage."),(0,i.yg)("p",null,"It is therefore recommended that the SinkAggregatedCommitter be used in preference."),(0,i.yg)("h2",{id:"comparison-of-seatunnel-v1-and-v2-api-processing-flows"},"Comparison of SeaTunnel V1 and V2 API processing flows"),(0,i.yg)("p",null,"We can look at the changes before and after the V1 V2 upgrade from a data processing perspective, which is more intuitive, Spark batch processing as an example: SeaTunnel V1: The entire data processing process is based on the Spark dataset API, and the Connector and the compute engine are strongly coupled."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(78693).A,width:"720",height:"405"}),"\nSeaTunnel V2: Thanks to the work of the engine translator, the Connector API, and the SeaTunnelRow, the data source of the SeaTunnel internal data structures accessed through the Connector, are translated by the translation layer into a runnable Spark API and spark dataset that is recognized inside the engine during data transformation."),(0,i.yg)("p",null,"As data is written out, the Spark API and Spark dataset are translated through the translation layer into an executable connector API inside the SeaTunnel connector and a data source of internal SeaTunnel structures that can be used."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Overall, the addition of a translation layer at the API and compute engine layers decouples the Connector API from the engine, and the Connector implementation no longer depends on the compute engine, making the extension and implementation more flexible.")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"In terms of community planning, the V2 API will be the main focus of development, and more features will be supported in V2, while V1 will be stabilized and no longer maintained.")),(0,i.yg)("h2",{id:"practice-and-reflections-on-our-off-line-development-scheduling-platform"},"Practice and reflections on our off-line development scheduling platform"),(0,i.yg)("h3",{id:"practice-and-reflections-on-our-off-line-development-scheduling-platform-1"},"Practice and reflections on our off-line development scheduling platform"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(98157).A,width:"720",height:"405"}),"\nHornet\u2019s Nest Big Data Development Platform, which focuses on providing one-stop big data development and scheduling services, helps businesses solve complex problems such as data development management, task scheduling and task monitoring in offline scenarios."),(0,i.yg)("p",null,"The offline development and scheduling platform plays the role of the top and the bottom. The top is to provide open interface API and UI to connect with various data application platforms and businesses, and the bottom is to drive various computations and storage, and then run in an orderly manner according to the task dependency and scheduling time."),(0,i.yg)("h2",{id:"platform-capabilities"},"Platform Capabilities"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data development")),(0,i.yg)("p",null,"Task configuration, quality testing, release live"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\xb7Data synchronisation")),(0,i.yg)("p",null,"Data access, data processing, data distribution"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\xb7Scheduling capabilities")),(0,i.yg)("p",null,"Supports timed scheduling, triggered scheduling"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\xb7Operations and Maintenance Centre\n"),"\nJob Diagnosis, Task O&M, Instance O&M"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\xb7Management")),(0,i.yg)("p",null,"Library table management, permission management, API management, script management"),(0,i.yg)("p",null,"In summary, the core capabilities of the offline development scheduling platform are openness, versatility, and one-stop shopping. Through standardized processes, the entire task development cycle is managed and a one-stop service experience is provided."),(0,i.yg)("h2",{id:"the-architecture-of-the-platform"},"The architecture of the platform"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(1894).A,width:"720",height:"405"}),"\nThe Hornet\u2019s Nest Big Data Development and Scheduling Platform consists of four main modules: the task component layer, the scheduling layer, the service layer, and the monitoring layer."),(0,i.yg)("p",null,"The service layer is mainly responsible for job lifecycle management (e.g. job creation, testing, release, offline); Airflow dagphthon file building and generating, task bloodline dependency management, permission management, API (providing data readiness, querying of task execution status)."),(0,i.yg)("p",null,"The scheduling layer is based on Airflow and is responsible for the scheduling of all offline tasks."),(0,i.yg)("p",null,"A task component layer that enables users to develop data through supported components that include tools such as SparkSQL/, HiveSQ, LMR), StarRocks import, etc., directly interfacing with underlying HDFS, MySQL, and other storage systems."),(0,i.yg)("p",null,"The monitoring layer is responsible for all aspects of monitoring and alerting on scheduling resources, computing resources, task execution, etc."),(0,i.yg)("h2",{id:"open-data-sync-capability-scenarios"},"Open Data Sync Capability Scenarios"),(0,i.yg)("p",null,"Challenges with open capabilities: Need to support multiple business scenarios and meet flexible data pipeline requirements (i.e. extend to support more task components such as hive2clickhourse, clickhourse2mysql, etc.)"),(0,i.yg)("p",null,"Extending task components based on Airflow: higher maintenance costs for extensions, need to reduce costs and increase efficiency (based on the limited provider's Airflow offers, less applicable in terms of usage requirements, Airflow is a Python technology stack, while our team is mainly based on the Java technology stack, so the technology stack difference brings higher iteration costs)"),(0,i.yg)("p",null,"Self-developed task components: the high cost of platform integration, long development cycle, high cost of the configuration of task components. (Research or implement task components by yourself, different ways of adapting the parameters of the components in the service layer, no uniform way of parameter configuration)"),(0,i.yg)("p",null,"We wanted to investigate a data integration tool that, firstly, supported a rich set of components, provided out-of-the-box capabilities, was easy to extend, and offered a uniform configuration of parameters and a uniform way of using them to facilitate platform integration and maintenance."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Selection of data integration tools\n",(0,i.yg)("img",{src:n(27229).A,width:"720",height:"405"}),"\nTo address the pain points mentioned above, we actively explored solutions and conducted a selection analysis of several mainstream data integration products in the industry. As you can see from the comparison above, Datax and SeaTunnel both offer good scalability, and high stability, support rich connector plugins, provide scripted, uniformly configurable usage, and have active communities.")),(0,i.yg)("p",null,"However, Datax is limited by being distributed and is not well suited to massive data scenarios."),(0,i.yg)("p",null,"In contrast, SeaTunnel offers the ability to provide distributed execution, distributed transactions, scalable levels of data handling, and the ability to provide a unified technical solution in data synchronization scenarios."),(0,i.yg)("p",null,"In addition to the advantages and features described above and the applicable scenarios, more importantly, the current offline computing resources for big data are unified and managed by yarn, and for the subsequently extended tasks we also wish to execute on Yarn, we finally prefer SeaTunnel for our usage scenarios."),(0,i.yg)("p",null,"Further performance testing of SeaTunnel and the development of an open data scheduling platform to integrate SeaTunnel may be carried out at a later stage, and its use will be rolled out gradually."),(0,i.yg)("h2",{id:"outbound-scenario-hive-data-sync-to-starrocks"},"Outbound scenario: Hive data sync to StarRocks"),(0,i.yg)("p",null,"To briefly introduce the background, the Big Data platform has now completed the unification of the OLAP engine layer, using the StarRocks engine to replace the previous Kylin engine as the main query engine in OLAP scenarios."),(0,i.yg)("p",null,"In the data processing process, after the data is modelled in the data warehouse, the upper model needs to be imported into the OLAP engine for query acceleration, so there are a lot of tasks to push data from Hive to StarRocks every day. task (based on a wrapper for the StarRocks Broker Load import method) to a StarRocks-based table."),(0,i.yg)("p",null,"The current pain points are twofold."),(0,i.yg)("p",null,"\xb7Long data synchronization links: Hive2StarRocks processing links, which require at least two tasks, are relatively redundant."),(0,i.yg)("p",null,"\xb7Outbound efficiency: From the perspective of outbound efficiency, many Hive models themselves are processed by Spark SQL, and based on the processing the Spark Dataset in memory can be pushed directly to StarRocks without dropping the disk, improving the model\u2019s regional time."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(48737).A,width:"720",height:"405"}),"\nStarRocks currently also supports Spark Load, based on the Spark bulk data import method, but our ETL is more complex, needs to support data conversion multi-table Join, data aggregation operations, etc., so temporarily can not meet."),(0,i.yg)("p",null,"We know from the SeaTunnel community that there are plans to support the StarRocks Sink Connector, and we are working on that part as well, so we will continue to communicate with the community to build it together later."),(0,i.yg)("h2",{id:"how-to-get-involved-in-community-building"},"How to get involved in community building"),(0,i.yg)("h3",{id:"seatunnel-community-contribution"},"SeaTunnel Community Contribution"),(0,i.yg)("p",null,"As mentioned earlier, the community has completed the refactoring of the V1 to V2 API and needs to implement more connector plug-ins based on the V2 version of the connector API, which I was lucky enough to contribute to."),(0,i.yg)("p",null,"I am currently responsible for big data infrastructure work, which many mainstream big data components big data also use, so when the community proposed a connector issue, I was also very interested in it."),(0,i.yg)("p",null,"As the platform is also investigating SeaTunnel, learning and being able to contribute pr to the community is a great way to learn about SeaTunnel."),(0,i.yg)("p",null,"I remember at first I proposed a less difficult pr to implement the WeChat sink connector, but in the process of contributing I encountered many problems, bad coding style, code style did not take into account the rich output format supported by the extension, etc. Although the process was not so smooth, I was really excited and accomplished when the pr was merged. Although the process was not so smooth, it was very exciting and rewarding when the pr was merged."),(0,i.yg)("p",null,"As I became more familiar with the process, I became much more efficient at submitting pr and was confident enough to attempt difficult issues."),(0,i.yg)("h3",{id:"how-to-get-involved-in-community-contributions-quickly"},"How to get involved in community contributions quickly"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Good first issue\nGood first issue #3018 #2828")),(0,i.yg)("p",null,"If you are a first-time community contributor, it is advisable to focus on the Good first issue first, as it is basically a relatively simple and newcomer-friendly issue."),(0,i.yg)("p",null,"Through Good first issue, you can get familiar with the whole process of participating in the GitHub open source community contribution, for example, first fork the project, then submit the changes, and finally submit the pull request, waiting for the community to review, the community will target to you to put forward some suggestions for improvement, directly will leave a comment below, until when your pr is merged in, this will have completed a comp"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Subscribe to community mailings\nOnce you\u2019re familiar with the pr contribution process, you can subscribe to community emails to keep up to date with what\u2019s happening in the community, such as what features are currently being worked on and what\u2019s planned for future iterations. If you\u2019re interested in a feature, you can contribute to it in your own situation!"),(0,i.yg)("li",{parentName:"ul"},"Familiarity with git use\nThe main git commands used in development are git clone, git pull, git rebase and git merge. git rebase is recommended in the community development specification and does not generate additional commits compared to git merge."),(0,i.yg)("li",{parentName:"ul"},"Familiarity with GitHub project collaboration process\nOpen source projects are developed collaboratively by multiple people, and the collaboration method on GitHub is at its core outlined in fork For example, the apache st project, which is under the apache space, is first forked to our own space on GitHub")),(0,i.yg)("p",null,"Then modify the implementation, mention a pull request, and submit the pull request to be associated with the issue, in the commit, if we change a long time, in the upward commit, then the target branch has a lot of new commits exhausted this time we need to do a pull& merge or rebase."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Source code compilation project\nIt is important to be familiar with source compilation, as local source compilation can prove that the code added to a project can be compiled, and can be used as a preliminary check before committing to pr. Source compilation is generally slow and can be speeded up by using mvn -T for multi-threaded parallel compilation."),(0,i.yg)("li",{parentName:"ul"},"Compilation checks\nPre-compilation checks, including Licence header, Code checkstyle, and Document checkstyle, will be checked during Maven compilation, and if they fail, the CI will not be passed. So it is recommended to use some plug-in tools in the idea to improve the efficiency, such as Code checkstyle has a plug-in to automatically check the code specification, Licence header can add code templates in the idea, these have been shared by the community before how to do!"),(0,i.yg)("li",{parentName:"ul"},"Add full E2E")),(0,i.yg)("p",null,"Add full E2E testing and ensure that the E2E is passed before the Pull request."),(0,i.yg)("p",null,"Finally, I hope more students will join the SeaTunnel community, where you can not only feel the open-source spirit and culture of Apache but also understand the management process of Apache projects and learn good code design ideas."),(0,i.yg)("p",null,"We hope that by working together and growing together, we can build SeaTunnel into a top-notch data integration platform."))}p.isMDXComponent=!0},23658:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714322908857-c6ce9a962f477d13b5480206b583b6d2.jpg"},46679:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714322944041-351d2ac6aa565d636c97a1ad6b0c136e.jpg"},96544:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714323322988-74b7a47d1a3299efd23c6375d3acaa5e.jpg"},14885:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714323668557-9c9260e0c54017b5282b1294ccc9c692.jpg"},72719:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714323741126-a61ed7b20a44b14b78d39c7ffe42ec41.jpg"},69335:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714323846302-eabb8409469fa34d9b0ebd2402fca23d.jpg"},40910:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714323920717-b5bb28d92939847f1f30c61b6895191a.jpg"},25490:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714324136843-44e65c36b7ef55c34b50a9eb0e43c3cc.jpg"},51830:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714324237449-e5a12e608045d5a153853c93eb844852.jpg"},48709:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714324336701-6e5cadce0d1a1858d7bffbf96c5cae82.jpg"},64676:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714324454477-200fd76badcfc17bdd291f364c70a191.jpg"},37735:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714324726276-11d9d5c6d4e848796fa71329819caa72.jpg"},98947:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714325444078-fbed659c615c445655896b93a093177f.jpg"},14927:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714325474972-48cbee3672ad2f32317d48263f204978.jpg"},18134:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714325600316-f066630b909ec30a7727b7877a4838b0.jpg"},12893:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714325681738-973c53bd86223df4ee98cbb2ecb30eaf.jpg"},78693:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714325887598-d27009789ff28e56c8bfcca29bcedfe1.jpg"},98157:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714326227360-bcd55d2c5b7b23ec91a5d1e27c04fb0e.jpg"},1894:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714326749427-2957d8414a3175ed8cc46bde32a08565.jpg"},27229:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714327002726-6bfd742beb9534e7fdbd917db5f53d51.jpg"},48737:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/16714327218590-2644dc4ad1179eab81d40fc774d970e9.jpg"}}]);