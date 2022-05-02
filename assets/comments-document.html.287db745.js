import{c as e}from"./app.a489c551.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h1 id="\u6CE8\u91CA\u4E0E\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA\u4E0E\u6587\u6863" aria-hidden="true">#</a> \u6CE8\u91CA\u4E0E\u6587\u6863</h1><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>\u5728 Rust \u91CC\u9762\u6CE8\u91CA\u5206\u6210\u4E24\u79CD\uFF0C\u884C\u6CE8\u91CA\u548C\u5757\u6CE8\u91CA\u3002\u5B83\u7684\u5F62\u5F0F\u548C C \u8BED\u8A00\u662F\u4E00\u6837\u7684\u3002 \u4E24\u79CD\u6CE8\u91CA\u5206\u522B\u662F\uFF1A</p><blockquote><ol><li>\u884C\u6CE8\u91CA\u4F7F\u7528 <code>//</code> \u653E\u5728\u6CE8\u91CA\u524D\u9762\u3002\u6BD4\u5982:</li></ol></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// I love Rust, but I hate Rustc.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><ol start="2"><li>\u5757\u6CE8\u91CA\u5206\u522B\u4F7F\u7528<code>/*</code>\u548C<code>*/</code>\u5305\u88F9\u9700\u8981\u6CE8\u91CA\u7684\u5185\u5BB9\u3002\u6BD4\u5982\uFF1A</li></ol></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* W-Cat \u662F\u4E2A\u5927\u80D6\u732B\uFF0CN-Cat \u662F\u4E2A\u9AD8\u5EA6\u8FD1\u89C6\u732B\u3002*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2><p>Rust \u81EA\u5E26\u6709\u6587\u6863\u529F\u80FD\u7684\u6CE8\u91CA\uFF0C\u5206\u522B\u662F<code>///</code>\u548C<code>//!</code>\u3002\u652F\u6301 Markdown \u683C\u5F0F</p><ol><li><code>///</code>\u7528\u6765\u63CF\u8FF0\u7684\u5B83\u540E\u9762\u63A5\u7740\u7684\u9879\u3002</li><li><code>//!</code>\u7528\u6765\u63CF\u8FF0\u5305\u542B\u5B83\u7684\u9879\uFF0C\u4E00\u822C\u7528\u5728\u6A21\u5757\u6587\u4EF6\u7684\u5934\u90E8\u3002 \u6BD4\u5982\u5728 main.rs \u6587\u4EF6\u4E2D\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        //! # The first line
        //! The second line
        /// Adds one to the number given.
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u751F\u6210-html-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-html-\u6587\u6863" aria-hidden="true">#</a> \u751F\u6210 html \u6587\u6863</h3><ul><li><code>rustdoc main.rs</code></li></ul><p>\u6216\u8005</p><ul><li><code>cargo doc</code></li></ul>`,15);function l(r,i){return s}var t=n(a,[["render",l],["__file","comments-document.html.vue"]]);export{t as default};
