<template>
    <div class="order-page">
        <router-link tag="button" to="/add_address" class="add_address">添加地址</router-link>
        <ul class="address_list">
            <li v-for="(item,index) in addressList" @click="select_address(item)" ref="address">
                <swipeout>
                    <swipeout-item :threshold=".5" underlay-color="#ccc">
                        <div slot="right-menu">
                            <swipeout-button @click.native.stop="onButtonClick('取消')" background-color="#336DD6">取消</swipeout-button>
                            <swipeout-button @click.native.stop="onButtonClick(item)" background-color="#D23934">删除</swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
                            <h3>{{item.name}} {{item.phone}}</h3>
                            <p>{{item.city}} {{item.address}} {{item.label}}</p>
                            <span @click.stop="redact(item)">编辑</span>
                        </div>
                    </swipeout-item>
                </swipeout>
            </li>
        </ul>
    </div>
</template>
<script>
    import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
    import { mapState } from 'vuex'
    import api from '@/api'
    export default {
        name: 'ListAddress',
        created() {

        },
        computed: {
            ...mapState('User', ['addressList'])
        },
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton
        },
        methods: {
            select_address(item) {
                if (this.$route.query.callback_url) {
                    this.$router.push({
                        path: '/home',
                        query: {
                            data: item
                        }
                    })
                } else {
                    this.$router.push({
                        path: '/topay',
                        query: {
                            data: item
                        }
                    })
                }
            },
            handleEvents(type) {
                console.log('event: ', type)
            },
            onButtonClick(item) {
                if (item) {
                    api.address.delete(item).then((res) => {
                        console.log(res)
                    })
                }
            },
            redact(item) {
                this.$router.push({
                    path: '/add_address',
                    query: {
                        data: item
                    }
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .order-page {
        width: 100%;
        height: 100%;
        .add_address {
            width: 40%;
            height: 40px;
            border: none;
            outline: none;
            border-radius: 30px;
            display: block;
            margin: 30px auto;
            border-bottom: 1px solid #ccc;
        }
    }

    .demo-content {
        padding: 10px 10px;
        position: relative;
        h3 {
            margin-bottom: .28rem;
            font-size: .26rem;
        }
        p {
            color: #222;
            font-size: .26rem;
        }
        span {
            position: absolute;
            right: 32px;
            top: 25px;
        }
    }
</style>