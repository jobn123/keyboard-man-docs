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
      },
      {
        text: '处理包裹的字符',
        link: '/day12'
      },
      {
        text: '替换字符',
        link: '/day13'
      },
      {
        text: '掌握大小写、注释、悬浮显示',
        link: '/day14'
      },
      {
        text: '窗口管理',
        link: '/day15'
      },
      {
        text: '函数处理',
        link: '/day16'
      },
      {
        text: '掌握宏',
        link: '/day17'
      },
      {
        text: 'vim 调用 vscode 命令',
        link: '/day18'
      }
      ]
    },
    {
      text: 'Vscode',
      collapsible: true,
      items: [{
        text: '操作文件',
        link: '/vscode/day1'
      },
      {
        text: '操作多个窗口',
        link: '/vscode/day2'
      },
      {
        text: '掌握搜素',
        link: '/vscode/day3.md'
      },
      {
        text: '编码相关快捷键',
        link: '/vscode/day4.md'
      },
      {
        text: '发现快捷键的场景',
        link: '/vscode/day5.md'
      },
      {
        text: '搞定git',
        link: '/vscode/day6.md'
      },
      {
        text: '善用snippers',
        link: '/vscode/day7.md'
      },
      {
        text: '重构相关',
        link: '/vscode/day8.md'
      },
      {
        text: 'Vspacecode',
        link: '/vscode/day9.md'
      },
      {
        text: 'lazyGit',
        link: '/vscode/day10.md'
      },
      {
        text: '终端',
        link: '/vscode/day11.md'
      },
      {
        text: 'debug',
        link: '/vscode/day12.md'
      },
      ]
    },
    {
      text: 'Chorme',
      collapsible: true,
      items: [{
        text: '初识vimiumc',
        link: '/chrome/day1.md'
      },
      {
        text: '页面操作',
        link: '/chrome/day2.md'
      },
      {
        text: '查找、搜索',
        link: '/chrome/day3.md'
      },
      {
        text: '标签',
        link: '/chrome/day4.md'
      },
      {
        text: '一些不常用的场景',
        link: '/chrome/day5.md'
      },
      {
        text: 'devTools常用快捷键',
        link: '/chrome/day6.md'
      },
      {
        text: '调试Debugger',
        link: '/chrome/day7.md'
      }
      ]
    },
    {
      text: 'iterm',
      collapsible: true,
      items: [{
        text: 'iterm 导航',
        link: '/iterm/day01.md'
      }, {
        text: 'zellij使用',
        link: '/iterm/day2.md'
      }, {
        text: "初识vi-zsh-mode",
        link: '/iterm/day3.md'
      }, {
        text: 'vi-zsh-mode进阶',
        link: '/iterm/day4.md'
      }, {
        text: 'iterm 常用插件',
        link: '/iterm/day5.md'
      }, {
        text: 'iterm 修改快捷键',
        link: '/iterm/day6.md'
      }]
    },
    {
      text: 'Mac',
      collapsible: true,
      items: [{
        text: 'Mac 常用软件',
        link: '/mac/day1.md'
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