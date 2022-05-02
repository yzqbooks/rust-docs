import{r as l,a as r,b as n,d as a,F as i,e,c as t,o}from"./app.a489c551.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=n("h1",{id:"rust-\u7248\u672C\u7BA1\u7406\u5DE5\u5177-rustup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rust-\u7248\u672C\u7BA1\u7406\u5DE5\u5177-rustup","aria-hidden":"true"},"#"),e(" Rust \u7248\u672C\u7BA1\u7406\u5DE5\u5177: rustup")],-1),d=n("p",null,"rustup \u662Frust\u5B98\u65B9\u7684\u7248\u672C\u7BA1\u7406\u5DE5\u5177\u3002\u5E94\u5F53\u4F5C\u4E3A\u5B89\u88C5 Rust \u7684\u9996\u9009\u3002",-1),b=e("\u9879\u76EE\u4E3B\u9875\u662F: "),h={href:"https://github.com/rust-lang-nursery/rustup.rs",target:"_blank",rel:"noopener noreferrer"},m=e("https://github.com/rust-lang-nursery/rustup.rs"),g=t('<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>\u7BA1\u7406\u5B89\u88C5\u591A\u4E2A\u5B98\u65B9\u7248\u672C\u7684 Rust \u4E8C\u8FDB\u5236\u7A0B\u5E8F\u3002</li><li>\u914D\u7F6E\u57FA\u4E8E\u76EE\u5F55\u7684 Rust \u5DE5\u5177\u94FE\u3002</li><li>\u5B89\u88C5\u548C\u66F4\u65B0\u6765\u81EA Rust \u7684\u53D1\u5E03\u901A\u9053: nightly, beta \u548C stable\u3002</li><li>\u63A5\u6536\u6765\u81EA\u53D1\u5E03\u901A\u9053\u66F4\u65B0\u7684\u901A\u77E5\u3002</li><li>\u4ECE\u5B98\u65B9\u5B89\u88C5\u5386\u53F2\u7248\u672C\u7684 nightly \u5DE5\u5177\u94FE\u3002</li><li>\u901A\u8FC7\u6307\u5B9A stable \u7248\u672C\u6765\u5B89\u88C5\u3002</li><li>\u5B89\u88C5\u989D\u5916\u7684 std \u7528\u4E8E\u4EA4\u53C9\u7F16\u8BD1\u3002</li><li>\u5B89\u88C5\u81EA\u5B9A\u4E49\u7684\u5DE5\u5177\u94FE\u3002</li><li>\u72EC\u7ACB\u6BCF\u4E2A\u5B89\u88C5\u7684 Cargo metadata\u3002</li><li>\u6821\u9A8C\u4E0B\u8F7D\u7684 hash \u503C\u3002</li><li>\u6821\u9A8C\u7B7E\u540D (\u5982\u679C GPG \u5B58\u5728)\u3002</li><li>\u65AD\u70B9\u7EED\u4F20\u3002</li><li>\u53EA\u4F9D\u8D56 bash, curl \u548C\u5E38\u89C1 unix \u5DE5\u5177\u3002</li><li>\u652F\u6301 Linux, OS X, Windows(via MSYS2)\u3002</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>',4),_=e("\u5728"),f={href:"http://www.rustup.rs",target:"_blank",rel:"noopener noreferrer"},v=e("rustup\u7684\u4E3B\u9875"),x=e("\u4E0B\u8F7D\u5E76\u8FD0\u884C"),y={href:"https://win.rustup.rs/",target:"_blank",rel:"noopener noreferrer"},w=e("rustup-init.exe"),k=e(",\u5E76\u6309\u7167\u63D0\u793A\u9009\u62E9\u9009\u9879\u3002"),S=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Welcome to Rust!

This will download and install the official compiler for the Rust programming
language, and its package manager, Cargo.

It will add the cargo, rustc, rustup and other commands to Cargo&#39;s bin
directory, located at:

  C:\\Users\\Liqueur Librazy\\.cargo\\bin

This path will then be added to your PATH environment variable by modifying the
HKEY_CURRENT_USER/Environment/PATH registry key.

You can uninstall at any time with rustup self uninstall and these changes will
be reverted.

Current installation options:

   default host triple: x86_64-pc-windows-msvc
     default toolchain: stable
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u4E09\u4E2A\u9009\u9879\u5206\u522B\u662F</p><ol><li>\u5F00\u59CB\u5B89\u88C5\uFF08\u9ED8\u8BA4\u9009\u9879\uFF09</li><li>\u81EA\u5B9A\u4E49\u5B89\u88C5</li><li>\u53D6\u6D88</li></ol><p>\u5176\u4E2D\u81EA\u5B9A\u4E49\u5B89\u88C5\u53EF\u4EE5\u66F4\u6539\u9ED8\u8BA4\u67B6\u6784\u4E0E\u5DE5\u5177\u94FE\u3001\u662F\u5426\u6DFB\u52A0 PATH\u3002\u4F8B\u5982\u60F3\u8981\u9009\u62E9 nightly \u5DE5\u5177\u94FE\u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u81EA\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>I&#39;m going to ask you the value of each these installation options.
You may simply press the Enter key to leave unchanged.

Default host triple?


Default toolchain? (stable/beta/nightly)
nightly

Modify PATH variable? (y/n)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8BBE\u7F6E\u5B8C\u6BD5\u540E\uFF0C\u9009\u62E9 1 \u4EE5\u5F00\u59CB\u5B89\u88C5\u3002</p><h3 id="linux-macos" tabindex="-1"><a class="header-anchor" href="#linux-macos" aria-hidden="true">#</a> Linux &amp; macOS</h3><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl https://sh.rustup.rs -sSf | sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u547D\u4EE4\u5C06\u4F1A\u7F16\u8BD1\u548C\u5B89\u88C5 rustup, \u5B89\u88C5\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u63D0\u793A\u4F60\u8F93\u5165 sudo \u7684\u5BC6\u7801\u3002 \u7136\u540E, \u4ED6\u4F1A\u4E0B\u8F7D\u548C\u5B89\u88C5 stable \u7248\u672C\u7684\u5DE5\u5177\u94FE, \u5F53\u6267\u884C rustc, rustdoc \u548C cargo \u65F6, \u5C06\u4F1A\u914D\u7F6E\u4ED6\u4E3A\u9ED8\u8BA4\u5DE5\u5177\u94FE\u3002</p><p><code>Unix</code> \u4E0A\u5B89\u88C5\u540E\u5DE5\u5177\u94FE\u4F1A\u88AB\u5B89\u88C5\u5230 <code>$HOME/.cargo/bin</code> \u76EE\u5F55\u3002</p><p><code>.cargo/bin</code> \u76EE\u5F55\u4F1A\u88AB\u6DFB\u52A0\u5230\u7CFB\u7EDF\u7684 <code>$PATH</code> \u73AF\u5883\u53D8\u91CF,\u91CD\u65B0\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528 <code>rustc</code>\uFF0C<code>cargo</code> \u7B49\u547D\u4EE4\u3002</p><h2 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rustup self uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>\u5B89\u88C5\u540E\u4F1A\u5F97\u5230\u4E00\u4E2A rustup \u547D\u4EE4, \u591A\u4F7F\u7528\u547D\u4EE4\u81EA\u5E26\u7684\u5E2E\u52A9\u63D0\u793A, \u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u4F60\u9700\u8981\u529F\u80FD\u3002</p><h3 id="\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u5E2E\u52A9" aria-hidden="true">#</a> \u5E2E\u52A9</h3><p>\u8FD0\u884C <code> rustup -h</code> \u4F60\u5C06\u4F1A\u5F97\u5230\u5982\u4E0B\u63D0\u793A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u276F rustup -h
rustup 1.5.0 (92d0d1e9e 2017-06-24)
The Rust toolchain installer

USAGE:
    rustup.exe [FLAGS] [SUBCOMMAND]

FLAGS:
    -v, --verbose    Enable verbose output
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    show           Show the active and installed toolchains
    update         Update Rust toolchains and rustup
    default        Set the default toolchain
    toolchain      Modify or query the installed toolchains
    target         Modify a toolchain&#39;s supported targets
    component      Modify a toolchain&#39;s installed components
    override       Modify directory toolchain overrides
    run            Run a command with an environment configured for a given toolchain
    which          Display which binary will be run for a given command
    doc            Open the documentation for the current toolchain
    self           Modify the rustup installation
    set            Alter rustup settings
    completions    Generate completion scripts for your shell
    help           Prints this message or the help of the given subcommand(s)

DISCUSSION:
    rustup installs The Rust Programming Language from the official
    release channels, enabling you to easily switch between stable,
    beta, and nightly compilers and keep them updated. It makes
    cross-compiling simpler with binary builds of the standard library
    for common platforms.

    If you are new to Rust consider running \`rustup doc --book\` to
    learn Rust.

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u6839\u636E\u63D0\u793A, \u4F7F\u7528 <code>rust help &lt;command&gt;</code> \u6765\u67E5\u770B\u5B50\u547D\u4EE4\u7684\u5E2E\u52A9\u3002</p>`,20),M=n("code",null,"rustup doc --book",-1),R=e(" \u4F1A\u6253\u5F00\u82F1\u6587\u7248\u7684 "),A={href:"https://doc.rust-lang.org/book/",target:"_blank",rel:"noopener noreferrer"},C=e("The Rust Programming Language"),P=e("\u3002"),T=t('<h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><p><code>rustup default &lt;toolchain&gt;</code> \u914D\u7F6E\u9ED8\u8BA4\u5DE5\u5177\u94FE\u3002</p><p><code>rustup show</code> \u663E\u793A\u5F53\u524D\u5B89\u88C5\u7684\u5DE5\u5177\u94FE\u4FE1\u606F\u3002</p><p><code>rustup update</code> \u68C0\u67E5\u5B89\u88C5\u66F4\u65B0\u3002</p><p><code>rustup toolchain [SUBCOMMAND]</code> \u914D\u7F6E\u5DE5\u5177\u94FE</p>',5),L=n("li",null,[n("code",null,"rustup toolchain install <toolchain>"),e(" \u5B89\u88C5\u5DE5\u5177\u94FE\u3002")],-1),U=n("li",null,[n("code",null,"rustup toolchain uninstall <toolchain>"),e(" \u5378\u8F7D\u5DE5\u5177\u94FE\u3002")],-1),D=n("code",null,'rustup toolchain link <toolchain-name> "<toolchain-path>"',-1),E=e(" \u8BBE\u7F6E"),N={href:"https://github.com/rust-lang-nursery/rustup.rs#working-with-custom-toolchains-and-local-builds",target:"_blank",rel:"noopener noreferrer"},O=e("\u81EA\u5B9A\u4E49\u5DE5\u5177\u94FE"),q=e("\u3002"),B=t(`<p>\u5176\u4E2D\u6807\u51C6\u7684 <code>&lt;toolchain&gt;</code>\u5177\u6709\u5982\u4E0B\u7684\u5F62\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`&lt;channel&gt;[-&lt;date&gt;][-&lt;host&gt;]\`
&lt;channel&gt;       = stable|beta|nightly|&lt;version&gt;
&lt;date&gt;          = YYYY-MM-DD
&lt;host&gt;          = &lt;target-triple&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982 <code>stable-x86_64-pc-windows-msvc</code> <code>nightly-2017-7-25</code> <code>1.18.0</code> \u7B49\u90FD\u662F\u5408\u6CD5\u7684toolchain\u540D\u79F0\u3002</p>`,3),H=t("<p><code>rustup override [SUBCOMMAND]</code> \u914D\u7F6E\u4E00\u4E2A\u76EE\u5F55\u4EE5\u53CA\u5176\u5B50\u76EE\u5F55\u7684\u9ED8\u8BA4\u5DE5\u5177\u94FE</p><blockquote><p>\u4F7F\u7528 <code>--path &lt;path&gt;</code> \u6307\u5B9A\u76EE\u5F55\u6216\u5728\u67D0\u4E2A\u76EE\u5F55\u4E0B\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4</p><ul><li><code>rustup override set &lt;toolchain&gt;</code> \u8BBE\u7F6E\u8BE5\u76EE\u5F55\u4EE5\u53CA\u5176\u5B50\u76EE\u5F55\u7684\u9ED8\u8BA4\u5DE5\u5177\u94FE\u3002</li><li><code>rustup override unset</code> \u53D6\u6D88\u76EE\u5F55\u4EE5\u53CA\u5176\u5B50\u76EE\u5F55\u7684\u9ED8\u8BA4\u5DE5\u5177\u94FE\u3002</li></ul><p>\u4F7F\u7528 <code>rustup override list</code> \u67E5\u770B\u5DF2\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u5DE5\u5177\u94FE\u3002</p></blockquote><p><code>rustup target [SUBCOMMAND]</code> \u914D\u7F6E\u5DE5\u5177\u94FE\u7684\u53EF\u7528\u76EE\u6807</p><blockquote><ul><li><code>rustup target add &lt;target&gt;</code> \u5B89\u88C5\u76EE\u6807\u3002</li><li><code>rustup target remove &lt;target&gt;</code> \u5378\u8F7D\u76EE\u6807\u3002</li><li><code>rustup target add --toolchain &lt;toolchain&gt; &lt;target&gt;</code> \u4E3A\u7279\u5B9A\u5DE5\u5177\u94FE\u5B89\u88C5\u76EE\u6807\u3002</li></ul></blockquote><p><code>rustup component</code> \u914D\u7F6E rustup \u5B89\u88C5\u7684\u7EC4\u4EF6</p><blockquote><ul><li><code>rustup component add &lt;component&gt;</code> \u5B89\u88C5\u7EC4\u4EF6</li><li><code>rustup component remove &lt;component&gt;</code> \u5378\u8F7D\u7EC4\u4EF6</li><li><code>rustup component list</code> \u5217\u51FA\u53EF\u7528\u7EC4\u4EF6</li></ul><p>\u5E38\u7528\u7EC4\u4EF6\uFF1A</p><ul><li>Rust \u6E90\u4EE3\u7801 <code>rustup component add rust-src</code></li><li>Rust Langular Server (RLS) <code>rustup component add rls</code></li></ul></blockquote>",6);function I(Y,G){const s=l("ExternalLinkIcon");return o(),r(i,null,[p,d,n("p",null,[b,n("a",h,[m,a(s)])]),g,n("p",null,[_,n("a",f,[v,a(s)]),x,n("a",y,[w,a(s)]),k]),S,n("p",null,[M,R,n("a",A,[C,a(s)]),P]),T,n("blockquote",null,[n("ul",null,[L,U,n("li",null,[D,E,n("a",N,[O,a(s)]),q])]),B]),H],64)}var W=c(u,[["render",I],["__file","rustup.html.vue"]]);export{W as default};
