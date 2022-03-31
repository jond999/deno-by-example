"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[306],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(b,s(s({ref:n},p),{},{components:t})):r.createElement(b,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3384:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={id:"05-variables-constants",title:"Variables and Constants",description:"Constants and Variables in Deno",keywords:["beginner","variables","constants"],image:"https://source.unsplash.com/FMAVXJXIdP8/800x450"},c=void 0,l={unversionedId:"05-variables-constants",id:"05-variables-constants",title:"Variables and Constants",description:"Constants and Variables in Deno",source:"@site/docs/05_variables_constants.md",sourceDirName:".",slug:"/05-variables-constants",permalink:"/deno-by-example/05-variables-constants",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/05_variables_constants.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-variables-constants",title:"Variables and Constants",description:"Constants and Variables in Deno",keywords:["beginner","variables","constants"],image:"https://source.unsplash.com/FMAVXJXIdP8/800x450"},sidebar:"someSidebar",previous:{title:"Numbers",permalink:"/deno-by-example/03-numbers"},next:{title:"Implementing JQ",permalink:"/deno-by-example/advanced-jq"}},p={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://source.unsplash.com/FMAVXJXIdP8/800x450",alt:"variables"})),(0,o.kt)("p",null,"Constant can be created using ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," and variable can be created using ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,o.kt)("p",null,"Sample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function main() {\n  const constant = 10;\n  // constant = 12 // Error, Cannot assign to 'constant' because it is a constant.\n  console.log(constant);\n  const object = {\n    name: \"deepak\",\n  };\n  object.name = \"updated\"; // No Error in updating property\n\n  // object = {} // Error, Cannot assign to 'object' because it is a constant.\n  // Cant change reference\n\n  // Same for Array\n\n  const array = [10, 12];\n  array[0] = 12;\n\n  // array = [] // Error\n  // Cant change reference\n\n  let variable = 10;\n  variable = 12; // No issue\n\n  let arrVar = [12];\n  arrVar = [];\n}\nmain();\n")),(0,o.kt)("p",null,"More:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const")),(0,o.kt)("p",null,"How to run example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deno run examples/05_variables_constants.ts\n")))}d.isMDXComponent=!0}}]);