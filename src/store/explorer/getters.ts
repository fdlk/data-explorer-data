import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { ExplorerState, Pagination, Sort } from './types'

const explorerGetters: GetterTree<ExplorerState, RootState> = {
  entityTypeId: (_state, _getters, rootState): string | null => rootState?.route?.params?.id || null,
  page: (_state, _getters, rootState): number => parseInt(rootState?.route?.query?.page as string || '1', 10),
  size: (_state, _getters, rootState): number => parseInt(rootState?.route?.query?.size as string || '20', 10),
  sort: (_state, _getters, rootState): Sort | null => {
    const sortString: string | null = rootState?.route?.query?.sort as string
    if (!sortString) {
      return null
    }
    const matches = sortString.match(/^([+-])?(.+)$/)
    if (!(matches?.length === 3)) {
      return null
    }
    return {
      isSortOrderReversed: matches[1] === '-',
      sortColumnName: matches[2]
    }
  },
  pagination: (state, getters): Pagination => ({
    count: state.data?.count || 0,
    page: getters.page,
    size: getters.size,
    loading: !state.data
  })
}

export default explorerGetters
