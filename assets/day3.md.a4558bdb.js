import{_ as a,c as s,o as l,a as e}from"./app.f1871799.js";const _='{"title":"\u638C\u63E1vim\u7684\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u64CD\u4F5C","slug":"\u64CD\u4F5C"},{"level":2,"title":"\u57FA\u4E8E\u5355\u8BCD\u7684\u79FB\u52A8","slug":"\u57FA\u4E8E\u5355\u8BCD\u7684\u79FB\u52A8"},{"level":2,"title":"\u57FA\u4E8E\u8BCD\u4E32\u7684\u79FB\u52A8(\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u57FA\u51C6)","slug":"\u57FA\u4E8E\u8BCD\u4E32\u7684\u79FB\u52A8-\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u57FA\u51C6"},{"level":2,"title":"\u7EC4\u5408","slug":"\u7EC4\u5408"}],"relativePath":"day3.md"}',n={name:"day3.md"},i=e(`<h1 id="\u638C\u63E1vim\u7684\u8BED\u6CD5" tabindex="-1">\u638C\u63E1vim\u7684\u8BED\u6CD5 <a class="header-anchor" href="#\u638C\u63E1vim\u7684\u8BED\u6CD5" aria-hidden="true">#</a></h1><p><code>\u64CD\u4F5C\u7B26(operation) + \u52A8\u4F5C(\u533A\u57DF\u8303\u56F4)</code></p><h2 id="\u64CD\u4F5C" tabindex="-1">\u64CD\u4F5C <a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a></h2><ul><li>\u5220\u9664 d</li><li>\u5220\u9664\u5E76\u8FDB\u5165\u63D2\u5165\u6A21\u5F0F c</li><li>\u590D\u5236 y</li></ul><h2 id="\u57FA\u4E8E\u5355\u8BCD\u7684\u79FB\u52A8" tabindex="-1">\u57FA\u4E8E\u5355\u8BCD\u7684\u79FB\u52A8 <a class="header-anchor" href="#\u57FA\u4E8E\u5355\u8BCD\u7684\u79FB\u52A8" aria-hidden="true">#</a></h2><ul><li>e \u79FB\u52A8\u5230\u5355\u8BCD\u7ED3\u5C3E</li><li>b \u79FB\u52A8\u5230\u4E0A\u4E00\u4E2A\u5355\u8BCD\u5F00\u5934</li><li>w \u79FB\u52A8\u5230\u5355\u8BCD\u7684\u5F00\u5934</li><li>ge \u79FB\u52A8\u5230\u4E0A\u4E00\u4E2A\u5355\u8BCD\u7684\u7ED3\u5C3E</li></ul><h2 id="\u57FA\u4E8E\u8BCD\u4E32\u7684\u79FB\u52A8-\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u57FA\u51C6" tabindex="-1">\u57FA\u4E8E\u8BCD\u4E32\u7684\u79FB\u52A8(\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u57FA\u51C6) <a class="header-anchor" href="#\u57FA\u4E8E\u8BCD\u4E32\u7684\u79FB\u52A8-\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u57FA\u51C6" aria-hidden="true">#</a></h2><ul><li>E \u79FB\u52A8\u5230\u8BCD\u4E32\u7ED3\u5C3E</li><li>B \u79FB\u52A8\u5230\u4E0A\u4E00\u4E2A\u8BCD\u4E32\u5F00\u5934</li><li>W \u79FB\u52A8\u5230\u8BCD\u4E32\u7684\u5F00\u5934</li></ul><h2 id="\u7EC4\u5408" tabindex="-1">\u7EC4\u5408 <a class="header-anchor" href="#\u7EC4\u5408" aria-hidden="true">#</a></h2><ul><li>cw \u5220\u9664\u5F53\u524D\u5355\u8BCD</li><li>ea \u5728\u5F53\u524D\u5355\u8BCD\u7ED3\u5C3E\u5904\u6DFB\u52A0</li><li>dH \u4ECE\u5F53\u524D\u5B57\u7B26\u5220\u9664\u5230\u884C\u9996</li><li>dL \u4ECE\u5F53\u524D\u5B57\u7B26\u5220\u9664\u5230\u884C\u5C3E</li><li>ce \u5220\u9664\u5F53\u524D\u5355\u8BCD\u91CD\u65B0\u952E\u5165</li></ul><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u7EC3\u4E60</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getUserName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my name is jack</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11),p=[i];function r(o,t,c,d,h,u){return l(),s("div",null,p)}var m=a(n,[["render",r]]);export{_ as __pageData,m as default};
