import{r as s,a as r,b as e,d as l,F as c,c as i,e as n,o as t}from"./app.a489c551.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var o="/rust-prime/assets/editor-emacs-base.e012cf00.png",m="/rust-prime/assets/editor-emacs-error-checking.0fc18722.png",u="/rust-prime/assets/editor-emacs-completion.6fbe0ce8.png",d="/rust-prime/assets/editor-emacs-jump.f5fd69ac.gif";const b={},h=i('<h1 id="emacs" tabindex="-1"><a class="header-anchor" href="#emacs" aria-hidden="true">#</a> Emacs</h1><p>\u672C\u8282\u4ECB\u7ECD Emacs (Version 24) \u7684 Rust \u914D\u7F6E\uFF0C\u5047\u8BBE\u4F60\u5DF2\u7ECF\u5B89\u88C5\u597D\u4E86 Emacs\uFF0C\u5E76\u4E14\u6709\u4F7F\u7528 Emacs \u7684\u7ECF\u9A8C\u3002\u5177\u4F53\u7684\u5B89\u88C5\u548C\u4F7F\u7528\u8BF4\u660E\uFF0C\u89C1\u7F51\u4E0A\u76F8\u5173\u6587\u6863\uFF0C\u5728\u6B64\u4E0D\u8D58\u8FF0\u3002</p><p>\u53E6\u5916\uFF0C\u672C\u8282\u7684\u4F8B\u5B50\u662F\u5728 Mac OS \u4E0A\uFF0C\u5728 Linux \u4E0A\u9762\u57FA\u672C\u4E00\u6837\u3002</p><p>Windows\u7684Emacs\u7528\u6237\u4EC5\u4F5C\u53C2\u8003\u3002</p><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>Emacs \u7684 rust-mode \u63D0\u4F9B\u4E86\u8BED\u6CD5\u9AD8\u4EAE\u663E\u793A\u548C elisp \u51FD\u6570\uFF0C\u53EF\u4EE5\u56F4\u7ED5 Rust \u51FD\u6570\u5B9A\u4E49\u79FB\u52A8\u5149\u6807\u3002\u6709\u51E0\u4E2A\u63D2\u4EF6\u63D0\u4F9B\u4E86\u9644\u52A0\u7684\u529F\u80FD\uFF0C\u5982\u81EA\u52A8\u8865\u5168\u548C\u52A8\u6001\u8BED\u6CD5\u68C0\u67E5\u3002</p><p><img src="'+o+`" alt=""></p><h2 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u63D2\u4EF6</h2><p>\u9996\u5148\uFF0C\u9700\u8981\u5C06 melpa \u4EE3\u7801\u5E93\u6DFB\u52A0\u5230\u4F60\u7684\u63D2\u4EF6\u5217\u8868\u4E2D\uFF0C\u624D\u80FD\u5B89\u88C5 Rust \u9700\u8981\u7684\u63D2\u4EF6\u3002\u5C06\u4E0B\u9762\u7684\u4EE3\u7801\u7247\u6BB5\u52A0\u5165\u4F60\u7684<code>~/.emacs.d/init.el</code> \u6587\u4EF6\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;; Add melpa repository to archives
(add-to-list &#39;package-archives
    &#39;(&quot;melpa&quot; . &quot;http://melpa.milkbox.net/packages/&quot;) t)

;; Initialize packages
(package-initialize)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u66F4\u65B0\u63D2\u4EF6\u5217\u8868\u3002</p><ul><li>M-x eval-buffer</li><li>M-x package-refresh-contents</li></ul><p>\u7136\u540E\uFF0C\u5C31\u53EF\u4EE5\u5B89\u88C5\u63D2\u4EF6\uFF0C\u5728 Emacs \u4E2D\u4F7F\u7528 Rust \u4E86\u3002\u8FD0\u884C <code>M-x package-list-packages</code>\uFF0C\u7528 <code>i</code> \u6807\u8BB0\u4E0B\u8FF0\u63D2\u4EF6\u8FDB\u884C\u5B89\u88C5\uFF0C\u5F53\u6240\u6709\u7684\u63D2\u4EF6\u9009\u62E9\u597D\u4E86\u4E4B\u540E\uFF0C\u7528 <code>x</code> \u6267\u884C\u5B89\u88C5\u3002</p><ul><li>company</li><li>company-racer</li><li>racer</li><li>flycheck</li><li>flycheck-rust</li><li>rust-mode</li></ul><p>\u5C06\u4E0B\u9762\u7684\u4EE3\u7801\u7247\u6BB5\u52A0\u5165\u4F60\u7684<code>~/.emacs.d/init.el</code> \u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>;; Enable company globally for all mode
(global-company-mode)

;; Reduce the time after which the company auto completion popup opens
(setq company-idle-delay 0.2)

;; Reduce the number of characters before company kicks in
(setq company-minimum-prefix-length 1)
;; Set path to racer binary
(setq racer-cmd &quot;/usr/local/bin/racer&quot;)

;; Set path to rust src directory
(setq racer-rust-src-path &quot;/Users/YOURUSERNAME/.rust/src/&quot;)

;; Load rust-mode when you open \`.rs\` files
(add-to-list &#39;auto-mode-alist &#39;(&quot;\\\\.rs\\\\&#39;&quot; . rust-mode))

;; Setting up configurations when you load rust-mode
(add-hook &#39;rust-mode-hook

     &#39;(lambda ()
     ;; Enable racer
     (racer-activate)

	 ;; Hook in racer with eldoc to provide documentation
     (racer-turn-on-eldoc)

	 ;; Use flycheck-rust in rust-mode
     (add-hook &#39;flycheck-mode-hook #&#39;flycheck-rust-setup)

	 ;; Use company-racer in rust mode
     (set (make-local-variable &#39;company-backends) &#39;(company-racer))

	 ;; Key binding to jump to method definition
     (local-set-key (kbd &quot;M-.&quot;) #&#39;racer-find-definition)

	 ;; Key binding to auto complete and indent
     (local-set-key (kbd &quot;TAB&quot;) #&#39;racer-complete-or-indent)))

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><img src="`+m+'" alt=""></p><h2 id="\u914D\u7F6E-racer" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-racer" aria-hidden="true">#</a> \u914D\u7F6E Racer</h2><p>Racer \u9700\u8981 Rust \u7684\u6E90\u4EE3\u7801\u7528\u4E8E\u81EA\u52A8\u8865\u5168\u3002</p><ul><li>git clone https://github.com/rust-lang/rust.git ~/.rust</li><li>\u91CD\u65B0\u542F\u52A8 Emacs \u5E76\u6253\u5F00\u4E00\u4E2A Rust \u6E90\u4EE3\u7801\u6587\u4EF6\u3002</li></ul><p><img src="'+u+'" alt=""></p><h2 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h2><p>\u73B0\u5728\uFF0C\u53EF\u4EE5\u5728 Emacs \u4E2D\u7F16\u8F91 Rust \u6E90\u4EE3\u7801\u6587\u4EF6\u4E86\u3002\u529F\u80FD\u603B\u7ED3\u5982\u4E0B\uFF1A</p><ul><li>\u8BED\u6CD5\u9AD8\u4EAE\u663E\u793A\u548C\u81EA\u52A8\u7F29\u8FDB</li><li>\u81EA\u52A8\u8865\u5168</li><li>\u52A8\u6001\u8BED\u6CD5\u9519\u8BEF\u68C0\u67E5</li><li>\u8DF3\u8F6C\u5230\u51FD\u6570\u5B9A\u4E49</li><li>\u5185\u5D4C\u6587\u6863</li></ul><p><img src="'+d+'" alt=""></p><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2>',26),f=e("li",null,"\u672C\u8282\u7684\u5185\u5BB9\u9002\u7528\u4E8E Emacs Version 24\uFF1B\u7248\u672C 23 \u7684\u914D\u7F6E\u65B9\u6CD5\u4E0D\u540C\uFF1B\u7248\u672C 22 \u53CA\u4EE5\u4E0B\u4E0D\u652F\u6301\u3002",-1),g=n("MacOS \u81EA\u5E26\u7684 Emacs \u7248\u672C\u662F 22\uFF0C\u7248\u672C 24 \u53EF\u4EE5\u4ECE"),_={href:"http://emacsformacosx.com/",target:"_blank",rel:"noopener noreferrer"},k=n("\u8FD9\u91CC"),x=n("\u4E0B\u8F7D\u3002");function y(v,q){const a=s("ExternalLinkIcon");return t(),r(c,null,[h,e("ol",null,[f,e("li",null,[g,e("a",_,[k,l(a)]),x])])],64)}var M=p(b,[["render",y],["__file","emacs.html.vue"]]);export{M as default};
