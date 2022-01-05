import{_ as n,c as s,o as a,f as t}from"./app.2ff578a9.js";const y='{"title":"\u6570\u636E\u7ED3\u6784 - \u4E8C\u53C9\u641C\u7D22\u6811\u4EE5\u53CA\u5E38\u89C1\u65B9\u6CD5","description":"\u6C47\u603B\u4E86\u5E38\u89C1\u4E8C\u53C9\u6811\u7684\u64CD\u4F5C\u6216\u8005\u67E5\u8BE2\u65B9\u6CD5","frontmatter":{"date":"2017-08-01T00:00:00.000Z","title":"\u6570\u636E\u7ED3\u6784 - \u4E8C\u53C9\u641C\u7D22\u6811\u4EE5\u53CA\u5E38\u89C1\u65B9\u6CD5","tags":["\u6570\u636E\u7ED3\u6784"],"description":"\u6C47\u603B\u4E86\u5E38\u89C1\u4E8C\u53C9\u6811\u7684\u64CD\u4F5C\u6216\u8005\u67E5\u8BE2\u65B9\u6CD5"},"headers":[{"level":2,"title":"\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0","slug":"\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0"},{"level":2,"title":"\u4F7F\u7528\u4E8B\u4F8B","slug":"\u4F7F\u7528\u4E8B\u4F8B"}],"relativePath":"posts/ds_binary_search_tree.md","lastUpdated":1641395940824}',p={},o=t(`<h1 id="\u6570\u636E\u7ED3\u6784-\u4E8C\u53C9\u641C\u7D22\u6811\u4EE5\u53CA\u5E38\u89C1\u65B9\u6CD5" tabindex="-1">\u6570\u636E\u7ED3\u6784 - \u4E8C\u53C9\u641C\u7D22\u6811\u4EE5\u53CA\u5E38\u89C1\u65B9\u6CD5 <a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784-\u4E8C\u53C9\u641C\u7D22\u6811\u4EE5\u53CA\u5E38\u89C1\u65B9\u6CD5" aria-hidden="true">#</a></h1><ul><li>\u524D\u5E8F\u3001\u4E2D\u5E8F\u3001\u540E\u5E8F\u904D\u5386\u90FD\u662F\u6DF1\u5EA6\u4F18\u5148(DFS)</li><li>\u5C42\u5E8F\u904D\u5386\u662F\u5E7F\u5EA6\u4F18\u5148(BFS)</li><li>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u6B8A\u7ED3\u6784\u4F7F\u5F97\u67E5\u627E\u5143\u7D20\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u63D0\u9AD8\u4E3AO(logn) \u800C\u4E14\u5E95\u6570\u662F2</li></ul><h2 id="\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BST</span> <span class="token punctuation">{</span>
    root <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>data <span class="token operator">&gt;</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        current<span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        current<span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> current<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> current<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            current <span class="token operator">=</span> data <span class="token operator">&lt;</span> current<span class="token punctuation">.</span>data <span class="token operator">?</span> current<span class="token punctuation">.</span>left <span class="token operator">:</span> current<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4E0D\u662F\u5F88\u5B8C\u6574\u7684\u5220\u9664\u903B\u8F91 FIXME</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">removeNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u524D\u5E8F</span>
    <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4E2D\u5E8F</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
            ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret
    <span class="token punctuation">}</span>
    <span class="token comment">//\u540E\u5E8F</span>
    <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
            ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5C42\u5E8F</span>
    <span class="token function">levelOrder</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> step<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">[</span>step<span class="token punctuation">]</span><span class="token punctuation">)</span> res<span class="token punctuation">[</span>step<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        res<span class="token punctuation">[</span>step<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">levelOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">levelOrder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token comment">//\u6700\u5C0F\u8282\u70B9</span>
    <span class="token function">findMinNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node <span class="token operator">=</span> node<span class="token punctuation">.</span>left
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> node<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u6700\u5927\u8282\u70B9</span>
    <span class="token function">findMaxNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> node<span class="token punctuation">.</span>data
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6700\u5927\u6DF1\u5EA6</span>
    <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6700\u5C0F\u6DF1\u5EA6\uFF0C\u4E0D\u662F\u4F18\u96C5\u5B9E\u73B0 FIXME</span>
    <span class="token function">minDepth</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">minDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">minDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528\u4E8B\u4F8B" tabindex="-1">\u4F7F\u7528\u4E8B\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u4E8B\u4F8B" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">let</span> bst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BST</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bst<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bst<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bst<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bst<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bst<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bst<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bst<span class="token punctuation">.</span><span class="token function">minDepth</span><span class="token punctuation">(</span>bst<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,6),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{y as __pageData,f as default};
