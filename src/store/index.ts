import Vue from 'vue'
import Vuex from 'vuex'
import explorer from './explorer'
import { RootState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  modules: {
    explorer
  }
})
