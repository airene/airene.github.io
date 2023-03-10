---
date: 2022-07-07
title: vite 开发环境UI框架库加载优化
tags:
- vite
- ui
description: 开发环境ui框架库使用vite，启用按需引入特性时导致optimizeDeps.include失效
---
# {{ $frontmatter.title }}

## 表现
以ant-design-vue来举例，其他ui库同样有问题  
前提：不是全量导入的方式，生产环境为了打包体积一般都会使用按需引入。不管是手动申明，还是使用像大佬 `antfu` 写的 `unplugin-vue-components`   
如果不做配置在本地开发环境使用会有以下表现：   
  1、启动很快，但是首屏加载慢，即使使用了vite的 `optimizeDeps.include`，启动时也确实编译了一份，但是很快就会被覆盖，而变成重新按需编译（.vite目录可以看出来）  
  2、再切换路由到新的页面有两个表现：a,如果新页面有新组件则重新编译组件出现**卡顿**，b,资源有重新加载但是还是停留在当前页面，需要重新点击一次，直到所有页面涉及的组件全部编译完，才能随便点击页面（**浏览器控制台可以看出来确实"刷新了"**）

终端输出如(切换多个路由且用了不同的ui组件):
```text

下午2:45:28 [vite] ✨ new dependencies optimized: ant-design-vue/es, ant-design-vue/es/config-provider/style, ant-design-vue/es/layout/style, ant-design-vue/es/menu/style, ant-design-vue/es/modal/style
下午2:45:28 [vite] ✨ optimized dependencies changed. reloading
下午2:45:39 [vite] ✨ new dependencies optimized: ant-design-vue/es/select/style, ant-design-vue/es/table/style, ant-design-vue/es/tag/style, ant-design-vue/es/form/style, ant-design-vue/es/button/style, ...and 2 more
下午2:45:39 [vite] ✨ optimized dependencies changed. reloading
下午2:45:49 [vite] ✨ new dependencies optimized: ant-design-vue/es/date-picker/style
下午2:45:49 [vite] ✨ optimized dependencies changed. reloading

```
## 本质原因
慢主要是因为less编译慢导致的，尤大有回答这个问题，在下面的参考资料有

## 解决方案

### 解决方案1
antfu 也写了两个vite插件来**变相**解决这个问题，组件名称为 `vite-plugin-package-config` 和 `vite-plugin-optimize-persist`，目前这两个项目已经归档，而且个人觉得不算是优雅的解决办法

### 解决方案2 (推荐)
直接修改vite.config.js文件，在 `plugins` 属性处增加：
```js
//已删除不相关的插件配置
plugins: [
    //让 unplugin-vue-components 只有在生产环境生效
    {
        ...Components({
            resolvers: AntDesignVueResolver({ importStyle: 'less' })
        }),
        apply: 'build'
    },
    // 开发环境动态加入ui库框架引入
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
]
```
PS:  
1、方案2相比 https://github.com/antfu/unplugin-vue-components/issues/361 这个文章中的做了两个小优化  
2、使用unplugin-vue-components 无法发现 $message 导致样式错乱需要手动引入这种问题不在本篇讨论范围 

## 参考
https://github.com/antfu/unplugin-vue-components/issues/361  
https://carljin.com/vite-resolve-request-files-a-ton **重要**
