import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Intro from './views/Intro/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'HomeLayout'
      }
    },
    {
      path: '/intro/:id',
      name: 'Intro',
      component: Intro,
      meta: {
        layout: 'NormalLayout'
      }
    }
  ]
})
