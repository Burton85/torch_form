import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    state
  }
})
