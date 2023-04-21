// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // background: '#FFFFFF',
    surface: "#212121",
    // primary: '#6200EE',
    // 'primary-darken-1': '#3700B3',
    // secondary: '#03DAC6',
    // 'secondary-darken-1': '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  }
}

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})
