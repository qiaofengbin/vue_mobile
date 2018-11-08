import Vue from 'vue'
import Vuex from 'vuex'
import Product from './moudel/product'
import User from './moudel/user'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        Product,
        User
    }
})
export default store