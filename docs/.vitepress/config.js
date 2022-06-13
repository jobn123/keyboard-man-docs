export default {
  base: '/keyboard-man-docs/',
  title: 'keyboard-man',
  description: 'Just playing around.',
  themeConfig: {
    nav: [{
        text: 'Github',
        link: 'https://github.com/jobn123/keyboard-man-docs'
      },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar: [{
        text: 'Vim',
        collapsible: true,
        items: [{
            text: 'Vim 初识',
            link: '/day1'
          },
          {
            text: '行相关的命令',
            link: '/day2'
          },
          {
            text: '掌握Vim语法',
            link: '/day3'
          },
          {
            text: '更有效率的处理单字符',
            link: '/day4'
          },
          {
            text: '掌握可视化模式',
            link: '/day5'
          },
          {
            text: '掌握文本对象',
            link: '/day6'
          },
          {
            text: '在文件中更快的移动',
            link: '/day7'
          },
          {
            text: '掌握搜索',
            link: '/day8'
          },
          {
            text: '更高效移动-想去哪里去哪里',
            link: '/day9'
          },
          {
            text: '认识数字和点的威力',
            link: '/day10'
          },
          {
            text: '掌握文件间的跳转',
            link: '/day11'
          }
        ]
      },
      {
        text: 'Vscode',
        collapsible: true,
        items: [{
            text: 'Introduction',
            link: '/introduction'
          },
          {
            text: 'Getting Started',
            link: '/getting-started'
          },
        ]
      },
      {
        text: 'Chorme',
        collapsible: true,
        items: [{
            text: 'Introduction',
            link: '/introduction'
          },
          {
            text: 'Getting Started',
            link: '/getting-started'
          },
        ]
      },
      {
        text: 'Mac',
        collapsible: true,
        items: [{
            text: 'Introduction',
            link: '/introduction'
          },
          {
            text: 'Getting Started',
            link: '/getting-started'
          },
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