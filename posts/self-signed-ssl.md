---
date: 2024-06-27
title: macOS 自签一个10年有效期的证书并安装
category: macOS
tags:
- macOS
- unraid
description: unraid内网域名加一个有效期10年的ssl证书，没有证书理论上更快，但是总是有不安全的提示，好多网上的教程都没有实操性了
---
# 

现在各大平台免费的ssl证书已经只有90天了，之前是1年。1年申请且部署一次还算不麻烦，90天就有点太频繁了。    
目前个人生产环境前面用 caddy 代替 nginx ，可以自动续ssl证书，或者 nginx+acme 服务。  
内网环境，比如 unraid 这样的服务，直接解析到局域网ip的类型（不需要其他人访问），完全可以自签一个10年的就不用动了，以下是步骤：
1. 生成一个san.cnf文件，新版chrome好像不含SAN信息还是会报不安全
```
[ req ]
default_bits       = 4096
default_md         = sha256
default_keyfile    = key.pem
prompt             = no
encrypt_key        = no
distinguished_name = req_distinguished_name
req_extensions     = v3_req

[ req_distinguished_name ]
C            = me
ST           = me
L            = me
O            = me
OU           = me
CN           = 换成自己的域名

[ v3_req ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = 换成自己的域名

[ v3_ext ]
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
```
2.  生成私钥和证书签名请求（CSR）
```shell
openssl req -new -nodes -out nas.csr -newkey rsa:4096 -keyout key.pem -config san.cnf
```
3. 使用 CSR 生成自签名证书
```shell
openssl x509 -req -in nas.csr -signkey key.pem -out cert.pem -days 3650 -extensions v3_ext -extfile san.cnf
```
4. 将证书导入到 macOS 钥匙串
```
1.	打开 Finder，找到 cert.pem 文件并双击它。这将打开“钥匙串访问”应用程序。
2.	在“钥匙串访问”中，选择左侧栏中的“系统”钥匙串。
3.	将证书拖动到“系统”钥匙串中，或者选择 文件 -> 导入项目...，选择 cert.pem 文件，然后选择“系统”钥匙串。
4.	输入管理员密码以进行确认。
5.	在“钥匙串访问”中找到刚刚导入的证书。
6.	双击证书打开证书信息窗口。
7.	在证书信息窗口中，展开 信任 部分，将 使用此证书时 设置为 始终信任。
8.	关闭证书信息窗口，并输入管理员密码以进行确认。
```
5. 放到 nginx 的配置里即可，这个就略过了  
unraid 需要两个文件合成一个文件，cert.pem放上面，key.pem放下面，命名为 {nas}_unraid_bundle.pem，放到`/boot/config/ssl/certs`即可。  
{nas}为你的unraid实例名称。
