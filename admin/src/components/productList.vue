<template>
    <div class="list">
        
        <ul class="clearfix">
            <li v-for="(item,index) in list" class="sku-item" :key="index">
                <header class="wrap-header">
                    <h3>{{item.title}}</h3>
                    <p>{{item.describe}}</p>
                </header>
                <div class="sku-info" v-if="item.goods">
                    <dl v-for="(val,index) in item.goods" :key="index">
                        <router-link :to="{name:'Detail',params:{id:val.id}}">
                            <dt>
                                <img :src="val.thumbnail" alt="">
                            </dt>
                            <dd>
                                <h3>{{val.title}}</h3>
                                <p>{{val.tag}}</p>
                                <span>
                                    ¥
                                    <small>{{val.price}}</small>元/盒
                                </span>
                            </dd>
                        </router-link>
                        <ShopCarBtn :product="val" @click.stop="">
                            <template slot-scope="scope">
                                <i class="cart-btn" @click="scope.increase"></i>
                            </template>
                        </ShopCarBtn>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import ShopCarBtn from './shopCarBtn.vue'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'ProductList',
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            ShopCarBtn
        }
    }
</script>
<style scoped>
    .wrap-header {
        position: relative;
        padding: .44rem 0 .33rem;
        text-align: center;
        background: #f7f7f7;
    }

    .wrap-header p {
        font-size: .2rem;
        color: #666666;
        border: 1px solid;
        display: inline-block;
        padding: .02rem .2rem;
    }

    .sku-info {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .sku-info dl {
        width: 50%;
        background: #ffffff;
        box-sizing: border-box;
        padding: .2rem .33rem .45rem;
        height: 5rem;
        border-right: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        position: relative;
    }

    .sku-info dl dt img {
        width: 2.4rem;
        display: block;
        margin: 0 auto .1rem;
    }

    .sku-info dl dd {
        font-size: .16rem;
    }

    .sku-info dl dd span {
        font-size: 0.26rem;
        color: #f00;
        position: relative;
        bottom: -.55rem;
        left: -.1rem;
    }

    .sku-info dl dd p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding: 0 10px;

    }

    .cart-btn {
        width: .55rem;
        height: .55rem;
        background: #f00 url('https://m.lechun.cc/images/icon/icon-sku-cart.png') no-repeat;
        background-size: 60%;
        background-position: center center;
        display: block;
        border-radius: 50%;
    }
</style>