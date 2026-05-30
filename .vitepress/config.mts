import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "俞立的知识库",
  description: "个人技术知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
        level: [1, 2, 3]
        },
    nav: [
      { text: 'Home', link: '/' },
      { text: '首页', link: '/' },
      { text: 'Python', link: '/python/基础语法' },
      { text: 'FastAPI', link: '/fastapi/快速开始' },
      { text: 'Linux', link: '/linux/常用命令' },
      { text: '工作记录', link: '/work/MES系统' }



    ],

    sidebar: {
      "/01_mysql/": [
        {
          text: "MySQL",
          items: [
            { text: "基础", link: "/01_mysql/常用命令" },
            { text: "索引", link: "/01_mysql/不常用命令" }
          ]
        }
      ],

      "/20_markdown/": [
        {
          text: "Python",
          items: [
            { text: "基础语法", link: "/20_markdown/markdown语法" },
            { text: "异步编程", link: "/02_python/异步编程" }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
