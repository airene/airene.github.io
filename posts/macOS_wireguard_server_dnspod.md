---
date: 2024-12-30
title: macOS 下实现 wireguard 的 access to lan 和 ddns 都变成开机启动的服务
category: macOS
tags:
- macOS
- wireguard
- ddns
description: 有了 mac mini m4 ，小米主机 2022 的 1240p 已经不香了，功耗还凑合，不是很大，但是风扇总是会时不时的转一会，风扇声音还挺大 
---
# macOS 下实现 wireguard 的 access to lan 和 ddns 都变成开机启动的服务

## 前提
小米迷你主机 ≈ intel nuc 12，一开始装的unraid，后来装的fnOS, 主要就是fnOS的开放性，很容易能安装wg和ddns常驻。
## 问题和收益
有了mac mini m4 万兆版，小米nuc就不香了，再加上macOS休眠调了很多参数之后还是1个小时深度唤醒一次（需要留着womp能局域网唤醒） 
干脆直接让mac mini一直开机，小米nuc按需开，需要解决的问题或者收益：
 - 让wireguard的access to lan（'server'模式 - 其实没有server模式，只是变成稳定peer且能连到peer下的局域网）能在mini使用，且开机启动，且能同时连接多个wg，app store的app不能同时启用多个
 - 让ddns作为开机启动服务
 - 让小米nuc按需开机，减少功耗，减少噪音

## 具体办法
### wireguard开机启动 和 access to lan模式
如果只是单纯的一个peer的话，非常方便，不涉及防火墙的问题。在能转发和NAT上好不容找到一个高质量的文章。  
想多开wg 就 `brew install wireguard-tools` 正常用即可，重点来了，让macOS能转发和NAT的方法（去掉了ipv6，参考文档里有）：  

1、准备postup脚本
```shell
#!/bin/sh
/usr/sbin/sysctl -w net.inet.ip.forwarding=1
mkdir -p /usr/local/var/run/wireguard
chmod 700 /usr/local/var/run/wireguard
#最重要的就是这里是wireguard的ip段
echo 'nat on en0 from 10.0.3.0/24 to any -> (en0)' | \ 
pfctl -a com.apple/wireguard_ipv4 -Ef - 2>&1 | \
grep 'Token' | \
sed 's%Token : \(.*\)%\1%' > /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt
IPV4_TOKEN=`sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt`
echo "Added PF IPv4 NAT traffic routing rule with token: ${IPV4_TOKEN}"```
```
2、postdown脚本
```shell
#!/bin/sh
 /usr/sbin/sysctl -w net.inet.ip.forwarding=0
 ANCHOR="com.apple/wireguard_ipv4"
 pfctl -a ${ANCHOR} -F all || exit 1
 echo "Removed IPv4 rule with anchor: ${ANCHOR}"
 IPV4_TOKEN=`sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt`
 pfctl -X ${IPV4_TOKEN} || exit 1
 echo "Removed reference for token: ${IPV4_TOKEN}"
 rm -rf /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt
 echo "Deleted IPv4 token file"
```
3、正常的wireguard配置中增加两条,开启和关闭时候执行动作
```shell
PostUp = /usr/local/etc/wireguard/postup.sh
PostDown = /usr/local/etc/wireguard/postdown.sh
```
4、开机启动脚本和设置步骤  
脚本：  
路径 `/Library/LaunchDaemons/` 这个是不需要你的常用用户登录，直接开机就有
```xml
<?xml version="1.0" encoding="UTF-8"?>
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 <plist version="1.0">
     <dict>
         <key>Label</key>
         <string>com.wireguard.server</string>
         <key>ProgramArguments</key>
         <key>ProgramArguments</key>
         <array>
             <string>/opt/homebrew/bin/wg-quick</string>
             <string>up</string>
             <string>/opt/homebrew/etc/wireguard/home.conf</string>
         </array>
         <key>KeepAlive</key>
         <true/>
         <key>RunAtLoad</key>
         <true/>
         <key>StandardErrorPath</key>
         <string>/opt/homebrew/var/log/wireguard.err</string>
         <key>EnvironmentVariables</key>
         <dict>
             <key>PATH</key>
             <string>/opt/homebrew/sbin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
         </dict>
     </dict>
 </plist>
```
5、修改权限和启动
```shell
sudo chown root:wheel /Library/LaunchDaemons/com.wireguard.server.plist
sudo launchctl enable system/com.wireguard.server
sudo launchctl bootstrap system /Library/LaunchDaemons/com.wireguard.server.plist
```
最终就设置好了  

另外自己实现的ddns的开机启动脚本的plist为：  

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>com.dnspod.server</string>
        <key>ProgramArguments</key>
        <array>
            <string>/Users/airene/system/dnspod</string>
            <string>-c</string>
            <string>/Users/airene/system/.dnspod_go_config.yaml</string>
        </array>
        <key>KeepAlive</key>
         <true/>
         <key>RunAtLoad</key>
         <true/>
         <key>StandardErrorPath</key>
         <string>/opt/homebrew/var/log/dnspod.err</string>
         <key>EnvironmentVariables</key>
         <dict>
             <key>PATH</key>
             <string>/opt/homebrew/sbin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
         </dict>
    </dict>
</plist>
```

## 参考
https://barrowclift.me/articles/wireguard-server-on-macos



