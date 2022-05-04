"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[3140],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=u(t),c=r,s=k["".concat(o,".").concat(c)]||k[c]||d[c]||l;return t?a.createElement(s,p(p({ref:n},m),{},{components:t})):a.createElement(s,p({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1894:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),p=["components"],i={},o="\u5305\u548c\u6a21\u5757",u={unversionedId:"module/module",id:"module/module",title:"\u5305\u548c\u6a21\u5757",description:"\u5305\uff08crate\uff09",source:"@site/docs/module/module.md",sourceDirName:"module",slug:"/module/",permalink:"/rust-docs/docs/module/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module/module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5f0f",permalink:"/rust-docs/docs/match/pattern"},next:{title:"\u6a21\u5757\u548c\u5305\u7cfb\u7edf\u3001Prelude",permalink:"/rust-docs/docs/module/preface"}},m={},d=[{value:"\u5305\uff08crate\uff09",id:"\u5305crate",level:2},{value:"\u6a21\u5757\uff08module\uff09",id:"\u6a21\u5757module",level:2},{value:"\u5728\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757",id:"\u5728\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757",level:3},{value:"\u6a21\u5757\u7684\u53ef\u89c1\u6027",id:"\u6a21\u5757\u7684\u53ef\u89c1\u6027",level:3},{value:"\u5f15\u7528\u5916\u90e8\u6587\u4ef6\u6a21\u5757",id:"\u5f15\u7528\u5916\u90e8\u6587\u4ef6\u6a21\u5757",level:3},{value:"\u591a\u6587\u4ef6\u6a21\u5757\u7684\u5c42\u7ea7\u5173\u7cfb",id:"\u591a\u6587\u4ef6\u6a21\u5757\u7684\u5c42\u7ea7\u5173\u7cfb",level:3},{value:"\u8def\u5f84",id:"\u8def\u5f84",level:3},{value:"Re-exporting",id:"re-exporting",level:3},{value:"\u52a0\u8f7d\u5916\u90e8 crate",id:"\u52a0\u8f7d\u5916\u90e8-crate",level:3}],k={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5305\u548c\u6a21\u5757"},"\u5305\u548c\u6a21\u5757"),(0,l.kt)("h2",{id:"\u5305crate"},"\u5305\uff08crate\uff09"),(0,l.kt)("p",null,"Rust \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"crate")," \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u53ef\u7f16\u8bd1\u5355\u5143\u3002\u5177\u4f53\u8bf4\u6765\uff0c\u5c31\u662f\u4e00\u4e2a\u6216\u4e00\u6279\u6587\u4ef6\uff08\u5982\u679c\u662f\u4e00\u6279\u6587\u4ef6\uff0c\u90a3\u4e48\u6709\u4e00\u4e2a\u6587\u4ef6\u662f\u8fd9\u4e2a crate \u7684\u5165\u53e3\uff09\u3002\u5b83\u7f16\u8bd1\u540e\uff0c\u4f1a\u5bf9\u5e94\u7740\u751f\u6210\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u6216\u4e00\u4e2a\u5e93\u3002"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo new foo"),"\uff0c\u4f1a\u5f97\u5230\u5982\u4e0b\u76ee\u5f55\u5c42\u7ea7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foo\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"lib.rs")," \u5c31\u662f\u4e00\u4e2a crate\uff08\u5165\u53e3\uff09\uff0c\u5b83\u7f16\u8bd1\u540e\u662f\u4e00\u4e2a\u5e93\u3002\u4e00\u4e2a\u5de5\u7a0b\u4e0b\u53ef\u4ee5\u5305\u542b\u4e0d\u6b62\u4e00\u4e2a crate\uff0c\u672c\u5de5\u7a0b\u53ea\u6709\u4e00\u4e2a\u3002"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo new --bin bar"),"\uff0c\u4f1a\u5f97\u5230\u5982\u4e0b\u76ee\u5f55\u5c42\u7ea7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bar\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main.rs\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"main.rs")," \u5c31\u662f\u4e00\u4e2a crate\uff08\u5165\u53e3\uff09\uff0c\u5b83\u7f16\u8bd1\u540e\u662f\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u6a21\u5757module"},"\u6a21\u5757\uff08module\uff09"),(0,l.kt)("p",null,"Rust \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5173\u952e\u5b57 ",(0,l.kt)("inlineCode",{parentName:"p"},"mod"),"\uff0c\u5b83\u53ef\u4ee5\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757\uff0c\u6216\u8005\u5f15\u7528\u53e6\u5916\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e\u6a21\u5757\u7684\u4e00\u4e9b\u8981\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a crate \u4e2d\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u4e86\u4e00\u4e2a\u9690\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u6839\u6a21\u5757\uff08root module\uff09"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u7684\u547d\u540d\u98ce\u683c\u4e5f\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"lower_snake_case"),"\uff0c\u8ddf\u5176\u5b83\u7684 Rust \u7684\u6807\u8bc6\u7b26\u4e00\u6837\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u53ef\u4ee5\u5d4c\u5957\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u4e2d\u53ef\u4ee5\u5199\u4efb\u4f55\u5408\u6cd5\u7684 Rust \u4ee3\u7801\uff1b")),(0,l.kt)("h3",{id:"\u5728\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757"},"\u5728\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6a21\u5757"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u5728\u4e0a\u8ff0 ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.rs")," \u4e2d\uff0c\u6211\u4eec\u5199\u4e0a\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'mod aaa {\n    const X: i32 = 10;\n\n    fn print_aaa() {\n        println!("{}", 42);\n    }\n}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u5199\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'mod aaa {\n    const X: i32 = 10;\n\n    fn print_aaa() {\n        println!("{}", 42);\n    }\n\n    mod BBB {\n        fn print_bbb() {\n            println!("{}", 37);\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u5199\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'mod aaa {\n    const X: i32 = 10;\n\n    fn print_aaa() {\n        println!("{}", 42);\n    }\n\n    mod bbb {\n        fn print_bbb() {\n            println!("{}", 37);\n        }\n    }\n}\n\nmod ccc {\n    fn print_ccc() {\n        println!("{}", 25);\n    }\n\n}\n\n')),(0,l.kt)("h3",{id:"\u6a21\u5757\u7684\u53ef\u89c1\u6027"},"\u6a21\u5757\u7684\u53ef\u89c1\u6027"),(0,l.kt)("p",null,"\u6211\u4eec\u524d\u9762\u5199\u4e86\u4e00\u4e9b\u6a21\u5757\uff0c\u4f46\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u5199\u90a3\u4e9b\u6a21\u5757\uff0c\u76ee\u524d\u662f\u6ca1\u6709\u4ec0\u4e48\u4f5c\u7528\u7684\u3002\u5199\u6a21\u5757\u7684\u76ee\u7684\u4e00\u662f\u4e3a\u4e86\u5206\u9694\u903b\u8f91\u5757\uff0c\u4e8c\u662f\u4e3a\u4e86\u63d0\u4f9b\u9002\u5f53\u7684\u51fd\u6570\uff0c\u6216\u5bf9\u8c61\uff0c\u4f9b\u5916\u90e8\u8bbf\u95ee\u3002\u800c\u6a21\u5757\u4e2d\u7684\u5185\u5bb9\uff0c\u9ed8\u8ba4\u662f\u79c1\u6709\u7684\uff0c\u53ea\u6709\u6a21\u5757\u5185\u90e8\u80fd\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5916\u90e8\u80fd\u4f7f\u7528\u6a21\u5757\u4e2d item\uff0c\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pub")," \u5173\u952e\u5b57\u3002\u5916\u90e8\u5f15\u7528\u7684\u65f6\u5019\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"use")," \u5173\u952e\u5b57\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'mod ccc {\n    pub fn print_ccc() {\n        println!("{}", 25);\n    }\n}\n\nfn main() {\n    use ccc::print_ccc;\n\n    print_ccc();\n    // \u6216\u8005\n    ccc::print_ccc();\n}\n')),(0,l.kt)("p",null,"\u89c4\u5219\u5f88\u7b80\u5355\uff0c\u4e00\u4e2a item\uff08\u51fd\u6570\uff0c\u7ed1\u5b9a\uff0cTrait \u7b49\uff09\uff0c\u524d\u9762\u52a0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"pub"),"\uff0c\u90a3\u4e48\u5c31\u5b83\u53d8\u6210\u5bf9\u5916\u53ef\u89c1\uff08\u8bbf\u95ee\uff0c\u8c03\u7528\uff09\u7684\u4e86\u3002"),(0,l.kt)("h3",{id:"\u5f15\u7528\u5916\u90e8\u6587\u4ef6\u6a21\u5757"},"\u5f15\u7528\u5916\u90e8\u6587\u4ef6\u6a21\u5757"),(0,l.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u4eec\u4f1a\u5728\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\u5199\u6a21\u5757\u5185\u5bb9\uff0c\u7136\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mod")," \u5173\u952e\u5b57\u6765\u52a0\u8f7d\u90a3\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u6211\u4eec\u7684\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u4e0b\u65b0\u5efa\u4e86\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"aaa.rs"),"\u3002\u73b0\u5728\u76ee\u5f55\u7ed3\u6784\u662f\u4e0b\u9762\u8fd9\u6837\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foo\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 aaa.rs\n    \u2514\u2500\u2500 main.rs\n")),(0,l.kt)("p",null,"\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"aaa.rs")," \u4e2d\uff0c\u5199\u4e0a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn print_aaa() {\n    println!("{}", 25);\n}\n')),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"main.rs")," \u4e2d\uff0c\u5199\u4e0a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"mod aaa;\n\nuse self::aaa::print_aaa;\n\nfn main () {\n    print_aaa();\n}\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u7ec6\u5fc3\u7684\u670b\u53cb\u4f1a\u53d1\u73b0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"aaa.rs")," \u4e2d\uff0c\u6ca1\u6709\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mod xxx {}")," \u8fd9\u6837\u5305\u88f9\u8d77\u6765\uff0c\u662f\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"mod xxx;")," \u76f8\u5f53\u4e8e\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx.rs")," \u6587\u4ef6\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mod xxx {}")," \u5305\u88f9\u8d77\u6765\u4e86\u3002\u521d\u5b66\u8005\u5f80\u5f80\u4f1a\u591a\u52a0\u4e00\u5c42\uff0c\u8bf7\u6ce8\u610f\u3002"),(0,l.kt)("h3",{id:"\u591a\u6587\u4ef6\u6a21\u5757\u7684\u5c42\u7ea7\u5173\u7cfb"},"\u591a\u6587\u4ef6\u6a21\u5757\u7684\u5c42\u7ea7\u5173\u7cfb"),(0,l.kt)("p",null,"Rust \u7684\u6a21\u5757\u652f\u6301\u5c42\u7ea7\u7ed3\u6784\uff0c\u4f46\u8fd9\u79cd\u5c42\u7ea7\u7ed3\u6784\u672c\u8eab\u4e0e\u6587\u4ef6\u7cfb\u7edf\u76ee\u5f55\u7684\u5c42\u7ea7\u7ed3\u6784\u662f\u89e3\u8026\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mod xxx;")," \u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx")," \u4e0d\u80fd\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"::")," \u53f7\u3002\u4e5f\u5373\u5728\u8fd9\u4e2a\u8868\u8fbe\u5f62\u5f0f\u4e2d\uff0c\u662f\u6ca1\u6cd5\u5f15\u7528\u591a\u5c42\u7ed3\u6784\u4e0b\u7684\u6a21\u5757\u7684\u3002\u4e5f\u5373\uff0c\u4f60\u4e0d\u53ef\u80fd\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mod a::b::c::d;")," \u7684\u5f62\u5f0f\u6765\u5f15\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"a/b/c/d.rs")," \u8fd9\u4e2a\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\uff0cRust \u7684\u591a\u5c42\u6a21\u5757\u9075\u5faa\u5982\u4e0b\u4e24\u6761\u89c4\u5219\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f18\u5148\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"li"},"xxx.rs")," \u6587\u4ef6",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"main.rs"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"lib.rs"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"mod.rs"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"mod xxx;")," \u9ed8\u8ba4\u4f18\u5148\u67e5\u627e\u540c\u7ea7\u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx.rs")," \u6587\u4ef6\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"li"},"yyy.rs"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"mod xxx;"),"\u9ed8\u8ba4\u4f18\u5148\u67e5\u627e\u540c\u7ea7\u76ee\u5f55\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"yyy"),"\u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx.rs")," \u6587\u4ef6\uff1b"))),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx.rs")," \u4e0d\u5b58\u5728\uff0c\u5219\u67e5\u627e ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx/mod.rs")," \u6587\u4ef6\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx")," \u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"mod.rs")," \u6587\u4ef6\u3002")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4e24\u79cd\u60c5\u51b5\uff0c\u52a0\u8f7d\u6210\u6a21\u5757\u540e\uff0c\u6548\u679c\u662f\u76f8\u540c\u7684\u3002Rust \u5c31\u51ed\u8fd9\u4e24\u6761\u89c4\u5219\uff0c\u901a\u8fc7\u8fed\u4ee3\u4f7f\u7528\uff0c\u7ed3\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"pub")," \u5173\u952e\u5b57\uff0c\u5b9e\u73b0\u4e86\u5bf9\u6df1\u5c42\u76ee\u5f55\u4e0b\u6a21\u5757\u7684\u52a0\u8f7d\uff1b"),(0,l.kt)("p",null,"\u4e0b\u9762\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u73b0\u5728\u6211\u4eec\u5efa\u4e86\u4e00\u4e2a\u6d4b\u8bd5\u5de5\u7a0b\uff0c\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 a\n\u2502\xa0\xa0 \u251c\u2500\u2500 b\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 c\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 d.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u2514\u2500\u2500 main.rs\n\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"a/b/c/d.rs")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn print_ddd() {\n    println!("i am ddd.");\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"a/b/c/mod.rs")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub mod d;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"a/b/mod.rs")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub mod c;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"a/mod.rs")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub mod b;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"main.rs")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"mod a;\n\nuse self::a::b::c::d;\n\nfn main() {\n    d::print_ddd();\n}\n\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"i am ddd.")),(0,l.kt)("p",null,"\u4ed4\u7ec6\u7406\u89e3\u672c\u4f8b\u5b50\uff0c\u5c31\u660e\u767d Rust \u7684\u5c42\u7ea7\u7ed3\u6784\u6a21\u5757\u7684\u7528\u6cd5\u4e86\u3002"),(0,l.kt)("p",null,"\u81f3\u4e8e\u4e3a\u4f55 Rust \u8981\u8fd9\u6837\u8bbe\u8ba1\uff0c\u6709\u51e0\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Rust \u672c\u8eab\u6a21\u5757\u7684\u8bbe\u8ba1\u662f\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u6587\u4ef6\u7cfb\u7edf\u76ee\u5f55\u89e3\u8026\u7684\uff0c\u56e0\u4e3a Rust \u672c\u8eab\u53ef\u7528\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u5f00\u53d1\uff1b"),(0,l.kt)("li",{parentName:"ol"},"Rust \u4e2d\u7684\u4e00\u4e2a\u6587\u4ef6\u5185\uff0c\u53ef\u5305\u542b\u591a\u4e2a\u6a21\u5757\uff0c\u76f4\u63a5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"a::b::c::d")," \u6620\u5c04\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"a/b/c/d.rs")," \u4f1a\u5f15\u8d77\u4e00\u4e9b\u6b67\u4e49\uff1b"),(0,l.kt)("li",{parentName:"ol"},"Rust \u4e00\u5207\u4ece\u5b89\u5168\u6027\u3001\u663e\u5f0f\u5316\u7acb\u573a\u51fa\u53d1\uff0c\u8981\u6c42\u5f15\u7528\u8def\u5f84\u4e2d\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\uff0c\u90fd\u662f\u4e00\u4e2a\u6709\u6548\u7684\u6a21\u5757\uff0c\u6bd4\u5982\u4e0a\u4f8b\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"d")," \u662f\u4e00\u4e2a\u6709\u6548\u7684\u6a21\u5757\u7684\u8bdd\uff0c\u90a3\u4e48\uff0c\u8981\u6c42 ",(0,l.kt)("inlineCode",{parentName:"li"},"c, b, a")," \u5206\u522b\u90fd\u662f\u6709\u6548\u7684\u6a21\u5757\uff0c\u53ef\u5355\u72ec\u5f15\u7528\u3002")),(0,l.kt)("h3",{id:"\u8def\u5f84"},"\u8def\u5f84"),(0,l.kt)("p",null,"\u524d\u9762\u6211\u4eec\u63d0\u5230\uff0c\u4e00\u4e2a crate \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u53ef\u7f16\u8bd1\u5355\u5143\u3002\u5b83\u6709\u4e00\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u8fd9\u4e2a\u5165\u53e3\u6587\u4ef6\u662f\u8fd9\u4e2a crate\uff08\u91cc\u9762\u53ef\u80fd\u5305\u542b\u82e5\u5e72\u4e2a module\uff09\u7684\u6a21\u5757\u6839\u8def\u5f84\u3002\u6574\u4e2a\u6a21\u5757\u7684\u5f15\u7528\uff0c\u5f62\u6210\u4e00\u4e2a\u94fe\uff0c\u6bcf\u4e2a\u6a21\u5757\uff0c\u90fd\u53ef\u4ee5\u7528\u4e00\u4e2a\u7cbe\u786e\u7684\u8def\u5f84\uff08\u6bd4\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"a::b::c::d"),"\uff09\u6765\u8868\u793a\uff1b"),(0,l.kt)("p",null,"\u4e0e\u6587\u4ef6\u7cfb\u7edf\u6982\u5ff5\u7c7b\u4f3c\uff0c\u6a21\u5757\u8def\u5f84\u4e5f\u6709\u76f8\u5bf9\u8def\u5f84\u548c\u7edd\u5bf9\u8def\u5f84\u7684\u6982\u5ff5\u3002\u4e3a\u6b64\uff0cRust \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"self")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"super")," \u4e24\u4e2a\u5173\u952e\u5b57\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"self")," \u5728\u8def\u5f84\u4e2d\uff0c\u6709\u4e24\u79cd\u610f\u601d\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"use self::xxx")," \u8868\u793a\uff0c\u52a0\u8f7d\u5f53\u524d\u6a21\u5757\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx"),"\u3002\u6b64\u65f6 self \u53ef\u7701\u7565\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"use xxx::{self, yyy}"),"\uff0c\u8868\u793a\uff0c\u52a0\u8f7d\u5f53\u524d\u8def\u5f84\u4e0b\u6a21\u5757 ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx")," \u672c\u8eab\uff0c\u4ee5\u53ca\u6a21\u5757 ",(0,l.kt)("inlineCode",{parentName:"li"},"xxx")," \u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"yyy"),"\uff1b")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"super")," \u8868\u793a\uff0c\u5f53\u524d\u6a21\u5757\u8def\u5f84\u7684\u4e0a\u4e00\u7ea7\u8def\u5f84\uff0c\u53ef\u4ee5\u7406\u89e3\u6210\u7236\u6a21\u5757\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use super::xxx;\n")),(0,l.kt)("p",null,"\u8868\u793a\u5f15\u7528\u7236\u6a21\u5757\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx"),"\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u8fd8\u6709\u4e00\u79cd\u7279\u6b8a\u7684\u8def\u5f84\u5f62\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"::xxx::yyy\n")),(0,l.kt)("p",null,"\u5b83\u8868\u793a\uff0c\u5f15\u7528\u6839\u8def\u5f84\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx::yyy"),"\uff0c\u8fd9\u4e2a\u6839\u8def\u5f84\uff0c\u6307\u7684\u662f\u5f53\u524d crate \u7684\u6839\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u8def\u5f84\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," \u7b26\u53f7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use xxx::*;\n")),(0,l.kt)("p",null,"\u8868\u793a\u5bfc\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx")," \u6a21\u5757\u4e0b\u7684\u6240\u6709\u53ef\u89c1 item\uff08\u52a0\u4e86 pub \u6807\u8bc6\u7684 item\uff09\u3002"),(0,l.kt)("h3",{id:"re-exporting"},"Re-exporting"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pub use")," \u6765\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Re-exporting"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Re-exporting")," \u7684\u5b57\u9762\u610f\u601d\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"\u91cd\u65b0\u5bfc\u51fa"),"\u3002\u5b83\u7684\u610f\u601d\u662f\u8fd9\u6837\u7684\uff0c\u628a\u6df1\u5c42\u7684 item \u5bfc\u51fa\u5230\u4e0a\u5c42\u76ee\u5f55\u4e2d\uff0c\u4f7f\u8c03\u7528\u7684\u65f6\u5019\uff0c\u66f4\u65b9\u4fbf\u3002\u63a5\u53e3\u8bbe\u8ba1\u4e2d\u4f1a\u5927\u91cf\u7528\u5230\u8fd9\u4e2a\u6280\u672f\u3002"),(0,l.kt)("p",null,"\u8fd8\u662f\u4e3e\u4e0a\u9762\u90a3\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"a::b::c::d")," \u7684\u4f8b\u5b50\u3002\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"main.rs")," \u4e2d\uff0c\u8981\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"d"),"\uff0c\u5f97\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"use a::b::c::d;")," \u6765\u8c03\u7528\u3002\u800c\u5982\u679c\u6211\u4eec\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"a/mod.rs")," \u6587\u4ef6\u4e3a\uff1a\n",(0,l.kt)("inlineCode",{parentName:"p"},"a/mod.rs")," \u6587\u4ef6\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub mod b;\npub use b::c::d;\n")),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"main.rs")," \u4e2d\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"use a::d;")," \u6765\u8c03\u7528\u4e86\u3002\u4ece\u8fd9\u4e2a\u4f8b\u5b50\u6765\u770b\u6ca1\u89c9\u5f97\u65b9\u4fbf\u591a\u5c11\u3002\u4f46\u662f\u5982\u679c\u5f00\u53d1\u7684\u4e00\u4e2a\u5e93\u4e2d\u6709\u5927\u91cf\u7684\u5185\u5bb9\uff0c\u800c\u4e14\u662f\u5728\u4e0d\u540c\u5c42\u6b21\u7684\u6a21\u5757\u4e2d\u3002\u90a3\u4e48\uff0c\u901a\u8fc7\u7edf\u4e00\u5bfc\u51fa\u5230\u4e00\u4e2a\u5730\u65b9\uff0c\u5c31\u80fd\u5927\u5927\u65b9\u4fbf\u63a5\u53e3\u4f7f\u7528\u8005\u3002"),(0,l.kt)("h3",{id:"\u52a0\u8f7d\u5916\u90e8-crate"},"\u52a0\u8f7d\u5916\u90e8 crate"),(0,l.kt)("p",null,"\u524d\u9762\u6211\u4eec\u8bb2\u7684\uff0c\u90fd\u662f\u5728\u5f53\u524d crate \u4e2d\u7684\u6280\u672f\u3002\u771f\u6b63\u6211\u4eec\u5728\u5f00\u53d1\u65f6\uff0c\u4f1a\u5927\u91cf\u7528\u5230\u5916\u90e8\u5e93\u3002\u5916\u90e8\u5e93\u662f\u901a\u8fc7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"extern crate xxx;\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u6765\u5f15\u5165\u7684\u3002"),(0,l.kt)("p",null,"\u6ce8\uff1a\u8981\u4f7f\u4e0a\u8ff0\u5f15\u7528\u751f\u6548\uff0c\u8fd8\u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependecies")," \u6bb5\uff0c\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},'xxx="version num"')," \u8fd9\u79cd\u4f9d\u8d56\u8bf4\u660e\uff0c\u8be6\u60c5\u89c1 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo \u9879\u76ee\u7ba1\u7406")," \u8fd9\u4e00\u7ae0\u3002"),(0,l.kt)("p",null,"\u5f15\u5165\u540e\uff0c\u5c31\u76f8\u5f53\u4e8e\u5f15\u5165\u4e86\u4e00\u4e2a\u7b26\u53f7 ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx"),"\uff0c\u540e\u9762\u53ef\u4ee5\u76f4\u63a5\u4ee5\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx")," \u4e3a\u6839\u5f15\u7528\u8fd9\u4e2a crate \u4e2d\u7684 item\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"extern crate xxx;\n\nuse xxx::yyy::zzz;\n")),(0,l.kt)("p",null,"\u5f15\u5165\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"as")," \u5173\u952e\u5b57\u91cd\u547d\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"extern crate xxx as foo;\n\nuse foo::yyy::zzz;\n")))}c.isMDXComponent=!0}}]);