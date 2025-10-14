---
date: 2025-10-14
title: 屏蔽 masOS26 Tahoe 的升级更新提示
category: macOS
description: 屏蔽 masOS26 Tahoe 的升级更新提示
tags:
- macOS
---
# 屏蔽 masOS26 Tahoe 的升级更新提示
我的一般习惯都是如果有大版本更新，都是到XX.3再升级，再这之前老是提示要升级，最主要的是设置总是有一个红点，下面这个文件就是延迟90天更新，从而实现屏蔽红点
## mobileconfig文件
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>PayloadDisplayName</key>
			<string>Restrictions</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.applicationaccess.F225F9E8-B275-4830-A376-FA2205E71FD6</string>
			<key>PayloadType</key>
			<string>com.apple.applicationaccess</string>
			<key>PayloadUUID</key>
			<string>F225F9E8-B275-4830-A376-FA2205E71FD6</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>enforcedSoftwareUpdateMajorOSDeferredInstallDelay</key>
			<integer>90</integer>
			<key>forceDelayedMajorSoftwareUpdates</key>
			<true/>
		</dict>
	</array>
	<key>PayloadDisplayName</key>
	<string>Ignore Tahoe for 90 days</string>
	<key>PayloadIdentifier</key>
	<string>iMazing-Profile-Editor.71379A17-22C8-4C9B-889D-22ABDF22D121</string>
	<key>PayloadOrganization</key>
	<string>Fixage</string>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>71379A17-22C8-4C9B-889D-22ABDF22D121</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>
```
## 使用方式
将上面的文件保存成.mobileconfig文件，比如tahoe.mobileconfig,然后双击运行，然后系统提示使用即可，
再设置中有提示，比如双击两次点击安装即可生效。
## 如果取消
在macOS15.7 直接打开设置-通用-设备管理 把安装的文件删掉，然后重新检查系统更新即可。
## 引用
https://github.com/chrisbasse/Ignore-Tahoe-for-90-days.mobileconfig
