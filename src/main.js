// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
  const opts = {
    icons: {
      iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    }
  } //opts includes, vuetify themes, icons, etc.

  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
