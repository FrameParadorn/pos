import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.prototype.$liff = window.liff

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
