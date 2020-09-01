import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')