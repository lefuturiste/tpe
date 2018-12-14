import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/scss/main.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: "#16a085",
    secondary: "#1abc9c",
    accent: colors.indigo.base
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
