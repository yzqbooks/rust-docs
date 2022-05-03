"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[7460],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5516:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},s="\u6807\u51c6\u5e93\u793a\u4f8b",u={unversionedId:"std/overview",id:"std/overview",title:"\u6807\u51c6\u5e93\u793a\u4f8b",description:"\u597d\u4e86\uff0c\u672c\u4e66\u5230\u8fd9\u91cc\u4e5f\u63a5\u8fd1\u5b8c\u7ed3\u4e86\u3002\u76f8\u4fe1\u4f60\u4e00\u5728\u5b66\u4e60\u4e86\u8fd9\u4e48\u591a\u5185\u5bb9\u7684\u4e4b\u540e\uff0c\u4e00\u5b9a\u8dc3\u8dc3\u6b32\u8bd5\u4e86\u5427\uff1f",source:"@site/docs/std/overview.md",sourceDirName:"std",slug:"/std/overview",permalink:"/rust-docs/docs/std/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/std/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u6a21\u5757:W\u732b\u7684\u56de\u97f3",permalink:"/rust-docs/docs/std/net"},next:{title:"\u7cfb\u7edf\u547d\u4ee4:\u8c03\u7528grep",permalink:"/rust-docs/docs/std/process"}},l={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6807\u51c6\u5e93\u793a\u4f8b"},"\u6807\u51c6\u5e93\u793a\u4f8b"),(0,a.kt)("p",null,"\u597d\u4e86\uff0c\u672c\u4e66\u5230\u8fd9\u91cc\u4e5f\u63a5\u8fd1\u5b8c\u7ed3\u4e86\u3002\u76f8\u4fe1\u4f60\u4e00\u5728\u5b66\u4e60\u4e86\u8fd9\u4e48\u591a\u5185\u5bb9\u7684\u4e4b\u540e\uff0c\u4e00\u5b9a\u8dc3\u8dc3\u6b32\u8bd5\u4e86\u5427\uff1f\n\u4e0b\u9762\uff0c\u6211\u4eec\u5c06\u4ee5\u4ee3\u7801\u4e3a\u4e3b\uff0c\u8bb2\u89e3\u51e0\u4e2a\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"std"),"\u5e93\uff0c\u5373\u6807\u51c6\u5e93\u6765\u505a\u7684\u4f8b\u5b50\u3002\u5e0c\u671b\u5927\u5bb6\u80fd\u4ece\u4e2d\u5b66\u5230\u4e00\u70b9\u5199\u6cd5\uff0c\u5e76\u5f00\u59cb\u81ea\u5df1\u7684Rust\u4e4b\u65c5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\uff1a \u7531\u4e8e\u7b14\u8005\u7684\u7535\u8111\u662fopenSUSE Linux\u7684\uff0c\u6240\u4ee5\u672c\u7ae0\u6240\u6709\u4ee3\u7801\u5747\u53ea\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"openSUSE Leap 42.1 && rustc 1.9.0-nightly (52e0bda64 2016-03-05)")," \u4e0b\u7f16\u8bd1\u901a\u8fc7\uff0c\u5bf9Linux\u9002\u914d\u53ef\u80fd\u4f1a\u66f4\u597d\u4e00\u70b9\uff0c\u5176\u4ed6\u7cfb\u7edf\u7684\u540c\u5b66\u8bf7\u81ea\u884c\u53c2\u7167\u3002")),(0,a.kt)("p",null,"\u53e6\uff1a\u672c\u7ae0\u539f\u672c\u8bbe\u8ba1\u7684\u65f6\u5019\u9644\u52a0\u6709\u65f6\u95f4api\u7684\u5904\u7406\uff0c\u4f46\u662f\u5728\u672c\u7ae0\u5199\u4f5c\u7684\u65f6\u5019Rust\u7684\u5927\u90e8\u5206\u65f6\u95f4API\u8fd8\u5904\u4e8eUnstable\u72b6\u6001\uff0c\u968f\u65f6\u53ef\u80fd\u906d\u5230\u5220\u9664\u6216\u91cd\u5199\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6682\u65f6\u5220\u9664\u4e86\u65f6\u95f4API\u7684\u64cd\u4f5c\u3002\u7b49\u4ee5\u540eRust\u7684API\u7a33\u5b9a\u4e4b\u540e\uff0c\u518d\u6765\u8865\u9f50\u8fd9\u4e00\u8282\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/std/process"},"\u7cfb\u7edf\u547d\u4ee4:\u8c03\u7528grep")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/std/fs-and-path"},"\u76ee\u5f55\u64cd\u4f5c:\u7b80\u5355grep")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/rust-docs/docs/std/net"},"\u7f51\u7edc\u6a21\u5757:W\u56de\u97f3"))))}f.isMDXComponent=!0}}]);