import{_ as s,o as a,c as n,d as e,e as r,t as l,f as o}from"./app.a3a74600.js";const C=JSON.parse('{"title":"Hsts，httpcode - 302 303 307","description":"没见过hsts是个什么东东，用一个jsdelivr的接口,发现的307和响应header里面有hsts","frontmatter":{"date":"2021-09-17T00:00:00.000Z","title":"Hsts，httpcode - 302 303 307","tags":["httpcode","hsts"],"description":"没见过hsts是个什么东东，用一个jsdelivr的接口,发现的307和响应header里面有hsts"},"headers":[{"level":2,"title":"3xx code","slug":"_3xx-code","link":"#_3xx-code","children":[]},{"level":2,"title":"表现","slug":"表现","link":"#表现","children":[]},{"level":2,"title":"nginx 如何开启","slug":"nginx-如何开启","link":"#nginx-如何开启","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"posts/hsts_307.md"}'),i={name:"posts/hsts_307.md"},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(`<h2 id="_3xx-code" tabindex="-1">3xx code <a class="header-anchor" href="#_3xx-code" aria-hidden="true">#</a></h2><ul><li>301 永久性跳转 http1.0</li><li>302 临时性跳转 http1.0</li><li>303 (补充302) 各浏览器按302处理 http1.1</li><li>307 (补充302) 基本没见过 在jsdelivr看到了 http1.1</li></ul><p>303,307的表现还和请求的幂等、非幂等有关,get,delete,put为幂等，post非幂等<br> 白话版，请求无法预知提交schema的作用，比如primarykey是否存在的情况下，通常意义上来讲前三个的副作用是固定的，post不是</p><h2 id="表现" tabindex="-1">表现 <a class="header-anchor" href="#表现" aria-hidden="true">#</a></h2><p>本地文件按照<code>file://</code>或者webstorm的<code>localhost</code>不带https打开,请求自适应协议的get<code>//data.jsdelivr.com/v1/package/npm/xxx</code>,查看控制台发现先发了一个http get请求, 状态码:307,响应response headers:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Allow-Origin: http://localhost:63342</span></span>
<span class="line"><span style="color:#A6ACCD;">Location: https://data.jsdelivr.com/v1/package/npm/vue</span></span>
<span class="line"><span style="color:#A6ACCD;">Non-Authoritative-Reason: HSTS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>再发一个https get到这个url到请求,并正常返回结果,<strong>浏览器自动完成</strong></p><h2 id="nginx-如何开启" tabindex="-1">nginx 如何开启 <a class="header-anchor" href="#nginx-如何开启" aria-hidden="true">#</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">add_header Strict-Transport-Security &quot;max-age=63072000; includeSubdomains; preload&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><p><a href="https://hstspreload.org/" target="_blank" rel="noreferrer">https://hstspreload.org/</a><br><a href="https://zhangzifan.com/hsts.html" target="_blank" rel="noreferrer">https://zhangzifan.com/hsts.html</a><br><a href="https://chromium.googlesource.com/chromium/src/+/master/net/http/transport_security_state_static.json?format=TEXT" target="_blank" rel="noreferrer">hsts list的列表(加密,好像是会随chrome的发布不断内置新版,已经到22M了)</a></p>`,11);function d(t,_,g,m,u,x){return a(),n("div",null,[e("h1",c,[r(l(t.$frontmatter.title)+" ",1),p]),h])}const A=s(i,[["render",d]]);export{C as __pageData,A as default};