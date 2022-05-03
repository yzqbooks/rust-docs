"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[5486],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(n),d=l,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],o={},s="\u94fe\u8868",u={unversionedId:"data-structure/linked_list",id:"data-structure/linked_list",title:"\u94fe\u8868",description:"\u94fe\u8868\u7b80\u4ecb",source:"@site/docs/data-structure/linked_list.md",sourceDirName:"data-structure",slug:"/data-structure/linked_list",permalink:"/rust-docs/docs/data-structure/linked_list",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structure/linked_list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56fe",permalink:"/rust-docs/docs/data-structure/graph"},next:{title:"\u5e38\u7528\u6570\u636e\u7ed3\u6784\u5b9e\u73b0",permalink:"/rust-docs/docs/data-structure/preface"}},c={},p=[{value:"\u94fe\u8868\u7b80\u4ecb",id:"\u94fe\u8868\u7b80\u4ecb",level:2},{value:"\u5b9a\u4e49\u94fe\u8868\u7ed3\u6784",id:"\u5b9a\u4e49\u94fe\u8868\u7ed3\u6784",level:2},{value:"\u5b9e\u73b0\u94fe\u8868\u7684\u65b9\u6cd5",id:"\u5b9e\u73b0\u94fe\u8868\u7684\u65b9\u6cd5",level:2},{value:"\u4ee3\u7801\u6d4b\u8bd5",id:"\u4ee3\u7801\u6d4b\u8bd5",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u94fe\u8868"},"\u94fe\u8868"),(0,i.kt)("h2",{id:"\u94fe\u8868\u7b80\u4ecb"},"\u94fe\u8868\u7b80\u4ecb"),(0,i.kt)("p",null,"\u94fe\u8868\u662f\u4e00\u79cd\u7269\u7406\u5b58\u50a8\u5355\u5143\u4e0a\u975e\u8fde\u7eed\u3001\u975e\u987a\u5e8f\u7684\u5b58\u50a8\u7ed3\u6784\uff0c\u6570\u636e\u5143\u7d20\u7684\u903b\u8f91\u987a\u5e8f\u662f\u901a\u8fc7\u94fe\u8868\u4e2d\u7684\u6307\u9488\u94fe\u63a5\u6b21\u5e8f\u5b9e\u73b0\u7684\u3002\u94fe\u8868\u7531\u4e00\u7cfb\u5217\u7ed3\u70b9\uff08\u94fe\u8868\u4e2d\u6bcf\u4e00\u4e2a\u5143\u7d20\u79f0\u4e3a\u7ed3\u70b9\uff09\u7ec4\u6210\uff0c\u7ed3\u70b9\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u751f\u6210\u3002\u6bcf\u4e2a\u7ed3\u70b9\u5305\u62ec\u4e24\u4e2a\u90e8\u5206\uff1a\u4e00\u4e2a\u662f\u5b58\u50a8\u6570\u636e\u5143\u7d20\u7684\u6570\u636e\u57df\uff0c\u53e6\u4e00\u4e2a\u662f\u5b58\u50a8\u4e0b\u4e00\u4e2a\u7ed3\u70b9\u5730\u5740\u7684\u6307\u9488\u57df\u3002 \u7531\u4e8e\u4e0d\u5fc5\u987b\u6309\u987a\u5e8f\u5b58\u50a8\uff0c\u94fe\u8868\u5728\u7ed9\u5b9a\u4f4d\u7f6e\u63d2\u5165\u7684\u65f6\u5019\u53ef\u4ee5\u8fbe\u5230O(1)\u7684\u590d\u6742\u5ea6\uff0c\u6bd4\u53e6\u4e00\u79cd\u7ebf\u6027\u8868\u987a\u5e8f\u8868\u5feb\u5f97\u591a\uff0c\u4f46\u662f\u5728\u6709\u5e8f\u6570\u636e\u4e2d\u67e5\u627e\u4e00\u4e2a\u8282\u70b9\u6216\u8005\u8bbf\u95ee\u7279\u5b9a\u4e0b\u6807\u7684\u8282\u70b9\u5219\u9700\u8981O(n)\u7684\u65f6\u95f4\uff0c\u800c\u7ebf\u6027\u8868\u76f8\u5e94\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u522b\u662fO(logn)\u548cO(1)\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u94fe\u8868\u7ed3\u6784\u53ef\u4ee5\u514b\u670d\u6570\u7ec4\u9700\u8981\u9884\u5148\u77e5\u9053\u6570\u636e\u5927\u5c0f\u7684\u7f3a\u70b9\uff0c\u94fe\u8868\u7ed3\u6784\u53ef\u4ee5\u5145\u5206\u5229\u7528\u8ba1\u7b97\u673a\u5185\u5b58\u7a7a\u95f4\uff0c\u5b9e\u73b0\u7075\u6d3b\u7684\u5185\u5b58\u52a8\u6001\u7ba1\u7406\u3002\u4f46\u662f\u94fe\u8868\u5931\u53bb\u4e86\u6570\u7ec4\u968f\u673a\u8bfb\u53d6\u7684\u4f18\u70b9\uff0c\u540c\u65f6\u94fe\u8868\u7531\u4e8e\u589e\u52a0\u4e86\u7ed3\u70b9\u7684\u6307\u9488\u57df\uff0c\u7a7a\u95f4\u5f00\u9500\u6bd4\u8f83\u5927\u3002\u94fe\u8868\u6700\u660e\u663e\u7684\u597d\u5904\u5c31\u662f\uff0c\u5e38\u89c4\u6570\u7ec4\u6392\u5217\u5173\u8054\u9879\u76ee\u7684\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\u4e8e\u8fd9\u4e9b\u6570\u636e\u9879\u76ee\u5728\u5185\u5b58\u6216\u78c1\u76d8\u4e0a\u7684\u987a\u5e8f\uff0c\u6570\u636e\u7684\u5b58\u53d6\u5f80\u5f80\u8981\u5728\u4e0d\u540c\u7684\u6392\u5217\u987a\u5e8f\u4e2d\u8f6c\u6362\u3002\u94fe\u8868\u5141\u8bb8\u63d2\u5165\u548c\u79fb\u9664\u8868\u4e0a\u4efb\u610f\u4f4d\u7f6e\u4e0a\u7684\u8282\u70b9\uff0c\u4f46\u662f\u4e0d\u5141\u8bb8\u968f\u673a\u5b58\u53d6\u3002\u94fe\u8868\u6709\u5f88\u591a\u79cd\u4e0d\u540c\u7684\u7c7b\u578b\uff1a\u5355\u5411\u94fe\u8868\uff0c\u53cc\u5411\u94fe\u8868\u4ee5\u53ca\u5faa\u73af\u94fe\u8868\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u770b\u6211\u4eec\u4e00\u6b65\u6b65\u5b9e\u73b0\u94fe\u8868\uff1a"),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u94fe\u8868\u7ed3\u6784"},"\u5b9a\u4e49\u94fe\u8868\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use List::*;\n\nenum List {\n    // Cons: \u5305\u542b\u4e00\u4e2a\u5143\u7d20\u548c\u4e00\u4e2a\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u6307\u9488\u7684\u5143\u7ec4\u7ed3\u6784\n    Cons(u32, Box<List>),\n    // Nil: \u8868\u793a\u4e00\u4e2a\u94fe\u8868\u8282\u70b9\u7684\u672b\u7aef\n    Nil,\n}\n")),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u94fe\u8868\u7684\u65b9\u6cd5"},"\u5b9e\u73b0\u94fe\u8868\u7684\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'impl List {\n    // \u521b\u5efa\u4e00\u4e2a\u7a7a\u94fe\u8868\n    fn new() -> List {\n        // `Nil` \u662f `List`\u7c7b\u578b\u7684\u3002\u56e0\u4e3a\u524d\u9762\u6211\u4eec\u4f7f\u7528\u4e86 `use List::*;`\n        // \u6240\u4ee5\u4e0d\u9700\u8981 List::Nil \u8fd9\u6837\u4f7f\u7528\n        Nil\n    }\n\n    // \u5728\u524d\u9762\u52a0\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\uff0c\u5e76\u4e14\u94fe\u63a5\u65e7\u7684\u94fe\u8868\u548c\u8fd4\u56de\u65b0\u7684\u94fe\u8868\n    fn prepend(self, elem: u32) -> List {\n        // `Cons` \u4e5f\u662f List \u7c7b\u578b\u7684\n        Cons(elem, Box::new(self))\n    }\n\n    // \u8fd4\u56de\u94fe\u8868\u7684\u957f\u5ea6\n    fn len(&self) -> u32 {\n        // `self` \u7684\u7c7b\u578b\u662f `&List`, `*self` \u7684\u7c7b\u578b\u662f `List`,\n        // \u5339\u914d\u4e00\u4e2a\u7c7b\u578b `T` \u597d\u8fc7\u5339\u914d\u4e00\u4e2a\u5f15\u7528 `&T`\n        match *self {\n            // \u56e0\u4e3a`self`\u662f\u501f\u7528\u7684\uff0c\u6240\u4ee5\u4e0d\u80fd\u8f6c\u79fb tail \u7684\u6240\u6709\u6743\n            // \u56e0\u6b64\u4f7f\u7528 tail \u7684\u5f15\u7528\n            Cons(_, ref tail) => 1 + tail.len(),\n            // \u57fa\u672c\u89c4\u5219\uff1a\u6240\u4ee5\u7a7a\u7684\u94fe\u8868\u957f\u5ea6\u90fd\u662f0\n            Nil => 0\n        }\n    }\n\n    // \u8fd4\u56de\u8fde\u94fe\u8868\u7684\u5b57\u7b26\u4e32\u8868\u8fbe\u5f62\u5f0f\n    fn stringify(&self) -> String {\n        match *self {\n            Cons(head, ref tail) => {\n                // `format!` \u548c `print!` \u5f88\u50cf\n                // \u4f46\u662f\u8fd4\u56de\u4e00\u4e2a\u5806\u4e0a\u7684\u5b57\u7b26\u4e32\u53bb\u66ff\u4ee3\u6253\u5370\u5230\u63a7\u5236\u53f0\n                format!("{}, {}", head, tail.stringify())\n            },\n            Nil => {\n                format!("Nil")\n            },\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"\u4ee3\u7801\u6d4b\u8bd5"},"\u4ee3\u7801\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut list = List::new();\n\n    list = list.prepend(1);\n    list = list.prepend(2);\n    list = list.prepend(3);\n\n    println!("linked list has length: {}", list.len());\n    println!("{}", list.stringify());\n}\n')),(0,i.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,i.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u4ee3\u7801\u5b9e\u73b0\u4e00\u4e2a\u53cc\u5411\u5faa\u73af\u94fe\u8868\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53cc\u5411\u94fe\u8868\u4e5f\u53eb\u53cc\u94fe\u8868\uff0c\u662f\u94fe\u8868\u7684\u4e00\u79cd\uff0c\u5b83\u7684\u6bcf\u4e2a\u6570\u636e\u7ed3\u70b9\u4e2d\u90fd\u6709\u4e24\u4e2a\u6307\u9488\uff0c\u5206\u522b\u6307\u5411\u76f4\u63a5\u540e\u7ee7\u548c\u76f4\u63a5\u524d\u9a71\u3002\u6240\u4ee5\uff0c\u4ece\u53cc\u5411\u94fe\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u7ed3\u70b9\u5f00\u59cb\uff0c\u90fd\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u8bbf\u95ee\u5b83\u7684\u524d\u9a71\u7ed3\u70b9\u548c\u540e\u7ee7\u7ed3\u70b9\u3002\u4e00\u822c\u6211\u4eec\u90fd\u6784\u9020\u53cc\u5411\u5faa\u73af\u94fe\u8868\u3002\n\u5faa\u73af\u94fe\u8868\u662f\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u94fe\u5f0f\u5b58\u8d2e\u7ed3\u6784\u3002\u5b83\u7684\u7279\u70b9\u662f\u8868\u4e2d\u6700\u540e\u4e00\u4e2a\u7ed3\u70b9\u7684\u6307\u9488\u57df\u6307\u5411\u5934\u7ed3\u70b9\uff0c\u6574\u4e2a\u94fe\u8868\u5f62\u6210\u4e00\u4e2a\u73af\u3002")))}d.isMDXComponent=!0}}]);