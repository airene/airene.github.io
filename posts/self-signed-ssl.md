---
date: 2024-06-27
title: macOS 自签一个825天有效期的SSL证书并实现macOS,iOS,windows都能安装
category: macOS
tags:
- macOS
- unraid
description: unraid内网域名加一个有效期10年的ssl证书，没有证书理论上更快，但是总是有不安全的提示，好多网上的教程都没有实操性了，找到一个好用的总结发出来
---
# 
## 如何生成证书
现在各大平台免费的ssl证书已经只有90天了，之前是1年。1年申请且部署一次还算不麻烦，90天就有点太频繁了。    
目前个人生产环境前面用 caddy 代替 nginx ，可以自动续ssl证书，或者 nginx+acme 服务。  
内网环境，比如 unraid 这样的服务，直接解析到局域网ip的类型（不需要其他人访问），完全可以自签一个10年的就不用动了，以下是步骤(在macOS14.5执行)：

```shell
# 要点 输入一个密码并记住密码，后面要用
openssl genrsa -des3 -out myCA.key 2048

# 生成10年有效期的跟证书，几乎可以随便填， 
# Common Name 也就是CN 我填的是域名 而且是一个二级域名 eg. nas.ti.bi，可能有更高级玩法
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 3650 -out myCA.pem
# 站点密钥 也就是nginx 证书的key文件
openssl genrsa -out ti.bi.key 2048
# 签名文件 几乎可以随便填， Common Name 也就是CN 我填的是域名 而且是一个二级域名 eg. nas.ti.bi 
# A challenge password 直接回车
openssl req -new -key ti.bi.key -out ti.bi.csr
# 先把下一段内容保存成 san.ext 文件备用， 825天目前发现是iOS证书不报非法证书的最长天数
openssl x509 -req -in ti.bi.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial -out ti.bi.crt -days 825  -sha256 -extfile san.ext
```

```
# san.ext

authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = nas.ti.bi
```
## 将证书导入到 macOS 钥匙串
```
1.	打开 Finder，找到 myCA.pem 文件并双击它。这将打开“钥匙串访问”应用程序。
2.	在“钥匙串访问”中，选择左侧栏中的“系统”钥匙串。
3.	将证书拖动到“系统”钥匙串中，或者选择 文件 -> 导入项目...，选择 myCA.pem 文件，然后选择“系统”钥匙串。
4.	输入管理员密码以进行确认。
5.	在“钥匙串访问”中找到刚刚导入的证书。
6.	双击证书打开证书信息窗口。
7.	在证书信息窗口中，展开 信任 部分，将 使用此证书时 设置为 始终信任。
8.	关闭证书信息窗口，并输入管理员密码以进行确认。
```

## 放到 nginx 的配置里即可，这个就略过了  
`ti.bi.crt` 和`ti.bi.key` 就是nginx配置文件中需要配置的文件， unraid 需要两个文件合成一个文件，ti.bi.pem放上面，ti.bi.key放下面，命名为 {nas}_unraid_bundle.pem，放到`/boot/config/ssl/certs`即可。  
{nas}为你的unraid实例名称。

## 主要参考 比如怎么iOS,windows安装根证书
[https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/](https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/)
