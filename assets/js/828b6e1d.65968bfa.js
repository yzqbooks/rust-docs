"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[3364],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),k=a,m=c["".concat(i,".").concat(k)]||c[k]||p[k]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],l={},i="\u6d4b\u8bd5",d={unversionedId:"testing/threearchtest",id:"testing/threearchtest",title:"\u6d4b\u8bd5",description:"\u7a0b\u5e8f\u6d4b\u8bd5\u662f\u4e00\u79cd\u627e\u5230\u7f3a\u9677\u7684\u6709\u6548\u65b9\u5f0f\uff0c\u4f46\u662f\u5b83\u5bf9\u8bc1\u660e\u6ca1\u6709\u7f3a\u9677\u5374\u65e0\u80fd\u4e3a\u529b\u3002",source:"@site/docs/testing/threearchtest.md",sourceDirName:"testing",slug:"/testing/threearchtest",permalink:"/rust-docs/docs/testing/threearchtest",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/testing/threearchtest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6d4b\u8bd5\u4e0e\u8bc4\u6d4b",permalink:"/rust-docs/docs/testing/preface"},next:{title:"10.1 trait\u5173\u952e\u5b57",permalink:"/rust-docs/docs/trait/"}},u={},p=[{value:"\u51fd\u6570\u7ea7\u6d4b\u8bd5",id:"\u51fd\u6570\u7ea7\u6d4b\u8bd5",level:2},{value:"<code>#[test]</code> \u6807\u8bc6",id:"test-\u6807\u8bc6",level:3},{value:"<code>#[should_panic]</code> \u6807\u8bc6",id:"should_panic-\u6807\u8bc6",level:3},{value:"<code>#[ignore]</code> \u6807\u8bc6",id:"ignore-\u6807\u8bc6",level:3},{value:"\u6a21\u5757\u7ea7\u6d4b\u8bd5",id:"\u6a21\u5757\u7ea7\u6d4b\u8bd5",level:2},{value:"\u5de5\u7a0b\u7ea7\u6d4b\u8bd5",id:"\u5de5\u7a0b\u7ea7\u6d4b\u8bd5",level:2},{value:"\u6587\u6863\u7ea7\u6d4b\u8bd5",id:"\u6587\u6863\u7ea7\u6d4b\u8bd5",level:2},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],c={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u7a0b\u5e8f\u6d4b\u8bd5\u662f\u4e00\u79cd\u627e\u5230\u7f3a\u9677\u7684\u6709\u6548\u65b9\u5f0f\uff0c\u4f46\u662f\u5b83\u5bf9\u8bc1\u660e\u6ca1\u6709\u7f3a\u9677\u5374\u65e0\u80fd\u4e3a\u529b\u3002"),(0,s.kt)("p",{parentName:"blockquote"},'   Edsger W. Dijkstra, "The Humble Programmer" (1972)')),(0,s.kt)("p",null,"\u4f5c\u4e3a\u8f6f\u4ef6\u5de5\u7a0b\u8d28\u91cf\u4fdd\u969c\u4f53\u7cfb\u7684\u91cd\u8981\u4e00\u73af\uff0c\u6d4b\u8bd5\u662f\u5e94\u8be5\u5f15\u8d77\u6211\u4eec\u5145\u5206\u6ce8\u610f\u5e76\u91cd\u89c6\u7684\u4e8b\u60c5\u3002\u524d\u9762\u8bf4\u8fc7\uff0cRust \u8bed\u8a00\u7684\u8bbe\u8ba1\u96c6\u6210\u4e86\u6700\u8fd1\u5341\u591a\u5e74\u4e2d\u603b\u7ed3\u51fa\u6765\u7684\u5927\u91cf\u6700\u4f73\u5de5\u7a0b\u5b9e\u8df5\uff0c\u800c\u5bf9\u6d4b\u8bd5\u7684\u539f\u751f\u96c6\u6210\u4e5f\u6b63\u4f53\u73b0\u4e86\u8fd9\u4e00\u70b9\u3002\u4e0b\u9762\u6765\u770b Rust \u662f\u600e\u4e48\u8bbe\u8ba1\u6d4b\u8bd5\u7279\u6027\u7684\u3002"),(0,s.kt)("p",null,"Rust \u7684\u6d4b\u8bd5\u7279\u6027\u6309\u7cbe\u7ec6\u5ea6\u5212\u5206\uff0c\u5206\u4e3a 3 \u4e2a\u5c42\u6b21\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u51fd\u6570\u7ea7\uff1b"),(0,s.kt)("li",{parentName:"ol"},"\u6a21\u5757\u7ea7\uff1b"),(0,s.kt)("li",{parentName:"ol"},"\u5de5\u7a0b\u7ea7\uff1b")),(0,s.kt)("p",null,"\u53e6\u5916\uff0cRust \u8fd8\u652f\u6301\u5bf9\u6587\u6863\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,s.kt)("h2",{id:"\u51fd\u6570\u7ea7\u6d4b\u8bd5"},"\u51fd\u6570\u7ea7\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u7528\u521b\u5efa\u4e00\u4e2a\u5e93\u7684\u5b9e\u64cd\u6765\u8bb2\u89e3\u6d4b\u8bd5\u7684\u5185\u5bb9\u3002\u6211\u4eec\u5148\u7528 cargo \u5efa\u7acb\u4e00\u4e2a\u5e93\u5de5\u7a0b\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"adder")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ cargo new adder\n$ cd adder\n")),(0,s.kt)("h3",{id:"test-\u6807\u8bc6"},(0,s.kt)("inlineCode",{parentName:"h3"},"#[test]")," \u6807\u8bc6"),(0,s.kt)("p",null,"\u6253\u5f00 ",(0,s.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn it_works() {\n    // do test work\n}\n")),(0,s.kt)("p",null,"Rust \u4e2d\uff0c\u53ea\u9700\u8981\u5728\u4e00\u4e2a\u51fd\u6570\u7684\u4e0a\u9762\uff0c\u52a0\u4e0a ",(0,s.kt)("inlineCode",{parentName:"p"},"#[test]")," \u5c31\u6807\u660e\u8fd9\u662f\u4e00\u4e2a\u6d4b\u8bd5\u7528\u7684\u51fd\u6570\u3002"),(0,s.kt)("p",null,"\u6709\u4e86\u8fd9\u4e2a\u5c5e\u6027\u4e4b\u540e\uff0c\u5728\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo build")," \u7f16\u8bd1\u65f6\uff0c\u5c31\u4f1a\u5ffd\u7565\u8fd9\u4e9b\u51fd\u6570\u3002\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," \u53ef\u4ee5\u8fd0\u884c\u8fd9\u4e9b\u51fd\u6570\u3002\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u6548\u679c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ cargo test\n   Compiling adder v0.0.1 (file:///home/you/projects/adder)\n     Running target/adder-91b3e234d4ed382a\n\nrunning 1 test\ntest it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured\n\n   Doc-tests adder\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured\n")),(0,s.kt)("p",null,"Rust \u63d0\u4f9b\u4e86\u4e24\u4e2a\u5b8f\u6765\u6267\u884c\u6d4b\u8bd5\u65ad\u8a00\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"assert!(expr)               \u6d4b\u8bd5\u8868\u8fbe\u5f0f\u662f\u5426\u4e3a true \u6216 false\nassert_eq!(expr, expr)      \u6d4b\u8bd5\u4e24\u4e2a\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u662f\u5426\u76f8\u7b49\n")),(0,s.kt)("p",null,"\u6bd4\u5982"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn it_works() {\n    assert!(false);\n}\n")),(0,s.kt)("p",null,"\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),"\uff0c\u4f60\u4f1a\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u8fd9\u6837\u7684\u63d0\u793a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ cargo test\n   Compiling adder v0.0.1 (file:///home/you/projects/adder)\n     Running target/adder-91b3e234d4ed382a\n\nrunning 1 test\ntest it_works ... FAILED\n\nfailures:\n\n---- it_works stdout ----\n        thread 'it_works' panicked at 'assertion failed: false', /home/steve/tmp/adder/src/lib.rs:3\n\n\n\nfailures:\n    it_works\n\ntest result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured\n\nthread '<main>' panicked at 'Some tests failed', /home/steve/src/rust/src/libtest/lib.rs:247\n")),(0,s.kt)("h3",{id:"should_panic-\u6807\u8bc6"},(0,s.kt)("inlineCode",{parentName:"h3"},"#[should_panic]")," \u6807\u8bc6"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u7684\u6d4b\u8bd5\u51fd\u6570\u6ca1\u5b8c\u6210\uff0c\u6216\u6ca1\u6709\u66f4\u65b0\uff0c\u6216\u662f\u6545\u610f\u8ba9\u5b83\u5d29\u6e83\uff0c\u4f46\u4e3a\u4e86\u8ba9\u6d4b\u8bd5\u80fd\u591f\u987a\u5229\u5b8c\u6210\uff0c\u6211\u4eec\u4e3b\u52a8\u53ef\u4ee5\u7ed9\u6d4b\u8bd5\u51fd\u6570\u52a0\u4e0a ",(0,s.kt)("inlineCode",{parentName:"p"},"#[should_panic]")," \u6807\u8bc6\uff0c\u5c31\u4e0d\u4f1a\u8ba9 ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," \u62a5\u9519\u4e86\u3002"),(0,s.kt)("p",null,"\u5982"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\n#[should_panic]\nfn it_works() {\n    assert!(false);\n}\n")),(0,s.kt)("p",null,"\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),"\uff0c\u7ed3\u679c\u7c7b\u4f3c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ cargo test\n   Compiling adder v0.0.1 (file:///home/you/projects/adder)\n     Running target/adder-91b3e234d4ed382a\n\nrunning 1 test\ntest it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured\n\n   Doc-tests adder\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured\n")),(0,s.kt)("h3",{id:"ignore-\u6807\u8bc6"},(0,s.kt)("inlineCode",{parentName:"h3"},"#[ignore]")," \u6807\u8bc6"),(0,s.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u67d0\u4e2a\u6d4b\u8bd5\u51fd\u6570\u975e\u5e38\u8017\u65f6\uff0c\u6216\u6682\u65f6\u6ca1\u66f4\u65b0\uff0c\u6211\u4eec\u60f3\u4e0d\u8ba9\u5b83\u53c2\u4e0e\u6d4b\u8bd5\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u5220\u9664\u5b83\uff0c\u8fd9\u65f6\uff0c ",(0,s.kt)("inlineCode",{parentName:"p"},"#[ignore]")," \u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\n#[ignore]\nfn expensive_test() {\n    // code that takes an hour to run\n}\n")),(0,s.kt)("p",null,"\u5199\u4e0a\u8fd9\u4e2a\uff0c\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," \u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u4f1a\u6d4b\u8bd5\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,s.kt)("h2",{id:"\u6a21\u5757\u7ea7\u6d4b\u8bd5"},"\u6a21\u5757\u7ea7\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u6709\u65f6\uff0c\u6211\u4eec\u4f1a\u7ec4\u7ec7\u4e00\u6279\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8fd9\u65f6\uff0c\u6a21\u5757\u5316\u7684\u7ec4\u7ec7\u7ed3\u6784\u5c31\u6709\u52a9\u4e8e\u5efa\u7acb\u7ed3\u6784\u6027\u7684\u6d4b\u8bd5\u4f53\u7cfb\u3002Rust \u4e2d\uff0c\u53ef\u4ee5\u7c7b\u4f3c\u5982\u4e0b\u5199\u6cd5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_two(a: i32) -> i32 {\n    a + 2\n}\n\n#[cfg(test)]\nmod tests {\n    use super::add_two;\n\n    #[test]\n    fn it_works() {\n        assert_eq!(4, add_two(2));\n    }\n}\n")),(0,s.kt)("p",null,"\u4e5f\u5373\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"mod")," \u7684\u4e0a\u9762\u5199\u4e0a ",(0,s.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," \uff0c\u8868\u660e\u8fd9\u4e2a\u6a21\u5757\u662f\u4e2a\u6d4b\u8bd5\u6a21\u5757\u3002\u4e00\u4e2a\u6d4b\u8bd5\u6a21\u5757\u4e2d\uff0c\u53ef\u4ee5\u5305\u542b\u82e5\u5e72\u6d4b\u8bd5\u51fd\u6570\uff0c\u6d4b\u8bd5\u6a21\u5757\u4e2d\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u5305\u542b\u6d4b\u8bd5\u6a21\u5757\uff0c\u5373\u6a21\u5757\u7684\u5d4c\u5957\u3002"),(0,s.kt)("p",null,"\u5982\u6b64\uff0c\u5c31\u5f62\u5f0f\u4e86\u7ed3\u6784\u5316\u7684\u6d4b\u8bd5\u4f53\u7cfb\uff0c\u751a\u662f\u65b9\u4fbf\u3002"),(0,s.kt)("h2",{id:"\u5de5\u7a0b\u7ea7\u6d4b\u8bd5"},"\u5de5\u7a0b\u7ea7\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u51fd\u6570\u7ea7\u548c\u6a21\u5757\u7ea7\u7684\u6d4b\u8bd5\uff0c\u4ee3\u7801\u662f\u4e0e\u8981\u6d4b\u8bd5\u7684\u6a21\u5757\uff08\u7f16\u8bd1\u5355\u5143\uff09\u5199\u5728\u76f8\u540c\u7684\u6587\u4ef6\u4e2d\uff0c\u4e00\u822c\u505a\u7684\u662f\u767d\u76d2\u6d4b\u8bd5\u3002\u5de5\u7a0b\u7ea7\u7684\u6d4b\u8bd5\uff0c\u4e00\u822c\u505a\u7684\u5c31\u662f\u9ed1\u76d2\u96c6\u6210\u6d4b\u8bd5\u4e86\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u770b\u4e00\u4e2a\u5de5\u7a0b\u7684\u76ee\u5f55\uff0c\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\uff0c\u6709\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," \u6587\u4ef6\u5939\uff08\u6ca1\u6709\u7684\u8bdd\uff0c\u5c31\u624b\u52a8\u5efa\u7acb\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Cargo.toml\nCargo.lock\nexamples\nsrc\ntests\n")),(0,s.kt)("p",null,"\u6211\u4eec\u5728 tests \u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u4e00\u4e2a\u6587\u4ef6 ",(0,s.kt)("inlineCode",{parentName:"p"},"testit.rs")," \uff0c\u540d\u5b57\u968f\u4fbf\u53d6\u7686\u53ef\u3002\u5185\u5bb9\u4e3a\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"extern crate adder;\n\n#[test]\nfn it_works() {\n    assert_eq!(4, adder::add_two(2));\n}\n")),(0,s.kt)("p",null,"\u8fd9\u91cc\uff0c\u6bd4\u5982\uff0c\u6211\u4eec src \u4e2d\uff0c\u5199\u4e86\u4e00\u4e2a\u5e93\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"add_two")," \u51fd\u6570\uff0c\u73b0\u5728\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u3002"),(0,s.kt)("p",null,"\u9996\u5148\uff0c\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"extern crate")," \u7684\u65b9\u5f0f\uff0c\u5f15\u5165\u8fd9\u4e2a\u5e93\uff0c\u7531\u4e8e\u662f\u540c\u4e00\u4e2a\u9879\u76ee\uff0ccargo \u4f1a\u81ea\u52a8\u627e\u3002\u5f15\u5165\u540e\uff0c\u5c31\u6309\u6a21\u5757\u7684\u4f7f\u7528\u65b9\u6cd5\u8c03\u7528\u5c31\u884c\u4e86\uff0c\u5176\u5b83\u7684\u6d4b\u8bd5\u6807\u8bc6\u4e0e\u524d\u9762\u76f8\u540c\u3002"),(0,s.kt)("p",null,"\u5199\u5b8c\u540e\uff0c\u8fd0\u884c\u4e00\u4e0b ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),"\uff0c\u63d0\u793a\u7c7b\u4f3c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ cargo test\n   Compiling adder v0.0.1 (file:///home/you/projects/adder)\n     Running target/adder-91b3e234d4ed382a\n\nrunning 1 test\ntest tests::it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured\n\n     Running target/lib-c18e7d3494509e74\n\nrunning 1 test\ntest it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured\n\n   Doc-tests adder\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured\n")),(0,s.kt)("h2",{id:"\u6587\u6863\u7ea7\u6d4b\u8bd5"},"\u6587\u6863\u7ea7\u6d4b\u8bd5"),(0,s.kt)("p",null,"Rust \u5bf9\u6587\u6863\u7684\u54f2\u5b66\uff0c\u662f\u4e0d\u8981\u5355\u72ec\u5199\u6587\u6863\uff0c\u4e00\u662f\u4ee3\u7801\u672c\u8eab\u662f\u6587\u6863\uff0c\u4e8c\u662f\u4ee3\u7801\u7684\u6ce8\u91ca\u5c31\u662f\u6587\u6863\u3002Rust \u4e0d\u4f46\u53ef\u4ee5\u81ea\u52a8\u62bd\u53d6\u4ee3\u7801\u4e2d\u7684\u6587\u6863\uff0c\u5f62\u6210\u6807\u51c6\u5f62\u5f0f\u7684\u6587\u6863\u96c6\u5408\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u6587\u6863\u4e2d\u7684\u793a\u4f8b\u4ee3\u7801\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,s.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u7ed9\u4e0a\u9762\u5e93\u52a0\u70b9\u6587\u6863\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"//! The `adder` crate provides functions that add numbers to other numbers.\n//!\n//! # Examples\n//!\n//! ```\n//! assert_eq!(4, adder::add_two(2));\n//! ```\n\n/// This function adds two to its argument.\n///\n/// # Examples\n///\n/// ```\n/// use adder::add_two;\n///\n/// assert_eq!(4, add_two(2));\n/// ```\n\npub fn add_two(a: i32) -> i32 {\n   a + 2\n}\n\n#[cfg(test)]\nmod tests {\n   use super::*;\n\n   #[test]\n   fn it_works() {\n      assert_eq!(4, add_two(2));\n   }\n}\n")),(0,s.kt)("p",null,"\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),"\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ cargo test\n   Compiling adder v0.0.1 (file:///home/steve/tmp/adder)\n     Running target/adder-91b3e234d4ed382a\n\nrunning 1 test\ntest tests::it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured\n\n     Running target/lib-c18e7d3494509e74\n\nrunning 1 test\ntest it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured\n\n   Doc-tests adder\n\nrunning 2 tests\ntest add_two_0 ... ok\ntest _0 ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured\n")),(0,s.kt)("p",null,"\u770b\u5230\u4e86\u5427\uff0c\u591a\u4e86\u4e9b\u6d4b\u8bd5\u7ed3\u679c\u3002"),(0,s.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0cRust \u5bf9\u6d4b\u8bd5\uff0c\u5bf9\u6587\u6863\uff0c\u5bf9\u6587\u6863\u4e2d\u7684\u793a\u4f8b\u4ee3\u7801\u6d4b\u8bd5\uff0c\u90fd\u6709\u7279\u6027\u652f\u6301\u3002\u4ece\u8fd9\u4e9b\u7ec6\u8282\u4e4b\u5904\uff0c\u53ef\u4ee5\u770b\u51fa Rust \u8bbe\u8ba1\u7684\u5468\u5bc6\u6027\u548c\u4e25\u8c28\u6027\u3002"),(0,s.kt)("p",null,"\u4f46\u662f\uff0c\u5149\u6709\u597d\u5de5\u5177\u662f\u4e0d\u591f\u7684\uff0c\u5de5\u7a0b\u7684\u8d28\u91cf\u66f4\u91cd\u8981\u7684\u662f\u5199\u4ee3\u7801\u7684\u4eba\u51b3\u5b9a\u7684\u3002\u6211\u4eec\u5e94\u8be5\u5728 Rust \u4e25\u8c28\u4e4b\u98ce\u7684\u718f\u9676\u4e0b\uff0c\u517b\u6210\u826f\u597d\u7684\u7f16\u7801\u548c\u7f16\u5199\u6d4b\u8bd5\u7684\u4e60\u60ef\uff0c\u638c\u63e1\u4e00\u5b9a\u7684\u5206\u6790\u65b9\u6cd5\uff0c\u628a\u8d28\u91cf\u8981\u6c42\u8d2f\u5f7b\u5230\u5e95\u3002"))}k.isMDXComponent=!0}}]);