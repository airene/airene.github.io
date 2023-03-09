---
date: 2023-03-05
title: Vite开发环境UI框架库加载提速
tags:
- fe
description: 用vite开发前端，发现一个工程在引入ui库的情况下，在开发过程中如果启用一个新的ui库中的组件甚至切换一个没用的UI新组件，总是要"等待"编译一会，有什么方式能提交这个方面的效率呢？
---
# {{ $frontmatter.title }}

## 前提
- 试过antdv、acro-desin、naive-ui都这样，应该是vite机制的问题 - 按需加载
- `unplugin-vue-components` 和 `unplugin-auto-import` 解决的是少写代码同时按需加载，不是加载提速
-  体验上是因为新引入一个新的组件导致ui库要重新编译，时间还挺长，卡顿严重，最早是在用naiveui开发的时候发现的
- 用vite的optimizeDeps方式好像修改主题就没发用了 - 待验证

## 怎么提速
利用插件机制在`serve`模式，也就是开发模式，动态加入ui库的全量引入方式，让把整个库提前编好就不会新引入卡顿了。
## 为什么不用optimizeDeps
为什么不用vite的optimizeDeps来指定ui库实现提前编译？ 不记得有没有效果了，按说类似lodash这种官方是推荐用此方式的  。  
**没有做完整的测试，可能是和修改ui的主题和用optimizeDeps的方式冲突，没发起作用**

三个都列一下是因为less或者sass导入文件的位置不一样，而且有的官网还说不是很清楚导入哪个文件。
### antdv config
```js
//vite.config.js plugins节点加入
{
    name: 'dev-auto-import-antdv', 
    transform(code, id) {
        if (/src\/main.js$/.test(id)) {
            let result = code.split('\n')
            // 解决首次加载isCustomElement的问题
            result.splice(result.length - 2, 0, `import Antd from 'ant-design-vue';import 'ant-design-vue/dist/antd.less';app.use(Antd);`)
            return {
                code: result.join('\n'),
                map: null
            }
        }
    },
    apply: 'serve'
}


```

### elemenet-plus config
```js
//vite.config.js plugins节点加入
{
    name: 'dev-auto-import-element-plus',
    transform(code, id) {
        if (/src\/main.js$/.test(id)) {
        let result = code.split('\n')
        // 解决首次加载isCustomElement的问题
        result.splice(result.length - 2, 0, `import ElementPlus from 'element-plus';import 'element-plus/theme-chalk/src/index.scss';app.use(ElementPlus);`)
        return {
            code: result.join('\n'),
            map: null
            }
        }
    },
    apply: 'serve'
}
```

### arco-desin config
```js
//vite.config.js plugins节点加入
{
    name: 'dev-auto-import-arco',
        transform(code, id)
    {
        if (/src\/main.js$/.test(id)) {
            let result = code.split('\n')
            // 解决首次加载isCustomElement的问题
            result.splice(result.length - 2, 0, `import ArcoVue from '@arco-design/web-vue';import '@arco-design/web-vue/es/index.less';app.use(ArcoVue);`)
            return {
                code: result.join('\n'),
                map: null,
            }
        }
    },
    apply: 'serve',
}
```
