import{_ as n,c as s,o as a,f as p}from"./app.f704f5dc.js";const d='{"title":"chrome\u9ED8\u8BA4\u7684\u4E0D\u8BA9\u7528\u7684\u7AEF\u53E3\u5217\u8868","description":"chrome\u7684ERR_UNSAFE_PORT\u662F\u600E\u4E48\u56DE\u4E8B","frontmatter":{"date":"2021-09-08T00:00:00.000Z","title":"chrome\u9ED8\u8BA4\u7684\u4E0D\u8BA9\u7528\u7684\u7AEF\u53E3\u5217\u8868","tags":["chrome"],"description":"chrome\u7684ERR_UNSAFE_PORT\u662F\u600E\u4E48\u56DE\u4E8B"},"headers":[{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/chrome_unsafe_port.md","lastUpdated":1637027069229}',t={},e=p(`<h1 id="chrome\u9ED8\u8BA4\u7684\u975E\u5B89\u5168\u7AEF\u53E3\u5217\u8868" tabindex="-1">chrome\u9ED8\u8BA4\u7684\u975E\u5B89\u5168\u7AEF\u53E3\u5217\u8868 <a class="header-anchor" href="#chrome\u9ED8\u8BA4\u7684\u975E\u5B89\u5168\u7AEF\u53E3\u5217\u8868" aria-hidden="true">#</a></h1><p>\u5982\u679C\u672C\u5730\u5DE5\u7A0B\u592A\u591A\uFF0C\u53C8\u9700\u8981\u540C\u65F6\u542F\u52A8\uFF0C\u4E00\u822C\u4F1A\u6307\u5B9A\u4E0D\u540C\u7684\u7AEF\u53E3\u53F7<br> \u4E00\u4E2A\u4E0D\u6CE8\u610F\u5C31\u6709\u53EF\u80FD\u9047\u5230\u7AEF\u53E3\u4E0D\u80FD\u7528\u6216\u8005\u4E0D\u8BA9\u7528\u7684\u60C5\u51B5</p><p>\u90A3chrome\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u90FD\u4E0D\u8BA9\u7528\u591A\u5C11\u7AEF\u53E3\u5462</p><div class="language-js"><pre><code>    <span class="token number">1</span><span class="token punctuation">,</span>      <span class="token comment">// tcpmux</span>
    <span class="token number">7</span><span class="token punctuation">,</span>      <span class="token comment">// echo</span>
    <span class="token number">9</span><span class="token punctuation">,</span>      <span class="token comment">// discard</span>
    <span class="token number">11</span><span class="token punctuation">,</span>     <span class="token comment">// systat</span>
    <span class="token number">13</span><span class="token punctuation">,</span>     <span class="token comment">// daytime</span>
    <span class="token number">15</span><span class="token punctuation">,</span>     <span class="token comment">// netstat</span>
    <span class="token number">17</span><span class="token punctuation">,</span>     <span class="token comment">// qotd</span>
    <span class="token number">19</span><span class="token punctuation">,</span>     <span class="token comment">// chargen</span>
    <span class="token number">20</span><span class="token punctuation">,</span>     <span class="token comment">// ftp data</span>
    <span class="token number">21</span><span class="token punctuation">,</span>     <span class="token comment">// ftp access</span>
    <span class="token number">22</span><span class="token punctuation">,</span>     <span class="token comment">// ssh</span>
    <span class="token number">23</span><span class="token punctuation">,</span>     <span class="token comment">// telnet</span>
    <span class="token number">25</span><span class="token punctuation">,</span>     <span class="token comment">// smtp</span>
    <span class="token number">37</span><span class="token punctuation">,</span>     <span class="token comment">// time</span>
    <span class="token number">42</span><span class="token punctuation">,</span>     <span class="token comment">// name</span>
    <span class="token number">43</span><span class="token punctuation">,</span>     <span class="token comment">// nicname</span>
    <span class="token number">53</span><span class="token punctuation">,</span>     <span class="token comment">// domain</span>
    <span class="token number">69</span><span class="token punctuation">,</span>     <span class="token comment">// tftp</span>
    <span class="token number">77</span><span class="token punctuation">,</span>     <span class="token comment">// priv-rjs</span>
    <span class="token number">79</span><span class="token punctuation">,</span>     <span class="token comment">// finger</span>
    <span class="token number">87</span><span class="token punctuation">,</span>     <span class="token comment">// ttylink</span>
    <span class="token number">95</span><span class="token punctuation">,</span>     <span class="token comment">// supdup</span>
    <span class="token number">101</span><span class="token punctuation">,</span>    <span class="token comment">// hostriame</span>
    <span class="token number">102</span><span class="token punctuation">,</span>    <span class="token comment">// iso-tsap</span>
    <span class="token number">103</span><span class="token punctuation">,</span>    <span class="token comment">// gppitnp</span>
    <span class="token number">104</span><span class="token punctuation">,</span>    <span class="token comment">// acr-nema</span>
    <span class="token number">109</span><span class="token punctuation">,</span>    <span class="token comment">// pop2</span>
    <span class="token number">110</span><span class="token punctuation">,</span>    <span class="token comment">// pop3</span>
    <span class="token number">111</span><span class="token punctuation">,</span>    <span class="token comment">// sunrpc</span>
    <span class="token number">113</span><span class="token punctuation">,</span>    <span class="token comment">// auth</span>
    <span class="token number">115</span><span class="token punctuation">,</span>    <span class="token comment">// sftp</span>
    <span class="token number">117</span><span class="token punctuation">,</span>    <span class="token comment">// uucp-path</span>
    <span class="token number">119</span><span class="token punctuation">,</span>    <span class="token comment">// nntp</span>
    <span class="token number">123</span><span class="token punctuation">,</span>    <span class="token comment">// NTP</span>
    <span class="token number">135</span><span class="token punctuation">,</span>    <span class="token comment">// loc-srv /epmap</span>
    <span class="token number">137</span><span class="token punctuation">,</span>    <span class="token comment">// netbios</span>
    <span class="token number">139</span><span class="token punctuation">,</span>    <span class="token comment">// netbios</span>
    <span class="token number">143</span><span class="token punctuation">,</span>    <span class="token comment">// imap2</span>
    <span class="token number">161</span><span class="token punctuation">,</span>    <span class="token comment">// snmp</span>
    <span class="token number">179</span><span class="token punctuation">,</span>    <span class="token comment">// BGP</span>
    <span class="token number">389</span><span class="token punctuation">,</span>    <span class="token comment">// ldap</span>
    <span class="token number">427</span><span class="token punctuation">,</span>    <span class="token comment">// SLP (Also used by Apple Filing Protocol)</span>
    <span class="token number">465</span><span class="token punctuation">,</span>    <span class="token comment">// smtp+ssl</span>
    <span class="token number">512</span><span class="token punctuation">,</span>    <span class="token comment">// print / exec</span>
    <span class="token number">513</span><span class="token punctuation">,</span>    <span class="token comment">// login</span>
    <span class="token number">514</span><span class="token punctuation">,</span>    <span class="token comment">// shell</span>
    <span class="token number">515</span><span class="token punctuation">,</span>    <span class="token comment">// printer</span>
    <span class="token number">526</span><span class="token punctuation">,</span>    <span class="token comment">// tempo</span>
    <span class="token number">530</span><span class="token punctuation">,</span>    <span class="token comment">// courier</span>
    <span class="token number">531</span><span class="token punctuation">,</span>    <span class="token comment">// chat</span>
    <span class="token number">532</span><span class="token punctuation">,</span>    <span class="token comment">// netnews</span>
    <span class="token number">540</span><span class="token punctuation">,</span>    <span class="token comment">// uucp</span>
    <span class="token number">548</span><span class="token punctuation">,</span>    <span class="token comment">// AFP (Apple Filing Protocol)</span>
    <span class="token number">554</span><span class="token punctuation">,</span>    <span class="token comment">// rtsp</span>
    <span class="token number">556</span><span class="token punctuation">,</span>    <span class="token comment">// remotefs</span>
    <span class="token number">563</span><span class="token punctuation">,</span>    <span class="token comment">// nntp+ssl</span>
    <span class="token number">587</span><span class="token punctuation">,</span>    <span class="token comment">// smtp (rfc6409)</span>
    <span class="token number">601</span><span class="token punctuation">,</span>    <span class="token comment">// syslog-conn (rfc3195)</span>
    <span class="token number">636</span><span class="token punctuation">,</span>    <span class="token comment">// ldap+ssl</span>
    <span class="token number">989</span><span class="token punctuation">,</span>    <span class="token comment">// ftps-data</span>
    <span class="token number">990</span><span class="token punctuation">,</span>    <span class="token comment">// ftps</span>
    <span class="token number">993</span><span class="token punctuation">,</span>    <span class="token comment">// ldap+ssl</span>
    <span class="token number">995</span><span class="token punctuation">,</span>    <span class="token comment">// pop3+ssl</span>
    <span class="token number">1719</span><span class="token punctuation">,</span>   <span class="token comment">// h323gatestat</span>
    <span class="token number">1720</span><span class="token punctuation">,</span>   <span class="token comment">// h323hostcall</span>
    <span class="token number">1723</span><span class="token punctuation">,</span>   <span class="token comment">// pptp</span>
    <span class="token number">2049</span><span class="token punctuation">,</span>   <span class="token comment">// nfs</span>
    <span class="token number">3659</span><span class="token punctuation">,</span>   <span class="token comment">// apple-sasl / PasswordServer</span>
    <span class="token number">4045</span><span class="token punctuation">,</span>   <span class="token comment">// lockd</span>
    <span class="token number">5060</span><span class="token punctuation">,</span>   <span class="token comment">// sip</span>
    <span class="token number">5061</span><span class="token punctuation">,</span>   <span class="token comment">// sips</span>
    <span class="token number">6000</span><span class="token punctuation">,</span>   <span class="token comment">// X11</span>
    <span class="token number">6566</span><span class="token punctuation">,</span>   <span class="token comment">// sane-port</span>
    <span class="token number">6665</span><span class="token punctuation">,</span>   <span class="token comment">// Alternate IRC [Apple addition]</span>
    <span class="token number">6666</span><span class="token punctuation">,</span>   <span class="token comment">// Alternate IRC [Apple addition]</span>
    <span class="token number">6667</span><span class="token punctuation">,</span>   <span class="token comment">// Standard IRC [Apple addition]</span>
    <span class="token number">6668</span><span class="token punctuation">,</span>   <span class="token comment">// Alternate IRC [Apple addition]</span>
    <span class="token number">6669</span><span class="token punctuation">,</span>   <span class="token comment">// Alternate IRC [Apple addition]</span>
    <span class="token number">6697</span><span class="token punctuation">,</span>   <span class="token comment">// IRC + TLS</span>
    <span class="token number">10080</span>  <span class="token comment">// Amanda</span>
</code></pre></div><p>\u5F53\u7136\u4E86\u5982\u679C\u975E\u8981\u7528\u4E5F\u6709\u529E\u6CD5\u7A81\u7834\u9650\u5236\uFF0C\u53EA\u662F\u5B8C\u5168\u6CA1\u5FC5\u8981<br> \u6700\u8FD1\u53C8\u589E\u52A0\u4E8610080\uFF0C\u672A\u6765\u4F1A\u4E0D\u4F1A\u670910086\u5440</p><p><strong>\u8FD8\u597D\u7528\u6211\u7684\u662F7000\u548C8000\u7CFB\u5217</strong></p><p>ps: macOS \u662F\u4E0D\u8BA9\u75281024\u4EE5\u4E0B\u7684\u7AEF\u53E3</p><h3 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h3><p><a href="https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/net/base/port_util.cc" target="_blank" rel="noopener noreferrer">https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/net/base/port_util.cc</a></p>`,9),o=[e];function c(l,m,u,k,r,i){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{d as __pageData,h as default};
