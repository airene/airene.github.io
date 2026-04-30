---
date: 2026-04-30
title: macOS 升级到 15.7.5 开始 mobileconfig 就无法阻止大版本升级提示了
category: macOS
description: 之前一直用 mobileconfig 的方式来阻止大版本升级
tags:
- macOS
---
# macOS 升级到 15.7.5 开始 mobileconfig 就无法阻止大版本升级提示了
为什么还没有升级 Tahoe：
- 因为不太喜欢 liquid glass，系统大换代明显不是很成熟
- Launch Pad 没了

这么做更新中心就不会有提示了  
以下是新方法：
```bash
sudo defaults write /private/var/root/Library/Preferences/com.apple.MobileAsset.plist MobileAssetAssetAudience -string Go-Away-Tahoe
sudo softwareupdate --background --force
```

恢复：
```bash
sudo defaults delete /private/var/root/Library/Preferences/com.apple.MobileAsset.plist MobileAssetAssetAudience

```
## 另外关于 debian 系统
用了这么多年 debian， 第一次发现一个和其他系统不一样的地方，默认源安装的 zip 包没有参数 -O，然后这个需要用，只能自己编译。  
openeuler就有这个参数。

