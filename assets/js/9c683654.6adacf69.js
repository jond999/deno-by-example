"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[757],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),g=r,c=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"lottery-game",title:"Take input from user | Lottery Game",sidebar_label:"Lottery Game",description:"Build a CLI Lottery game app",keywords:["CLI","advanced","lottery","webpack","game"],image:"http://www.comparelotto.com/assets/Uploads/Articles/lottery-results2.jpg"},s=void 0,m={unversionedId:"lottery-game",id:"lottery-game",title:"Take input from user | Lottery Game",description:"Build a CLI Lottery game app",source:"@site/docs/lottery_game.md",sourceDirName:".",slug:"/lottery-game",permalink:"/deno-by-example/lottery-game",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/lottery_game.md",tags:[],version:"current",frontMatter:{id:"lottery-game",title:"Take input from user | Lottery Game",sidebar_label:"Lottery Game",description:"Build a CLI Lottery game app",keywords:["CLI","advanced","lottery","webpack","game"],image:"http://www.comparelotto.com/assets/Uploads/Articles/lottery-results2.jpg"},sidebar:"someSidebar",previous:{title:"Isomorphic App",permalink:"/deno-by-example/advanced-react-ssr"},next:{title:"Numbers",permalink:"/deno-by-example/03-numbers"}},u={},p=[{value:"Taking input from user",id:"taking-input-from-user",level:2},{value:"All working examples can be found in my Github",id:"all-working-examples-can-be-found-in-my-github",level:3}],d={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial we will build a CLI Lottery game app. For this we will use Deno's ",(0,o.kt)("inlineCode",{parentName:"p"},"readLines")," and Logger that i have created. If you want to learn more about Logger implementation. Please visit: ",(0,o.kt)("a",{parentName:"p",href:"https://decipher.dev/deno-by-example/advanced-logger"},"advanced-logger"),"."),(0,o.kt)("img",{src:"http://www.comparelotto.com/assets/Uploads/Articles/lottery-results2.jpg",width:"800"}),(0,o.kt)("h2",{id:"taking-input-from-user"},"Taking input from user"),(0,o.kt)("p",null,"To take input, We can use stdin stream from Deno as ",(0,o.kt)("inlineCode",{parentName:"p"},"Deno.stdin"),". However, reading stream is very tough task ",(0,o.kt)("a",{parentName:"p",href:"https://decipher.dev/deno-by-example/advanced-readline"},"Read My Blog"),". We can take help from readLines function. This will read stream of bytes and return whenever it found ",(0,o.kt)("inlineCode",{parentName:"p"},"new line chars \\n"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lottery_game.ts" {4,5}',title:'"lottery_game.ts"',"{4,5}":!0},'import { readLines } from "https://deno.land/std/io/mod.ts";\n\nfunction main() {\n  const data = readLines(Deno.stdin).next();\n  console.log(data);\n}\n\nmain();\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deno run examples/lottery_game.ts\n")),(0,o.kt)("p",null,"Type test and then ",(0,o.kt)("strong",{parentName:"p"},"[ENTER]","\u23ce")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Promise { <pending> }\ntest\n")),(0,o.kt)("p",null,"Here if you have noticed, ",(0,o.kt)("inlineCode",{parentName:"p"},".next()")," after readLines. readLines is async iterator. So to get the value you have to call ",(0,o.kt)("inlineCode",{parentName:"p"},"next()"),". This will return promise. To get value form it, we need to ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," for it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},'import { readLines } from "https://deno.land/std/io/mod.ts";\n\nasync function main() {\n  const { value: input } = await readLines(Deno.stdin).next();\n  console.log("You have entered: " + input);\n}\n\nmain();\n')),(0,o.kt)("p",null,"Run again.\n",(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"test\nYou have entered: test\n")),(0,o.kt)("p",null,"Let's use logger to print in color."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lottery_game.ts"',title:'"lottery_game.ts"'},'import { readLines } from "https://deno.land/std/io/mod.ts";\nimport { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";\n\nasync function main() {\n  const logger = new Logger();\n  const { value: input } = await readLines(Deno.stdin).next();\n  logger.info("You have entered: " + input);\n}\n\nmain();\n')),(0,o.kt)("p",null,"You will see same output but in ",(0,o.kt)("inlineCode",{parentName:"p"},"cyan")," color. Cool!"),(0,o.kt)("p",null,"So in this lottery game, We will ask user to ",(0,o.kt)("inlineCode",{parentName:"p"},"enter a number"),". If guessed number matches the lottery number then game will end. Else user has to enter ",(0,o.kt)("inlineCode",{parentName:"p"},"another number"),". This game will run till user enter lottery number."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To loop, We will use do-while loop."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lottery_game.ts" {12-13,15}',title:'"lottery_game.ts"',"{12-13,15}":!0},'// rest of the code\n\nasync function main() {\n  const logger = new Logger();\n  let matched = false;\n  do {\n    logger.warn("Guess the number: [1-10]");\n\n    const { value } = await readLines(Deno.stdin).next();\n    logger.info("You have guessed: %d\\n", value);\n\n    const random = Math.ceil(Math.random() * 10);\n    logger.info("Lottery number: %d\\n", random);\n\n    matched = Number(value) === random;\n  } while (matched !== true);\n}\n\nmain();\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Guess the number: [1-10]\n3\nYou have guessed: 3\nLottery number: 2\nGuess the number: [1-10]\n4\nYou have guessed: 4\nLottery number: 4\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breakdown:")),(0,o.kt)("p",null,"We are taking input from user. Same time we are generating number using ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.random"),". First time, when user enter number ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),". It does not match generated lottery number ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),". Game asks user to enter again. Soon user enter 4, it matches the newly generated number 4. Game exit."),(0,o.kt)("p",null,"Let's make it more interactive. We will add some virtual delay to show we are generating number. And user can exit game anytime while pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"q"),". We will do some error validation too. So that user should not enter something not expected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lottery_game.ts" {4,9,14-18,19-25,29-30,36-44}',title:'"lottery_game.ts"',"{4,9,14-18,19-25,29-30,36-44}":!0},'import { readLines } from "https://deno.land/std/io/mod.ts";\nimport { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";\n\nconst delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));\n\nasync function main() {\n  const logger = new Logger();\n  let matched = false;\n  let LIMIT = 10;\n  do {\n    logger.warn(`Guess the number: [1-${LIMIT}], Press \'q\' to exit!`);\n    let { value: guess } = await readLines(Deno.stdin).next();\n\n    guess = guess.trim();\n    if (guess === "q") {\n      logger.info("Thanks for playing this game! xi\xe8 xie!");\n      Deno.exit(0);\n    }\n\n    guess = Number(guess);\n    if (!guess || guess < 0 || guess > LIMIT) {\n      // check for NaN, repeat\n      logger.error(`You have wrong number. Please enter number [1-${LIMIT}]\\n`);\n      continue;\n    }\n\n    logger.info("You have guessed: %d\\n", guess);\n\n    logger.warn("Generating a number...");\n    await delay();\n\n    const random = Math.ceil(Math.random() * LIMIT);\n    // logger.info("Lottery number: %d\\n", random);\n\n    // hints\n    const diff = guess - random;\n    if (diff > 0) {\n      logger.info("too high!!");\n    } else if (diff < 0) {\n      logger.info("too low!!");\n    } else {\n      matched = true;\n      logger.warn("Bingo!! You have won Zoker Lottery! Enjoy!\\n");\n    }\n  } while (matched !== true);\n}\n\nmain();\n')),(0,o.kt)("p",null,"Run, You will see output like."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/lottery-game.png",alt:"lottery_game"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breakdown:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"delay")," is just a helping function to give delay"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"guess = guess.trim();")," to clean up number"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"guess = Number(guess);")," to convert in number and validate it"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"await delay();")," virtual delay for 1 second."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"too high!!")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"too low!!")," to just give hint")),(0,o.kt)("p",null,"I was lucky enough, I will lottery in ",(0,o.kt)("inlineCode",{parentName:"p"},"5-6 try"),". Haha! You can make harder, by increasing LIMIT to higher number Or removing hint to the user."),(0,o.kt)("p",null,"Thanks! If you like this tutorial. Please follow me, subscribe and clap for me on ",(0,o.kt)("a",{parentName:"p",href:"https://deepak-v.medium.com/"},"https://deepak-v.medium.com/")),(0,o.kt)("h3",{id:"all-working-examples-can-be-found-in-my-github"},"All working examples can be found in my Github"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples"},"https://github.com/deepakshrma/deno-by-example/tree/master/examples")))}g.isMDXComponent=!0}}]);