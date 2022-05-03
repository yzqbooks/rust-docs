"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[9049],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2094:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},p="Deref",c={unversionedId:"intoborrow/deref",id:"intoborrow/deref",title:"Deref",description:"Deref \u662f deref \u64cd\u4f5c\u7b26 ` \u7684 trait\uff0c\u6bd4\u5982 v`\u3002",source:"@site/docs/intoborrow/deref.md",sourceDirName:"intoborrow",slug:"/intoborrow/deref",permalink:"/rust-docs/docs/intoborrow/deref",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intoborrow/deref.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cow",permalink:"/rust-docs/docs/intoborrow/cow"},next:{title:"Into/From \u53ca\u5176\u5728 String \u548c &str \u4e92\u8f6c\u4e0a\u7684\u5e94\u7528",permalink:"/rust-docs/docs/intoborrow/into"}},u={},s=[{value:"\u5f3a\u5236\u9690\u5f0f\u8f6c\u6362\uff08coercion\uff09",id:"\u5f3a\u5236\u9690\u5f0f\u8f6c\u6362coercion",level:2}],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deref"},"Deref"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Deref")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"deref")," \u64cd\u4f5c\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," \u7684 trait\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"*v"),"\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u7406\u89e3\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*v")," \u64cd\u4f5c\uff0c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"&v")," \u7684\u53cd\u5411\u64cd\u4f5c\uff0c\u5373\u8bd5\u56fe\u7531\u8d44\u6e90\u7684\u5f15\u7528\u83b7\u53d6\u5230\u8d44\u6e90\u7684\u62f7\u8d1d\uff08\u5982\u679c\u8d44\u6e90\u7c7b\u578b\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy"),"\uff09\uff0c\u6216\u6240\u6709\u6743\uff08\u8d44\u6e90\u7c7b\u578b\u6ca1\u6709\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy"),"\uff09\u3002"),(0,a.kt)("p",null,"Rust \u4e2d\uff0c\u672c\u64cd\u4f5c\u7b26\u884c\u4e3a\u53ef\u4ee5\u91cd\u8f7d\u3002\u8fd9\u4e5f\u662f Rust \u64cd\u4f5c\u7b26\u7684\u57fa\u672c\u7279\u70b9\u3002\u672c\u8eab\u6ca1\u6709\u4ec0\u4e48\u7279\u522b\u7684\u3002"),(0,a.kt)("h2",{id:"\u5f3a\u5236\u9690\u5f0f\u8f6c\u6362coercion"},"\u5f3a\u5236\u9690\u5f0f\u8f6c\u6362\uff08coercion\uff09"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Deref")," \u795e\u5947\u7684\u5730\u65b9\u5e76\u4e0d\u5728\u672c\u8eab ",(0,a.kt)("inlineCode",{parentName:"p"},"\u89e3\u5f15")," \u8fd9\u4e2a\u610f\u4e49\u4e0a\uff0cRust \u7684\u8bbe\u8ba1\u8005\u5728\u5b83\u4e4b\u4e0a\u9644\u52a0\u4e86\u4e00\u4e2a\u7279\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f3a\u5236\u9690\u5f0f\u8f6c\u6362"),"\uff0c\u8fd9\u624d\u662f\u5b83\u795e\u5947\u4e4b\u5904\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u9690\u5f0f\u8f6c\u6362\u7684\u89c4\u5219\u4e3a\uff1a"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u5bf9\u8c61 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"T: Deref<Target=U>"),"\uff0c\u90a3\u4e48\uff0c\u76f8\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u67d0\u4e2a\u667a\u80fd\u6307\u9488\u6216\u5f15\u7528\uff08\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"&foo"),"\uff09\u5728\u5e94\u7528\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u8f6c\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"&U"),"\u3002"),(0,a.kt)("p",null,"\u7c97\u770b\u8fd9\u6761\u89c4\u5219\uff0c\u8c8c\u4f3c\u6709\u70b9\u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"AsRef"),"\uff0c\u800c\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"\u89e3\u5f15")," \u4f3c\u4e4e\u98ce\u9a6c\u725b\u4e0d\u76f8\u53ca\u3002\u5b9e\u9645\u91cc\u9762\u6709\u4e9b\u7384\u5999\u4e4b\u5904\u3002"),(0,a.kt)("p",null,"Rust \u7f16\u8bd1\u5668\u4f1a\u5728\u505a ",(0,a.kt)("inlineCode",{parentName:"p"},"*v")," \u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u5148\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," \u505a\u5f15\u7528\u5f52\u4e00\u5316\u64cd\u4f5c\uff0c\u5373\u8f6c\u6362\u6210\u5185\u90e8\u901a\u7528\u5f15\u7528\u7684\u5f62\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"&v"),"\uff0c\u6574\u4e2a\u8868\u8fbe\u5f0f\u5c31\u53d8\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"*&v"),"\u3002\u8fd9\u91cc\u9762\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u628a\u5176\u5b83\u7c7b\u578b\u7684\u6307\u9488\uff08\u6bd4\u5982\u5728\u5e93\u4e2d\u5b9a\u4e49\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Box"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Rc"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Arc"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Cow")," \u7b49\uff09\uff0c\u8f6c\u6210\u5185\u90e8\u6807\u51c6\u5f62\u5f0f ",(0,a.kt)("inlineCode",{parentName:"li"},"&v"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u628a\u591a\u91cd ",(0,a.kt)("inlineCode",{parentName:"li"},"&")," \uff08\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"&&&&&&&v"),"\uff09\uff0c\u7b80\u5316\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"&v"),"\uff08\u901a\u8fc7\u63d2\u5165\u8db3\u591f\u6570\u91cf\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," \u8fdb\u884c\u89e3\u5f15\uff09\u3002")),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5b83\u5b9e\u9645\u4e0a\u5728\u89e3\u5f15\u7528\u4e4b\u524d\u505a\u4e86\u4e00\u4e2a\u5f15\u7528\u7684\u5f52\u4e00\u5316\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u8f6c\u5462\uff1f \u56e0\u4e3a\u7f16\u8bd1\u5668\u8bbe\u8ba1\u7684\u80fd\u529b\u662f\uff0c\u53ea\u80fd\u591f\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"&v")," \u8fd9\u79cd\u5f15\u7528\u8fdb\u884c\u89e3\u5f15\u7528\u3002\u5176\u5b83\u5f62\u5f0f\u7684\u5b83\u4e0d\u8ba4\u8bc6\uff0c\u6240\u4ee5\u8981\u505a\u5f15\u7528\u5f52\u4e00\u5316\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u5f15\u7528\u8fdb\u884c\u8fc7\u6e21\u4e5f\u662f\u4e3a\u4e86\u80fd\u591f\u9632\u6b62\u4e0d\u5fc5\u8981\u7684\u62f7\u8d1d\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u4e3e\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn foo(s: &str) {\n    // borrow a string for a second\n}\n\n// String implements Deref<Target=str>\nlet owned = "Hello".to_string();\n\n// therefore, this works:\nfoo(&owned);\n')),(0,a.kt)("p",null,"\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," \u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deref<Target=str>"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::rc::Rc;\n\nfn foo(s: &str) {\n    // borrow a string for a second\n}\n\n// String implements Deref<Target=str>\nlet owned = "Hello".to_string();\nlet counted = Rc::new(owned);\n\n// therefore, this works:\nfoo(&counted);\n')),(0,a.kt)("p",null,"\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Rc<T>")," \u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deref<Target=T>"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn foo(s: &[i32]) {\n    // borrow a slice for a second\n}\n\n// Vec<T> implements Deref<Target=[T]>\nlet owned = vec![1, 2, 3];\n\nfoo(&owned);\n")),(0,a.kt)("p",null,"\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<T>")," \u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deref<Target=[T]>"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'struct Foo;\n\nimpl Foo {\n    fn foo(&self) { println!("Foo"); }\n}\n\nlet f = &&Foo;\n\nf.foo();\n(&f).foo();\n(&&f).foo();\n(&&&&&&&&f).foo();\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u90a3\u51e0\u79cd\u51fd\u6570\u7684\u8c03\u7528\uff0c\u6548\u679c\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"coercion")," \u7684\u8bbe\u8ba1\uff0c\u662f Rust \u4e2d\u4ec5\u6709\u7684\u7c7b\u578b\u9690\u5f0f\u8f6c\u6362\uff0c\u8bbe\u8ba1\u5b83\u7684\u76ee\u7684\uff0c\u662f\u4e3a\u4e86\u7b80\u5316\u7a0b\u5e8f\u7684\u4e66\u5199\uff0c\u8ba9\u4ee3\u7801\u4e0d\u81f3\u4e8e\u8fc7\u4e8e\u7e41\u7410\u3002\u628a\u4eba\u4ece\u65e0\u5c3d\u7684\u7c7b\u578b\u7ec6\u8282\u4e2d\u89e3\u8131\u51fa\u6765\uff0c\u8ba9\u4e66\u5199 Rust \u4ee3\u7801\u53d8\u6210\u4e00\u4ef6\u5feb\u4e50\u7684\u4e8b\u60c5\u3002"))}f.isMDXComponent=!0}}]);