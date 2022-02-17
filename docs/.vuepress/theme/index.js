/*
 * @Author: zengminghong
 * @Date: 2022-02-17 04:53:39
 * @LastEditTime: 2022-02-17 16:56:31
 * @LastEditors: zengminghong
 * @Description: 
 */
const path = require('path')

module.exports = themeConfig => {
  /**
   * Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tags'],
        path: '/tag/',
      },
    ],
    globalPagination: {
      lengthPerPage: 5,
      prevText: '上一页',
      nextText: '下一页',
    },
  }

  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
  )

  /**
   * Integrate plugins
   */

  const enableSmoothScroll = themeConfig.smoothScroll === true

  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/medium-zoom', true],
    ['@vuepress/blog', blogPluginOptions],
    ['smooth-scroll', enableSmoothScroll],
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': 'DANGER',
        '/zh/': '警告'
      }
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
  ]

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
    alias: {
      fonts: path.resolve(__dirname, 'fonts'),
    },
  }

  return config
}
