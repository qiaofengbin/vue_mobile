<template>
    <div class="wrap">
        <HeaderBar>
            <SelectAddress />
            <NavList />
        </HeaderBar>
        <section class="banner-wrap">
           <div class="Iscroll">
                <Swiper />
                <AdvBanner />
                <VipBanner />
                <ProductList :list="list"/>
           </div>
        </section>
       
        <FooterBar />
    </div>
</template>
<script>
    import FooterBar from '../../components/FooterBar.vue'
    import HeaderBar from '../../components/HeaderBar.vue'
    import NavList from './components/Nav_list.vue'
    import Swiper from '../../components/Swiper.vue'
    import ProductList from '../../components/productList.vue'

    import SelectAddress from './components/Select_address.vue'
    import AdvBanner from './components/Adv_banner.vue'
    import VipBanner from './components/Vip_banner.vue'


    import Fetch from '../../utiles/fetch.js'
    import api from '../../api/index.js'

    import BScroll from 'better-scroll'
    import {
        mapState
    } from 'vuex'

    export default {
        name: 'Home',
        data() {
            return {
                list: []
            }
        },
        components: {
            FooterBar,
            HeaderBar,
            SelectAddress,
            NavList,
            Swiper,
            AdvBanner,
            VipBanner,
            ProductList
        },
        computed: {
            ...mapState('User', ['info']) //用户信息 
        },
        methods:{
            getList(){
                api.product.group().then((data)=>{
                    console.log(data)
                    this.list=data.data
                })
            }
        },
        created() {
            
            // fetch('http://localhost:3000/api/user/info').then((res) => {
            //         return res.json()
            //     }).then((data) => {
            //         console.log(data)
            //     })
            // Fetch.get('/api/user/info').then((res) => {
            //     console.log(res)
            // })
            // Fetch.get('/api/product/group').then((res) => {
            //     console.log(res.data)
            //    this.list=res.data
            // })


            // fetch('/api/user/info', {
            //     credentials: 'include'
            // }).then((res) => {
            //     return res.json()
            // }).then((data) => {
            //     console.log(data)
            // })
        },
        mounted() {
            this.getList()
            const wrapper = document.querySelector('.banner-wrap')
                const scroll = new BScroll(wrapper, {
                    scrollbar: true,
                    click: true
                })
        }
    }
</script>
<style scoped lang="less">
    .wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .banner-wrap {
        width: 100%;
        height: 100%;
        /* overflow-y: scroll; */
        /* overflow: hidden; */
    }
    
    .Iscroll {
        height: auto;
        margin-bottom: 189px;
    }
</style>