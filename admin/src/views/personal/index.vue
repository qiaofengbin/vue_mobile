<template>
    <div>
        <article class="person-info-wrap">
            <section class="person-info">
                <div class="avatar">
                    <img src="" alt="">
                    <img src="https://m.lechun.cc/images/vip/vip-v1-on.png" class="avatar-level">
                </div>
                <p class="user-name">
                    <span class="user-name-info">{{info.phone}} ></span>
                </p>
                <div class="vip-content">
                    <a href="" class="Analysis vip-entrance">会员最高享9折 ❯</a>
                    <a href="" class="member-deadline">
                        <span>点击进入会员中心</span>
                    </a>
                </div>
            </section>
            <section class="my-order">
                <group>
                    <cell title="我的订单" value="查看全部订单" is-link></cell>
                </group>
                <group class="order-wrap">
                    <panel :list="list"></panel>
                </group>
                <group>
                    <cell title="修改订单" value="0个" is-link></cell>
                    <cell title="存储/余额" value="0元" is-link></cell>
                    <cell title="我的优惠卷" value="0张" is-link></cell>
                    <cell title="我的地址" is-link></cell>
                    <cell title="意见反馈" is-link></cell>
                    <cell title="联系客服" is-link></cell>
                </group>
                <div class="Exit_logon">退出登录</div>
            </section>
        </article>
        <FooterBar />
    </div>
</template>
<script>
    import FooterBar from '../../components/FooterBar.vue'
    import { CellBox, Group, Cell, Panel, Radio } from 'vux'
    import {
        mapState
    } from 'vuex'
    import api from '../../api/index.js'
    export default {
        name: 'Personal',
        data() {
            return {
                info: [],
                list: [{
                    src: '../../../static/img/img1.png',
                    id: 0,
                    title: '待付款',
                }, {
                    src: '../../../static/img/img2.png',
                    title: '代发货',
                    id: 1,

                }, {
                    src: '../../../static/img/img3.png',
                    title: '待收货',
                    id: 2,

                }, {
                    src: '../../../static/img/img4.png',
                    title: '待评价',
                    id: 2,

                }],

            }
        },
        created() {
            this.getInfo()
        },
        computed: {
        },
        components: {
            FooterBar,
            CellBox,
            Group,
            Cell,
            Panel,
            Radio
        },
        methods: {
            getInfo() {
                api.user.info().then((res) => {
                    this.info = res.data
                })
            }
        }
    }
</script>
<style lang="less">
    .person-info-wrap {
        position: relative;
        margin: 0 auto;
        min-width: 320px;
        background-color: #f2f2f2;
        padding-bottom: 4.6rem;
        .person-info {
            display: -webkit-box;
            -webkit-box-pack: justify;
            -webkit-box-align: center;
            background: #1e1f21;
            *zoom: 1;
            text-align: left;
            color: #fff;
            height: 2rem;
            .avatar {
                border: 2px solid #757677;
                width: 1.2rem;
                height: 1.2rem;
                margin-left: 20px;
                margin-right: 12px;
                position: relative;
                overflow: visible;
                border-radius: 50%;
                z-index: 100;
                .avatar-level {
                    position: absolute;
                    right: 0rem;
                    bottom: .85rem;
                    width: .3rem;
                    height: .3rem;
                }
            }
            .user-name {
                -webkit-box-flex: 1;
                margin-right: 1rem;
                span {
                    display: block;
                    width: 100%;
                }
            }
            .vip-content {
                width: 2.3rem;
                .vip-entrance {
                    display: block;
                    line-height: .6rem;
                    text-align: center;
                    border-bottom-left-radius: .5rem;
                    border-top-left-radius: .5rem;
                    width: 100%;
                    background: #e50011;
                    font-size: .14rem;
                    color: #ffffff;
                }
                .member-deadline {
                    span {
                        font-size: .14rem;
                        color: #ffffff;
                    }
                }
            }
        }
        .my-order {
            .order-wrap {
                .weui-panel__bd {
                    display: flex;
                    a {
                        width: 25%;
                        display: flex;
                        flex-direction: column;
                        .weui-media-box__hd {
                            height: 30px;
                            img {
                                width: 30px;
                                height: 30px;
                            }
                        }
                        .weui-media-box__title {
                            font-size: 12px!important;
                        }
                    }
                }

            }
            .Exit_logon {
                width: 100%;
                line-height: 1rem;
                text-align: center;
                color: #e50011;
                background: #fff;
                display: block;
                margin: .24rem 0;
            }
        }
    }
</style>