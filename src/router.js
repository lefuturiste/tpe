import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import History from './views/History.vue'

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
      path: '/history',
      name: 'history',
      component: History,
      meta: {
        layout: 'NormalLayout'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
