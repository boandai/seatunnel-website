"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="FAQ",p={unversionedId:"developement/FAQ",id:"developement/FAQ",title:"FAQ",description:"FAQ 1. I encounter a problem when using SeaTunnel and I cannot solve it by myself. What should I do?Firstly search in Issue list or mailing list to see if someone has already asked the same question and got the answer. If you still cannot find the answer, you can contact community members for help in these ways .",source:"@site/docs/developement/FAQ.md",sourceDirName:"developement",slug:"/developement/FAQ",permalink:"/zh-CN/docs/developement/FAQ",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/developement/FAQ.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zh-CN/docs/introduction"},next:{title:"How to add a new License Guide",permalink:"/zh-CN/docs/developement/NewLicenseGuide"}},c={},u=[],h={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 1.")," I encounter a problem when using SeaTunnel and I cannot solve it by myself. What should I do?Firstly search in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues"},"Issue list")," or ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@seatunnel.apache.org"},"mailing list")," to see if someone has already asked the same question and got the answer. If you still cannot find the answer, you can contact community members for help in",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel#contact-us"}," these ways")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 2.")," How to declare a variable in SeaTunnel's configuration, and then dynamically replace the value of the variable at runtime?"),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.4")," SeaTunnel supports variables substitution in the configuration. This feature is often used for timing or non-timing offline processing to replace variables such as time and date. The usage is as follows:"),(0,r.kt)("p",null,"Configure the variable name in the configuration, here is an example of sql transform (actually anywhere in the configuration file the value in ",(0,r.kt)("inlineCode",{parentName:"p"},"'key = value'")," can use the variable substitution):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...\ntransform {\n  sql {\n    sql = "select * from user_view where city =\'"${city}"\' and dt = \'"${date}"\'"\n  }\n}\n...\n')),(0,r.kt)("p",null,"Taking Spark Local mode as an example, the startup command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/start-seatunnel-spark.sh \\\n-c ./config/your_app.conf \\\n-e client \\\n-m local[2] \\\n-i city=shanghai \\\n-i date=20190319\n")),(0,r.kt)("p",null,"You can use the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--variable")," followed with ",(0,r.kt)("inlineCode",{parentName:"p"},"key=value")," to specify the value of the variable, where the key needs to be same as the variable name in the configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 3.")," How to write a configuration item into multi-line text in the configuration file?"),(0,r.kt)("p",null,"When a configured text is very long and you want to wrap it, you can use three double quotes to indicate it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var = """\n whatever you want\n"""\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 4.")," How to implement variable substitution for multi-line text?"),(0,r.kt)("p",null,"It is a little troublesome to do variable substitution in multi-line text, because the variable cannot be included in three double quotation marks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var = """\nyour string 1\n"""${you_var}""" your string 2"""\n')),(0,r.kt)("p",null,"refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/issues/456"},"lightbend/config#456")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 5.")," Is SeaTunnel supportted in Azkaban, Oozie, DolphinScheduler?"),(0,r.kt)("p",null,"Of course, please see the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"workflow.png",src:n(356).Z,width:"2262",height:"1082"})),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"azkaban.png",src:n(436).Z,width:"3210",height:"1760"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 6.")," Does SeaTunnel have a case of configuring multiple sources, such as configuring  elasticsearch and hdfs in source at the same time?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'env {\n    ...\n}\n\nsource {\n  hdfs { ... }  \n  elasticsearch { ... }\n  jdbc {...}\n}\n\ntransform {\n    sql {\n     sql = """\n        select .... from hdfs_table \n        join es_table \n        on hdfs_table.uid = es_table.uid where ..."""\n    }\n}\n\nsink {\n    elasticsearch { ... }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 7.")," Are there any HBase plugins?"),(0,r.kt)("p",null,"There is hbase input plugin, download it from here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/garyelephant/waterdrop-input-hbase"},"https://github.com/garyelephant/waterdrop-input-hbase")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 8.")," How to use SeaTunnel to write data to Hive?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'env {\n  spark.sql.catalogImplementation = "hive"\n  spark.hadoop.hive.exec.dynamic.partition = "true"\n  spark.hadoop.hive.exec.dynamic.partition.mode = "nonstrict"\n}\n\nsource {\n  sql = "insert into ..."\n}\n\nsink {\n    // The data has been written to hive through the sql source, this is just a placeholder, it does not actually work.\n    stdout {\n        limit = 1\n    }\n}\n')),(0,r.kt)("p",null,"In addition, SeaTunnel has implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"Hive")," output plugin after ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5.7")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"1.x")," branch; in ",(0,r.kt)("inlineCode",{parentName:"p"},"2.x")," branch, the Hive plugin of the Spark engine has been supported after version ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0.5"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/910"},"https://github.com/apache/incubator-seatunnel/issues/910"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 9.")," How does SeaTunnel write multiple instances of ClickHouse to achieve load balancing?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write distributed tables directly (not recommended)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By adding a proxy or domain name (DNS) in front of multiple instances of ClickHouse:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    output {\n        clickhouse {\n            host = "ck-proxy.xx.xx:8123"\n            # Local table\n            table = "table_name"\n        }\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure multiple instances in the configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    output {\n        clickhouse {\n            host = "ck1:8123,ck2:8123,ck3:8123"\n            # Local table\n            table = "table_name"\n        }\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use cluster mode:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    output {\n        clickhouse {\n            # Configure only one host\n            host = "ck1:8123"\n            cluster = "clickhouse_cluster_name"\n            # Local table\n            table = "table_name"\n        }\n    }\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 10.")," How to solve OOM when SeaTunnel consumes Kafka?"),(0,r.kt)("p",null,"In most cases, OOM is caused by the fact that there is no rate limit for consumption. The solution is as follows:"),(0,r.kt)("p",null,"Regarding the current limit of Spark consumption of Kafka:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suppose the number of partitions of Kafka ",(0,r.kt)("inlineCode",{parentName:"p"},"Topic 1")," you consume with KafkaStream = N.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assuming that the production speed of the message producer (Producer) of ",(0,r.kt)("inlineCode",{parentName:"p"},"Topic 1")," is K messages/second, it is required that The speed of write message to the partition is uniform.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suppose that after testing, it is found that the processing capacity of Spark Executor per core per second is M per second."))),(0,r.kt)("p",null,"The following conclusions can be drawn:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to make spark's consumption of ",(0,r.kt)("inlineCode",{parentName:"p"},"Topic 1")," keep up with its production speed, then you need ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.executor.cores")," * ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.executor.instances")," >= K / M")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When data delay occurs, if you want the consumption speed not to be too fast, resulting in spark executor OOM, then you need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.streaming.kafka.maxRatePerPartition")," <= (",(0,r.kt)("inlineCode",{parentName:"p"},"spark.executor.cores")," ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("inlineCode",{parentName:"em"},"spark.executor.instances"),") ")," M / N")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In general, both M and N are determined, and the conclusion can be drawn from 2: The size of ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.streaming.kafka.maxRatePerPartition")," is positively correlated with the size of ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.executor.cores")," * ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.executor.instances"),", and it can be increased while increasing the resource ",(0,r.kt)("inlineCode",{parentName:"p"},"maxRatePerPartition")," to speed up consumption."))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"kafka",src:n(9274).Z,width:"874",height:"438"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 11.")," How to solve the Error ",(0,r.kt)("inlineCode",{parentName:"p"},'Exception in thread "main" java.lang.NoSuchFieldError: INSTANCE'),"?"),(0,r.kt)("p",null,"The reason is that the version of httpclient.jar that comes with the CDH version of Spark is lower, and The httpclient version where ClickHouse JDBC is based on is 4.5.2, and the package version conflicts. The solution is to replace the jar package that comes with CDH with httpclient-4.5.2 version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 12.")," The default JDK of my Spark cluster is JDK7. After I install JDK8, how can I specify the"),(0,r.kt)("p",null,"SeaTunnel starts with JDK8?"),(0,r.kt)("p",null,"In SeaTunnel's config file, specify the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'spark {\n ...\n spark.executorEnv.JAVA_HOME="/your/java_8_home/directory"\n spark.yarn.appMasterEnv.JAVA_HOME="/your/java_8_home/directory"\n ...\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 13.")," How to specify a different JDK version for SeaTunnel on Yarn?"),(0,r.kt)("p",null,"For example, if you want to set the JDK version to JDK8, there are two cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Yarn cluster has deployed JDK8, but the default JDK is not JDK8. you should only add 2 configurations to the SeaTunnel config file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  env {\n ...\n spark.executorEnv.JAVA_HOME="/your/java_8_home/directory"\n spark.yarn.appMasterEnv.JAVA_HOME="/your/java_8_home/directory"\n ...\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Yarn cluster does not deploy JDK8. At this time, when you start SeaTunnel attached with JDK8.For detailed operations, see the link below:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/jasondan/p/spark-specific-jdk-version.html"},"https://www.cnblogs.com/jasondan/p/spark-specific-jdk-version.html")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 14.")," What should I do if OOM always appears when running SeaTunnel in Spark local","[*]"," mode?"),(0,r.kt)("p",null,"If you run in local mode, you need to modify the start-seatunnel.sh startup script after  spark-submit, add a parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--driver-memory 4g")," . Under normal circumstances, the local mode is not used in the production environment. Therefore, this parameter generally does not need to be set during On Yarn. See: ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#application-properties"},"Application Properties")," for details ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 15.")," Where can the self-written plugins or third-party jdbc.jar be placed to be loaded by SeaTunnel?"),(0,r.kt)("p",null,"Place the Jar package under the specified structure of the plugins directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd SeaTunnel\nmkdir -p plugins/my_plugins/lib\ncp third-part.jar plugins/my_plugins/lib\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"my_plugins")," can be any string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 16.")," How to configure logging related parameters in SeaTunnel-v1(Spark)?"),(0,r.kt)("p",null,"There are 3 ways to configure Logging related parameters (such as Log Level):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[Not recommended]"," Change the default ",(0,r.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf/log4j.properties")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will affect all programs submitted via ",(0,r.kt)("inlineCode",{parentName:"li"},"$SPARK_HOME/bin/spark-submit")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[Not recommended]"," Modify logging related parameters directly in the Spark code of SeaTunnel"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is equivalent to writing dead, and each change needs to be recompiled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[Recommended]"," Use the following methods to change the logging configuration in the SeaTunnel configuration file(It only takes effect after SeaTunnel >= 1.5.5 ):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'env {\n    spark.driver.extraJavaOptions = "-Dlog4j.configuration=file:<file path>/log4j.properties"\n    spark.executor.extraJavaOptions = "-Dlog4j.configuration=file:<file path>/log4j.properties"\n}\nsource {\n  ...\n}\ntransform {\n ...\n}\nsink {\n  ...\n}\n')))),(0,r.kt)("p",null,"The contents of the log4j configuration file for reference are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cat log4j.properties\nlog4j.rootLogger=ERROR, console\n\n# set the log level for these components\nlog4j.logger.org=ERROR\nlog4j.logger.org.apache.spark=ERROR\nlog4j.logger.org.spark-project=ERROR\nlog4j.logger.org.apache.hadoop=ERROR\nlog4j.logger.io.netty=ERROR\nlog4j.logger.org.apache.zookeeper=ERROR\n\n# add a ConsoleAppender to the logger stdout to write to the console\nlog4j.appender.console=org.apache.log4j.ConsoleAppender\nlog4j.appender.console.layout=org.apache.log4j.PatternLayout\n# use a simple message format\nlog4j.appender.console.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n")),(0,r.kt)("p",null,"How to configure logging related parameters in SeaTunnel-v2(Spark, Flink)?"),(0,r.kt)("p",null,"Currently, it cannot be set directly. The user needs to modify the SeaTunnel startup script.The relevant parameters are specified in the task submission command. For specific parameters, please refer to the official document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spark official documentation: ",(0,r.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/latest/configuration.html#configuring-logging"},"http://spark.apache.org/docs/latest/configuration.html#configuring-logging")),(0,r.kt)("li",{parentName:"ul"},"Flink official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-stable/monitoring/logging.html"},"https://ci.apache.org/projects/flink/flink-docs-stable/monitoring/logging.html"))),(0,r.kt)("p",null,"Reference:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console"},"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/configuration.html#configuring-logging"},"http://spark.apache.org/docs/latest/configuration.html#configuring-logging")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@iacomini.riccardo/spark-logging-configuration-in-yarn-faf5ba5fdb01"},"https://medium.com/@iacomini.riccardo/spark-logging-configuration-in-yarn-faf5ba5fdb01")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console"},"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 17.")," Error when writing to ClickHouse: ClassCastException"),(0,r.kt)("p",null,"In SeaTunnel, the data type will not be actively converted. After the Input reads the data, the corresponding"),(0,r.kt)("p",null,"Schema. When writing ClickHouse, the field type needs to be strictly matched, and the mismatch needs to be done."),(0,r.kt)("p",null,"Data conversion, data conversion can be achieved through the following two plug-ins:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Filter Convert plugin"),(0,r.kt)("li",{parentName:"ol"},"Filter Sql plugin")),(0,r.kt)("p",null,"Detailed data type conversion reference: ",(0,r.kt)("a",{parentName:"p",href:"https://interestinglab.github.io/seatunnel-docs/#/en/configuration/output-plugins/Clickhouse?id=clickhouse-data-type-check-list"},"ClickHouse Data Type Check List")),(0,r.kt)("p",null,"Refer to issue:",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/488"},"#488")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/382"},"#382")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 18.")," How does SeaTunnel access kerberos-authenticated HDFS, YARN, Hive and other resources?"),(0,r.kt)("p",null,"Please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/590"},"#590")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 19.")," How to troubleshoot NoClassDefFoundError, ClassNotFoundException and other issues?"),(0,r.kt)("p",null,"There is a high probability that there are multiple different versions of the corresponding Jar package class loaded in the Java classpath, because of the conflict of the load order, instead of really missing this Jar, please modify this SeaTunnel startup command, add the following parameters to the spark-submit submission place, and debug in detail through the output log."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spark-submit --verbose\n    ...\n   --conf 'spark.driver.extraJavaOptions=-verbose:class'\n   --conf 'spark.executor.extraJavaOptions=-verbose:class'\n    ...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 20.")," How to use SeaTunnel to synchronize data across HDFS clusters?"),(0,r.kt)("p",null,"Just configure hdfs-site.xml properly, refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/suanec/p/7828139.html"},"https://www.cnblogs.com/suanec/p/7828139.html")),(0,r.kt)("p",null,"There is an article on how to modify the spark code to complete the configuration(SeaTunnel does not need to do this): ",(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/3e84c4c97610"},"https://www.jianshu.com/p/3e84c4c97610")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 21.")," I want to learn the source code of SeaTunnel, where should I start?"),(0,r.kt)("p",null,"SeaTunnel has a completely abstract and structured code implementation, and many people have chosen  SeaTunnel As a way to learn Spark, you can learn the source code from the main program entry: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/blob/72b57b22688f17376fe7e5cf522b4bdd3f62cce0/seatunnel-core/seatunnel-core-base/src/main/java/org/apache/seatunnel/Seatunnel.java"},"Seatunnel.java")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 22.")," When SeaTunnel developers develop their own plugins, do they need to understand the SeaTunnel code? Should these code integrated into the SeaTunnel project?"),(0,r.kt)("p",null,"The plug-in developed by the developer has nothing to do with the SeaTunnel project and does not need to write your plug-in code"),(0,r.kt)("p",null,"The plugin can be completely independent with SeaTunnel project, in which you can use java,"),(0,r.kt)("p",null,"Scala, maven, sbt, gradle, whatever you want. This is also the way we recommend developers to develop plugins."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FAQ 23."),' Import project, compiler has exception "class not found ',(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.shade.com.typesafe.config.Config"),'"'),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn install")," first."),(0,r.kt)("p",null,"Because in the ",(0,r.kt)("inlineCode",{parentName:"p"},"seatunnel-config/seatunnel-config-base")," subproject, package ",(0,r.kt)("inlineCode",{parentName:"p"},"com.typesafe.config")," has been relocated to ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.shade.com.typesafe.config")," and install to maven local repository in subproject ",(0,r.kt)("inlineCode",{parentName:"p"},"seatunnel-config/seatunnel-config-shade")," ."))}m.isMDXComponent=!0},436:function(e,t,n){t.Z=n.p+"assets/images/azkaban-cbb73e8d8ee3956c38ccfd314b6cef6b.png"},9274:function(e,t,n){t.Z=n.p+"assets/images/kafka-301f0a97a236a8f8d50d0594d05e4a3e.png"},356:function(e,t,n){t.Z=n.p+"assets/images/workflow-cf5938a1e24c73ec50c1fa636900eb10.png"}}]);