"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1262],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,g=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const i={},o="SeaTunnel now supports CDC (Capture Change Data) writing by ClickHouse Connector!",l={permalink:"/blog/2023/02/09/SeaTunnel_Now_Supports_CDC_Writing_by_ClickHouse_Connector.md",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2023-02-09-SeaTunnel_Now_Supports_CDC_Writing_by_ClickHouse_Connector.md.md",source:"@site/blog/2023-02-09-SeaTunnel_Now_Supports_CDC_Writing_by_ClickHouse_Connector.md.md",title:"SeaTunnel now supports CDC (Capture Change Data) writing by ClickHouse Connector!",description:"Written by Wang Hailin, Apache SeaTunnel PPMC",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[],readingTime:5.75,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Performance Test Report: SeaTunnel Synchronizes data in batches 420% Faster than GLUE!",permalink:"/blog/2023/3/29/Performance_Test_Report_SeaTunnel_Synchronizes_Data_in_Batches_420_Percent_Faster_than_GLUE.md"},nextItem:{title:"In the recently released SeaTunnel 2.3.0 official version",permalink:"/blog/Reveal the core design of the SeaTunnel Zeta synchronization engine!"}},c={authorsImageUrls:[]},s=[{value:"Preface",id:"preface",level:2},{value:"Overall design",id:"overall-design",level:2},{value:"Handling of cases where the primary key is not specified",id:"handling-of-cases-where-the-primary-key-is-not-specified",level:3},{value:"CDC data process",id:"cdc-data-process",level:3},{value:"Maintaining the Order of CDC Data",id:"maintaining-the-order-of-cdc-data",level:3},{value:"Implementing a General UPSERT Write",id:"implementing-a-general-upsert-write",level:3},{value:"Optimizing UPSERT for ReplacingMergeTree Engine",id:"optimizing-upsert-for-replacingmergetree-engine",level:3},{value:"Optimizing Updates for the MergeTree Engine",id:"optimizing-updates-for-the-mergetree-engine",level:3},{value:"Related PR",id:"related-pr",level:2},{value:"Reference",id:"reference",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Written by Wang Hailin, Apache SeaTunnel PPMC"),(0,r.yg)("h2",{id:"preface"},"Preface"),(0,r.yg)("p",null,"Currently, SeaTunnel supports database change data capture (CDC ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/3175"},"https://github.com/apache/incubator-seatunnel/issues/3175"),"), to transfer data changes to downstream systems in real time. SeaTunnel categorizes the captured data changes into the following 4 types: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"INSERT: Data insertion "),(0,r.yg)("li",{parentName:"ul"},"UPDATE_BEFORE: Historical value before data change "),(0,r.yg)("li",{parentName:"ul"},"UPDATE_AFTER: New value after data change "),(0,r.yg)("li",{parentName:"ul"},"DELETE: Data deletion ")),(0,r.yg)("p",null,"To handle the above data change operations, the Sink Connector needs to support writing behavior. This article will introduce how the ClickHouse Sink Connector supports writing these CDC types of data changes. "),(0,r.yg)("p",null,"For CDC scenarios, the primary key is a necessary condition, so first, it needs to support the general requirements of INSERT, UPDATE, DELETE, etc. based on the primary key and ensure that the writing order is consistent with the CDC event order. In addition, considering the complexity of the data source in practice, it also needs to support UPSERT writing. Finally, according to the characteristics of ClickHouse itself, corresponding optimizations need to be made, such as UPDATE and DELETE being heavyweight operations in ClickHouse, which should be optimized based on the corresponding table engine's characteristics."),(0,r.yg)("h2",{id:"overall-design"},"Overall design"),(0,r.yg)("p",null,"The current ClickHouse Sink Connector is based on the JDBC Driver implementation, and a group of JDBC executors can be designed to encapsulate the processing of different types of data, making it convenient to switch or combine implementations based on actual scenarios and encapsulate implementation details. "),(0,r.yg)("p",null,"JdbcBatchStatementExecutor is the top-level interface of the executor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public interface JdbcBatchStatementExecutor extends AutoCloseable {\n\n    void prepareStatements(Connection connection) throws SQLException;\n\n    void addToBatch(SeaTunnelRow record) throws SQLException;\n\n    void executeBatch() throws SQLException;\n\n    void closeStatements() throws SQLException;\n\n    @Override\n    default void close() throws SQLException {\n        closeStatements();\n    }\n}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"JdbcBatchStatementExecutor")," has the following implementation classes: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SimpleBatchStatementExecutor // implements simple SQL Batch execution logic \nInsertOrUpdateBatchStatementExecutor // implements INSERT, UPDATE update, also supports UPSERT mode \nReduceBufferedBatchStatementExecutor // memory accumulation, when refreshing to the database, the data change type (INSERT, UPDATE, DELETE) is distributed to the specific execution executor \n")),(0,r.yg)("h3",{id:"handling-of-cases-where-the-primary-key-is-not-specified"},"Handling of cases where the primary key is not specified"),(0,r.yg)("p",null,"Currently, in CDC processing, the primary key is a necessary condition. If the Sink Connector is not specified in the primary key column configuration, it uses the append-only mode to write, calling ",(0,r.yg)("inlineCode",{parentName:"p"},"SimpleBatchStatementExecutor")," directly."),(0,r.yg)("h3",{id:"cdc-data-process"},"CDC data process"),(0,r.yg)("p",null,"We divide the execution logic of data processing as follows: different data types enter the corresponding Executor and are finally transformed into their respective SQL statements for execution, and Jdbc Batch batching is used during this process."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CDC Event\n               /         \\\n              /           \\\n             /             \\\n            /               \\\n    DELETE Executor   INSERT OR UPDATE Executor\n                            /          \\\n                           /            \\\n                          /              \\\n                         /                \\\n                     INSERT Executor    UPDATE Executor\n")),(0,r.yg)("h3",{id:"maintaining-the-order-of-cdc-data"},"Maintaining the Order of CDC Data"),(0,r.yg)("p",null,"CDC events are ordered, and writing must be processed in the order in which the events occur, otherwise data inconsistencies may occur. "),(0,r.yg)("p",null,"In the previous logic, data of different types were distributed to their respective Executors and Jdbc Batch was used for batch submission to improve write performance, but categorizing batching can result in the order of submissions not being consistent with the CDC event order."),(0,r.yg)("p",null,"We can add an execution barrier marker, when the processed data row is of the same type as the previous data row, it can be batched, if not, the previous batch is first flushed to the database, ensuring that the data write order is strictly consistent with the CDC event order."),(0,r.yg)("p",null,"Example for ",(0,r.yg)("inlineCode",{parentName:"p"},"InsertOrUpdateBatchStatementExecutor")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public class InsertOrUpdateBatchStatementExecutor implements JdbcBatchStatementExecutor {\n    @Override\n    public void addToBatch(SeaTunnelRow record) throws SQLException {\n        boolean currentChangeFlag = hasInsert(record);\n        if (currentChangeFlag) {\n            if (preChangeFlag != null && !preChangeFlag) {\n                updateStatement.executeBatch();\n                updateStatement.clearBatch();\n            }\n            valueRowConverter.toExternal(record, insertStatement);\n            insertStatement.addBatch();\n        } else {\n            if (preChangeFlag != null && preChangeFlag) {\n                insertStatement.executeBatch();\n                insertStatement.clearBatch();\n            }\n            valueRowConverter.toExternal(record, updateStatement);\n            updateStatement.addBatch();\n        }\n        preChangeFlag = currentChangeFlag;\n        submitted = false;\n    }\n    \n    @Override\n    public void executeBatch() throws SQLException {\n        if (preChangeFlag != null) {\n            if (preChangeFlag) {\n                insertStatement.executeBatch();\n                insertStatement.clearBatch();\n            } else {\n                updateStatement.executeBatch();\n                updateStatement.clearBatch();\n            }\n        }\n        submitted = true;\n    }\n}\n")),(0,r.yg)("p",null,"Of course, this will significantly slow down the batch processing, so we use ",(0,r.yg)("inlineCode",{parentName:"p"},"ReduceBufferedBatchStatementExecutor"),"to add a memory buffer layer, and when executing batch submissions, we distribute submissions to the database."),(0,r.yg)("p",null,"Example for ",(0,r.yg)("inlineCode",{parentName:"p"},"ReduceBufferedBatchStatementExecutor")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public class ReduceBufferedBatchStatementExecutor implements JdbcBatchStatementExecutor {\n    private final LinkedHashMap<SeaTunnelRow, Pair<Boolean, SeaTunnelRow>> buffer = new LinkedHashMap<>();\n    \n    @Override\n    public void addToBatch(SeaTunnelRow record) throws SQLException {\n        buffer.put(record, ...);\n    }\n    \n    @Override\n    public void executeBatch() throws SQLException {\n        Boolean preChangeFlag = null;\n        Set<Map.Entry<SeaTunnelRow, Pair<Boolean, SeaTunnelRow>>> entrySet = buffer.entrySet();\n        for (Map.Entry<SeaTunnelRow, Pair<Boolean, SeaTunnelRow>> entry : entrySet) {\n            Boolean currentChangeFlag = entry.getValue().getKey();\n            if (currentChangeFlag) {\n                if (preChangeFlag != null && !preChangeFlag) {\n                    deleteExecutor.executeBatch();\n                }\n                insertOrUpdateExecutor.addToBatch(entry.getValue().getValue());\n            } else {\n                if (preChangeFlag != null && preChangeFlag) {\n                    insertOrUpdateExecutor.executeBatch();\n                }\n                deleteExecutor.addToBatch(entry.getKey());\n            }\n            preChangeFlag = currentChangeFlag;\n        }\n    \n        if (preChangeFlag != null) {\n            if (preChangeFlag) {\n                insertOrUpdateExecutor.executeBatch();\n            } else {\n                deleteExecutor.executeBatch();\n            }\n        }\n        buffer.clear();\n    }\n}\n")),(0,r.yg)("h3",{id:"implementing-a-general-upsert-write"},"Implementing a General UPSERT Write"),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"InsertOrUpdateBatchStatementExecutor"),", you can configure to turn on UPSERT, when processing INSERT or UPDATE data types, it will first use the primary key to query the data row to see if it already exists and then decide to use INSERT or UPDATE SQL for writing. "),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: This configuration is optional and will slow down the write speed, only opens when certain special scenarios are required.")),(0,r.yg)("p",null,"Example for ",(0,r.yg)("inlineCode",{parentName:"p"},"InsertOrUpdateBatchStatementExecutor")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"public class InsertOrUpdateBatchStatementExecutor implements JdbcBatchStatementExecutor {\n    @Override\n    public void addToBatch(SeaTunnelRow record) throws SQLException {\n        boolean currentChangeFlag = hasInsert(record);\n      ...\n    }\n\n    private boolean hasInsert(SeaTunnelRow record) throws SQLException {\n        if (upsertMode()) {\n            return !exist(keyExtractor.apply(record));\n        }\n        switch (record.getRowKind()) {\n            case INSERT:\n                return true;\n            case UPDATE_AFTER:\n                return false;\n            default:\n                throw new UnsupportedOperationException();\n        }\n    }\n    \n    private boolean exist(SeaTunnelRow pk) throws SQLException {\n        keyRowConverter.toExternal(pk, existStatement);\n        try (ResultSet resultSet = existStatement.executeQuery()) {\n            return resultSet.next();\n        }\n    }\n}\n")),(0,r.yg)("h3",{id:"optimizing-upsert-for-replacingmergetree-engine"},"Optimizing UPSERT for ReplacingMergeTree Engine"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," table engine can configure an ",(0,r.yg)("inlineCode",{parentName:"p"},"ORDER BY")," field, and when executing the INSERT INTO statement, it covers the records with the same ORDER BY field. We can also utilize this feature to implement UPSERT."),(0,r.yg)("p",null,"When the user writes to the ",(0,r.yg)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," table engine and the table's ",(0,r.yg)("inlineCode",{parentName:"p"},"ORDER BY")," field is the same as the primary key field configured in the Sink Connector, both INSERT/UPDATE_AFTER data types are processed as INSERT to implement UPSERT."),(0,r.yg)("h3",{id:"optimizing-updates-for-the-mergetree-engine"},"Optimizing Updates for the MergeTree Engine"),(0,r.yg)("p",null,"DELETE and UPDATE are heavyweight operations in ClickHouse, but there is an experimental lightweight deletion (",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/delete"},"https://clickhouse.com/docs/en/sql-reference/statements/delete"),") for ",(0,r.yg)("inlineCode",{parentName:"p"},"MergeTree")," engine, which performs better than the heavyweight deletion. We allow the user to configure the lightweight deletion."),(0,r.yg)("p",null,"When the user writes to the ",(0,r.yg)("inlineCode",{parentName:"p"},"MergeTree")," table engine and enables the lightweight deletion, we treat both DELETE/UPDATE_BEFORE data types as lightweight deletions, and treat both INSERT/UPDATE_AFTER data types as INSERTs, avoiding the UPDATE operation and using the lightweight deletion."),(0,r.yg)("h2",{id:"related-pr"},"Related PR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3653"},"https://github.com/apache/incubator-seatunnel/pull/3653")," ")),(0,r.yg)("p",null,"Contribution to improving the related functions is welcomed, if you have any questions, please raise an issue on SeaTunnel GitHub (",(0,r.yg)("a",{parentName:"p",href:"https://www.github.com/apache/incubator-seatunnel"},"https://www.github.com/apache/incubator-seatunnel"),"), and we will reply as soon as possible."),(0,r.yg)("h2",{id:"reference"},"Reference"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/delete"},"https://clickhouse.com/docs/en/sql-reference/statements/delete")," "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree"},"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree"))))}d.isMDXComponent=!0}}]);