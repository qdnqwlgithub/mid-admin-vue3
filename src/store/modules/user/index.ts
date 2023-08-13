import { defineStore } from 'pinia'
import { login } from '@/api/user'
import type { loginForm } from '@/api/user/type'
import type { UseUserStore } from './type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 创建用户小仓库
let useUserStore = defineStore('User', {
    // 小仓库存储数据的地方
    state: (): UseUserStore => {
        return {
            token: localStorage.getItem('TOKEN')
        }
    },
    // 异步、逻辑
    actions: {
        // 用户登入的方法
        async login(data: loginForm) {
            let res: loginResponseData = await reqLogin(data)
            //登入请求：成功200----token
            //登入请求：失败201--登入失败错误的信息
            if (res.code === 200) {
                // pinia仓库存储token
                // pinia|vuex存储数据都是利用js对象，并非持久化
                this.token = (res.data.token as string)
                // 本地持久化存储一份
                SET_TOKEN((res.data.token as string))
                // 能保证当前async函数返回一个成功的promise
                return 'ok'
            } else {
                return Promise.reject(new Error(res.data.message))
            }
        }
    },
    getters: {
​
    }
})
​
export default useUserStore