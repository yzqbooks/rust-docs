import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u76EE\u5F55\u64CD\u4F5C-\u7B80\u5355grep" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u64CD\u4F5C-\u7B80\u5355grep" aria-hidden="true">#</a> \u76EE\u5F55\u64CD\u4F5C:\u7B80\u5355grep</h1><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u5B9E\u73B0\u4E86\u901A\u8FC7<code>Command</code>\u8C03\u7528subprocess\u3002\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u81EA\u5DF1\u7684\u4EE3\u7801\u53BB\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684grep\u3002\u5F53\u7136\u4E86\uFF0C\u8FD9\u79CD\u57FA\u7840\u7684\u5DE5\u5177\u4F60\u662F\u80FD\u627E\u5230\u6E90\u7801\u7684\uFF0C\u800C\u6211\u4EEC\u7684\u5B9E\u73B0\u4E5F\u5E76\u4E0D\u50CF\u771F\u6B63\u7684grep\u90A3\u6837\u6CE8\u91CD\u6548\u7387\uFF0C\u672C\u8282\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u5728\u4E8E\u6F14\u793A\u6807\u51C6\u5E93API\u7684\u4F7F\u7528\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u5F53\u524D\u76EE\u5F55\u8FDB\u884C\u9012\u5F52\uFF0C\u904D\u5386\uFF0C\u6BCF\u5F53\u67E5\u627E\u5230\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u56DE\u8C03\u4E00\u4E2A\u51FD\u6570\u3002</p><p>\u4E8E\u662F\uFF0C\u6211\u4EEC\u5C31\u6709\u4E86\u8FD9\u4E48\u4E2A\u51FD\u6570\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>env<span class="token punctuation">::</span></span>args<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>io<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token class-name">DirEntry</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>path<span class="token punctuation">::</span></span><span class="token class-name">Path</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">visit_dirs</span><span class="token punctuation">(</span>dir<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Path</span><span class="token punctuation">,</span> pattern<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">,</span> cb<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token class-name">DirEntry</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">metadata</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> entry <span class="token keyword">in</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_dir</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> entry <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">metadata</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token function">visit_dirs</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>entry<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">cb</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>entry<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> entry <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_dir</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>entry<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6211\u4EEC\u6709\u4E86\u8FD9\u6837\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u6709\u540C\u5B66\u53EF\u80FD\u89C9\u5F97\u8FD9\u4EE3\u7801\u773C\u719F\u3002\u8FD9\u4E0D\u662F\u6807\u51C6\u5E93\u91CC\u7684\u4F8B\u5B50\u6539\u4E86\u4E00\u4E0B\u4E48\uFF1F</p><p>.</p><p>.</p><p>.</p><p>\u662F\u554A\uFF01</p><p>\u597D\u4E86\uFF0C\u7EE7\u7EED\uFF0C\u6211\u4EEC\u9700\u8981\u8BFB\u53D6\u6BCF\u4E2A\u67E5\u5230\u7684\u6587\u4EF6\uFF0C\u540C\u65F6\u5224\u65AD\u6BCF\u4E00\u884C\u91CC\u6709\u6CA1\u6709\u6240\u67E5\u627E\u7684\u5185\u5BB9\u3002 \u6211\u4EEC\u7528\u4E00\u4E2ABufferIO\u53BB\u8BFB\u53D6\u5404\u4E2A\u6587\u4EF6\uFF0C\u540C\u65F6\u7528String\u7684\u81EA\u5E26\u65B9\u6CD5\u6765\u5224\u65AD\u5185\u5BB9\u662F\u5426\u5B58\u5728\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">call_back</span><span class="token punctuation">(</span>de<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">DirEntry</span><span class="token punctuation">,</span> pt<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> f <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span>de<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> buf <span class="token operator">=</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">BufReader</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">BufRead</span><span class="token punctuation">::</span><span class="token function">lines</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> line <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">unwrap_or</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> line<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>pt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6700\u540E\uFF0C\u6211\u4EEC\u5C06\u6574\u4E2A\u51FD\u6570\u8C03\u7528\u8D77\u6765\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>env<span class="token punctuation">::</span></span>args<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>io<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token class-name">File</span><span class="token punctuation">,</span> <span class="token class-name">DirEntry</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>path<span class="token punctuation">::</span></span><span class="token class-name">Path</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">visit_dirs</span><span class="token punctuation">(</span>dir<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Path</span><span class="token punctuation">,</span> pattern<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">,</span> cb<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token class-name">DirEntry</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">metadata</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> entry <span class="token keyword">in</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_dir</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> entry <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">metadata</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token function">visit_dirs</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>entry<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">cb</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>entry<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> entry <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token namespace">fs<span class="token punctuation">::</span></span><span class="token function">read_dir</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>entry<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">call_back</span><span class="token punctuation">(</span>de<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">DirEntry</span><span class="token punctuation">,</span> pt<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> f <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span>de<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> buf <span class="token operator">=</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">BufReader</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">BufRead</span><span class="token punctuation">::</span><span class="token function">lines</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> line <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">unwrap_or</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> line<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>pt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u8C03\u7528grep\u547D\u4EE4\u641C\u7D22\u6587\u4EF6</span>
<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> arg_iter <span class="token operator">=</span> <span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    arg_iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// panic if there is no one</span>
    <span class="token keyword">let</span> pattern <span class="token operator">=</span> arg_iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap_or</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pt <span class="token operator">=</span>  arg_iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap_or</span><span class="token punctuation">(</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pt <span class="token operator">=</span> <span class="token class-name">Path</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">visit_dirs</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pt<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pattern<span class="token punctuation">,</span> <span class="token operator">&amp;</span>call_back<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u8C03\u7528\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  demo git:(master) \u2717 ./target/debug/demo &quot;fn main()&quot; ../
fn main() {
fn main() { }
fn main() {
    pub fn main() {
    pub fn main() {}
fn main() {
    pub fn main() {
    pub fn main() {}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,16);function t(o,c){return p}var l=s(a,[["render",t],["__file","fs-and-path.html.vue"]]);export{l as default};
