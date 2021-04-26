import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elements: [
      {
        id: 1,
        name: "Shrek",
        elements: []
      },
      {
        id: 2,
        name: "Fiona",
        elements: [
          {
            id: 4,
            name: "Lord Farquad",
            elements: []
          },
          {
            id: 5,
            name: "Prince Charming",
            elements: []
          }
        ]
      },
      {
        id: 3,
        name: "Donkey",
        elements: []
      }
    ]
  },
  mutations: {
    updateElements: (state, payload) => {
      state.elements = payload;
    }
  },
  actions: {
    updateElements: ({ commit }, payload) => {
      commit("updateElements", payload);
    }
  },
  modules: {
  }
})
