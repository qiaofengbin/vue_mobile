
import api from '@/api';
import { ArrayisObject } from '../../utiles/utils'

const Product = {
    namespaced: true,
    state: {
        carList: []
    },
    getters: {
        addNum(state) { // 计算所有的商品
            let num = 0;
            state.carList.forEach((i) => {
                num += i.shopCount
            })
            return num
        },
        addTotle(state) { // 计算所有的商品价格
            let price = 0;
            state.carList.forEach((i) => {
                price += i.shopCount * i.price
            })
            return price
        },
    },
    mutations: {
        SHOPPING_ADD(state, newState) {
            // console.log(state.carList)
            const isItem = ArrayisObject(state.carList, 'id', newState.id);
            if (isItem) {
                state.carList = state.carList.map((i) => {
                    if (i.id == newState.id) {
                        return Object.assign({}, i, {
                            shopCount: newState.shopCount
                        })
                    }
                    return i
                })
            } else {
                state.carList.push(newState)
            }
            // 过滤购物车中的数据把数量为0的清空
            state.carList = state.carList.filter((item2) => {
                return item2.shopCount >= 1;
            });
            // 将购物车数据同步到本地，下次打开还存在
            window.localStorage.setItem('loginCart', JSON.stringify(state.carList));
        },
        // 覆盖购物车数据
        SET_CART_LIST(state, list) {
            state.carList = list;
        },
    },
    actions: {
        setCarList({ commit }) { // 将数据从本地取出来并返回到页面
            let list = window.localStorage.getItem('loginCart');
            if (list) {
                list = JSON.parse(list)
            } else {
                list = []
            }
            api.car.list().then((data) => {
                if (data.data.length >= 1) {
                    const cartList = data.data.concat(list);
                    let newCarList = {};
                    cartList.forEach((item) => {
                        if (newCarList[item.id]) {
                            newCarList[item.id].shopCount = item.shopCount;
                        } else {
                            newCarList[item.id] = item;
                        }
                    });
                    newCarList = Object.values(newCarList);
                    commit('SET_CART_LIST', newCarList);
                    api.car.update(newCarList).then(() => { });
                }
            }).catch(() => {
                commit('SET_CART_LIST', list);
            });
        },
        setCarItem({ commit, rootState }, payload) {
            commit('SHOPPING_ADD', payload);
            console.log(rootState)
            if (rootState.User.isLogin) {
                api.car.add({
                    productId: payload.id,
                    count: payload.shopCount,
                });
            }
        }
    }
}
export default Product