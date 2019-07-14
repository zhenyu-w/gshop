import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

import './mock/mockServer'
import './filters'

Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
