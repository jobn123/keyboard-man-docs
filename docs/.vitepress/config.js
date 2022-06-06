export default {
  base: '/keyboard-man-docs/',
  title: 'keyboard-man',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: 'index' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar: [
      {
        text: 'Vim',
        collapsible: true,
        items: [
          { text: 'Vim 初识', link: '/day1' },
          { text: '行相关的命令', link: '/day2' },
          { text: '掌握Vim语法', link: '/day3' },
          { text: '更有效率的处理单字符', link: '/day4' },
          { text: '掌握可视化模式', link: '/day5' }
        ]
      },
      {
        text: 'Vscode',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Chorme',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Mac',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright Vitepress Evan You'
    }
  },
  markdown: {
    lineNumbers: true
  }
}
