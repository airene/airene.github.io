import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
    title: 'TI.BI',
    description: 'ti.bi,half code,half designer',
    base:'/',
    cacheDir: './node_modules/vitepress_cache',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/airene/vitepress-blog-pure', //copyright link
        // 评论的仓库地址
        comment: {
            repo: 'airene/airene.github.io',
            repoId: 'MDEwOlJlcG9zaXRvcnkzODIyMjczODI=',
            categoryId: 'DIC_kwDOFshTts4CpaAl',
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Category', link: '/pages/category' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
          provider: 'local',
        },
        //outline:[2,3],
        outlineTitle: '文章摘要',
        socialLinks: [{ icon: 'github', link: 'https://github.com/airene/vitepress-blog-pure' }]
    },

    srcExclude: isProd
        ? [
            '**/trash/**/*.md', // 排除所有 trash 目录
            '**/draft/**/*.md', // 递归排除子目录
            '**/private-notes/*.md', // 排除特定文件
            'README.md'
        ]
        : ['README.md'],// exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
