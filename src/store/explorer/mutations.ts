import { MutationTree } from 'vuex'
import { ExplorerState, Toast } from './types'

const mutations: MutationTree<ExplorerState> = {
  setMetadata: (state, metadata) => {
    state.metadata = metadata
  },
  setData: (state, data) => {
    state.data = data
  },
  addToast: (state, toast: Toast) => {
    state.toasts.push(toast)
  },
  setToasts: (state, toasts: Toast[]) => {
    state.toasts = toasts
  }
}

export default mutations
