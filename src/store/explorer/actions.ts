import { ActionTree } from 'vuex'
import { RootState } from '../types'
import { ExplorerState } from './types'
import { fetchMetadata } from '../stubs'

const actions: ActionTree<ExplorerState, RootState> = {
  async fetchMetadata ({ commit, getters: { entityTypeId } }) {
    commit('setMetadata', undefined)
    try {
      const metadata = await fetchMetadata(entityTypeId)
      commit('setMetadata', metadata)
    } catch (e) {
      commit('setMetadata', null)
      commit('setToast', { message: e.message })
    }
  }
}

export default actions
