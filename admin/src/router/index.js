import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Personal from '../views/personal/index.vue'
import Login from '../views/login/index.vue'
import Detail from '../views/detail/index.vue'
import Order from '../views/order/index.vue'
import Topay from '../views/topay/index.vue'
import ListAddress from '../views/list_address/index.vue'
import AddAddress from '../views/add_address/index.vue'
import PayResult from '../views/pay_result/index.vue'
import PayFail from '../views/pay_fail/index.vue'

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [{
    path:'/',
    redirect:'/home'
  },
    {
      path: '/home',
      name: 'Home',
      meta:{
        title:'主页'
      },
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal',
      meta:{
        title:'个人中心'
      },
      component: Personal
    }, {
      path: '/detail/:id',
      name: 'Detail',
      meta:{
        title:'详情'
      },
      component: Detail
    },{
      path: '/order',
      name: 'Order',
      meta:{
        title:'我的订单'
      },
      component: Order
    },{
      path: '/list_address',
      name: 'ListAddress',
      meta:{
        title:'地址列表'
      },
      component: ListAddress,
    },{
      path: '/add_address',
      name: 'AddAddress',
      meta:{
        title:'添加地址'
      },
      component: AddAddress,
    },{
      path: '/topay',
      name: 'Topay',
      meta:{
        title:'支付页'
      },
      component: Topay
    },{
      path: '/pay_result',
      name: 'PayResult',
      meta:{
        title:'支付结果'
      },
      component: PayResult
    },{
      path: '/pay_fail',
      name: 'PayFail',
      meta:{
        title:'支付失败'
      },
      component: PayFail
    }, {
      path: '/login',
      name: 'Login',
      meta:{
        title:'登陆'
      },
      component: Login
    },
  ]
})

const decludeRouter = ['Home','Login','Detail'];
router.beforeEach((to,from,next)=>{
  if(decludeRouter.indexOf(to.name)!==-1){
    next();
    return;
  }
  // console.log(document.cookie.token)
  if(document.cookie.indexOf('token')==-1){
    next(`/login?successUrl=${to.path}`)
  } else {
    next()
  }
  
})
router.afterEach((to,from)=>{
  document.title=to.meta.title
})

export default router