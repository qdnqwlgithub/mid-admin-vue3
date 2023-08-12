import SvgIcon from '@/components/SvgIcon/index.vue'
const globalComponentCollect = {
  SvgIcon,
}

export default {
  install(app) {
    Object.keys(globalComponentCollect).forEach((key) => {
      app.component(key, globalComponentCollect[key])
    })
  },
}
