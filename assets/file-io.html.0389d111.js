import{r as t,a as o,b as n,d as e,F as c,c as s,e as a,o as l}from"./app.a489c551.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=s(`<h1 id="\u6587\u4EF6\u8F93\u5165\u4E0E\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8F93\u5165\u4E0E\u8F93\u51FA" aria-hidden="true">#</a> \u6587\u4EF6\u8F93\u5165\u4E0E\u8F93\u51FA</h1><p>\u6587\u4EF6 <code>std::fs::File</code> \u672C\u8EAB\u5B9E\u73B0\u4E86 <code>Read</code> \u548C <code>Write</code> trait\uFF0C\u6240\u4EE5\u6587\u4EF6\u7684\u8F93\u5165\u8F93\u51FA\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u8981\u5F97\u5230\u4E00\u4E2A <code>File</code> \u7C7B\u578B\u5B9E\u4F8B\u5C31\u53EF\u4EE5\u8C03\u7528\u8BFB\u5199\u63A5\u53E3\u8FDB\u884C\u6587\u4EF6\u8F93\u5165\u4E0E\u8F93\u51FA\u64CD\u4F5C\u4E86\u3002\u800C\u8981\u5F97\u5230 <code>File</code> \u5C31\u5F97\u8BA9\u64CD\u4F5C\u7CFB\u7EDF\u6253\u5F00(open)\u6216\u65B0\u5EFA(create)\u4E00\u4E2A\u6587\u4EF6\u3002\u8FD8\u662F\u62FF\u4F8B\u5B50\u6765\u8BF4\u660E</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span></span>io<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>io<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>

<span class="token comment">// create file and write something</span>
<span class="token keyword">fn</span> <span class="token function-definition function">create_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">,</span> buf<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> <span class="token keyword">mut</span> f <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">create</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// read from file to String</span>
<span class="token keyword">fn</span> <span class="token function-definition function">read_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">str</span><span class="token punctuation">,</span> buf<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token namespace">io<span class="token punctuation">::</span></span><span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> <span class="token keyword">mut</span> f <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span><span class="token operator">!</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">read_to_string</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> <span class="token keyword">mut</span> buf <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">match</span> <span class="token function">create_file</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token string">b&quot;Hello, World!&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		    <span class="token keyword">match</span> <span class="token function">read_file</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> buf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		        <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		        <span class="token class-name">Err</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token class-name">Err</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,3),r=a("\u6587\u4EF6\u64CD\u4F5C\u4E0A\u9762 Rust \u4E0E\u5176\u5B83\u8BED\u8A00\u5904\u7406\u65B9\u5F0F\u6709\u4E9B\u4E0D\u4E00\u6837\uFF0C\u5176\u5B83\u8BED\u8A00\u4E00\u822C\u628A\u8BFB\u5199\u9009\u9879\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F20\u7ED9 open \u51FD\u6570\uFF0C\u800C Rust \u5219\u662F\u5728 option \u4E0A\u9762\u8C03\u7528 open \u51FD\u6570\u3002 "),d={href:"http://doc.rust-lang.org/stable/std/fs/struct.OpenOptions.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"std::fs::OpenOptions",-1),b=a(" \u662F\u4E00\u4E2A builder\uFF0C\u901A\u8FC7 new \u51FD\u6570\u521B\u5EFA\u540E\uFF0C\u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528\u8BBE\u7F6E\u6253\u5F00\u6587\u4EF6\u7684\u9009\u9879\uFF0C\u662F read, write, append, truncate \u8FD8\u662F create \u7B49\uFF0COpenOptions \u6784\u5EFA\u5B8C\u6210\u540E\u5C31\u53EF\u4EE5\u518D\u63A5\u7740\u8C03\u7528 open \u65B9\u6CD5\u4E86\uFF0C\u770B\u4E0B\u4E0B\u9762\u7684\u4F8B\u5B50\u5C31\u660E\u767D\u4E86"),f=s(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token class-name">OpenOptions</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token class-name">OpenOptions</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">truncate</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Rust \u8FD9\u79CD\u7528 builder pattern \u6765\u8BBE\u7F6E\u6253\u5F00\u6587\u4EF6\u9009\u9879\uFF0C\u76F8\u6BD4\u4E8E\u5C06\u9009\u9879\u4EE5\u5B57\u7B26\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9 open \u51FD\u6570\u7684\u4E00\u4E2A\u4F18\u70B9\u662F\u53EF\u4EE5\u8BA9\u7F16\u8BD1\u5668\u4FDD\u8BC1\u68C0\u67E5\u9009\u9879\u5408\u6CD5\u6027\uFF0C\u4E0D\u7528\u7B49\u5230\u8FD0\u884C\u65F6\u624D\u53D1\u73B0\u624B\u6296\u628A read-mode \u7684 <code>r</code> \u5199\u6210\u4E86 <code>t</code>\u3002</p>`,2);function w(y,_){const p=t("ExternalLinkIcon");return l(),o(c,null,[k,n("p",null,[r,n("a",d,[m,e(p)]),b]),f],64)}var O=u(i,[["render",w],["__file","file-io.html.vue"]]);export{O as default};