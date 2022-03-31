"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[594],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3336:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={id:"advanced-readline",title:"Read Line by Line as Data Stream",sidebar_label:"Read Line by Line",description:"How to read the entire file line by line in deno stream",keywords:["advanced","stream","data","file","network"],image:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/data_flow.png"},d=void 0,s={unversionedId:"advanced-readline",id:"advanced-readline",title:"Read Line by Line as Data Stream",description:"How to read the entire file line by line in deno stream",source:"@site/docs/advance_readline.md",sourceDirName:".",slug:"/advanced-readline",permalink:"/deno-by-example/advanced-readline",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advance_readline.md",tags:[],version:"current",frontMatter:{id:"advanced-readline",title:"Read Line by Line as Data Stream",sidebar_label:"Read Line by Line",description:"How to read the entire file line by line in deno stream",keywords:["advanced","stream","data","file","network"],image:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/data_flow.png"},sidebar:"someSidebar",previous:{title:"Implementing JQ",permalink:"/deno-by-example/advanced-jq"},next:{title:"Implementing Logger",permalink:"/deno-by-example/advanced-logger"}},p={},m=[{value:"Read Idrid",id:"read-idrid",level:2},{value:"Sample: open file",id:"sample-open-file",level:3},{value:"Example: 1",id:"example-1",level:3},{value:"Example: 2",id:"example-2",level:3},{value:"Example: 3",id:"example-3",level:3},{value:"Breakdown",id:"breakdown",level:4},{value:"_append",id:"_append",level:4},{value:"Basic sample for Async Iterator",id:"basic-sample-for-async-iterator",level:3},{value:"Breakdown",id:"breakdown-1",level:4},{value:"Example: Final code",id:"example-final-code",level:3}],c={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Deno")," provides multiple APIs to read files. You can read the entire file using ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.readAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.readTextFile"),". However, reading line by line is still not available in std library. Here in this tutorial, I will explain, How you can read the entire file line by line(Stream)."),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/data_flow.png",width:"800",height:"400"}),(0,i.kt)("p",null,"Before going to actual code, Let's understand the standard library first with examples."),(0,i.kt)("h2",{id:"read-idrid"},"Read Id","[rid]"),(0,i.kt)("p",null,"Deno provides ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.open")," API to open a file. This is the async API. Meaning, you need to ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),". In return you will get ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," which contains ",(0,i.kt)("inlineCode",{parentName:"p"},"rid"),"."),(0,i.kt)("h3",{id:"sample-open-file"},"Sample: open file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    console.log(file);\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),(0,i.kt)("p",null,"[Run]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n## Output:\n# File { rid: 3 }\n")),(0,i.kt)("p",null,"You can see ",(0,i.kt)("inlineCode",{parentName:"p"},"rid")," in return. Let's use this ",(0,i.kt)("inlineCode",{parentName:"p"},"rid")," to get the chunk of data. Reading chunk requires API ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.read")),(0,i.kt)("h3",{id:"example-1"},"Example: 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    const decoder = new TextDecoder();\n    let buf = new Uint8Array(100);\n    const numOfByteRead = await Deno.read(file?.rid, buf);\n    console.log(numOfByteRead);\n    console.log(decoder.decode(buf));\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),(0,i.kt)("p",null,"[Run]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n# 100\n# {\n#   "id": 1,\n#   "version": "1.0.1",\n#   "contributors": [\n#     "deepak",\n#     "gary"\n#   ],\n#   "actor": {\n')),(0,i.kt)("p",null,"Here, as you can see, Every time you call ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.read")," it returns the number of bytes that have been read. If ",(0,i.kt)("inlineCode",{parentName:"p"},"numOfByteRead")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," meaning it is end of file","[EOF]","."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"new Uint8Array(100);")," is Uint8Array to be filled while calling read. The buffer size could be anything. The reader will read bytes until buffer size."),(0,i.kt)("p",null,"If you notice, the read file is not a complete file. You need to increase the buff size to read all files."),(0,i.kt)("h3",{id:"example-2"},"Example: 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    const decoder = new TextDecoder();\n    let buf = new Uint8Array(1000); // 353\n    const numOfByteRead = await Deno.read(file?.rid, buf);\n    console.log(numOfByteRead);\n    console.log(decoder.decode(buf));\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),(0,i.kt)("p",null,"[Run]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n# 353\n## JSON here..\n")),(0,i.kt)("p",null,"Here in this example, I have increased buffer size to 1000, which is more than 353. So I can read the entire JSON file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[NOTE]",":")," You should avoid large buffer sizes. Reading a big file can create memory issues. and at the same time it will be hard to predict actual size."),(0,i.kt)("p",null,"To read the entire file chunk by chunk, we can use recursion on ",(0,i.kt)("inlineCode",{parentName:"p"},"then"),"able API."),(0,i.kt)("h3",{id:"example-3"},"Example: 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    const decoder = new TextDecoder();\n    let buf = new Uint8Array(100);\n    let chunk = new Uint8Array(0);\n    Deno.read(file?.rid, buf).then(function readByte(numOfByteRead) {\n      if (numOfByteRead) {\n        chunk = _append(chunk, buf, numOfByteRead);\n        Deno.read(file?.rid, buf).then(readByte);\n      } else {\n        console.log(decoder.decode(chunk));\n      }\n    });\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),(0,i.kt)("p",null,"[Run]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n{\n  "id": 1,\n  "version": "1.0.1",\n  "contributors": [\n    "deepak",\n    "gary"\n  ],\n  "actor": {\n    "name": "Tom Cruise",\n    "age": 56,\n    "Born At": "Syracuse, NY",\n    "Birthdate": "July 3 1962",\n    "movies": [\n      "Top Gun",\n      "Mission: Impossible",\n      "Oblivion"\n    ],\n    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"\n  }\n}\n')),(0,i.kt)("h4",{id:"breakdown"},"[Breakdown]"),(0,i.kt)("p",null,"Here in this code, when I call ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.read(file?.rid, buf).then"),". It will trigger a named function ",(0,i.kt)("inlineCode",{parentName:"p"},"function readByte(numOfByteRead)"),". This will internally check for ",(0,i.kt)("inlineCode",{parentName:"p"},"numOfByteRead")," each time. You can either append text return after decode by ",(0,i.kt)("inlineCode",{parentName:"p"},"decoder.decode"),". I am appending as Uint8Array. To appened Uint8Array arrays, I found a good sample on ",(0,i.kt)("inlineCode",{parentName:"p"},"StackOverflow"),"."),(0,i.kt)("h4",{id:"_append"},"[_append]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function _append(a: Uint8Array, b: Uint8Array, numOfByteRead: number) {\n  var c = new Uint8Array(a.length + numOfByteRead);\n  c.set(a, 0);\n  c.set(b.slice(0, numOfByteRead), a.length);\n  return c;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[NOTE]",":")," If you don't pass ",(0,i.kt)("inlineCode",{parentName:"p"},"numOfByteRead"),", you may garbage value read for last time."),(0,i.kt)("p",null,"Nice \ud83d\ude42, all looks fine. However, still we are away from reading line by line. For that we will use an async iterator."),(0,i.kt)("h3",{id:"basic-sample-for-async-iterator"},"Basic sample for Async Iterator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let range = {\n  from: 1,\n  to: 5,\n  [Symbol.asyncIterator]() {\n    return {\n      current: this.from,\n      last: this.to,\n      async next() {\n        const value = await new Promise<number>((resolve) =>\n          setTimeout(() => {\n            resolve(this.current++);\n          }, 1000)\n        );\n        if (value <= this.last) {\n          return { done: false, value };\n        } else {\n          return { done: true };\n        }\n      },\n    };\n  },\n};\n(async () => {\n  for await (let value of range) {\n    console.log(value); // 1,2,3,4,5\n  }\n})();\n")),(0,i.kt)("p",null,"Just like ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol.iterator"),", we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol.asyncIterator")," to create an async Iterator. Since typescript supports async iterator out of the box. We can use this API. To understand more, you can read ",(0,i.kt)("a",{parentName:"p",href:"https://javascript.info/async-iterators-generators"},"async-iterators-generators"),"."),(0,i.kt)("p",null,"To read line by line, I have created two utility methods ",(0,i.kt)("inlineCode",{parentName:"p"},"_readTillDone")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"readLine"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const _readTillDone = async (\n  rid: number,\n  text: string = ""\n): Promise<[string, string, boolean]> => {\n  let buf = new Uint8Array(100);\n  let indexOfLine = text.indexOf("\\n");\n  if (indexOfLine === -1) {\n    const num = await Deno.read(rid, buf);\n    if (num) {\n      text = text + decoder.decode(buf.slice(0, num));\n      return _readTillDone(rid, text);\n    } else {\n      return [text, "", true];\n    }\n  } else {\n    return [text.slice(0, indexOfLine), text.slice(indexOfLine + 1), false];\n  }\n};\n\nconst readLine = async (fileName: string) => {\n  const file = await Deno.open(fileName);\n  let text = "";\n  let done = false;\n  return {\n    [Symbol.asyncIterator]() {\n      return {\n        async next() {\n          const [t, rest, d] = await _readTillDone(file?.rid, text);\n          if (done) {\n            return { done: true, value: t };\n          } else {\n            text = rest;\n            done = d;\n            return { done: false, value: t };\n          }\n        },\n      };\n    },\n  };\n};\n')),(0,i.kt)("h4",{id:"breakdown-1"},"[Breakdown]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readLine")," is very simple. On each async iterator call it will call ",(0,i.kt)("inlineCode",{parentName:"p"},"_readTillDone")," and return the line. However, ","_","readTillDone is a little complex. I am using ",(0,i.kt)("inlineCode",{parentName:"p"},"file.rid")," to keep track of the file read."),(0,i.kt)("p",null,"Whenever i call ",(0,i.kt)("inlineCode",{parentName:"p"},"_readTillDone")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"file?.rid, text"),". It tries to split text with ",(0,i.kt)("inlineCode",{parentName:"p"},"newLine"),". I could not be able to find newLine. It tries to read more lines till the end. ",(0,i.kt)("inlineCode",{parentName:"p"},"_readTillDone")," returns three parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"[t, rest, d]"),". Here ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", text read by line,",(0,i.kt)("inlineCode",{parentName:"p"},"rest")," is as buffer text and ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," return as done."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Let's complete the tutorial.\nOnce we have these utils, the implementation is very simple."))),(0,i.kt)("h3",{id:"example-final-code"},"Example: Final code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// examples/06_readfile_chunk.ts\nimport { readLine } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/file_reader.ts";\n\nasync function main(name?: string) {\n  if (name) {\n    // Example 6\n    const reader = await readLine(name);\n    for await (let value of reader) {\n      console.log(value);\n    }\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n')),(0,i.kt)("p",null,"[Run]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n{\n  "id": 1,\n  "version": "1.0.1",\n  "contributors": [\n    "deepak",\n    "gary"\n  ],\n  "actor": {\n    "name": "Tom Cruise",\n    "age": 56,\n    "Born At": "Syracuse, NY",\n    "Birthdate": "July 3 1962",\n    "movies": [\n      "Top Gun",\n      "Mission: Impossible",\n      "Oblivion"\n    ],\n    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"\n  }\n}\n')),(0,i.kt)("p",null,"TaDa! \ud83d\udc4f\ud83d\udc4f Now you can read the entire file line by line."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"I hope you like this tutorial. let me know your feedback in the comment. Please support(\ud83d\ude4f\ud83d\ude4f) by subscribing and clapping on ",(0,i.kt)("a",{parentName:"em",href:"https://deepak-v.medium.com/"},"https://deepak-v.medium.com/"),".")),(0,i.kt)("p",null,"All working examples can be found in my Github: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples"},"https://github.com/deepakshrma/deno-by-example/tree/master/examples")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Update:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Recently, i got to know. That Deno does has ",(0,i.kt)("inlineCode",{parentName:"p"},"readlines")," method to read reader line by line. It just documentation was missing. So i added document in Deno project. You can read it now here. ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/std/io"},"https://deno.land/std/io")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { readLines } from "https://deno.land/std/io/mod.ts";\nimport * as path from "https://deno.land/std/path/mod.ts";\n\nconst filename = path.join(Deno.cwd(), "std/io/README.md");\nlet fileReader = await Deno.open(filename);\n\nfor await (let line of readLines(fileReader)) {\n  console.log(line);\n}```\n')))}u.isMDXComponent=!0}}]);