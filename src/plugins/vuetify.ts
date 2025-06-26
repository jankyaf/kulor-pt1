/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Styles
import 'vuetify/styles'
// Icons
import '@mdi/font/css/materialdesignicons.css'
// import colors from 'vuetify/util/colors'

/* ========================================================================== */
/* DEFAULT THEMES                                                             */
/* ========================================================================== */

// Vuetify's default border colors
const defaultBorderColors = {
  dark: '#2f2f2f', // Vuetify's default dark theme border color
  light: '#e0e0e0', // Vuetify's default light theme border color
}

/* ========================================================================== */
/* CUSTOM THEMES                                                              */
/* ========================================================================== */

const testTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#C02C9B',
    secondary: '#138397',
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#FF5252',
    info: '#2196F3',
  },
}

const altDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    'background': '#121212',
    'surface': '#1E1E1E',
    'primary': '#1976D2',
    'secondary': '#424242',
    'success': '#4CAF50',
    'warning': '#FFC107',
    'error': '#FF5252',
    'info': '#2196F3',
    'border-color': '#D8114D',
    // ----------unused colors----------
    // 'primary-darken-1': '#1565C0',
    // 'secondary-darken-1': '#373737',
    // 'surface-variant': '#2E2E2E',
    // 'on-surface-variant': '#B3B3B3',
    // 'on-surface': '#FFFFFF',
    // 'on-surface-variant': '#B3B3B3',
    // accent: '#82B1FF',
    // 'accent-darken-1': '#6495ED',
  },
}

const altLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'primary': '#009688',
    'secondary': '#795548',
    'success': '#8BC34A',
    'warning': '#FFEB3B',
    'error': '#F44336',
    'info': '#03A9F4',
    'border-color': '#D8114D',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    variations: {
      colors: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      lighten: 2,
      darken: 2,
    },
    themes: {
      altDarkTheme,
      altLightTheme,
      testTheme,
    },
  },
  components,
  directives,
})
