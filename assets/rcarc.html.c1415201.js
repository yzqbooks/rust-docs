import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="rc-\u548C-arc" tabindex="-1"><a class="header-anchor" href="#rc-\u548C-arc" aria-hidden="true">#</a> Rc \u548C Arc</h1><p>Rust \u5EFA\u7ACB\u5728\u6240\u6709\u6743\u4E4B\u4E0A\u7684\u8FD9\u4E00\u5957\u673A\u5236\uFF0C\u5B83\u8981\u6C42\u4E00\u4E2A\u8D44\u6E90\u540C\u4E00\u65F6\u523B\u6709\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A\u62E5\u6709\u6240\u6709\u6743\u7684\u7ED1\u5B9A\u6216 <code>&amp;mut</code> \u5F15\u7528\uFF0C\u8FD9\u5728\u5927\u90E8\u5206\u7684\u60C5\u51B5\u4E0B\u4FDD\u8BC1\u4E86\u5185\u5B58\u7684\u5B89\u5168\u3002\u4F46\u662F\u8FD9\u6837\u7684\u8BBE\u8BA1\u662F\u76F8\u5F53\u4E25\u683C\u7684\uFF0C\u5728\u53E6\u5916\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B83\u9650\u5236\u4E86\u7A0B\u5E8F\u7684\u4E66\u5199\uFF0C\u65E0\u6CD5\u5B9E\u73B0\u67D0\u4E9B\u529F\u80FD\u3002\u56E0\u6B64\uFF0CRust \u5728 std \u5E93\u4E2D\u63D0\u4F9B\u4E86\u989D\u5916\u7684\u63AA\u65BD\u6765\u8865\u5145\u6240\u6709\u6743\u673A\u5236\uFF0C\u4EE5\u5E94\u5BF9\u66F4\u5E7F\u6CDB\u7684\u573A\u666F\u3002</p><p>\u9ED8\u8BA4 Rust \u4E2D\uFF0C\u5BF9\u4E00\u4E2A\u8D44\u6E90\uFF0C\u540C\u4E00\u65F6\u523B\uFF0C\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u6240\u6709\u6743\u62E5\u6709\u8005\u3002<code>Rc</code> \u548C <code>Arc</code> \u4F7F\u7528\u5F15\u7528\u8BA1\u6570\u7684\u65B9\u6CD5\uFF0C\u8BA9\u7A0B\u5E8F\u5728\u540C\u4E00\u65F6\u523B\uFF0C\u5B9E\u73B0\u540C\u4E00\u8D44\u6E90\u7684\u591A\u4E2A\u6240\u6709\u6743\u62E5\u6709\u8005\uFF0C\u591A\u4E2A\u62E5\u6709\u8005\u5171\u4EAB\u8D44\u6E90\u3002</p><h2 id="rc" tabindex="-1"><a class="header-anchor" href="#rc" aria-hidden="true">#</a> Rc</h2><p><code>Rc</code> \u7528\u4E8E\u540C\u4E00\u7EBF\u7A0B\u5185\u90E8\uFF0C\u901A\u8FC7 <code>use std::rc::Rc</code> \u6765\u5F15\u5165\u3002\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p><ol><li>\u7528 <code>Rc</code> \u5305\u88C5\u8D77\u6765\u7684\u7C7B\u578B\u5BF9\u8C61\uFF0C\u662F <code>immutable</code> \u7684\uFF0C\u5373 \u4E0D\u53EF\u53D8\u7684\u3002\u5373\u4F60\u65E0\u6CD5\u4FEE\u6539 <code>Rc&lt;T&gt;</code> \u4E2D\u7684 <code>T</code> \u5BF9\u8C61\uFF0C\u53EA\u80FD\u8BFB\uFF1B</li><li>\u4E00\u65E6\u6700\u540E\u4E00\u4E2A\u62E5\u6709\u8005\u6D88\u5931\uFF0C\u5219\u8D44\u6E90\u4F1A\u88AB\u81EA\u52A8\u56DE\u6536\uFF0C\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u662F\u5728\u7F16\u8BD1\u671F\u5C31\u786E\u5B9A\u4E0B\u6765\u7684\uFF1B</li><li><code>Rc</code> \u53EA\u80FD\u7528\u4E8E\u540C\u4E00\u7EBF\u7A0B\u5185\u90E8\uFF0C\u4E0D\u80FD\u7528\u4E8E\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5BF9\u8C61\u5171\u4EAB\uFF08\u4E0D\u80FD\u8DE8\u7EBF\u7A0B\u4F20\u9012\uFF09\uFF1B</li><li><code>Rc</code> \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u5B83\u4E0D\u5F71\u54CD\u5305\u88F9\u5BF9\u8C61\u7684\u65B9\u6CD5\u8C03\u7528\u5F62\u5F0F\uFF08\u5373\u4E0D\u5B58\u5728\u5148\u89E3\u5F00\u5305\u88F9\u518D\u8C03\u7528\u503C\u8FD9\u4E00\u8BF4\uFF09\u3002</li></ol><p>\u4F8B\u5B50\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> five <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> five2 <span class="token operator">=</span> five<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> five3 <span class="token operator">=</span> five<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="rc-weak" tabindex="-1"><a class="header-anchor" href="#rc-weak" aria-hidden="true">#</a> Rc Weak</h2><p><code>Weak</code> \u901A\u8FC7 <code>use std::rc::Weak</code> \u6765\u5F15\u5165\u3002</p><p><code>Rc</code> \u662F\u4E00\u4E2A\u5F15\u7528\u8BA1\u6570\u6307\u9488\uFF0C\u800C <code>Weak</code> \u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u4F46\u4E0D\u589E\u52A0\u5F15\u7528\u8BA1\u6570\uFF0C\u662F <code>Rc</code> \u7684 weak \u7248\u3002\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p><ol><li>\u53EF\u8BBF\u95EE\uFF0C\u4F46\u4E0D\u62E5\u6709\u3002\u4E0D\u589E\u52A0\u5F15\u7528\u8BA1\u6570\uFF0C\u56E0\u6B64\uFF0C\u4E0D\u4F1A\u5BF9\u8D44\u6E90\u56DE\u6536\u7BA1\u7406\u9020\u6210\u5F71\u54CD\uFF1B</li><li>\u53EF\u7531 <code>Rc&lt;T&gt;</code> \u8C03\u7528 <code>downgrade</code> \u65B9\u6CD5\u800C\u8F6C\u6362\u6210 <code>Weak&lt;T&gt;</code>\uFF1B</li><li><code>Weak&lt;T&gt;</code> \u53EF\u4EE5\u4F7F\u7528 <code>upgrade</code> \u65B9\u6CD5\u8F6C\u6362\u6210 <code>Option&lt;Rc&lt;T&gt;&gt;</code>\uFF0C\u5982\u679C\u8D44\u6E90\u5DF2\u7ECF\u88AB\u91CA\u653E\uFF0C\u5219 Option \u503C\u4E3A <code>None</code>\uFF1B</li><li>\u5E38\u7528\u4E8E\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\u3002</li></ol><p>\u4F8B\u5B50\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> five <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> weak_five <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">downgrade</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>five<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> strong_five<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token class-name">Rc</span><span class="token operator">&lt;</span>_<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> weak_five<span class="token punctuation">.</span><span class="token function">upgrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="arc" tabindex="-1"><a class="header-anchor" href="#arc" aria-hidden="true">#</a> Arc</h2><p><code>Arc</code> \u662F\u539F\u5B50\u5F15\u7528\u8BA1\u6570\uFF0C\u662F <code>Rc</code> \u7684\u591A\u7EBF\u7A0B\u7248\u672C\u3002<code>Arc</code> \u901A\u8FC7 <code>std::sync::Arc</code> \u5F15\u5165\u3002</p><p>\u5B83\u7684\u7279\u70B9\uFF1A</p><ol><li><code>Arc</code> \u53EF\u8DE8\u7EBF\u7A0B\u4F20\u9012\uFF0C\u7528\u4E8E\u8DE8\u7EBF\u7A0B\u5171\u4EAB\u4E00\u4E2A\u5BF9\u8C61\uFF1B</li><li>\u7528 <code>Arc</code> \u5305\u88F9\u8D77\u6765\u7684\u7C7B\u578B\u5BF9\u8C61\uFF0C\u5BF9\u53EF\u53D8\u6027\u6CA1\u6709\u8981\u6C42\uFF1B</li><li>\u4E00\u65E6\u6700\u540E\u4E00\u4E2A\u62E5\u6709\u8005\u6D88\u5931\uFF0C\u5219\u8D44\u6E90\u4F1A\u88AB\u81EA\u52A8\u56DE\u6536\uFF0C\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u662F\u5728\u7F16\u8BD1\u671F\u5C31\u786E\u5B9A\u4E0B\u6765\u7684\uFF1B</li><li><code>Arc</code> \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u5B83\u4E0D\u5F71\u54CD\u5305\u88F9\u5BF9\u8C61\u7684\u65B9\u6CD5\u8C03\u7528\u5F62\u5F0F\uFF08\u5373\u4E0D\u5B58\u5728\u5148\u89E3\u5F00\u5305\u88F9\u518D\u8C03\u7528\u503C\u8FD9\u4E00\u8BF4\uFF09\uFF1B</li><li><code>Arc</code> \u5BF9\u4E8E\u591A\u7EBF\u7A0B\u7684\u5171\u4EAB\u72B6\u6001<strong>\u51E0\u4E4E\u662F\u5FC5\u987B\u7684</strong>\uFF08\u51CF\u5C11\u590D\u5236\uFF0C\u63D0\u9AD8\u6027\u80FD\uFF09\u3002</li></ol><p>\u793A\u4F8B\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>sync<span class="token punctuation">::</span></span><span class="token class-name">Arc</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>thread<span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> numbers<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span>_<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">100u32</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> shared_numbers <span class="token operator">=</span> <span class="token class-name">Arc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token number">10</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> child_numbers <span class="token operator">=</span> shared_numbers<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token namespace">thread<span class="token punctuation">::</span></span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> local_numbers <span class="token operator">=</span> <span class="token operator">&amp;</span>child_numbers<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token comment">// Work with the local numbers</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="arc-weak" tabindex="-1"><a class="header-anchor" href="#arc-weak" aria-hidden="true">#</a> Arc Weak</h3><p>\u4E0E <code>Rc</code> \u7C7B\u4F3C\uFF0C<code>Arc</code> \u4E5F\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684 <code>Weak</code> \u7C7B\u578B\uFF0C\u4ECE <code>std::sync::Weak</code> \u5F15\u5165\u3002</p><p>\u610F\u4E49\u4E0E\u7528\u6CD5\u4E0E <code>Rc Weak</code> \u57FA\u672C\u4E00\u81F4\uFF0C\u4E0D\u540C\u7684\u70B9\u662F\u8FD9\u662F\u591A\u7EBF\u7A0B\u7684\u7248\u672C\u3002\u6545\u4E0D\u518D\u8D58\u8FF0\u3002</p><h2 id="\u4E00\u4E2A\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a> \u4E00\u4E2A\u4F8B\u5B50</h2><p>\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u8868\u8FF0\u7684\u662F\u5982\u4F55\u5B9E\u73B0\u591A\u4E2A\u5BF9\u8C61\u540C\u65F6\u5F15\u7528\u53E6\u5916\u4E00\u4E2A\u5BF9\u8C61\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Owner</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Gadget</span> <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    owner<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">Owner</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Create a reference counted Owner.</span>
    <span class="token keyword">let</span> gadget_owner <span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">Owner</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>
        <span class="token class-name">Owner</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Gadget Man&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Create Gadgets belonging to gadget_owner. To increment the reference</span>
    <span class="token comment">// count we clone the \`Rc&lt;T&gt;\` object.</span>
    <span class="token keyword">let</span> gadget1 <span class="token operator">=</span> <span class="token class-name">Gadget</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> owner<span class="token punctuation">:</span> gadget_owner<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> gadget2 <span class="token operator">=</span> <span class="token class-name">Gadget</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> owner<span class="token punctuation">:</span> gadget_owner<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">drop</span><span class="token punctuation">(</span>gadget_owner<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Despite dropping gadget_owner, we&#39;re still able to print out the name</span>
    <span class="token comment">// of the Owner of the Gadgets. This is because we&#39;ve only dropped the</span>
    <span class="token comment">// reference count object, not the Owner it wraps. As long as there are</span>
    <span class="token comment">// other \`Rc&lt;T&gt;\` objects pointing at the same Owner, it will remain</span>
    <span class="token comment">// allocated. Notice that the \`Rc&lt;T&gt;\` wrapper around Gadget.owner gets</span>
    <span class="token comment">// automatically dereferenced for us.</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Gadget {} owned by {}&quot;</span><span class="token punctuation">,</span> gadget1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> gadget1<span class="token punctuation">.</span>owner<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Gadget {} owned by {}&quot;</span><span class="token punctuation">,</span> gadget2<span class="token punctuation">.</span>id<span class="token punctuation">,</span> gadget2<span class="token punctuation">.</span>owner<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// At the end of the method, gadget1 and gadget2 get destroyed, and with</span>
    <span class="token comment">// them the last counted references to our Owner. Gadget Man now gets</span>
    <span class="token comment">// destroyed as well.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,26);function p(t,c){return e}var u=s(a,[["render",p],["__file","rcarc.html.vue"]]);export{u as default};