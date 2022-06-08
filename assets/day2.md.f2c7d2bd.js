import{_ as s,c as a,o as n,a as l}from"./app.f1871799.js";const d='{"title":"\u884C\u76F8\u5173\u7684\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u79FB\u52A8","slug":"\u79FB\u52A8"},{"level":3,"title":"\u884C\u9996","slug":"\u884C\u9996"},{"level":3,"title":"\u884C\u5C3E","slug":"\u884C\u5C3E"},{"level":3,"title":"\u4FEE\u6539\u884C\u9996\u3001\u884C\u5C3E\u914D\u7F6E\u952E\u4F4D","slug":"\u4FEE\u6539\u884C\u9996\u3001\u884C\u5C3E\u914D\u7F6E\u952E\u4F4D"},{"level":2,"title":"\u63D2\u5165","slug":"\u63D2\u5165"},{"level":2,"title":"\u590D\u5236\u5F53\u524D\u884C","slug":"\u590D\u5236\u5F53\u524D\u884C"},{"level":2,"title":"\u7C98\u8D34","slug":"\u7C98\u8D34"},{"level":2,"title":"\u5220\u9664\u5F53\u524D\u884C","slug":"\u5220\u9664\u5F53\u524D\u884C"}],"relativePath":"day2.md"}',p={name:"day2.md"},e=l(`<h1 id="\u884C\u76F8\u5173\u7684\u547D\u4EE4" tabindex="-1">\u884C\u76F8\u5173\u7684\u547D\u4EE4 <a class="header-anchor" href="#\u884C\u76F8\u5173\u7684\u547D\u4EE4" aria-hidden="true">#</a></h1><h2 id="\u79FB\u52A8" tabindex="-1">\u79FB\u52A8 <a class="header-anchor" href="#\u79FB\u52A8" aria-hidden="true">#</a></h2><h3 id="\u884C\u9996" tabindex="-1">\u884C\u9996 <a class="header-anchor" href="#\u884C\u9996" aria-hidden="true">#</a></h3><ul><li>\u6570\u5B57 0</li><li>^ \u79FB\u52A8\u5230\u672C\u884C\u7B2C\u4E00\u4E2A\u4E0D\u662Fblank\u5B57\u7B26\u7684\u4F4D\u7F6E\uFF08tab\u3001\u7A7A\u683C\u7B49\uFF09</li></ul><h3 id="\u884C\u5C3E" tabindex="-1">\u884C\u5C3E <a class="header-anchor" href="#\u884C\u5C3E" aria-hidden="true">#</a></h3><ul><li>$</li><li>g_ \u79FB\u52A8\u5230\u672C\u884C\u6700\u540E\u4E00\u4E2A\u4E0D\u662Fblank\u5B57\u7B26\u7684\u4F4D\u7F6E\uFF08tab\u3001\u7A7A\u683C\u7B49\uFF09</li></ul><h3 id="\u4FEE\u6539\u884C\u9996\u3001\u884C\u5C3E\u914D\u7F6E\u952E\u4F4D" tabindex="-1">\u4FEE\u6539\u884C\u9996\u3001\u884C\u5C3E\u914D\u7F6E\u952E\u4F4D <a class="header-anchor" href="#\u4FEE\u6539\u884C\u9996\u3001\u884C\u5C3E\u914D\u7F6E\u952E\u4F4D" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim.normalModeKeyBindings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">H</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">L</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">g</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u63D2\u5165" tabindex="-1">\u63D2\u5165 <a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a></h2><ul><li>\u884C\u9996 I</li><li>\u884C\u5C3E A</li><li>\u884C\u524D O</li><li>\u884C\u540E o</li></ul><h2 id="\u590D\u5236\u5F53\u524D\u884C" tabindex="-1">\u590D\u5236\u5F53\u524D\u884C <a class="header-anchor" href="#\u590D\u5236\u5F53\u524D\u884C" aria-hidden="true">#</a></h2><ul><li>yy</li></ul><h2 id="\u7C98\u8D34" tabindex="-1">\u7C98\u8D34 <a class="header-anchor" href="#\u7C98\u8D34" aria-hidden="true">#</a></h2><ul><li>p</li></ul><h2 id="\u5220\u9664\u5F53\u524D\u884C" tabindex="-1">\u5220\u9664\u5F53\u524D\u884C <a class="header-anchor" href="#\u5220\u9664\u5F53\u524D\u884C" aria-hidden="true">#</a></h2><ul><li>dd</li></ul><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u7EC3\u4E60</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,17),o=[e];function r(t,c,D,i,F,y){return n(),a("div",null,o)}var h=s(p,[["render",r]]);export{d as __pageData,h as default};
