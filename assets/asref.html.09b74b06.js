import{c as s}from"./app.a489c551.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="asref-\u548C-asmut" tabindex="-1"><a class="header-anchor" href="#asref-\u548C-asmut" aria-hidden="true">#</a> AsRef \u548C AsMut</h1><p><code>std::convert</code> \u4E0B\u9762\uFF0C\u8FD8\u6709\u53E6\u5916\u4E24\u4E2A Trait\uFF0C<code>AsRef/AsMut</code>\uFF0C\u5B83\u4EEC\u529F\u80FD\u662F\u914D\u5408\u6CDB\u578B\uFF0C\u5728\u6267\u884C\u5F15\u7528\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\u3002\u8FD9\u80FD\u591F\u4F7F\u4E00\u4E9B\u573A\u666F\u7684\u4EE3\u7801\u5B9E\u73B0\u5F97\u6E05\u6670\u6F02\u4EAE\uFF0C\u5927\u5BB6\u65B9\u4FBF\u5F00\u53D1\u3002</p><h2 id="asref-t" tabindex="-1"><a class="header-anchor" href="#asref-t" aria-hidden="true">#</a> <code>AsRef&lt;T&gt;</code></h2><p><code>AsRef</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6CD5 <code>.as_ref()</code>\u3002</p><p>\u5BF9\u4E8E\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>T</code> \u7684\u5BF9\u8C61 <code>foo</code>\uFF0C\u5982\u679C <code>T</code> \u5B9E\u73B0\u4E86 <code>AsRef&lt;U&gt;</code>\uFF0C\u90A3\u4E48\uFF0C<code>foo</code> \u53EF\u6267\u884C <code>.as_ref()</code> \u64CD\u4F5C\uFF0C\u5373 <code>foo.as_ref()</code>\u3002\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>&amp;U</code> \u7684\u65B0\u5F15\u7528\u3002</p><p>\u6CE8\uFF1A</p><ol><li>\u4E0E <code>Into&lt;T&gt;</code> \u4E0D\u540C\u7684\u662F\uFF0C<code>AsRef&lt;T&gt;</code> \u53EA\u662F\u7C7B\u578B\u8F6C\u6362\uFF0C<code>foo</code> \u5BF9\u8C61\u672C\u8EAB\u6CA1\u6709\u88AB\u6D88\u8017\uFF1B</li><li><code>T: AsRef&lt;U&gt;</code> \u4E2D\u7684 <code>T</code>\uFF0C\u53EF\u4EE5\u63A5\u53D7 \u8D44\u6E90\u62E5\u6709\u8005\uFF08owned\uFF09\u7C7B\u578B\uFF0C\u5171\u4EAB\u5F15\u7528\uFF08shared referrence\uFF09\u7C7B\u578B \uFF0C\u53EF\u53D8\u5F15\u7528\uFF08mutable referrence\uFF09\u7C7B\u578B\u3002</li></ol><p>\u4E0B\u9762\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">is_hello</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">AsRef</span><span class="token operator">&lt;</span><span class="token keyword">str</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token function">is_hello</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">is_hello</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u56E0\u4E3A <code>String</code> \u548C <code>&amp;str</code> \u90FD\u5B9E\u73B0\u4E86 <code>AsRef&lt;str&gt;</code>\u3002</p><h2 id="asmut-t" tabindex="-1"><a class="header-anchor" href="#asmut-t" aria-hidden="true">#</a> <code>AsMut&lt;T&gt;</code></h2><p><code>AsMut&lt;T&gt;</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6CD5 <code>.as_mut()</code>\u3002\u5B83\u662F <code>AsRef&lt;T&gt;</code> \u7684\u53EF\u53D8\uFF08mutable\uFF09\u5F15\u7528\u7248\u672C\u3002</p><p>\u5BF9\u4E8E\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>T</code> \u7684\u5BF9\u8C61 <code>foo</code>\uFF0C\u5982\u679C <code>T</code> \u5B9E\u73B0\u4E86 <code>AsMut&lt;U&gt;</code>\uFF0C\u90A3\u4E48\uFF0C<code>foo</code> \u53EF\u6267\u884C <code>.as_mut()</code> \u64CD\u4F5C\uFF0C\u5373 <code>foo.as_mut()</code>\u3002\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>&amp;mut U</code> \u7684\u53EF\u53D8\uFF08mutable\uFF09\u5F15\u7528\u3002</p><p>\u6CE8\uFF1A\u5728\u8F6C\u6362\u7684\u8FC7\u7A0B\u4E2D\uFF0C<code>foo</code> \u4F1A\u88AB\u53EF\u53D8\uFF08mutable\uFF09\u501F\u7528\u3002</p>`,14);function o(t,c){return e}var d=n(a,[["render",o],["__file","asref.html.vue"]]);export{d as default};