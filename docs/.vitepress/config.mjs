export default {
  title: '梦幻西游逍遥勇武指挥手册',
  description: '畅玩服89级PVP团队指挥知识库 —— 满天地府国标体系',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指挥心法', link: '/commander' },
    ],
    // 单页内容，不需要侧栏分组，留空则只显示文章大纲
    sidebar: false,
    aside: true,
    outline: {
      level: [2, 3],
      label: '页面导航',
    },
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '最后更新',
    notFound: {
      title: '页面未找到',
      quote: '这个地方没有内容。',
      linkText: '返回首页',
    },
    footer: {
      message: '持续迭代中 · 内容仅供交流参考',
      copyright: '© 2026 梦幻西游逍遥勇武指挥手册',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '无相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '选中',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: 'esc',
            },
          },
        },
      },
    },
  },
}
