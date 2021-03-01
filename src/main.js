import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Store from './middlewares/store'
import './plugins/bootstrap-vue'
import './assets/styles/style.scss'

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  data: Store,
  render: h => h(App)
}).$mount('#app')
