import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSpinner } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'

sync(store, router)

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faSort, faSpinner)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
