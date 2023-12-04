import{_ as s,o as i,c as a,R as n}from"./chunks/framework.o-1c6b6b.js";const c=JSON.parse('{"title":"Nginx中一些不常见但是有用的配置和windows下的特殊处理","description":"装上就能用，但是有些地方还是有一些个性化需求的，记录一下，也许别人也会用到，比如最优的让ip不能访问而不是打开\\"第一个\\"，代理下的静态文件关闭日志等","frontmatter":{"date":"2023-01-10T00:00:00.000Z","title":"Nginx中一些不常见但是有用的配置和windows下的特殊处理","tags":["nginx"],"description":"装上就能用，但是有些地方还是有一些个性化需求的，记录一下，也许别人也会用到，比如最优的让ip不能访问而不是打开\\"第一个\\"，代理下的静态文件关闭日志等"},"headers":[],"relativePath":"posts/nginx_config.md","filePath":"posts/nginx_config.md"}'),h={name:"posts/nginx_config.md"},t=n(`<h1 id="nginx中一些不常见但是有用的配置和windows下的特殊处理" tabindex="-1">Nginx中一些不常见但是有用的配置和windows下的特殊处理 <a class="header-anchor" href="#nginx中一些不常见但是有用的配置和windows下的特殊处理" aria-label="Permalink to &quot;Nginx中一些不常见但是有用的配置和windows下的特殊处理&quot;">​</a></h1><p>只写一些默认配置没有的选项，常见的就不写了</p><h2 id="不显示nginx版本号" tabindex="-1">不显示nginx版本号 <a class="header-anchor" href="#不显示nginx版本号" aria-label="Permalink to &quot;不显示nginx版本号&quot;">​</a></h2><p>携带版本号的可能有特定的漏洞，隐藏了加强点安全，http节点下加入一行<code>server_tokens off;</code>即可</p><h2 id="默认时间格式不是国人友好" tabindex="-1">默认时间格式不是国人友好 <a class="header-anchor" href="#默认时间格式不是国人友好" aria-label="Permalink to &quot;默认时间格式不是国人友好&quot;">​</a></h2><p>把 log_format 中的 <code>$time_local</code> 换成<code>$time_iso8601</code>会易读一些</p><h2 id="在proxy关闭静态文件log" tabindex="-1">在proxy关闭静态文件log <a class="header-anchor" href="#在proxy关闭静态文件log" aria-label="Permalink to &quot;在proxy关闭静态文件log&quot;">​</a></h2><p>这个点下面点两个方法可能都不是最优解法<br><strong>方法一</strong>，配置双份代理，实测有效，不优雅</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For  $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $http_host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://192.168.137.2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .*\\.(gif|jpg|jpeg|png|bmp|css|js|ico|svg|ttf|woff|woff2|json)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For  $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $http_host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://192.168.137.2;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    log_not_found </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">off;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">off;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>方法二</strong>，用一个nginx支持的map功能,全站或者按站点添加都可以</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">request_uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $loggable {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                                        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ~*\\.(gif|jpg|jpeg|png|bmp|css|js|ico|svg|ttf|woff|woff2|json)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">0;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logs/access.log combined if=$loggable;</span></span></code></pre></div><h2 id="windows日志切割" tabindex="-1">windows日志切割 <a class="header-anchor" href="#windows日志切割" aria-label="Permalink to &quot;windows日志切割&quot;">​</a></h2><p>linux平台装好了自动按日期切割而且还压缩了（yum安装），windows费点劲，而且还不能直接注册服务，需要winsw的协助<br> 实测有效（部分语法不是非常清楚，比如最后一个@echo on有没有意义），好像不停服务也没问题，不是HA很高要求的 启停一下问题也不大。</p><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> off</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">net stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> get date in format yyyymmdd</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tokens=1-3 delims=-/ &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> %%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%date%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ddd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">move</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH:\\nginx\\logs\\access.log PATH:\\nginx\\logs\\access_%ddd%.log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">move</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path:\\nginx\\logs\\error.log PATH:\\nginx\\logs\\error_%ddd%.log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">net start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> on</span></span></code></pre></div><p>命令方式添加成计划任务</p><div class="language-ps vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ps</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schtasks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">create </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sc daily </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tn </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;描述&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tr </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH:\\bak\\export_db.bat&quot;</span></span></code></pre></div><h2 id="直接使用ip不让问题" tabindex="-1">直接使用ip不让问题 <a class="header-anchor" href="#直接使用ip不让问题" aria-label="Permalink to &quot;直接使用ip不让问题&quot;">​</a></h2><p>如果不做特殊处理，使用ip访问，默认会找&quot;第一个&quot;网站打开，最新的可能是默认nginx页面，反正还是有的打开，这样会别人随便解析ip，有风险，而且不管是返回啥都比下面都方法的慢，我知道的最优雅的方式</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">80</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ssl_reject_handshake </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 444</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>直接就是打不开 而且返回速度很快<br> PS:<code>ssl_reject_handshake</code>需要高版本nginx才支持</p><h2 id="其他好文" tabindex="-1">其他好文 <a class="header-anchor" href="#其他好文" aria-label="Permalink to &quot;其他好文&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s/UXgjwYI6eI0Acgb-CfxtAw" target="_blank" rel="noreferrer">为什么NGINX的reload命令不是热加载？</a><br> 看起来在一些代理场景缺点还挺多的</p>`,22),p=[t];function l(e,k,r,d,o,g){return i(),a("div",null,p)}const y=s(h,[["render",l]]);export{c as __pageData,y as default};
