import { Route } from 'vue-router'
import { ExplorerState } from './explorer/types'

export interface RootState {
  explorer: ExplorerState;
  route : Route ;
}
