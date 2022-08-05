const path = require('path')
const fs = require('fs')

const nameMap = {
  'Button': '按钮',
  'Checkbox': '多选框',
  'Collapse': '折叠面板',
  'Confirm': '确认框',
  'CustomRender': '自定义渲染',
  'Form': '表单',
  'Input': '输入框',
  'Modal': '模态窗',
  'Pagination': '分页',
  'Radio': '单选框',
  'Select': '下拉选择器',
  'Table': '表格',
  'Tabs': '标签页',
  'Toast': '轻提示',
  'Upload': '上传'
}

const getIntroductionSidebar = () => {
  return [
    {
      text: '快速上手',
      children: [
        { text: '介绍', link: '/' },
        { text: '安装', link: '/introduction/install' },
      ]
    },
    {
      text: '组件',
      link: '/component/Button'
    },
    // {
    //   text: 'Hooks',
    //   link: '/hook/index'
    // }
  ]
}

const generatePathsFromDir = (dirPath, prefix) => {
  const mds = fs.readdirSync(dirPath)
  return mds.filter(md => md !== 'index.md').map((md) => {
    const [name, ext] = md.split('.')
    let fullName = name
    if(nameMap[name]) {
      fullName = name + ' ' + nameMap[name]
    }
    return {
      text: fullName,
      link: `${prefix}/${name}`
    }
  })
}

module.exports = {
  lang: 'zh-CN',
  title: 'Apathia',
  description: 'Vite & Vue powered static site generator.',

  base: '/apathia-doc/',
 
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('@apathia/vitepress-theme')
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  },

  themeConfig: {
    repo: 'https://github.com/apathia1220/apathia-doc',
    docsDir: 'docs',
    logo: './icon.svg',

    editLinks: true,
    editLinkText: 'Edit this page on Github',
    lastUpdated: '最后更新',

    nav: [
      {
        text: '介绍',
        link: '/introduction/',
        activeMatch: '^/$|^/introduction/'
      },
      {
        text: '组件',
        link: '/component/Button',
        activeMatch: '^/component'
      },
      // {
      //   text: 'Hook',
      //   link: '/hook/index',
      //   activeMatch: '^/hook'
      // }
    ],

    sidebar: {
      '/introduction': getIntroductionSidebar(),
      '/component': generatePathsFromDir(path.resolve(__dirname, '../component'), '/component'),
      // '/hook': generatePathsFromDir(path.resolve(__dirname, '../hook'), '/hook'),
      // '/': getIntroductionSidebar(),
    }
  }
}
