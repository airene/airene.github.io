import{_ as a,o as l,c as o,d as s,e as p,t as e,f as t}from"./app.8cd3d126.js";const _=JSON.parse('{"title":"Nginx中一些不常见但是有用的配置和windows下的特殊处理","description":"装上就能用，但是有些地方还是有一些个性化需求的，记录一下，也许别人也会用到，比如最优的让ip不能访问而不是打开\\"第一个\\"，代理下的静态文件关闭日志等","frontmatter":{"date":"2023-01-10T00:00:00.000Z","title":"Nginx中一些不常见但是有用的配置和windows下的特殊处理","tags":["nginx"],"description":"装上就能用，但是有些地方还是有一些个性化需求的，记录一下，也许别人也会用到，比如最优的让ip不能访问而不是打开\\"第一个\\"，代理下的静态文件关闭日志等"},"headers":[{"level":2,"title":"不显示nginx版本号","slug":"不显示nginx版本号","link":"#不显示nginx版本号","children":[]},{"level":2,"title":"默认时间格式不是国人友好","slug":"默认时间格式不是国人友好","link":"#默认时间格式不是国人友好","children":[]},{"level":2,"title":"在proxy关闭静态文件log","slug":"在proxy关闭静态文件log","link":"#在proxy关闭静态文件log","children":[]},{"level":2,"title":"windows日志切割","slug":"windows日志切割","link":"#windows日志切割","children":[]},{"level":2,"title":"直接使用ip不让问题","slug":"直接使用ip不让问题","link":"#直接使用ip不让问题","children":[]},{"level":2,"title":"其他好文","slug":"其他好文","link":"#其他好文","children":[]}],"relativePath":"posts/nginx_config.md"}'),r={name:"posts/nginx_config.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=t(`<p>只写一些默认配置没有的选项，常见的就不写了</p><h2 id="不显示nginx版本号" tabindex="-1">不显示nginx版本号 <a class="header-anchor" href="#不显示nginx版本号" aria-hidden="true">#</a></h2><p>携带版本号的可能有特定的漏洞，隐藏了加强点安全，http节点下加入一行<code>server_tokens off;</code>即可</p><h2 id="默认时间格式不是国人友好" tabindex="-1">默认时间格式不是国人友好 <a class="header-anchor" href="#默认时间格式不是国人友好" aria-hidden="true">#</a></h2><p>把 log_format 中的 <code>$time_local</code> 换成<code>$time_iso8601</code>会易读一些</p><h2 id="在proxy关闭静态文件log" tabindex="-1">在proxy关闭静态文件log <a class="header-anchor" href="#在proxy关闭静态文件log" aria-hidden="true">#</a></h2><p>这个点下面点两个方法可能都不是最优解法<br><strong>方法一</strong>，配置双份代理，实测有效，不优雅</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For  </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://192.168.137.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.*\\.(gif|jpg|jpeg|png|bmp|css|js|ico|svg|ttf|woff|woff2|json)$ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For  </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://192.168.137.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> log_not_found </span><span style="color:#A6ACCD;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>方法二</strong>，用一个nginx支持的map功能,全站或者按站点添加都可以</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">map</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;font-style:italic;">request_uri</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">loggable {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> default</span><span style="color:#A6ACCD;">                                                        </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">~*\\.(gif|jpg|jpeg|png|bmp|css|js|ico|svg|ttf|woff|woff2|json)$ </span><span style="color:#A6ACCD;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">access_log </span><span style="color:#A6ACCD;">logs/access.log combined if=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">loggable</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="windows日志切割" tabindex="-1">windows日志切割 <a class="header-anchor" href="#windows日志切割" aria-hidden="true">#</a></h2><p>linux平台装好了自动按日期切割而且还压缩了（yum安装），windows费点劲，而且还不能直接注册服务，需要winsw的协助<br> 实测有效（部分语法不是非常清楚，比如最后一个@echo on有没有意义），好像不停服务也没问题，不是HA很高要求的 启停一下问题也不大。</p><div class="language-bat"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">off</span></span>
<span class="line"><span style="color:#89DDFF;">net stop</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">rem</span><span style="color:#676E95;font-style:italic;"> get date in format yyyymmdd</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> /f </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tokens=1-3 delims=-/ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">%%</span><span style="color:#F07178;">1 </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;%</span><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">%&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">set</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ddd</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">%%</span><span style="color:#F07178;">1</span><span style="color:#A6ACCD;">%%</span><span style="color:#F07178;">2</span><span style="color:#A6ACCD;">%%</span><span style="color:#F07178;">3</span></span>
<span class="line"><span style="color:#89DDFF;">move</span><span style="color:#A6ACCD;"> PATH:\\nginx\\logs\\access.log PATH:\\nginx\\logs\\access_</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">ddd</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">.log</span></span>
<span class="line"><span style="color:#89DDFF;">move</span><span style="color:#A6ACCD;"> path:\\nginx\\logs\\error.log PATH:\\nginx\\logs\\error_</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">ddd</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">.log</span></span>
<span class="line"><span style="color:#89DDFF;">net start</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">on</span></span>
<span class="line"></span></code></pre></div><h2 id="直接使用ip不让问题" tabindex="-1">直接使用ip不让问题 <a class="header-anchor" href="#直接使用ip不让问题" aria-hidden="true">#</a></h2><p>如果不做特殊处理，使用ip访问，默认会找&quot;第一个&quot;网站打开，最新的可能是默认nginx页面，反正还是有的打开，这样会别人随便解析ip，有风险，而且不管是返回啥都比下面都方法的慢，我知道的最优雅的方式</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;"> default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443</span><span style="color:#89DDFF;"> default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_reject_handshake </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">444</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>直接就是打不开 而且返回速度很快<br> PS:<code>ssl_reject_handshake</code>需要高版本nginx才支持</p><h2 id="其他好文" tabindex="-1">其他好文 <a class="header-anchor" href="#其他好文" aria-hidden="true">#</a></h2><p><a href="https://mp.weixin.qq.com/s/UXgjwYI6eI0Acgb-CfxtAw" target="_blank" rel="noreferrer">为什么NGINX的reload命令不是热加载？</a><br> 看起来在一些代理场景缺点还挺多的</p>`,19);function y(n,C,A,F,d,g){return l(),o("div",null,[s("h1",c,[p(e(n.$frontmatter.title)+" ",1),i]),D])}const f=a(r,[["render",y]]);export{_ as __pageData,f as default};
