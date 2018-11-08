// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Fetch from './utiles/fetch.js'
// require styles
import 'swiper/dist/css/swiper.css'

// Fetch.ajaxCallback.beforeEach = ()=>{
//   console.log('请求前')
// }
// Fetch.ajaxCallback.afterEach = ()=>{
//   console.log('请求后')
// }
// Fetch.ajaxCallback.errorEach = (e)=>{
//   if (e.message=='用户未登录'){
//    router.push('/login')
//   }

// }
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
