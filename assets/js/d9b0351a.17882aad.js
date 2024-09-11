"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18586],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),p=d(a),y=r,s=p["".concat(i,".").concat(y)]||p[y]||u[y]||l;return a?n.createElement(s,o(o({ref:t},m),{},{components:a})):n.createElement(s,o({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=y;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[p]="string"==typeof e?e:r,o[1]=g;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},90310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const l={sidebar_position:13},o="Telemetry",g={unversionedId:"seatunnel-engine/telemetry",id:"seatunnel-engine/telemetry",title:"Telemetry",description:"Integrating Metrices through Prometheus-exports can better seamlessly connect to related monitoring platforms such",source:"@site/docs/seatunnel-engine/telemetry.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/telemetry",permalink:"/docs/seatunnel-engine/telemetry",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/telemetry.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docs",previous:{title:"Command Line Tool",permalink:"/docs/seatunnel-engine/user-command"},next:{title:"Seatunnel Runs On Flink",permalink:"/docs/other-engine/flink"}},i={},d=[{value:"Metrics",id:"metrics",level:2},{value:"Node Metrics",id:"node-metrics",level:3},{value:"Thread Pool Status",id:"thread-pool-status",level:3},{value:"Job info detail",id:"job-info-detail",level:3},{value:"JVM Metrics",id:"jvm-metrics",level:3},{value:"Cluster Monitoring By Prometheus &amp; Grafana",id:"cluster-monitoring-by-prometheus--grafana",level:2},{value:"Install Prometheus",id:"install-prometheus",level:3},{value:"Configuration Prometheus",id:"configuration-prometheus",level:3},{value:"Install Grafana",id:"install-grafana",level:3},{value:"Monitoring Dashboard",id:"monitoring-dashboard",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,n.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"telemetry"},"Telemetry"),(0,r.yg)("p",null,"Integrating ",(0,r.yg)("inlineCode",{parentName:"p"},"Metrices")," through ",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus-exports")," can better seamlessly connect to related monitoring platforms such\nas Prometheus and Grafana, improving the ability to monitor and alarm of the SeaTunnel cluster."),(0,r.yg)("p",null,"You can configure telemetry's configurations in the ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml")," file."),(0,r.yg)("p",null,"The following is an example declarative configuration."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    telemetry:\n      metric:\n        enabled: true # Whether open metrics export\n")),(0,r.yg)("h2",{id:"metrics"},"Metrics"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{target:"_blank",href:a(74721).A},"metric text of prometheus"),",which get\nfrom ",(0,r.yg)("inlineCode",{parentName:"p"},"http://{instanceHost}:5801/hazelcast/rest/instance/metrics"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{target:"_blank",href:a(4873).A},"metric text of openMetrics"),",which get\nfrom ",(0,r.yg)("inlineCode",{parentName:"p"},"http://{instanceHost}:5801/hazelcast/rest/instance/openmetrics"),"."),(0,r.yg)("p",null,"Available metrics include the following categories."),(0,r.yg)("p",null,"Note: All metrics both have the same labelName ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster"),", that's value is the config of ",(0,r.yg)("inlineCode",{parentName:"p"},"hazelcast.cluster-name"),"."),(0,r.yg)("h3",{id:"node-metrics"},"Node Metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MetricName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Labels"),(0,r.yg)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cluster_info"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"hazelcastVersion"),", the version of hazelcast. ",(0,r.yg)("strong",{parentName:"td"},"master"),", seatunnel master address."),(0,r.yg)("td",{parentName:"tr",align:null},"Cluster info")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cluster_time"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"hazelcastVersion"),", the version of hazelcast."),(0,r.yg)("td",{parentName:"tr",align:null},"Cluster time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_count"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Cluster node total count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_state"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"Whether is up of seatunnel node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_executedCount"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor executedCount of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_isShutdown"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor isShutdown of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_isTerminated"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor isTerminated of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_maxPoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor maxPoolSize of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_poolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor poolSize of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_queueRemainingCapacity"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor queueRemainingCapacity of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_executor_queueSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of executor, including: "async" "client" "clientBlocking" "clientQuery" "io" "offloadable" "scheduled" "system"'),(0,r.yg)("td",{parentName:"tr",align:null},"The hazelcast executor queueSize of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_partition_partitionCount"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partitionCount of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_partition_activePartition"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The activePartition of seatunnel cluster node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_partition_isClusterSafe"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Weather is cluster safe of partition")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hazelcast_partition_isLocalMemberSafe"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Weather is local member safe of partition")))),(0,r.yg)("h3",{id:"thread-pool-status"},"Thread Pool Status"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MetricName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Labels"),(0,r.yg)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_activeCount"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The activeCount of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_corePoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The corePoolSize of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_maximumPoolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The maximumPoolSize of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_poolSize"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The poolSize of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_queueTaskCount"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The queueTaskCount of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_completedTask_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The completedTask of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_task_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The taskCount of seatunnel coordinator job's executor cached thread pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_thread_pool_rejection_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"address"),', server instance address,for example: "127.0.0.1:5801"'),(0,r.yg)("td",{parentName:"tr",align:null},"The rejectionCount of seatunnel coordinator job's executor cached thread pool")))),(0,r.yg)("h3",{id:"job-info-detail"},"Job info detail"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MetricName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Labels"),(0,r.yg)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"job_count"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"type"),', the type of job, including: "canceled" "cancelling" "created" "failed" "failing" "finished" "running" "scheduled"'),(0,r.yg)("td",{parentName:"tr",align:null},"All job counts of seatunnel cluster")))),(0,r.yg)("h3",{id:"jvm-metrics"},"JVM Metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MetricName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Labels"),(0,r.yg)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_current"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Current thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_daemon"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Daemon thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_peak"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Peak thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_started_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Started thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_deadlocked"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors or ownable synchronizers")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_deadlocked_monitor"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_threads_state"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"state"),', the state of jvm thread, including: "NEW" "TERMINATED" "RUNNABLE" "BLOCKED" "WAITING" "TIMED_WAITING" "UNKNOWN"'),(0,r.yg)("td",{parentName:"tr",align:null},"Current count of threads by state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_classes_currently_loaded"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of classes that are currently loaded in the JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_classes_loaded_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The total number of classes that have been loaded since the JVM has started execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_classes_unloaded_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The total number of classes that have been unloaded since the JVM has started execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_allocated_bytes_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),',including: "Code Cache" "PS Eden Space" "PS Old Ge" "PS Survivor Space" "Compressed Class Space" "Metaspace"'),(0,r.yg)("td",{parentName:"tr",align:null},"Total bytes allocated in a given JVM memory pool. Only updated after GC, not continuously")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_gc_collection_seconds_count"),(0,r.yg)("td",{parentName:"tr",align:null},"Summary"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"gc"),',including: "PS Scavenge" "PS MarkSweep"'),(0,r.yg)("td",{parentName:"tr",align:null},"Time spent in a given JVM garbage collector in seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_gc_collection_seconds_sum"),(0,r.yg)("td",{parentName:"tr",align:null},"Summary"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"gc"),',including: "PS Scavenge" "PS MarkSweep"'),(0,r.yg)("td",{parentName:"tr",align:null},"Time spent in a given JVM garbage collector in seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_info"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"runtime"),', for example: "Java(TM) SE Runtime Environment". ',(0,r.yg)("strong",{parentName:"td"},"vendor"),', for example: "Oracle Corporation". ',(0,r.yg)("strong",{parentName:"td"},"version"),' ,for example: "1.8.0_212-b10"'),(0,r.yg)("td",{parentName:"tr",align:null},"VM version info")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"process_cpu_seconds_total"),(0,r.yg)("td",{parentName:"tr",align:null},"Counter"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Total user and system CPU time spent in seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"process_start_time_seconds"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Start time of the process since unix epoch in seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"process_open_fds"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of open file descriptors")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"process_max_fds"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of open file descriptors")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_objects_pending_finalization"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of objects waiting in the finalizer queue")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_bytes_used"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"area"),', including: "heap" "noheap"'),(0,r.yg)("td",{parentName:"tr",align:null},"Used bytes of a given JVM memory area")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_bytes_committed"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"area"),', including: "heap" "noheap"'),(0,r.yg)("td",{parentName:"tr",align:null},"Committed (bytes) of a given JVM memory area")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_bytes_max"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"area"),', including:"heap" "noheap"'),(0,r.yg)("td",{parentName:"tr",align:null},"Max (bytes) of a given JVM memory area")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_bytes_init"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"area"),', including:"heap" "noheap"'),(0,r.yg)("td",{parentName:"tr",align:null},"Initial bytes of a given JVM memory area")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_bytes_used"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "Code Cache" "PS Eden Space" "PS Old Ge" "PS Survivor Space" "Compressed Class Space" "Metaspace"'),(0,r.yg)("td",{parentName:"tr",align:null},"Used bytes of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_bytes_committed"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "Code Cache" "PS Eden Space" "PS Old Ge" "PS Survivor Space" "Compressed Class Space" "Metaspace"'),(0,r.yg)("td",{parentName:"tr",align:null},"Committed bytes of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_bytes_max"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "Code Cache" "PS Eden Space" "PS Old Ge" "PS Survivor Space" "Compressed Class Space" "Metaspace"'),(0,r.yg)("td",{parentName:"tr",align:null},"Max bytes of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_bytes_init"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "Code Cache" "PS Eden Space" "PS Old Ge" "PS Survivor Space" "Compressed Class Space" "Metaspace"'),(0,r.yg)("td",{parentName:"tr",align:null},"Initial bytes of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_allocated_bytes_created"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "Code Cache" "PS Eden Space" "PS Old Ge" "PS Survivor Space" "Compressed Class Space" "Metaspace"'),(0,r.yg)("td",{parentName:"tr",align:null},"Total bytes allocated in a given JVM memory pool. Only updated after GC, not continuously")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_collection_used_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "PS Eden Space" "PS Old Ge" "PS Survivor Space"'),(0,r.yg)("td",{parentName:"tr",align:null},"Used bytes after last collection of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_collection_committed_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "PS Eden Space" "PS Old Ge" "PS Survivor Space"'),(0,r.yg)("td",{parentName:"tr",align:null},"Committed after last collection bytes of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_collection_max_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "PS Eden Space" "PS Old Ge" "PS Survivor Space"'),(0,r.yg)("td",{parentName:"tr",align:null},"Max bytes after last collection of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_memory_pool_collection_init_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "PS Eden Space" "PS Old Ge" "PS Survivor Space"'),(0,r.yg)("td",{parentName:"tr",align:null},"Initial after last collection bytes of a given JVM memory pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_buffer_pool_used_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "direct" "mapped"'),(0,r.yg)("td",{parentName:"tr",align:null},"Used bytes of a given JVM buffer pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_buffer_pool_capacity_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "direct" "mapped"'),(0,r.yg)("td",{parentName:"tr",align:null},"Bytes capacity of a given JVM buffer pool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jvm_buffer_pool_used_buffers"),(0,r.yg)("td",{parentName:"tr",align:null},"Gauge"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"pool"),', including: "direct" "mapped"'),(0,r.yg)("td",{parentName:"tr",align:null},"Used buffers of a given JVM buffer pool")))),(0,r.yg)("h2",{id:"cluster-monitoring-by-prometheus--grafana"},"Cluster Monitoring By Prometheus & Grafana"),(0,r.yg)("h3",{id:"install-prometheus"},"Install Prometheus"),(0,r.yg)("p",null,"For a guide on how to set up Prometheus server go to\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation"},"Installation")),(0,r.yg)("h3",{id:"configuration-prometheus"},"Configuration Prometheus"),(0,r.yg)("p",null,"Add seatunnel instance metric exports into ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/prometheus/prometheus.yaml"),". For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"global:\n  # How frequently to scrape targets from this job.\n  scrape_interval: 15s\nscrape_configs:\n  # The job name assigned to scraped metrics by default.\n  - job_name: 'seatunnel'\n    scrape_interval: 5s\n    # Metrics export path \n    metrics_path: /hazelcast/rest/instance/metrics\n    # List of labeled statically configured targets for this job.\n    static_configs:\n      # The targets specified by the static config.\n      - targets: [ 'localhost:5801' ]\n      # Labels assigned to all metrics scraped from the targets.\n      # labels: [<labelName>:<labelValue>]\n")),(0,r.yg)("h3",{id:"install-grafana"},"Install Grafana"),(0,r.yg)("p",null,"For a guide on how to set up Grafana server go to\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/setup-grafana/installation"},"Installation")),(0,r.yg)("h3",{id:"monitoring-dashboard"},"Monitoring Dashboard"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Prometheus DataSource on Grafana.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Import ",(0,r.yg)("inlineCode",{parentName:"li"},"Seatunnel Cluster")," monitoring dashboard by ",(0,r.yg)("a",{target:"_blank",href:a(12529).A},"Dashboard JSON")," into Grafana.")))),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{target:"_blank",href:a(3387).A},"effect image")," of the dashboard"))}u.isMDXComponent=!0},3387:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/files/grafana-78e72267560af00bcdf3afde475bb40d.png"},12529:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/files/grafana-dashboard-7529437b9107daeec5ebac4987a60a98.json"},74721:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/files/metrics-0d6a30580865f546d9dd132ac181f84a.txt"},4873:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/files/openmetrics-347bfc901402ae9ef5bfc8ae878c0efd.txt"}}]);