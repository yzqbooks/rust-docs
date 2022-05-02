import{r as c,a as d,b as a,d as o,F as n,c as r,e,o as s}from"./app.a489c551.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const i={},l=r('<h1 id="atom" tabindex="-1"><a class="header-anchor" href="#atom" aria-hidden="true">#</a> Atom</h1><p>\u672C\u6587\u662Frust\u7684Atom\u7F16\u8F91\u5668\u914D\u7F6E\u3002 \u6A2A\u5411\u5BF9\u6BD4\u4E00\u4E0B\uFF0C\u4E0D\u5F97\u4E0D\u8BF4\uFF0CAtom\u65E0\u8BBA\u5728\u6613\u7528\u6027\u8FD8\u662F\u754C\u9762\u4E0A\u90FD\u6BD4\u524D\u8F88\u4EEC\u8981\u597D\u7684\u5F88\u591A\uFF0C\u5BF9\u4E8ERust\u7684\u914D\u7F6E\uFF0C\u4E5F\u662F\u57FA\u672C\u4E0A\u53EF\u4EE5\u505A\u5230\u5F00\u7BB1\u5373\u7528\u3002 \u867D\u7136\u672C\u6587\u72EC\u5360\u4E00\u5C0F\u8282\uFF0C\u4F46\u662F\u5176\u5B9E\u80FD\u5199\u7684\u4E1C\u897F\u4E5F\u5C31\u4E86\u4E86\u3002</p><ul><li><a href="#%E8%87%AA%E8%A1%8C%E9%85%8D%E7%BD%AE">\u81EA\u884C\u914D\u7F6E</a></li><li><a href="#tokamak">\u4F7F\u7528tokamak</a></li></ul><h2 id="\u81EA\u884C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u884C\u914D\u7F6E" aria-hidden="true">#</a> \u81EA\u884C\u914D\u7F6E</h2><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h2><p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u4E00\u4E2A\u53EF\u6267\u884C\u7684rustc\u7F16\u8BD1\u5668\uFF0C\u4E00\u4E2Acargo\u7A0B\u5E8F\uFF0C\u4E00\u4E2A\u5DF2\u7ECF\u7F16\u8BD1\u597D\u7684racer\u7A0B\u5E8F\u548C\u4E00\u4EFD\u5DF2\u7ECF\u89E3\u538B\u597D\u7684rust\u6E90\u7801\u3002 \u6211\u4EEC\u5047\u5B9A\u4F60\u5DF2\u7ECF\u5C06\u8FD9\u4E09\u4E2A\u7A0B\u5E8F\u5B89\u88C5\u5B8C\u6BD5\uFF0C\u5E76\u4E14\u80FD\u591F\u81EA\u7531\u7684\u4ECE\u547D\u4EE4\u884C\u91CC\u8C03\u7528\u4ED6\u4EEC\u3002</p>',6),m=e("\u53E6\u5916\uFF0C\u672C\u6587\u4E0D\u8BB2\u89E3\u5982\u4F55\u5B89\u88C5Atom\uFF0C\u9700\u8981\u65B0\u5B89\u88C5\u7684\u540C\u5B66\u8BF7\u81EA\u884C\u524D\u5F80"),p={href:"https://github.com/atom/atom",target:"_blank",rel:"noopener noreferrer"},u=e("\u9879\u76EE\u4E3B\u9875"),_=e("\u5B89\u88C5\u3002"),k=r('<p>ps:\u65E0\u8BBA\u662Fwindows\u7528\u6237\u8FD8\u662F*nix\u7528\u6237\u90FD\u9700\u8981\u5C06\u4EE5\u4E0A\u4E09\u4E2A\u7A0B\u5E8F\u52A0\u5165\u4F60\u7684PATH(Windows\u4E0B\u53EBPath)\u73AF\u5883\u53D8\u91CF\u91CC\u3002</p><h2 id="\u9700\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\u5305" aria-hidden="true">#</a> \u9700\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\u5305</h2><p>\u6253\u5F00Atom\uFF0C\u6309Ctrl+Shift+p\uFF0C\u641C\u7D22preference\uFF0C\u6253\u5F00Atom\u7684\u914D\u7F6E\u4E2D\u5FC3\uFF0C\u9009\u62E9install\u9009\u9879\u5361\u3002</p><p>\u4F9D\u6B21\u5B89\u88C5<code>rust-api-docs-helper</code>/<code>racer</code>/<code>language-rust</code>/<code>linter-rust</code>/<code>linter</code>\u3002</p><p>\u8FD9\u91CC\u8981\u5355\u72EC\u8BF4\u7684\u4E00\u4E2A\u5C31\u662Flinter\uFF0C\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u7684lint\u7EC4\u4EF6\u5305\uFF0Catom\u7684\u5F88\u591A\u4EE5linter\u4E3A\u524D\u7F00\u7684\u5305\u90FD\u4F1A\u4F9D\u8D56\u8FD9\u4E2A\u5305\uFF0C\u4F46\u662FAtom\u5E76\u4E0D\u4F1A\u4E3A\u6211\u4EEC\u81EA\u52A8\u7684\u5B89\u88C5\uFF0C\u56E0\u6B64\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u53BB\u5B89\u88C5\u3002</p><h2 id="\u4E00\u70B9\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u70B9\u914D\u7F6E" aria-hidden="true">#</a> \u4E00\u70B9\u914D\u7F6E</h2><p>\u4EE5\u4E0A\uFF0C\u6211\u4EEC\u5B89\u88C5\u597D\u4E86\u51E0\u4E2A\u7EC4\u4EF6\u5305\uFF0C\u4F46\u662F\u4E0D\u8981\u7740\u6025\u53BB\u6253\u5F00\u4E00\u4E2ARust\u6587\u4EF6\u3002\u4F60\u53EF\u80FD\u8FD8\u9700\u8981\u4E00\u70B9\u70B9\u7684\u914D\u7F6E\u3002\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5728\u914D\u7F6E\u4E2D\u5FC3\u91CC\u6253\u5F00<code>Packages</code>\u9009\u9879\u5361\uFF0C\u5728<code>Installed Packages</code>\u91CC\u641C\u7D22racer\uFF0C\u5E76\u70B9\u51FB\u5176<code>Setting</code>\u3002</p><p>\u8FD9\u91CC\u9700\u8981\u5C06racer\u7684\u53EF\u6267\u884C\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u586B\u5165<code>Path to the Racer executable</code>\u91CC\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5C06rust\u6E90\u7801\u6587\u4EF6\u5939\u4E0B\u7684src\u76EE\u5F55\u52A0\u5165\u5230<code>Path to the Rust source code directory</code>\u91CC\u3002</p><h2 id="\u5B8C\u6210\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210\u5B89\u88C5" aria-hidden="true">#</a> \u5B8C\u6210\u5B89\u88C5</h2><p>\u597D\u4E86\uFF0C\u5C31\u662F\u8FD9\u4E48\u7B80\u5355\u3002\u4F60\u73B0\u5728\u53EF\u4EE5\u6253\u5F00\u4EFB\u610F\u4E00\u4E2Arust\u6587\u4EF6\u5C31\u4F1A\u53D1\u73B0\u6E90\u7801\u9AD8\u4EAE\u5DF2\u7ECF\u9ED8\u8BA4\u6253\u5F00\u4E86\uFF0C\u7F16\u8F91\u4E00\u4E0B\uFF0Cracer\u4E5F\u80FD\u81EA\u52A8\u8865\u5168\uFF0C<em>\u5982\u679C\u4E0D\u80FD</em>\uFF0C\u5C1D\u8BD5\u4E00\u4E0B\u7528<code>F3</code>\u952E\u6765\u663E\u5F0F\u5730\u547C\u51FAracer\u7684\u8865\u5168\u3002</p><h2 id="tokamak" tabindex="-1"><a class="header-anchor" href="#tokamak" aria-hidden="true">#</a> tokamak</h2>',11),f={href:"https://github.com/vertexclique/tokamak",target:"_blank",rel:"noopener noreferrer"},x=e("tokamak"),b=e(" \u662F\u4E00\u4E2A\u4F7F atom \u6447\u8EAB\u4E00\u53D8\u4E3A rust IDE \u7684 atom \u63D2\u4EF6. \u5B89\u88C5\u540E atom \u5373\u5177\u6709\u8BED\u6CD5\u9AD8\u4EAE, \u4EE3\u7801\u8865\u5168\u4E0E Lint \u7B49\u529F\u80FD, \u800C\u4E14\u8FD8\u6709\u4E2A\u4E0D\u9519\u7684\u754C\u9762, \u770B\u8D77\u6765\u786E\u5B9E\u50CF\u4E2A IDE. \u4F60\u53EF\u4EE5\u5728 atom \u4E2D\u641C\u7D22 tokamak \u5E76\u5B89\u88C5\u5B83.");function A(g,E){const t=c("ExternalLinkIcon");return s(),d(n,null,[l,a("p",null,[m,a("a",p,[u,o(t)]),_]),k,a("p",null,[a("a",f,[x,o(t)]),b])],64)}var v=h(i,[["render",A],["__file","atom.html.vue"]]);export{v as default};