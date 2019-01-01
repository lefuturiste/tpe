import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    steps: [],
    bigParts: [
      { title: "Introduction", subParts: [{ title: "Histoire", location: "/intro/history" }, { title: "Random", location: "/intro/random"}]}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
