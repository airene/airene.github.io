<template>
    <div id="giscus-container"></div>
  </template>

  <script setup>
  import giscusTalk from 'vitepress-plugin-comment-with-giscus'
  import { useData, useRoute } from 'vitepress'

  const { frontmatter } = useData()
  const route = useRoute()

  giscusTalk(
    {
      repo: 'airene/airene.github.io', // 仓库名称
      repoId: 'MDEwOlJlcG9zaXRvcnkzODIyMjczODI=', // 仓库 ID
      category: 'General', // 讨论分类名称
      categoryId: 'DIC_kwDOFshTts4CpaAl', // 讨论分类 ID
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'en',
      lightTheme: 'light',
      darkTheme: 'transparent_dark'
    },
    {
      frontmatter,
      route
    },
    true
  )
  </script>
