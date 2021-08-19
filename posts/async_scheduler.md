---
date: 2020-03-02
title: 基于async和await的异步调度器
tags:
- 手写js系列
description: 实现一个限制并发的异步调度器
---
# 基于async和await的异步调度器

- 可以通过初始化设置并发数
- **巧妙的地方就在resolve什么时候执行上**
- 当前对js执行机制要非常熟悉

```js
class Scheduler {
    constructor(maxNum) {
        this.maxNum = maxNum
        this.taskList = []
        this.count = 0
    }

    async add(fn) {
        if (this.count >= this.maxNum) {
            await new Promise(resolve => {
                this.taskList.push(resolve) //重点就在用resolve来阻塞执行
            })
        }
        this.count++;
        const result = await fn(); //遇到这个就交出控制权
        this.count--
        if (this.taskList.length > 0) {
            this.taskList.shift()();
        }
    }
}
```
