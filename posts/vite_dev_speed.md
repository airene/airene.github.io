---
date: 2023-03-05
title: Vite开发环境UI框架库加载提速不同UI库的写法
tags:
- fe
description: 用vite开发前端，发现一个工程在引入ui库的情况下，在开发过程中如果启用一个新的ui库中的组件甚至切换一个没用的UI新组件，总是要"等待"编译一会，有什么方式能提交这个方面的效率呢？
---
# Vite开发环境UI框架库加载提速不同UI库的写法

## 前文
https://ti.bi/posts/vite_dev_ui_optimize.html


三个都列一下是因为less或者sass导入文件的位置不一样，而且有的UI官网还说不是很清楚导入哪个文件。
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
