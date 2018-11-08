
import Fetch from '../utiles/fetch'
const api = {
    user: {
        login: () => Fetch.post('/api/login'),
        code: (data) => Fetch.get('/api/msgCode', data),
        info: () => Fetch.get('/api/user/info')
    },
    product: {
        list: () => Fetch.get('/api/product/list'),
        group: () => Fetch.get('/api/product/group'),
        detail: (data) => Fetch.get('/api/product/detail', data)
    },
    address: {
        add: (data) => Fetch.post('/api/address/add', {
            name:data.name,
            phone:data.phone,
            city:data.city,
            address:data.address,
            label:data.label
        }),
        list:()=>Fetch.get('/api/address/list'),
        delete:(data)=>Fetch.post('/api/address/delete',{
            name:data.name,
            phone:data.phone,
            city:data.city,
            address:data.address,
            label:data.label
        })
    },
    car: {
        list: () => Fetch.get('/api/car/list'), // 获取购物车列表
        add: ({ productId, count }) => Fetch.get('/api/car/add', { productId, count }),  // 添加购物车
        update: data => Fetch.post('/api/car/update', { data }), // 跟新购物车数据
    }
}
export default api