"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[7297],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=i(n),m=r,d=s["".concat(u,".").concat(m)]||s[m]||k[m]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],p={},u="\u6808",i={unversionedId:"data-structure/stack",id:"data-structure/stack",title:"\u6808",description:"\u6808\u7b80\u4ecb",source:"@site/docs/data-structure/stack.md",sourceDirName:"data-structure",slug:"/data-structure/stack",permalink:"/rust-docs/docs/data-structure/stack",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structure/stack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u961f\u5217",permalink:"/rust-docs/docs/data-structure/queue"},next:{title:"Atom",permalink:"/rust-docs/docs/editors/atom"}},c={},k=[{value:"\u6808\u7b80\u4ecb",id:"\u6808\u7b80\u4ecb",level:2},{value:"\u6808\u7684\u5b9e\u73b0\u6b65\u9aa4\uff1a",id:"\u6808\u7684\u5b9e\u73b0\u6b65\u9aa4",level:2},{value:"\u5b9a\u4e49\u4e00\u4e2a\u6808\u7ed3\u6784<code>Stack</code>",id:"\u5b9a\u4e49\u4e00\u4e2a\u6808\u7ed3\u6784stack",level:2},{value:"\u5b9a\u4e49\u7ec4\u6210\u6808\u7ed3\u6784\u7684\u6808\u70b9<code>StackNode</code>",id:"\u5b9a\u4e49\u7ec4\u6210\u6808\u7ed3\u6784\u7684\u6808\u70b9stacknode",level:2},{value:"\u5b9e\u73b0 <code>new( ) push( ) pop( )</code>",id:"\u5b9e\u73b0-new--push--pop-",level:2},{value:"\u5b8c\u6574\u4ee3\u7801\uff08\u5305\u542b\u7b80\u5355\u7684\u6d4b\u8bd5\uff09",id:"\u5b8c\u6574\u4ee3\u7801\u5305\u542b\u7b80\u5355\u7684\u6d4b\u8bd5",level:2}],s={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6808"},"\u6808"),(0,o.kt)("h2",{id:"\u6808\u7b80\u4ecb"},"\u6808\u7b80\u4ecb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6808\u4f5c\u4e3a\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u662f\u4e00\u79cd\u53ea\u80fd\u5728",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u7aef"),"\u8fdb\u884c",(0,o.kt)("strong",{parentName:"p"},"\u63d2\u5165"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u5220\u9664"),"\u64cd\u4f5c\u7684\u7279\u6b8a\u7ebf\u6027\u8868\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b83\u6309\u7167",(0,o.kt)("strong",{parentName:"p"},"\u5148\u8fdb\u540e\u51fa"),"\u7684\u539f\u5219\u5b58\u50a8\u6570\u636e\uff0c\u5148\u8fdb\u5165\u7684\u6570\u636e\u88ab\u538b\u5165\u6808\u5e95\uff0c\u6700\u540e\u7684\u6570\u636e\u5728\u6808\u9876\uff0c\u9700\u8981\u8bfb\u6570\u636e\u7684\u65f6\u5019\u4ece\u6808\u9876\u5f00\u59cb\u5f39\u51fa\u6570\u636e\uff08\u6700\u540e\u4e00\u4e2a\u6570\u636e\u88ab\u7b2c\u4e00\u4e2a\u8bfb\u51fa\u6765\uff09\u3002"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6808\uff08stack\uff09\u53c8\u540d\u5806\u6808\uff0c\u5b83\u662f\u4e00\u79cd\u8fd0\u7b97\u53d7\u9650\u7684\u7ebf\u6027\u8868\u3002\u5176\u9650\u5236\u662f\u4ec5\u5141\u8bb8\u5728\u8868\u7684\u4e00\u7aef\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u8fd0\u7b97\u3002\u8fd9\u4e00\u7aef\u88ab\u79f0\u4e3a\u6808\u9876\uff0c\u76f8\u5bf9\u5730\uff0c\u628a\u53e6\u4e00\u7aef\u79f0\u4e3a\u6808\u5e95\u3002\u5411\u4e00\u4e2a\u6808\u63d2\u5165\u65b0\u5143\u7d20\u53c8\u79f0\u4f5c\u8fdb\u6808\u3001\u5165\u6808\u6216\u538b\u6808\uff0c\u5b83\u662f\u628a\u65b0\u5143\u7d20\u653e\u5230\u6808\u9876\u5143\u7d20\u7684\u4e0a\u9762\uff0c\u4f7f\u4e4b\u6210\u4e3a\u65b0\u7684\u6808\u9876\u5143\u7d20\uff1b\u4ece\u4e00\u4e2a\u6808\u5220\u9664\u5143\u7d20\u53c8\u79f0\u4f5c\u51fa\u6808\u6216\u9000\u6808\uff0c\u5b83\u662f\u628a\u6808\u9876\u5143\u7d20\u5220\u9664\u6389\uff0c\u4f7f\u5176\u76f8\u90bb\u7684\u5143\u7d20\u6210\u4e3a\u65b0\u7684\u6808\u9876\u5143\u7d20\u3002")),(0,o.kt)("h2",{id:"\u6808\u7684\u5b9e\u73b0\u6b65\u9aa4"},"\u6808\u7684\u5b9e\u73b0\u6b65\u9aa4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a\u6808\u7ed3\u6784",(0,o.kt)("inlineCode",{parentName:"li"},"Stack")),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u7ec4\u6210\u6808\u7ed3\u6784\u7684\u6808\u70b9",(0,o.kt)("inlineCode",{parentName:"li"},"StackNode")),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u6808\u7684\u521d\u59cb\u5316\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"li"},"new( )")),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u8fdb\u6808\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"li"},"push( )")),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u9000\u6808\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"li"},"pop( )"))),(0,o.kt)("h2",{id:"\u5b9a\u4e49\u4e00\u4e2a\u6808\u7ed3\u6784stack"},"\u5b9a\u4e49\u4e00\u4e2a\u6808\u7ed3\u6784",(0,o.kt)("inlineCode",{parentName:"h2"},"Stack")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\nstruct Stack<T> {\n    top: Option<Box<StackNode<T>>>,\n}\n")),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u4e00\u6b65\u6b65\u6765\u5206\u6790"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u884c\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"#[derive(Debug)]"),"\u662f\u4e3a\u4e86\u8ba9",(0,o.kt)("inlineCode",{parentName:"li"},"Stack"),"\u7ed3\u6784\u4f53\u53ef\u4ee5\u6253\u5370\u8c03\u8bd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u884c\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"Stack"),"\u7ed3\u6784\u4f53\uff0c\u8fd9\u4e2a\u7ed3\u6784\u4f53\u5305\u542b\u4e00\u4e2a\u6cdb\u578b\u53c2\u6570",(0,o.kt)("inlineCode",{parentName:"li"},"T"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u884c\u6bd4\u8f83\u590d\u6742\uff0c\u5728\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"li"},"StackNode"),"\u7684\u65f6\u5019\u4ecb\u7ecd")),(0,o.kt)("h2",{id:"\u5b9a\u4e49\u7ec4\u6210\u6808\u7ed3\u6784\u7684\u6808\u70b9stacknode"},"\u5b9a\u4e49\u7ec4\u6210\u6808\u7ed3\u6784\u7684\u6808\u70b9",(0,o.kt)("inlineCode",{parentName:"h2"},"StackNode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone,Debug)]\nstruct StackNode<T> {\n    val: T,\n    next: Option<Box<StackNode<T>>>,\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u6bb5\u4ee3\u7801\u7684\u7b2c\u4e09\u884c\uff0c \u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"val"),"\u4fdd\u5b58",(0,o.kt)("inlineCode",{parentName:"p"},"StackNode"),"\u7684\u503c\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u73b0\u5728\u6211\u4eec\u91cd\u70b9\u6765\u770b\u770b\u7b2c\u56db\u884c\uff1a\n\u6211\u4eec",(0,o.kt)("strong",{parentName:"p"},"\u4ece\u91cc\u5230\u5916"),"\u62c6\u5206\u6765\u770b\u770b\uff0c\u9996\u5148\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Box<StackNode<T>"),"\uff0c\u8fd9\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Box"),"\u662f Rust \u7528\u6765\u663e\u5f0f\u5206\u914d\u5806\u5185\u5b58\u7684\u7c7b\u578b\uff1a")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"pub struct Box<T> where T: ?Sized(_);"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://doc.rust-lang.org/nightly/std/boxed/struct.Box.html"},"\u8be6\u7ec6\u6587\u6863\u8bf7\u53c2\u8003Rust\u7684\u6807\u51c6\u5e93"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728 Rust \u91cc\u9762\u7528\u5f3a\u5927\u7684\u7c7b\u578b\u7cfb\u7edf\u505a\u4e86\u7edf\u4e00\u7684\u62bd\u8c61\u3002\u5728\u8fd9\u91cc\u76f8\u5f53\u4e8e\u5728\u5806\u7a7a\u95f4\u91cc\u7533\u8bf7\u4e86\u4e00\u5757\u5185\u5b58\u4fdd\u5b58",(0,o.kt)("inlineCode",{parentName:"p"},"StackNode<T>"),"\u3002  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u505a\u4e86\uff1f\u5982\u679c\u4e0d\u7528Box\u5c01\u88c5\u4f1a\u600e\u4e48\u6837\u5462\uff1f"),"  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e0d\u7528 Box \u5c01\u88c5\uff0crustc \u7f16\u8bd1\u5668\u4f1a\u62a5\u9519\uff0c\u5728 Rust \u91cc\u9762\uff0crustc \u9ed8\u8ba4\u4f7f\u7528\u6808\u7a7a\u95f4\uff0c\u4f46\u662f\u8fd9\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"StackNode"),"\u5b9a\u4e49\u7684\u65f6\u5019\u4f7f\u7528\u4e86\u9012\u5f52\u7684\u6570\u636e\u7ed3\u6784\uff0cnext \u5c5e\u6027\u7684\u7c7b\u578b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"StackNode<T>"),"\uff0c\u800c\u8fd9\u4e2a\u7c7b\u578b\u662f\u65e0\u6cd5\u786e\u5b9a\u5927\u5c0f\u7684\uff0c\u6240\u6709\u8fd9\u79cd\u65e0\u6cd5\u786e\u5b9a\u5927\u5c0f\u7684\u7c7b\u578b\uff0c\u90fd\u4e0d\u80fd\u4fdd\u5b58\u5728\u6808\u7a7a\u95f4\u3002\u6240\u4ee5\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Box"),"\u6765\u5c01\u88c5\u3002\u8fd9\u6837\u7684\u8bdd",(0,o.kt)("inlineCode",{parentName:"p"},"next"),"\u7684\u7c7b\u578b\u5c31\u662f\u4e00\u4e2a\u6307\u5411\u67d0\u4e00\u5757\u5806\u7a7a\u95f4\u7684\u6307\u9488\uff0c\u800c\u6307\u9488\u662f\u53ef\u4ee5\u786e\u5b9a\u5927\u5c0f\u7684\uff0c\u56e0\u6b64\u80fd\u591f\u4fdd\u5b58\u5728\u6808\u7a7a\u95f4\u3002  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"strong"},"Option"),"\u6765\u5c01\u88c5\u5462\uff1f"),"  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Option"),"\u662f Rust \u91cc\u9762\u7684\u4e00\u4e2a\u62bd\u8c61\u7c7b\u578b\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Option<T> {\n    None,\n    Some(T),\n}\n")),(0,o.kt)("p",null,"Option \u91cc\u9762\u5305\u62ec\u5143\u7d20\uff0cNone \u548c Some(T) \uff0c\u8fd9\u6837\u5c31\u5f88\u8f7b\u677e\u7684\u63cf\u8ff0\u4e86 next \u6307\u5411\u6808\u5c3e\u7684\u5143\u7d20\u7684\u65f6\u5019\uff0c\u90fd\u662f\u5728 Option \u7c7b\u578b\u4e0b\uff0c\u65b9\u4fbf\u4e86\u529f\u80fd\u5b9e\u73b0\uff0c\u4e5f\u65b9\u4fbf\u4e86\u9519\u8bef\u5904\u7406\u3002Option \u8fd8\u6709\u5f88\u591a\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u8bfb\u8005\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u51e0\u4e2a\u8fde\u63a5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://doc.rust-lang.org/nightly/std/option/enum.Option.html"},"Option\u6807\u51c6\u5e93\u6587\u6863")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://blog.burntsushi.net/rust-error-handling/"},"Error Handling in Rust")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/rust-by-example/error.html"},"rustbyexample \u7684 Error handling")),(0,o.kt)("h2",{id:"\u5b9e\u73b0-new--push--pop-"},"\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"h2"},"new( ) push( ) pop( )")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u5b9e\u73b0 stack \u7684\u4e3b\u8981\u529f\u80fd\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl<T> Stack<T> {\n    fn new() -> Stack<T> {\n        Stack{ top: None }\n    }\n\n    fn push(&mut self, val: T) {\n        let mut node = StackNode::new(val);\n        let next = self.top.take();\n        node.next = next;\n        self.top = Some(Box::new(node));\n    }\n\n    fn pop(&mut self) -> Option<T> {\n        let val = self.top.take();\n        match val {\n            None => None,\n            Some(mut x) => {\n                self.top = x.next.take();\n                Some(x.val)\n            },\n        }\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"new( )"),"\u6bd4\u8f83\u7b80\u5355\uff0cStack \u521d\u59cb\u5316\u7684\u65f6\u5019\u4e3a\u7a7a\uff0c\u6808\u9876\u5143\u7d20 ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," \u5c31\u6ca1\u6709\u4efb\u4f55\u503c\uff0c\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"push( )"),"\u7684\u4e3b\u8981\u529f\u80fd\u662f\u5f80\u6808\u91cc\u9762\u63a8\u5165\u5143\u7d20\uff0c\u628a\u65b0\u7684 StackNode \u6307\u5411 Stack \u91cc\u9762\u65e7\u7684\u503c\uff0c\u540c\u65f6\u66f4\u65b0 Stack \u6808\u9876\u6307\u5411\u65b0\u8fdb\u6765\u7684\u503c\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6709\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\u662f\u7b2c8\u884c\u4ee3\u7801\u91cc\u9762\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"let next = self.top.take();"),"\uff0c\u4f7f\u7528\u4e86 Option \u7c7b\u578b\u7684 take \u65b9\u6cd5\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"fn take(&mut self) -> Option<T>"),"\n\u5b83\u4f1a\u628a Option \u7c7b\u578b\u7684\u503c\u53d6\u8d70\uff0c\u5e76\u628a\u5b83\u7684\u5143\u7d20\u6539\u4e3a None"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pop( )"),"\u7684\u529f\u80fd\u662f\u53d6\u51fa\u6808\u9876\u7684\u5143\u7d20\uff0c\u5982\u679c\u6808\u9876\u4e3a None \u5219\u8fd4\u56de None\u3002"))),(0,o.kt)("h2",{id:"\u5b8c\u6574\u4ee3\u7801\u5305\u542b\u7b80\u5355\u7684\u6d4b\u8bd5"},"\u5b8c\u6574\u4ee3\u7801\uff08\u5305\u542b\u7b80\u5355\u7684\u6d4b\u8bd5\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug)]\nstruct Stack<T> {\n    top: Option<Box<StackNode<T>>>,\n}\n\n#[derive(Clone,Debug)]\nstruct StackNode<T> {\n    val: T,\n    next: Option<Box<StackNode<T>>>,\n}\n\nimpl <T> StackNode<T> {\n    fn new(val: T) -> StackNode<T> {\n        StackNode { val: val, next: None }\n    }\n}\n\nimpl<T> Stack<T> {\n    fn new() -> Stack<T> {\n        Stack{ top: None }\n    }\n\n    fn push(&mut self, val: T) {\n        let mut node = StackNode::new(val);\n        let next = self.top.take();\n        node.next = next;\n        self.top = Some(Box::new(node));\n    }\n\n    fn pop(&mut self) -> Option<T> {\n        let val = self.top.take();\n        match val {\n            None => None,\n            Some(mut x) => {\n                self.top = x.next.take();\n                Some(x.val)\n            },\n        }\n    }\n}\n\nfn main() {\n    #[derive(PartialEq,Eq,Debug)]\n    struct TestStruct {\n        a: i32,\n    }\n\n    let a = TestStruct{ a: 5 };\n    let b = TestStruct{ a: 9 };\n\n    let mut s = Stack::<&TestStruct>::new();\n    assert_eq!(s.pop(), None);\n\n    s.push(&a);\n    s.push(&b);\n    println!("{:?}", s);\n\n    assert_eq!(s.pop(), Some(&b));\n    assert_eq!(s.pop(), Some(&a));\n    assert_eq!(s.pop(), None);\n}\n')))}m.isMDXComponent=!0}}]);