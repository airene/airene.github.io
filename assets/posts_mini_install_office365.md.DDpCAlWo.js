import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.CZRz7fIf.js";const y=JSON.parse('{"title":"最小化安装office 365","description":"连快捷方式都不要的福音","frontmatter":{"date":"2024-03-06T00:00:00.000Z","title":"最小化安装office 365","tags":["windows11"],"description":"连快捷方式都不要的福音"},"headers":[],"relativePath":"posts/mini_install_office365.md","filePath":"posts/mini_install_office365.md"}'),n={name:"posts/mini_install_office365.md"},h=t(`<h1 id="最小化-安装office-365" tabindex="-1">&quot;最小化&quot;安装office 365 <a class="header-anchor" href="#最小化-安装office-365" aria-label="Permalink to &quot;&quot;最小化&quot;安装office 365&quot;">​</a></h1><p>是不是真的省硬盘 感知好想不是很明显(<strong>装了一个多的，又按照这个装了一个少的，结果C盘剩的一样？</strong>)，但是开始菜单里是真的没有 outlook,project这些了，以下是我的配置，只有office三剑客</p><p>用到的软件：<br><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fdownload%2Fdetails.aspx%3Fid%3D49117" target="_blank" rel="noreferrer">微软链接</a></p><p>我的配置文件</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Add</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OfficeClientEdition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;64&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Channel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Current&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Product</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;O365ProPlusRetail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Language</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh-cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Access&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Lync&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OneNote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Groove&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OneDrive&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Outlook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Publisher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ExcludeApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Teams&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>文章参考:<br><a href="https://juejin.cn/post/7204844328110669879" target="_blank" rel="noreferrer">掘金链接</a></p>`,6),l=[h];function k(p,E,e,r,d,g){return a(),i("div",null,l)}const c=s(n,[["render",k]]);export{y as __pageData,c as default};
