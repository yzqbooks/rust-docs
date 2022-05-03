"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[4764],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8893:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={},c="Rust json\u5904\u7406",l={unversionedId:"action/json_data/readme",id:"action/json_data/readme",title:"Rust json\u5904\u7406",description:"JSON\u662f\u4e00\u79cd\u6bd4\u8f83\u91cd\u8981\u7684\u683c\u5f0f\uff0c\u5c24\u5176\u662f\u73b0\u5728\u7684web\u5f00\u53d1\u9886\u57df\uff0cJSON\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684XML\u66f4\u52a0\u5bb9\u6613\u64cd\u4f5c\u548c\u51cf\u5c0f\u4f20\u8f93\u3002",source:"@site/docs/action/json_data/readme.md",sourceDirName:"action/json_data",slug:"/action/json_data/",permalink:"/rust-docs/docs/action/json_data/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/action/json_data/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rust\u6570\u636e\u5e93\u64cd\u4f5c",permalink:"/rust-docs/docs/action/db/"},next:{title:"rust web \u5f00\u53d1",permalink:"/rust-docs/docs/action/mysite/"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rust-json\u5904\u7406"},"Rust json\u5904\u7406"),(0,o.kt)("p",null,"JSON\u662f\u4e00\u79cd\u6bd4\u8f83\u91cd\u8981\u7684\u683c\u5f0f\uff0c\u5c24\u5176\u662f\u73b0\u5728\u7684web\u5f00\u53d1\u9886\u57df\uff0cJSON\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684XML\u66f4\u52a0\u5bb9\u6613\u64cd\u4f5c\u548c\u51cf\u5c0f\u4f20\u8f93\u3002"),(0,o.kt)("p",null,"Rust\u4e2d\u7684JSON\u5904\u7406\u4f9d\u8d56 cargo \u4e2d\u7684rustc-serialize\u6a21\u5757"),(0,o.kt)("p",null,"###\u5148\u7b80\u5355\u7684\u521b\u5efa\u4e00\u4e2aRust\u9879\u76ee\u5de5\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"$ cargo new json_data --bin\n")),(0,o.kt)("p",null,"\u751f\u6210\u6587\u4ef6\u6811\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vagrant@ubuntu-14:~/tmp/test/rustprimer$ tree\n.\n`-- json_data\n    |-- Cargo.toml\n    `-- src\n        `-- main.rs\n\n\n")),(0,o.kt)("p",null,"\u751f\u6210\u9879\u76ee",(0,o.kt)("inlineCode",{parentName:"p"},"json_data"),",\u9879\u76ee\u4e0b\u6587\u4ef6\u4ecb\u7ecd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Caogo.toml \uff0c\u6587\u4ef6\u4e2d\u586b\u5199\u4e00\u4e9b\u9879\u76ee\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u6bd4\u5982\u7248\u672c\u53f7\uff0c\u8054\u7cfb\u4eba\uff0c\u9879\u76ee\u540d\uff0c\u6587\u4ef6\u7684\u5185\u5bb9\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "json_data"\nversion = "0.1.0"\nauthors = ["wangxxx <xxxxx@qq.com>"]\n\n[dependencies]\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"src \u4e2d\u653e\u7f6e\u9879\u76ee\u7684\u6e90\u4ee3\u7801\uff0cmain.rs \u4e3a\u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\u3002")),(0,o.kt)("p",null,"###\u4e00\u4e9b\u5fc5\u8981\u7684\u4e86\u89e3"),(0,o.kt)("p",null,"rustc-serialize \u8fd9\u4e2a\u662f\u7b2c\u4e09\u65b9\u7684\u6a21\u5757\uff0c\u9700\u8981\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/rustc-serialize"},"cargo"),"\u4e0b\u8f7d\u3002\n\u4e0b\u8f7d\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u4fee\u6539\u4e00\u4e0bcargo.toml\u6587\u4ef6\u5c31\u884c\u4e86."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "json_data"\nversion = "0.1.0"\nauthors = ["wangxxx <xxxxx@qq.com>"]\n\n[dependencies]\nrustc-serialize = "0.3.18"\n\n')),(0,o.kt)("p",null,"\u7136\u540e\u6267\u884c\u5728\u5f53\u524d\u76ee\u5f55\u6267\u884c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo build\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u6ce8\u610f\u4e00\u4e2a\u95ee\u9898\u7531\u4e8e\u56fd\u5185\u7f51\u7edc\u8bbf\u95eegithub\u4e0d\u7a33\u5b9a\uff0c\u8fd9\u4e9b\u7b2c\u4e09\u65b9\u5e93\u5f88\u591a\u6258\u7ba1\u5728github\u4e0a\uff0c\u6240\u4ee5\u53ef\u80fd\u9700\u8981\u4fee\u6539\u4f60\u7684\n\u7f51\u7edc\u8bbf\u95ee")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5b89\u88c5Rust\u4e4b\u540e\uff0c\u4f1a\u5728\u4f60\u7684\u7528\u6237\u76ee\u5f55\u4e4b\u4e0b\u751f\u6210\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},".cargo"),"\u6587\u4ef6\u5939\uff0c\u8fdb\u5165\u8fd9\u4e2a\u6587\u4ef6\u5939"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("inlineCode",{parentName:"li"},".cargo"),"\u6587\u4ef6\u5939\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"config"),"\u6587\u4ef6\uff0c\u5728\u6587\u4ef6\u4e2d\u586b\u5199\u4e2d\u79d1\u5927\u8f6f\u4ef6\u6e90\uff0c\u53ef\u80fd\u4ee5\u540e\u4f1a\u51fa\u73b0\u5176\u4ed6\u7684\u6e90\uff0c\u5148\u7528\u8fd9\u4e2a"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"config"),"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[registry]\nindex = "git://crates.mirrors.ustc.edu.cn/index"\n\n')),(0,o.kt)("p",null,"cargo build \u6267\u884c\u4e4b\u540e\u7684\u63d0\u793a\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   Updating registry `git://crates.mirrors.ustc.edu.cn/index`\n Downloading rustc-serialize v0.3.18 (registry git://crates.mirrors.ustc.edu.cn/index)\n   Compiling rustc-serialize v0.3.18 (registry git://crates.mirrors.ustc.edu.cn/index)\n   Compiling json_data v0.1.0 (file:///home/vagrant/tmp/test/rustprimer/json_data)\n")),(0,o.kt)("p",null,"\u518d\u6b21\u6267\u884ctree\u547d\u4ee4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n|-- Cargo.lock\n|-- Cargo.toml\n|-- src\n|   `-- main.rs\n`-- target\n    `-- debug\n        |-- build\n        |-- deps\n        |   `-- librustc_serialize-d27006e102b906b6.rlib\n        |-- examples\n        |-- json_data\n        `-- native\n\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u591a\u4e86\u5f88\u591a\u6587\u4ef6\uff0c\u91cd\u70b9\u5173\u6ce8",(0,o.kt)("inlineCode",{parentName:"p"},"cargo.lock"),",\u5f00\u6253\u6587\u4ef6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[root]\nname = "json_data"\nversion = "0.1.0"\ndependencies = [\n "rustc-serialize 0.3.18 (registry+git://crates.mirrors.ustc.edu.cn/index)",\n]\n\n[[package]]\nname = "rustc-serialize"\nversion = "0.3.18"\nsource = "registry+git://crates.mirrors.ustc.edu.cn/index"\n\n')),(0,o.kt)("p",null,"\u662f\u5173\u4e8e\u9879\u76ee\u7f16\u8bd1\u7684\u4e00\u4e9b\u4f9d\u8d56\u4fe1\u606f"),(0,o.kt)("p",null,"\u8fd8\u6709\u751f\u6210\u4e86target\u6587\u4ef6\u5939\uff0c\u751f\u6210\u4e86\u53ef\u6267\u884c\u6587\u4ef6json_data,\u56e0\u4e3amain.rs\u4e2d\u7684\u6267\u884c\u7ed3\u679c\u5c31\u662f\u6253\u5370",(0,o.kt)("inlineCode",{parentName:"p"},"hello world")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo run\n\nHello, world!\n")),(0,o.kt)("p",null,"###\u5f00\u59cb\u5199\u4ee3\u7801\n\u76f4\u63a5\u4f7f\u7528\u5b98\u65b9\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rustc-serialize/rustc_serialize/json/index.html#using-autoserialization"},"rustc_serialize \u4e2d\u7684\u4f8b\u5b50"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'extern crate rustc_serialize;\n// \u5f15\u5165rustc_serialize\u6a21\u5757\nuse rustc_serialize::json;\n\n// Automatically generate `RustcDecodable` and `RustcEncodable` trait\n// implementations\n// \u5b9a\u4e49TestStruct\n#[derive(RustcDecodable, RustcEncodable)]\npub struct TestStruct  {\n    data_int: u8,\n    data_str: String,\n    data_vector: Vec<u8>,\n}\n\nfn main() {\n    // \u521d\u59cb\u5316TestStruct\n    let object = TestStruct {\n        data_int: 1,\n        data_str: "homura".to_string(),\n        data_vector: vec![2,3,4,5],\n    };\n\n    // Serialize using `json::encode`\n    // \u5c06TestStruct\u8f6c\u610f\u4e3a\u5b57\u7b26\u4e32\n    let encoded = json::encode(&object).unwrap();\n    println!("{}",encoded);\n    // Deserialize using `json::decode`\n    // \u5c06json\u5b57\u7b26\u4e32\u4e2d\u7684\u6570\u636e\u8f6c\u5316\u6210TestStruct\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u76f8\u5f53\u4e8e\u521d\u59cb\u5316\n    let decoded: TestStruct = json::decode(&encoded).unwrap();\n    println!("{:?}",decoded.data_vector);\n}\n\n')),(0,o.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u6587\u672c\u4e2d\u4f5c\u4e3aapi\u7684\u8fd4\u56de\u7ed3\u679c\u4f7f\u7528\uff0c\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u8fd9\u4e2a\u95ee\u9898"))}m.isMDXComponent=!0}}]);