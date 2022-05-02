import{r as e,a as o,b as s,d as t,F as p,e as n,c,o as l}from"./app.a489c551.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h1",{id:"\u95ED\u5305\u7684\u5B9E\u73B0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u95ED\u5305\u7684\u5B9E\u73B0","aria-hidden":"true"},"#"),n(" \u95ED\u5305\u7684\u5B9E\u73B0")],-1),k=n("Rust \u7684\u95ED\u5305\u5B9E\u73B0\u4E0E\u5176\u5B83\u8BED\u8A00\u6709\u4E9B\u8BB8\u4E0D\u540C\u3002\u5B83\u4EEC\u5B9E\u9645\u4E0A\u662Ftrait\u7684\u8BED\u6CD5\u7CD6\u3002\u5728\u8FD9\u4EE5\u524D\u4F60\u4F1A\u5E0C\u671B\u9605\u8BFB"),d={href:"https://doc.rust-lang.org/stable/book/traits.html",target:"_blank",rel:"noopener noreferrer"},m=n("trait\u7AE0\u8282"),b=n("\uFF0C\u548C"),g={href:"https://doc.rust-lang.org/stable/book/trait-objects.html",target:"_blank",rel:"noopener noreferrer"},_=n("trait\u5BF9\u8C61"),f=n("\u3002"),h=c(`<p>\u90FD\u7406\u89E3\u5417\uFF1F\u5F88\u597D\u3002</p><p>\u7406\u89E3\u95ED\u5305\u5E95\u5C42\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u5173\u952E\u6709\u70B9\u5947\u602A\uFF1A\u4F7F\u7528<code>()</code>\u8C03\u7528\u51FD\u6570\uFF0C\u50CF<code>foo()</code>\uFF0C\u662F\u4E00\u4E2A\u53EF\u91CD\u8F7D\u7684\u8FD0\u7B97\u7B26\u3002\u5230\u6B64\uFF0C\u5176\u5B83\u7684\u4E00\u5207\u90FD\u4F1A\u660E\u4E86\u3002\u5728Rust\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528trait\u7CFB\u7EDF\u6765\u91CD\u8F7D\u8FD0\u7B97\u7B26\u3002\u8C03\u7528\u51FD\u6570\u4E5F\u4E0D\u4F8B\u5916\u3002\u6211\u4EEC\u6709\u4E09\u4E2Atrait\u6765\u5206\u522B\u91CD\u8F7D\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code># <span class="token keyword">mod</span> <span class="token module-declaration namespace">foo</span> <span class="token punctuation">{</span>
<span class="token keyword">pub</span> <span class="token keyword">trait</span> <span class="token type-definition class-name">Fn</span><span class="token operator">&lt;</span><span class="token class-name">Args</span><span class="token operator">&gt;</span> <span class="token punctuation">:</span> <span class="token class-name">FnMut</span><span class="token operator">&lt;</span><span class="token class-name">Args</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">extern</span> <span class="token string">&quot;rust-call&quot;</span> <span class="token keyword">fn</span> <span class="token function-definition function">call</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">,</span> args<span class="token punctuation">:</span> <span class="token class-name">Args</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token class-name">Output</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">pub</span> <span class="token keyword">trait</span> <span class="token type-definition class-name">FnMut</span><span class="token operator">&lt;</span><span class="token class-name">Args</span><span class="token operator">&gt;</span> <span class="token punctuation">:</span> <span class="token class-name">FnOnce</span><span class="token operator">&lt;</span><span class="token class-name">Args</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">extern</span> <span class="token string">&quot;rust-call&quot;</span> <span class="token keyword">fn</span> <span class="token function-definition function">call_mut</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">,</span> args<span class="token punctuation">:</span> <span class="token class-name">Args</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token class-name">Output</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">pub</span> <span class="token keyword">trait</span> <span class="token type-definition class-name">FnOnce</span><span class="token operator">&lt;</span><span class="token class-name">Args</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> <span class="token type-definition class-name">Output</span><span class="token punctuation">;</span>

    <span class="token keyword">extern</span> <span class="token string">&quot;rust-call&quot;</span> <span class="token keyword">fn</span> <span class="token function-definition function">call_once</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> args<span class="token punctuation">:</span> <span class="token class-name">Args</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token class-name">Output</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
# <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4F60\u4F1A\u6CE8\u610F\u5230\u8FD9\u4E9B trait \u4E4B\u95F4\u7684\u4E9B\u8BB8\u533A\u522B\uFF0C\u4E0D\u8FC7\u4E00\u4E2A\u5927\u7684\u533A\u522B\u662F<code>self</code>\uFF1A<code>Fn</code>\u83B7\u53D6<code>&amp;self</code>\uFF0C<code>FnMut</code>\u83B7\u53D6<code>&amp;mut self</code>\uFF0C\u800C<code>FnOnce</code>\u83B7\u53D6<code>self</code>\u3002\u8FD9\u5305\u542B\u4E86\u6240\u67093\u79CD\u901A\u8FC7\u901A\u5E38\u51FD\u6570\u8C03\u7528\u8BED\u6CD5\u7684<code>self</code>\u3002\u4E0D\u8FC7\u6211\u4EEC\u5C06\u5B83\u4EEC\u5206\u5728 3 \u4E2A trait \u91CC\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u7684 1 \u4E2A\u3002\u8FD9\u7ED9\u4E86\u6211\u4EEC\u5927\u91CF\u7684\u5BF9\u4E8E\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u54EA\u79CD\u95ED\u5305\u7684\u63A7\u5236\u3002</p><p>\u95ED\u5305\u7684<code>|| {}</code>\u8BED\u6CD5\u662F\u4E0A\u9762 3 \u4E2A trait \u7684\u8BED\u6CD5\u7CD6\u3002Rust \u5C06\u4F1A\u4E3A\u4E86\u73AF\u5883\u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53\uFF0C<code>impl</code>\u5408\u9002\u7684 trait\uFF0C\u5E76\u4F7F\u7528\u5B83\u3002</p>`,5),y={id:"\u8FD9\u90E8\u5206\u5F15\u7528\u81EAthe-rust-programming-language\u4E2D\u6587\u7248",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#\u8FD9\u90E8\u5206\u5F15\u7528\u81EAthe-rust-programming-language\u4E2D\u6587\u7248","aria-hidden":"true"},"#",-1),x=n(" \u8FD9\u90E8\u5206\u5F15\u7528\u81EA"),F={href:"https://github.com/KaiserY/rust-book-chinese/blob/master/content/Closures%20%E9%97%AD%E5%8C%85.md",target:"_blank",rel:"noopener noreferrer"},A=n("The Rust Programming Language\u4E2D\u6587\u7248");function q(v,O){const a=e("ExternalLinkIcon");return l(),o(p,null,[i,s("p",null,[k,s("a",d,[m,t(a)]),b,s("a",g,[_,t(a)]),f]),h,s("blockquote",null,[s("h3",y,[w,x,s("a",F,[A,t(a)])])])],64)}var R=r(u,[["render",q],["__file","implementation.html.vue"]]);export{R as default};