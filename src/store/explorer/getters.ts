import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { ExplorerState } from './types'

const explorerGetters: GetterTree<ExplorerState, RootState> = {
  entityTypeId: (_state, _getters, rootState): string | null => rootState.route.params.id
}

export default explorerGetters
