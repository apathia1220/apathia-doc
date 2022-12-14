import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  // 指定安装包的主入口为 package.json 中的 source 字段定义的路径
  mainFields: ['source', 'module', 'jsnext:main', 'jsnext', 'main'],
})
