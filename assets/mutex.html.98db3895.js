import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mutex-\u4E0E-rwlock" tabindex="-1"><a class="header-anchor" href="#mutex-\u4E0E-rwlock" aria-hidden="true">#</a> Mutex \u4E0E RwLock</h1><h2 id="mutex" tabindex="-1"><a class="header-anchor" href="#mutex" aria-hidden="true">#</a> Mutex</h2><p><code>Mutex</code> \u610F\u4E3A\u4E92\u65A5\u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u62A4\u5171\u4EAB\u6570\u636E\u3002Mutex \u6709\u4E0B\u9762\u51E0\u4E2A\u7279\u5F81\uFF1A</p><ol><li><code>Mutex</code> \u4F1A\u7B49\u5F85\u83B7\u53D6\u9501\u4EE4\u724C(token)\uFF0C\u5728\u7B49\u5F85\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u963B\u585E\u7EBF\u7A0B\u3002\u76F4\u5230\u9501\u4EE4\u724C\u5F97\u5230\u3002\u540C\u65F6\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u7684 <code>Mutex</code> \u5BF9\u8C61\u83B7\u53D6\u5230\u9501\uFF1B</li><li><code>Mutex</code> \u901A\u8FC7 <code>.lock()</code> \u6216 <code>.try_lock()</code> \u6765\u5C1D\u8BD5\u5F97\u5230\u9501\u4EE4\u724C\uFF0C\u88AB\u4FDD\u62A4\u7684\u5BF9\u8C61\uFF0C\u5FC5\u987B\u901A\u8FC7\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u7684 <code>RAII</code> \u5B88\u536B\u6765\u8C03\u7528\uFF0C\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C\uFF1B</li><li>\u5F53 <code>RAII</code> \u5B88\u536B\u4F5C\u7528\u57DF\u7ED3\u675F\u540E\uFF0C\u9501\u4F1A\u81EA\u52A8\u89E3\u5F00\uFF1B</li><li>\u5728\u591A\u7EBF\u7A0B\u4E2D\uFF0C<code>Mutex</code> \u4E00\u822C\u548C <code>Arc</code> \u914D\u5408\u4F7F\u7528\u3002</li></ol><p>\u793A\u4F8B\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>sync<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Arc</span><span class="token punctuation">,</span> <span class="token class-name">Mutex</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>thread<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>sync<span class="token punctuation">::</span>mpsc<span class="token punctuation">::</span></span>channel<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">N</span><span class="token punctuation">:</span> <span class="token keyword">usize</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">// Spawn a few threads to increment a shared variable (non-atomically), and</span>
<span class="token comment">// let the main thread know once all increments are done.</span>
<span class="token comment">//</span>
<span class="token comment">// Here we&#39;re using an Arc to share memory among threads, and the data inside</span>
<span class="token comment">// the Arc is protected with a mutex.</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token class-name">Arc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">Mutex</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">(</span>tx<span class="token punctuation">,</span> rx<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token number">10</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> tx<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tx<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token namespace">thread<span class="token punctuation">::</span></span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">{</span>
        <span class="token comment">// The shared state can only be accessed once the lock is held.</span>
        <span class="token comment">// Our non-atomic increment is safe because we&#39;re the only thread</span>
        <span class="token comment">// which can access the shared state when the lock is held.</span>
        <span class="token comment">//</span>
        <span class="token comment">// We unwrap() the return value to assert that we are not expecting</span>
        <span class="token comment">// threads to ever fail while holding the lock.</span>
        <span class="token keyword">let</span> <span class="token keyword">mut</span> data <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token operator">*</span>data <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token operator">*</span>data <span class="token operator">==</span> <span class="token class-name">N</span> <span class="token punctuation">{</span>
            tx<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// the lock is unlocked here when \`data\` goes out of scope.</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

rx<span class="token punctuation">.</span><span class="token function">recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="lock-\u4E0E-try-lock-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#lock-\u4E0E-try-lock-\u7684\u533A\u522B" aria-hidden="true">#</a> <code>lock</code> \u4E0E <code>try_lock</code> \u7684\u533A\u522B</h3><p><code>.lock()</code> \u65B9\u6CD5\uFF0C\u4F1A\u7B49\u5F85\u9501\u4EE4\u724C\uFF0C\u7B49\u5F85\u7684\u65F6\u5019\uFF0C\u4F1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u3002\u800C <code>.try_lock()</code> \u65B9\u6CD5\uFF0C\u53EA\u662F\u505A\u4E00\u6B21\u5C1D\u8BD5\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u3002</p><p>\u5F53 <code>.try_lock()</code> \u6CA1\u6709\u83B7\u53D6\u5230\u9501\u4EE4\u724C\u65F6\uFF0C\u4F1A\u8FD4\u56DE <code>Err</code>\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u8981\u4F7F\u7528 <code>.try_lock()</code>\uFF0C\u9700\u8981\u5BF9\u8FD4\u56DE\u503C\u505A\u4ED4\u7EC6\u5904\u7406\uFF08\u6BD4\u5982\uFF0C\u5728\u4E00\u4E2A\u5FAA\u73AF\u68C0\u67E5\u4E2D\uFF09\u3002</p><p><strong>\u70B9\u8BC4</strong>\uFF1ARust \u7684 Mutex \u8BBE\u8BA1\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E0D\u540C\u4E8E C \u8BED\u8A00\u4E2D\u7684\u81EA\u65CB\u9501\u7528\u4E24\u6761\u5206\u5F00\u7684\u8BED\u53E5\u7684\u5B9E\u73B0\uFF0C\u66F4\u5B89\u5168\uFF0C\u66F4\u7F8E\u89C2\uFF0C\u4E5F\u66F4\u597D\u7BA1\u7406\u3002</p><h2 id="rwlock" tabindex="-1"><a class="header-anchor" href="#rwlock" aria-hidden="true">#</a> RwLock</h2><p><code>RwLock</code> \u7FFB\u8BD1\u6210 <code>\u8BFB\u5199\u9501</code>\u3002\u5B83\u7684\u7279\u70B9\u662F\uFF1A</p><ol><li>\u540C\u65F6\u5141\u8BB8\u591A\u4E2A\u8BFB\uFF0C\u6700\u591A\u53EA\u80FD\u6709\u4E00\u4E2A\u5199\uFF1B</li><li>\u8BFB\u548C\u5199\u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF1B</li></ol><p>\u6BD4\u5982\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>sync<span class="token punctuation">::</span></span><span class="token class-name">RwLock</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> lock <span class="token operator">=</span> <span class="token class-name">RwLock</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// many reader locks can be held at once</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> r1 <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> r2 <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token operator">*</span>r1<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token operator">*</span>r2<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// read locks are dropped at this point</span>

<span class="token comment">// only one write lock may be held, however</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> w <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>w <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token operator">*</span>w<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// write lock is dropped here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u8BFB\u5199\u9501\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u9501\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u8BFB\u5199\u9501\u7684\u65B9\u6CD5</h3><ol><li><code>.read()</code></li><li><code>.try_read()</code></li><li><code>.write()</code></li><li><code>.try_write()</code></li></ol><p>\u6CE8\u610F\u9700\u8981\u5BF9 <code>.try_read()</code> \u548C <code>.try_write()</code> \u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u5224\u65AD\u3002</p>`,18);function e(t,c){return p}var u=s(a,[["render",e],["__file","mutex.html.vue"]]);export{u as default};
