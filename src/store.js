import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    window : 0,
    parts: {
      introduction : {
        subParts: []
      },
      partie1: {
        subParts: []
      },
      partie2: {
        subParts: []
      },
      partie3: {
        subParts: []
      },
    }
  },
  mutations: {

  },
  actions: {

  }
})
