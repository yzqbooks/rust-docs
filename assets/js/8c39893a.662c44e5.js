"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[3542],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={},l="\u95ed\u5305",c={unversionedId:"closure/overview",id:"closure/overview",title:"\u95ed\u5305",description:"\u95ed\u5305\u662f\u4ec0\u4e48\uff1f\u5148\u6765\u770b\u770b\u7ef4\u57fa\u767e\u79d1\u4e0a\u7684\u63cf\u8ff0\uff1a",source:"@site/docs/closure/overview.md",sourceDirName:"closure",slug:"/closure/overview",permalink:"/rust-docs/docs/closure/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/closure/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u95ed\u5305\u7684\u5b9e\u73b0",permalink:"/rust-docs/docs/closure/implementation"},next:{title:"\u95ed\u5305\u7684\u8bed\u6cd5",permalink:"/rust-docs/docs/closure/syntax"}},p={},s=[],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,a.kt)("p",null,"\u95ed\u5305\u662f\u4ec0\u4e48\uff1f\u5148\u6765\u770b\u770b",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)"},"\u7ef4\u57fa\u767e\u79d1"),"\u4e0a\u7684\u63cf\u8ff0\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u95ed\u5305\uff08\u82f1\u8bed\uff1aClosure\uff09\uff0c\u53c8\u79f0\u8bcd\u6cd5\u95ed\u5305\uff08Lexical Closure\uff09\u6216\u51fd\u6570\u95ed\u5305\uff08function closures\uff09\uff0c\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u5f15\u7528\u4e86\u81ea\u7531\u53d8\u91cf\u7684\u51fd\u6570"),"\u3002\u8fd9\u4e2a\u88ab\u5f15\u7528\u7684\u81ea\u7531\u53d8\u91cf\u5c06\u548c\u8fd9\u4e2a\u51fd\u6570\u4e00\u540c\u5b58\u5728\uff0c\u5373\u4f7f\u5df2\u7ecf\u79bb\u5f00\u4e86\u521b\u9020\u5b83\u7684\u73af\u5883\u4e5f\u4e0d\u4f8b\u5916\u3002\u6240\u4ee5\uff0c\u6709\u53e6\u4e00\u79cd\u8bf4\u6cd5\u8ba4\u4e3a\u95ed\u5305\u662f\u7531\u51fd\u6570\u548c\u4e0e\u5176\u76f8\u5173\u7684\u5f15\u7528\u73af\u5883\u7ec4\u5408\u800c\u6210\u7684\u5b9e\u4f53\u3002\u95ed\u5305\u5728\u8fd0\u884c\u65f6\u53ef\u4ee5\u6709\u591a\u4e2a\u5b9e\u4f8b\uff0c\u4e0d\u540c\u7684\u5f15\u7528\u73af\u5883\u548c\u76f8\u540c\u7684\u51fd\u6570\u7ec4\u5408\u53ef\u4ee5\u4ea7\u751f\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n\u95ed\u5305\u7684\u6982\u5ff5\u51fa\u73b0\u4e8e60\u5e74\u4ee3\uff0c\u6700\u65e9\u5b9e\u73b0\u95ed\u5305\u7684\u7a0b\u5e8f\u8bed\u8a00\u662fScheme\u3002\u4e4b\u540e\uff0c\u95ed\u5305\u88ab\u5e7f\u6cdb\u4f7f\u7528\u4e8e\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u5982ML\u8bed\u8a00\u548cLISP\u3002\u5f88\u591a\u547d\u4ee4\u5f0f\u7a0b\u5e8f\u8bed\u8a00\u4e5f\u5f00\u59cb\u652f\u6301\u95ed\u5305\u3002")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7b2c\u4e00\u53e5\u5c31\u5df2\u7ecf\u8bf4\u660e\u4e86\u4ec0\u4e48\u662f\u95ed\u5305\uff1a\u95ed\u5305\u662f\u5f15\u7528\u4e86\u81ea\u7531\u53d8\u91cf\u7684\u51fd\u6570\u3002\u6240\u4ee5\uff0c\u95ed\u5305\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5728rust\u4e2d\uff0c\u51fd\u6570\u548c\u95ed\u5305\u90fd\u662f\u5b9e\u73b0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Fn"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce"),"\u7279\u8d28\uff08trait\uff09\u7684\u7c7b\u578b\u3002\u4efb\u4f55\u5b9e\u73b0\u4e86\u8fd9\u4e09\u79cd\u7279\u8d28\u5176\u4e2d\u4e00\u79cd\u7684\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u90fd\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u8c03\u7528\u5bf9\u8c61")," \uff0c\u90fd\u80fd\u50cf\u51fd\u6570\u548c\u95ed\u5305\u4e00\u6837\u901a\u8fc7\u8fd9\u6837",(0,a.kt)("inlineCode",{parentName:"p"},"name()"),"\u7684\u5f62\u5f0f\u8c03\u7528\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"\u5728rust\u4e2d\u662f\u4e00\u4e2a\u64cd\u4f5c\u7b26\uff0c\u64cd\u4f5c\u7b26\u5728rust\u4e2d\u662f\u53ef\u4ee5\u91cd\u8f7d\u7684\u3002rust\u7684\u64cd\u4f5c\u7b26\u91cd\u8f7d\u662f\u901a\u8fc7\u5b9e\u73b0\u76f8\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"\u6765\u5b9e\u73b0\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"\u64cd\u4f5c\u7b26\u7684\u76f8\u5e94",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Fn"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce"),"\uff0c\u6240\u4ee5\uff0c\u4efb\u4f55\u5b9e\u73b0\u4e86\u8fd9\u4e09\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"\u4e2d\u7684\u4e00\u79cd\u7684\u7c7b\u578b\uff0c\u5176\u5b9e\u5c31\u662f\u91cd\u8f7d\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"\u64cd\u4f5c\u7b26\u3002\u5173\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Fn"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce"),"\u7684\u8bf4\u660e\u8bf7\u770b\u7b2c\u4e8c\u8282\u95ed\u5305\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u672c\u7ae0\u4e3b\u8981\u5206\u56db\u8282\u8bb2\u8ff0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/closure/overview"},"\u7b2c\u4e00\u8282 \u6982\u8981")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/closure/syntax"},"\u7b2c\u4e8c\u8282 \u95ed\u5305\u7684\u8bed\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/closure/implementation"},"\u7b2c\u4e09\u8282 \u95ed\u5305\u7684\u5b9e\u73b0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/closure/as_argument_return_value"},"\u7b2c\u56db\u8282 \u95ed\u5305\u4f5c\u4e3a\u53c2\u6570\u6216\u8fd4\u56de\u503c"))))}d.isMDXComponent=!0}}]);