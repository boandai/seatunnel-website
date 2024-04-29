"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[555],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const r={},o="Command usage instructions",s={unversionedId:"flink/commands/start-seatunnel-flink.sh",id:"version-2.1.0/flink/commands/start-seatunnel-flink.sh",title:"Command usage instructions",description:"Command usage instructions [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/commands/start-seatunnel-flink.sh.md",sourceDirName:"flink/commands",slug:"/flink/commands/start-seatunnel-flink.sh",permalink:"/docs/2.1.0/flink/commands/start-seatunnel-flink.sh",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/commands/start-seatunnel-flink.sh.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set Up Environment and Run Simple Example",permalink:"/docs/2.1.0/developement/setup"},next:{title:"Config Examples",permalink:"/docs/2.1.0/flink/configuration/ConfigExamples"}},l={},p=[{value:"seatunnel flink start command",id:"seatunnel-flink-start-command",level:2},{value:"usage instructions",id:"usage-instructions",level:3}],c={toc:p},u="wrapper";function h(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"command-usage-instructions"},"Command usage instructions"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Command usage instructions ","[Flink]")),(0,i.yg)("h2",{id:"seatunnel-flink-start-command"},"seatunnel flink start command"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh  \n")),(0,i.yg)("h3",{id:"usage-instructions"},"usage instructions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\-c config-path \\  \n-i key=value \\  \n[other params]  \n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"-c")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"--config")," to specify the path of the configuration file")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"-i")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"--variable")," to specify the variables in the configuration file, you can configure multiple"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  execution.parallelism = 1\n}\n\nsource {\n    FakeSourceStream {\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      sql = "select name,age from fake where name=\'"${my_name}"\'"\n    }\n}\n\nsink {\n  ConsoleSink {}\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Run")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"}," bin/start-seatunnel-flink.sh \\\n -c config-path \\\n -i my_name=kid-xiong\n")),(0,i.yg)("p",null,"This designation will replace ",(0,i.yg)("inlineCode",{parentName:"p"},'"${my_name}"')," in the configuration file with ",(0,i.yg)("inlineCode",{parentName:"p"},"kid-xiong")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"For the rest of the parameters, refer to the original flink parameters. Check the flink parameter method: ",(0,i.yg)("inlineCode",{parentName:"p"},"bin/flink run -h")," . The parameters can be added as needed. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"-m yarn-cluster")," is specified as ",(0,i.yg)("inlineCode",{parentName:"p"},"on yarn")," mode.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/flink run -h\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Flink standalone")," configurable parameters")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'Action "run" compiles and runs a program.\n\n  Syntax: run [OPTIONS] <jar-file> <arguments>\n  "run" action options:\n     -c,--class <classname>                     Class with the program entry\n                                                point ("main()" method). Only\n                                                needed if the JAR file does not\n                                                specify the class in its\n                                                manifest.\n     -C,--classpath <url>                       Adds a URL to each user code\n                                                classloader  on all nodes in the\n                                                cluster. The paths must specify\n                                                a protocol (e.g. file://) and be\n                                                accessible on all nodes (e.g. by\n                                                means of a NFS share). You can\n                                                use this option multiple times\n                                                for specifying more than one\n                                                URL. The protocol must be\n                                                supported by the {@link\n                                                java.net.URLClassLoader}.\n     -d,--detached                              If present, runs the job in\n                                                detached mode\n     -n,--allowNonRestoredState                 Allow to skip savepoint state\n                                                that cannot be restored. You\n                                                need to allow this if you\n                                                removed an operator from your\n                                                program that was part of the\n                                                program when the savepoint was\n                                                triggered.\n     -p,--parallelism <parallelism>             The parallelism with which to\n                                                run the program. Optional flag\n                                                to override the default value\n                                                specified in the configuration.\n     -py,--python <pythonFile>                  Python script with the program\n                                                entry point. The dependent\n                                                resources can be configured with\n                                                the `--pyFiles` option.\n     -pyarch,--pyArchives <arg>                 Add python archive files for\n                                                job. The archive files will be\n                                                extracted to the working\n                                                directory of python UDF worker.\n                                                For each archive file, a target\n                                                directory be specified. If the\n                                                target directory name is\n                                                specified, the archive file will\n                                                be extracted to a directory with\n                                                the specified name. Otherwise,\n                                                the archive file will be\n                                                extracted to a directory with\n                                                the same name of the archive\n                                                file. The files uploaded via\n                                                this option are accessible via\n                                                relative path. \'#\' could be used\n                                                as the separator of the archive\n                                                file path and the target\n                                                directory name. Comma (\',\')\n                                                could be used as the separator\n                                                to specify multiple archive\n                                                files. This option can be used\n                                                to upload the virtual\n                                                environment, the data files used\n                                                in Python UDF (e.g.,\n                                                --pyArchives\n                                                file:///tmp/py37.zip,file:///tmp\n                                                /data.zip#data --pyExecutable\n                                                py37.zip/py37/bin/python). The\n                                                data files could be accessed in\n                                                Python UDF, e.g.: f =\n                                                open(\'data/data.txt\', \'r\').\n     -pyclientexec,--pyClientExecutable <arg>   The path of the Python\n                                                interpreter used to launch the\n                                                Python process when submitting\n                                                the Python jobs via "flink run"\n                                                or compiling the Java/Scala jobs\n                                                containing Python UDFs.\n     -pyexec,--pyExecutable <arg>               Specify the path of the python\n                                                interpreter used to execute the\n                                                python UDF worker (e.g.:\n                                                --pyExecutable\n                                                /usr/local/bin/python3). The\n                                                python UDF worker depends on\n                                                Python 3.6+, Apache Beam\n                                                (version == 2.27.0), Pip\n                                                (version >= 7.1.0) and\n                                                SetupTools (version >= 37.0.0).\n                                                Please ensure that the specified\n                                                environment meets the above\n                                                requirements.\n     -pyfs,--pyFiles <pythonFiles>              Attach custom files for job. The\n                                                standard resource file suffixes\n                                                such as .py/.egg/.zip/.whl or\n                                                directory are all supported.\n                                                These files will be added to the\n                                                PYTHONPATH of both the local\n                                                client and the remote python UDF\n                                                worker. Files suffixed with .zip\n                                                will be extracted and added to\n                                                PYTHONPATH. Comma (\',\') could be\n                                                used as the separator to specify\n                                                multiple files (e.g., --pyFiles\n                                                file:///tmp/myresource.zip,hdfs:\n                                                ///$namenode_address/myresource2\n                                                .zip).\n     -pym,--pyModule <pythonModule>             Python module with the program\n                                                entry point. This option must be\n                                                used in conjunction with\n                                                `--pyFiles`.\n     -pyreq,--pyRequirements <arg>              Specify a requirements.txt file\n                                                which defines the third-party\n                                                dependencies. These dependencies\n                                                will be installed and added to\n                                                the PYTHONPATH of the python UDF\n                                                worker. A directory which\n                                                contains the installation\n                                                packages of these dependencies\n                                                could be specified optionally.\n                                                Use \'#\' as the separator if the\n                                                optional parameter exists (e.g.,\n                                                --pyRequirements\n                                                file:///tmp/requirements.txt#fil\n                                                e:///tmp/cached_dir).\n     -s,--fromSavepoint <savepointPath>         Path to a savepoint to restore\n                                                the job from (for example\n                                                hdfs:///flink/savepoint-1537).\n     -sae,--shutdownOnAttachedExit              If the job is submitted in\n                                                attached mode, perform a\n                                                best-effort cluster shutdown\n                                                when the CLI is terminated\n                                                abruptly, e.g., in response to a\n                                                user interrupt, such as typing\n                                                Ctrl + C.\nOptions for Generic CLI mode:\n     -D <property=value>   Allows specifying multiple generic configuration\n                           options. The available options can be found at\n                           https://nightlies.apache.org/flink/flink-docs-stable/\n                           ops/config.html\n     -e,--executor <arg>   DEPRECATED: Please use the -t option instead which is\n                           also available with the "Application Mode".\n                           The name of the executor to be used for executing the\n                           given job, which is equivalent to the\n                           "execution.target" config option. The currently\n                           available executors are: "remote", "local",\n                           "kubernetes-session", "yarn-per-job", "yarn-session".\n     -t,--target <arg>     The deployment target for the given application,\n                           which is equivalent to the "execution.target" config\n                           option. For the "run" action the currently available\n                           targets are: "remote", "local", "kubernetes-session",\n                           "yarn-per-job", "yarn-session". For the\n                           "run-application" action the currently available\n                           targets are: "kubernetes-application".\n')),(0,i.yg)("p",null,"For example: ",(0,i.yg)("inlineCode",{parentName:"p"},"-p 2")," specifies that the job parallelism is ",(0,i.yg)("inlineCode",{parentName:"p"},"2")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n-p 2 \\\n-c config-path\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Configurable parameters of ",(0,i.yg)("inlineCode",{parentName:"li"},"flink yarn-cluster"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"Options for yarn-cluster mode:\n     -m,--jobmanager <arg>            Set to yarn-cluster to use YARN execution\n                                      mode.\n     -yid,--yarnapplicationId <arg>   Attach to running YARN session\n     -z,--zookeeperNamespace <arg>    Namespace to create the Zookeeper\n                                      sub-paths for high availability mode\n\n  Options for default mode:\n     -D <property=value>             Allows specifying multiple generic\n                                     configuration options. The available\n                                     options can be found at\n                                     https://nightlies.apache.org/flink/flink-do\n                                     cs-stable/ops/config.html\n     -m,--jobmanager <arg>           Address of the JobManager to which to\n                                     connect. Use this flag to connect to a\n                                     different JobManager than the one specified\n                                     in the configuration. Attention: This\n                                     option is respected only if the\n                                     high-availability configuration is NONE.\n     -z,--zookeeperNamespace <arg>   Namespace to create the Zookeeper sub-paths\n                                     for high availability mode\n")),(0,i.yg)("p",null,"For example: ",(0,i.yg)("inlineCode",{parentName:"p"},"-m yarn-cluster -ynm seatunnel")," specifies that the job is running on ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn"),", and the name of ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn WebUI")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"seatunnel")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n-ynm seatunnel \\\n-c config-path\n")))}h.isMDXComponent=!0}}]);