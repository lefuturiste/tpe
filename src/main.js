import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/scss/main.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme:{ primary: "#0091EA", secondary: "#0091EA", accent: "#263238", error: "#f44336", warning: "#FF9100", info: "#00E676", success: "#64DD17" }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
