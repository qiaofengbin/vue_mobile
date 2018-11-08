<template>
    <transition 
    enter-active-class="animated fadeIn" 
    leave-active-class="animated fadeOut"                          
     @before-enter="beforeEnter"
     @before-leave="beforeLeave"
     >
        <div class="car-box" v-show="visibility" @click="close">
            <transition 
            enter-active-class="animated slideInUp" 
            leave-active-class="animated slideOutDown"
            >
                <div class="car-content" @click.stop="" v-show="show">
                    <header>
                        <a class="set-cart" href="javascript:void(0)" title=""></a>
                        <span>小伙伴，选购商品满90元起送噢</span>
                    </header>
                    <div class="car-main">
                        <ul>
                            <li v-for="(item,index) in carList" v-bind:key="index">
                                <span>{{item.title}}</span>
                                <ShopCarBtn :product="item" />
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <p class="set-bottom-count">
                            <b>{{addNum}}</b>盒商品
                        </p>
                        <p class="set-bottom-all">
                            <b>合计：</b>¥
                            <em>{{addTotle}}</em>
                        </p>
                        <router-link to="/topay" id="topay"  title="" >
                            结算
                        </router-link>
                    </footer>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
    import {
        mapState,
        mapGetters
    } from 'vuex'
    import ShopCarBtn from './shopCarBtn.vue';
    
    export default {
        name: 'CarBox',
        data() {
            return {
                show:false
            }
        },
        props: {
            visibility: {
                type: Boolean,
                default: false
            },

        },
        computed: {
            ...mapState('Product', ['carList']),
            ...mapGetters('Product', ['addNum', 'addTotle']),
            shopping_add() {
                return this.$store.state.Product.carList
            }
        },
        components: {
            ShopCarBtn
        },
        methods: {
            close() {
                this.$emit('update:visibility', false)
            },
            beforeEnter() {
                this.show=true
                // ...
            },
             beforeLeave() {
                // ...
                this.show=false
            },
        }
    }
</script>
<style scoped lang="less">
    .car-box {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: 100;
    }

    .car-content {
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background: #fff;
        border-radius: 5px;
        min-height: 3rem;
        display: flex;
        flex-direction: column;
    }

    header {
        width: 100%;
        line-height: .8rem;
        border-radius: 5px 5px 0 0;
        a {
            position: absolute;
            left: 0;
            top: .1rem;
            width: .88rem;
            height: .6rem;
            background: url(https://m.lechun.cc/images/alert_cart.png?v=1) no-repeat;
            background-size: cover;
            margin-top: 0;
            overflow: hidden;
            z-index: 999;
        }
        span {
            float: right;
            line-height: 1rem;
            height: 1rem;
            overflow: hidden;
            font-size: .22rem;
        }
    }

    .car-main {
        width: 100%;
        flex: 1;
        ul {
            li {
                line-height: .9rem;
                width: 100%;
                font-size: .24rem;
                display: flex;
                overflow: hidden;
                position: relative;
                span {
                    flex: 1;
                }
                .btn {
                    width: 26%;
                    text-align: right;
                    background: tan;
                    /* button{
                    width: .4rem!important;
                    height: .4rem!important;
                } */
                }
            }
        }
    }

    footer {
        border-top: 1px solid #f5f5f5;
        height: .9rem;
        overflow: hidden;
        padding: 0 5px;
        /* position: fixed;
        bottom: 0px; */
        width: 100%;
        box-sizing: border-box;
        #topay {
            float: right;
            margin-top: -.5rem;
            padding: 5px;
            color: #fff;
            border-radius: 5px;
            background: #f00;
        }
    }
</style>