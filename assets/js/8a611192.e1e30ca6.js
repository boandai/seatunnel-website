"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7490],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=o(t),y=r,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||l;return t?a.createElement(m,i(i({ref:n},g),{},{components:t})):a.createElement(m,i({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},77926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(58168),r=(t(96540),t(15680));const l={},i="Jdbc",s={unversionedId:"spark/configuration/sink-plugins/Jdbc",id:"version-2.1.0/spark/configuration/sink-plugins/Jdbc",title:"Jdbc",description:"Sink plugin : Jdbc [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Jdbc.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Jdbc",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Jdbc",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Jdbc.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iceberg",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Iceberg"},next:{title:"Kafka",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Kafka"}},p={},o=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:5},{value:"dbTable string",id:"dbtable-string",level:3},{value:"saveMode string",id:"savemode-string",level:3},{value:"useSsl string",id:"usessl-string",level:3},{value:"customUpdateStmt string",id:"customupdatestmt-string",level:3},{value:"duplicateIncs string",id:"duplicateincs-string",level:3},{value:"showSql",id:"showsql",level:3},{value:"Examples",id:"examples",level:2}],g={toc:o},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"jdbc"},"Jdbc"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sink plugin : Jdbc ","[Spark]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Support ",(0,r.yg)("inlineCode",{parentName:"p"},"Update")," to output data to Relational database"),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dbTable"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"saveMode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"error")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"useSsl"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"customUpdateStmt"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"duplicateIncs"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"showSql"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"The URL of the JDBC connection. Refer to a case: ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost/dbName")),(0,r.yg)("h3",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"username"),(0,r.yg)("h5",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"user password"),(0,r.yg)("h3",{id:"dbtable-string"},"dbTable ","[string]"),(0,r.yg)("p",null,"Source data table name"),(0,r.yg)("h3",{id:"savemode-string"},"saveMode ","[string]"),(0,r.yg)("p",null,"Storage mode, add mode ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," , perform data overwrite in a specified way when inserting data key conflicts"),(0,r.yg)("p",null,"Basic mode, currently supports ",(0,r.yg)("inlineCode",{parentName:"p"},"overwrite")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"append")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"ignore")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"error")," . For the specific meaning of each mode, see ",(0,r.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#save-modes"},"save-modes")),(0,r.yg)("h3",{id:"usessl-string"},"useSsl ","[string]"),(0,r.yg)("p",null,"Configure when ",(0,r.yg)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," , whether to enable ssl, the default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"false")),(0,r.yg)("h3",{id:"customupdatestmt-string"},"customUpdateStmt ","[string]"),(0,r.yg)("p",null,"Configure when ",(0,r.yg)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," , which is used to specify the update statement template for key conflicts"),(0,r.yg)("p",null,"Refer to the usage of ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO table (...) values (...) ON DUPLICATE KEY UPDATE... ")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql")," , use placeholders or fixed values in ",(0,r.yg)("inlineCode",{parentName:"p"},"values")),(0,r.yg)("h3",{id:"duplicateincs-string"},"duplicateIncs ","[string]"),(0,r.yg)("p",null,"Configure when ",(0,r.yg)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," , and when the specified key conflicts, the value is updated to the existing value plus the original value"),(0,r.yg)("h3",{id:"showsql"},"showSql"),(0,r.yg)("p",null,"Configure when ",(0,r.yg)("inlineCode",{parentName:"p"},"saveMode")," is specified as ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," , whether to show sql"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    saveMode = "update",\n    url = "jdbc:mysql://ip:3306/database",\n    user = "userName",\n    password = "***********",\n    dbTable = "tableName",\n    customUpdateStmt = "INSERT INTO table (column1, column2, created, modified, yn) values(?, ?, now(), now(), 1) ON DUPLICATE KEY UPDATE column1 = IFNULL(VALUES (column1), column1), column2 = IFNULL(VALUES (column2), column2)"\n}\n')))}u.isMDXComponent=!0}}]);