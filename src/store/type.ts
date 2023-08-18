import type {RouteRecordRaw} from 'vue-router'

export interface UseUserStore {
  token: null | string,
  routes: RouteRecordRaw[]
}