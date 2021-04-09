import Vue from 'vue'
import Vuex from 'vuex'

import { wallet } from './modules/wallet'

Vue.use(Vuex)

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export default new Vuex.Store({
  state: {
    loader: true,
    user: null
  },
  mutations: {
    stopLoad(state) {
      setTimeout(() => {
        state.loader = false
      }, 1500)
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async getUser({ commit }) {
      const user = await Storage.get({ key: 'user' })
      commit('setUser', JSON.parse(user.value))
    }
  },
  getters: {
    loader: state => {
      return state.loader
    },
    user: state => {
      return state.user ? state.user : { name: 'undef' }
    }
  },
  modules: {
    wallet
  }
})
