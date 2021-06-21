import Vue from 'vue'


import store from './app.store.js'
import router from './app.router.js'


import App from './App'

const vm = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

window.vm = vm
