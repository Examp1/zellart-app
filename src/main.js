import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import masonry from './plugins/vue-masonry'
// style


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  masonry,
  render: h => h(App)
}).$mount('#app')
