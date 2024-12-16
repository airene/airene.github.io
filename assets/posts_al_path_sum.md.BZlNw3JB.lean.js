import{_ as i,c as a,a2 as t,o as h}from"./chunks/framework._jXClnkc.js";const o=JSON.parse('{"title":"路径总和问题 - 是否存在满足条件的路径","description":"二叉树相关的算法","frontmatter":{"date":"2017-08-07T00:00:00.000Z","title":"路径总和问题 - 是否存在满足条件的路径","category":"面试","tags":["算法"],"description":"二叉树相关的算法"},"headers":[],"relativePath":"posts/al_path_sum.md","filePath":"posts/al_path_sum.md"}'),n={name:"posts/al_path_sum.md"};function l(k,s,p,e,r,d){return h(),a("div",null,s[0]||(s[0]=[t(`<h1 id="路径总和问题-是否存在满足条件的路径" tabindex="-1">路径总和问题 - 是否存在满足条件的路径 <a class="header-anchor" href="#路径总和问题-是否存在满足条件的路径" aria-label="Permalink to &quot;路径总和问题 - 是否存在满足条件的路径&quot;">​</a></h1><h2 id="给定一个二叉树-求证是否有路径满足总和等于给定的值" tabindex="-1">给定一个二叉树，求证是否有路径满足总和等于给定的值 <a class="header-anchor" href="#给定一个二叉树-求证是否有路径满足总和等于给定的值" aria-label="Permalink to &quot;给定一个二叉树，求证是否有路径满足总和等于给定的值&quot;">​</a></h2><p><strong>用递归是真的方便啊</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hasSumPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (root.left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root.right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root.val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hasSumPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(root.left, sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root.val) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hasSumPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(root.right, sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root.val)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="找出路径-fixme" tabindex="-1">找出路径 FIXME <a class="header-anchor" href="#找出路径-fixme" aria-label="Permalink to &quot;找出路径 FIXME&quot;">​</a></h2>`,5)]))}const g=i(n,[["render",l]]);export{o as __pageData,g as default};