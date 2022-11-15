import{_ as s,o as a,c as n,d as e,e as r,t as o,f as l}from"./app.fc5e7cd3.js";const C=JSON.parse('{"title":"Hsts\uFF0Chttpcode - 302 303 307","description":"\u6CA1\u89C1\u8FC7hsts\u662F\u4E2A\u4EC0\u4E48\u4E1C\u4E1C\uFF0C\u7528\u4E00\u4E2Ajsdelivr\u7684\u63A5\u53E3,\u53D1\u73B0\u7684307\u548C\u54CD\u5E94header\u91CC\u9762\u6709hsts","frontmatter":{"date":"2021-09-17T00:00:00.000Z","title":"Hsts\uFF0Chttpcode - 302 303 307","tags":["httpcode","hsts"],"description":"\u6CA1\u89C1\u8FC7hsts\u662F\u4E2A\u4EC0\u4E48\u4E1C\u4E1C\uFF0C\u7528\u4E00\u4E2Ajsdelivr\u7684\u63A5\u53E3,\u53D1\u73B0\u7684307\u548C\u54CD\u5E94header\u91CC\u9762\u6709hsts"},"headers":[{"level":2,"title":"3xx code","slug":"_3xx-code","link":"#_3xx-code","children":[]},{"level":2,"title":"\u8868\u73B0","slug":"\u8868\u73B0","link":"#\u8868\u73B0","children":[]},{"level":2,"title":"nginx \u5982\u4F55\u5F00\u542F","slug":"nginx-\u5982\u4F55\u5F00\u542F","link":"#nginx-\u5982\u4F55\u5F00\u542F","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"posts/hsts_307.md"}'),i={name:"posts/hsts_307.md"},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<h2 id="_3xx-code" tabindex="-1">3xx code <a class="header-anchor" href="#_3xx-code" aria-hidden="true">#</a></h2><ul><li>301 \u6C38\u4E45\u6027\u8DF3\u8F6C http1.0</li><li>302 \u4E34\u65F6\u6027\u8DF3\u8F6C http1.0</li><li>303 (\u8865\u5145302) \u5404\u6D4F\u89C8\u5668\u6309302\u5904\u7406 http1.1</li><li>307 (\u8865\u5145302) \u57FA\u672C\u6CA1\u89C1\u8FC7 \u5728jsdelivr\u770B\u5230\u4E86 http1.1</li></ul><p>303,307\u7684\u8868\u73B0\u8FD8\u548C\u8BF7\u6C42\u7684\u5E42\u7B49\u3001\u975E\u5E42\u7B49\u6709\u5173,get,delete,put\u4E3A\u5E42\u7B49\uFF0Cpost\u975E\u5E42\u7B49<br> \u767D\u8BDD\u7248\uFF0C\u8BF7\u6C42\u65E0\u6CD5\u9884\u77E5\u63D0\u4EA4schema\u7684\u4F5C\u7528\uFF0C\u6BD4\u5982primarykey\u662F\u5426\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u5E38\u610F\u4E49\u4E0A\u6765\u8BB2\u524D\u4E09\u4E2A\u7684\u526F\u4F5C\u7528\u662F\u56FA\u5B9A\u7684\uFF0Cpost\u4E0D\u662F</p><h2 id="\u8868\u73B0" tabindex="-1">\u8868\u73B0 <a class="header-anchor" href="#\u8868\u73B0" aria-hidden="true">#</a></h2><p>\u672C\u5730\u6587\u4EF6\u6309\u7167<code>file://</code>\u6216\u8005webstorm\u7684<code>localhost</code>\u4E0D\u5E26https\u6253\u5F00,\u8BF7\u6C42\u81EA\u9002\u5E94\u534F\u8BAE\u7684get<code>//data.jsdelivr.com/v1/package/npm/xxx</code>,\u67E5\u770B\u63A7\u5236\u53F0\u53D1\u73B0\u5148\u53D1\u4E86\u4E00\u4E2Ahttp get\u8BF7\u6C42, \u72B6\u6001\u7801:307,\u54CD\u5E94response headers:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span style="color:#A6ACCD;">Access-Control-Allow-Origin: http://localhost:63342</span></span>
<span class="line"><span style="color:#A6ACCD;">Location: https://data.jsdelivr.com/v1/package/npm/vue</span></span>
<span class="line"><span style="color:#A6ACCD;">Non-Authoritative-Reason: HSTS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u53D1\u4E00\u4E2Ahttps get\u5230\u8FD9\u4E2Aurl\u5230\u8BF7\u6C42,\u5E76\u6B63\u5E38\u8FD4\u56DE\u7ED3\u679C,<strong>\u6D4F\u89C8\u5668\u81EA\u52A8\u5B8C\u6210</strong></p><h2 id="nginx-\u5982\u4F55\u5F00\u542F" tabindex="-1">nginx \u5982\u4F55\u5F00\u542F <a class="header-anchor" href="#nginx-\u5982\u4F55\u5F00\u542F" aria-hidden="true">#</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">add_header Strict-Transport-Security &quot;max-age=63072000; includeSubdomains; preload&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://hstspreload.org/" target="_blank" rel="noreferrer">https://hstspreload.org/</a><br><a href="https://zhangzifan.com/hsts.html" target="_blank" rel="noreferrer">https://zhangzifan.com/hsts.html</a><br><a href="https://chromium.googlesource.com/chromium/src/+/master/net/http/transport_security_state_static.json?format=TEXT" target="_blank" rel="noreferrer">hsts list\u7684\u5217\u8868(\u52A0\u5BC6,\u597D\u50CF\u662F\u4F1A\u968Fchrome\u7684\u53D1\u5E03\u4E0D\u65AD\u5185\u7F6E\u65B0\u7248,\u5DF2\u7ECF\u523022M\u4E86)</a></p>`,11);function h(t,_,g,u,x,m){return a(),n("div",null,[e("h1",c,[r(o(t.$frontmatter.title)+" ",1),p]),d])}const A=s(i,[["render",h]]);export{C as __pageData,A as default};