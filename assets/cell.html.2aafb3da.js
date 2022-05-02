import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="cell-refcell" tabindex="-1"><a class="header-anchor" href="#cell-refcell" aria-hidden="true">#</a> Cell, RefCell</h1><p>\u524D\u9762\u6211\u4EEC\u63D0\u5230\uFF0CRust \u901A\u8FC7\u5176\u6240\u6709\u6743\u673A\u5236\uFF0C\u4E25\u683C\u63A7\u5236\u62E5\u6709\u548C\u501F\u7528\u5173\u7CFB\uFF0C\u6765\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u5B89\u5168\uFF0C\u5E76\u4E14\u8FD9\u79CD\u5B89\u5168\u662F\u5728\u7F16\u8BD1\u671F\u53EF\u8BA1\u7B97\u3001\u53EF\u9884\u6D4B\u7684\u3002\u4F46\u662F\u8FD9\u79CD\u4E25\u683C\u7684\u63A7\u5236\uFF0C\u6709\u65F6\u4E5F\u4F1A\u5E26\u6765\u7075\u6D3B\u6027\u7684\u4E27\u5931\uFF0C\u6709\u7684\u573A\u666F\u4E0B\u751A\u81F3\u8FD8\u6EE1\u8DB3\u4E0D\u4E86\u9700\u6C42\u3002</p><p>\u56E0\u6B64\uFF0CRust \u6807\u51C6\u5E93\u4E2D\uFF0C\u8BBE\u8BA1\u4E86\u8FD9\u6837\u4E00\u4E2A\u7CFB\u7EDF\u7684\u7EC4\u4EF6\uFF1A<code>Cell</code>, <code>RefCell</code>\uFF0C\u5B83\u4EEC\u5F25\u8865\u4E86 Rust \u6240\u6709\u6743\u673A\u5236\u5728\u7075\u6D3B\u6027\u4E0A\u548C\u67D0\u4E9B\u573A\u666F\u4E0B\u7684\u4E0D\u8DB3\u3002\u540C\u65F6\uFF0C\u53C8\u6CA1\u6709\u6253\u7834 Rust \u7684\u6838\u5FC3\u8BBE\u8BA1\u3002\u5B83\u4EEC\u7684\u51FA\u73B0\uFF0C\u4F7F\u5F97 Rust \u9769\u547D\u6027\u7684\u8BED\u8A00\u7406\u8BBA\u8BBE\u8BA1\u66F4\u52A0\u5B8C\u6574\uFF0C\u66F4\u52A0\u5B9E\u7528\u3002</p><p>\u5177\u4F53\u662F\u56E0\u4E3A\uFF0C\u5B83\u4EEC\u63D0\u4F9B\u4E86 <code>\u5185\u90E8\u53EF\u53D8\u6027</code>\uFF08\u76F8\u5BF9\u4E8E\u6807\u51C6\u7684 <code>\u7EE7\u627F\u53EF\u53D8\u6027</code> \u6765\u8BB2\u7684\uFF09\u3002</p><p>\u901A\u5E38\uFF0C\u6211\u4EEC\u8981\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5FC5\u987B</p><ol><li>\u6210\u4E3A\u5B83\u7684\u62E5\u6709\u8005\uFF0C\u5E76\u4E14\u58F0\u660E <code>mut</code>\uFF1B</li><li>\u6216 \u4EE5 <code>&amp;mut</code> \u7684\u5F62\u5F0F\uFF0C\u501F\u7528\uFF1B</li></ol><p>\u800C\u901A\u8FC7 <code>Cell</code>, <code>RefCell</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u4FEE\u6539\u91CC\u9762\u7684\u5BF9\u8C61\u3002\u800C\u4E0D\u53D7\u7F16\u8BD1\u671F\u9759\u6001\u501F\u7528\u89C4\u5219\u675F\u7F1A\u3002</p><h2 id="cell" tabindex="-1"><a class="header-anchor" href="#cell" aria-hidden="true">#</a> <code>Cell</code></h2><p><code>Cell</code> \u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ol><li><code>Cell&lt;T&gt;</code> \u53EA\u80FD\u7528\u4E8E <code>T</code> \u5B9E\u73B0\u4E86 <code>Copy</code> \u7684\u60C5\u51B5\uFF1B</li></ol><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> <code>.get()</code></h3><p><code>.get()</code> \u65B9\u6CD5\uFF0C\u8FD4\u56DE\u5185\u90E8\u503C\u7684\u4E00\u4E2A\u62F7\u8D1D\u3002\u6BD4\u5982\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">Cell</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">Cell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> five <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> <code>.set()</code></h3><p><code>.set()</code> \u65B9\u6CD5\uFF0C\u66F4\u65B0\u503C\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">Cell</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">Cell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="refcell" tabindex="-1"><a class="header-anchor" href="#refcell" aria-hidden="true">#</a> <code>RefCell</code></h2><p>\u76F8\u5BF9\u4E8E <code>Cell</code> \u53EA\u80FD\u5305\u88F9\u5B9E\u73B0\u4E86 <code>Copy</code> \u7684\u7C7B\u578B\uFF0C<code>RefCell</code> \u7528\u4E8E\u66F4\u666E\u904D\u7684\u60C5\u51B5\uFF08\u5176\u5B83\u60C5\u51B5\u90FD\u7528 <code>RefCell</code>\uFF09\u3002</p><p>\u76F8\u5BF9\u4E8E\u6807\u51C6\u60C5\u51B5\u7684 <code>\u9759\u6001\u501F\u7528</code>\uFF0C<code>RefCell</code> \u5B9E\u73B0\u4E86 <code>\u8FD0\u884C\u65F6\u501F\u7528</code>\uFF0C\u8FD9\u4E2A\u501F\u7528\u662F\u4E34\u65F6\u7684\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u7F16\u8BD1\u5668\u5BF9 <code>RefCell</code> \u4E2D\u7684\u5185\u5BB9\uFF0C\u4E0D\u4F1A\u505A\u9759\u6001\u501F\u7528\u68C0\u67E5\uFF0C\u4E5F\u610F\u5473\u7740\uFF0C\u51FA\u4E86\u4EC0\u4E48\u95EE\u9898\uFF0C\u7528\u6237\u81EA\u5DF1\u8D1F\u8D23\u3002</p><p><code>RefCell</code> \u7684\u7279\u70B9\uFF1A</p><ol><li>\u5728\u4E0D\u786E\u5B9A\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5B9E\u73B0\u4E86 <code>Copy</code> \u65F6\uFF0C\u76F4\u63A5\u9009 <code>RefCell</code>\uFF1B</li><li>\u5982\u679C\u88AB\u5305\u88F9\u5BF9\u8C61\uFF0C\u540C\u65F6\u88AB\u53EF\u53D8\u501F\u7528\u4E86\u4E24\u6B21\uFF0C\u5219\u4F1A\u5BFC\u81F4\u7EBF\u7A0B\u5D29\u6E83\u3002\u6240\u4EE5\u9700\u8981\u7528\u6237\u81EA\u884C\u5224\u65AD\uFF1B</li><li><code>RefCell</code> \u53EA\u80FD\u7528\u4E8E\u7EBF\u7A0B\u5185\u90E8\uFF0C\u4E0D\u80FD\u8DE8\u7EBF\u7A0B\uFF1B</li><li><code>RefCell</code> \u5E38\u5E38\u4E0E <code>Rc</code> \u914D\u5408\u4F7F\u7528\uFF08\u90FD\u662F\u5355\u7EBF\u7A0B\u5185\u90E8\u4F7F\u7528\uFF09\uFF1B</li></ol><p>\u6211\u4EEC\u6765\u770B\u5B9E\u4F8B\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>collections<span class="token punctuation">::</span></span><span class="token class-name">HashMap</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> shared_map<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span>_<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shared_map<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;africa&quot;</span><span class="token punctuation">,</span> <span class="token number">92388</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shared_map<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;kyoto&quot;</span><span class="token punctuation">,</span> <span class="token number">11837</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shared_map<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;piccadilly&quot;</span><span class="token punctuation">,</span> <span class="token number">11826</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shared_map<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;marbles&quot;</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4ECE\u4E0A\u4F8B\u53EF\u770B\u51FA\uFF0C\u7528\u4E86 <code>RefCell</code> \u540E\uFF0C\u5916\u9762\u662F <code>\u4E0D\u53EF\u53D8\u5F15\u7528</code> \u7684\u60C5\u51B5\uFF0C\u4E00\u6837\u5730\u53EF\u4EE5\u4FEE\u6539\u88AB\u5305\u88F9\u7684\u5BF9\u8C61\u3002</p><p>\u5E38\u7528\u65B9\u6CD5</p><h3 id="borrow" tabindex="-1"><a class="header-anchor" href="#borrow" aria-hidden="true">#</a> <code>.borrow()</code></h3><p>\u4E0D\u53EF\u53D8\u501F\u7528\u88AB\u5305\u88F9\u503C\u3002\u540C\u65F6\u53EF\u5B58\u5728\u591A\u4E2A\u4E0D\u53EF\u53D8\u501F\u7528\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> borrowed_five <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> borrowed_five2 <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u4F1A\u5D29\u6E83\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>thread<span class="token punctuation">;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token namespace">thread<span class="token punctuation">::</span></span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> m <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">let</span> b <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this causes a panic</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property">assert!</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">is_err</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="borrow-mut" tabindex="-1"><a class="header-anchor" href="#borrow-mut" aria-hidden="true">#</a> <code>.borrow_mut()</code></h3><p>\u53EF\u53D8\u501F\u7528\u88AB\u5305\u88F9\u503C\u3002\u540C\u65F6\u53EA\u80FD\u6709\u4E00\u4E2A\u53EF\u53D8\u501F\u7528\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> borrowed_five <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u4F1A\u5D29\u6E83\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>thread<span class="token punctuation">;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token namespace">thread<span class="token punctuation">::</span></span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> m <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">let</span> b <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this causes a panic</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property">assert!</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">is_err</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="into-inner" tabindex="-1"><a class="header-anchor" href="#into-inner" aria-hidden="true">#</a> <code>.into_inner()</code></h3><p>\u53D6\u51FA\u5305\u88F9\u503C\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> five <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">into_inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4E00\u4E2A\u7EFC\u5408\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u7EFC\u5408\u793A\u4F8B" aria-hidden="true">#</a> \u4E00\u4E2A\u7EFC\u5408\u793A\u4F8B</h2><p>\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u8868\u8FF0\u7684\u662F\u5982\u4F55\u5B9E\u73B0\u4E24\u4E2A\u5BF9\u8C61\u7684\u5FAA\u73AF\u5F15\u7528\u3002\u7EFC\u5408\u6F14\u793A\u4E86 <code>Rc</code>, <code>Weak</code>, <code>RefCell</code> \u7684\u7528\u6CD5</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Rc</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>rc<span class="token punctuation">::</span></span><span class="token class-name">Weak</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>cell<span class="token punctuation">::</span></span><span class="token class-name">RefCell</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Owner</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    gadgets<span class="token punctuation">:</span> <span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Weak</span><span class="token operator">&lt;</span><span class="token class-name">Gadget</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5176\u4ED6\u5B57\u6BB5</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Gadget</span> <span class="token punctuation">{</span>
    id<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>
    owner<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">Owner</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5176\u4ED6\u5B57\u6BB5</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u53EF\u8BA1\u6570\u7684Owner\u3002</span>
    <span class="token comment">// \u6CE8\u610F\u6211\u4EEC\u5C06gadgets\u8D4B\u7ED9\u4E86Owner\u3002</span>
    <span class="token comment">// \u4E5F\u5C31\u662F\u5728\u8FD9\u4E2A\u7ED3\u6784\u4F53\u91CC\uFF0C gadget_owner\u5305\u542Bgadets</span>
    <span class="token keyword">let</span> gadget_owner <span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">Owner</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>
        <span class="token class-name">Owner</span> <span class="token punctuation">{</span>
            name<span class="token punctuation">:</span> <span class="token string">&quot;Gadget Man&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            gadgets<span class="token punctuation">:</span> <span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">Vec</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9996\u5148\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E24\u4E2Agadget\uFF0C\u4ED6\u4EEC\u5206\u522B\u6301\u6709 gadget_owner \u7684\u4E00\u4E2A\u5F15\u7528\u3002</span>
    <span class="token keyword">let</span> gadget1 <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">Gadget</span><span class="token punctuation">{</span>id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> owner<span class="token punctuation">:</span> gadget_owner<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> gadget2 <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">Gadget</span><span class="token punctuation">{</span>id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> owner<span class="token punctuation">:</span> gadget_owner<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6211\u4EEC\u5C06\u4ECEgadget_owner\u7684gadgets\u5B57\u6BB5\u4E2D\u6301\u6709\u5176\u53EF\u53D8\u5F15\u7528</span>
    <span class="token comment">// \u7136\u540E\u5C06\u4E24\u4E2Agadget\u7684Weak\u5F15\u7528\u4F20\u7ED9owner\u3002</span>
    gadget_owner<span class="token punctuation">.</span>gadgets<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">downgrade</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gadget1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gadget_owner<span class="token punctuation">.</span>gadgets<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">downgrade</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gadget2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386 gadget_owner\u7684gadgets\u5B57\u6BB5</span>
    <span class="token keyword">for</span> gadget_opt <span class="token keyword">in</span> gadget_owner<span class="token punctuation">.</span>gadgets<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// gadget_opt \u662F\u4E00\u4E2A Weak&lt;Gadget&gt; \u3002 \u56E0\u4E3A weak \u6307\u9488\u4E0D\u80FD\u4FDD\u8BC1\u4ED6\u6240\u5F15\u7528\u7684\u5BF9\u8C61</span>
        <span class="token comment">// \u4ECD\u7136\u5B58\u5728\u3002\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u663E\u5F0F\u7684\u8C03\u7528 upgrade() \u6765\u901A\u8FC7\u5176\u8FD4\u56DE\u503C(Option&lt;_&gt;)\u6765\u5224</span>
        <span class="token comment">// \u65AD\u5176\u6240\u6307\u5411\u7684\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u3002</span>
        <span class="token comment">// \u5F53\u7136\uFF0C\u8FD9\u4E2AOption\u4E3ANone\u7684\u65F6\u5019\u8FD9\u4E2A\u5F15\u7528\u539F\u5BF9\u8C61\u5C31\u4E0D\u5B58\u5728\u4E86\u3002</span>
        <span class="token keyword">let</span> gadget <span class="token operator">=</span> gadget_opt<span class="token punctuation">.</span><span class="token function">upgrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Gadget {} owned by {}&quot;</span><span class="token punctuation">,</span> gadget<span class="token punctuation">.</span>id<span class="token punctuation">,</span> gadget<span class="token punctuation">.</span>owner<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5728main\u51FD\u6570\u7684\u6700\u540E\uFF0C gadget_owner, gadget1\u548Cdaget2\u90FD\u88AB\u9500\u6BC1\u3002</span>
    <span class="token comment">// \u5177\u4F53\u662F\uFF0C\u56E0\u4E3A\u8FD9\u51E0\u4E2A\u7ED3\u6784\u4F53\u4E4B\u95F4\u6CA1\u6709\u4E86\u5F3A\u5F15\u7528\uFF08\`Rc&lt;T&gt;\`\uFF09\uFF0C\u6240\u4EE5\uFF0C\u5F53\u4ED6\u4EEC\u9500\u6BC1\u7684\u65F6\u5019\u3002</span>
    <span class="token comment">// \u9996\u5148 gadget1\u548Cgadget2\u88AB\u9500\u6BC1\u3002</span>
    <span class="token comment">// \u7136\u540E\u56E0\u4E3Agadget_owner\u7684\u5F15\u7528\u6570\u91CF\u4E3A0\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u88AB\u9500\u6BC1\u4E86\u3002</span>
    <span class="token comment">// \u5FAA\u73AF\u5F15\u7528\u95EE\u9898\u4E5F\u5C31\u907F\u514D\u4E86</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>`,43);function e(t,c){return p}var u=s(a,[["render",e],["__file","cell.html.vue"]]);export{u as default};
