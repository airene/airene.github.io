---
date: 2021-08-19
title: safari 中的 new Date 传参的兼容性问题
category: js
tags:
- js
- safari
description: new Date() 中有字符串
---
# safari 中的 new Date 传参的兼容性问题
safari一直不是主力浏览器，今天一个系统的发现的macOS10.15 依然存在的一个new Date()兼容性问题

## 表现

```js
const nowTimestamp = new Date('2021-08-19 12:12:12')
document.write(nowTimestamp)

// safari 输出  Invalid Date
// chrome 输出  Thu Aug 19 2021 12:12:12 GMT+0800 (中国标准时间)
 ```
## 解决办法

### 改用大家都兼容的格式 
```js
// 如果构造函数要传参可以这样
new Date('2018-11-11 00:00:00'.replace(/-/g, "/"))
new Date('2018-11-11 00:00:00'.replace(/ /g,"T"))
```
**两种格式都行**

### 用类库来解决 比如引入dayjs来抹平
<Comment />
