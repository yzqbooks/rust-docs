import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h1><blockquote><p>\u7A0B\u5E8F\u6D4B\u8BD5\u662F\u4E00\u79CD\u627E\u5230\u7F3A\u9677\u7684\u6709\u6548\u65B9\u5F0F\uFF0C\u4F46\u662F\u5B83\u5BF9\u8BC1\u660E\u6CA1\u6709\u7F3A\u9677\u5374\u65E0\u80FD\u4E3A\u529B\u3002</p><p>Edsger W. Dijkstra, &quot;The Humble Programmer&quot; (1972)</p></blockquote><p>\u4F5C\u4E3A\u8F6F\u4EF6\u5DE5\u7A0B\u8D28\u91CF\u4FDD\u969C\u4F53\u7CFB\u7684\u91CD\u8981\u4E00\u73AF\uFF0C\u6D4B\u8BD5\u662F\u5E94\u8BE5\u5F15\u8D77\u6211\u4EEC\u5145\u5206\u6CE8\u610F\u5E76\u91CD\u89C6\u7684\u4E8B\u60C5\u3002\u524D\u9762\u8BF4\u8FC7\uFF0CRust \u8BED\u8A00\u7684\u8BBE\u8BA1\u96C6\u6210\u4E86\u6700\u8FD1\u5341\u591A\u5E74\u4E2D\u603B\u7ED3\u51FA\u6765\u7684\u5927\u91CF\u6700\u4F73\u5DE5\u7A0B\u5B9E\u8DF5\uFF0C\u800C\u5BF9\u6D4B\u8BD5\u7684\u539F\u751F\u96C6\u6210\u4E5F\u6B63\u4F53\u73B0\u4E86\u8FD9\u4E00\u70B9\u3002\u4E0B\u9762\u6765\u770B Rust \u662F\u600E\u4E48\u8BBE\u8BA1\u6D4B\u8BD5\u7279\u6027\u7684\u3002</p><p>Rust \u7684\u6D4B\u8BD5\u7279\u6027\u6309\u7CBE\u7EC6\u5EA6\u5212\u5206\uFF0C\u5206\u4E3A 3 \u4E2A\u5C42\u6B21\uFF1A</p><ol><li>\u51FD\u6570\u7EA7\uFF1B</li><li>\u6A21\u5757\u7EA7\uFF1B</li><li>\u5DE5\u7A0B\u7EA7\uFF1B</li></ol><p>\u53E6\u5916\uFF0CRust \u8FD8\u652F\u6301\u5BF9\u6587\u6863\u8FDB\u884C\u6D4B\u8BD5\u3002</p><h2 id="\u51FD\u6570\u7EA7\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7EA7\u6D4B\u8BD5" aria-hidden="true">#</a> \u51FD\u6570\u7EA7\u6D4B\u8BD5</h2><p>\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u7528\u521B\u5EFA\u4E00\u4E2A\u5E93\u7684\u5B9E\u64CD\u6765\u8BB2\u89E3\u6D4B\u8BD5\u7684\u5185\u5BB9\u3002\u6211\u4EEC\u5148\u7528 cargo \u5EFA\u7ACB\u4E00\u4E2A\u5E93\u5DE5\u7A0B\uFF1A<code>adder</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cargo new adder
$ cd adder
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="test-\u6807\u8BC6" tabindex="-1"><a class="header-anchor" href="#test-\u6807\u8BC6" aria-hidden="true">#</a> <code>#[test]</code> \u6807\u8BC6</h3><p>\u6253\u5F00 <code>src/lib.rs</code> \u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u4EE3\u7801</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do test work</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Rust \u4E2D\uFF0C\u53EA\u9700\u8981\u5728\u4E00\u4E2A\u51FD\u6570\u7684\u4E0A\u9762\uFF0C\u52A0\u4E0A <code>#[test]</code> \u5C31\u6807\u660E\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7528\u7684\u51FD\u6570\u3002</p><p>\u6709\u4E86\u8FD9\u4E2A\u5C5E\u6027\u4E4B\u540E\uFF0C\u5728\u4F7F\u7528 <code>cargo build</code> \u7F16\u8BD1\u65F6\uFF0C\u5C31\u4F1A\u5FFD\u7565\u8FD9\u4E9B\u51FD\u6570\u3002\u4F7F\u7528 <code>cargo test</code> \u53EF\u4EE5\u8FD0\u884C\u8FD9\u4E9B\u51FD\u6570\u3002\u7C7B\u4F3C\u4E8E\u5982\u4E0B\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cargo test
   Compiling adder v0.0.1 (file:///home/you/projects/adder)
     Running target/adder-91b3e234d4ed382a

running 1 test
test it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured

   Doc-tests adder

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Rust \u63D0\u4F9B\u4E86\u4E24\u4E2A\u5B8F\u6765\u6267\u884C\u6D4B\u8BD5\u65AD\u8A00\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token macro property">assert!</span><span class="token punctuation">(</span>expr<span class="token punctuation">)</span>               \u6D4B\u8BD5\u8868\u8FBE\u5F0F\u662F\u5426\u4E3A <span class="token boolean">true</span> \u6216 <span class="token boolean">false</span>
<span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>expr<span class="token punctuation">,</span> expr<span class="token punctuation">)</span>      \u6D4B\u8BD5\u4E24\u4E2A\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u662F\u5426\u76F8\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6BD4\u5982</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">assert!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD0\u884C <code>cargo test</code>\uFF0C\u4F60\u4F1A\u5F97\u5230\u7C7B\u4F3C\u4E0B\u9762\u8FD9\u6837\u7684\u63D0\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cargo test
   Compiling adder v0.0.1 (file:///home/you/projects/adder)
     Running target/adder-91b3e234d4ed382a

running 1 test
test it_works ... FAILED

failures:

---- it_works stdout ----
        thread &#39;it_works&#39; panicked at &#39;assertion failed: false&#39;, /home/steve/tmp/adder/src/lib.rs:3



failures:
    it_works

test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured

thread &#39;&lt;main&gt;&#39; panicked at &#39;Some tests failed&#39;, /home/steve/src/rust/src/libtest/lib.rs:247
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="should-panic-\u6807\u8BC6" tabindex="-1"><a class="header-anchor" href="#should-panic-\u6807\u8BC6" aria-hidden="true">#</a> <code>#[should_panic]</code> \u6807\u8BC6</h3><p>\u5982\u679C\u4F60\u7684\u6D4B\u8BD5\u51FD\u6570\u6CA1\u5B8C\u6210\uFF0C\u6216\u6CA1\u6709\u66F4\u65B0\uFF0C\u6216\u662F\u6545\u610F\u8BA9\u5B83\u5D29\u6E83\uFF0C\u4F46\u4E3A\u4E86\u8BA9\u6D4B\u8BD5\u80FD\u591F\u987A\u5229\u5B8C\u6210\uFF0C\u6211\u4EEC\u4E3B\u52A8\u53EF\u4EE5\u7ED9\u6D4B\u8BD5\u51FD\u6570\u52A0\u4E0A <code>#[should_panic]</code> \u6807\u8BC6\uFF0C\u5C31\u4E0D\u4F1A\u8BA9 <code>cargo test</code> \u62A5\u9519\u4E86\u3002</p><p>\u5982</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token attribute attr-name">#[should_panic]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">assert!</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD0\u884C <code>cargo test</code>\uFF0C\u7ED3\u679C\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cargo test
   Compiling adder v0.0.1 (file:///home/you/projects/adder)
     Running target/adder-91b3e234d4ed382a

running 1 test
test it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured

   Doc-tests adder

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="ignore-\u6807\u8BC6" tabindex="-1"><a class="header-anchor" href="#ignore-\u6807\u8BC6" aria-hidden="true">#</a> <code>#[ignore]</code> \u6807\u8BC6</h3><p>\u6709\u65F6\u5019\uFF0C\u67D0\u4E2A\u6D4B\u8BD5\u51FD\u6570\u975E\u5E38\u8017\u65F6\uFF0C\u6216\u6682\u65F6\u6CA1\u66F4\u65B0\uFF0C\u6211\u4EEC\u60F3\u4E0D\u8BA9\u5B83\u53C2\u4E0E\u6D4B\u8BD5\uFF0C\u4F46\u662F\u53C8\u4E0D\u60F3\u5220\u9664\u5B83\uFF0C\u8FD9\u65F6\uFF0C <code>#[ignore]</code> \u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token attribute attr-name">#[test]</span>
<span class="token attribute attr-name">#[ignore]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">expensive_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// code that takes an hour to run</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5199\u4E0A\u8FD9\u4E2A\uFF0C\u8FD0\u884C <code>cargo test</code> \u7684\u65F6\u5019\uFF0C\u5C31\u4E0D\u4F1A\u6D4B\u8BD5\u8FD9\u4E2A\u51FD\u6570\u3002</p><h2 id="\u6A21\u5757\u7EA7\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u7EA7\u6D4B\u8BD5" aria-hidden="true">#</a> \u6A21\u5757\u7EA7\u6D4B\u8BD5</h2><p>\u6709\u65F6\uFF0C\u6211\u4EEC\u4F1A\u7EC4\u7EC7\u4E00\u6279\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u8FD9\u65F6\uFF0C\u6A21\u5757\u5316\u7684\u7EC4\u7EC7\u7ED3\u6784\u5C31\u6709\u52A9\u4E8E\u5EFA\u7ACB\u7ED3\u6784\u6027\u7684\u6D4B\u8BD5\u4F53\u7CFB\u3002Rust \u4E2D\uFF0C\u53EF\u4EE5\u7C7B\u4F3C\u5982\u4E0B\u5199\u6CD5\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">add_two</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
    a <span class="token operator">+</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>add_two</span><span class="token punctuation">;</span>

    <span class="token attribute attr-name">#[test]</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token function">add_two</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E5F\u5373\u5728 <code>mod</code> \u7684\u4E0A\u9762\u5199\u4E0A <code>#[cfg(test)]</code> \uFF0C\u8868\u660E\u8FD9\u4E2A\u6A21\u5757\u662F\u4E2A\u6D4B\u8BD5\u6A21\u5757\u3002\u4E00\u4E2A\u6D4B\u8BD5\u6A21\u5757\u4E2D\uFF0C\u53EF\u4EE5\u5305\u542B\u82E5\u5E72\u6D4B\u8BD5\u51FD\u6570\uFF0C\u6D4B\u8BD5\u6A21\u5757\u4E2D\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u5305\u542B\u6D4B\u8BD5\u6A21\u5757\uFF0C\u5373\u6A21\u5757\u7684\u5D4C\u5957\u3002</p><p>\u5982\u6B64\uFF0C\u5C31\u5F62\u5F0F\u4E86\u7ED3\u6784\u5316\u7684\u6D4B\u8BD5\u4F53\u7CFB\uFF0C\u751A\u662F\u65B9\u4FBF\u3002</p><h2 id="\u5DE5\u7A0B\u7EA7\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u7A0B\u7EA7\u6D4B\u8BD5" aria-hidden="true">#</a> \u5DE5\u7A0B\u7EA7\u6D4B\u8BD5</h2><p>\u51FD\u6570\u7EA7\u548C\u6A21\u5757\u7EA7\u7684\u6D4B\u8BD5\uFF0C\u4EE3\u7801\u662F\u4E0E\u8981\u6D4B\u8BD5\u7684\u6A21\u5757\uFF08\u7F16\u8BD1\u5355\u5143\uFF09\u5199\u5728\u76F8\u540C\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E00\u822C\u505A\u7684\u662F\u767D\u76D2\u6D4B\u8BD5\u3002\u5DE5\u7A0B\u7EA7\u7684\u6D4B\u8BD5\uFF0C\u4E00\u822C\u505A\u7684\u5C31\u662F\u9ED1\u76D2\u96C6\u6210\u6D4B\u8BD5\u4E86\u3002</p><p>\u6211\u4EEC\u770B\u4E00\u4E2A\u5DE5\u7A0B\u7684\u76EE\u5F55\uFF0C\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\uFF0C\u6709\u4E00\u4E2A <code>tests</code> \u6587\u4EF6\u5939\uFF08\u6CA1\u6709\u7684\u8BDD\uFF0C\u5C31\u624B\u52A8\u5EFA\u7ACB\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cargo.toml
Cargo.lock
examples
src
tests
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6211\u4EEC\u5728 tests \u76EE\u5F55\u4E0B\uFF0C\u5EFA\u7ACB\u4E00\u4E2A\u6587\u4EF6 <code>testit.rs</code> \uFF0C\u540D\u5B57\u968F\u4FBF\u53D6\u7686\u53EF\u3002\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">adder</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[test]</span>
<span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token namespace">adder<span class="token punctuation">::</span></span><span class="token function">add_two</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u6BD4\u5982\uFF0C\u6211\u4EEC src \u4E2D\uFF0C\u5199\u4E86\u4E00\u4E2A\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>add_two</code> \u51FD\u6570\uFF0C\u73B0\u5728\u8FDB\u884C\u96C6\u6210\u6D4B\u8BD5\u3002</p><p>\u9996\u5148\uFF0C\u7528 <code>extern crate</code> \u7684\u65B9\u5F0F\uFF0C\u5F15\u5165\u8FD9\u4E2A\u5E93\uFF0C\u7531\u4E8E\u662F\u540C\u4E00\u4E2A\u9879\u76EE\uFF0Ccargo \u4F1A\u81EA\u52A8\u627E\u3002\u5F15\u5165\u540E\uFF0C\u5C31\u6309\u6A21\u5757\u7684\u4F7F\u7528\u65B9\u6CD5\u8C03\u7528\u5C31\u884C\u4E86\uFF0C\u5176\u5B83\u7684\u6D4B\u8BD5\u6807\u8BC6\u4E0E\u524D\u9762\u76F8\u540C\u3002</p><p>\u5199\u5B8C\u540E\uFF0C\u8FD0\u884C\u4E00\u4E0B <code>cargo test</code>\uFF0C\u63D0\u793A\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cargo test
   Compiling adder v0.0.1 (file:///home/you/projects/adder)
     Running target/adder-91b3e234d4ed382a

running 1 test
test tests::it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured

     Running target/lib-c18e7d3494509e74

running 1 test
test it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured

   Doc-tests adder

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u6587\u6863\u7EA7\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u7EA7\u6D4B\u8BD5" aria-hidden="true">#</a> \u6587\u6863\u7EA7\u6D4B\u8BD5</h2><p>Rust \u5BF9\u6587\u6863\u7684\u54F2\u5B66\uFF0C\u662F\u4E0D\u8981\u5355\u72EC\u5199\u6587\u6863\uFF0C\u4E00\u662F\u4EE3\u7801\u672C\u8EAB\u662F\u6587\u6863\uFF0C\u4E8C\u662F\u4EE3\u7801\u7684\u6CE8\u91CA\u5C31\u662F\u6587\u6863\u3002Rust \u4E0D\u4F46\u53EF\u4EE5\u81EA\u52A8\u62BD\u53D6\u4EE3\u7801\u4E2D\u7684\u6587\u6863\uFF0C\u5F62\u6210\u6807\u51C6\u5F62\u5F0F\u7684\u6587\u6863\u96C6\u5408\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u6587\u6863\u4E2D\u7684\u793A\u4F8B\u4EE3\u7801\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u7ED9\u4E0A\u9762\u5E93\u52A0\u70B9\u6587\u6863\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">//! The \`adder\` crate provides functions that add numbers to other numbers.</span>
<span class="token comment">//!</span>
<span class="token comment">//! # Examples</span>
<span class="token comment">//!</span>
<span class="token comment">//! \`\`\`</span>
<span class="token comment">//! assert_eq!(4, adder::add_two(2));</span>
<span class="token comment">//! \`\`\`</span>

<span class="token comment">/// This function adds two to its argument.</span>
<span class="token comment">///</span>
<span class="token comment">/// # Examples</span>
<span class="token comment">///</span>
<span class="token comment">/// \`\`\`</span>
<span class="token comment">/// use adder::add_two;</span>
<span class="token comment">///</span>
<span class="token comment">/// assert_eq!(4, add_two(2));</span>
<span class="token comment">/// \`\`\`</span>

<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">add_two</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
   a <span class="token operator">+</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
   <span class="token keyword">use</span> <span class="token keyword">super</span><span class="token punctuation">::</span><span class="token operator">*</span><span class="token punctuation">;</span>

   <span class="token attribute attr-name">#[test]</span>
   <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token function">add_two</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u8FD0\u884C <code>cargo test</code>\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cargo test
   Compiling adder v0.0.1 (file:///home/steve/tmp/adder)
     Running target/adder-91b3e234d4ed382a

running 1 test
test tests::it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured

     Running target/lib-c18e7d3494509e74

running 1 test
test it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured

   Doc-tests adder

running 2 tests
test add_two_0 ... ok
test _0 ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u770B\u5230\u4E86\u5427\uFF0C\u591A\u4E86\u4E9B\u6D4B\u8BD5\u7ED3\u679C\u3002</p><h2 id="\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a> \u7ED3\u8BED</h2><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0CRust \u5BF9\u6D4B\u8BD5\uFF0C\u5BF9\u6587\u6863\uFF0C\u5BF9\u6587\u6863\u4E2D\u7684\u793A\u4F8B\u4EE3\u7801\u6D4B\u8BD5\uFF0C\u90FD\u6709\u7279\u6027\u652F\u6301\u3002\u4ECE\u8FD9\u4E9B\u7EC6\u8282\u4E4B\u5904\uFF0C\u53EF\u4EE5\u770B\u51FA Rust \u8BBE\u8BA1\u7684\u5468\u5BC6\u6027\u548C\u4E25\u8C28\u6027\u3002</p><p>\u4F46\u662F\uFF0C\u5149\u6709\u597D\u5DE5\u5177\u662F\u4E0D\u591F\u7684\uFF0C\u5DE5\u7A0B\u7684\u8D28\u91CF\u66F4\u91CD\u8981\u7684\u662F\u5199\u4EE3\u7801\u7684\u4EBA\u51B3\u5B9A\u7684\u3002\u6211\u4EEC\u5E94\u8BE5\u5728 Rust \u4E25\u8C28\u4E4B\u98CE\u7684\u718F\u9676\u4E0B\uFF0C\u517B\u6210\u826F\u597D\u7684\u7F16\u7801\u548C\u7F16\u5199\u6D4B\u8BD5\u7684\u4E60\u60EF\uFF0C\u638C\u63E1\u4E00\u5B9A\u7684\u5206\u6790\u65B9\u6CD5\uFF0C\u628A\u8D28\u91CF\u8981\u6C42\u8D2F\u5F7B\u5230\u5E95\u3002</p>`,56);function p(t,r){return e}var o=s(a,[["render",p],["__file","threearchtest.html.vue"]]);export{o as default};
