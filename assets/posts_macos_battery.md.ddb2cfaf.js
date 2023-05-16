import{_ as e,o as s,c as o,z as t,a as n,t as l,O as r}from"./chunks/framework.7d395e2a.js";const u=JSON.parse('{"title":"macOS电池掉电，一晚上就没电","description":"macOS 12.2 蓝牙bug我遇到了，一晚上肯定没电","frontmatter":{"date":"2022-03-03T00:00:00.000Z","title":"macOS电池掉电，一晚上就没电","tags":["macOS"],"description":"macOS 12.2 蓝牙bug我遇到了，一晚上肯定没电"},"headers":[],"relativePath":"posts/macos_battery.md","filePath":"posts/macos_battery.md"}'),c={name:"posts/macos_battery.md"},i={id:"frontmatter-title",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=r(`<p>感觉触发条件就是蓝牙的问题，12.2.1已经修复了，已经验证确认修复，我的设备的表现</p><ul><li>坐地铁 手机蓝牙连接耳机，电脑放在包里，就因为蓝牙的问题，电脑发热，掉电很快，周围没有已知蓝牙就没问题</li><li>工位 下班直接拔充电，蓝牙键盘未操作，第二天没电</li></ul><p>因为这个问题也深度看了一下设置，除了电源小憩没开之外，pmset确实默认睡眠时间太长了，重新设置一下电源的时间，现在盒盖一晚上或者一个周末基本不掉电</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">highstandbythreshold 85</span></span>
<span class="line"><span style="color:#A6ACCD;">standbydelayhigh     3600</span></span>
<span class="line"><span style="color:#A6ACCD;">standbydelaylow      1800</span></span></code></pre></div><p>在hibernatemode为3（笔记本都是3）模式的前提下，重点修改这三个参数就行了，粗略的可以理解为如果不修改那就是即使盒盖也是过了3-24个小时才 <strong>深度睡眠</strong></p>`,5);function _(a,m,h,y,b,f){return s(),o("div",null,[t("h1",i,[n(l(a.$frontmatter.title)+" ",1),p]),d])}const S=e(c,[["render",_]]);export{u as __pageData,S as default};
