import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework._jXClnkc.js";const o=JSON.parse('{"title":"设置手上的debian12测试机空闲时自动休眠","description":null,"frontmatter":{"date":"2024-05-26T00:00:00.000Z","title":"设置手上的debian12测试机空闲时自动休眠","category":"linux","tags":["linux","debian","suspend"],"description":null},"headers":[],"relativePath":"posts/debian_idle_suspend.md","filePath":"posts/debian_idle_suspend.md"}'),t={name:"posts/debian_idle_suspend.md"};function l(p,s,d,h,k,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="设置手上的debian12测试机空闲时自动休眠" tabindex="-1">设置手上的debian12测试机空闲时自动休眠 <a class="header-anchor" href="#设置手上的debian12测试机空闲时自动休眠" aria-label="Permalink to &quot;设置手上的debian12测试机空闲时自动休眠&quot;">​</a></h1><p>以下设置在debian12系统亲测有效。<br> 主要收益是：本来就是测试机，需要的时候WOL唤醒，就不用主动执行<code>systemctl suspend</code>来手动休眠了，也省的忘了执行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改配置文件并保存，这两个选项默认就有，只是注释了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/logind.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">----</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IdleAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">suspend</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IdleActionSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">30min</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">----</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启logind服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd-logind</span></span></code></pre></div><p>扩展：<br><code>/etc/systemd/sleep.conf</code> 用来控制“休眠”的行为</p>`,4)]))}const g=i(t,[["render",l]]);export{o as __pageData,g as default};