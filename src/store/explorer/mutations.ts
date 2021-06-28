import { MutationTree } from 'vuex'
import { ExplorerState, Toast } from './types'

const mutations: MutationTree<ExplorerState> = {
  setMetadata: (state, metadata) => {
    state.metadata = metadata
  },
  setToast: (state, toast: Toast) => {
    console.log('setToast')
    state.toast = toast
  }
}

export default mutations
