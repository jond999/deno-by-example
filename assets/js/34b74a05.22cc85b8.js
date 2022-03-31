"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[907],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},770:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={id:"advanced-run-on-docker",title:"Run Deno Application on docker | Continuous Integration and Deployment",sidebar_label:"Run Deno Application on docker",description:"Run Deno Application on docker | Continuous Integration and Deployment",keywords:["advanced","docker","data","cicd","tools","devops"],image:"https://source.unsplash.com/qX2ENCIxquA/800x450"},p=void 0,s={unversionedId:"advanced-run-on-docker",id:"advanced-run-on-docker",title:"Run Deno Application on docker | Continuous Integration and Deployment",description:"Run Deno Application on docker | Continuous Integration and Deployment",source:"@site/docs/advanced_run_on_docker.md",sourceDirName:".",slug:"/advanced-run-on-docker",permalink:"/deno-by-example/advanced-run-on-docker",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advanced_run_on_docker.md",tags:[],version:"current",frontMatter:{id:"advanced-run-on-docker",title:"Run Deno Application on docker | Continuous Integration and Deployment",sidebar_label:"Run Deno Application on docker",description:"Run Deno Application on docker | Continuous Integration and Deployment",keywords:["advanced","docker","data","cicd","tools","devops"],image:"https://source.unsplash.com/qX2ENCIxquA/800x450"},sidebar:"someSidebar",previous:{title:"Implementing Logger",permalink:"/deno-by-example/advanced-logger"},next:{title:"GraphQL Server",permalink:"/deno-by-example/advanced-graphql"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"1. Create a simple Deno WebApp",id:"1-create-a-simple-deno-webapp",level:2},{value:"2. Create a <code>Dockerfile</code>",id:"2-create-a-dockerfile",level:2},{value:"3. Install Deno Using docker",id:"3-install-deno-using-docker",level:2},{value:"4. Running Todo App",id:"4-running-todo-app",level:2},{value:"Bonus",id:"bonus",level:2},{value:"Some Usefull Docker Commands",id:"some-usefull-docker-commands",level:2}],m={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Before starting code, Lets understand the concept of CICD in brief. This will give us motive to read this blog further."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By- ThoughtWorks\u2019 definition for CI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Continuous Integration (CI) is a development practice that requires developers to integrate code\ninto a shared repository several times a day. Each check-in is then\nverified by an automated build, allowing teams to detect problems early.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read more:")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/es/continuous-integration"},"https://www.thoughtworks.com/es/continuous-integration")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By- Jez Humble\u2019s site")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Continuous Delivery is the ability to get changes of all types\u2014including new features,\nconfiguration changes, bug fixes and experiments\u2014into production, or into\nthe hands of users, safely and quickly in a sustainable way.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read more:")," ",(0,r.kt)("a",{parentName:"p",href:"https://continuousdelivery.com/"},"https://continuousdelivery.com/")),(0,r.kt)("p",null,"As we can see, There are many reason why we should follow the ",(0,r.kt)("strong",{parentName:"p"},"CICD")," in our project development cycle. The one of reason why i follow CICD in daily work. Its ",(0,r.kt)("strong",{parentName:"p"},"ease")," my work and I get a ",(0,r.kt)("strong",{parentName:"p"},"consistant environment")," for my development work. So that i can focus on more good things rather than ",(0,r.kt)("em",{parentName:"p"},"debuging")," Binary ",(0,r.kt)("strong",{parentName:"p"},"breaking issue"),"."),(0,r.kt)("p",null,"If you want to read more on CICD, You can read this ",(0,r.kt)("a",{parentName:"p",href:"https://stackify.com/what-is-cicd-whats-important-and-how-to-get-it-right/"},"article"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://source.unsplash.com/qX2ENCIxquA/800x450",alt:"p"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In this tutorial, I will mainly focus on how you can setup Simple Deno Web Application just using some docker commands. In next tuitor, I will explain how to setup a FullStack Deno Application.")),(0,r.kt)("h2",{id:"1-create-a-simple-deno-webapp"},"1. Create a simple Deno WebApp"),(0,r.kt)("p",null,"To show working example, We need to create a sample Application. Since the focus of this tutorial is not to create WebApp. I will recoomend you to checkout my tutorial ",(0,r.kt)("a",{parentName:"p",href:"/deno-by-example/advanced-react-ssr"},"here")," or ",(0,r.kt)("a",{parentName:"p",href:"https://deepak-v.medium.com//build-an-isomorphic-application-using-deno-and-react-without-webpack-deno-by-example-6c748abb3243?source=friends_link&sk=335ff7c133a790bb977d0077a322f3cd"},"medium"),"."),(0,r.kt)("p",null,"The given app is a SSR app, has only some basic functionality. You can checkout source in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/ssr"},"/examples/ssr")," folder. Once you run app, Open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/")," on browser. You will see Web as given below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/todo_demo.gif",alt:"todo gif"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/ssr\n\ndeno run --allow-net --allow-read --unstable server.tsx -c tsconfig.json\n")),(0,r.kt)("h2",{id:"2-create-a-dockerfile"},"2. Create a ",(0,r.kt)("inlineCode",{parentName:"h2"},"Dockerfile")),(0,r.kt)("p",null,"App looks good! Let's now create a Dockerfile to startwith."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"md docker-app && touch Dockerfile\n")),(0,r.kt)("p",null,"To test our docker is working fine, Let's add some ",(0,r.kt)("strong",{parentName:"p"},"Hello World")," program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM alpine\n\nRUN echo "Hello Stanger!"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and Run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t chucknorris .\ndocker run -it chucknorris\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Explaination:")," Here in above ",(0,r.kt)("em",{parentName:"p"},"Dockerfile"),", First We are pulling the lightest linux base OS. Once pull done, We are trying to Run ",(0,r.kt)("em",{parentName:"p"},"echo command"),". If all good, you will see below output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"}," ---\x3e Running in 5215187d3d6a\nHello Stanger!\nRemoving intermediate container 5215187d3d6a\n")),(0,r.kt)("p",null,"The above output tell us, things are OK."),(0,r.kt)("h2",{id:"3-install-deno-using-docker"},"3. Install Deno Using docker"),(0,r.kt)("p",null,"By default, Alpine image does not have any external software. This is the one of the thinest Linux client. To install Deno, We need to curl Deno binary. You can read all the details on ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/#installation"},"Deno WebSite"),"."),(0,r.kt)("p",null,"Let's add ",(0,r.kt)("em",{parentName:"p"},"curl")," using Dockerfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile" {3-5}',title:'"Dockerfile"',"{3-5}":!0},'FROM alpine\n\nRUN apk update && apk add curl\nENTRYPOINT ["curl"]\nCMD [ "curl", "https://api.chucknorris.io/jokes/random" ]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and Run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t chucknorris .\ndocker run -it chucknorris\n")),(0,r.kt)("p",null,"Once you run you will see output along with ",(0,r.kt)("em",{parentName:"p"},"chucknorris")," joke. I got mine joke as ",(0,r.kt)("em",{parentName:"p"},"\"Chuck Norris once threw a 'block party'. The city of Detroit filed for bankruptcy the next day\""),". If your are lucky, You may get more funnier joke."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download Deno Binary:"),"\nNow time to ",(0,r.kt)("em",{parentName:"p"},"install/download")," ",(0,r.kt)("strong",{parentName:"p"},"pre-compile")," version of Deno binary"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile" {5}',title:'"Dockerfile"',"{5}":!0},'FROM alpine\n\nRUN apk update && apk add curl\n\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\n\nENTRYPOINT ["dono"]\n\nCMD ["run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and Run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t deno-app .\ndocker run -it deno-app\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Issue")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are some compiled libraries missing on ",(0,r.kt)("strong",{parentName:"p"},"Alpine image"),". So when you try to run Deno you may can see error like ",(0,r.kt)("strong",{parentName:"p"},"standard_init_linux.go:211: exec user process caused"),". To fix above error, We will you modified version of Alpine Image."))),(0,r.kt)("p",null,"Let's update our docker file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile" {1}',title:'"Dockerfile"',"{1}":!0},'FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31\n\nRUN apk update && apk add curl\n\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\n\nENTRYPOINT ["deno"]\n\nCMD ["run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Explaination:")," Once we pulled the image, We used curl to get the ",(0,r.kt)("em",{parentName:"p"},"installation script")," from Deno website and download ",(0,r.kt)("em",{parentName:"p"},"Deno binary"),". Since default path of deno binary is not ",(0,r.kt)("em",{parentName:"p"},"bin"),". So we need to copy binary to bin. You can find better way to setup path.\n",(0,r.kt)("em",{parentName:"p"},"ENTRYPOINT")," is to tell docker what command to use when we run docker run command. ",(0,r.kt)("em",{parentName:"p"},"CMD")," is the command to run."),(0,r.kt)("p",null,"If all OK, you will see bellow output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u276f docker run -it deno-app\nDownload https://deno.land/std/examples/welcome.ts\nWarning Implicitly using latest version (0.64.0) for https://deno.land/std/examples/welcome.ts\nDownload https://deno.land/std@0.64.0/examples/welcome.ts\nCheck https://deno.land/std@0.64.0/examples/welcome.ts\n\nWelcome to Deno \ud83e\udd95\n")),(0,r.kt)("h2",{id:"4-running-todo-app"},"4. Running Todo App"),(0,r.kt)("p",null,"We have completed our 90% job. Let's run our ",(0,r.kt)("em",{parentName:"p"},"todo-app"),". For that, we need to copy all the required files to the docker image. We can do either using ",(0,r.kt)("em",{parentName:"p"},"COPY")," command or mount volume. I will show both way of doing it. However, recoomended is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY"),". This is to decouple your sytem from Docker."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using COPY:")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Forbidden path outside the build context")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since docker does not allow file to be coppied from out of the foder. We have to copy files from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/ssr/"},"/examples/ssr")," folder to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/docker-app"},"examples/docker-app"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"pwd\n#something/examples/docker-app\ncp -r ../ssr ./ssr\n")),(0,r.kt)("p",null,"Update Dockerfile to copy files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile" {6,7}',title:'"Dockerfile"',"{6,7}":!0},'FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31\nRUN apk update && apk add curl\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\nWORKDIR /app\nCOPY ssr/ /app/\nENTRYPOINT ["deno"]\nCMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and Run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2,9}","{2,9}":!0},"docker build -t deno-app .\ndocker run -d deno-app\n\n## output\n# f75f6e55675b1f8558fcfe2c34cd25f366aacc4b0f6b5df7d7982bf3cea3c46d\n\n## Note down the output of last command\n\ndocker logs f75f6e55675b\n\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you notice, for first time we have run docker in ",(0,r.kt)("strong",{parentName:"p"},"detteched")," mode ie. ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d"),". Since we are running a ",(0,r.kt)("strong",{parentName:"p"},"long running server"),", We should dettached the Docket image from our sytem."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Explaination:")," Since we are running docker container in detteched mode. We have to grab ",(0,r.kt)("strong",{parentName:"p"},"container-id")," to see logs of the last docker run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps | grep todo-app\n\ndocker logs f75f6e55675b\n")),(0,r.kt)("p",null,"You can see output like ",(0,r.kt)("em",{parentName:"p"},"server is running on http://localhost:8000/"),". However, when you try to access ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/")," on browser. You cant access it. This is becuase docker runs container in ",(0,r.kt)("em",{parentName:"p"},"isolation"),". It does not ",(0,r.kt)("em",{parentName:"p"},"implecite")," expose ports out of the container. To do so, We have to ",(0,r.kt)("em",{parentName:"p"},"expose port")," in docker file and same time need ",(0,r.kt)("em",{parentName:"p"},"bind to")," external port while running command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile" {3-5}',title:'"Dockerfile"',"{3-5}":!0},"## rest of the command\n\nWORKDIR /app\nEXPOSE 8080\nCOPY ssr/ /app/\n\n## rest of the command\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and run with port binding:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t deno-app .\ndocker run -d -p8000:8000 deno-app\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/")," in browser, You can see running todo app."),(0,r.kt)("h2",{id:"bonus"},"Bonus"),(0,r.kt)("p",null,"I told you, That you can run file without COPY command using valume mount. For that lets remove COPY commad from Dockerfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile" {3-5}',title:'"Dockerfile"',"{3-5}":!0},'FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31\nRUN apk update && apk add curl\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\nWORKDIR /app\nEXPOSE 8080\nENTRYPOINT ["deno"]\nCMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t deno-app .\ndocker run -d -p8000:8000 -v ${PWD}/ssr:/app  deno-app\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hope you like this tutorial. Please follow me and clap for me on medium:")," ",(0,r.kt)("a",{parentName:"p",href:"https://deepak-v.medium.com//"},"https://deepak-v.medium.com/")),(0,r.kt)("h2",{id:"some-usefull-docker-commands"},"Some Usefull Docker Commands"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Docker")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Docker Images: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker images ls")),(0,r.kt)("p",{parentName:"div"},"Running Process: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")),(0,r.kt)("p",{parentName:"div"},"Stop container: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop container-id")),(0,r.kt)("p",{parentName:"div"},"Stop all container time before: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps | grep \" minutes ago\" | awk '{print $1}' | xargs docker stop")),(0,r.kt)("p",{parentName:"div"},"Remove images: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker rmi -f id1 id2 id3")),(0,r.kt)("p",{parentName:"div"},"Logs: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker logs f75f6e55675b")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Source:")),(0,r.kt)("p",null,"You can get all source code on GitHub.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/docker-app"},"examples/docker-app")))}u.isMDXComponent=!0}}]);