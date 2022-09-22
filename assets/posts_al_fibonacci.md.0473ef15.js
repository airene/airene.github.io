import{_ as s,o as n,c as a,f as l}from"./app.29f0654e.js";const i=JSON.parse('{"title":"\u6590\u6CE2\u90A3\u5951\u6570\u5217","description":"\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u51E0\u79CD\u5B9E\u73B0","frontmatter":{"date":"2017-04-26T00:00:00.000Z","title":"\u6590\u6CE2\u90A3\u5951\u6570\u5217","tags":["\u7B97\u6CD5"],"description":"\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u51E0\u79CD\u5B9E\u73B0"},"headers":[{"level":2,"title":"\u666E\u901A\u5B9E\u73B0","slug":"\u666E\u901A\u5B9E\u73B0","link":"#\u666E\u901A\u5B9E\u73B0","children":[]},{"level":2,"title":"\u5C3E\u8C03\u7528\u4F18\u5316 - call stack \u6301\u7EED\u590D\u7528\uFF0C \u590D\u6742\u5EA6O(n)","slug":"\u5C3E\u8C03\u7528\u4F18\u5316-call-stack-\u6301\u7EED\u590D\u7528\uFF0C-\u590D\u6742\u5EA6o-n","link":"#\u5C3E\u8C03\u7528\u4F18\u5316-call-stack-\u6301\u7EED\u590D\u7528\uFF0C-\u590D\u6742\u5EA6o-n","children":[]},{"level":2,"title":"\u52A8\u6001\u89C4\u5212 \u5B9E\u9645\u6267\u884C\u6548\u7387\u548C\u5C3E\u8C03\u7528\u4E00\u6837\uFF0C\u590D\u6742\u5EA6O(n)","slug":"\u52A8\u6001\u89C4\u5212-\u5B9E\u9645\u6267\u884C\u6548\u7387\u548C\u5C3E\u8C03\u7528\u4E00\u6837\uFF0C\u590D\u6742\u5EA6o-n","link":"#\u52A8\u6001\u89C4\u5212-\u5B9E\u9645\u6267\u884C\u6548\u7387\u548C\u5C3E\u8C03\u7528\u4E00\u6837\uFF0C\u590D\u6742\u5EA6o-n","children":[]},{"level":2,"title":"\u901A\u9879\u516C\u5F0F\u5C31\u7B97\u4E86 \u8BB0\u4E0D\u4F4F","slug":"\u901A\u9879\u516C\u5F0F\u5C31\u7B97\u4E86-\u8BB0\u4E0D\u4F4F","link":"#\u901A\u9879\u516C\u5F0F\u5C31\u7B97\u4E86-\u8BB0\u4E0D\u4F4F","children":[]}],"relativePath":"posts/al_fibonacci.md"}'),p={name:"posts/al_fibonacci.md"},o=l(`<h1 id="\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684js\u5B9E\u73B0" tabindex="-1">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684js\u5B9E\u73B0 <a class="header-anchor" href="#\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684js\u5B9E\u73B0" aria-hidden="true">#</a></h1><h2 id="\u666E\u901A\u5B9E\u73B0" tabindex="-1">\u666E\u901A\u5B9E\u73B0 <a class="header-anchor" href="#\u666E\u901A\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u590D\u6742\u5EA6O(2**n)</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fibo1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fibo1</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fibo</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5C3E\u8C03\u7528\u4F18\u5316-call-stack-\u6301\u7EED\u590D\u7528\uFF0C-\u590D\u6742\u5EA6o-n" tabindex="-1">\u5C3E\u8C03\u7528\u4F18\u5316 - call stack \u6301\u7EED\u590D\u7528\uFF0C \u590D\u6742\u5EA6O(n) <a class="header-anchor" href="#\u5C3E\u8C03\u7528\u4F18\u5316-call-stack-\u6301\u7EED\u590D\u7528\uFF0C-\u590D\u6742\u5EA6o-n" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fibo2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fibo2</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u52A8\u6001\u89C4\u5212-\u5B9E\u9645\u6267\u884C\u6548\u7387\u548C\u5C3E\u8C03\u7528\u4E00\u6837\uFF0C\u590D\u6742\u5EA6o-n" tabindex="-1">\u52A8\u6001\u89C4\u5212 \u5B9E\u9645\u6267\u884C\u6548\u7387\u548C\u5C3E\u8C03\u7528\u4E00\u6837\uFF0C\u590D\u6742\u5EA6O(n) <a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212-\u5B9E\u9645\u6267\u884C\u6548\u7387\u548C\u5C3E\u8C03\u7528\u4E00\u6837\uFF0C\u590D\u6742\u5EA6o-n" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fibo3</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">===</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">n1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">n2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u901A\u9879\u516C\u5F0F\u5C31\u7B97\u4E86-\u8BB0\u4E0D\u4F4F" tabindex="-1">\u901A\u9879\u516C\u5F0F\u5C31\u7B97\u4E86 \u8BB0\u4E0D\u4F4F <a class="header-anchor" href="#\u901A\u9879\u516C\u5F0F\u5C31\u7B97\u4E86-\u8BB0\u4E0D\u4F4F" aria-hidden="true">#</a></h2>`,9),e=[o];function c(t,r,F,y,D,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
