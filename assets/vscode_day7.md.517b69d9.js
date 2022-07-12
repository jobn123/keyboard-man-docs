import{_ as s,c as n,o as a,a as l}from"./app.6003dc6e.js";const F='{"title":"\u5584\u7528snippets","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u63D2\u4EF6","slug":"\u5E38\u7528\u63D2\u4EF6"},{"level":2,"title":"\u6280\u5DE7","slug":"\u6280\u5DE7"},{"level":2,"title":"\u6269\u5C55\uFF0C\u5982\u4F55\u81EA\u5DF1\u5199\u4E00\u4E2A","slug":"\u6269\u5C55\uFF0C\u5982\u4F55\u81EA\u5DF1\u5199\u4E00\u4E2A"}],"relativePath":"vscode/day7.md"}',e={name:"vscode/day7.md"},p=l(`<h1 id="\u5584\u7528snippets" tabindex="-1">\u5584\u7528snippets <a class="header-anchor" href="#\u5584\u7528snippets" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1">\u5E38\u7528\u63D2\u4EF6 <a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a></h2><ul><li>javascript code snippets</li><li>vue3 snippets</li><li>vue vscode snippets</li><li>es7 + react/redux snippets</li><li>..... \u6839\u636E\u81EA\u5DF1\u5DE5\u4F5C\u9700\u8981\u9009\u62E9</li></ul><h2 id="\u6280\u5DE7" tabindex="-1">\u6280\u5DE7 <a class="header-anchor" href="#\u6280\u5DE7" aria-hidden="true">#</a></h2><ul><li>tap \u952E\u53EF\u4EE5\u5207\u6362\u4F4D\u7F6E</li><li>cmd + i / ctrl + space \u63D0\u793A\u6D88\u5931\u65F6\u53EF\u7528</li></ul><h2 id="\u6269\u5C55\uFF0C\u5982\u4F55\u81EA\u5DF1\u5199\u4E00\u4E2A" tabindex="-1">\u6269\u5C55\uFF0C\u5982\u4F55\u81EA\u5DF1\u5199\u4E00\u4E2A <a class="header-anchor" href="#\u6269\u5C55\uFF0C\u5982\u4F55\u81EA\u5DF1\u5199\u4E00\u4E2A" aria-hidden="true">#</a></h2><p><a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a><a href="https://snippet-generator.app/" target="_blank" rel="noopener noreferrer">\u751F\u6210\u5DE5\u5177</a></p><ul><li>cmd + shift + p -&gt; user snippets -&gt; \u9009\u62E9\u5168\u5C40\u6216\u8005\u9879\u76EE\u5185\u4F5C\u7528\u8303\u56F4\u6216\u57FA\u4E8E\u7C7B\u578B\u9009\u62E9</li></ul><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Placeholders with the same ids are connected.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// Example:</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Print to console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u4F5C\u7528\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">scope</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">javascript,typescript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u89E6\u53D1snippers</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">prefix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// body \u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">console.log(&#39;$1&#39;);</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u63CF\u8FF0</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Log output to console</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,9),o=[p];function t(r,c,i,y,D,d){return a(),n("div",null,o)}var b=s(e,[["render",t]]);export{F as __pageData,b as default};