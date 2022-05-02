import{r as e,a as p,b as n,d as a,F as o,c,e as t,o as l}from"./app.a489c551.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=c(`<h1 id="into-from-\u53CA\u5176\u5728-string-\u548C-str-\u4E92\u8F6C\u4E0A\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#into-from-\u53CA\u5176\u5728-string-\u548C-str-\u4E92\u8F6C\u4E0A\u7684\u5E94\u7528" aria-hidden="true">#</a> Into/From \u53CA\u5176\u5728 String \u548C &amp;str \u4E92\u8F6C\u4E0A\u7684\u5E94\u7528</h1><p><code>std::convert</code> \u4E0B\u9762\uFF0C\u6709\u4E24\u4E2A Trait\uFF0C<code>Into/From</code>\uFF0C\u5B83\u4EEC\u662F\u4E00\u5BF9\u5B6A\u751F\u59D0\u59B9\u3002\u5B83\u4EEC\u7684\u4F5C\u7528\u662F\u914D\u5408\u6CDB\u578B\uFF0C\u8FDB\u884C\u4E00\u4E9B\u8BBE\u8BA1\u4E0A\u7684\u5F52\u4E00\u5316\u5904\u7406\u3002</p><p>\u5B83\u4EEC\u7684\u57FA\u672C\u5F62\u5F0F\u4E3A\uFF1A <code>From&lt;T&gt;</code> \u548C <code>Into&lt;T&gt;</code>\u3002</p><h2 id="from-t" tabindex="-1"><a class="header-anchor" href="#from-t" aria-hidden="true">#</a> <code>From&lt;T&gt;</code></h2><p>\u5BF9\u4E8E\u7C7B\u578B\u4E3A <code>U</code> \u7684\u5BF9\u8C61 <code>foo</code>\uFF0C\u5982\u679C\u5B83\u5B9E\u73B0\u4E86 <code>From&lt;T&gt;</code>\uFF0C\u90A3\u4E48\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>let foo = U::from(bar)</code> \u6765\u751F\u6210\u81EA\u5DF1\u3002\u8FD9\u91CC\uFF0C<code>bar</code> \u662F\u7C7B\u578B\u4E3A <code>T</code> \u7684\u5BF9\u8C61\u3002</p><p>\u4E0B\u9762\u4E3E\u4E00\u4F8B\uFF0C\u56E0\u4E3A <code>String</code> \u5B9E\u73B0\u4E86 <code>From&lt;&amp;str&gt;</code>\uFF0C\u6240\u4EE5 <code>String</code> \u53EF\u4EE5\u4ECE <code>&amp;str</code> \u751F\u6210\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> other_string <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> other_string<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="into-t" tabindex="-1"><a class="header-anchor" href="#into-t" aria-hidden="true">#</a> <code>Into&lt;T&gt;</code></h2><p>\u5BF9\u4E8E\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>U: Into&lt;T&gt;</code> \u7684\u5BF9\u8C61 <code>foo</code>\uFF0C<code>Into</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u51FD\u6570\uFF1A<code>.into(self) -&gt; T</code>\uFF0C\u8C03\u7528 <code>foo.into()</code> \u4F1A\u6D88\u8017\u81EA\u5DF1\uFF08\u8F6C\u79FB\u8D44\u6E90\u6240\u6709\u6743\uFF09\uFF0C\u751F\u6210\u7C7B\u578B\u4E3A <code>T</code> \u7684\u53E6\u4E00\u4E2A\u65B0\u5BF9\u8C61 <code>bar</code>\u3002</p><p>\u8FD9\u53E5\u8BDD\uFF0C\u8BF4\u8D77\u6765\u6709\u70B9\u62BD\u8C61\u3002\u4E0B\u9762\u62FF\u4E00\u4E2A\u5177\u4F53\u7684\u5B9E\u4F8B\u6765\u8F85\u52A9\u7406\u89E3\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">is_hello</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Into</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> bytes <span class="token operator">=</span> <span class="token string">b&quot;hello&quot;</span><span class="token punctuation">.</span><span class="token function">to_vec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">is_hello</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u56E0\u4E3A <code>String</code> \u7C7B\u578B\u5B9E\u73B0\u4E86 <code>Into&lt;Vec&lt;u8&gt;&gt;</code>\u3002</p><p>\u4E0B\u9762\u62FF\u4E00\u4E2A\u5B9E\u9645\u751F\u4EA7\u4E2D\u5B57\u7B26\u4E32\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u3002</p><p>\u5728\u6211\u4EEC\u8BBE\u8BA1\u5E93\u7684 <code>API</code> \u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u4E00\u4E2A\u607C\u4EBA\u7684\u95EE\u9898\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u679C\u5B9A\u4E3A <code>String</code>\uFF0C\u5219\u5916\u90E8\u4F20\u5165\u5B9E\u53C2\u7684\u65F6\u5019\uFF0C\u5BF9\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\uFF0C\u5FC5\u987B\u8981\u505A <code>.to_string()</code> \u6216 <code>.to_owned()</code> \u8F6C\u6362\uFF0C\u53C2\u6570\u4E00\u591A\uFF0C\u5C31\u662F\u4E00\u4EF6\u53C8\u4E4F\u5473\u53C8\u4E11\u7684\u4E8B\u60C5\u3002\uFF08\u800C\u53CD\u8FC7\u6765\u8BBE\u8BA1\u7684\u8BDD\uFF0C\u5BF9\u521D\u5B66\u8005\u6765\u8BF4\uFF0C\u53C8\u4F1A\u9047\u5230\u4E00\u4E9B\u751F\u547D\u5468\u671F\u7684\u95EE\u9898\uFF0C\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u8FD9\u4E2A\u540E\u9762\u8BBA\u8FF0\uFF09</p><p>\u90A3\u5B58\u4E0D\u5B58\u5728\u4E00\u79CD\u65B9\u6CD5\uFF0C\u80FD\u591F\u4F7F\u4F20\u53C2\u53C8\u80FD\u591F\u63A5\u53D7 <code>String</code> \u7C7B\u578B\uFF0C\u53C8\u80FD\u591F\u63A5\u53D7 <code>&amp;str</code> \u7C7B\u578B\u5462\uFF1F\u7B54\u6848\u5C31\u662F<strong>\u6CDB\u578B</strong>\u3002\u800C\u4EC5\u662F\u6CDB\u578B\u7684\u8BDD\uFF0C\u592A\u5BBD\u6CDB\u3002\u56E0\u6B64\uFF0C\u6807\u51C6\u5E93\u4E2D\uFF0C\u63D0\u4F9B\u4E86 <code>Into&lt;T&gt;</code> \u6765\u4E3A\u5176\u505A\u7EA6\u675F\uFF0C\u4EE5\u4FBF\u65B9\u4FBF\u800C\u9AD8\u6548\u5730\u8FBE\u5230\u6211\u4EEC\u7684\u76EE\u7684\u3002</p><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u6709\u5982\u4E0B\u7ED3\u6784\u4F53\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span> <span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> name <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6211\u4EEC\u5728\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Herman&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u76F4\u63A5\u5199\u6210\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;Herman&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C31\u4F1A\u62A5\u7C7B\u578B\u4E0D\u5339\u914D\u7684\u9519\u8BEF\u3002</p><p>\u597D\u4E86\uFF0C\u4E0B\u9762 <code>Into</code> \u51FA\u573A\u3002\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u7ED3\u6784\u4F53\u4E3A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token operator">&lt;</span><span class="token class-name">S</span><span class="token punctuation">:</span> <span class="token class-name">Into</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">S</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> name<span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7136\u540E\uFF0C\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u4E0B\u9762\u4E24\u79CD\u5199\u6CD5\u90FD\u662F\u53EF\u4EE5\u7684\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;Herman&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;Herman&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6211\u4EEC\u6765\u4ED4\u7EC6\u5206\u6790\u4E00\u4E0B\u8FD9\u4E00\u5757\u7684\u5199\u6CD5</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token operator">&lt;</span><span class="token class-name">S</span><span class="token punctuation">:</span> <span class="token class-name">Into</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">S</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> name<span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u53C2\u6570\u7C7B\u578B\u4E3A <code>S</code>\uFF0C \u662F\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\uFF0C\u8868\u793A\u53EF\u4EE5\u63A5\u53D7\u4E0D\u540C\u7684\u7C7B\u578B\u3002<code>S: Into&lt;String&gt;</code> \u8868\u793A <code>S</code> \u7C7B\u578B\u5FC5\u987B\u5B9E\u73B0\u4E86 <code>Into&lt;String&gt;</code>\uFF08\u7EA6\u675F\uFF09\u3002\u800C <code>&amp;str</code> \u7C7B\u578B\uFF0C\u7B26\u5408\u8FD9\u4E2A\u8981\u6C42\u3002\u56E0\u6B64 <code>&amp;str</code> \u7C7B\u578B\u53EF\u4EE5\u76F4\u63A5\u4F20\u8FDB\u6765\u3002</p><p>\u800C <code>String</code> \u672C\u8EAB\u4E5F\u662F\u5B9E\u73B0\u4E86 <code>Into&lt;String&gt;</code> \u7684\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F20\u8FDB\u6765\u3002</p><p>\u7136\u540E\uFF0C\u4E0B\u9762 <code>name: name.into()</code> \u8FD9\u91CC\u4E5F\u633A\u795E\u79D8\u7684\u3002\u5B83\u7684\u4F5C\u7528\u662F\u5C06 <code>name</code> \u8F6C\u6362\u6210 <code>String</code> \u7C7B\u578B\u7684\u53E6\u4E00\u4E2A\u5BF9\u8C61\u3002\u5F53 name \u662F <code>&amp;str</code> \u65F6\uFF0C\u5B83\u4F1A\u8F6C\u6362\u6210 <code>String</code> \u5BF9\u8C61\uFF0C\u4F1A\u505A\u4E00\u6B21\u5B57\u7B26\u4E32\u7684\u62F7\u8D1D\uFF08\u5185\u5B58\u7684\u7533\u8BF7\u3001\u590D\u5236\uFF09\u3002\u800C\u5F53 name \u672C\u8EAB\u662F <code>String</code> \u7C7B\u578B\u65F6\uFF0C<code>name.into()</code> \u4E0D\u4F1A\u505A\u4EFB\u4F55\u8F6C\u6362\uFF0C\u4EE3\u4EF7\u4E3A\u96F6\uFF08\u6709\u6CA1\u6709\u604D\u7136\u5927\u609F\uFF09\u3002</p><p>\u6839\u636E\u53C2\u8003\u8D44\u6599\uFF0C\u4E0A\u8FF0\u5185\u5BB9\u901A\u8FC7\u4E0B\u9762\u4E09\u5F0F\u83B7\u5F97\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token class-name">From</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">str</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token class-name">String</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token class-name">From</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token class-name">T</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">U</span><span class="token operator">&gt;</span> <span class="token class-name">Into</span><span class="token operator">&lt;</span><span class="token class-name">U</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token class-name">T</span> <span class="token keyword">where</span> <span class="token class-name">U</span><span class="token punctuation">:</span> <span class="token class-name">From</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u66F4\u591A\u5185\u5BB9\uFF0C\u8BF7\u53C2\u8003\uFF1A</p>`,34),k={href:"http://doc.rust-lang.org/std/convert/trait.Into.html",target:"_blank",rel:"noopener noreferrer"},d=t("http://doc.rust-lang.org/std/convert/trait.Into.html"),m={href:"http://doc.rust-lang.org/std/convert/trait.From.html",target:"_blank",rel:"noopener noreferrer"},g=t("http://doc.rust-lang.org/std/convert/trait.From.html"),b={href:"http://hermanradtke.com/2015/05/06/creating-a-rust-function-that-accepts-string-or-str.html",target:"_blank",rel:"noopener noreferrer"},f=t("http://hermanradtke.com/2015/05/06/creating-a-rust-function-that-accepts-string-or-str.html");function h(v,_){const s=e("ExternalLinkIcon");return l(),p(o,null,[i,n("ul",null,[n("li",null,[n("a",k,[d,a(s)])]),n("li",null,[n("a",m,[g,a(s)])]),n("li",null,[n("a",b,[f,a(s)])])])],64)}var S=r(u,[["render",h],["__file","into.html.vue"]]);export{S as default};
