---
date: 2016-09-26
title: 解决macOS gitk字体retina display
category: macOS
tags:
- macOS
---
# 解决macOS gitk字体retina display
开启SIP;  
修改/System/Library/Frameworks/Tk.framework/Versions/Current/Resources/Wish.app/Contents/Info.plist文件;  
在最后增加
```markdown
<key>NSHighResolutionCapable</key><true/>
```
修改可能需要sudo 或者复制出来修改在覆盖进去都可;  
使修改生效 touch Wish.app 关闭SIP;  

