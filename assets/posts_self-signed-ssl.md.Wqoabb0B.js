import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.DqUASBqV.js";const F=JSON.parse('{"title":"macOS 自签一个10年有效期的证书并安装","description":"unraid内网域名加一个有效期10年的ssl证书，没有证书理论上更快，但是总是有不安全的提示，好多网上的教程都没有实操性了","frontmatter":{"date":"2024-06-27T00:00:00.000Z","title":"macOS 自签一个10年有效期的证书并安装","category":"macOS","tags":["macOS","unraid"],"description":"unraid内网域名加一个有效期10年的ssl证书，没有证书理论上更快，但是总是有不安全的提示，好多网上的教程都没有实操性了"},"headers":[],"relativePath":"posts/self-signed-ssl.md","filePath":"posts/self-signed-ssl.md"}'),p={name:"posts/self-signed-ssl.md"},e=i(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1><p>现在各大平台免费的ssl证书已经只有90天了，之前是1年。1年申请且部署一次还算不麻烦，90天就有点太频繁了。<br> 目前个人生产环境前面用 caddy 代替 nginx ，可以自动续ssl证书，或者 nginx+acme 服务。<br> 内网环境，比如 unraid 这样的服务，直接解析到局域网ip的类型（不需要其他人访问），完全可以自签一个10年的就不用动了，以下是步骤：</p><ol><li>生成一个san.cnf文件，新版chrome好像不含SAN信息还是会报不安全</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[ req ]</span></span>
<span class="line"><span>default_bits       = 4096</span></span>
<span class="line"><span>default_md         = sha256</span></span>
<span class="line"><span>default_keyfile    = key.pem</span></span>
<span class="line"><span>prompt             = no</span></span>
<span class="line"><span>encrypt_key        = no</span></span>
<span class="line"><span>distinguished_name = req_distinguished_name</span></span>
<span class="line"><span>req_extensions     = v3_req</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ req_distinguished_name ]</span></span>
<span class="line"><span>C            = me</span></span>
<span class="line"><span>ST           = me</span></span>
<span class="line"><span>L            = me</span></span>
<span class="line"><span>O            = me</span></span>
<span class="line"><span>OU           = me</span></span>
<span class="line"><span>CN           = 换成自己的域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ v3_req ]</span></span>
<span class="line"><span>subjectAltName = @alt_names</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ alt_names ]</span></span>
<span class="line"><span>DNS.1 = 换成自己的域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ v3_ext ]</span></span>
<span class="line"><span>authorityKeyIdentifier=keyid,issuer</span></span>
<span class="line"><span>basicConstraints=CA:FALSE</span></span>
<span class="line"><span>keyUsage = digitalSignature, keyEncipherment</span></span>
<span class="line"><span>extendedKeyUsage = serverAuth</span></span>
<span class="line"><span>subjectAltName = @alt_names</span></span></code></pre></div><ol start="2"><li>生成私钥和证书签名请求（CSR）</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> req</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nas.csr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -newkey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa:4096</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -keyout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> san.cnf</span></span></code></pre></div><ol start="3"><li>使用 CSR 生成自签名证书</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -req</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nas.csr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -signkey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cert.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -days</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3650</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -extensions</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v3_ext</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -extfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> san.cnf</span></span></code></pre></div><ol start="4"><li>将证书导入到 macOS 钥匙串</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.	打开 Finder，找到 cert.pem 文件并双击它。这将打开“钥匙串访问”应用程序。</span></span>
<span class="line"><span>2.	在“钥匙串访问”中，选择左侧栏中的“系统”钥匙串。</span></span>
<span class="line"><span>3.	将证书拖动到“系统”钥匙串中，或者选择 文件 -&gt; 导入项目...，选择 cert.pem 文件，然后选择“系统”钥匙串。</span></span>
<span class="line"><span>4.	输入管理员密码以进行确认。</span></span>
<span class="line"><span>5.	在“钥匙串访问”中找到刚刚导入的证书。</span></span>
<span class="line"><span>6.	双击证书打开证书信息窗口。</span></span>
<span class="line"><span>7.	在证书信息窗口中，展开 信任 部分，将 使用此证书时 设置为 始终信任。</span></span>
<span class="line"><span>8.	关闭证书信息窗口，并输入管理员密码以进行确认。</span></span></code></pre></div><ol start="5"><li>放到 nginx 的配置里即可，这个就略过了<br> unraid 需要两个文件合成一个文件，cert.pem放上面，key.pem放下面，命名为 {nas}_unraid_bundle.pem，放到<code>/boot/config/ssl/certs</code>即可。<br> {nas}为你的unraid实例名称。</li></ol>`,11),l=[e];function t(h,c,d,k,r,o){return n(),a("div",null,l)}const C=s(p,[["render",t]]);export{F as __pageData,C as default};
