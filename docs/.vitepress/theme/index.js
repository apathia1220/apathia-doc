import '@apathia/vitepress-theme/theme/styles/index.css'
import './resetcss/normalize.css'
import Theme from 'vitepress/dist/client/theme-default'
import { registerComponents } from './register-components'
import { setupApathiaTwindTheme } from '@apathia/apathia'
import { toastInstall, modalInstall, } from '@apathia/apathia'
import './resetcss/color.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
    setupApathiaTwindTheme(() => ({
      preflight: false,
    }))

    app.use(toastInstall)
    app.use(modalInstall)
  }
}