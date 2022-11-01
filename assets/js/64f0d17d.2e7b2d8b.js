"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43228],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},c="MongoDb",s={unversionedId:"connector-v2/sink/MongoDB",id:"version-2.3.0-beta/connector-v2/sink/MongoDB",title:"MongoDb",description:"MongoDB sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/sink/MongoDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/MongoDB",permalink:"/docs/2.3.0-beta/connector-v2/sink/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/sink/MongoDB.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"LocalFile",permalink:"/docs/2.3.0-beta/connector-v2/sink/LocalFile"},next:{title:"Neo4j",permalink:"/docs/2.3.0-beta/connector-v2/sink/Neo4j"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"database string",id:"database-string",level:3},{value:"collection string",id:"collection-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDb"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MongoDB sink connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Write data to ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"batch")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"stream")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"exactly-once")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"schema projection")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"parallelism")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"support user-defined split"))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uri"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"database"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"collection"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"uri-string"},"uri ","[string]"),(0,o.kt)("p",null,"uri to write to mongoDB"),(0,o.kt)("h3",{id:"database-string"},"database ","[string]"),(0,o.kt)("p",null,"database to write to mongoDB"),(0,o.kt)("h3",{id:"collection-string"},"collection ","[string]"),(0,o.kt)("p",null,"collection to write to mongoDB"),(0,o.kt)("h3",{id:"common-options"},"common options"),(0,o.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.0-beta/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    uri = "mongodb://username:password@127.0.0.1:27017/mypost?retryWrites=true&writeConcern=majority"\n    database = "mydatabase"\n    collection = "mycollection"\n}\n')),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add MongoDB Sink Connector")))}d.isMDXComponent=!0}}]);