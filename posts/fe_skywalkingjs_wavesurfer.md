---
date: 2022-11-15
title: 从skywalkingjs和wavesurfer.js同时使用后者无法工作到给官方提交一个pull request
tags:
- js
description: 一个项目用到了wavesurfer.js，项目又在之前引用了skywalking做链路追踪，结果就是二进制流的wave图形加载不出来，控制台没有任何报错
---
# {{ $frontmatter.title }}

## 坑
 - skywalkingjs把一个正常的请求拦截了，和没请求一样，控制台一毛钱的错误或者警告输出都没有
 - 因为声音文件不是静态文件，一开始怀疑wavesurfer.js对流的支持不好，各种换版本和流参数尝试，没想到是像其他模块或者js影响了它，在这个上花费了大量的时间
 - vite框架调试非项目代码，而是第三方依赖还是有点费劲，目前没找到合适的方法,当前解决办法：
     -  修改node_modules/.vite文件夹下的编译完的文件（也就是浏览器加载的文件）
     -  修改这个内容必须重启vite才能生效
 - 调试到最后发现wavesurfer.js是用fetch作为资源加载的方式方法  
 - 再往后是发现是用的fatch但是又不是**常见**用法。。。

大部分时候是使用axios类库做资源请求，fetch本身用的比较少，用fetch也是第一个参数是一个url string  

wavesurfer.js用的fetch的第一个参数是一个 Request 对象的方式，这个对象是一个实验性的，虽然诸多浏览器从很早就开始支持了。  

skywalking的js sdk不支持这种方式，所以请求吞了，实际是报错了，抛不出来。。

做一个兼容处理就好了  
https://github.com/apache/skywalking-client-js/commit/f12941ba2d91d8d38632589424f9b3a9418349dc

## 参考
 - https://developer.mozilla.org/zh-CN/docs/Web/API/fetch
 - https://github.com/katspaugh/wavesurfer.js/blob/master/src/util/fetch.js
 - wavesurfer version is 6.4.0的fctch.js line 122,148




