import{r as l,a as c,b as e,d as o,F as i,c as s,e as n,o as p}from"./app.a489c551.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const t={},r=s(`<h1 id="\u7F16\u8BD1\u5668\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5668\u53C2\u6570" aria-hidden="true">#</a> \u7F16\u8BD1\u5668\u53C2\u6570</h1><p>\u672C\u7AE0\u5C06\u4ECB\u7ECDRust\u7F16\u8BD1\u5668\u7684\u53C2\u6570\u3002</p><p>Rust\u7F16\u8BD1\u5668\u7A0B\u5E8F\u7684\u540D\u5B57\u662F<code>rustc</code>\uFF0C\u4F7F\u7528\u5B83\u7684\u65B9\u6CD5\u5F88\u7B80\u5355\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> INPUT
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>[OPTIONS]</code>\u8868\u793A\u7F16\u8BD1\u53C2\u6570\uFF0C\u800C<code>INPUT</code>\u5219\u8868\u793A\u8F93\u5165\u6587\u4EF6\u3002\u800C\u7F16\u8BD1\u53C2\u6570\u6709\u4EE5\u4E0B\u53EF\u9009\uFF1A</p>`,5),u=s(`<li><p><code>-h, --help</code> - \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u5230\u6807\u51C6\u8F93\u51FA\uFF1B</p></li><li><p><code>--cfg SPEC</code> - \u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u6761\u4EF6\u7F16\u8BD1\u53C2\u6570\uFF0C\u4F7F\u7528\u65B9\u6CD5\u5982</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token macro property">cfg!</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u4E0A\u4F8B\u6240\u793A\uFF0C\u82E5<code>cfg!(hello)</code>\u6210\u7ACB\uFF0C\u5219\u8FD0\u884C\u7A0B\u5E8F\u5C31\u4F1A\u8F93\u51FA<code>&quot;world&quot;</code>\u5230\u6807\u51C6\u8F93\u51FA\u3002\u6211\u4EEC\u628A\u8FD9\u4E2A\u6587\u4EF6\u4FDD\u5B58\u4E3A<code>hello.rs</code>\u7136\u540E\u7F16\u8BD1\u5B83</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc --cfg hello hello.rs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD0\u884C\u5B83\u5C31\u4F1A\u770B\u5230\u5C4F\u5E55\u4E2D\u8F93\u51FA\u4E86<code>world!</code>\u3002</p></li><li><p><code>-L [KIND=]PATH</code> - \u5F80\u94FE\u63A5\u8DEF\u5F84\u4E2D\u52A0\u5165\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6307\u5B9A\u8FD9\u4E2A\u8DEF\u5F84\u7684\u7C7B\u578B\uFF08Kind\uFF09\uFF0C\u8FD9\u4E9B\u7C7B\u578B\u5305\u62EC</p><ul><li><code>dependency</code> - \u5728\u8FD9\u4E2A\u8DEF\u5F84\u4E0B\u627E\u4F9D\u8D56\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982\u8BF4<code>mod</code>\uFF1B</li><li><code>crate</code> - \u53EA\u5728\u8FD9\u4E2A\u8DEF\u5F84\u4E0B\u627E<code>extern crate</code>\u4E2D\u5B9A\u4E49\u7684\u5E93\uFF1B</li><li><code>native</code> - \u53EA\u5728\u8FD9\u4E2A\u8DEF\u5F84\u4E0B\u627ENative\u5E93\uFF1B</li><li><code>framework</code> - \u53EA\u5728OS X\u4E0B\u6709\u7528\uFF0C\u53EA\u5728\u8FD9\u4E2A\u8DEF\u5F84\u4E0B\u627EFramework\uFF1B</li><li><code>all</code> - \u9ED8\u8BA4\u9009\u9879\u3002</li></ul></li><li><p><code>-l [KIND=]NAME</code> - \u94FE\u63A5\u4E00\u4E2A\u5E93\uFF0C\u8FD9\u4E2A\u5E93\u53EF\u4EE5\u6307\u5B9A\u7C7B\u578B\uFF08Kind\uFF09</p><ul><li><code>static</code> - \u9759\u6001\u5E93\uFF1B</li><li><code>dylib</code> - \u52A8\u6001\u5E93\uFF1B</li><li><code>framework</code> - OS X\u7684Framework\u3002</li></ul><p>\u5982\u679C\u4E0D\u4F20\uFF0C\u9ED8\u8BA4\u4E3A<code>dylib</code>\u3002</p><p>\u6B64\u5904\u4E3E\u4E00\u4E2A\u4F8B\u5B50\u5982\u4F55\u624B\u52A8\u94FE\u63A5\u4E00\u4E2A\u5E93\uFF0C\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u53EB<code>myhello.rs</code>\uFF0C\u5728\u91CC\u9762\u5199\u4E00\u4E2A\u51FD\u6570</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// myhello.rs</span>

<span class="token comment">/// \u8FD9\u4E2A\u51FD\u6570\u4EC5\u4EC5\u5411\u6807\u7B7E\u8F93\u51FA\u6253\u5370 Hello World!</span>
<span class="token comment">/// \u4E0D\u8981\u5FD8\u8BB0\u8981\u628A\u5B83\u6807\u8BB0\u4E3A pub \u54E6\u3002</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">print_hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7136\u540E\u628A\u8FD9\u4E2A\u6587\u4EF6\u7F16\u8BD1\u6210\u4E00\u4E2A\u9759\u6001\u5E93\uFF0C<code>libmyhello.a</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc --crate-type staticlib myhello.rs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u518D\u521B\u5EFA\u4E00\u4E2A<code>main.rs</code>\uFF0C\u94FE\u63A5\u8FD9\u4E2A\u5E93\u5E76\u6253\u5370\u51FA&quot;Hello World!&quot;</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// main.rs</span>

<span class="token comment">// \u6307\u5B9A\u94FE\u63A5\u5E93 myhello</span>
<span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">myhello</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528\u5E93\u51FD\u6570</span>
    <span class="token namespace">myhello<span class="token punctuation">::</span></span><span class="token function">print_hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7F16\u8BD1<code>main.rs</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc -L. -lmyhello main.rs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD0\u884C<code>main</code>\uFF0C\u5C31\u4F1A\u770B\u5230\u5C4F\u5E55\u8F93\u51FA&quot;Hello World!&quot;\u5566\u3002</p></li><li><p><code>--crate-type</code> - \u6307\u5B9A\u7F16\u8BD1\u8F93\u51FA\u7C7B\u578B\uFF0C\u5B83\u7684\u53C2\u6570\u5305\u62EC</p><ul><li><code>bin</code> - \u4E8C\u8FDB\u884C\u53EF\u6267\u884C\u6587\u4EF6</li><li><code>lib</code> - \u7F16\u8BD1\u4E3A\u5E93</li><li><code>rlib</code> - Rust\u5E93</li><li><code>dylib</code> - \u52A8\u6001\u94FE\u63A5\u5E93</li><li><code>staticlib</code> - \u9759\u6001\u94FE\u63A5\u5E93</li></ul></li><li><p><code>--crate-name</code> - \u6307\u5B9A\u8FD9\u4E2ACrate\u7684\u540D\u5B57\uFF0C\u9ED8\u8BA4\u662F\u6587\u4EF6\u540D\uFF0C\u5982<code>main.rs</code>\u7F16\u8BD1\u6210\u53EF\u6267\u884C\u6587\u4EF6\u65F6\u9ED8\u8BA4\u662F<code>main</code>\uFF0C\u4F46\u4F60\u53EF\u4EE5\u6307\u5B9A\u5B83\u4E3A<code>foo</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc --crate-name foo main.rs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5219\u4F1A\u8F93\u51FA<code>foo</code>\u53EF\u6267\u884C\u6587\u4EF6\u3002</p></li>`,6),m=e("p",null,[e("code",null,"--emit"),n(" - \u6307\u5B9A\u7F16\u8BD1\u5668\u7684\u8F93\u51FA\u3002\u7F16\u8BD1\u5668\u9ED8\u8BA4\u662F\u8F93\u51FA\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\u6216\u5E93\u6587\u4EF6\uFF0C\u4F46\u4F60\u53EF\u4EE5\u9009\u62E9\u8F93\u51FA\u4E00\u4E9B\u5176\u5B83\u7684\u4E1C\u897F\u7528\u4E8EDebug")],-1),b=e("li",null,[e("code",null,"asm"),n(" - \u8F93\u51FA\u6C47\u7F16")],-1),h=e("code",null,"llvm-bc",-1),k=n(" - "),g={href:"http://llvm.org/docs/BitCodeFormat.html",target:"_blank",rel:"noopener noreferrer"},v=n("LLVM Bitcode"),_=n("\uFF1B"),f=e("code",null,"llvm-ir",-1),x=n(" - "),y={href:"http://llvm.org/docs/LangRef.html",target:"_blank",rel:"noopener noreferrer"},L=n("LLVM IR"),w=n("\uFF0C\u5373LLVM\u4E2D\u95F4\u7801\uFF08LLVM Intermediate Representation\uFF09\uFF1B"),T=e("li",null,[e("code",null,"obj"),n(" - Object File\uFF08\u5C31\u662F"),e("code",null,"*.o"),n("\u6587\u4EF6\uFF09\uFF1B")],-1),O=e("li",null,[e("code",null,"link"),n(" - \u8FD9\u4E2A\u662F\u8981\u7ED3\u5408\u5176\u5B83"),e("code",null,"--emit"),n("\u53C2\u6570\u4F7F\u7528\uFF0C\u4F1A\u6267\u884CLinker\u518D\u8F93\u51FA\u7ED3\u679C\uFF1B")],-1),P=e("li",null,[e("code",null,"dep-info"),n(" - \u6587\u4EF6\u4F9D\u8D56\u5173\u7CFB\uFF08Debug\u7528\uFF0C\u7C7B\u4F3C\u4E8EMakefile\u4E00\u6837\u7684\u4F9D\u8D56\uFF09\u3002")],-1),N=s(`<p>\u4EE5\u4E0A\u53C2\u6570\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u5272\uFF0C\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc --emit asm,llvm-ir,obj main.rs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u540C\u65F6\uFF0C\u5728\u6700\u540E\u53EF\u4EE5\u52A0\u4E00\u4E2A<code>=PATH</code>\u6765\u6307\u5B9A\u8F93\u51FA\u5230\u4E00\u4E2A\u7279\u5B9A\u6587\u4EF6\uFF0C\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc --emit <span class="token assign-left variable">asm</span><span class="token operator">=</span>output.S,llvm-ir<span class="token operator">=</span>output.ir main.rs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u4F1A\u628A\u6C47\u7F16\u751F\u6210\u5230<code>output.S</code>\u6587\u4EF6\u4E2D\uFF0C\u628ALLVM\u4E2D\u95F4\u7801\u8F93\u51FA\u5230<code>output.ir</code>\u4E2D\u3002</p>`,5),A=s(`<li><p><code>--print</code> - \u6253\u5370\u4E00\u4E9B\u4FE1\u606F\uFF0C\u53C2\u6570\u6709</p><ul><li><code>crate-name</code> - \u7F16\u8BD1\u76EE\u6807\u540D\uFF1B</li><li><code>file-names</code> - \u7F16\u8BD1\u7684\u6587\u4EF6\u540D\uFF1B</li><li><code>sysroot</code> - \u6253\u5370Rust\u5DE5\u5177\u94FE\u7684\u6839\u76EE\u5F55\u5730\u5740\u3002</li></ul></li><li><p><code>-g</code> - \u5728\u76EE\u6807\u6587\u4EF6\u4E2D\u4FDD\u5B58\u7B26\u53F7\uFF0C\u8FD9\u4E2A\u53C2\u6570\u7B49\u540C\u4E8E<code>-C debuginfo=2</code>\u3002</p></li><li><p><code>-O</code> - \u5F00\u542F\u4F18\u5316\uFF0C\u8FD9\u4E2A\u53C2\u6570\u7B49\u540C\u4E8E<code>-C opt-level=2</code>\u3002</p></li><li><p><code>-o FILENAME</code> - \u6307\u5B9A\u8F93\u51FA\u6587\u4EF6\u540D\uFF0C\u540C\u6837\u9002\u7528\u4E8E<code>--emit</code>\u7684\u8F93\u51FA\u3002</p></li><li><p><code>--out-dir DIR</code> - \u6307\u5B9A\u8F93\u51FA\u7684\u6587\u4EF6\u5939\uFF0C\u9ED8\u8BA4\u662F\u5F53\u524D\u6587\u4EF6\u5939\uFF0C\u4E14\u4F1A\u5FFD\u7565<code>-o</code>\u914D\u7F6E\u3002</p></li><li><p><code>--explain OPT</code> - \u89E3\u91CA\u67D0\u4E00\u4E2A\u7F16\u8BD1\u9519\u8BEF\uFF0C\u6BD4\u5982</p><p>\u82E5\u4F60\u5199\u4E86\u4E00\u4E2A<code>main.rs</code>\uFF0C\u4F7F\u7528\u4E86\u4E00\u4E2A\u672A\u5B9A\u4E49\u53D8\u91CF<code>f</code></p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7F16\u8BD1\u5B83\u65F6\u7F16\u8BD1\u5668\u4F1A\u62A5\u9519\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>main.rs:2:5: 2:6 error: unresolved name \`f\` [E0425]
main.rs:2     f
              ^
main.rs:2:5: 2:6 help: run \`rustc --explain E0425\` to see a detailed explanation
error: aborting due to previous error
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u867D\u7136\u9519\u8BEF\u5DF2\u7ECF\u5F88\u660E\u663E\uFF0C\u4F46\u662F\u4F60\u4E5F\u53EF\u4EE5\u8BA9\u7F16\u8BD1\u5668\u89E3\u91CA\u4E00\u4E0B\uFF0C\u4EC0\u4E48\u662F<code>E0425</code>\u9519\u8BEF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ rustc --explain E0425
// \u7F16\u8BD1\u5668\u6253\u5370\u7684\u8BF4\u660E
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><code>--test</code> - \u7F16\u8BD1\u6210\u4E00\u4E2A\u5355\u5143\u6D4B\u8BD5\u53EF\u6267\u884C\u6587\u4EF6</p></li><li><p><code>--target TRIPLE</code> - \u6307\u5B9A\u76EE\u6807\u5E73\u53F0\uFF0C\u57FA\u672C\u683C\u5F0F\u662F<code>cpu-manufacturer-kernel[-os]</code>\uFF0C\u4F8B\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## 64\u4F4DOS X</span>
$ rustc --target x86_64-apple-darwin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><code>-W help</code> - \u6253\u5370Linter\u7684\u6240\u6709\u53EF\u914D\u7F6E\u9009\u9879\u548C\u9ED8\u8BA4\u503C\u3002</p></li><li><p><code>-W OPT, --warn OPT</code> - \u8BBE\u7F6E\u67D0\u4E00\u4E2ALinter\u9009\u9879\u4E3AWarning\u3002</p></li><li><p><code>-A OPT, --allow OPT</code> - \u8BBE\u7F6E\u67D0\u4E00\u4E2ALinter\u9009\u9879\u4E3AAllow\u3002</p></li><li><p><code>-D OPT, --deny OPT</code> - \u8BBE\u7F6E\u67D0\u4E00\u4E2ALinter\u9009\u9879\u4E3ADeny\u3002</p></li><li><p><code>-F OPT, --forbit OPT</code> - \u8BBE\u7F6E\u67D0\u4E00\u4E2ALinter\u9009\u9879\u4E3AForbit\u3002</p></li><li><p><code>-C FLAG[=VAL], --codegen FLAG[=VAL]</code> - \u76EE\u6807\u4EE3\u7801\u751F\u6210\u7684\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u53EF\u4EE5\u7528<code>-C help</code>\u6765\u67E5\u770B\u914D\u7F6E\uFF0C\u503C\u5F97\u5173\u6CE8\u7684\u51E0\u4E2A\u662F</p><ul><li><code>linker=val</code> - \u6307\u5B9A\u94FE\u63A5\u5668\uFF1B</li><li><code>linker-args=val</code> - \u6307\u5B9A\u94FE\u63A5\u5668\u7684\u53C2\u6570\uFF1B</li><li><code>prefer-dynamic</code> - \u9ED8\u8BA4Rust\u7F16\u8BD1\u662F\u9759\u6001\u94FE\u63A5\uFF0C\u9009\u62E9\u8FD9\u4E2A\u914D\u7F6E\u5C06\u6539\u4E3A\u52A8\u6001\u94FE\u63A5\uFF1B</li><li><code>debug-info=level</code> - Debug\u4FE1\u606F\u7EA7\u6570\uFF0C<code>0</code> = \u4E0D\u751F\u6210\uFF0C<code>1</code> = \u53EA\u751F\u6210\u6587\u4EF6\u884C\u53F7\u8868\uFF0C<code>2</code> = \u5168\u90E8\u751F\u6210\uFF1B</li><li><code>opt-level=val</code> - \u4F18\u5316\u7EA7\u6570\uFF0C\u53EF\u9009<code>0-3</code>\uFF1B</li><li><code>debug_assertion</code> - \u663E\u5F0F\u5F00\u542F<code>cfg(debug_assertion)</code>\u6761\u4EF6\u3002</li></ul></li><li><p><code>-V, --version</code> - \u6253\u5370\u7F16\u8BD1\u5668\u7248\u672C\u53F7\u3002</p></li><li><p><code>-v, --verbose</code> - \u5F00\u542F\u5570\u55E6\u6A21\u5F0F\uFF08\u6253\u5370\u7F16\u8BD1\u5668\u6267\u884C\u7684\u65E5\u5FD7\uFF09\u3002</p></li><li><p><code>--extern NAME=PATH</code> - \u7528\u6765\u6307\u5B9A\u5916\u90E8\u7684Rust\u5E93\uFF08<code>*.rlib</code>\uFF09\u540D\u5B57\u548C\u8DEF\u5F84\uFF0C\u540D\u5B57\u5E94\u8BE5\u4E0E<code>extern crate</code>\u4E2D\u6307\u5B9A\u7684\u4E00\u6837\u3002</p></li><li><p><code>--sysroot PATH</code> - \u6307\u5B9A\u5DE5\u5177\u94FE\u6839\u76EE\u5F55\u3002</p></li><li><p><code>-Z flag</code> - \u7F16\u8BD1\u5668Debug\u7528\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u7528<code>-Z help</code>\u6765\u67E5\u770B\u53EF\u7528\u53C2\u6570\u3002</p></li><li><p><code>--color auto|always|never</code> - \u8F93\u51FA\u65F6\u5BF9\u65E5\u5FD7\u52A0\u989C\u8272</p><ul><li><code>auto</code> - \u81EA\u52A8\u9009\u62E9\u52A0\u8FD8\u662F\u4E0D\u52A0\uFF0C\u5982\u679C\u8F93\u51FA\u76EE\u6807\u662F\u865A\u62DF\u7EC8\u7AEF\uFF08TTY\uFF09\u7684\u8BDD\u5C31\u52A0\uFF0C\u5426\u5219\u5C31\u4E0D\u52A0\uFF1B</li><li><code>always</code> - \u7ED9\u6211\u52A0\uFF01</li><li><code>never</code> - \u4F60\u6562\u52A0\uFF1F</li></ul></li>`,20);function E(I,V){const a=l("ExternalLinkIcon");return p(),c(i,null,[r,e("ul",null,[u,e("li",null,[m,e("ul",null,[b,e("li",null,[h,k,e("a",g,[v,o(a)]),_]),e("li",null,[f,x,e("a",y,[L,o(a)]),w]),T,O,P]),N]),A])],64)}var q=d(t,[["render",E],["__file","rustc-option.html.vue"]]);export{q as default};
