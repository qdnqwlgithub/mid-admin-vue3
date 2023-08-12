import request from '@/utils/request'
// import type {
//   loginFormData,
//   loginResponseData,
//   userInfoReponseData,
// } from './type'
export const login = (data: { username: string; password: string }) =>
  request.post('user/login/', data)
export const getUserInfo = () => request.get('admin/index/info/')
export const logout = () => request.post('admin/index/logout/')
