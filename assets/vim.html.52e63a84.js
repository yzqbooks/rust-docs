import{r,a as l,b as s,d as e,F as o,c as t,e as n,o as i}from"./app.a489c551.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var c="/rust-prime/assets/editor-vim-wayslog.4ac29a41.png",d="/rust-prime/assets/editor-vim-welldone.1eda5096.png";const u={},m=t('<h1 id="vim-gvim\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vim-gvim\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> vim/GVim\u5B89\u88C5\u914D\u7F6E</h1><p>\u672C\u8282\u4ECB\u7ECDvim\u7684Rust\u652F\u6301\u914D\u7F6E\uFF0C\u5728\u9605\u8BFB\u672C\u8282\u4E4B\u524D\uFF0C\u6211\u4EEC\u5047\u5B9A\u4F60\u5DF2\u7ECF\u62E5\u6709\u4E86\u4E00\u4E2A\u53EF\u6267\u884C\u7684rustc\u7A0B\u5E8F\uFF0C\u5E76\u7F16\u8BD1\u597D\u4E86racer\u3002</p><h2 id="\u6211\u7684vim\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684vim\u622A\u56FE" aria-hidden="true">#</a> \u6211\u7684vim\u622A\u56FE</h2><p>\u5E94\u9080\u800C\u52A0</p><p><img src="'+c+`" alt="\u6B64\u5904\u5E94\u8BE5\u6709\u622A\u56FE"></p><h2 id="\u4F7F\u7528vundle" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528vundle" aria-hidden="true">#</a> \u4F7F\u7528vundle</h2><p>vundle\u662Fvim\u7684\u4E00\u4E2A\u63D2\u4EF6\u7BA1\u7406\u5DE5\u5177\uFF0C\u57FA\u672C\u4E0A\u7B97\u662F\u672C\u7C7B\u5F53\u4E2D\u6700\u4E3A\u6613\u7528\u7684\u4E86\u3002 \u9996\u5148\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u5B83</p><h3 id="linux-or-os-x" tabindex="-1"><a class="header-anchor" href="#linux-or-os-x" aria-hidden="true">#</a> linux or OS X</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p  ~/.vim/bundle/
<span class="token function">git</span> clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><ol><li>\u9996\u5148\u627E\u5230\u4F60\u7684gvim\u7684\u5B89\u88C5\u8DEF\u5F84\uFF0C\u7136\u540E\u5728\u8DEF\u5F84\u4E0B\u627E\u5230vimfiles\u6587\u4EF6\u5939</li><li>\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u5C06vundle\u5E93\u514B\u9686\u5230vimfiles/bundle/\u76EE\u5F55\u4E0B\u7684Vundle.vim\u6587\u4EF6\u5939\u4E2D</li></ol><h2 id="\u542F\u7528rust\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528rust\u652F\u6301" aria-hidden="true">#</a> \u542F\u7528rust\u652F\u6301</h2><h3 id="\u4E0B\u8F7D\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6E90\u7801" aria-hidden="true">#</a> \u4E0B\u8F7D\u6E90\u7801</h3>`,13),h=n("\u9996\u5148\uFF0C\u4F60\u9700\u8981\u4E0B\u8F7Drust-lang\u7684\u6E90\u7801\u6587\u4EF6\uFF0C\u5E76\u5C06\u5176\u89E3\u538B\u5230\u4E00\u4E2A\u8DEF\u5F84\u4E0B\u3002 \u8FD9\u4E2A\u6E90\u7801\u6587\u4EF6\u6211\u4EEC\u53EF\u4EE5\u4ECE"),b={href:"https://www.rust-lang.org/downloads.html",target:"_blank",rel:"noopener noreferrer"},v=n("rust\u5B98\u7F51"),_=n("\u4E0B\u8F7D\u5230\uFF0C\u8BF7\u4E0B\u8F7D\u4F60\u5BF9\u5E94\u5E73\u53F0\u7684\u6587\u4EF6\u3002 \u7136\u540E\u5C06\u5176\u89E3\u538B\u5230\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF0C\u5E76\u627E\u5230\u5176\u6E90\u7801\u6587\u4EF6\u4E2D\u7684"),g=s("code",null,"src",-1),k=n("\u76EE\u5F55\u3002 \u6BD4\u5982\u6211\u4EEC\u89E3\u538B\u6E90\u7801\u5305\u5230"),f=s("code",null,"C:\\\\rust-source\\",-1),x=n("\uFF0C\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u7684\u8DEF\u5F84\u5C31\u662F"),w=s("code",null,"C:\\\\rust-source\\src",-1),y=n("\uFF0C\u8BB0\u597D\u8FD9\u4E2A\u8DEF\u5F84\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u6B65\u7528\u5230\u5B83\u3002"),q=t(`<h3 id="\u4FEE\u6539vim\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539vim\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539vim\u914D\u7F6E</h3><p>\u9996\u5148\u627E\u5230\u4F60\u7684vimrc\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u5728\u5176\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token keyword">set</span> <span class="token builtin">nocompatible</span>
<span class="token keyword">filetype</span> off
<span class="token keyword">set</span> <span class="token builtin">rtp</span><span class="token operator">+=</span>~<span class="token operator">/</span><span class="token operator">.</span><span class="token keyword">vim</span><span class="token operator">/</span>bundle<span class="token operator">/</span>Vundle<span class="token operator">.</span><span class="token keyword">vim</span>
<span class="token keyword">call</span> vundle#<span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

Plugin <span class="token string">&#39;VundleVim/Vundle.vim&#39;</span>
Plugin <span class="token string">&#39;racer-rust/vim-racer&#39;</span>
Plugin <span class="token string">&#39;rust-lang/rust.vim&#39;</span>

<span class="token keyword">call</span> vundle#<span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">filetype</span> <span class="token keyword">on</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u540E\u4E3A\u4E86\u8BA9\u914D\u7F6E\u751F\u6548\uFF0C\u6211\u4EEC\u91CD\u542F\u6211\u4EEC\u7684(g)vim\uFF0C\u7136\u540E\u5728vim\u91CC\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:PluginInstall
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CCvundle\u4F1A\u81EA\u52A8\u7684\u53BB\u4ED3\u5E93\u91CC\u62C9\u53D6\u6211\u4EEC\u9700\u8981\u7684\u6587\u4EF6\uFF0C\u8FD9\u91CC\u4E3B\u8981\u662Fvim-racer\u548Crust.vim\u4E24\u4E2A\u5E93\u3002</p><h3 id="\u66F4\u591A\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u66F4\u591A\u7684\u914D\u7F6E</h3><p>\u4E3A\u4E86\u8BA9\u6211\u4EEC\u7684vim\u80FD\u6B63\u5E38\u7684\u4F7F\u7528\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5728vimrc\u914D\u7F6E\u6587\u4EF6\u91CC\u52A0\u5165\u4E00\u7CFB\u5217\u914D\u7F6E\uFF0C</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token string">&quot;&quot;</span> \u5F00\u542Frust\u7684\u81EA\u52A8reformat\u7684\u529F\u80FD
<span class="token keyword">let</span> g<span class="token punctuation">:</span>rustfmt_autosave <span class="token operator">=</span> <span class="token number">1</span>

<span class="token string">&quot;&quot;</span> \u624B\u52A8\u8865\u5168\u548C\u5B9A\u4E49\u8DF3\u8F6C
<span class="token keyword">set</span> <span class="token builtin">hidden</span>
<span class="token string">&quot;&quot;</span> \u8FD9\u4E00\u884C\u6307\u7684\u662F\u4F60\u7F16\u8BD1\u51FA\u6765\u7684racer\u6240\u5728\u7684\u8DEF\u5F84
<span class="token keyword">let</span> g<span class="token punctuation">:</span>racer_cmd <span class="token operator">=</span> <span class="token string">&quot;&lt;path-to-racer&gt;/target/release/racer&quot;</span>
<span class="token string">&quot;&quot;</span> \u8FD9\u91CC\u586B\u5199\u7684\u5C31\u662F\u6211\u4EEC\u5728<span class="token number">1.2</span><span class="token operator">.</span><span class="token number">1</span>\u4E2D\u8BA9\u4F60\u8BB0\u4F4F\u7684\u76EE\u5F55
<span class="token keyword">let</span> $RUST_SRC_PATH<span class="token operator">=</span><span class="token string">&quot;&lt;path-to-rust-srcdir&gt;/src/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u4F7F\u7528-youcompleteme" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-youcompleteme" aria-hidden="true">#</a> \u4F7F\u7528 YouCompleteMe</h4>`,10),C=n("YouCompleteMe \u662F vim \u4E0B\u7684\u667A\u80FD\u8865\u5168\u63D2\u4EF6, \u652F\u6301 C-family, Python, Rust \u7B49\u7684\u8BED\u6CD5\u8865\u5168, \u6574\u5408\u4E86\u591A\u79CD\u63D2\u4EF6, \u529F\u80FD\u5F3A\u5927. Linux \u5404\u53D1\u884C\u7248\u7684\u5B98\u65B9\u6E90\u91CC\u57FA\u672C\u90FD\u6709\u8F6F\u4EF6\u5305, \u53EF\u76F4\u63A5\u5B89\u88C5. \u5982\u679C\u6709\u9700\u8981\u8FDB\u884C\u7F16\u8BD1\u5B89\u88C5\u7684\u8BDD, \u53EF\u53C2\u8003"),V={href:"https://github.com/Valloric/YouCompleteMe#installation",target:"_blank",rel:"noopener noreferrer"},R=n("\u5B98\u65B9\u6559\u7A0B"),Y=t(`<p>\u8BA9 YCM \u652F\u6301 Rust \u9700\u8981\u5728\u5B89\u88C5 YCM \u8FC7\u7A0B\u4E2D\u6267\u884C ./install.py \u65F6\u52A0\u4E0A --racer-completer, \u5E76\u5728 .vimrc \u4E2D\u6DFB\u52A0\u5982\u4E0B\u8BBE\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let g:ycm_rust_src_path=&quot;&lt;path-to-rust-srcdir&gt;/src/&quot;
&quot;&quot; \u4E00\u4E9B\u65B9\u4FBF\u7684\u5FEB\u6377\u952E
&quot;&quot;&quot; \u5728 Normal \u6A21\u5F0F\u4E0B, \u6572 &lt;leader&gt;jd \u8DF3\u8F6C\u5230\u5B9A\u4E49\u6216\u58F0\u660E(\u652F\u6301\u8DE8\u6587\u4EF6)
nnoremap &lt;leader&gt;jd :YcmCompleter GoToDefinitionElseDeclaration&lt;CR&gt;
&quot;&quot;&quot; \u5728 Insert \u6A21\u5F0F\u4E0B, \u6572 &lt;leader&gt;; \u8865\u5168
inoremap &lt;leader&gt;; &lt;C-x&gt;&lt;C-o&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7ECF\u8FC7\u4E0D\u591A\u7684\u914D\u7F6E\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u5982\u4E0B\u529F\u80FD\uFF1A</p><ol><li>\u57FA\u672C\u7684c-x c-o\u8865\u5168 (\u4F7F\u7528 YCM \u540E, \u80FD\u505A\u5230\u81EA\u52A8\u8865\u5168)</li><li>\u8BED\u6CD5\u7740\u8272</li><li>gd\u8DF3\u8F6C\u5230\u5B9A\u4E49</li></ol><p>\u603B\u4F53\u6765\u770B\u652F\u6301\u5EA6\u5E76\u4E0D\u9AD8\u3002</p><p><img src="`+d+'" alt="\u6B64\u5904\u5E94\u8BE5\u6709\u7B2C\u4E8C\u5F20\u622A\u56FE"></p><h3 id="\u989D\u5916\u7684" tabindex="-1"><a class="header-anchor" href="#\u989D\u5916\u7684" aria-hidden="true">#</a> \u989D\u5916\u7684</h3><p>Q1. \u989C\u8272\u597D\u632B</p>',9),M=n("A1. \u6211\u63A8\u8350\u4E00\u4E2A\u914D\u8272\uFF0C\u4E5F\u662F\u6211\u81EA\u5DF1\u7528\u7684 "),P={href:"https://github.com/tomasr/molokai",target:"_blank",rel:"noopener noreferrer"},N=n("molokai"),E=n("\u66F4\u8BE6\u7EC6\u5185\u5BB9\u53EF\u4EE5\u53C2\u89C1\u6211\u7684"),I={href:"https://github.com/wayslog/dotfiles/blob/master/_vimrc",target:"_blank",rel:"noopener noreferrer"},S=n("vimrc\u914D\u7F6E"),T=n("\uFF0C\u5F53\u7136\uFF0C\u6211\u8FD9\u4E2A\u7528\u7684\u662F\u6BD4\u8F83\u8001\u7684\u7248\u672C\u7684vundle\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002"),B=s("p",null,"Have a nice Rust !",-1);function L(j,A){const a=r("ExternalLinkIcon");return i(),l(o,null,[m,s("p",null,[h,s("a",b,[v,e(a)]),_,g,k,f,x,w,y]),q,s("p",null,[C,s("a",V,[R,e(a)])]),Y,s("p",null,[M,s("a",P,[N,e(a)])]),s("p",null,[E,s("a",I,[S,e(a)]),T]),B],64)}var G=p(u,[["render",L],["__file","vim.html.vue"]]);export{G as default};
