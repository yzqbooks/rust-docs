"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[5226],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return t?l.createElement(d,p(p({ref:n},s),{},{components:t})):l.createElement(d,p({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6741:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var l=t(7462),r=t(3366),a=(t(7294),t(3905)),p=["components"],i={},o="\u590d\u5408\u7c7b\u578b",u={unversionedId:"type/compound-types",id:"type/compound-types",title:"\u590d\u5408\u7c7b\u578b",description:"\u5143\u7ec4(Tuple)",source:"@site/docs/type/compound-types.md",sourceDirName:"type",slug:"/type/compound-types",permalink:"/rust-docs/docs/type/compound-types",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/type/compound-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trait\u5bf9\u8c61 \uff08trait object\uff09",permalink:"/rust-docs/docs/trait/trait-object"},next:{title:"\u64cd\u4f5c\u7b26\u548c\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",permalink:"/rust-docs/docs/type/operator-and-formatting"}},s={},m=[{value:"\u5143\u7ec4(Tuple)",id:"\u5143\u7ec4tuple",level:2},{value:"\u7ed3\u6784\u4f53(struct)",id:"\u7ed3\u6784\u4f53struct",level:2},{value:"\u5177\u540d\u7ed3\u6784\u4f53",id:"\u5177\u540d\u7ed3\u6784\u4f53",level:3},{value:"\u5143\u7ec4\u7c7b\u578b\u7ed3\u6784\u4f53",id:"\u5143\u7ec4\u7c7b\u578b\u7ed3\u6784\u4f53",level:3},{value:"\u7a7a\u7ed3\u6784\u4f53",id:"\u7a7a\u7ed3\u6784\u4f53",level:3},{value:"\u5b9e\u73b0\u7ed3\u6784\u4f53(impl)",id:"\u5b9e\u73b0\u7ed3\u6784\u4f53impl",level:3},{value:"\u5173\u4e8e\u5404\u79cdref\u7684\u8ba8\u8bba",id:"\u5173\u4e8e\u5404\u79cdref\u7684\u8ba8\u8bba",level:3},{value:"\u5b57\u6bb5\u7684 ref \u548c owner",id:"\u5b57\u6bb5\u7684-ref-\u548c-owner",level:4},{value:"impl\u4e2d\u7684\u4e09\u79cdself",id:"impl\u4e2d\u7684\u4e09\u79cdself",level:4},{value:"\u88abmove\u7684self",id:"\u88abmove\u7684self",level:5},{value:"ref \u548c ref mut",id:"ref-\u548c-ref-mut",level:6},{value:"\u679a\u4e3e\u7c7b\u578b enum",id:"\u679a\u4e3e\u7c7b\u578b-enum",level:2},{value:"\u4f7f\u7528\u679a\u4e3e",id:"\u4f7f\u7528\u679a\u4e3e",level:3}],c={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u590d\u5408\u7c7b\u578b"},"\u590d\u5408\u7c7b\u578b"),(0,a.kt)("h2",{id:"\u5143\u7ec4tuple"},"\u5143\u7ec4(Tuple)"),(0,a.kt)("p",null,"\u5728\u522b\u7684\u8bed\u8a00\u91cc\uff0c\u4f60\u53ef\u80fd\u542c\u8fc7\u5143\u7ec4\u8fd9\u4e2a\u8bcd\uff0c\u5b83\u8868\u793a\u4e00\u4e2a\u5927\u5c0f\u3001\u7c7b\u578b\u56fa\u5b9a\u7684\u6709\u5e8f\u6570\u636e\u7ec4\u3002\u5728 Rust \u4e2d\uff0c\u60c5\u51b5\u5e76\u6ca1\u6709\u4ec0\u4e48\u672c\u8d28\u4e0a\u7684\u4e0d\u540c\u3002\u4e0d\u8fc7 Rust \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7b80\u5355\u4fbf\u5229\u7684\u8bed\u6cd5\u6765\u8ba9\u6211\u4eec\u80fd\u66f4\u597d\u7684\u4f7f\u7528\u4ed6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let y = (2, "hello world");\nlet x: (i32, &str) = (3, "world hello");\n\n// \u7136\u540e\u5462\uff0c\u4f60\u80fd\u7528\u5f88\u7b80\u5355\u7684\u65b9\u5f0f\u53bb\u8bbf\u95ee\u4ed6\u4eec\uff1a\n\n// \u7528 let \u8868\u8fbe\u5f0f\nlet (w, z) = y; // w=2, z="hello world"\n\n// \u7528\u4e0b\u6807\n\nlet f = x.0; // f = 3\nlet e = x.1; // e = "world hello"\n')),(0,a.kt)("h2",{id:"\u7ed3\u6784\u4f53struct"},"\u7ed3\u6784\u4f53(struct)"),(0,a.kt)("p",null,"\u5728Rust\u4e2d\uff0c\u7ed3\u6784\u4f53\u662f\u4e00\u4e2a\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"tuple")," \u7c7b\u4f3c \u7684\u6982\u5ff5\u3002\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u5c06\u4e00\u4e9b\u5e38\u7528\u7684\u6570\u636e\u3001\u5c5e\u6027\u805a\u5408\u5728\u4e00\u8d77\uff0c\u5c31\u5f62\u6210\u4e86\u4e00\u4e2a\u7ed3\u6784\u4f53\u3002"),(0,a.kt)("p",null,"\u6240\u4e0d\u540c\u7684\u662f\uff0cRust\u7684\u7ed3\u6784\u4f53\u6709\u4e09\u79cd\u6700\u57fa\u672c\u7684\u5f62\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u5177\u540d\u7ed3\u6784\u4f53"},"\u5177\u540d\u7ed3\u6784\u4f53"),(0,a.kt)("p",null,"\u8fd9\u79cd\u7ed3\u6784\u4f53\u5462\uff0c\u4ed6\u53ef\u4ee5\u5927\u81f4\u770b\u6210\u8fd9\u6837\u7684\u4e00\u4e2a\u58f0\u660e\u5f62\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct A {\n    attr1: i32,\n    atrr2: String,\n}\n")),(0,a.kt)("p",null,"\u5185\u90e8\u6bcf\u4e2a\u6210\u5458\u90fd\u6709\u81ea\u5df1\u7684\u540d\u5b57\u548c\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"\u5143\u7ec4\u7c7b\u578b\u7ed3\u6784\u4f53"},"\u5143\u7ec4\u7c7b\u578b\u7ed3\u6784\u4f53"),(0,a.kt)("p",null,"\u5143\u7ec4\u7c7b\u578b\u7ed3\u6784\u4f53\u4f7f\u7528\u5c0f\u62ec\u53f7\uff0c\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"tuple")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct B(i32, u16, bool);\n")),(0,a.kt)("p",null,"\u5b83\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u4e2a\u6709\u540d\u5b57\u7684\u5143\u7ec4\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u548c\u4e00\u822c\u7684\u5143\u7ec4\u57fa\u672c\u7c7b\u4f3c\u3002"),(0,a.kt)("h3",{id:"\u7a7a\u7ed3\u6784\u4f53"},"\u7a7a\u7ed3\u6784\u4f53"),(0,a.kt)("p",null,"\u7ed3\u6784\u4f53\u5185\u90e8\u4e5f\u53ef\u4ee5\u6ca1\u6709\u4efb\u4f55\u6210\u5458\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct D;\n")),(0,a.kt)("p",null,"\u7a7a\u7ed3\u6784\u4f53\u7684\u5185\u5b58\u5360\u7528\u4e3a0\u3002\u4f46\u662f\u6211\u4eec\u4f9d\u7136\u53ef\u4ee5\u9488\u5bf9\u8fd9\u6837\u7684\u7c7b\u578b\u5b9e\u73b0\u5b83\u7684\u201c\u6210\u5458\u51fd\u6570\u201d\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u5728 1.9 \u7248\u672c\u4e4b\u524d\u7684\u7248\u672c\uff0c\u7a7a\u7ed3\u6784\u4f53\u540e\u9762\u4e0d\u80fd\u52a0\u5927\u62ec\u53f7\u3002\n\u5982\u679c\u8fd9\u4e48\u5199\uff0c\u5219\u4f1a\u5bfc\u81f4\u8fd9\u90e8\u5206\u7684\u8001\u7f16\u8bd1\u5668\u7f16\u8bd1\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct C {\n\n}\n")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u7ed3\u6784\u4f53impl"},"\u5b9e\u73b0\u7ed3\u6784\u4f53(impl)"),(0,a.kt)("p",null,"Rust\u6ca1\u6709\u7ee7\u627f\uff0c\u5b83\u548cGolang\u4e0d\u7ea6\u800c\u540c\u7684\u9009\u62e9\u4e86trait(Golang\u53ebInterface)\u4f5c\u4e3a\u5176\u5b9e\u73b0\u591a\u6001\u7684\u57fa\u7840\u3002\u53ef\u662f\uff0c\u5982\u679c\u6211\u4eec\u8981\u60f3\u5bf9\u4e00\u4e2a\u7ed3\u6784\u4f53\u5199\u4e00\u4e9b\u4e13\u95e8\u7684\u6210\u5458\u51fd\u6570\u90a3\u5e94\u8be5\u600e\u4e48\u5199\u5462\uff1f"),(0,a.kt)("p",null,"\u7b54\uff1a impl"),(0,a.kt)("p",null,"talk is cheap ,\u4e3e\u4e2a\u6817\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'struct Person {\n    name: String,\n}\n\nimpl Person {\n    fn new(n: &str) -> Person {\n        Person {\n            name: n.to_string(),\n        }\n    }\n\n    fn greeting(&self) {\n        println!("{} say hello .", self.name);\n    }\n}\n\nfn main() {\n    let peter = Person::new("Peter");\n    peter.greeting();\n}\n')),(0,a.kt)("p",null,"\u770b\u89c1\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"self"),"\uff0cPython\u7a0b\u5e8f\u5458\u4e0d\u539a\u9053\u7684\u7b11\u4e86\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\uff0c\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"impl"),"\u4e2d\uff0cnew \u88ab Person \u8fd9\u4e2a\u7ed3\u6784\u4f53\u81ea\u8eab\u6240\u8c03\u7528\uff0c\u5176\u7279\u5f81\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," \u7684\u8c03\u7528\uff0cJava\u7a0b\u5e8f\u5458\u7ad9\u51fa\u6765\u4e86\uff1a\u7c7b\u51fd\u6570\uff01 \u800c\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting")," \uff0c\u66f4\u50cf\u662f\u4e00\u4e2a\u6210\u5458\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6069\uff0c\u56de\u7b54\u6b63\u786e\uff0c\u7136\u800c\u4e0d\u52a0\u5206\u3002"),(0,a.kt)("h3",{id:"\u5173\u4e8e\u5404\u79cdref\u7684\u8ba8\u8bba"},"\u5173\u4e8e\u5404\u79cdref\u7684\u8ba8\u8bba"),(0,a.kt)("p",null,"Rust \u5bf9\u4ee3\u7801\u6709\u7740\u4e25\u683c\u7684\u5b89\u5168\u63a7\u5236\uff0c\u56e0\u6b64\u5bf9\u4e00\u4e2a\u53d8\u91cf\u4e5f\u5c31\u6709\u4e86\u6240\u6709\u6743\u548c\u501f\u7528\u7684\u6982\u5ff5\u3002\u6240\u6709\u6743\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u4e00\u4eba\u6301\u6709\uff0c\u53ef\u53d8\u5f15\u7528\u4e5f\u53ea\u80fd\u540c\u65f6\u88ab\u4e00\u4e2a\u5b9e\u4f8b\u6301\u6709\uff0c\u4e0d\u53ef\u53d8\u5f15\u7528\u5219\u53ef\u4ee5\u88ab\u591a\u4e2a\u5b9e\u4f8b\u6301\u6709\u3002\u540c\u65f6\u6240\u6709\u6743\u80fd\u88ab\u8f6c\u79fb\uff0c\u5728Rust\u4e2d\u88ab\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"move")," \u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u662f\u6240\u6709\u6743\u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u5728\u6574\u4e2a\u8f6f\u4ef6\u7684\u8fd0\u884c\u5468\u671f\u5185\uff0c\u6240\u6709\u6743\u7684\u8f6c\u6362\u662f\u4e00\u4ef6\u6781\u5176\u607c\u4eba\u548c\u70e6\u7410\u7684\u4e8b\u60c5\uff0c\u5c24\u5176\u5bf9\u90a3\u4e9b\u521d\u5b66 Rust \u7684\u540c\u5b66\u6765\u8bf4\u3002\u540c\u6837\u7684\uff0cRust \u7684\u7ed3\u6784\u4f53\u4f5c\u4e3a\u5176\u7c7b\u578b\u7cfb\u7edf\u7684\u57fa\u77f3\uff0c\u4e5f\u6709\u7740\u6bd4\u8f83\u4e25\u683c\u7684\u6240\u6709\u6743\u63a7\u5236\u9650\u5236\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5173\u4e8e\u7ed3\u6784\u4f53\u7684\u6240\u6709\u6743\uff0c\u6709\u4e24\u79cd\u4f60\u9700\u8981\u8003\u8651\u7684\u60c5\u51b5\u3002"),(0,a.kt)("h4",{id:"\u5b57\u6bb5\u7684-ref-\u548c-owner"},"\u5b57\u6bb5\u7684 ref \u548c owner"),(0,a.kt)("p",null,"\u5728\u4ee5\u4e0a\u7684\u7ed3\u6784\u4f53\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e0d\u5c11\u7ed3\u6784\u4f53\uff0c\u4f46\u662f\u5982\u4f60\u6240\u89c1\uff0c\u7ed3\u6784\u4f53\u7684\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u662f\u5b8c\u6574\u7684\u5c5e\u4e8e\u81ea\u5df1\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u7684 owner \u90fd\u662f\u8fd9\u4e2a\u7ed3\u6784\u4f53\u3002\u6bcf\u4e2a\u5b57\u6bb5\u7684\u751f\u547d\u5468\u671f\u6700\u7ec8\u90fd\u4e0d\u4f1a\u8d85\u8fc7\u8fd9\u4e2a\u7ed3\u6784\u4f53\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u53ea\u662f\u60f3\u8981\u6301\u6709\u4e00\u4e2a(\u53ef\u53d8)\u5f15\u7528\u7684\u503c\u600e\u4e48\u529e\uff1f\n\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct RefBoy {\n    loc: &i32,\n}\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a\u7f16\u8bd1\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<anon>:6:14: 6:19 error: missing lifetime specifier [E0106]\n<anon>:6         loc: & i32,\n")),(0,a.kt)("p",null,"\u8fd9\u79cd\u65f6\u5019\uff0c\u4f60\u5c06\u6301\u6709\u4e00\u4e2a\u503c\u7684\u5f15\u7528\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u7684\u751f\u547d\u5468\u671f\u5728\u8fd9\u4e2a\u7ed3\u6784\u4f53\u4e4b\u5916\uff0c\u6240\u4ee5\u5bf9\u8fd9\u4e2a\u7ed3\u6784\u4f53\u800c\u8a00\uff0c\u5b83\u65e0\u6cd5\u51c6\u786e\u7684\u5224\u65ad\u83b7\u77e5\u8fd9\u4e2a\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\uff0c\u8fd9\u5728 Rust \u7f16\u8bd1\u5668\u800c\u8a00\u662f\u4e0d\u88ab\u63a5\u53d7\u7684\u3002\n\u56e0\u6b64\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u6211\u4eec\u7ed9\u8fd9\u4e2a\u7ed3\u6784\u4f53\u4eba\u4e3a\u7684\u5199\u4e0a\u4e00\u4e2a\u751f\u547d\u5468\u671f\uff0c\u5e76\u663e\u5f0f\u5730\u8868\u660e\u8fd9\u4e2a\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u3002\u5199\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct RefBoy<'a> {\n    loc: &'a i32,\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u89e3\u91ca\u4e00\u4e0b\u8fd9\u4e2a\u7b26\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"<>"),"\uff0c\u5b83\u8868\u793a\u7684\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5c5e\u4e8e")," \u7684\u5173\u7cfb\uff0c\u65e0\u8bba\u5176\u4e2d\u63cf\u8ff0\u7684\u662f ",(0,a.kt)("em",{parentName:"p"},"\u751f\u547d\u5468\u671f")," \u8fd8\u662f ",(0,a.kt)("em",{parentName:"p"},"\u6cdb\u578b")," \u3002\u5373\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"RefBoy in 'a "),"\u3002\u6700\u7ec8\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u4e2a\u7ed3\u8bba\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"RefBoy")," \u8fd9\u4e2a\u7ed3\u6784\u4f53\uff0c\u5176\u751f\u547d\u5468\u671f\u4e00\u5b9a\u4e0d\u80fd\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"'a")," \u66f4\u957f\u624d\u884c\u3002"),(0,a.kt)("p",null,"\u5199\u5230\u8fd9\u91cc\uff0c\u53ef\u80fd\u6709\u7684\u4eba\u8fd8\u662f\u5bf9\u751f\u547d\u5468\u671f\u6bd4\u8f83\u8ff7\u7cca\uff0c\u4e0d\u660e\u767d\u5176\u4e2d\u7f18\u7531\uff0c\u5176\u5b9e\u4f60\u53ea\u9700\u8981\u77e5\u9053\u4e24\u70b9\u5373\u53ef\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ed3\u6784\u4f53\u91cc\u7684\u5f15\u7528\u5b57\u6bb5\u5fc5\u987b\u8981\u6709\u663e\u5f0f\u7684\u751f\u547d\u5468\u671f"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u88ab\u663e\u5f0f\u5199\u51fa\u751f\u547d\u5468\u671f\u7684\u7ed3\u6784\u4f53\uff0c\u5176\u81ea\u8eab\u7684\u751f\u547d\u5468\u671f\u4e00\u5b9a\u5c0f\u4e8e\u7b49\u4e8e\u5176\u663e\u5f0f\u5199\u51fa\u7684\u4efb\u610f\u4e00\u4e2a\u751f\u547d\u5468\u671f")),(0,a.kt)("p",null,"\u5173\u4e8e\u7b2c\u4e8c\u70b9\uff0c\u5176\u5b9e\u751f\u547d\u5468\u671f\u662f\u53ef\u4ee5\u5199\u591a\u4e2a\u7684\uff0c\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},",")," \u5206\u9694\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u751f\u547d\u5468\u671f\u548c\u6cdb\u578b\u90fd\u5199\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," \u91cc\uff0c\u5148\u751f\u547d\u5468\u671f\u540e\u6cdb\u578b\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},","),"\u5206\u9694\u3002"),(0,a.kt)("h4",{id:"impl\u4e2d\u7684\u4e09\u79cdself"},"impl\u4e2d\u7684\u4e09\u79cdself"),(0,a.kt)("p",null,"\u524d\u9762\u6211\u4eec\u77e5\u9053\uff0cRust\u4e2d\uff0c\u901a\u8fc7impl\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u7ed3\u6784\u4f53\u6dfb\u52a0\u6210\u5458\u65b9\u6cd5\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u770b\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"self"),"\u8fd9\u6837\u7684\u5173\u952e\u5b57\uff0c\u540c\u65f6\uff0c\u8fd9\u4e2aself\u4e5f\u6709\u597d\u51e0\u79cd\u9700\u8981\u4f60\u4ed4\u7ec6\u8bb0\u5fc6\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"impl\u4e2d\u7684self,\u5e38\u89c1\u7684\u6709\u4e09\u79cd\u5f62\u5f0f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"self"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"&self"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"&mut self")," \uff0c\u6211\u4eec\u5206\u522b\u6765\u8bf4\u3002"),(0,a.kt)("h5",{id:"\u88abmove\u7684self"},"\u88abmove\u7684self"),(0,a.kt)("p",null,"\u6b63\u5982\u4e0a\u9762\u4f8b\u5b50\u4e2d\u7684impl\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," \u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u51fd\u6570\uff0c\u4f46\u662f\u8fd9\u6837\u7684\u51fd\u6570\u5b9e\u9645\u4e0a\u662f\u6709\u95ee\u9898\u7684\u3002\n\u95ee\u9898\u5728\u4e8eRust\u7684\u6240\u6709\u6743\u8f6c\u79fb\u673a\u5236\u3002"),(0,a.kt)("p",null,'\u6211\u66fe\u7ecf\u89c1\u8fc7\u4e00\u4e2a\u5173\u4e8eRust\u7684\u7b11\u8bdd\uff1a"\u4f60\u8c03\u7528\u4e86\u4e00\u4e0b\u522b\u4eba\uff0c\u7136\u540e\u4f60\u5c31\u4e0d\u5c5e\u4e8e\u4f60\u4e86"\u3002'),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u4ee3\u7801\u5c31\u4f1a\u62a5\u51fa\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'struct A {\n    a: i32,\n}\nimpl A {\n    pub fn show(self) {\n        println!("{}", self.a);\n    }\n}\n\nfn main() {\n    let ast = A{a: 12i32};\n    ast.show();\n    println!("{}", ast.a);\n}\n')),(0,a.kt)("p",null,"\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'13:25 error: use of moved value: `ast.a` [E0382]\n<anon>:13     println!("{}", ast.a);\n')),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a Rust \u672c\u8eab\uff0c\u5728\u4f60\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\u7684\u65f6\u5019\uff0c\u5982\u679c\u4f20\u5165\u7684\u4e0d\u662f\u4e00\u4e2a\u5f15\u7528\uff0c\u90a3\u4e48\u65e0\u7591\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c06\u88ab\u8fd9\u4e2a\u51fd\u6570\u5403\u6389\uff0c\u5373\u5176 owner \u5c06\u88ab move \u5230\u8fd9\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u4e0a\u3002\u540c\u7406\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," \uff0c\u5982\u679c\u4f60\u5199\u7684\u4e0d\u662f\u4e00\u4e2a\u5f15\u7528\u7684\u8bdd\uff0c\u4e5f\u662f\u4f1a\u88ab\u9ed8\u8ba4\u7684 move \u6389\u54df\uff01"),(0,a.kt)("p",null,"\u90a3\u4e48\u5982\u4f55\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\u5462\uff1f\u7b54\u6848\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Clone")," \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone)]\nstruct A {\n    a: i32,\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e48\u5199\u7684\u8bdd\uff0c\u4f1a\u4f7f\u7f16\u8bd1\u901a\u8fc7\u3002\u4f46\u662f\u8fd9\u4e48\u5199\u5b9e\u9645\u4e0a\u4e5f\u662f\u6709\u5176\u7f3a\u9677\u7684\u3002\u5176\u7f3a\u9677\u5c31\u662f\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"Clone")," \uff0c\u90fd\u4f1a\u5e26\u6765\u4e00\u5b9a\u7684\u8fd0\u884c\u65f6\u5f00\u9500\uff01\u4e8b\u5b9e\u4e0a\uff0c\u88abmove\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," \u5176\u5b9e\u662f\u76f8\u5bf9\u5c11\u7528\u7684\u4e00\u79cd\u60c5\u51b5\uff0c\u66f4\u591a\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ref mut")," \u3002"),(0,a.kt)("h6",{id:"ref-\u548c-ref-mut"},"ref \u548c ref mut"),(0,a.kt)("p",null,"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mut ref")," \u7684\u5199\u6cd5\u548c\u88ab move \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," \u5199\u6cd5\u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7\u591a\u4e86\u4e00\u4e2a\u5f15\u7528\u4fee\u9970\u7b26\u53f7\uff0c\u4e0a\u9762\u6709\u4f8b\u5b50\uff0c\u4e0d\u591a\u8bf4\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff0c\u4f60\u4e0d\u80fd\u5728\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"&self")," \u7684\u65b9\u6cd5\u91cc\u8c03\u7528\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"&mut ref")," \uff0c\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u4e0d\u884c\uff01"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u53cd\u8fc7\u6765\u662f\u53ef\u4ee5\u7684\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone)]\nstruct A {\n    a: i32,\n}\nimpl A {\n    pub fn show(&self) {\n        println!("{}", self.a);\n        // compile error: cannot borrow immutable borrowed content `*self` as mutable\n        // self.add_one();\n    }\n    pub fn add_two(&mut self) {\n        self.add_one();\n        self.add_one();\n        self.show();\n    }\n    pub fn add_one(&mut self) {\n        self.a += 1;\n    }\n}\n\nfn main() {\n    let mut ast = A{a: 12i32};\n    ast.show();\n    ast.add_two();\n}\n')),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e00\u65e6\u4f60\u7684\u7ed3\u6784\u4f53\u6301\u6709\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528\uff0c\u4f60\uff0c\u53ea\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"&mut self")," \u7684\u5b9e\u73b0\u91cc\u53bb\u6539\u53d8\u4ed6\uff01"),(0,a.kt)("p",null,"Rust\u5141\u8bb8\u6211\u4eec\u7075\u6d3b\u7684\u5bf9\u4e00\u4e2a struct \u8fdb\u884c\u4f60\u60f3\u8981\u7684\u5b9e\u73b0\uff0c\u5728\u7f16\u7a0b\u7684\u81ea\u7531\u5ea6\u4e0a\u65e0\u7591\u6709\u4e86\u5de8\u5927\u7684\u63d0\u9ad8\u3002"),(0,a.kt)("p",null,"\u81f3\u4e8e\u66f4\u9ad8\u7ea7\u7684\u5173\u4e8e trait \u548c\u6cdb\u578b\u7684\u7528\u6cd5\uff0c\u6211\u4eec\u5c06\u5728\u4ee5\u540e\u7684\u7ae0\u8282\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,a.kt)("h2",{id:"\u679a\u4e3e\u7c7b\u578b-enum"},"\u679a\u4e3e\u7c7b\u578b enum"),(0,a.kt)("p",null,"Rust\u7684\u679a\u4e3e(",(0,a.kt)("inlineCode",{parentName:"p"},"enum"),")\u7c7b\u578b\uff0c\u8ddfC\u8bed\u8a00\u7684\u679a\u4e3e\u6709\u70b9\u63a5\u8fd1\uff0c\u7136\u800c\u66f4\u5f3a\u5927\uff0c\u4e8b\u5b9e\u4e0a\u5b83\u662f\u4e00\u79cd\u4ee3\u6570\u6570\u636e\u7c7b\u578b(Algebraic Data Type)\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u8fd9\u662f\u4e00\u4e2a\u4ee3\u8868\u4e1c\u5357\u897f\u5317\u56db\u4e2a\u65b9\u5411\u7684\u679a\u4e3e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"enum Direction {\n    West,\n    North,\n    South,\n    East,\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0crust \u7684\u679a\u4e3e\u80fd\u505a\u5230\u7684\uff0c\u6bd4 C \u8bed\u8a00\u7684\u66f4\u591a\u3002\n\u6bd4\u5982\uff0c\u679a\u4e3e\u91cc\u9762\u5c45\u7136\u80fd\u5305\u542b\u4e00\u4e9b\u4f60\u9700\u8981\u7684\uff0c\u7279\u5b9a\u7684\u6570\u636e\u4fe1\u606f\uff01\n\u8fd9\u662f\u5e38\u89c4\u7684\u679a\u4e3e\u6240\u65e0\u6cd5\u505a\u5230\u7684\uff0c\u66f4\u50cf\u679a\u4e3e\u7c7b\uff0c\u4e0d\u662f\u4e48\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"enum SpecialPoint {\n    Point(i32, i32),\n    Special(String),\n}\n")),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u7ed9\u91cc\u9762\u7684\u5b57\u6bb5\u547d\u540d\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"enum SpecialPoint {\n    Point {\n        x: i32,\n        y: i32,\n    },\n    Special(String),\n}\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u679a\u4e3e"},"\u4f7f\u7528\u679a\u4e3e"),(0,a.kt)("p",null,"\u548cstruct\u7684\u6210\u5458\u8bbf\u95ee\u7b26\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},".")," \u4e0d\u540c\u7684\u662f\uff0c\u679a\u4e3e\u7c7b\u578b\u8981\u60f3\u8bbf\u95ee\u5176\u6210\u5458\uff0c\u51e0\u4e4e\u65e0\u4e00\u4f8b\u5916\u7684\u8981\u7528\u5230\u6a21\u5f0f\u5339\u914d\u3002\u5e76\u4e14\uff0c \u4f60\u53ef\u4ee5\u5199\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Direction::West"),"\uff0c\u4f46\u662f\u4f60\u73b0\u5728\u8fd8\u4e0d\u80fd\u5199\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Direction.West"),", \u9664\u975e\u4f60\u663e\u5f0f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u5b83 \u3002\u867d\u7136\u7f16\u8bd1\u5668\u8db3\u591f\u806a\u660e\u80fd\u53d1\u73b0\u4f60\u8fd9\u4e2a\u7c97\u5fc3\u7684\u6bdb\u75c5\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u6a21\u5f0f\u5339\u914d\uff0c\u6211\u4e0d\u4f1a\u8bf4\u592a\u591a\uff0c\u8fd8\u662f\u4e3e\u4e2a\u6817\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'enum SpecialPoint {\n    Point(i32, i32),\n    Special(String),\n}\n\nfn main() {\n    let sp = SpecialPoint::Point(0, 0);\n    match sp {\n        SpecialPoint::Point(x, y) => {\n            println!("I\'am SpecialPoint(x={}, y={})", x, y);\n        }\n        SpecialPoint::Special(why) => {\n            println!("I\'am Special because I am {}", why);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u5450\u5450\u5450\uff0c\u8fd9\u5c31\u662f\u6a21\u5f0f\u5339\u914d\u53d6\u503c\u5566\u3002\n\u5f53\u7136\u4e86\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," \u5176\u5b9e\u4e5f\u662f\u53ef\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," \u7684\uff0c\u4e00\u822c\u4eba\u6211\u4e0d\u544a\u8bc9\u4ed6\uff01"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5e26\u6709\u547d\u540d\u5b57\u6bb5\u7684\u679a\u4e3e\uff0c\u6a21\u5f0f\u5339\u914d\u65f6\u53ef\u6307\u5b9a\u5b57\u6bb5\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"match sp {\n    SpecialPoint::Point { x: x, y: y } => {\n        // ...\n    },\n    SpecialPoint::Special(why) => {}\n}\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5e26\u6709\u5b57\u6bb5\u540d\u7684\u679a\u4e3e\u7c7b\u578b\uff0c\u5176\u6a21\u5f0f\u5339\u914d\u8bed\u6cd5\u4e0e\u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," \u65f6\u4e00\u81f4\u3002\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct Point {\n    x: i32,\n    y: i32,\n}\n\nlet point = Point { x: 1, y: 2 };\n\nlet Point { x: x, y: y } = point;\n// \u6216\nlet Point { x, y } = point;\n// \u6216\nlet Point { x: x, .. } = point;\n")),(0,a.kt)("p",null,"\u6a21\u5f0f\u5339\u914d\u7684\u8bed\u6cd5\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"if let")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u662f\u4e00\u81f4\u7684\uff0c\u6240\u4ee5\u5728\u540e\u9762\u7684\u5185\u5bb9\u4e2d\u770b\u5230\u7684\u4e5f\u652f\u6301\u540c\u6837\u7684\u8bed\u6cd5\u3002"))}k.isMDXComponent=!0}}]);