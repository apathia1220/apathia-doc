const path = require('path')
const fs = require('fs')

const nameMap = {
  'Button': '按钮',
  'Checkbox': '多选框',
  'Collapse': '折叠面板',
  'Confirm': '确认框',
  'CustomRender': '自定义渲染',
  'Form': '表单',
  'Icon': '图标',
  'Input': '输入框',
  'Modal': '模态窗',
  'Pagination': '分页',
  'Popper': '提示',
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
      collapsible: true,
      children: [
        { text: '介绍', link: '/introduction/' },
        { text: '安装', link: '/introduction/install' },
      ]
    },
  ]
}

const generatePathsFromDir = (dirPath, prefix) => {
  const mds = fs.readdirSync(dirPath)
  let result = [{text: '快速上手', link: `${prefix}/index`}]
  const temp = mds.filter(md => md !== 'index.md').map((md) => {
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
  return [...result, ...temp]
}

module.exports = {
  lang: 'zh-CN',
  title: 'Apathia Component',
  description: '基于vue3 + typescript + twind 的vue组件库',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'icon.png' }]],

  base: '/apathia-doc/',
 
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('@apathia/vitepress-theme')
      md.use(demoBlockPlugin)
    }
  },

  themeConfig: {
    repo: 'https://github.com/apathia1220/apathia-vue',
    docsDir: 'docs',
    logo: './icon.png',

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
        link: '/component/index',
        activeMatch: '^/component'
      },
      {
        text: 'Hook',
        link: '/hook/index',
        activeMatch: '^/hook'
      }
    ],

    sidebar: {
      '/introduction': getIntroductionSidebar(),
      '/component': generatePathsFromDir(path.resolve(__dirname, '../component'), '/component'),
      '/hook': generatePathsFromDir(path.resolve(__dirname, '../hook'), '/hook')
    }
  }
}
