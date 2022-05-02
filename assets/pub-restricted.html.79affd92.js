import{r as a,a as r,b as e,d as c,F as i,e as s,c as l,o as p}from"./app.a489c551.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const t={},u=e("h1",{id:"pub-restricted",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pub-restricted","aria-hidden":"true"},"#"),s(" pub restricted")],-1),o=e("h2",{id:"\u6982\u89C8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6982\u89C8","aria-hidden":"true"},"#"),s(" \u6982\u89C8")],-1),d=s("\u8FD9\u662F rust1.18 \u65B0\u589E\u7684\u4E00\u4E2A\u8BED\u6CD5\u3002\u5728\u6B64\u4E4B\u524D\u7684\u7248\u672C\uFF0C"),m=e("code",null,"item",-1),h=s(" \u53EA\u6709 "),f=e("code",null,"pub",-1),_=s("/non-"),g=e("code",null,"pub",-1),v=s(" \u4E24\u79CD\u5206\u7C7B\uFF0Cpub restricted \u8FD9\u4E2A\u8BED\u6CD5\u7528\u6765\u6269\u5C55 "),R=e("code",null,"pub",-1),x=s(" \u7684\u4F7F\u7528\uFF0C\u4F7F\u5176\u80FD\u591F\u6307\u5B9A\u60F3\u8981\u7684\u4F5C\u7528\u57DF(\u53EF\u89C1\u8303\u56F4)\uFF0C\u8BE6\u60C5\u53C2\u89C1RFC "),I={href:"https://github.com/rust-lang/rfcs/blob/master/text/1422-pub-restricted.md",target:"_blank",rel:"noopener noreferrer"},y=s("1422-pub-restricted.md"),w=s("\u3002"),J=l(`<p>\u5728 Rust \u4E2D <code>crate</code> \u662F\u4E00\u4E2A\u6A21\u5757\u6811\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F <code>pub(crate) item;</code> \u6765\u9650\u5236 <code>item</code> \u53EA\u5728\u5F53\u524D <code>crate</code> \u4E2D\u53EF\u7528\uFF0C\u5728\u5F53\u524D <code>crate</code> \u7684\u5176\u4ED6\u5B50\u6811\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>use + path</code> \u7684\u8BED\u6CD5\u6765\u5F15\u7528 <code>item</code>\u3002</p><h2 id="\u8BBE\u8BA1\u52A8\u56E0" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u52A8\u56E0" aria-hidden="true">#</a> \u8BBE\u8BA1\u52A8\u56E0</h2><p>Rust1.18 \u4E4B\u524D\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8981\u8BBE\u8BA1\u4E00\u4E2A item <code>x</code> \u53EF\u4EE5\u5728\u591A\u5904\u4F7F\u7528\uFF0C\u90A3\u4E48\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A</p><ul><li>\u5728\u6839\u76EE\u5F55\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u975E <code>pub</code> item\uFF1B</li><li>\u5728\u5B50\u6A21\u5757\u4E2D\u5B9A\u4E49\u4E00\u4E2A <code>pub</code> item\uFF0C\u540C\u65F6\u901A\u8FC7 <code>use</code> \u5C06\u8FD9\u4E2A\u9879\u76EE\u5F15\u7528\u5230\u6839\u76EE\u5F55\u3002</li></ul><p>\u4F46\u662F\uFF0C\u6709\u65F6\u5019\u8FD9\u4E24\u79CD\u65B9\u6CD5\u90FD\u5E76\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u3002\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E0C\u671B\u5BF9\u4E8E\u67D0\u4E9B\u7279\u5B9A\u7684\u6A21\u5757\uFF0C\u8BE5item\u53EF\u89C1\uFF0C\u800C\u5176\u4ED6\u6A21\u5757\u4E0D\u53EF\u89C1\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>// Intent: \`a\` exports \`I\`, \`bar\`, and \`foo\`, but nothing else.
pub mod a {
    pub const I: i32 = 3;

    // \`semisecret\` will be used &quot;many&quot; places within \`a\`, but
    // is not meant to be exposed outside of \`a\`.
    fn semisecret(x: i32) -&gt; i32  { use self::b::c::J; x + J }

    pub fn bar(z: i32) -&gt; i32 { semisecret(I) * z }
    pub fn foo(y: i32) -&gt; i32 { semisecret(I) + y }

    mod b {
        mod c {
            const J: i32 = 4; // J is meant to be hidden from the outside world.
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7F16\u8BD1\u65E0\u6CD5\u901A\u8FC7\uFF0C\u56E0\u4E3A <code>J</code> \u65E0\u6CD5\u5728 <code>mod c</code> \u7684\u5916\u90E8\u8BBF\u95EE\uFF0C\u800C <code>fn semisecret</code> \u5C1D\u8BD5\u5728 <code>mod a</code> \u4E2D\u8BBF\u95EE <code>J</code>.</p><p>\u5728 rust1.18 \u4E4B\u524D\uFF0C\u4FDD\u6301<code>J</code>\u79C1\u6709\uFF0C\u5E76\u80FD\u591F\u8BA9 <code>a</code> \u4F7F\u7528 <code>fn semisecret</code> \u7684\u6B63\u786E\u5199\u6CD5\u662F\uFF0C\u5C06 <code>fn semisecret</code> \u79FB\u52A8\u5230 <code>mod c</code> \u4E2D\uFF0C\u5E76\u5C06\u5176 <code>pub</code>\uFF0C\u4E4B\u540E\u6839\u636E\u9700\u8981\u53EF\u4EE5\u91CD\u65B0\u5BFC\u51FA <code>semisecret</code>\u3002(\u5982\u679C\u4E0D\u9700\u8981\u4FDD\u6301 <code>J</code> \u7684\u79C1\u6709\u5316\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C <code>pub</code>\uFF0C\u4E4B\u540E\u53EF\u4EE5\u5728 <code>b</code> \u4E2D <code>pub use self::c::J</code> \u6216\u8005\u76F4\u63A5 <code>pub c</code>)</p><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>// Intent: \`a\` exports \`I\`, \`bar\`, and \`foo\`, but nothing else.
pub mod a {
    pub const I: i32 = 3;

    // \`semisecret\` will be used &quot;many&quot; places within \`a\`, but
    // is not meant to be exposed outside of \`a\`.
    // (If we put \`pub use\` here, then *anyone* could access it.)
    use self::b::semisecret;

    pub fn bar(z: i32) -&gt; i32 { semisecret(I) * z }
    pub fn foo(y: i32) -&gt; i32 { semisecret(I) + y }

    mod b {
        pub use self::c::semisecret;
        mod c {
            const J: i32 = 4; // J is meant to be hidden from the outside world.
            pub fn semisecret(x: i32) -&gt; i32  { x + J }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4F46\u662F\uFF0C\u8FD9\u91CC\u6709\u4E2A\u4E25\u91CD\u7684\u95EE\u9898\uFF1A\u6CA1\u6709\u4EBA\u80FD\u591F\u5341\u5206\u6E05\u6670\u7684\u8BF4\u660E <code>pub fn semisecret</code> \u4F7F\u7528\u5230\u4E86\u54EA\u4E9B\u5730\u65B9\uFF0C\u9700\u8981\u901A\u8FC7\u4E0A\u4E0B\u6587\u8FDB\u884C\u5224\u65AD\uFF1A</p><ol><li>\u6240\u6709\u53EF\u4EE5\u8BBF\u95EE <code>semisecret</code> \u7684\u6A21\u5757\uFF1B</li><li>\u5728\u6240\u6709\u53EF\u4EE5\u8BBF\u95EE <code>semisecret</code> \u7684\u6A21\u5757\u4E2D\uFF0C\u662F\u5426\u5B58\u5728 <code>semisecret</code> \u7684 re-export;</li></ol><p>\u540C\u65F6\uFF0C\u5982\u679C\u5728 <code>a</code> \u4E2D\u4F7F\u7528 <code>pub use self::b::semisecret</code> \uFF0C\u90A3\u4E48\u6240\u6709\u4EBA\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>use</code> \u8BBF\u95EE <code>fn semisecret</code>\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E2A\u51FD\u6570\u53EA\u9700\u8981\u8BA9 <code>mod a</code> \u8BBF\u95EE\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="pub-restricted-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#pub-restricted-\u7684\u4F7F\u7528" aria-hidden="true">#</a> pub restricted \u7684\u4F7F\u7528</h2><h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h3><p>old:</p><pre><code>VISIBILITY ::= &lt;empty&gt; | \`pub\`
</code></pre><p>new:</p><pre><code>VISIBILITY ::= &lt;empty&gt; | \`pub\` | \`pub\` \`(\` USE_PATH \`)\` | \`pub\` \`(\` \`crate\` \`)\`
</code></pre><p>pub(restriction) \u610F\u5473\u7740\u5BF9 item\uFF0Cmethod\uFF0Cfield\u7B49\u7684\u5B9A\u4E49\u52A0\u4EE5\u53EF\u89C1\u8303\u56F4\uFF08\u4F5C\u7528\u57DF\uFF09\u7684\u9650\u5236\u3002</p><p>\u53EF\u89C1\u8303\u56F4\uFF08\u4F5C\u7528\u57DF\uFF09\u5206\u4E3A\u6240\u6709 crate (\u65E0\u9650\u5236)\uFF0C\u5F53\u524D crate\uFF0C\u5F53\u524D crate \u4E2D\u7684\u5B50\u6A21\u5757\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u88AB\u9650\u5236\u7684\u4E1C\u897F\u4E0D\u80FD\u5728\u5176\u9650\u5236\u8303\u56F4\u4E4B\u5916\u76F4\u63A5\u4F7F\u7528\u3002</p><ul><li><code>pub</code> \u65E0\u660E\u786E\u6307\u5B9A\u610F\u5473\u7740\u65E0\u9650\u5236\uFF1B</li><li><code>pub(crate)</code> \u5F53\u524D crate \u6709\u6548\uFF1B</li><li><code>pub(in &lt;path&gt;)</code> \u5728 <code>&lt;path&gt;</code> \u8868\u793A\u7684\u6A21\u5757\u4E2D\u6709\u6548\u3002</li></ul><h3 id="\u4FEE\u6539\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u793A\u4F8B" aria-hidden="true">#</a> \u4FEE\u6539\u793A\u4F8B</h3><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>// Intent: \`a\` exports \`I\`, \`bar\`, and \`foo\`, but nothing else.
pub mod a {
    pub const I: i32 = 3;

    // \`semisecret\` will be used &quot;many&quot; places within \`a\`, but
    // is not meant to be exposed outside of \`a\`.
    // (\`pub use\` would be *rejected*; see Note 1 below)
    use self::b::semisecret;

    pub fn bar(z: i32) -&gt; i32 { semisecret(I) * z }
    pub fn foo(y: i32) -&gt; i32 { semisecret(I) + y }

    mod b {
        pub(in a) use self::c::semisecret;
        mod c {
            const J: i32 = 4; // J is meant to be hidden from the outside world.

            // \`pub(in a)\` means &quot;usable within hierarchy of \`mod a\`, but not
            // elsewhere.&quot;
            pub(in a) fn semisecret(x: i32) -&gt; i32  { x + J }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>Note 1: \u5982\u679C\u6539\u6210\u4E0B\u9762\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u7F16\u8BD1\u5668\u4F1A\u62A5\u9519:</p><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>pub mod a { [...] pub use self::b::semisecret; [...] }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u56E0\u4E3A <code>pub(in a) fn semisecret</code> \u8BF4\u660E\u8FD9\u4E2A\u51FD\u6570\u53EA\u80FD\u5728 <code>a</code> \u4E2D\u4F7F\u7528\uFF0C\u4E0D\u5141\u8BB8 <code>pub</code> \u51FA <code>a</code> \u7684\u8303\u56F4\u3002</p><h3 id="\u9650\u5236\u5B57\u6BB5\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u5B57\u6BB5\u793A\u4F8B" aria-hidden="true">#</a> \u9650\u5236\u5B57\u6BB5\u793A\u4F8B</h3><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>mod a {
    #[derive(Default)]
    struct Priv(i32);

    pub mod b {
        use a::Priv as Priv_a;

        #[derive(Default)]
        pub struct F {
            pub    x: i32,
                   y: Priv_a,
            pub(in a) z: Priv_a,
        }

        #[derive(Default)]
        pub struct G(pub i32, Priv_a, pub(in a) Priv_a);

        // ... accesses to F.{x,y,z} ...
        // ... accesses to G.{0,1,2} ...
    }
    // ... accesses to F.{x,z} ...
    // ... accesses to G.{0,2} ...
}

mod k {
    use a::b::{F, G};
    // ... accesses to F and F.x ...
    // ... accesses to G and G.0 ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="crate-\u9650\u5236\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#crate-\u9650\u5236\u793A\u4F8B" aria-hidden="true">#</a> Crate \u9650\u5236\u793A\u4F8B</h3><p>Crate <code>c1</code>:</p><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>pub mod a {
    struct Priv(i32);

    pub(crate) struct R { pub y: i32, z: Priv } // ok: field allowed to be more public
    pub        struct S { pub y: i32, z: Priv }

    pub fn to_r_bad(s: S) -&gt; R { ... } //~ ERROR: \`R\` restricted solely to this crate

    pub(crate) fn to_r(s: S) -&gt; R { R { y: s.y, z: s.z } } // ok: restricted to crate
}

use a::{R, S}; // ok: \`a::R\` and \`a::S\` are both visible

pub use a::R as ReexportAttempt; //~ ERROR: \`a::R\` restricted solely to this crate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Crate <code>c2</code>:</p><div class="language-Rust ext-Rust line-numbers-mode"><pre class="language-Rust"><code>extern crate c1;

use c1::a::S; // ok: \`S\` is unrestricted

use c1::a::R; //~ ERROR: \`c1::a::R\` not visible outside of its crate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,34);function z(S,P){const n=a("ExternalLinkIcon");return p(),r(i,null,[u,o,e("p",null,[d,m,h,f,_,g,v,R,x,e("a",I,[y,c(n)]),w]),J],64)}var q=b(t,[["render",z],["__file","pub-restricted.html.vue"]]);export{q as default};
