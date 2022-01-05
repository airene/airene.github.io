import{_ as n,r as a,c as e,a as t,f as p,o}from"./app.90190422.js";var c="/assets/ts_infer.5103d841.jpg";const g='{"title":"ts\u4E4Binfer\u4F7F\u7528","description":"\u770B\u5230infer\u5230\u65F6\u5019\u5C31\u61F5\u4E86\uFF0C\u4ECE\u7F51\u4E0A\u627E\u5230\u6587\u7AE0\u57FA\u672C\u90FD\u8BB2\u90FD\u4E0D\u662F\u5F88\u6E05\u695A\uFF0C\u81F3\u5C11\u6211\u770B\u8D77\u6765\u4E0D\u662F\u5F88\u6E05\u695A","frontmatter":{"date":"2021-08-21T00:00:00.000Z","title":"ts\u4E4Binfer\u4F7F\u7528","tags":["ts"],"description":"\u770B\u5230infer\u5230\u65F6\u5019\u5C31\u61F5\u4E86\uFF0C\u4ECE\u7F51\u4E0A\u627E\u5230\u6587\u7AE0\u57FA\u672C\u90FD\u8BB2\u90FD\u4E0D\u662F\u5F88\u6E05\u695A\uFF0C\u81F3\u5C11\u6211\u770B\u8D77\u6765\u4E0D\u662F\u5F88\u6E05\u695A"},"headers":[{"level":2,"title":"\u524D\u63D0\u6761\u4EF6 & \u7406\u89E3\u5173\u952E","slug":"\u524D\u63D0\u6761\u4EF6-\u7406\u89E3\u5173\u952E"},{"level":2,"title":"extends","slug":"extends"},{"level":2,"title":"\u4E24\u4E2A\u4F8B\u5B50","slug":"\u4E24\u4E2A\u4F8B\u5B50"},{"level":2,"title":"\u4E00\u5F20\u56FE\u6765\u52A0\u6DF1\u8BF4\u660E","slug":"\u4E00\u5F20\u56FE\u6765\u52A0\u6DF1\u8BF4\u660E"},{"level":2,"title":"\u62D3\u5C55\u52A0\u5F3A","slug":"\u62D3\u5C55\u52A0\u5F3A"}],"relativePath":"posts/ts_infer.md","lastUpdated":1641353048973}',r={},l=p(`<h1 id="ts\u4E4Binfer\u7684\u7406\u89E3" tabindex="-1">ts\u4E4Binfer\u7684\u7406\u89E3 <a class="header-anchor" href="#ts\u4E4Binfer\u7684\u7406\u89E3" aria-hidden="true">#</a></h1><h2 id="\u524D\u63D0\u6761\u4EF6-\u7406\u89E3\u5173\u952E" tabindex="-1">\u524D\u63D0\u6761\u4EF6 &amp; \u7406\u89E3\u5173\u952E <a class="header-anchor" href="#\u524D\u63D0\u6761\u4EF6-\u7406\u89E3\u5173\u952E" aria-hidden="true">#</a></h2><ul><li><code>infer</code> \u5728\u7C7B\u578B\u8BA1\u7B97\u6216\u8005\u63A8\u5BFC\u7684\u65F6\u5019\u4F7F\u7528</li><li>\u9700\u8981\u7ED3\u5408<code>extends</code>\uFF0C<code>extends</code>\u5F88\u597D\u7406\u89E3\uFF0C\u5C31\u662F<strong>\u662F\u5426\u662F\u5B50\u96C6</strong></li><li><code>infer</code>\u53EA\u80FD\u51FA\u73B0\u5728<code>extends</code>\u4E3A<code>true</code>\u7684\u5206\u652F</li></ul><h2 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">// \u5982\u679CA\u662FB\u7684\u5B50\u96C6 \u5219T1\u4E3A\u7C7B\u578BX\uFF0C\u5426\u5219\u7C7B\u578B\u4E3AY</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">?</span> <span class="token constant">X</span><span class="token operator">:</span><span class="token constant">Y</span>
</code></pre></div><h2 id="\u4E24\u4E2A\u4F8B\u5B50" tabindex="-1">\u4E24\u4E2A\u4F8B\u5B50 <a class="header-anchor" href="#\u4E24\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u53EA\u662F\u4E3A\u4E86\u4E3E\u4F8B\uFF0C\u4E0D\u662F\u5B8C\u6574\u7684\u5B98\u65B9\u7C7B\u578B\u5DE5\u5177\u7C7B\u7684\u4EE3\u7801</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">ParamsType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>param<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Func1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> User<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span>Func1<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// T1 = User </span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// T2= string string\u4E0D\u662F\u51FD\u6570\u7684\u5B50\u96C6\uFF0C\u63A8\u5BFC\u5931\u8D25,\u8FD4\u56DE\u672C\u8EAB</span>

</code></pre></div><h2 id="\u4E00\u5F20\u56FE\u6765\u52A0\u6DF1\u8BF4\u660E" tabindex="-1">\u4E00\u5F20\u56FE\u6765\u52A0\u6DF1\u8BF4\u660E <a class="header-anchor" href="#\u4E00\u5F20\u56FE\u6765\u52A0\u6DF1\u8BF4\u660E" aria-hidden="true">#</a></h2><p><img src="`+c+'" alt="infer"></p><h2 id="\u62D3\u5C55\u52A0\u5F3A" tabindex="-1">\u62D3\u5C55\u52A0\u5F3A <a class="header-anchor" href="#\u62D3\u5C55\u52A0\u5F3A" aria-hidden="true">#</a></h2><p>\u91CC\u9762\u7684\u7684UnwrapRef\u7684\u5386\u53F2\u7248\u672C\u771F\u7684\u662F\u5413\u5C3F\u4E86\uFF0Cts=\u7C7B\u578B\u7F16\u7A0B\u4E0D\u662F\u76D6\u7684<br><a href="https://juejin.cn/post/6844904126283776014" target="_blank" rel="noopener noreferrer">\u7406\u89E3vue3\u7684UnwrapRef\u9700\u8981\u591A\u5C11\u77E5\u8BC6</a></p>',12);function k(i,d,u,h,m,f){const s=a("Comment");return o(),e("div",null,[l,t(s)])}var y=n(r,[["render",k]]);export{g as __pageData,y as default};
