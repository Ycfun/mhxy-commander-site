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
      { text: '快速入门', link: '/guide' },
      { text: '阵容体系', link: '/lineup' },
      { text: '战斗系统', link: '/combat' },
      { text: '指挥心法', link: '/strategy' },
    ],
    sidebar: {
      '/guide': [
        {
          text: '快速入门',
          items: [
            { text: '基础战斗机制', link: '/guide#基础战斗机制' },
            { text: 'PVP 场景规则', link: '/guide#pvp-场景规则' },
          ],
        },
      ],
      '/lineup': [
        {
          text: '阵容体系',
          items: [
            { text: '三大阵容体系', link: '/lineup#三大阵容体系' },
            { text: '阵容选择原则', link: '/lineup#阵容选择核心原则' },
            { text: '阵容综合评分', link: '/lineup#阵容变体对比与综合评分' },
            { text: '打法体系与变体', link: '/lineup#三套阵容核心打法体系' },
          ],
        },
      ],
      '/combat': [
        {
          text: '战斗系统',
          items: [
            { text: '职业体系', link: '/combat#职业知识库' },
            { text: '宝宝机制与克制', link: '/combat#宝宝机制与克制体系' },
            { text: '阵法体系', link: '/combat#阵法体系' },
            { text: '法宝体系', link: '/combat#法宝体系' },
            { text: '变身卡', link: '/combat#变身卡' },
            { text: '特技体系', link: '/combat#特技体系-pvp-核心' },
            { text: '道具与药品', link: '/combat#道具体系与药物速查' },
          ],
        },
      ],
      '/strategy': [
        {
          text: '指挥心法',
          items: [
            { text: 'PK 最高战略原则', link: '/strategy#pk-最高战略原则' },
            { text: 'PK 核心战略认知', link: '/strategy#pk-核心战略认知' },
            { text: '核心指挥决策框架', link: '/strategy#核心指挥决策框架' },
            { text: '进阶战术原则', link: '/strategy#进阶战术原则' },
            { text: '资深指挥交流精要', link: '/strategy#资深指挥交流精要' },
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
