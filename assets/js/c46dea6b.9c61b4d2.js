"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[95182],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=l,u=m["".concat(d,".").concat(y)]||m[y]||g[y]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},10284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const r={},i="HdfsFile",o={unversionedId:"connector-v2/sink/HdfsFile",id:"connector-v2/sink/HdfsFile",title:"HdfsFile",description:"HDFS File Sink Connector",source:"@site/docs/connector-v2/sink/HdfsFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/HdfsFile",permalink:"/docs/connector-v2/sink/HdfsFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/HdfsFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hbase",permalink:"/docs/connector-v2/sink/Hbase"},next:{title:"Hive",permalink:"/docs/connector-v2/sink/Hive"}},d={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"For orc file format simple config",id:"for-orc-file-format-simple-config",level:3},{value:"For text file format with <code>have_partition</code> and <code>custom_filename</code> and <code>sink_columns</code>",id:"for-text-file-format-with-have_partition-and-custom_filename-and-sink_columns",level:3},{value:"For parquet file format with <code>have_partition</code> and <code>custom_filename</code> and <code>sink_columns</code>",id:"for-parquet-file-format-with-have_partition-and-custom_filename-and-sink_columns",level:3},{value:"For kerberos simple config",id:"for-kerberos-simple-config",level:3},{value:"For compress simple config",id:"for-compress-simple-config",level:3}],s={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hdfsfile"},"HdfsFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"HDFS File Sink Connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,l.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","compress codec",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","lzo")))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Output data to hdfs file"),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,l.yg)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"HdfsFile"),(0,l.yg)("td",{parentName:"tr",align:null},"hadoop 2.x and 3.x")))),(0,l.yg)("h2",{id:"sink-options"},"Sink Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fs.defaultFS"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The hadoop cluster address that start with ",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://"),", for example: ",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://hadoopcluster"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The target dir path is required.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tmp_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"/tmp/seatunnel"),(0,l.yg)("td",{parentName:"tr",align:null},"The result file will write to a tmp path first and then use ",(0,l.yg)("inlineCode",{parentName:"td"},"mv")," to submit tmp dir to target dir. Need a hdfs path.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The path of ",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs-site.xml"),", used to load ha configuration of namenodes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_filename"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you need custom the filename")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when ",(0,l.yg)("inlineCode",{parentName:"td"},"custom_filename")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),".",(0,l.yg)("inlineCode",{parentName:"td"},"file_name_expression")," describes the file expression which will be created into the ",(0,l.yg)("inlineCode",{parentName:"td"},"path"),". We can add the variable ",(0,l.yg)("inlineCode",{parentName:"td"},"${now}")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"${uuid}")," in the ",(0,l.yg)("inlineCode",{parentName:"td"},"file_name_expression"),", like ",(0,l.yg)("inlineCode",{parentName:"td"},"test_${uuid}_${now}"),",",(0,l.yg)("inlineCode",{parentName:"td"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.yg)("inlineCode",{parentName:"td"},"filename_time_format"),".Please note that, If ",(0,l.yg)("inlineCode",{parentName:"td"},"is_enable_transaction")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", we will auto add ",(0,l.yg)("inlineCode",{parentName:"td"},"${transactionId}_")," in the head of the file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when ",(0,l.yg)("inlineCode",{parentName:"td"},"custom_filename")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),".When the format in the ",(0,l.yg)("inlineCode",{parentName:"td"},"file_name_expression")," parameter is ",(0,l.yg)("inlineCode",{parentName:"td"},"xxxx-${now}")," , ",(0,l.yg)("inlineCode",{parentName:"td"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:","[y:Year,M:Month,d:Day of month,H:Hour in day (0-23),m:Minute in hour,s:Second in minute]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"csv"'),(0,l.yg)("td",{parentName:"tr",align:null},"We supported as the following file types:",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"td"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"td"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"td"},"excel")," ",(0,l.yg)("inlineCode",{parentName:"td"},"xml"),".Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,l.yg)("inlineCode",{parentName:"td"},"txt"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"'\\001'"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is text,The separator between columns in a row of data. Only needed by ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," file format.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"\\n"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is text,The separator between rows in a file. Only needed by ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," file format.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"have_partition"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true,Partition data based on selected fields.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true,If the ",(0,l.yg)("inlineCode",{parentName:"td"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory. Default ",(0,l.yg)("inlineCode",{parentName:"td"},"partition_dir_expression")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,l.yg)("inlineCode",{parentName:"td"},"k0")," is the first partition field and ",(0,l.yg)("inlineCode",{parentName:"td"},"v0")," is the value of the first partition field.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when ",(0,l.yg)("inlineCode",{parentName:"td"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),". If ",(0,l.yg)("inlineCode",{parentName:"td"},"is_partition_field_write_in_file")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the partition field and the value of it will be write into data file.For example, if you want to write a Hive Data File, Its value should be ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns.Which columns need be write to file, default value is all of the columns get from ",(0,l.yg)("inlineCode",{parentName:"td"},"Transform")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"Source"),". The order of the fields determines the order in which the file is actually written.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"If ",(0,l.yg)("inlineCode",{parentName:"td"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory.Please note that, If ",(0,l.yg)("inlineCode",{parentName:"td"},"is_enable_transaction")," is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", we will auto add ",(0,l.yg)("inlineCode",{parentName:"td"},"${transactionId}_")," in the head of the file.Only support ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," now.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000000"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval")," jointly decide. If the value of ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size"),". If ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null},"The compress codec of files and the details that supported as the following shown:","[txt: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),",json: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),",csv: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),",orc: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"td"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"td"},"zlib")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),",parquet: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"td"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"td"},"gzip")," ",(0,l.yg)("inlineCode",{parentName:"td"},"brotli")," ",(0,l.yg)("inlineCode",{parentName:"td"},"zstd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),"]",".Tips: excel type does not support any compression format.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"The krb5 path of kerberos")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The principal of kerberos")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The keytab path of kerberos")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null},"compress codec")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is excel.When File Format is Excel,The maximum number of data items that can be cached in the memory.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is excel.Writer the sheet of the workbook")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_root_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORDS"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml, specifies the tag name of the root element within the XML file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORD"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml, specifies the tag name of the data rows within the XML file")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml, specifies Whether to process data using the tag attribute format.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is json,text,csv,xml.")))),(0,l.yg)("h3",{id:"tips"},"Tips"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x. If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this.")),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"simple"},"Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to Hdfs.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        c_map = "map<string, smallint>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    HdfsFile {\n      fs.defaultFS = "hdfs://hadoopcluster"\n      path = "/tmp/hive/warehouse/test2"\n      file_format_type = "orc"\n    }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,l.yg)("h3",{id:"for-orc-file-format-simple-config"},"For orc file format simple config"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    file_format_type = "orc"\n}\n')),(0,l.yg)("h3",{id:"for-text-file-format-with-have_partition-and-custom_filename-and-sink_columns"},"For text file format with ",(0,l.yg)("inlineCode",{parentName:"h3"},"have_partition")," and ",(0,l.yg)("inlineCode",{parentName:"h3"},"custom_filename")," and ",(0,l.yg)("inlineCode",{parentName:"h3"},"sink_columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n}\n')),(0,l.yg)("h3",{id:"for-parquet-file-format-with-have_partition-and-custom_filename-and-sink_columns"},"For parquet file format with ",(0,l.yg)("inlineCode",{parentName:"h3"},"have_partition")," and ",(0,l.yg)("inlineCode",{parentName:"h3"},"custom_filename")," and ",(0,l.yg)("inlineCode",{parentName:"h3"},"sink_columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    file_format_type = "parquet"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n}\n')),(0,l.yg)("h3",{id:"for-kerberos-simple-config"},"For kerberos simple config"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    hdfs_site_path = "/path/to/your/hdfs_site_path"\n    kerberos_principal = "your_principal@EXAMPLE.COM"\n    kerberos_keytab_path = "/path/to/your/keytab/file.keytab"\n}\n')),(0,l.yg)("h3",{id:"for-compress-simple-config"},"For compress simple config"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    compress_codec = "lzo"\n}\n')))}g.isMDXComponent=!0}}]);