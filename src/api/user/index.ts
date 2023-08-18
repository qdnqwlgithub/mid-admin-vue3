 import request from '@/utils/request'
import type { loginForm } from './type'
export const login = (data: loginForm) =>
  request.post('user/login/', data)
export const getUserInfo = () => request.get('admin/index/info/')
export const logout = () => request.post('admin/index/logout/')
