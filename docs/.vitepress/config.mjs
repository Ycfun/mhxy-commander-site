export default {
  title: '梦幻西游逍遥勇武指挥手册',
  description: '畅玩服89级PVP团队指挥知识库',
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
      { text: '快速入门', link: '/guide/basics' },
      { text: '阵容体系', link: '/lineup/overview' },
      { text: '战斗系统', link: '/combat/classes' },
      { text: '指挥心法', link: '/strategy/principles' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速入门',
          items: [
            { text: '基础战斗机制', link: '/guide/basics' },
            { text: 'PVP 场景规则', link: '/guide/scenes' },
          ],
        },
      ],
      '/lineup/': [
        {
          text: '阵容体系',
          items: [
            { text: '三大阵容体系', link: '/lineup/overview' },
            { text: '阵容选择原则', link: '/lineup/principles' },
            { text: '阵容综合评分', link: '/lineup/comparison' },
            { text: '打法体系与变体', link: '/lineup/playstyle' },
          ],
        },
      ],
      '/combat/': [
        {
          text: '战斗系统',
          items: [
            { text: '职业体系', link: '/combat/classes' },
            { text: '宝宝机制与克制', link: '/combat/pets' },
            { text: '阵法体系', link: '/combat/formations' },
            { text: '法宝体系', link: '/combat/artifacts' },
            { text: '变身卡', link: '/combat/transform' },
            { text: '特技体系', link: '/combat/skills' },
            { text: '道具与药品', link: '/combat/items' },
          ],
        },
      ],
      '/strategy/': [
        {
          text: '指挥心法',
          items: [
            { text: 'PK 最高战略原则', link: '/strategy/principles' },
            { text: 'PK 核心战略认知', link: '/strategy/awareness' },
            { text: '核心指挥决策框架', link: '/strategy/framework' },
            { text: '进阶战术原则', link: '/strategy/advanced' },
            { text: '资深指挥交流精要', link: '/strategy/expert' },
          ],
        },
      ],
    },
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
