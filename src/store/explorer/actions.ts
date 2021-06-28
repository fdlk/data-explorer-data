import { ActionTree } from 'vuex'
import { RootState } from '../types'
import { ExplorerState } from './types'
import { fetchMetadata, fetchData } from '../stubs'

const actions: ActionTree<ExplorerState, RootState> = {
  async fetchMetadata ({ commit, getters: { entityTypeId } }) {
    commit('setMetadata', undefined)
    try {
      const metadata = await fetchMetadata(entityTypeId)
      commit('setMetadata', metadata)
    } catch (e) {
      commit('setMetadata', null)
      commit('addToast', { message: e.message, type: 'danger', timeout: 1500 })
    }
  },
  async fetchData ({ commit, getters: { entityTypeId, page, size } }) {
    commit('setData', undefined)
    try {
      const data = await fetchData(entityTypeId, page, size)
      commit('setData', data)
    } catch (e) {
      commit('setData', null)
      commit('addToast', { message: e.message, type: 'danger', timeout: 1500 })
    }
  }
}

export default actions
