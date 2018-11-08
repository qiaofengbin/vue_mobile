<template>
    <div class="address-wrap">
        <p>
            <span class="address-icon"></span>
            <span>最快</span>
            <span class="address-date"></span>
            <span class="address-date-line">送至</span>
            <template v-if="$route.query.data">
                <router-link :to="{path:'/list_address',query:{callback_url:'/home'}}" class="address-info">{{this.$route.query.data.city}} {{this.$route.query.data.address}} {{this.$route.query.data.label}} 请选择地址</router-link>
            </template>
            <template v-else>
                <router-link :to="{path:'/list_address',query:{callback_url:'/home'}}" class="address-info">请选择地址 </router-link>
            </template>
            <i>❯ </i>
        </p>
    </div>
 </template>
<script>
    export default {
        name: 'SelectAddress'
    }
</script>
<style scoped lang='less'>
    .address-wrap {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
        width: 100%;
        height: .8rem;
        text-align: center;
        background: #ffffff;
        box-sizing: border-box;
        padding: 0 .24rem;
        p {
            color: #222222;
            display: -webkit-box;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            font-size: .24rem;
            margin-top: .28rem;
            border-radius: .3rem;
            .address-icon {
                width: .22rem;
                height: .26rem;
                display: block;
                background: url(https://m.lechun.cc/images/index/address-icon.png) top left no-repeat;
                background-size: .22rem auto;
                margin-right: .12rem;
            }
            .address-info {
                max-width: 1.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;
                color: #222222;
                margin: 0 .09rem;
            }
            i {
                display: block;
                font-style: normal;
            }
        }
    }
</style>