import Fetch from '../../utiles/fetch'
import api from '@/api'

const User = {
    namespaced: true,
    state: {
        info: {},
        isLogin: false,
        addressList:[]
    },
    getters: {},
    mutations: {
        SET_INFO(state, info) {
            state.isLogin = true;
            state.info = info
        },
        SET_ADDRESS_LIST(state,address){
            state.addressList = address
        }
    },
    actions: {
        get_user_info({ commit }) {
            Fetch.get('/api/user/info').then((data) => {
                commit('SET_INFO', data.data)
            })
        },
        login({ dispatch }, payload) {
            return new Promise((resolve, reject) => {
                Fetch.post('/api/login', {
                    phone: payload.phone,
                    code: payload.code
                }).then(() => {
                    // dispatch('get_user_info', {
                    //     phone: payload.phone
                    // })
                    resolve()
                }).catch((e) => {
                    reject()
                })
            })
        },
        msg_code({ commit }, payload) {
            return new Promise((resolve, reject) => {
                Fetch.get('/api/msgCode', {
                    phone: payload.phone
                }).then((data) => {
                    resolve(data)
                }).catch(() => {
                    reject()
                })
            })
        },
        get_address_list({ commit }){
            api.address.list().then((res)=>{
                commit('SET_ADDRESS_LIST',res.data)
            })
        },
        remove_address_list({commit}){
            api.address.delete().then((res)=>{
                if(res.data){
                    commit('SET_ADDRESS_LIST',res.data)
                }
            })
        }
    }
}
export default User