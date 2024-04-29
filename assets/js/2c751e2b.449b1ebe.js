"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72332],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=d(t),c=r,y=p["".concat(i,".").concat(c)]||p[c]||u[c]||l;return t?a.createElement(y,s(s({ref:n},g),{},{components:t})):a.createElement(y,s({ref:n},g))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<l;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const l={},s="ClickhouseFile",o={unversionedId:"connector-v2/sink/ClickhouseFile",id:"version-2.3.0-beta/connector-v2/sink/ClickhouseFile",title:"ClickhouseFile",description:"Clickhouse file sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/sink/ClickhouseFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/ClickhouseFile",permalink:"/docs/2.3.0-beta/connector-v2/sink/ClickhouseFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/sink/ClickhouseFile.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/docs/2.3.0-beta/connector-v2/sink/Clickhouse"},next:{title:"Console",permalink:"/docs/2.3.0-beta/connector-v2/sink/Console"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"clickhouse_local_path string",id:"clickhouse_local_path-string",level:3},{value:"copy_method string",id:"copy_method-string",level:3},{value:"node_free_password boolean",id:"node_free_password-boolean",level:3},{value:"node_pass list",id:"node_pass-list",level:3},{value:"node_pass.node_address string",id:"node_passnode_address-string",level:3},{value:"node_pass.username string",id:"node_passusername-string",level:3},{value:"node_pass.password string",id:"node_passpassword-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],g={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"clickhousefile"},"ClickhouseFile"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Clickhouse file sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Generate the clickhouse data file with the clickhouse-local program, and then send it to the clickhouse\nserver, also call bulk load. This connector only support clickhouse table which engine is 'Distributed'.And ",(0,r.yg)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),". Supports Batch and Streaming mode."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"schema projection"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Write data to Clickhouse can also be done using JDBC")),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clickhouse_local_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sharding_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"copy_method"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"scp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_free_password"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_pass"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_pass.node_address"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_pass.username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'"root"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_pass.password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,r.yg)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," database"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"The table name"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," user password"),(0,r.yg)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,r.yg)("p",null,"When ClickhouseFile split data, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm. "),(0,r.yg)("h3",{id:"clickhouse_local_path-string"},"clickhouse_local_path ","[string]"),(0,r.yg)("p",null,"The address of the clickhouse-local program on the spark node. Since each task needs to be called,\nclickhouse-local should be located in the same path of each spark node."),(0,r.yg)("h3",{id:"copy_method-string"},"copy_method ","[string]"),(0,r.yg)("p",null,"Specifies the method used to transfer files, the default is scp, optional scp and rsync"),(0,r.yg)("h3",{id:"node_free_password-boolean"},"node_free_password ","[boolean]"),(0,r.yg)("p",null,"Because seatunnel need to use scp or rsync for file transfer, seatunnel need clickhouse server-side access.\nIf each spark node and clickhouse server are configured with password-free login,\nyou can configure this option to true, otherwise you need to configure the corresponding node password in the node_pass configuration"),(0,r.yg)("h3",{id:"node_pass-list"},"node_pass ","[list]"),(0,r.yg)("p",null,"Used to save the addresses and corresponding passwords of all clickhouse servers"),(0,r.yg)("h3",{id:"node_passnode_address-string"},"node_pass.node_address ","[string]"),(0,r.yg)("p",null,"The address corresponding to the clickhouse server"),(0,r.yg)("h3",{id:"node_passusername-string"},"node_pass.username ","[string]"),(0,r.yg)("p",null,"The username corresponding to the clickhouse server, default root user."),(0,r.yg)("h3",{id:"node_passpassword-string"},"node_pass.password ","[string]"),(0,r.yg)("p",null,"The password corresponding to the clickhouse server."),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.0-beta/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'  ClickhouseFile {\n    host = "192.168.0.1:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    clickhouse_local_path = "/Users/seatunnel/Tool/clickhouse local"\n    sharding_key = "age"\n    node_free_password = false\n    node_pass = [{\n      node_address = "192.168.0.1"\n      password = "seatunnel"\n    }]\n  }\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support write data to ClickHouse File and move to ClickHouse data dir")))}u.isMDXComponent=!0}}]);