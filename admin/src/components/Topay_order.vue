<template>
    <div class="topay-wrap">
        <section class="topay-address-wrap bd">
            <template v-if="$route.query.data">
                <router-link to="/list_address" tag="div" class="address-content">
                    <h3>{{this.$route.query.data.name}} {{this.$route.query.data.phone}}</h3>
                    <p>{{this.$route.query.data.city}} {{this.$route.query.data.address}} {{this.$route.query.data.label}}</p>
                </router-link>
            </template>
            <template v-else>
                <router-link to="/list_address" tag="div" class="address-content">您还没有填写配送地址,请点击添加</router-link>
            </template>

            <em class="icon-enter"></em>
        </section>
        <section class="topay-date-wrap bd Ana">
            <div class="data-content-show">
                <h3>配送日期</h3>
            </div>
            <DeliveryDate />
        </section>
        <section class="topay-coupon-wrap bd">
            <h3>优惠券</h3>
            <div style="font-size: .24rem;">
                <span class="coupon-price">- ¥0.00</span>
                <em class="icon-enter"></em>
                <input type="hidden" id="cashId" value="">
            </div>
        </section>
        <section class="topay-balance-wrap">
            <p>余额
                <span>¥2.00</span>
            </p>
            <span class="switch switch-on">
                <b></b>
            </span>
        </section>
        <section class="topay_list">
            <TopayList />
        </section>
        <section class="topay-btn-wrap">
            <p>实付
                <b data-amountrue="136.59999">¥{{addTotle}}</b>
            </p>
            <router-link tag="div" to="/pay_result" class="topay-submit" @click="topay">立即支付</router-link>
        </section>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import TopayList from '../views/topay/components/topay_list.vue'
    import DeliveryDate from './DeliveryDate.vue'
    export default {
        name: 'TopayOrder',
        components: {
            TopayList,
            DeliveryDate
        },
        computed: {
            ...mapGetters('Product', ['addNum', 'addTotle']),
        },
        methods:{
            topay(){
                console.log(11)
            }
        }

    }
</script>
<style scoped lang="less">
    .topay-wrap {
        width: 100%;
        height: 100%;
        &>section {
            background-color: #ffffff;
            padding: .22rem .28rem .22rem .38rem;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-box-pack: justify;
            -webkit-box-align: center;
            font-size: .28rem;
        }
        .topay-address-wrap {
            position: relative;
            border-bottom: 1px solid #e8e8e8;
            .address-content {
                -webkit-box-flex: 1;
                margin-right: .28rem;
            }
            h3 {
                margin-bottom: .28rem;
                font-size: .26rem;
            }
            p {
                color: #222;
                font-size: .26rem;
            }
        }
        .topay-btn-wrap {
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 0;
            width: 100%;
            p {
                -webkit-box-flex: 1;
                font-size: .3rem;
                text-indent: .38rem;
                margin-right: .28rem;
                line-height: .44rem;
                width: 2.8rem;
                b {
                    font-size: 0.4rem;
                    margin-left: .14rem;
                    color: #666666;
                    font-weight: normal;
                    line-height: .44rem;
                }
            }
            .topay-submit {
                -webkit-box-flex: 1;
                width: 4.2rem;
                height: 1rem;
                display: block;
                background-color: #e50011;
                color: #ffffff;
                line-height: 1rem;
                text-align: center;
                font-size: .32rem;
            }
        }
    }

    .icon-enter {
        font-style: normal;
        width: .16rem;
        height: .16rem;
        display: inline-block;
        border-top: 1px solid #999999;
        border-right: 1px solid #999999;
        -webkit-transform: rotate(45deg);
    }
</style>