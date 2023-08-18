import { defineStore } from 'pinia'
import {ref,reactive} from 'vue'
import { login } from '@/api/user'
import type { loginForm } from '@/api/user/type'
// import type { UseUserStore } from './type'
import { constantRouteList } from '@/router/routes'
import user from "../../mock/user";

export const useUserStore = defineStore('user', ()=>{
  const token=ref('')
  const routes=reactive(constantRouteList)
  async function login(username,password){
    let res = await login(username,password)
    if (res.code == 200) {
      token = res.data.token as string
      return Promise.resolve()
    } else {
      return Promise.reject(new Error(res.data.message))
    }
  }
  return {token,routes,login}
})
