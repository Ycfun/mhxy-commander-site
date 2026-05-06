export default {
  title: '梦幻西游逍遥勇武指挥手册',
  description: '畅玩服89级PVP团队指挥知识库 —— 满天地府国标体系',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指挥心法', link: '/commander' },
      { text: '团队配置', link: '/team' },
      { text: '实验阵容', link: '/experimental' },
    ],
    sidebar: [
      {
        text: '核心知识',
        items: [
          { text: '指挥心法（核心）', link: '/commander' },
        ],
      },
      {
        text: '阵容',
        items: [
          { text: '团队配置', link: '/team' },
          { text: '实验阵容', link: '/experimental' },
        ],
      },
    ],
    outline: {
      level: [2, 3],
      label: '页面导航',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '最后更新',
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
            noResultsText: '无相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
}
