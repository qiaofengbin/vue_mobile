<template>
    <div class="car-main">
        <ul>
            <li v-for="(item,index) in carList">
                <img :src="item.thumbnail" alt="">
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.tag}}</p>
                </div>
                <span>¥{{item.price}} x{{item.shopCount}} 盒</span>
            </li>
        </ul>
        <div class="count-content">
            <p class="count-all" data-all="138.59999">商品合计
                <span>¥{{addTotle}}</span>
            </p>
            <p class="count-activity" data-activity="0" style="display: none;">
                <b></b>满十减二
                <span>-¥0.00</span>
            </p>
            <p class="count-freight" data-freight="0">邮费
                <span>免运费</span>
            </p>
            <p class="count-coupon" data-coupon="0.00">优惠券
                <span>-¥0.00</span>
            </p>
            <p class="count-balance" data-usebalance="0.00">使用余额
                <span data-balance="2.00">-¥2.00</span>
            </p>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        name: 'TopayList',
        computed: {
            ...mapState('Product', ['carList']),
            ...mapGetters('Product', ['addNum', 'addTotle']),
        }
    }
</script>
<style scoped lang="less">
    .car-main {
        display: block;
        padding: 0 0 0 .38rem;
        border-bottom: 1px solid #e8e8e8;
        ul {
            li {
                padding: .22rem .3rem .26rem 0;
                display: -webkit-box;
                -webkit-box-align: center;
                border-bottom: 1px solid #e8e8e8;
                img {
                    width: 1.4rem;
                    height: 1.4rem;
                    display: block;
                    margin-right: .08rem;
                }
                .content {
                    -webkit-box-flex: 1;
                    h3 {
                        font-size: .28rem;
                        line-height: .44rem;
                    }
                    p {
                        font-size: .24rem;
                        line-height: .44rem;
                        color: #999999;
                    }
                }
                span {
                    display: block;
                    width: 1.9rem;
                    text-align: right;
                    margin-top: .84rem;
                }
            }
        }
        .count-content {
            width: 100%;
            padding: .22rem .28rem .22rem .38rem;
            p {
                text-align: right;
                line-height: .56rem;
            }
        }
    }
</style>