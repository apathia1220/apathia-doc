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
    // setupApathiaTwindTheme(({ colors, twind}) => {
    //   const styleEl = document.createElement('style')
    //   styleEl.id = '__mng__'
    //   document.head.insertBefore(styleEl, document.head.firstChild)
    //   if (!styleEl.sheet) {
    //     throw new Error('无法获取样式')
    //   }
    //   const sheet = twind.cssomSheet({ target: styleEl.sheet })
    //   return {
    //     sheet,
    //     preflight: false,
    //     theme: {
    //       colors: {
    //         black: '#000',
    //         white: '#fff',
    //         transparent: 'transparent',
    //         red: {
    //           100: colors.red['100'],
    //           300: colors.red['300'],
    //           500: colors.red['500'],
    //           700: colors.red['700'],
    //           900: colors.red['900'],
    //         },
    //         yellow: {
    //           100: colors.yellow['100'],
    //           300: colors.yellow['300'],
    //           500: colors.yellow['500'],
    //           700: colors.yellow['700'],
    //           900: colors.yellow['900'],
    //         },
    //         green: {
    //           100: colors.green['100'],
    //           300: colors.green['300'],
    //           500: colors.green['500'],
    //           700: colors.green['700'],
    //           900: colors.green['900'],
    //         },
    //         gray: {
    //           100: colors.coolGray['100'],
    //           300: colors.coolGray['300'],
    //           500: colors.coolGray['500'],
    //           700: colors.coolGray['700'],
    //           900: colors.coolGray['900'],
    //         },
    //         brand: {
    //           100: colors.blue['100'],
    //           300: colors.blue['300'],
    //           500: colors.blue['500'],
    //           700: colors.blue['700'],
    //           900: colors.blue['900'],
    //         },
    //       },
    //       zIndex: {
    //         0: '0',
    //         10: '10',
    //         20: '20',
    //         30: '30',
    //         40: '40',
    //         50: '50',
    //         modal: '900',
    //         dropdown: '950',
    //         alert: '999',
    //       },
    //     },
    //   }
    // })

    app.use(toastInstall)
    app.use(modalInstall)
  }
}