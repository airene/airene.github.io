import{_ as a,c as i,a2 as n,o as t}from"./chunks/framework.B84USXyd.js";const g=JSON.parse('{"title":"nginx 和 caddy 反向代理的区别","description":"caddy简单的反向代理非常好实现，如果是稍微复杂点的，还真不知道caddy怎么写，查资料都不好查，官网翻了半天都没有，为了自动证书特性还是google到了，虽然知道底层用的是acme.sh的，还是不想额外单独自己装","frontmatter":{"date":"2023-03-26T00:00:00.000Z","title":"nginx 和 caddy 反向代理的区别","category":"caddy","tags":["nginx","caddy"],"description":"caddy简单的反向代理非常好实现，如果是稍微复杂点的，还真不知道caddy怎么写，查资料都不好查，官网翻了半天都没有，为了自动证书特性还是google到了，虽然知道底层用的是acme.sh的，还是不想额外单独自己装"},"headers":[],"relativePath":"posts/nginx_caddy_config.md","filePath":"posts/nginx_caddy_config.md"}'),e={name:"posts/nginx_caddy_config.md"};function d(p,s,l,o,h,c){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="nginx-和-caddy-反向代理的区别" tabindex="-1">nginx 和 caddy 反向代理的区别 <a class="header-anchor" href="#nginx-和-caddy-反向代理的区别" aria-label="Permalink to &quot;nginx 和 caddy 反向代理的区别&quot;">​</a></h1><p>之前提到过<a href="https://www.ti.bi/posts/caddy_auto_tls.html" target="_blank" rel="noreferrer">https://www.ti.bi/posts/caddy_auto_tls.html</a> 这个<br> 这次就真的换了。</p><h2 id="期望目标" tabindex="-1">期望目标 <a class="header-anchor" href="#期望目标" aria-label="Permalink to &quot;期望目标&quot;">​</a></h2><p>后端接口服务url: <code>http://localhost:8008/getJson</code><br> 前端调用地址: 当前FE域名加<code>/api/getJson</code>能访问！<br><strong>注意后端是没有<code>/api/</code>这个路径的哦</strong></p><p>上配置:</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">注意8008最后有一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有没有这个差异还是很大的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://localhost:8008/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>不想写有没有<code>/</code>什么差异的内容了，网上有的是，直接看caddy的，然后实现的效果是一样的就好理解了</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">handle_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /api/* {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    reverse_proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localhost:8008</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>重点其实是<code>handle_path</code>的使用<br> 直接写成 <code>reverse_proxy /api/* localhost:8008</code> 是不行的，直接写应该是后端带<code>/api/</code> 能支持，<strong>这一点未测试</strong></p>`,9)]))}const k=a(e,[["render",d]]);export{g as __pageData,k as default};