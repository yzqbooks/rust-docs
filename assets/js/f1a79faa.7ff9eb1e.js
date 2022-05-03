"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[6303],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=u,k=c["".concat(p,".").concat(d)]||c[d]||i[d]||a;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:u,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5532:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i}});var r=t(7462),u=t(3366),a=(t(7294),t(3905)),l=["components"],o={},p="\u95ed\u5305\u7684\u8bed\u6cd5",s={unversionedId:"closure/syntax",id:"closure/syntax",title:"\u95ed\u5305\u7684\u8bed\u6cd5",description:"\u57fa\u672c\u5f62\u5f0f",source:"@site/docs/closure/syntax.md",sourceDirName:"closure",slug:"/closure/syntax",permalink:"/rust-docs/docs/closure/syntax",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/closure/syntax.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u95ed\u5305",permalink:"/rust-docs/docs/closure/overview"},next:{title:"\u4ee3\u7801\u98ce\u683c",permalink:"/rust-docs/docs/coding-style/style"}},m={},i=[{value:"\u57fa\u672c\u5f62\u5f0f",id:"\u57fa\u672c\u5f62\u5f0f",level:2},{value:"\u6355\u83b7\u53d8\u91cf",id:"\u6355\u83b7\u53d8\u91cf",level:2},{value:"move\u95ed\u5305",id:"move\u95ed\u5305",level:2}],c={toc:i};function d(e){var n=e.components,t=(0,u.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u95ed\u5305\u7684\u8bed\u6cd5"},"\u95ed\u5305\u7684\u8bed\u6cd5"),(0,a.kt)("h2",{id:"\u57fa\u672c\u5f62\u5f0f"},"\u57fa\u672c\u5f62\u5f0f"),(0,a.kt)("p",null,"\u95ed\u5305\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let plus_one = |x: i32| x + 1;\n\nassert_eq!(2, plus_one(1));\n")),(0,a.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u7ed1\u5b9a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"plus_one"),"\uff0c\u5e76\u628a\u5b83\u8d4b\u4e88\u4e00\u4e2a\u95ed\u5305\u3002\u95ed\u5305\u7684\u53c2\u6570\u4f4d\u4e8e\u7ba1\u9053\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"|"),"\uff09\u4e4b\u4e2d\uff0c\u800c\u95ed\u5305\u4f53\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"x + 1"),"\u3002\u8bb0\u4f4f",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u6240\u4ee5\u6211\u4eec\u4e5f\u53ef\u4ee5\u62e5\u6709\u5305\u542b\u591a\u884c\u7684\u95ed\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let plus_two = |x| {\n    let mut result: i32 = x;\n\n    result += 1;\n    result += 1;\n\n    result\n};\n\nassert_eq!(4, plus_two(2));\n")),(0,a.kt)("p",null,"\u4f60\u4f1a\u6ce8\u610f\u5230\u95ed\u5305\u7684\u4e00\u4e9b\u65b9\u9762\u4e0e\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"fn"),"\u5b9a\u4e49\u7684\u5e38\u89c4\u51fd\u6570\u6709\u70b9\u4e0d\u540c\u3002\u7b2c\u4e00\u4e2a\u662f\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u6807\u660e\u95ed\u5305\u63a5\u6536\u548c\u8fd4\u56de\u53c2\u6570\u7684\u7c7b\u578b\u3002\u6211\u4eec\u53ef\u4ee5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let plus_one = |x: i32| -> i32 { x + 1 };\n\nassert_eq!(2, plus_one(1));\n")),(0,a.kt)("p",null,"\u4e0d\u8fc7\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u8fd9\u4e48\u5199\u3002\u4e3a\u4ec0\u4e48\u5462\uff1f\u57fa\u672c\u4e0a\uff0c\u8fd9\u662f\u51fa\u4e8e\u201c\u4eba\u4f53\u5de5\u7a0b\u5b66\u201d\u7684\u539f\u56e0\u3002\u56e0\u4e3a\u4e3a\u547d\u540d\u51fd\u6570\u6307\u5b9a\u5168\u90e8\u7c7b\u578b\u6709\u52a9\u4e8e\u50cf\u6587\u6863\u548c\u7c7b\u578b\u63a8\u65ad\uff0c\u800c\u95ed\u5305\u7684\u7c7b\u578b\u5219\u5f88\u5c11\u6709\u6587\u6863\u56e0\u4e3a\u5b83\u4eec\u662f\u533f\u540d\u7684\uff0c\u5e76\u4e14\u5e76\u4e0d\u4f1a\u4ea7\u751f\u50cf\u63a8\u65ad\u4e00\u4e2a\u547d\u540d\u51fd\u6570\u7684\u7c7b\u578b\u8fd9\u6837\u7684\u201c\u8fdc\u8ddd\u79bb\u9519\u8bef\u201d\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7684\u8bed\u6cd5\u5927\u540c\u5c0f\u5f02\u3002\u6211\u4f1a\u589e\u52a0\u7a7a\u683c\u6765\u4f7f\u5b83\u4eec\u770b\u8d77\u6765\u66f4\u50cf\u4e00\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn  plus_one_v1   (x: i32) -> i32 { x + 1 }\nlet plus_one_v2 = |x: i32| -> i32 { x + 1 };\nlet plus_one_v3 = |x: i32|          x + 1  ;\n")),(0,a.kt)("h2",{id:"\u6355\u83b7\u53d8\u91cf"},"\u6355\u83b7\u53d8\u91cf"),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u628a\u5b83\u79f0\u4e3a\u201c\u95ed\u5305\u201d\u662f\u56e0\u4e3a\u5b83\u4eec\u201c\u5305\u542b\u5728\u73af\u5883\u4e2d\u201d\uff08close over their environment\uff09\u3002\u8fd9\u770b\u8d77\u6765\u50cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let num = 5;\nlet plus_num = |x: i32| x + num;\n\nassert_eq!(10, plus_num(5));\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ed\u5305\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"plus_num"),"\uff0c\u5f15\u7528\u4e86\u5b83\u4f5c\u7528\u57df\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"\u7ed1\u5b9a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"num"),"\u3002\u66f4\u660e\u786e\u7684\u8bf4\uff0c\u5b83\u501f\u7528\u4e86\u7ed1\u5b9a\u3002\u5982\u679c\u6211\u4eec\u505a\u4e00\u4e9b\u4f1a\u4e0e\u8fd9\u4e2a\u7ed1\u5b9a\u51b2\u7a81\u7684\u4e8b\uff0c\u6211\u4eec\u4f1a\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u3002\u6bd4\u5982\u8fd9\u4e2a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut num = 5;\nlet plus_num = |x: i32| x + num;\n\nlet y = &mut num;\n")),(0,a.kt)("p",null,"\u9519\u8bef\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"error: cannot borrow `num` as mutable because it is also borrowed as immutable\n    let y = &mut num;\n                 ^~~\nnote: previous borrow of `num` occurs here due to use in closure; the immutable\n  borrow prevents subsequent moves or mutable borrows of `num` until the borrow\n  ends\n    let plus_num = |x| x + num;\n                   ^~~~~~~~~~~\nnote: previous borrow ends here\nfn main() {\n    let mut num = 5;\n    let plus_num = |x| x + num;\n\n    let y = &mut num;\n}\n^\n")),(0,a.kt)("p",null,"\u4e00\u4e2a\u5570\u55e6\u4f46\u6709\u7528\u7684\u9519\u8bef\u4fe1\u606f\uff01\u5982\u5b83\u6240\u8bf4\uff0c\u6211\u4eec\u4e0d\u80fd\u53d6\u5f97\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"num"),"\u7684\u53ef\u53d8\u501f\u7528\u56e0\u4e3a\u95ed\u5305\u5df2\u7ecf\u501f\u7528\u4e86\u5b83\u3002\u5982\u679c\u6211\u4eec\u8ba9\u95ed\u5305\u79bb\u5f00\u4f5c\u7528\u57df\uff0c\u6211\u4eec\u53ef\u4ee5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut num = 5;\n{\n    let plus_num = |x: i32| x + num;\n\n} // plus_num goes out of scope, borrow of num ends\n\nlet y = &mut num;\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u95ed\u5305\u9700\u8981\u5b83\uff0cRust\u4f1a\u53d6\u5f97\u6240\u6709\u6743\u5e76\u79fb\u52a8\u73af\u5883\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let nums = vec![1, 2, 3];\n\nlet takes_nums = || nums;\n\nprintln!("{:?}", nums);\n')),(0,a.kt)("p",null,"\u8fd9\u4f1a\u7ed9\u6211\u4eec\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"note: `nums` moved into closure environment here because it has type\n  `[closure(()) -> collections::vec::Vec<i32>]`, which is non-copyable\nlet takes_nums = || nums;\n                    ^~~~~~~\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\u62e5\u6709\u5b83\u5185\u5bb9\u7684\u6240\u6709\u6743\uff0c\u800c\u4e14\u7531\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u5f53\u6211\u4eec\u5728\u95ed\u5305\u4e2d\u5f15\u7528\u5b83\u65f6\uff0c\u6211\u4eec\u5fc5\u987b\u53d6\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),"\u7684\u6240\u6709\u6743\u3002\u8fd9\u4e0e\u6211\u4eec\u4f20\u9012",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),"\u7ed9\u4e00\u4e2a\u53d6\u5f97\u5b83\u6240\u6709\u6743\u7684\u51fd\u6570\u4e00\u6837\u3002"),(0,a.kt)("h2",{id:"move\u95ed\u5305"},"move\u95ed\u5305"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"move"),"\u5173\u952e\u5b57\u5f3a\u5236\u4f7f\u6211\u4eec\u7684\u95ed\u5305\u53d6\u5f97\u5b83\u73af\u5883\u7684\u6240\u6709\u6743\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let num = 5;\n\nlet owns_num = move |x: i32| x + num;\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5373\u4fbf\u5173\u952e\u5b57\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"move"),"\uff0c\u53d8\u91cf\u9075\u5faa\u6b63\u5e38\u7684\u79fb\u52a8\u8bed\u4e49\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\u5b9e\u73b0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Copy"),"\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"owns_num"),"\u53d6\u5f97\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\u7684\u62f7\u8d1d\u7684\u6240\u6709\u6743\u3002\u90a3\u4e48\u533a\u522b\u662f\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut num = 5;\n\n{\n    let mut add_num = |x: i32| num += x;\n\n    add_num(5);\n}\n\nassert_eq!(10, num);\n")),(0,a.kt)("p",null,"\u90a3\u4e48\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u7684\u95ed\u5305\u53d6\u5f97\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"num"),"\u7684\u53ef\u53d8\u5f15\u7528\uff0c\u7136\u540e\u63a5\u7740\u6211\u4eec\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"add_num"),"\uff0c\u5b83\u6539\u53d8\u4e86\u5176\u4e2d\u7684\u503c\uff0c\u6b63\u5982\u6211\u4eec\u671f\u671b\u7684\u3002\u6211\u4eec\u4e5f\u9700\u8981\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"add_num"),"\u58f0\u660e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"mut"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u4f1a\u6539\u53d8\u5b83\u7684\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"move"),"\u4fee\u9970\u95ed\u5305\uff0c\u4f1a\u53d1\u751f\u4e9b\u4e0d\u540c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut num = 5;\n\n{\n    let mut add_num = move |x: i32| num += x;\n\n    add_num(5);\n}\n\nassert_eq!(5, num);\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ea\u4f1a\u5f97\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\u3002\u8fd9\u6b21\u6211\u4eec\u6ca1\u6709\u83b7\u53d6\u5230\u5916\u90e8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"num"),"\u7684\u53ef\u53d8\u501f\u7528\uff0c\u6211\u4eec\u5b9e\u9645\u4e0a\u662f\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," move \u8fdb\u4e86\u95ed\u5305\u3002\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u5177\u6709 Copy \u5c5e\u6027\uff0c\u56e0\u6b64\u53d1\u751f move \u4e4b\u540e\uff0c\u4ee5\u524d\u7684\u53d8\u91cf\u751f\u547d\u5468\u671f\u5e76\u672a\u7ed3\u675f\uff0c\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"assert_eq!")," \u4e2d\u4f7f\u7528\u3002\u6211\u4eec\u6253\u5370\u7684\u53d8\u91cf\u548c\u95ed\u5305\u5185\u7684\u53d8\u91cf\u662f\u72ec\u7acb\u7684\u4e24\u4e2a\u53d8\u91cf\u3002\u5982\u679c\u6211\u4eec\u6355\u83b7\u7684\u73af\u5883\u53d8\u91cf\u4e0d\u662f Copy \u7684\uff0c\u90a3\u4e48\u5916\u90e8\u73af\u5883\u53d8\u91cf\u88ab move \u8fdb\u95ed\u5305\u540e\uff0c\n\u5b83\u5c31\u4e0d\u80fd\u7ee7\u7eed\u5728\u539f\u5148\u7684\u51fd\u6570\u4e2d\u4f7f\u7528\u4e86\uff0c\u53ea\u80fd\u5728\u95ed\u5305\u5185\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\u5728\u6211\u4eec\u8ba8\u8bba\u83b7\u53d6\u6216\u8fd4\u56de\u95ed\u5305\u4e4b\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u66f4\u591a\u7684\u4e86\u89e3\u4e00\u4e0b\u95ed\u5305\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002\u4f5c\u4e3a\u4e00\u4e2a\u7cfb\u7edf\u8bed\u8a00\uff0cRust\u7ed9\u4e88\u4f60\u4e86\u5927\u91cf\u7684\u63a7\u5236\u4f60\u4ee3\u7801\u7684\u80fd\u529b\uff0c\u800c\u95ed\u5305\u4e5f\u662f\u4e00\u6837\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"\u8fd9\u90e8\u5206\u5f15\u7528\u81eathe-rust-programming-language\u4e2d\u6587\u7248"},"\u8fd9\u90e8\u5206\u5f15\u7528\u81ea",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/KaiserY/rust-book-chinese/blob/master/content/Closures%20%E9%97%AD%E5%8C%85.md"},"The Rust Programming Language\u4e2d\u6587\u7248"))))}d.isMDXComponent=!0}}]);