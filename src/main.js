import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import App from './App'
import routes from './config/routes'

const router=new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render:(h)=>h(App)
})


router.replace('/user/login')

