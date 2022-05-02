import{c as n}from"./app.a489c551.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h1 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h1><p>Rust \u4EE3\u7801\u6587\u4EF6\u4E2D\uFF0C\u901A\u5E38\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 3 \u79CD\u6CE8\u91CA\u3002</p><ul><li>\u884C\u6CE8\u91CA</li><li>\u6587\u6863\u6CE8\u91CA</li><li>\u6A21\u5757\u6CE8\u91CA</li></ul><h2 id="\u884C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u884C\u6CE8\u91CA" aria-hidden="true">#</a> \u884C\u6CE8\u91CA</h2><p><code>//</code> \u540E\u7684\uFF0C\u76F4\u5230\u884C\u5C3E\uFF0C\u90FD\u5C5E\u4E8E\u6CE8\u91CA\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u7A0B\u5E8F\u7684\u884C\u4E3A\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7ED1\u5B9A</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u53E6\u4E00\u4E2A\u7ED1\u5B9A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u6587\u6863\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6CE8\u91CA" aria-hidden="true">#</a> \u6587\u6863\u6CE8\u91CA</h2><p>\u6587\u6863\u6CE8\u91CA\u4F7F\u7528 <code>///</code>\uFF0C\u4E00\u822C\u7528\u4E8E\u51FD\u6570\u6216\u7ED3\u6784\u4F53\uFF08\u5B57\u6BB5\uFF09\u7684\u8BF4\u660E\uFF0C\u7F6E\u4E8E\u8981\u8BF4\u660E\u7684\u5BF9\u8C61\u4E0A\u65B9\u3002\u6587\u6863\u6CE8\u91CA\u5185\u90E8\u53EF\u4F7F\u7528markdown\u683C\u5F0F\u7684\u6807\u8BB0\u8BED\u6CD5\uFF0C\u53EF\u7528\u4E8E rustdoc \u5DE5\u5177\u7684\u81EA\u52A8\u6587\u6863\u63D0\u53D6\u3002</p><pre><code>/// Adds one to the number given.
///
/// # Examples
///
/// \`\`\`
/// let five = 5;
///
/// assert_eq!(6, add_one(5));
/// # fn add_one(x: i32) -&gt; i32 {
/// #     x + 1
/// # }
/// \`\`\`
fn add_one(x: i32) -&gt; i32 {
    x + 1
}
</code></pre><h2 id="\u6A21\u5757\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u6CE8\u91CA" aria-hidden="true">#</a> \u6A21\u5757\u6CE8\u91CA</h2><p>\u6A21\u5757\u6CE8\u91CA\u4F7F\u7528 <code>//!</code>\uFF0C\u7528\u4E8E\u8BF4\u660E\u672C\u6A21\u5757\u7684\u529F\u80FD\u3002\u4E00\u822C\u7F6E\u4E8E\u6A21\u5757\u6587\u4EF6\u7684\u5934\u90E8\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">//! # The Rust Standard Library</span>
<span class="token comment">//!</span>
<span class="token comment">//! The Rust Standard Library provides the essential runtime</span>
<span class="token comment">//! functionality for building portable Rust software.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>PS: \u76F8\u5BF9\u4E8E <code>///</code>, <code>//!</code> \u7528\u6765\u6CE8\u91CA\u5305\u542B\u5B83\u7684\u9879\uFF08\u4E5F\u5C31\u662F\u8BF4\uFF0Ccrate\uFF0C\u6A21\u5757\u6216\u8005\u51FD\u6570\uFF09\uFF0C\u800C\u4E0D\u662F\u4F4D\u4E8E\u5B83\u4E4B\u540E\u7684\u9879\u3002</p><h2 id="\u5176\u5B83-\u517C\u5BB9c\u8BED\u8A00\u7684\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83-\u517C\u5BB9c\u8BED\u8A00\u7684\u6CE8\u91CA" aria-hidden="true">#</a> \u5176\u5B83\uFF1A\u517C\u5BB9C\u8BED\u8A00\u7684\u6CE8\u91CA</h2><p>Rust \u4E5F\u652F\u6301\u517C\u5BB9 C \u7684\u5757\u6CE8\u91CA\u5199\u6CD5\uFF1A<code>/* */</code>\u3002\u4F46\u662F\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u8FD9\u79CD\u6CE8\u91CA\u98CE\u683C\uFF08\u4F1A\u88AB\u9119\u89C6\u7684\uFF09\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">/*
    let x = 42;
    println!(&quot;{}&quot;, x);
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,16);function r(t,c){return s}var l=e(a,[["render",r],["__file","comment.html.vue"]]);export{l as default};
