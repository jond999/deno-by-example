(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(7),i=(t(0),t(93)),o={id:"advanced-cli-minifind",title:"Build a CLI tool | Deno CLI minifind",sidebar_label:"Build MiniFind CLI",description:"Deno CLI clone of Mac/Unix find",keywords:["advanced","cli","tool","grep","regex"],image:"https://source.unsplash.com/d9ILr-dbEdg/800x450"},l={unversionedId:"advanced-cli-minifind",id:"advanced-cli-minifind",isDocsHomePage:!1,title:"Build a CLI tool | Deno CLI minifind",description:"Deno CLI clone of Mac/Unix find",source:"@site/docs/advanced_create_minifind.md",slug:"/advanced-cli-minifind",permalink:"/deno-by-example/advanced-cli-minifind",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advanced_create_minifind.md",version:"current",sidebar_label:"Build MiniFind CLI",sidebar:"someSidebar",previous:{title:"Creating Routing/Controller in Deno Server(From Scratch)",permalink:"/deno-by-example/advanced-routing"},next:{title:"Build an Isomorphic Application using Deno and React without WebPack",permalink:"/deno-by-example/advanced-react-ssr"}},s=[{value:"1. Input command arguments parser",id:"1-input-command-arguments-parser",children:[]},{value:"2. Traverse files and directory trees",id:"2-traverse-files-and-directory-trees",children:[{value:"3. Filter files/directory based on the arguments",id:"3-filter-filesdirectory-based-on-the-arguments",children:[]}]},{value:"4. Logger, better logging information",id:"4-logger-better-logging-information",children:[]},{value:"Bonus",id:"bonus",children:[]}],p={toc:s};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://source.unsplash.com/d9ILr-dbEdg/800x450",alt:"find"})),Object(i.b)("p",null,"We have seen how to create a ",Object(i.b)("a",{parentName:"p",href:"/02-greet-from-cli"},"Greeting CLI")," in another tutorial. Now we will extend our knowledge and create a ",Object(i.b)("inlineCode",{parentName:"p"},"full-fledged")," CLI which will be partially clone of Mac/Unix ",Object(i.b)("inlineCode",{parentName:"p"},"find"),"."),Object(i.b)("p",null,"Creating CLI required below mentioned features:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Input command arguments parser"),Object(i.b)("li",{parentName:"ol"},"Traverse files and directory trees"),Object(i.b)("li",{parentName:"ol"},"Filter files/directory based on the arguments"),Object(i.b)("li",{parentName:"ol"},"Logger, better logging information")),Object(i.b)("img",{src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind.png",width:"800"}),Object(i.b)("h2",{id:"1-input-command-arguments-parser"},"1. Input command arguments parser"),Object(i.b)("p",null,"Taking arguments in ",Object(i.b)("inlineCode",{parentName:"p"},"Deno")," is very easy. Every process has ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.args"),", which returns arguments passed to the program."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {4}',title:'"examples/minifind.ts"',"{4}":!0},"async function main(args: string[]) {\n  console.log(args);\n}\nmain(Deno.args);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run examples/minifind.ts param1 param2\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'[ "param1", "param2" ]')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Deno.args")," returns array of the string passed to the program(examples/minifind.ts)."),Object(i.b)("p",null,"Our CLI expects params like ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"help"),". To get the value of these parameters. We need to parse arguments. Deno has ",Object(i.b)("inlineCode",{parentName:"p"},"flags")," ",Object(i.b)("a",{parentName:"p",href:"https://deno.land/std/flags/mod.ts"},"module")," which help to parse and collect parameters. Let's add ",Object(i.b)("inlineCode",{parentName:"p"},"parser"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {10}',title:'"examples/minifind.ts"',"{10}":!0},'import { parse } from "https://deno.land/std/flags/mod.ts";\n\nasync function main(args: string[]) {\n  const {\n    type,\n    name,\n    not,\n    help,\n    _: [dir = "."],\n  } = parse(args);\n\n  console.log({\n    type,\n    name,\n    not,\n    help,\n    dir,\n  });\n}\nmain(Deno.args);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'deno run examples/minifind.ts --help --type=f --type=d --name=".*\\.ts" examples\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'{ type: [ "f", "d" ], name: ".*\\.ts", not: undefined, help: true, dir: "examples" }\n')),Object(i.b)("p",null,"When you run the program with a given example, You will see the output as above. Deno parse helps you to collect all the arguments."),Object(i.b)("p",null,"I have used the ES6 de-structuring feature to assign default values."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Deno parse automatically tries to collect and combine params based on patterns. Any argument pass as prefixing ",Object(i.b)("inlineCode",{parentName:"p"},"--"),", considered as arguments with value. If you don't pass value next to it. It will become boolean."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"example1:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'console.log(parse(["--test", "t"])); // { _: [], test: "t" }\nconsole.log(parse(["--test"])); // { _: [], test: true }\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Things to be noted: If you pass an argument with the same param more then once. ",Object(i.b)("inlineCode",{parentName:"p"},"parse")," combine them in ",Object(i.b)("inlineCode",{parentName:"p"},"array"),". In the above example type is passed twice. That is why, ",Object(i.b)("inlineCode",{parentName:"p"},"type")," has value ",Object(i.b)("inlineCode",{parentName:"p"},'[ "f", "d" ]'),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"example2:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'console.log(parse(["--test", "t", "--test", "t2"])); // { _: [], test: [ "t", "t2" ] }\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"underscore(",Object(i.b)("inlineCode",{parentName:"p"},"_"),") here is like a collection of rest params. If arguments do not follow the standard ",Object(i.b)("inlineCode",{parentName:"p"},"--")," or ",Object(i.b)("inlineCode",{parentName:"p"},"-")," prefix. All arguments collected in ",Object(i.b)("inlineCode",{parentName:"p"},"_")," as an array of data. We are extracting ",Object(i.b)("inlineCode",{parentName:"p"},"dir")," as the directory name from rest ",Object(i.b)("inlineCode",{parentName:"p"},"_"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"example3:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'const { _ } = parse(["--test", "t", "examples"]);\nconsole.log(_); // _ == [ "examples" ]\nconst [dir = "."] = _;\nconsole.log(dir); // examples\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"For more info read:")," ",Object(i.b)("a",{parentName:"p",href:"https://deno.land/std/flags"},"https://deno.land/std/flags")),Object(i.b)("h2",{id:"2-traverse-files-and-directory-trees"},"2. Traverse files and directory trees"),Object(i.b)("p",null,"Since now we have arguments parsed, let's add some logic to read the directory."),Object(i.b)("p",null,"The first thing we can do, We can resolve the ",Object(i.b)("inlineCode",{parentName:"p"},"path")," or ",Object(i.b)("inlineCode",{parentName:"p"},"directory")," where files need to be searched. We can use the resolve method from ",Object(i.b)("a",{parentName:"p",href:"https://deno.land/std/path"},"path module"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts"',title:'"examples/minifind.ts"'},'import { parse } from "https://deno.land/std/flags/mod.ts";\nimport { resolve } from "https://deno.land/std/path/mod.ts";\n\nasync function main(args: string[]) {\n  const {\n    type,\n    name,\n    not,\n    help,\n    _: [dir = "."],\n  } = parse(args);\n  const dirFullPath = resolve(Deno.cwd(), String(dir));\n  console.log(dirFullPath);\n}\nmain(Deno.args);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A examples/minifind.ts examples\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"/Users/xdeepakv/github/deno-by-example/examples")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"resolve")," require ",Object(i.b)("inlineCode",{parentName:"p"},"--allow-read")," permission. For the time being, I have given all permission passing flag ",Object(i.b)("inlineCode",{parentName:"p"},"-A"),". you can read more about ",Object(i.b)("a",{parentName:"p",href:"https://deno.land/manual/getting_started/permissions"},"permissions")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Deno.cwd()")," is used to get current running path. We had to convert ",Object(i.b)("inlineCode",{parentName:"p"},"dir")," as a string. Since ",Object(i.b)("inlineCode",{parentName:"p"},"parse")," can convert it to ",Object(i.b)("inlineCode",{parentName:"p"},"string | number")," based on the input type."),Object(i.b)("p",null,"Reading a directory can be done using ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.readDir"),". But we are traversing the entire tree of directories and files. Writing the traverse method can be tricky. You can try by yourself."),Object(i.b)("p",null,"Here, I will take the help of ",Object(i.b)("inlineCode",{parentName:"p"},"walk")," function from ",Object(i.b)("a",{parentName:"p",href:"https://deno.land/std/fs/mod.ts"},"https://deno.land/std/fs/mod.ts"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts"',title:'"examples/minifind.ts"'},'import { parse } from "https://deno.land/std/flags/mod.ts";\nimport { resolve } from "https://deno.land/std/path/mod.ts";\nimport { walk } from "https://deno.land/std/fs/mod.ts";\n\nasync function main(args: string[]) {\n  const {\n    type,\n    name,\n    not,\n    help,\n    _: [dir = "."],\n  } = parse(args);\n  const dirFullPath = resolve(Deno.cwd(), String(dir));\n  for await (let entry of walk(dirFullPath)) {\n    console.log(entry);\n  }\n}\nmain(Deno.args);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts examples\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'{\n  path: "/Users/xdeepakv/github/deno-by-example/examples/sample_employee.csv",\n  name: "sample_employee.csv",\n  isFile: true,\n  isDirectory: false,\n  isSymlink: false\n}\n{\n  path: "/Users/xdeepakv/github/deno-by-example/examples/06_readfile_chunk.ts",\n  name: "06_readfile_chunk.ts",\n  isFile: true,\n  isDirectory: false,\n  isSymlink: false\n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Since ",Object(i.b)("inlineCode",{parentName:"p"},"walk")," function is not a stable function. We have to use ",Object(i.b)("inlineCode",{parentName:"p"},"--unstable")," flag while running the example."))),Object(i.b)("p",null,"Walk function returns an async generator of ",Object(i.b)("inlineCode",{parentName:"p"},"entries"),". Each entries have ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"path")," along with other flags like ",Object(i.b)("inlineCode",{parentName:"p"},"isDirectory")," and ",Object(i.b)("inlineCode",{parentName:"p"},"isFile"),"."),Object(i.b)("p",null,"Nice: The toughest part has been done. Now we can read entire directories along with files in it."),Object(i.b)("h3",{id:"3-filter-filesdirectory-based-on-the-arguments"},"3. Filter files/directory based on the arguments"),Object(i.b)("p",null,"Walk function accepts ",Object(i.b)("inlineCode",{parentName:"p"},"WalkOptions")," as the second argument. We can use this option to add our logic."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Interface:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="WalkOptions"',title:'"WalkOptions"'},"export interface WalkOptions {\n  maxDepth?: number;\n  includeFiles?: boolean;\n  includeDirs?: boolean;\n  followSymlinks?: boolean;\n  exts?: string[];\n  match?: RegExp[];\n  skip?: RegExp[];\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts"',title:'"examples/minifind.ts"'},'// rest of the code\nasync function main(args: string[]) {\n  // rest of the code\n  const dirFullPath = resolve(Deno.cwd(), String(dir));\n  let includeFiles = true;\n  let includeDirs = true;\n  let types = type ? (Array.isArray(type) ? type : [type]) : ["f", "d"];\n  if (!types.includes("f")) {\n    includeFiles = false;\n  }\n  if (!types.includes("d")) {\n    includeDirs = false;\n  }\n  const options = {\n    maxDepth: 2,\n    includeFiles,\n    includeDirs,\n    followSymlinks: false,\n    skip: [/node_modules/g],\n  };\n  for await (const entry of walk(dirFullPath, options)) {\n    console.log(entry.path);\n  }\n}\nmain(Deno.args);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts examples\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/Users/xdeepakv/github/deno-by-example/examples\n/Users/xdeepakv/github/deno-by-example/examples/subfolder\n/Users/xdeepakv/github/deno-by-example/examples/subfolder/dummy.ts\n")),Object(i.b)("p",null,"The default type would include both ",Object(i.b)("inlineCode",{parentName:"p"},"file")," and ",Object(i.b)("inlineCode",{parentName:"p"},"dir")," ",'["f","d"]'," . Users can pass flag -",Object(i.b)("inlineCode",{parentName:"p"},"-type=f")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--type=d")," to override behavior."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run- Dirs only:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --type=d examples\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run- Files only:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --type=f examples\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"WalkOptions")," supports regexp to include and exclude patterns. We can use this to filter entries by name."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {6-10,16}',title:'"examples/minifind.ts"',"{6-10,16}":!0},"/// rest of the code\n\nasync function main(args: string[]) {\n  /// rest of the code\n\n  let matchRegexps: RegExp[] | undefined = name\n    ? (Array.isArray(name) ? name : [name]).map(\n        (reg: string) => new RegExp(reg)\n      )\n    : undefined;\n  const options = {\n    maxDepth: 2,\n    includeFiles,\n    includeDirs,\n    followSymlinks: false,\n    match: matchRegexps,\n    skip: [/node_modules/g],\n  };\n  for await (const entry of walk(dirFullPath, options)) {\n    console.log(entry.path);\n  }\n}\nmain(Deno.args);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run- Get all file name has logger in it:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'deno run -A --unstable examples/minifind.ts --type=f --name=".*logger.*" examples\n')),Object(i.b)("p",null,"Now we have working ",Object(i.b)("inlineCode",{parentName:"p"},"minifind"),". ",Object(i.b)("strong",{parentName:"p"},"Noice"),"!"),Object(i.b)("h2",{id:"4-logger-better-logging-information"},"4. Logger, better logging information"),Object(i.b)("p",null,"The last missing piece is to tell your user about your CLI. For that, we have add helping messages for users. I am using ",Object(i.b)("inlineCode",{parentName:"p"},"logger-util")," created by me. You can read more here",Object(i.b)("a",{parentName:"p",href:"https://deno.land/x/deno_util"},"https://deno.land/x/deno_util"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {6-10,16}',title:'"examples/minifind.ts"',"{6-10,16}":!0},'/// rest of the code\nimport { Logger } from "https://deno.land/x/deno_util/logger.ts";\n\nconst usesFormat = `Uses:\\n\\n  minifind %s`;\nconst logger = new Logger();\n\nfunction printHelp(command: string) {\n  logger.info(`Welcome to minifind [v%s]`, "1.0.0");\n  logger.warn(usesFormat, command);\n}\nasync function main(args: string[]) {\n  /// rest of the code\n\n  if (help) {\n    printHelp(`--type=f --name=".*logger.*" --help examples`);\n    Deno.exit(0);\n  }\n\n  /// rest of the code\n\n  for await (const entry of walk(dirFullPath, options)) {\n    logger.inverse(entry.path);\n  }\n}\nmain(Deno.args);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run with help:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --help\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind_1.png",alt:"minifind 1"})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Run with other options:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --help\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output:")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind_2.png",alt:"minifind 1"})),Object(i.b)("p",null,"TaDa! \ud83d\udc4f\ud83d\udc4f Now you know how to create a CLI."),Object(i.b)("h2",{id:"bonus"},"Bonus"),Object(i.b)("p",null,"Now we have working ",Object(i.b)("inlineCode",{parentName:"p"},"minifind")," CLI. However, we had to use ",Object(i.b)("inlineCode",{parentName:"p"},"deno run")," and ",Object(i.b)("inlineCode",{parentName:"p"},"filename")," to run the command, which is not intended/feasible. Deno provides ",Object(i.b)("inlineCode",{parentName:"p"},"install")," command. We can convert any program to an ",Object(i.b)("inlineCode",{parentName:"p"},"executable")," tool."),Object(i.b)("p",null,"Let's convert our minifind to ",Object(i.b)("inlineCode",{parentName:"p"},"executable"),". It is very simple."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"deno install -f --allow-read --unstable examples/minifind.ts\n")),Object(i.b)("p",null,"Once you run above command you will see output like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'Add /Users/xdeepakv/.deno/bin to PATH\n    export PATH="/Users/xdeepakv/.deno/bin:$PATH"\n')),Object(i.b)("p",null,"If you see that, Just add ",Object(i.b)("inlineCode",{parentName:"p"},'export PATH="/Users/xdeepakv/.deno/bin:$PATH"')," this line to you ",Object(i.b)("inlineCode",{parentName:"p"},".bashrc")," or ",Object(i.b)("inlineCode",{parentName:"p"},".bash_profile"),"(Depending upon your OS type). Once you add ",Object(i.b)("inlineCode",{parentName:"p"},".deno/bin")," in PATH. Open a new terminal and try below mention command."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'minifind --type=f --name=".*logger.*" examples\n')),Object(i.b)("p",null,"Now your minifind is ready to use product. :-)"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"I hope you like this tutorial. let me know your feedback in the comment. Please support(\ud83d\ude4f\ud83d\ude4f) by subscribing and clapping on ",Object(i.b)("a",{parentName:"em",href:"https://deepak-v.medium.com/"},"https://deepak-v.medium.com/"),".")),Object(i.b)("p",null,"All working examples can be found in my Github: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples"},"https://github.com/deepakshrma/deno-by-example/tree/master/examples")))}c.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(t),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return t?r.a.createElement(u,l(l({ref:n},p),{},{components:t})):r.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);