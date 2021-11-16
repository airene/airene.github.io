import{_ as n,c as s,o as a,f as t}from"./app.f704f5dc.js";const w='{"title":"\u57FA\u4E8Easync\u548Cawait\u7684\u5F02\u6B65\u8C03\u5EA6\u5668","description":"\u5B9E\u73B0\u4E00\u4E2A\u9650\u5236\u5E76\u53D1\u7684\u5F02\u6B65\u8C03\u5EA6\u5668","frontmatter":{"date":"2020-03-02T00:00:00.000Z","title":"\u57FA\u4E8Easync\u548Cawait\u7684\u5F02\u6B65\u8C03\u5EA6\u5668","tags":["\u624B\u6495"],"description":"\u5B9E\u73B0\u4E00\u4E2A\u9650\u5236\u5E76\u53D1\u7684\u5F02\u6B65\u8C03\u5EA6\u5668"},"relativePath":"posts/write_async_scheduler.md","lastUpdated":1637027069229}',p={},o=t(`<h1 id="\u57FA\u4E8Easync\u548Cawait\u7684\u5F02\u6B65\u8C03\u5EA6\u5668" tabindex="-1">\u57FA\u4E8Easync\u548Cawait\u7684\u5F02\u6B65\u8C03\u5EA6\u5668 <a class="header-anchor" href="#\u57FA\u4E8Easync\u548Cawait\u7684\u5F02\u6B65\u8C03\u5EA6\u5668" aria-hidden="true">#</a></h1><ul><li>\u53EF\u4EE5\u901A\u8FC7\u521D\u59CB\u5316\u8BBE\u7F6E\u5E76\u53D1\u6570</li><li><strong>\u5DE7\u5999\u7684\u5730\u65B9\u5C31\u5728resolve\u4EC0\u4E48\u65F6\u5019\u6267\u884C\u4E0A</strong></li><li>\u5F53\u524D\u5BF9js\u6267\u884C\u673A\u5236\u8981\u975E\u5E38\u719F\u6089</li></ul><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Scheduler</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">maxNum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxNum <span class="token operator">=</span> maxNum
        <span class="token keyword">this</span><span class="token punctuation">.</span>taskList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">async</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>taskList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token comment">//\u91CD\u70B9\u5C31\u5728\u7528resolve\u6765\u963B\u585E\u6267\u884C</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9047\u5230\u8FD9\u4E2A\u5C31\u4EA4\u51FA\u63A7\u5236\u6743</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>taskList<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>taskList<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{w as __pageData,h as default};
