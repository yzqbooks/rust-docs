"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[5287],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),k=a,d=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6042:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={},s="\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\u548c\u8fd4\u56de\u503c",u={unversionedId:"closure/as_argument_return_value",id:"closure/as_argument_return_value",title:"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\u548c\u8fd4\u56de\u503c",description:"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\uff08Taking closures as arguments\uff09",source:"@site/docs/closure/as_argument_return_value.md",sourceDirName:"closure",slug:"/closure/as_argument_return_value",permalink:"/rust-docs/docs/closure/as_argument_return_value",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/closure/as_argument_return_value.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cargo\u7b80\u4ecb",permalink:"/rust-docs/docs/cargo-projects-manager/"},next:{title:"\u95ed\u5305\u7684\u5b9e\u73b0",permalink:"/rust-docs/docs/closure/implementation"}},c={},p=[{value:"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\uff08Taking closures as arguments\uff09",id:"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570taking-closures-as-arguments",level:2},{value:"\u51fd\u6570\u6307\u9488\u548c\u95ed\u5305",id:"\u51fd\u6570\u6307\u9488\u548c\u95ed\u5305",level:2},{value:"\u8fd4\u56de\u95ed\u5305\uff08Returning closures\uff09",id:"\u8fd4\u56de\u95ed\u5305returning-closures",level:2}],m={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\u548c\u8fd4\u56de\u503c"},"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\u548c\u8fd4\u56de\u503c"),(0,l.kt)("h2",{id:"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570taking-closures-as-arguments"},"\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\uff08Taking closures as arguments\uff09"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u77e5\u9053\u4e86\u95ed\u5305\u662f trait\uff0c\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u4e86\u5982\u4f55\u63a5\u53d7\u548c\u8fd4\u56de\u95ed\u5305\uff1b\u5c31\u50cf\u4efb\u4f55\u5176\u5b83\u7684 trait\uff01"),(0,l.kt)("p",null,"\u8fd9\u4e5f\u610f\u5473\u7740\u6211\u4eec\u4e5f\u53ef\u4ee5\u9009\u62e9\u9759\u6001\u6216\u52a8\u6001\u5206\u53d1\u3002\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5199\u4e00\u4e2a\u83b7\u53d6\u53ef\u8c03\u7528\u7ed3\u6784\u7684\u51fd\u6570\uff0c\u8c03\u7528\u5b83\uff0c\u7136\u540e\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn call_with_one<F>(some_closure: F) -> i32\n    where F : Fn(i32) -> i32 {\n\n    some_closure(1)\n}\n\nlet answer = call_with_one(|x| x + 2);\n\nassert_eq!(3, answer);\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4f20\u9012\u6211\u4eec\u7684\u95ed\u5305\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"|x| x + 2"),"\uff0c\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"call_with_one"),"\u3002\u5b83\u6b63\u505a\u4e86\u6211\u4eec\u8bf4\u7684\uff1a\u5b83\u8c03\u7528\u4e86\u95ed\u5305\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u66f4\u6df1\u5c42\u7684\u89e3\u6790",(0,l.kt)("inlineCode",{parentName:"p"},"call_with_one"),"\u7684\u7b7e\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn call_with_one<F>(some_closure: F) -> i32\n#    where F : Fn(i32) -> i32 {\n#    some_closure(1) }\n")),(0,l.kt)("p",null,"\u6211\u4eec\u83b7\u53d6\u4e00\u4e2a\u53c2\u6570\uff0c\u800c\u5b83\u6709\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"F"),"\u3002\u6211\u4eec\u4e5f\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"i32"),"\u3002\u8fd9\u4e00\u90e8\u5206\u5e76\u4e0d\u6709\u8da3\u3002\u4e0b\u4e00\u90e8\u5206\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"# fn call_with_one<F>(some_closure: F) -> i32\n    where F : Fn(i32) -> i32 {\n#   some_closure(1) }\n")),(0,l.kt)("p",null,"\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Fn"),"\u662f\u4e00\u4e2atrait\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u9650\u5236\u6211\u4eec\u7684\u6cdb\u578b\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u7684\u95ed\u5305\u53d6\u5f97\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"i32"),"\u4f5c\u4e3a\u53c2\u6570\u5e76\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"i32"),"\uff0c\u6240\u4ee5\u6211\u4eec\u7528\u6cdb\u578b\u9650\u5236\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Fn(i32) -> i32"),"\u3002"),(0,l.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u5173\u952e\u70b9\u5728\u4e8e\uff1a\u56e0\u4e3a\u6211\u4eec\u7528\u4e00\u4e2atrait\u9650\u5236\u6cdb\u578b\uff0c\u5b83\u4f1a\u662f\u5355\u6001\u7684\uff0c\u5e76\u4e14\u56e0\u6b64\uff0c\u6211\u4eec\u5728\u95ed\u5305\u4e2d\u4f7f\u7528\u9759\u6001\u5206\u53d1\u3002\u8fd9\u662f\u975e\u5e38\u7b80\u5355\u7684\u3002\u5728\u5f88\u591a\u8bed\u8a00\u4e2d\uff0c\u95ed\u5305\u56fa\u5b9a\u5728\u5806\u4e0a\u5206\u914d\uff0c\u6240\u4ee5\u603b\u662f\u8fdb\u884c\u52a8\u6001\u5206\u53d1\u3002\u5728Rust\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6808\u4e0a\u5206\u914d\u6211\u4eec\u95ed\u5305\u7684\u73af\u5883\uff0c\u5e76\u9759\u6001\u5206\u53d1\u8c03\u7528\u3002\u8fd9\u7ecf\u5e38\u53d1\u751f\u5728\u8fed\u4ee3\u5668\u548c\u5b83\u4eec\u7684\u9002\u914d\u5668\u4e0a\uff0c\u5b83\u4eec\u7ecf\u5e38\u53d6\u5f97\u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u52a8\u6001\u5206\u53d1\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u505a\u5230\u3002trait\u5bf9\u8c61\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\uff0c\u901a\u5e38\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn call_with_one(some_closure: &Fn(i32) -> i32) -> i32 {\n    some_closure(1)\n}\n\nlet answer = call_with_one(&|x| x + 2);\n\nassert_eq!(3, answer);\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53d6\u5f97\u4e00\u4e2atrait\u5bf9\u8c61\uff0c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"&Fn"),"\u3002\u5e76\u4e14\u5f53\u6211\u4eec\u5c06\u6211\u4eec\u7684\u95ed\u5305\u4f20\u9012\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"call_with_one"),"\u65f6\u6211\u4eec\u5fc5\u987b\u83b7\u53d6\u4e00\u4e2a\u5f15\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"&||"),"\u3002"),(0,l.kt)("h2",{id:"\u51fd\u6570\u6307\u9488\u548c\u95ed\u5305"},"\u51fd\u6570\u6307\u9488\u548c\u95ed\u5305"),(0,l.kt)("p",null,"\u4e00\u4e2a\u51fd\u6570\u6307\u9488\u6709\u70b9\u50cf\u4e00\u4e2a\u6ca1\u6709\u73af\u5883\u7684\u95ed\u5305\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u51fd\u6570\u6307\u9488\u7ed9\u4efb\u4f55\u51fd\u6570\u9664\u4e86\u4f5c\u4e3a\u95ed\u5305\u53c2\u6570\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u5de5\u4f5c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn call_with_one(some_closure: &Fn(i32) -> i32) -> i32 {\n    some_closure(1)\n}\n\nfn add_one(i: i32) -> i32 {\n    i + 1\n}\n\nlet f = add_one;\n\nlet answer = call_with_one(&f);\n\nassert_eq!(2, answer);\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u662f\u4e25\u683c\u7684\u9700\u8981\u8fd9\u4e2a\u4e2d\u95f4\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"\uff0c\u51fd\u6570\u7684\u540d\u5b57\u5c31\u53ef\u4ee5\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let answer = call_with_one(&add_one);\n")),(0,l.kt)("h2",{id:"\u8fd4\u56de\u95ed\u5305returning-closures"},"\u8fd4\u56de\u95ed\u5305\uff08Returning closures\uff09"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u51fd\u6570\u5f0f\u98ce\u683c\u4ee3\u7801\u6765\u8bf4\u5728\u5404\u79cd\u60c5\u51b5\u8fd4\u56de\u95ed\u5305\u662f\u975e\u5e38\u5e38\u89c1\u7684\u3002\u5982\u679c\u4f60\u5c1d\u8bd5\u8fd4\u56de\u4e00\u4e2a\u95ed\u5305\uff0c\u4f60\u53ef\u80fd\u4f1a\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u3002\u5728\u521a\u63a5\u89e6\u7684\u65f6\u5019\uff0c\u8fd9\u770b\u8d77\u6765\u6709\u70b9\u5947\u602a\uff0c\u4e0d\u8fc7\u6211\u4eec\u4f1a\u641e\u6e05\u695a\u3002\u5f53\u4f60\u5c1d\u8bd5\u4ece\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u95ed\u5305\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u4f1a\u5199\u51fa\u7c7b\u4f3c\u8fd9\u6837\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn factory() -> (Fn(i32) -> i32) {\n    let num = 5;\n\n    |x| x + num\n}\n\nlet f = factory();\n\nlet answer = f(1);\nassert_eq!(6, answer);\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u7684\u65f6\u5019\u4f1a\u7ed9\u51fa\u8fd9\u4e00\u957f\u4e32\u76f8\u5173\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"error: the trait `core::marker::Sized` is not implemented for the type\n`core::ops::Fn(i32) -> i32` [E0277]\nfn factory() -> (Fn(i32) -> i32) {\n                ^~~~~~~~~~~~~~~~\nnote: `core::ops::Fn(i32) -> i32` does not have a constant size known at compile-time\nfn factory() -> (Fn(i32) -> i32) {\n                ^~~~~~~~~~~~~~~~\nerror: the trait `core::marker::Sized` is not implemented for the type `core::ops::Fn(i32) -> i32` [E0277]\nlet f = factory();\n    ^\nnote: `core::ops::Fn(i32) -> i32` does not have a constant size known at compile-time\nlet f = factory();\n    ^\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u4ece\u51fd\u6570\u8fd4\u56de\u4e00\u4e9b\u4e1c\u897f\uff0cRust \u9700\u8981\u77e5\u9053\u8fd4\u56de\u7c7b\u578b\u7684\u5927\u5c0f\u3002\u4e0d\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Fn"),"\u662f\u4e00\u4e2a trait\uff0c\u5b83\u53ef\u4ee5\u662f\u5404\u79cd\u5927\u5c0f(size)\u7684\u4efb\u4f55\u4e1c\u897f\u3002\u6bd4\u5982\u8bf4\uff0c\u8fd4\u56de\u503c\u53ef\u4ee5\u662f\u5b9e\u73b0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Fn"),"\u7684\u4efb\u610f\u7c7b\u578b\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6cd5\u662f\uff1a\u8fd4\u56de\u4e00\u4e2a\u5f15\u7528\u3002\u56e0\u4e3a\u5f15\u7528\u7684\u5927\u5c0f(size)\u662f\u56fa\u5b9a\u7684\uff0c\u56e0\u6b64\u8fd4\u56de\u503c\u7684\u5927\u5c0f\u5c31\u56fa\u5b9a\u4e86\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn factory() -> &(Fn(i32) -> i32) {\n    let num = 5;\n\n    |x| x + num\n}\n\nlet f = factory();\n\nlet answer = f(1);\nassert_eq!(6, answer);\n")),(0,l.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u6837\u4f1a\u51fa\u73b0\u53e6\u5916\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"error: missing lifetime specifier [E0106]\nfn factory() -> &(Fn(i32) -> i32) {\n                ^~~~~~~~~~~~~~~~~\n")),(0,l.kt)("p",null,"\u5bf9\u3002\u56e0\u4e3a\u6211\u4eec\u6709\u4e00\u4e2a\u5f15\u7528\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u5b83\u4e00\u4e2a\u751f\u547d\u5468\u671f\u3002\u4e0d\u8fc7\u6211\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"factory()"),"\u51fd\u6570\u4e0d\u63a5\u6536\u53c2\u6570\uff0c\u6240\u4ee5\u7701\u7565\u4e0d\u80fd\u7528\u5728\u8fd9\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ec0\u4e48\u751f\u547d\u5468\u671f\u5462\uff1f",(0,l.kt)("inlineCode",{parentName:"p"},"'static"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn factory() -> &'static (Fn(i32) -> i32) {\n    let num = 5;\n\n    |x| x + num\n}\n\nlet f = factory();\n\nlet answer = f(1);\nassert_eq!(6, answer);\n")),(0,l.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u6837\u53c8\u4f1a\u51fa\u73b0\u53e6\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"error: mismatched types:\n expected `&'static core::ops::Fn(i32) -> i32`,\n    found `[closure@<anon>:7:9: 7:20]`\n(expected &-ptr,\n    found closure) [E0308]\n         |x| x + num\n         ^~~~~~~~~~~\n\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u8ba9\u6211\u4eec\u77e5\u9053\u6211\u4eec\u5e76\u6ca1\u6709\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"&'static Fn(i32) -> i32"),"\uff0c\u800c\u662f\u8fd4\u56de\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"[closure <anon>:7:9: 7:20]"),"\u3002\u7b49\u7b49\uff0c\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e2a\u95ed\u5305\u751f\u6210\u4e86\u5b83\u81ea\u5df1\u7684\u73af\u5883",(0,l.kt)("inlineCode",{parentName:"p"},"struct"),"\u5e76\u5b9e\u73b0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Fn"),"\u548c\u5176\u5b83\u4e00\u4e9b\u4e1c\u897f\uff0c\u8fd9\u4e9b\u7c7b\u578b\u662f\u533f\u540d\u7684\u3002\u5b83\u4eec\u53ea\u5728\u8fd9\u4e2a\u95ed\u5305\u4e2d\u5b58\u5728\u3002\u6240\u4ee5Rust\u628a\u5b83\u4eec\u663e\u793a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"closure <anon>"),"\uff0c\u800c\u4e0d\u662f\u4e00\u4e9b\u81ea\u52a8\u751f\u6210\u7684\u540d\u5b57\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u4e5f\u6307\u51fa\u4e86\u8fd4\u56de\u503c\u7c7b\u578b\u671f\u671b\u662f\u4e00\u4e2a\u5f15\u7528\uff0c\u4e0d\u8fc7\u6211\u4eec\u5c1d\u8bd5\u8fd4\u56de\u7684\u4e0d\u662f\u3002\u66f4\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5e76\u4e0d\u80fd\u76f4\u63a5\u7ed9\u4e00\u4e2a\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"p"},"'static"),"\u58f0\u660e\u5468\u671f\u3002\u6240\u4ee5\u6211\u4eec\u6362\u4e00\u4e2a\u65b9\u6cd5\u5e76\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Box"),"\u88c5\u7bb1",(0,l.kt)("inlineCode",{parentName:"p"},"Fn"),"\u6765\u8fd4\u56de\u4e00\u4e2a trait \u5bf9\u8c61\u3002\u8fd9\u4e2a",(0,l.kt)("em",{parentName:"p"},"\u51e0\u4e4e"),"\u53ef\u4ee5\u6210\u529f\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn factory() -> Box<Fn(i32) -> i32> {\n    let num = 5;\n\n    Box::new(|x| x + num)\n}\n# fn main() {\nlet f = factory();\n\nlet answer = f(1);\nassert_eq!(6, answer);\n# }\n")),(0,l.kt)("p",null,"\u8fd9\u8fd8\u6709\u6700\u540e\u4e00\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"error: closure may outlive the current function, but it borrows `num`,\nwhich is owned by the current function [E0373]\nBox::new(|x| x + num)\n         ^~~~~~~~~~~\n")),(0,l.kt)("p",null,"\u597d\u5427\uff0c\u6b63\u5982\u6211\u4eec\u4e0a\u9762\u8ba8\u8bba\u7684\uff0c\u95ed\u5305\u501f\u7528\u4ed6\u4eec\u7684\u73af\u5883\u3002\u800c\u4e14\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u3002\u6211\u4eec\u7684\u73af\u5883\u57fa\u4e8e\u4e00\u4e2a\u6808\u5206\u914d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"5"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"num"),"\u53d8\u91cf\u7ed1\u5b9a\u3002\u6240\u4ee5\u8fd9\u4e2a\u501f\u7528\u6709\u8fd9\u4e2a\u6808\u5e27\u7684\u751f\u547d\u5468\u671f\u3002\u6240\u4ee5\u5982\u679c\u6211\u4eec\u8fd4\u56de\u4e86\u8fd9\u4e2a\u95ed\u5305\uff0c\u8fd9\u4e2a\u51fd\u6570\u8c03\u7528\u5c06\u4f1a\u7ed3\u675f\uff0c\u6808\u5e27\u4e5f\u5c06\u6d88\u5931\uff0c\u90a3\u4e48\u6211\u4eec\u7684\u95ed\u5305\u6307\u5411\u4e86\u88ab\u91ca\u653e\u7684\u5185\u5b58\u73af\u5883\uff01\u518d\u6709\u6700\u540e\u4e00\u4e2a\u4fee\u6539\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8ba9\u5b83\u8fd0\u884c\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn factory() -> Box<Fn(i32) -> i32> {\n    let num = 5;\n\n    Box::new(move |x| x + num)\n}\n# fn main() {\nlet f = factory();\n\nlet answer = f(1);\nassert_eq!(6, answer);\n# }\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u628a\u5185\u90e8\u95ed\u5305\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"move"),"\u5173\u952e\u5b57\uff0c\u6211\u4eec\u5f3a\u5236\u95ed\u5305\u4f7f\u7528 move \u7684\u65b9\u5f0f\u6355\u83b7\u73af\u5883\u53d8\u91cf\u3002\u56e0\u4e3a\u8fd9\u91cc\u7684 num \u7c7b\u578b\u662f i32\uff0c\u5b9e\u9645\u4e0a\u8fd9\u91cc\u7684 move \u6267\u884c\u7684\u662f copy, \u8fd9\u6837\u4e00\u6765\uff0c\u95ed\u5305\u5c31\u4e0d\u518d\u62e5\u6709\u6307\u5411\u73af\u5883\u7684\u6307\u9488\uff0c\u800c\u662f\u5b8c\u6574\u62e5\u6709\u4e86\u88ab\u6355\u83b7\u7684\u53d8\u91cf\u3002\u5e76\u5141\u8bb8\u5b83\u79bb\u5f00\u6211\u4eec\u7684\u6808\u5e27\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("h3",{parentName:"blockquote",id:"\u8fd9\u90e8\u5206\u5f15\u7528\u81eathe-rust-programming-language\u4e2d\u6587\u7248"},"\u8fd9\u90e8\u5206\u5f15\u7528\u81ea",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/KaiserY/rust-book-chinese/blob/master/content/Closures%20%E9%97%AD%E5%8C%85.md"},"The Rust Programming Language\u4e2d\u6587\u7248"))))}k.isMDXComponent=!0}}]);