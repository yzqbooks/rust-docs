"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[9140],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(f,c(c({ref:t},p),{},{components:a})):n.createElement(f,c({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<s;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),c=["components"],l={},o="Spacemacs",i={unversionedId:"editors/spacemacs",id:"editors/spacemacs",title:"Spacemacs",description:"spacemacs\uff0c\u662f\u4e00\u4e2a\u7ed9vimer\u7684Emacs\u3002",source:"@site/docs/editors/spacemacs.md",sourceDirName:"editors",slug:"/editors/spacemacs",permalink:"/rust-docs/docs/editors/spacemacs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editors/spacemacs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u8f91\u5668",permalink:"/rust-docs/docs/editors/preface"},next:{title:"Sublime",permalink:"/rust-docs/docs/editors/sublime"}},p={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Emacs\u5b89\u88c5",id:"emacs\u5b89\u88c5",level:3},{value:"Spacemacs\u5b89\u88c5",id:"spacemacs\u5b89\u88c5",level:3},{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",level:3},{value:"\u5b8c\u6210\u914d\u7f6e",id:"\u5b8c\u6210\u914d\u7f6e",level:2},{value:"\u4fee\u6539\u6807\u51c6\u7684Spacemacs\u914d\u7f6e\u3002",id:"\u4fee\u6539\u6807\u51c6\u7684spacemacs\u914d\u7f6e",level:3},{value:"\u6309\u952e\u7ed1\u5b9a",id:"\u6309\u952e\u7ed1\u5b9a",level:3},{value:"\u5c1d\u8bd5",id:"\u5c1d\u8bd5",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spacemacs"},"Spacemacs"),(0,s.kt)("p",null,"spacemacs\uff0c\u662f\u4e00\u4e2a\u7ed9vimer\u7684Emacs\u3002"),(0,s.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,s.kt)("p",null,"spacemacs\u662f\u4e00\u4e2a\u4e13\u95e8\u7ed9\u90a3\u4e9b\u4e60\u60efvim\u7684\u64cd\u4f5c\uff0c\u540c\u65f6\u53c8\u5411\u5f80emacs\u7684\u6269\u5c55\u80fd\u529b\u7684\u4eba\u3002\u5b83\u975e\u5e38\u9002\u5408\u6211\u8fd9\u79cd\u6298\u817e\u8fc7vim\uff0c\u914d\u7f6e\u8fc7emacs\u7684\u4eba\uff0c\u4f46\u540c\u65f6\u4e5f\u6b22\u8fce\u4efb\u4f55\u6ca1\u6709\u57fa\u7840\u7684\u65b0\u4eba\u4f7f\u7528\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5b83\u662f\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684Emacs\uff01\u8fd9\u5bf9\u4e00\u4e2a\u6bd4\u5f88\u591a\u4eba\u5e74\u9f84\u90fd\u5927\u7684\u8f6f\u4ef6\u6765\u8bf4\u662f\u4e00\u4ef6\u6781\u5176\u4e0d\u5bb9\u6613\u7684\u4e8b\u60c5\u3002"),(0,s.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,s.kt)("p",null,"\u7531\u4e8e\u7b14\u8005\u81ea\u5df1\u5728linux\u5e73\u53f0\uff0c\u5e76\u6ca1\u6709windows\u5e73\u53f0\u7684\u7ecf\u9a8c\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\u4fbf\u4e0d\u732e\u4e11\u4e86\uff0c\u671f\u5f85\u5404\u4f4d\u8865\u5145\u3002\u53e6\u5916\uff0cwindows\u5e73\u53f0\u771f\u7684\u9700\u8981\u4e48\uff0c\u659c\u773c\u7785\u5411\u4e86Visual Studio\u3002"),(0,s.kt)("h3",{id:"emacs\u5b89\u88c5"},"Emacs\u5b89\u88c5"),(0,s.kt)("p",null,"\u5728*nix\u7cfb\u7edf\u4e2d\uff0c\u90fd\u4e0d\u4e00\u5b9a\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u4e86Emacs\uff0c\u5c31\u7b97\u5b89\u88c5\u4e86\uff0c\u4e5f\u4e0d\u4e00\u5b9a\u662f\u6700\u65b0\u7684\u7248\u672c\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u5404\u4f4d\u5378\u8f7d\u6389\u7cfb\u7edf\u81ea\u5e26\u7684Emacs\uff0c\u56e0\u4e3a\u4f60\u4e0d\u77e5\u9053\u7cfb\u7edf\u7ed9\u4f60\u5b89\u88c5\u7684\u662f\u4e2a\u4ec0\u4e48\u5947\u602a\u7684\u5b58\u5728\uff0c\u6700\u906d\u5fc3\u7684\uff0c\u6211\u78b0\u89c1\u8fc7\u53ea\u63d0\u4f9b\u9609\u5272\u7248Emacs\u7684linux\u53d1\u884c\u7248\u3002"),(0,s.kt)("p",null,"\u5efa\u8bae\u5404\u4f4d\u81ea\u5df1\u53bbemacs\u9879\u76ee\u4e3b\u9875\u4e0b\u8f7dEmacs-24.5\uff08\u672c\u4e66\u5199\u4f5c\u65f6\u7684\u6700\u65b0\u7248\uff09\u6781\u5176\u4ee5\u4e0a\u7248\u672c\uff0c\u7136\u540e\u4e0b\u8f7d\u4e0b\u6765\u6e90\u7801\u3002\u81f3\u4e8eEmacs\u7684\u5b89\u88c5\u4e5f\u975e\u5e38\u7b80\u5355\uff0clinux\u5e73\u53f0\u8001\u4e09\u6b65\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./configure\nmake\nsudo make install\n")),(0,s.kt)("p",null,"\u4ec0\u4e48\uff1f\u4f60\u6ca1\u6709make\uff1f\u6ca1\u6709GCC\uff1f\u7f3a\u5c11\u4f9d\u8d56\uff1f\n\u8bf7\u5b89\u88c5\u5b83\u4eec\u2026\u2026"),(0,s.kt)("h3",{id:"spacemacs\u5b89\u88c5"},"Spacemacs\u5b89\u88c5"),(0,s.kt)("p",null,"\u524d\u9762\u8bf4\u4e86,Spacemacs\u5c31\u662f\u4e2aEmacs\u7684\u914d\u7f6e\u6587\u4ef6\u5e93\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u975e\u5e38\u7b80\u5355\u7684\u65b9\u5f0f\u5b89\u88c5\u5b83\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d\nmv ~/.emacs ~/_emacs.backup\ncd ~/.emacs.d\necho $(git describe --tags $(git rev-list --tags --max-count=1)) | xargs git checkout\n")),(0,s.kt)("p",null,"\u5176\u4e2d\uff0c\u540e\u4e09\u884c\u662f\u7b14\u8005\u52a0\u7684\uff0c\u8fd9\u91cc\u5fc5\u987b\u8981\u5410\u69fd\u4e00\u4e0b\u7684\u662f\uff0cSpacemacs\u7684master\u5206\u652f\u5b9e\u9645\u4e0a\u662f\u6781\u5176\u843d\u540e\u800c\u4e14\u6709\u9519\u8bef\u7684\uff01\u5176\u76ee\u524d\u7684release\u90fd\u662f\u4ecedevelop\u5206\u652f\u4e0a\u6253\u7684tag\u3002"),(0,s.kt)("p",null,"\u56e0\u6b64\uff0c\u4e00\uff01\u5b9a\uff01\u4e0d\uff01\u8981\uff01\u7528\uff01\u4e3b\uff01\u5206\uff01\u652f\uff01"),(0,s.kt)("p",null,"\u6700\u540e\uff0c\u4e4b\u6240\u4ee5\u8981\u52a0\u6700\u540e\u4e00\u884c\uff0c\u8fd9\u662f\u7b14\u8005\u5b89\u88c5\u7684\u65f6\u5019\u7684release\u7684\u4e00\u4e2a\u5c0fbug\uff0c\u6ca1\u6709\u8fd9\u4e2a\u6587\u4ef6\u7684\u8bdd,emacs\u5e76\u4e0d\u4f1a\u987a\u5229\u7684\u5b8c\u6210\u521d\u59cb\u5316\u3002"),(0,s.kt)("p",null,"\u597d\u4e86\uff0c\u914d\u7f6e\u6587\u4ef6\u6211\u4eec\u5df2\u7ecf\u641e\u5b9a\u4e86\uff0c\u63a5\u4e0b\u6765\uff0c\u542f\u52a8\u4f60\u7684emacs\uff0cspacemacs\u4f1a\u81ea\u52a8\u7684\u53bb\u7f51\u4e0a\u4e0b\u8f7d\u4f60\u9700\u8981\u7684\u63d2\u4ef6\u5b89\u88c5\u5305\u3002\u53e6\u5916\uff0c\u80fd\u81ea\u5907\u68af\u5b50\u7684\u6700\u597d\uff0c\u56e0\u4e3a\u4f60\u8981\u4e0b\u7684\u4e1c\u897f\u4e0d\u5927\uff0c\u4f46\u662f\u8fd9\u4e2a\u7f51\u7edc\u786e\u5b9e\u6bd4\u8f83\u6349\u6025\u3002"),(0,s.kt)("h3",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),(0,s.kt)("p",null,"\u4e3a\u4e86\u8ba9Spacemacs\u652f\u6301Rust\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u70b9\u5c0f\u5c0f\u7684\u914d\u7f6e\u3002\u9996\u5148\uff0c\u8bf7\u53c2\u7167",(0,s.kt)("a",{parentName:"p",href:"/rust-docs/docs/editors/before"},"\u524d\u671f\u51c6\u5907"),"\uff0c\u5b89\u88c5\u597d\u4f60\u7684racer\u3002"),(0,s.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u5f3a\u70c8\u5efa\u8bae\u5c06racer\u7684\u73af\u5883\u53d8\u91cf\u52a0\u5165\u5230\u7cfb\u7edf\u53d8\u91cf\u4e2d(\u901a\u5e38\u4ed6\u4eec\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/profile/"),"\u91cc\u8fdb\u884c\u914d\u7f6e)\u5e76\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf\uff0c\u56e0\u4e3a\u771f\u7684\u6709\u5f88\u591a\u4eba\u76f4\u63a5\u70b9\u51fbemacs\u7684\u56fe\u6807\u542f\u52a8\u5b83\u7684\uff0c\u8fd9\u6837\u505a\u5f88\u53ef\u80fd\u5bfc\u81f4emacs\u5e76\u4e0d\u7ee7\u627f\u81ea\u5df1\u7684\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u662f\u5f88\u4ee4\u4eba\u65e0\u5948\u7684\u3002"),(0,s.kt)("h2",{id:"\u5b8c\u6210\u914d\u7f6e"},"\u5b8c\u6210\u914d\u7f6e"),(0,s.kt)("h3",{id:"\u4fee\u6539\u6807\u51c6\u7684spacemacs\u914d\u7f6e"},"\u4fee\u6539\u6807\u51c6\u7684Spacemacs\u914d\u7f6e\u3002"),(0,s.kt)("p",null,"Spacemacs\u6587\u6863\u4e2d\u63d0\u4f9b\u4e86\u4e00\u4efd\u6807\u51c6\u7684spacemacs",(0,s.kt)("a",{parentName:"p",href:"https://github.com/syl20bnr/spacemacs/blob/master/core/templates/.spacemacs.template"},"\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u52a0\u5165\u5230\u4f60\u81ea\u5df1\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"~/.spacemacs"),"\u6587\u4ef6\u4e2d\u3002"),(0,s.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u9700\u8981\u4fee\u6539\u7684\u662f\u5176\u5173\u4e8e\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u90e8\u5206\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lisp"},"(defun dotspacemacs/layers ()\n  \"Configuration Layers declaration.\nYou should not put any user code in this function besides modifying the variable\nvalues.\"\n  (setq-default\n   ;; Base distribution to use. This is a layer contained in the directory\n   ;; `+distribution'. For now available distributions are `spacemacs-base'\n   ;; or `spacemacs'. (default 'spacemacs)\n   dotspacemacs-distribution 'spacemacs\n   ;; List of additional paths where to look for configuration layers.\n   ;; Paths must have a trailing slash (i.e. `~/.mycontribs/')\n   dotspacemacs-configuration-layer-path '()\n   ;; List of configuration layers to load. If it is the symbol `all' instead\n   ;; of a list then all discovered layers will be installed.\n   dotspacemacs-configuration-layers\n   '(\n     ;; ----------------------------------------------------------------\n     ;; Example of useful layers you may want to use right away.\n     ;; Uncomment some layer names and press <SPC f e R> (Vim style) or\n     ;; <M-m f e R> (Emacs style) to install them.\n     ;; ----------------------------------------------------------------\n     auto-completion\n     better-defaults\n     git\n     spell-checking\n     syntax-checking\n     version-control\n     rust\n     )\n   ;; List of additional packages that will be installed without being\n   ;; wrapped in a layer. If you need some configuration for these\n   ;; packages then consider to create a layer, you can also put the\n   ;; configuration in `dotspacemacs/config'.\n   dotspacemacs-additional-packages '()\n   ;; A list of packages and/or extensions that will not be install and loaded.\n   dotspacemacs-excluded-packages '()\n   ;; If non-nil spacemacs will delete any orphan packages, i.e. packages that\n   ;; are declared in a layer which is not a member of\n   ;; the list `dotspacemacs-configuration-layers'. (default t)\n   dotspacemacs-delete-orphan-packages t))\n\n;; ...\n;; \u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u7701\u7565\n;; ...\n")),(0,s.kt)("p",null,"\u6ce8\u610f",(0,s.kt)("inlineCode",{parentName:"p"},"dotspacemacs-configuration-layers"),"\u7684\u914d\u7f6e\u548c\u6807\u51c6\u914d\u7f6e\u6587\u4ef6\u7684\u4e0d\u540c\u3002"),(0,s.kt)("p",null,"\u5c06\u914d\u7f6e\u6587\u4ef6\u4fdd\u5b58\uff0c\u7136\u540e\u91cd\u542f\u4f60\u7684emacs\uff0c\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u6309",(0,s.kt)("inlineCode",{parentName:"p"},"SPC f e R"),"\u6765\u5b8c\u6210\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\u7684\u76ee\u7684\uff0c\u7136\u540e\u4f60\u4f1a\u53d1\u73b0emacs\u4f1a\u5f00\u59cb\u4e0b\u4e00\u8f6e\u4e0b\u8f7d\uff0c\u7a0d\u7b49\u5176\u5b8c\u6210\u3002"),(0,s.kt)("p",null,"\u5728\u4e0a\u4e00\u6b65\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u5bf9Racer\u7684\u73af\u5883\u53d8\u91cf\u7684\u914d\u7f6e\uff0c\u6240\u4ee5\uff0c\u73b0\u5728\u4f60\u7684Spacemacs\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6210\u4e86\uff01\u8fd9\u79cd\u7b80\u4fbf\u7684\u914d\u7f6e\u5f62\u5f0f\uff0c\u51e0\u4e4e\u80fd\u548cAtom\u6297\u8861\u4e86\u3002"),(0,s.kt)("h3",{id:"\u6309\u952e\u7ed1\u5b9a"},"\u6309\u952e\u7ed1\u5b9a"),(0,s.kt)("p",null,"\u5982\u4e0b\uff0cspacemacs\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u51e0\u79cd\u6309\u952e\u7ed1\u5b9a\uff0c\u4f46\u662f\uff0c\u7b14\u8005\u5e76\u4e0d\u89c9\u5f97\u8fd9\u4e9b\u5f88\u597d\u7528\uff0c\u8fd8\u662f\u66f4\u559c\u6b22\u7528\u547d\u4ee4\u884c\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Key Binding"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"~SPC m c c~"),(0,s.kt)("td",{parentName:"tr",align:null},"compile project with Cargo")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"~SPC m c t~"),(0,s.kt)("td",{parentName:"tr",align:null},"run tests with Cargo")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"~SPC m c d~"),(0,s.kt)("td",{parentName:"tr",align:null},"generate documentation with Cargo")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"~SPC m c x~"),(0,s.kt)("td",{parentName:"tr",align:null},"execute the project with Cargo")))),(0,s.kt)("h2",{id:"\u5c1d\u8bd5"},"\u5c1d\u8bd5"),(0,s.kt)("p",null,"\u73b0\u5728\u5f00\u59cb\uff0c\u6211\u4eec\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2aCargo\u9879\u76ee\uff0c\u5e76\u4e14\u53bb\u4f7f\u7528\u5b83\u4e86\u3002\u4f60\u4f1a\u60ca\u8bb6\u7684\u53d1\u73b0racer/flycheck/company\u8fd9\u4e09\u4e2a\u63d2\u4ef6\u914d\u5408\u5728\u4e00\u8d77\u7684\u65f6\u5019\u662f\u90a3\u4e48\u7684\u548c\u8c10\u7b80\u5355\u3002"))}d.isMDXComponent=!0}}]);