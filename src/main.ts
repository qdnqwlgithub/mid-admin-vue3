import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)

// about element-ui-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, { locale: zhCn })
// !about element-ui-plus

// about svg
import 'virtual:svg-icons-register'
// about global components
import globalComponent from '@/components'
app.use(globalComponent)

// about style
import '@/styles/index.scss'

// about router
import router from '@/router'
app.use(router)

app.mount('#app')
