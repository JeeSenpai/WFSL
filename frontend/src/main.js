import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mixins from '../src/mixins.js'

loadFonts()

createApp(App)
  .mixin(mixins)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
