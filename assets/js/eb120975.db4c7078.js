"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[2619],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,k=m["".concat(l,".").concat(c)]||m[c]||d[c]||a;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3276:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],p={},l="\u6807\u51c6\u8f93\u5165\u4e0e\u8f93\u51fa",u={unversionedId:"io/io",id:"io/io",title:"\u6807\u51c6\u8f93\u5165\u4e0e\u8f93\u51fa",description:"\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5199\u7684\u7b2c\u4e00\u4e2a Rust \u7a0b\u5e8f\u5c31\u662f\u5e26\u526f\u4f5c\u7528\u7684\uff0c\u5176\u526f\u4f5c\u7528\u5c31\u662f\u5411\u6807\u51c6\u8f93\u51fa(stdout)\uff0c\u901a\u5e38\u662f\u7ec8\u7aef\u6216\u5c4f\u5e55\uff0c\u8f93\u51fa\u4e86 Hello, World! \u8ba9\u5c4f\u5e55\u4e0a\u8fd9\u51e0\u4e2a\u5b57\u7b26\u7684\u5730\u65b9\u70b9\u4eae\u8d77\u6765\u3002println! \u5b8f\u662f\u6700\u5e38\u89c1\u7684\u8f93\u51fa\uff0c\u7528\u5b8f\u6765\u505a\u8f93\u51fa\u7684\u8fd8\u6709 print!\uff0c\u4e24\u8005\u90fd\u662f\u5411\u6807\u51c6\u8f93\u51fa(stdout)\u8f93\u51fa\uff0c\u4e24\u8005\u7684\u533a\u522b\u4e5f\u4e00\u773c\u5c31\u80fd\u770b\u51fa\u3002\u81f3\u4e8e\u683c\u5f0f\u5316\u8f93\u51fa\uff0c\u57fa\u7840\u8fd0\u7b97\u7b26\u548c\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u5c0f\u8282\u6709\u8be6\u7ec6\u8bf4\u660e\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u5570\u55e6\u4e86\u3002",source:"@site/docs/io/io.md",sourceDirName:"io",slug:"/io/",permalink:"/rust-docs/docs/io/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/io/io.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/rust-docs/docs/intro"},next:{title:"\u6587\u4ef6\u8f93\u5165\u4e0e\u8f93\u51fa",permalink:"/rust-docs/docs/io/file-io"}},s={},d=[],m={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6807\u51c6\u8f93\u5165\u4e0e\u8f93\u51fa"},"\u6807\u51c6\u8f93\u5165\u4e0e\u8f93\u51fa"),(0,a.kt)("p",null,"\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5199\u7684\u7b2c\u4e00\u4e2a Rust \u7a0b\u5e8f\u5c31\u662f\u5e26\u526f\u4f5c\u7528\u7684\uff0c\u5176\u526f\u4f5c\u7528\u5c31\u662f\u5411\u6807\u51c6\u8f93\u51fa(stdout)\uff0c\u901a\u5e38\u662f\u7ec8\u7aef\u6216\u5c4f\u5e55\uff0c\u8f93\u51fa\u4e86 Hello, World! \u8ba9\u5c4f\u5e55\u4e0a\u8fd9\u51e0\u4e2a\u5b57\u7b26\u7684\u5730\u65b9\u70b9\u4eae\u8d77\u6765\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"println!")," \u5b8f\u662f\u6700\u5e38\u89c1\u7684\u8f93\u51fa\uff0c\u7528\u5b8f\u6765\u505a\u8f93\u51fa\u7684\u8fd8\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"print!"),"\uff0c\u4e24\u8005\u90fd\u662f\u5411\u6807\u51c6\u8f93\u51fa(stdout)\u8f93\u51fa\uff0c\u4e24\u8005\u7684\u533a\u522b\u4e5f\u4e00\u773c\u5c31\u80fd\u770b\u51fa\u3002\u81f3\u4e8e\u683c\u5f0f\u5316\u8f93\u51fa\uff0c",(0,a.kt)("a",{parentName:"p",href:"/rust-docs/docs/type/operator-and-formatting"},"\u57fa\u7840\u8fd0\u7b97\u7b26\u548c\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u5c0f\u8282"),"\u6709\u8be6\u7ec6\u8bf4\u660e\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u5570\u55e6\u4e86\u3002"),(0,a.kt)("p",null,"\u66f4\u901a\u7528\u7684\u6807\u51c6\u8f93\u5165\u4e0e\u8f93\u51fa\u5b9a\u4e49\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::io")," \u6a21\u5757\u91cc\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::io::stdin()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"std::io::stdout()")," \u4e24\u4e2a\u51fd\u6570\u5206\u522b\u4f1a\u5f97\u5230\u8f93\u5165\u53e5\u67c4\u548c\u8f93\u51fa\u53e5\u67c4(\u54ce\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%8F%A5%E6%9F%84"},"\u53e5\u67c4"),"\u8fd9\u4e2a\u8bcd\u662f\u8ba1\u7b97\u673a\u53f2\u4e0a\u6700\u83ab\u540d\u5176\u5999\u7684\u7ffb\u8bd1\u4e86)\uff0c\u8fd9\u4e24\u4e2a\u53e5\u67c4\u9ed8\u8ba4\u4f1a\u901a\u8fc7\u4e92\u65a5\u9501\u540c\u6b65\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u8ba9\u591a\u4e2a\u8fdb\u7a0b\u540c\u65f6\u8bfb\u6216\u5199\u6807\u51c6\u8f93\u5165\u8f93\u51fa\uff0c\u4e0d\u7136\u7684\u8bdd\u5982\u679c\u4e00\u4e2a\u8fdb\u7a0b\u8981\u5f80\u6807\u51c6\u8f93\u51fa\u753b\u9a6c\uff0c\u4e00\u4e2a\u8fdb\u7a0b\u8981\u753b\u9a74\uff0c\u4e24\u4e2a\u8fdb\u7a0b\u540c\u65f6\u5199\u6807\u51c6\u8f93\u51fa\u7684\u8bdd\uff0c\u6700\u540e\u53ef\u80fd\u5c31\u7ed9\u753b\u51fa\u4e00\u5934\u9aa1\u5b50\u4e86\uff0c\u5982\u679c\u66f4\u591a\u8fdb\u7a0b\u753b\u4e0d\u540c\u7684\u52a8\u7269\u6700\u540e\u53ef\u80fd\u5c31\u6210\u56db\u4e0d\u50cf\u4e86\u3002\u9664\u4e86\u9690\u5f0f\u5730\u7528\u4e92\u65a5\u9501\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u663e\u5f0f\u5730\u5728\u53e5\u67c4\u4e0a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".lock()"),"\u3002\u8f93\u5165\u8f93\u51fa\u53e5\u67c4\u5b9e\u73b0\u4e86\u524d\u9762\u8bb2\u7684\u8bfb\u5199 Trait\uff0c\u6240\u4ee5\u662f reader/writer\uff0c\u5c31\u53ef\u4ee5\u8c03\u63a5\u53e3\u6765\u8bfb\u5199\u6807\u51c6\u8f93\u5165\u4e0e\u8f93\u51fa\u4e86\u3002\u4e3e\u51e0\u4e2a\u6817\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::io;\n\nfn read_from_stdin(buf: &mut String) -> io::Result<()> {\n    try!(io::stdin().read_line(buf));\n    Ok(())\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::io;\n\nfn write_to_stdout(buf: &[u8]) -> io::Result<()> {\n    try!(io::stdout().write(&buf));\n    Ok(())\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e0a\u9762\u7684\u4f8b\u5b50\u90fd\u662f\u8fd4\u56de\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Result<()>")," \u7c7b\u578b\uff0c\u8fd9\u4e0d\u662f\u5076\u7136\uff0c\u800c\u662f IO \u64cd\u4f5c\u901a\u7528\u7684\u5199\u6cd5\uff0c\u56e0\u4e3a IO \u64cd\u4f5c\u662f\u7a0b\u5e8f\u4e0e\u5916\u754c\u6253\u4ea4\u9053\uff0c\u6240\u4ee5\u90fd\u662f\u6709\u53ef\u80fd\u5931\u8d25\u7684\uff0c\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Result<T>")," \u628a\u7ed3\u679c\u5305\u8d77\u6765\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"io::Result<T>")," \u53ea\u662f\u6807\u51c6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Result<T,E>")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," \u56fa\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Error")," \u540e\u7c7b\u578b\u7684\u522b\u540d\uff0c\u800c\u4f5c\u4e3a\u6709\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\u6211\u4eec\u4e00\u822c\u662f\u4e0d\u7528\u5173\u5fc3\u5176\u8fd4\u56de\u503c\u7684\uff0c\u56e0\u4e3a\u6267\u884c\u8fd9\u7c7b\u51fd\u6570\u5176\u771f\u6b63\u7684\u610f\u4e49\u90fd\u4f53\u73b0\u5728\u526f\u4f5c\u7528\u4e0a\u9762\u4e86\uff0c\u6240\u4ee5\u8fd4\u56de\u503c\u53ea\u662f\u7528\u6765\u8868\u793a\u662f\u5426\u6210\u529f\u6267\u884c\uff0c\u800c\u672c\u8eab ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," \u7c7b\u578b\u672c\u8eab\u5df2\u7ecf\u53ef\u4ee5\u8868\u793a\u6267\u884c\u72b6\u6001\u4e86\uff0c\u91cc\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u662f\u4ec0\u4e48\u5219\u65e0\u5173\u7d27\u8981\uff0c\u65e2\u7136 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u6ca1\u4ec0\u4e48\u610f\u4e49\uff0c\u90a3\u6211\u4eec\u5c31\u9009\u6ca1\u4ec0\u4e48\u610f\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"unit")," \u7c7b\u578b\u597d\u4e86\uff0c\u6240\u4ee5 IO \u64cd\u4f5c\u57fa\u672c\u4e0a\u90fd\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Result<()>"),"\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u6709\u4e00\u4e2a\u5730\u65b9\u9700\u8981\u6ce8\u610f\u7684\u662f\u7531\u4e8e IO \u64cd\u4f5c\u53ef\u80fd\u4f1a\u5931\u8d25\u6240\u4ee5\u4e00\u822c\u90fd\u662f\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u5b8f\u4e00\u8d77\u4f7f\u7528\u7684\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u5728\u9047\u5230\u9519\u8bef\u65f6\u4f1a\u628a\u9519\u8bef ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," \u51fa\u53bb\u7684\uff0c\u6240\u4ee5\u9700\u8981\u4fdd\u8bc1\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u8bed\u53e5\u7684\u51fd\u6570\u5176\u8fd4\u56de\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Result<T>"),"\uff0c\u5f88\u591a\u65b0\u624b\u6587\u6863\u6ca1\u4ed4\u7ec6\u770b\u5c31\u76f4\u63a5\u67e5 std api \u6587\u6863\uff0c\u7136\u540e\u7167\u7740 api \u6587\u6863\u91cc\u9762\u7684\u4f8b\u5b50\u628a\u5e26 IO \u64cd\u4f5c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u5b8f\u5199\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u91cc\u3002\u7ed3\u679c\u4e00\u7f16\u8bd1\uff0c\u64e6\uff0c\u7167\u7740\u6587\u6863\u5199\u90fd\u7f16\u8bd1\u4e0d\u8fc7\uff0c\u4ec0\u4e48\u70c2\u6587\u6863\u3002\u5176\u5b9e\u70b9\u4e00\u4e0b api \u6587\u6863\u4e0a\u9762\u7684\u8fd0\u884c\u6309\u94ae\u5c31\u4f1a\u53d1\u73b0\u6587\u6863\u91cc\u9762\u7684\u4f8b\u5b50\u90fd\u662f\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u653e\u5728\u53e6\u4e00\u4e2a\u51fd\u6570\u91cc\u9762\u7684\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u662f\u6ca1\u6709\u8fd4\u56de\u503c\u7684\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"io::Result<T>"),"\uff0c\u6240\u4ee5\u76f4\u63a5\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u653e ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u91cc\u9762\u80af\u5b9a\u8981\u8dea\u3002\u6bd4\u5982\u4e0b\u9762\u7684\u4ece\u6807\u51c6\u8f93\u5165\u8bfb\u53d6\u4e00\u884c\u8f93\u5165\uff0c\u7531\u4e8e\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"try!")," \u653e\u5728\u4e86 main \u51fd\u6570\u91cc\uff0c\u6240\u4ee5\u662f\u7f16\u8bd1\u4e0d\u8fc7\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::io;\n\nfn main() {\n    let mut input = String::new();\n    try!(io::stdin().read_line(&mut input));\n    println!("You typed: {}", input.trim());\n}\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4ef6\u4e8b\u9700\u8981\u4e3b\u8981\u7684\u662f Rust \u91cc\u9762\u6ca1\u6709\u529e\u6cd5\u4ece\u952e\u76d8\u83b7\u53d6\u4e00\u4e2a\u6570\u5b57\u7c7b\u578b\u7684\u503c\u3002\u5b9e\u9645\u4e0a\u50cf C \u8fd9\u6837\u7684\u8bed\u8a00\u4e5f\u4e0d\u662f\u76f4\u63a5\u83b7\u53d6\u4e86\u6570\u5b57\u7c7b\u578b\uff0c\u5b83\u53ea\u4e0d\u8fc7\u662f\u505a\u4e86\u4e00\u79cd\u8f6c\u6362\u3002\u90a3\u4e48\u6211\u4eec\u5982\u679c\u60f3\u8981\u4ece\u952e\u76d8\u83b7\u53d6\u4e00\u4e2a\u6570\u5b57\u7c7b\u578b\u5e94\u8be5\u600e\u4e48\u505a\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut input = String::new();\n        std::io::stdin()\n            .read_line(&mut input)\n            .expect("Failed to read line");\n    // \u8fd9\u91cc\u7b49\u6548\u7684\u5199\u6cd5\u662f\uff1a\n    // let num: i32 = input.trim().parse().unwrap(); \n    let num = input.trim().parse::<i32>().unwrap();\n    println!("\u60a8\u8f93\u5165\u7684\u6570\u5b57\u662f\uff1a{}", num);\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u6709\u5f88\u591a\u5730\u65b9\u90fd\u9700\u8981\u8f93\u5165\u6570\u5b57\u53ef\u4ee5\u81ea\u884c\u7f16\u5199\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"numin")," \u5b8f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'macro_rules! numin {\n      () =>{\n          {\n            let mut input = String::new();\n              std::io::stdin()\n                  .read_line(&mut input)\n                .expect("Failed to read line");\n              input.trim().parse().unwrap()\n        }\n    };\n}\n')),(0,a.kt)("p",null,"\u4e8e\u662f\u4e0a\u9762\u7684\u7a0b\u5e8f\u53ef\u4ee5\u88ab\u6539\u5199\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\nfn main() {\n    let num: i32 = numin!();\n    println!("\u60a8\u8f93\u5165\u7684\u6570\u5b57\u662f\uff1a{}", num);\n}\n')),(0,a.kt)("p",null,"\u4e0d\u8fc7\u5982\u679c\u7528\u6237\u8f93\u5165\u7684\u4e0d\u662f\u6570\u5b57\uff0c\u90a3\u4e48\u5c31\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002\u8fd9\u4e00\u70b9\u548c C \u91cc\u9762\u662f\u975e\u5e38\u76f8\u4f3c\u7684\u3002\u5f53\u7136\u60a8\u53ef\u4ee5\u628a\u7a0b\u5e8f\u5199\u5f97\u518d\u590d\u6742\u4e00\u70b9\u513f\u6765\u4fdd\u8bc1\u7528\u6237\u8f93\u5165\u7684\u4e00\u5b9a\u662f\u6570\u5b57\u3002\u4e0d\u8fc7\u8fd9\u4e9b\u5c31\u4e0d\u662f\u6211\u4eec\u8fd9\u4e00\u8282\u8981\u8ba8\u8bba\u7684\u5185\u5bb9\u4e86\u3002"),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u70b9\u4e00\u4e9b\u4ece\u5176\u5b83\u8bed\u8a00\u8f6c\u8fc7\u6765\u7684\u7a0b\u5e8f\u5458\u53ef\u80fd\u4f1a\u7591\u60d1\u7684\u662f\uff0c\u5982\u4f55\u4ece\u547d\u4ee4\u884c\u63a5\u53d7\u8f93\u5165\u53c2\u6570\uff0c\u56e0\u4e3a C \u91cc\u9762\u7684 main \u51fd\u6570\u53ef\u4ee5\u5e26\u53c2\u6570\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u4ece main \u51fd\u6570\u7684\u53c2\u6570\u91cc\u83b7\u53d6\u8f93\u5165\u53c2\u6570\u3002\u4f46\u5176\u5b9e\u8fd9\u7c7b\u8f93\u5165\u4e0e\u6211\u4eec\u8fd9\u91cc\u8bb2\u7684\u6709\u5f88\u5927\u7684\u5dee\u522b\u7684\uff0c\u5b83\u5728 Rust \u91cc\u9762\u88ab\u5f52\u4e3a\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::env::args()")," \u83b7\u53d6\uff0c\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Args")," \u8fed\u4ee3\u5668\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u5c31\u662f\u7a0b\u5e8f\u540d\uff0c\u540e\u9762\u7684\u90fd\u662f\u8f93\u5165\u7ed9\u7a0b\u5e8f\u7684\u547d\u4ee4\u884c\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::env;\n\nfn main() {\n    let args = env::args();\n    for arg in args {\n        println!("{}", arg);\n    }\n}\n')),(0,a.kt)("p",null,"\u5c06\u4e0a\u9762\u7684\u7a0b\u5e8f\u5b58\u4e3a ",(0,a.kt)("em",{parentName:"p"},"args.rs")," \u7136\u540e\u7f16\u8bd1\u6267\u884c\uff0c\u7ed3\u679c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rustc args.rs\n$ ./args a b c\n./args\na\nb\nc\n")))}c.isMDXComponent=!0}}]);