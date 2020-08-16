(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(79)),c={id:"advanced-run-on-docker",title:"Run Deno Application on docker | Continuous Integration and Deployment",sidebar_label:"Run Deno Application on docker",description:"Run Deno Application on docker | Continuous Integration and Deployment",keywords:["advanced","docker","data","cicd","tools","devops"],image:"https://source.unsplash.com/qX2ENCIxquA/800x450"},l={unversionedId:"advanced-run-on-docker",id:"advanced-run-on-docker",isDocsHomePage:!1,title:"Run Deno Application on docker | Continuous Integration and Deployment",description:"Run Deno Application on docker | Continuous Integration and Deployment",source:"@site/docs/advanced_run_on_docker.md",permalink:"/deno-by-example/advanced-run-on-docker",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advanced_run_on_docker.md",sidebar_label:"Run Deno Application on docker",sidebar:"someSidebar",previous:{title:"Building A Super Cool Colorful Logger with Deno fmt module",permalink:"/deno-by-example/advanced-logger"}},i=[{value:"Overview",id:"overview",children:[]},{value:"1. Create a simple Deno WebApp",id:"1-create-a-simple-deno-webapp",children:[]},{value:"2. Create a <code>Dockerfile</code>",id:"2-create-a-dockerfile",children:[]},{value:"3. Install Deno Using docker",id:"3-install-deno-using-docker",children:[]},{value:"4. Running Todo App",id:"4-running-todo-app",children:[]},{value:"Bonus",id:"bonus",children:[]},{value:"Some Usefull Docker Commands",id:"some-usefull-docker-commands",children:[]}],p={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Before starting code, Lets understand the concept of CICD in brief. This will give us motive to read this blog further."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"By- ThoughtWorks\u2019 definition for CI")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Continuous Integration (CI) is a development practice that requires developers to integrate code\ninto a shared repository several times a day. Each check-in is then\nverified by an automated build, allowing teams to detect problems early.\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Read more:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.thoughtworks.com/es/continuous-integration"}),"https://www.thoughtworks.com/es/continuous-integration")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"By- Jez Humble\u2019s site")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Continuous Delivery is the ability to get changes of all types\u2014including new features,\nconfiguration changes, bug fixes and experiments\u2014into production, or into\nthe hands of users, safely and quickly in a sustainable way.\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Read more:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://continuousdelivery.com/"}),"https://continuousdelivery.com/")),Object(r.b)("p",null,"As we can see, There are many reason why we should follow the ",Object(r.b)("strong",{parentName:"p"},"CICD")," in our project development cycle. The one of reason why i follow CICD in daily work. Its ",Object(r.b)("strong",{parentName:"p"},"ease")," my work and I get a ",Object(r.b)("strong",{parentName:"p"},"consistant environment")," for my development work. So that i can focus on more good things rather than ",Object(r.b)("em",{parentName:"p"},"debuging")," Binary ",Object(r.b)("strong",{parentName:"p"},"breaking issue"),"."),Object(r.b)("p",null,"If you want to read more on CICD, You can read this ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackify.com/what-is-cicd-whats-important-and-how-to-get-it-right/"}),"article"),"."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://source.unsplash.com/qX2ENCIxquA/800x450",alt:"p"}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"In this tutorial, I will mainly focus on how you can setup Simple Deno Web Application just using some docker commands. In next tuitor, I will explain how to setup a FullStack Deno Application.")),Object(r.b)("h2",{id:"1-create-a-simple-deno-webapp"},"1. Create a simple Deno WebApp"),Object(r.b)("p",null,"To show working example, We need to create a sample Application. Since the focus of this tutorial is not to create WebApp. I will recoomend you to checkout my tutorial ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/deno-by-example/advanced-react-ssr"}),"here")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@deepak_v/build-an-isomorphic-application-using-deno-and-react-without-webpack-deno-by-example-6c748abb3243?source=friends_link&sk=335ff7c133a790bb977d0077a322f3cd"}),"medium"),"."),Object(r.b)("p",null,"The given app is a SSR app, has only some basic functionality. You can checkout source in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/ssr"}),"/examples/ssr")," folder. Once you run app, Open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8000/"}),"http://localhost:8000/")," on browser. You will see Web as given below."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/todo_demo.gif",alt:"todo gif"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd examples/ssr\n\ndeno run --allow-net --allow-read --unstable server.tsx -c tsconfig.json\n")),Object(r.b)("h2",{id:"2-create-a-dockerfile"},"2. Create a ",Object(r.b)("inlineCode",{parentName:"h2"},"Dockerfile")),Object(r.b)("p",null,"App looks good! Let's now create a Dockerfile to startwith."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"md docker-app && touch Dockerfile\n")),Object(r.b)("p",null,"To test our docker is working fine, Let's add some ",Object(r.b)("strong",{parentName:"p"},"Hello World")," program."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'FROM alpine\n\nRUN echo "Hello Stanger!"\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build and Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t chucknorris .\ndocker run -it chucknorris\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Explaination:")," Here in above ",Object(r.b)("em",{parentName:"p"},"Dockerfile"),", First We are pulling the lightest linux base OS. Once pull done, We are trying to Run ",Object(r.b)("em",{parentName:"p"},"echo command"),". If all good, you will see below output."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"})," ---\x3e Running in 5215187d3d6a\nHello Stanger!\nRemoving intermediate container 5215187d3d6a\n")),Object(r.b)("p",null,"The above output tell us, things are OK."),Object(r.b)("h2",{id:"3-install-deno-using-docker"},"3. Install Deno Using docker"),Object(r.b)("p",null,"By default, Alpine image does not have any external software. This is the one of the thinest Linux client. To install Deno, We need to curl Deno binary. You can read all the details on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://deno.land/#installation"}),"Deno WebSite"),"."),Object(r.b)("p",null,"Let's add ",Object(r.b)("em",{parentName:"p"},"curl")," using Dockerfile."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {3-5}',title:'"Dockerfile"',"{3-5}":!0}),'FROM alpine\n\nRUN apk update && apk add curl\nENTRYPOINT ["curl"]\nCMD [ "curl", "https://api.chucknorris.io/jokes/random" ]\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build and Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t chucknorris .\ndocker run -it chucknorris\n")),Object(r.b)("p",null,"Once you run you will see output along with ",Object(r.b)("em",{parentName:"p"},"chucknorris")," joke. I got mine joke as ",Object(r.b)("em",{parentName:"p"},"\"Chuck Norris once threw a 'block party'. The city of Detroit filed for bankruptcy the next day\""),". If your are lucky, You may get more funnier joke."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Download Deno Binary:"),"\nNow time to ",Object(r.b)("em",{parentName:"p"},"install/download")," ",Object(r.b)("strong",{parentName:"p"},"pre-compile")," version of Deno binary"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {5}',title:'"Dockerfile"',"{5}":!0}),'FROM alpine\n\nRUN apk update && apk add curl\n\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\n\nENTRYPOINT ["dono"]\n\nCMD ["run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build and Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t deno-app .\ndocker run -it deno-app\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Issue")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There are some compiled libraries missing on ",Object(r.b)("strong",{parentName:"p"},"Alpine image"),". So when you try to run Deno you may can see error like ",Object(r.b)("strong",{parentName:"p"},"standard_init_linux.go:211: exec user process caused"),". To fix above error, We will you modified version of Alpine Image."))),Object(r.b)("p",null,"Let's update our docker file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {1}',title:'"Dockerfile"',"{1}":!0}),'FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31\n\nRUN apk update && apk add curl\n\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\n\nENTRYPOINT ["deno"]\n\nCMD ["run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Explaination:")," Once we pulled the image, We used curl to get the ",Object(r.b)("em",{parentName:"p"},"installation script")," from Deno website and download ",Object(r.b)("em",{parentName:"p"},"Deno binary"),". Since default path of deno binary is not ",Object(r.b)("em",{parentName:"p"},"bin"),". So we need to copy binary to bin. You can find better way to setup path.\n",Object(r.b)("em",{parentName:"p"},"ENTRYPOINT")," is to tell docker what command to use when we run docker run command. ",Object(r.b)("em",{parentName:"p"},"CMD")," is the command to run."),Object(r.b)("p",null,"If all OK, you will see bellow output."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"\u276f docker run -it deno-app\nDownload https://deno.land/std/examples/welcome.ts\nWarning Implicitly using latest version (0.64.0) for https://deno.land/std/examples/welcome.ts\nDownload https://deno.land/std@0.64.0/examples/welcome.ts\nCheck https://deno.land/std@0.64.0/examples/welcome.ts\n\nWelcome to Deno \ud83e\udd95\n")),Object(r.b)("h2",{id:"4-running-todo-app"},"4. Running Todo App"),Object(r.b)("p",null,"We have completed our 90% job. Let's run our ",Object(r.b)("em",{parentName:"p"},"todo-app"),". For that, we need to copy all the required files to the docker image. We can do either using ",Object(r.b)("em",{parentName:"p"},"COPY")," command or mount volume. I will show both way of doing it. However, recoomended is to use ",Object(r.b)("inlineCode",{parentName:"p"},"COPY"),". This is to decouple your sytem from Docker."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Using COPY:")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Forbidden path outside the build context")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Since docker does not allow file to be coppied from out of the foder. We have to copy files from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/ssr/"}),"/examples/ssr")," folder to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/docker-app"}),"examples/docker-app"),"."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{3}","{3}":!0}),"pwd\n#something/examples/docker-app\ncp -r ../ssr ./ssr\n")),Object(r.b)("p",null,"Update Dockerfile to copy files."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {6,7}',title:'"Dockerfile"',"{6,7}":!0}),'FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31\nRUN apk update && apk add curl\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\nWORKDIR /app\nCOPY ssr/ /app/\nENTRYPOINT ["deno"]\nCMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build and Run:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{2,9}","{2,9}":!0}),"docker build -t deno-app .\ndocker run -d deno-app\n\n## output\n# f75f6e55675b1f8558fcfe2c34cd25f366aacc4b0f6b5df7d7982bf3cea3c46d\n\n## Note down the output of last command\n\ndocker logs f75f6e55675b\n\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you notice, for first time we have run docker in ",Object(r.b)("strong",{parentName:"p"},"detteched")," mode ie. ",Object(r.b)("inlineCode",{parentName:"p"},"docker run -d"),". Since we are running a ",Object(r.b)("strong",{parentName:"p"},"long running server"),", We should dettached the Docket image from our sytem."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Explaination:")," Since we are running docker container in detteched mode. We have to grab ",Object(r.b)("strong",{parentName:"p"},"container-id")," to see logs of the last docker run."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker ps | grep todo-app\n\ndocker logs f75f6e55675b\n")),Object(r.b)("p",null,"You can see output like ",Object(r.b)("em",{parentName:"p"},"server is running on http://localhost:8000/"),". However, when you try to access ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8000/"}),"http://localhost:8000/")," on browser. You cant access it. This is becuase docker runs container in ",Object(r.b)("em",{parentName:"p"},"isolation"),". It does not ",Object(r.b)("em",{parentName:"p"},"implecite")," expose ports out of the container. To do so, We have to ",Object(r.b)("em",{parentName:"p"},"expose port")," in docker file and same time need ",Object(r.b)("em",{parentName:"p"},"bind to")," external port while running command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {3-5}',title:'"Dockerfile"',"{3-5}":!0}),"## rest of the command\n\nWORKDIR /app\nEXPOSE 8080\nCOPY ssr/ /app/\n\n## rest of the command\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build and run with port binding:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t deno-app .\ndocker run -d -p8000:8000 deno-app\n")),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8000/"}),"http://localhost:8000/")," in browser, You can see running todo app."),Object(r.b)("h2",{id:"bonus"},"Bonus"),Object(r.b)("p",null,"I told you, That you can run file without COPY command using valume mount. For that lets remove COPY commad from Dockerfile."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker",metastring:'title="Dockerfile" {3-5}',title:'"Dockerfile"',"{3-5}":!0}),'FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31\nRUN apk update && apk add curl\nRUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno\nWORKDIR /app\nEXPOSE 8080\nENTRYPOINT ["deno"]\nCMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t deno-app .\ndocker run -d -p8000:8000 -v ${PWD}/ssr:/app  deno-app\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hope you like this tutorial. Please follow me and clap for me on medium:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@deepak_v/"}),"https://medium.com/@deepak_v")),Object(r.b)("h2",{id:"some-usefull-docker-commands"},"Some Usefull Docker Commands"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Docker")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Docker Images: ",Object(r.b)("inlineCode",{parentName:"p"},"docker images ls")),Object(r.b)("p",{parentName:"div"},"Running Process: ",Object(r.b)("inlineCode",{parentName:"p"},"docker ps")),Object(r.b)("p",{parentName:"div"},"Stop container: ",Object(r.b)("inlineCode",{parentName:"p"},"docker stop container-id")),Object(r.b)("p",{parentName:"div"},"Stop all container time before: ",Object(r.b)("inlineCode",{parentName:"p"},"docker ps | grep \" minutes ago\" | awk '{print $1}' | xargs docker stop")),Object(r.b)("p",{parentName:"div"},"Remove images: ",Object(r.b)("inlineCode",{parentName:"p"},"docker rmi -f id1 id2 id3")),Object(r.b)("p",{parentName:"div"},"Logs: ",Object(r.b)("inlineCode",{parentName:"p"},"docker logs f75f6e55675b")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Source:")),Object(r.b)("p",null,"You can get all source code on GitHub.\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples/docker-app"}),"examples/docker-app")))}b.isMDXComponent=!0},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);