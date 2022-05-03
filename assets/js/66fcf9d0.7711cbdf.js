"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[279],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),s=a,m=f["".concat(u,".").concat(s)]||f[s]||d[s]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3092:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],p={},u="\u8f93\u5165\u4e0e\u8f93\u51fa",l={unversionedId:"io/preface",id:"io/preface",title:"\u8f93\u5165\u4e0e\u8f93\u51fa",description:'\u8f93\u5165\u4e0e\u8f93\u51fa\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a\u5b9e\u7528\u7a0b\u5e8f\u7684\u6700\u57fa\u672c\u8981\u6c42\uff0c\u6ca1\u6709\u8f93\u5165\u8f93\u51fa\u7684\u7a0b\u5e8f\u662f\u6ca1\u6709\u4ec0\u4e48\u5375\u7528\u7684\u3002\u867d\u7136\u8f93\u5165\u8f93\u51fa\u88ab\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u9119\u79f0\u4e3a\u526f\u4f5c\u7528\uff0c\u4f46\u6b63\u662f\u8fd9\u4e2a\u526f\u4f5c\u7528\u624d\u8d4b\u4e88\u4e86\u7a0b\u5e8f\u5b9e\u7528\u6027\uff0c\u541b\u4e0d\u89c1\u67d0\u8457\u540d\u51fd\u6570\u5f0f\u8bed\u8a00\u4e4b\u7236\u79f0\u4ed6\u4e3b\u5bfc\u8bbe\u8ba1\u7684\u51fd\u6570\u5f0f\u8bed\u8a00"is useless"\u3002\u8fd9\u7ae0\u6211\u4eec\u5c31\u6765\u8c08\u8c08\u8f93\u5165\u8f93\u51fa\u526f\u4f5c\u7528\u3002',source:"@site/docs/io/preface.md",sourceDirName:"io",slug:"/io/preface",permalink:"/rust-docs/docs/io/preface",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/io/preface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"print! \u5b8f",permalink:"/rust-docs/docs/io/output"},next:{title:"\u8fed\u4ee3\u5668",permalink:"/rust-docs/docs/iterator/"}},c={},d=[{value:"\u8bfb\u5199 Trait",id:"\u8bfb\u5199-trait",level:2}],f={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8f93\u5165\u4e0e\u8f93\u51fa"},"\u8f93\u5165\u4e0e\u8f93\u51fa"),(0,i.kt)("p",null,'\u8f93\u5165\u4e0e\u8f93\u51fa\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a\u5b9e\u7528\u7a0b\u5e8f\u7684\u6700\u57fa\u672c\u8981\u6c42\uff0c\u6ca1\u6709\u8f93\u5165\u8f93\u51fa\u7684\u7a0b\u5e8f\u662f\u6ca1\u6709\u4ec0\u4e48\u5375\u7528\u7684\u3002\u867d\u7136\u8f93\u5165\u8f93\u51fa\u88ab\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u9119\u79f0\u4e3a\u526f\u4f5c\u7528\uff0c\u4f46\u6b63\u662f\u8fd9\u4e2a\u526f\u4f5c\u7528\u624d\u8d4b\u4e88\u4e86\u7a0b\u5e8f\u5b9e\u7528\u6027\uff0c\u541b\u4e0d\u89c1\u67d0\u8457\u540d\u51fd\u6570\u5f0f\u8bed\u8a00\u4e4b\u7236\u79f0\u4ed6\u4e3b\u5bfc\u8bbe\u8ba1\u7684\u51fd\u6570\u5f0f\u8bed\u8a00"',(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iSmkqocn0oQ"},"is useless"),'"\u3002\u8fd9\u7ae0\u6211\u4eec\u5c31\u6765\u8c08\u8c08\u8f93\u5165\u8f93\u51fa\u526f\u4f5c\u7528\u3002'),(0,i.kt)("h2",{id:"\u8bfb\u5199-trait"},"\u8bfb\u5199 Trait"),(0,i.kt)("p",null,"\u8f93\u5165\u6700\u57fa\u672c\u7684\u529f\u80fd\u662f\u8bfb(Read)\uff0c\u8f93\u51fa\u6700\u57fa\u672c\u7684\u529f\u80fd\u662f\u5199(Write)\u3002\u6807\u51c6\u5e93\u91cc\u9762\u628a\u600e\u4e48\u8bfb\u548c\u600e\u4e48\u5199\u62bd\u8c61\u51fa\u6765\u5f52\u5230\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Read")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Write")," \u4e24\u4e2a\u63a5\u53e3\u91cc\u9762\uff0c\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Read")," \u63a5\u53e3\u7684\u53eb reader\uff0c\u800c\u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Write")," \u7684\u53eb writer\u3002Rust\u91cc\u9762\u7684 Trait \u6bd4\u5176\u5b83\u8bed\u8a00\u91cc\u9762\u7684\u63a5\u53e3\u66f4\u597d\u7684\u4e00\u4e2a\u5730\u65b9\u662f Trait \u53ef\u4ee5\u5e26\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u6bd4\u5982\u7528\u6237\u5b9a\u4e49\u7684 reader \u53ea\u9700\u8981\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," \u4e00\u4e2a\u65b9\u6cd5\u5c31\u53ef\u4ee5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Read")," trait \u91cc\u9762\u7684\u4efb\u610f\u5176\u5b83\u65b9\u6cd5\uff0c\u800c writer \u4e5f\u53ea\u9700\u8981\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"flush")," \u4e24\u4e2a\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"Read \u548c Write \u8fd9\u4e24\u4e2a Trait \u90fd\u6709\u5b9a\u4e49\u4e86\u597d\u591a\u65b9\u6cd5\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u6807\u51c6\u5e93 API \u6587\u6863\u4e2d\u7684",(0,i.kt)("a",{parentName:"p",href:"http://doc.rust-lang.org/stable/std/io/trait.Read.html"},"Read")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"http://doc.rust-lang.org/stable/std/io/trait.Write.html"},"Write")),(0,i.kt)("p",null,"Read \u7531\u4e8e\u6bcf\u8c03\u7528\u4e00\u6b21 ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," \u65b9\u6cd5\u90fd\u4f1a\u8c03\u7528\u4e00\u6b21\u7cfb\u7edfAPI\u4e0e\u5185\u6838\u4ea4\u4e92\uff0c\u6548\u7387\u6bd4\u8f83\u4f4e\uff0c\u5982\u679c\u7ed9 reader \u589e\u52a0\u4e00\u4e2a buffer\uff0c\u5728\u8c03\u7528\u65f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," \u65b9\u6cd5\u65f6\u591a\u8bfb\u4e00\u4e9b\u6570\u636e\u653e\u5728 buffer \u91cc\u9762\uff0c\u4e0b\u6b21\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," \u65b9\u6cd5\u65f6\u5c31\u6709\u53ef\u80fd\u53ea\u9700\u8981\u4ece buffer \u91cc\u9762\u53d6\u6570\u636e\u800c\u4e0d\u7528\u8c03\u7528\u7cfb\u7edfAPI\u4e86\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u7cfb\u7edf\u8c03\u7528\u6b21\u6570\u63d0\u9ad8\u4e86\u8bfb\u53d6\u6548\u7387\uff0c\u8fd9\u5c31\u662f\u6240\u8c13\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"BufRead")," Trait\u3002\u4e00\u4e2a\u666e\u901a\u7684 reader \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"io::BufReader::new(reader)")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"io::BufReader::with_capacity(bufSize, reader)")," \u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a BufReader \u4e86\uff0c\u663e\u7136\u8fd9\u4e24\u4e2a\u521b\u5efa BufReader \u7684\u51fd\u6570\u4e00\u4e2a\u662f\u4f7f\u7528\u9ed8\u8ba4\u5927\u5c0f\u7684 buffer \u4e00\u4e2a\u53ef\u4ee5\u6307\u5b9a buffer \u5927\u5c0f\u3002BufReader \u6bd4\u8f83\u5e38\u7528\u7684\u4e24\u4e2a\u65b9\u6cd5\u662f\u6309\u884c\u8bfb\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"read_line(&mut self, buf: &mut String) -> Result<usize>")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"lines(&mut self) -> Lines<Self>"),"\uff0c\u4ece\u51fd\u6570\u7b7e\u540d\u4e0a\u5c31\u53ef\u4ee5\u5927\u6982\u731c\u51fa\u51fd\u6570\u7684\u7528\u6cd5\u6240\u4ee5\u5c31\u4e0d\u5570\u55e6\u4e86\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u540e\u8005\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u8fed\u4ee3\u5668\u3002\u8be6\u7ec6\u8bf4\u660e\u76f4\u63a5\u770b API \u6587\u6863\u4e2d\u7684",(0,i.kt)("a",{parentName:"p",href:"http://doc.rust-lang.org/stable/std/io/trait.BufRead.html"},"BufRead")),(0,i.kt)("p",null,"\u540c\u6837\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"BufWriter")," \u53ea\u4e0d\u8fc7\u7531\u4e8e\u5176\u9664\u4e86\u5e95\u5c42\u52a0\u4e86 buffer \u4e4b\u5916\u5e76\u6ca1\u6709\u589e\u52a0\u65b0\u7684\u5199\u65b9\u6cd5\uff0c\u6240\u4ee5\u5e76\u6ca1\u6709\u4e13\u95e8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"BufWrite")," Trait\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"io::BufWriter::new(writer)")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"io::BufWriter::with_capacity(bufSize, writer)")," \u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"BufWriter"),"\u3002"),(0,i.kt)("p",null,"\u8f93\u5165\u4e0e\u8f93\u51fa\u63a5\u53e3\u6709\u4e86\uff0c\u6211\u4eec\u63a5\u4e0b\u6765\u770b\u770b\u5b9e\u9645\u5e94\u7528\u4e2d\u6700\u5e38\u7528\u7684\u4e24\u7c7b reader \u548c writer\uff1a\u6807\u51c6\u8f93\u5165/\u8f93\u51fa\uff0c\u6587\u4ef6\u8f93\u5165/\u8f93\u51fa"))}s.isMDXComponent=!0}}]);