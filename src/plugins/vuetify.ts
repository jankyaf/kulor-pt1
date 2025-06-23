/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Styles
import 'vuetify/styles'
// Icons
import '@mdi/font/css/materialdesignicons.css'
// import colors from 'vuetify/util/colors'

// const defaultcolors = {
//   primary: '#1976D2',
//   secondary: '#424242',
//   accent: '#82B1FF',
//   error: '#FF5252',
//   info: '#2196F3',
//   success: '#4CAF50',
//   warning: '#FFC107',
// }

// const darkthemecolors = {
//   primary: '#1976D2',
//   secondary: '#424242',
//   accent: '#82B1FF',
//   error: '#FF5252',
//   info: '#2196F3',
//   success: '#4CAF50',
//   warning: '#FFC107',
// }

const altDarkTheme = {
  dark: true,
  colors: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
}

const altLightTheme = {
  dark: false,
  colors: {
    primary: '#009688',
    secondary: '#795548',
    accent: '#FF9800',
    error: '#F44336',
    info: '#03A9F4',
    success: '#8BC34A',
    warning: '#FFEB3B',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      altDarkTheme,
      altLightTheme,
    },
  },
  components,
  directives,
})
