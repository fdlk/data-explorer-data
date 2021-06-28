import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import type { ExplorerState } from './types'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { RootState } from '../types'

Vue.use(Vuex)

const explorer: Module<ExplorerState, RootState> = {
  state,
  mutations,
  actions,
  getters
}

export default explorer
