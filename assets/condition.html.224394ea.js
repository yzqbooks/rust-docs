import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6761\u4EF6\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u5206\u652F" aria-hidden="true">#</a> \u6761\u4EF6\u5206\u652F</h1><ul><li>if</li><li>if let</li><li>match</li></ul><h2 id="if-\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#if-\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> if \u8868\u8FBE\u5F0F</h2><p>Rust \u4E2D\u7684 if \u8868\u8FBE\u5F0F\u57FA\u672C\u5C31\u662F\u5982\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// \u5F62\u5F0F 1</span>
<span class="token keyword">if</span> expr1 <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u5F62\u5F0F 2</span>
<span class="token keyword">if</span> expr1 <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u5F62\u5F0F 3</span>
<span class="token keyword">if</span> expr1 <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> expr2 <span class="token punctuation">{</span>
    <span class="token comment">// else if \u53EF\u591A\u91CD</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u76F8\u5BF9\u4E8E C \u7CFB\u8BED\u8A00\uFF0CRust \u7684 if \u8868\u8FBE\u5F0F\u7684\u663E\u8457\u7279\u70B9\u662F\uFF1A</p><ol><li>\u5224\u65AD\u6761\u4EF6\u4E0D\u7528\u5C0F\u62EC\u53F7\u62EC\u8D77\u6765\uFF1B</li><li>\u5B83\u662F\u8868\u8FBE\u5F0F\uFF0C\u800C\u4E0D\u662F\u8BED\u53E5\u3002</li></ol><p>\u9274\u4E8E\u4E0A\u8FF0\u7B2C\u4E8C\u70B9\uFF0C\u56E0\u4E3A\u662F\u8868\u8FBE\u5F0F\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5199\u51FA\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
    <span class="token number">10</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token number">15</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// y: i32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6216\u8005\u538B\u7F29\u6210\u4E00\u884C\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span> <span class="token number">10</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// y: i32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="if-let" tabindex="-1"><a class="header-anchor" href="#if-let" aria-hidden="true">#</a> if let</h2><p>\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u5E38\u5E38\u4F1A\u770B\u5230 <code>if let</code> \u6210\u5BF9\u51FA\u73B0\uFF0C\u8FD9\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A match \u7684\u7B80\u5316\u7528\u6CD5\u3002\u76F4\u63A5\u4E3E\u4F8B\u6765\u8BF4\u660E\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// \u8FD9\u91CC\u8F93\u51FA\u4E3A\uFF1A5</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token keyword">let</span> <span class="token class-name">Some</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token punctuation">{</span>
    y
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// z \u503C\u4E3A 5</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7B49\u4EF7\u4E8E</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">match</span> x <span class="token punctuation">{</span>
    <span class="token class-name">Some</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">None</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token keyword">match</span> x <span class="token punctuation">{</span>
    <span class="token class-name">Some</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">,</span>
    <span class="token class-name">None</span> <span class="token operator">=&gt;</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BBE\u8BA1\u8FD9\u4E2A\u7279\u6027\u7684\u76EE\u7684\u662F\uFF0C\u5728\u6761\u4EF6\u5224\u65AD\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u505A\u4E00\u6B21\u6A21\u5F0F\u5339\u914D\uFF0C\u65B9\u4FBF\u4EE3\u7801\u4E66\u5199\uFF0C\u4F7F\u4EE3\u7801\u66F4\u7D27\u51D1\u3002</p><h2 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h2><p>Rust \u4E2D\u6CA1\u6709\u7C7B\u4F3C\u4E8E C \u7684 <code>switch</code> \u5173\u952E\u5B57\uFF0C\u4F46\u5B83\u6709\u7528\u4E8E\u6A21\u5F0F\u5339\u914D\u7684 <code>match</code>\uFF0C\u80FD\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD\uFF0C\u5E76\u4E14\u5F3A\u5927\u592A\u591A\u3002</p><p>match \u7684\u4F7F\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u4E3E\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">match</span> x <span class="token punctuation">{</span>
    <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">4</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;four&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">5</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;five&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    _ <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;something else&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6CE8\u610F\uFF0Cmatch \u4E5F\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\u3002match \u540E\u9762\u4F1A\u4E13\u95E8\u8BBA\u8FF0\uFF0C\u8BF7\u53C2\u89C1 <strong>\u6A21\u5F0F\u5339\u914D</strong> \u8FD9\u4E00\u7AE0\u3002</p>`,22);function e(t,o){return p}var r=s(a,[["render",e],["__file","condition.html.vue"]]);export{r as default};
