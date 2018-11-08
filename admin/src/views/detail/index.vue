<template>
    <div class="detail-wrap">
        <img :src="data.background" alt="" class="detail-bg-pic">
        <section class="detail-container">
            <section class="info-box">
                <div class="product-title-wrap">
                    <h2>{{data.title}}</h2>
                    <p class="info-tab">
                        <span>{{data.tag}}</span>
                    </p>
                </div>
                <div class="product-price-wrap">
                    <p class="detail-price">{{data.price}}元/盒</p>
                </div>
            </section>
            <section class="info-box store-info-box">
                <div class="store-info">
                    <p v-for="(item,index) in spec">{{item.key+':'+item.value}}</p>
                </div>
                <div class="opera-content">
                    <ShopCarBtn class="shopBtn">
                        <template slot-scope="scope">
                            <i class="increase empty-increase" @click="scope.increase">加入购物车</i>
                        </template>
                    </ShopCarBtn>
                </div>
            </section>
            <section class="product-intro">
                <h4>产品介绍:</h4>
                <p>{{data.describe}}</p>
                <img :src="data.thumbnail" alt="">
            </section>
            <section class="compose">
                <h3>— 营养成分 —</h3>
                <h4>nutrition</h4>
                <img :src="data.nutrition" alt="">
            </section>
            <section class="compose">
                <h3>— 配料表 —</h3>
                <h4>nutrition</h4>
                <p>{{data.ingredients}}</p>
            </section>
        </section>
        <section class="other-product">
            <h3>— 您可能还喜欢 —</h3>
            <section class="sku-content">
                <ProductList :list="list" />
            </section>
        </section>
        <FooterBar />
    </div>
</template>
<script>
    import api from '../../api/index.js'
    import FooterBar from '../../components/FooterBar.vue'
    import ShopCarBtn from '../../components/shopCarBtn.vue'
    import ProductList from '../../components/productList.vue'
    export default {
        name: 'Detail',
        data() {
            return {
                data: {},
                list: []
            }
        },
        created() {
            this.getDetail()
            this.getList()
        },
        computed: {
            //将数据做一步转换
            spec() {
                if (this.data.spec) {
                    return JSON.parse(this.data.spec)
                }
            }
        },
        components: {
            FooterBar,
            ShopCarBtn,
            ProductList
        },
        methods: {
            getDetail() { //获取详情页的接口数据
                api.product.detail({
                    id: this.$route.params.id
                }).then((res) => {
                    this.data = res.data
                })
            },
            getList() {
                //获取列表数据接口
                api.product.group().then((data) => {
                    this.list = data.data
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .detail-wrap {
        width: 100%;
        height: 3000px;
        font-size: .28rem;
        color: #222222;
        background: #eee;

        .detail-container {
            width: 90%;
            position: relative;
            margin: -1.18rem auto .42rem;
            background: #ffffff;
            border-radius: .1rem;
            &>section {
                padding: .3rem;
                box-sizing: border-box;
            }
            .info-box {
                display: -webkit-box;
                -webkit-box-pack: justify;
                .product-title-wrap {
                    -webkit-box-flex: 1;
                    h2 {
                        font-size: .36rem;
                        color: #222222;
                    }
                    .info-tab {
                        margin-top: .1rem;
                        color: #e50011;
                        line-height: .44rem;
                    }
                }
                /* .store-info-box {
                    -webkit-box-align: end;
                 
                } */
                .store-info {
                    border-top: 1px solid #bcbcbc;
                    border-bottom: 1px solid #bcbcbc;
                    padding: .1rem .15rem .1rem 0.05rem;
                    -webkit-box-flex: 1;
                    width: 50%;
                    p {
                        line-height: .44rem;
                        font-size: .22rem;
                    }
                }
                .opera-content {
                    position: relative;
                    width: 2rem;
                    margin-left: .4rem;

                }
            }
            .product-intro {
                h4 {
                    color: #979797;
                    font-size: .26rem;
                    font-weight: normal;
                }
                p {
                    line-height: .4rem;
                    text-align: justify;
                    font-size: .26rem;
                    margin: .16rem 0 .32rem;
                }
                img {
                    width: 100%;
                    min-height: 1.18rem;
                    display: block;
                    min-height: 1.18rem;
                }
            }
            .compose {
                h3 {
                    text-align: center;
                    font-size: .28rem;
                    color: #e50011;
                }
                h4 {
                    text-align: center;
                    color: #b6b6b6;
                    font-size: .28rem;
                    font-weight: normal;
                    margin: .1rem 0 .25rem;
                }
                img {
                    width: 5.28rem;
                    display: block;
                    margin: 0 auto;
                }
                p {
                    width: 4.86rem;
                    margin: 0 auto;
                    padding: .2rem;
                    font-size: .24rem;
                    border: 1px solid #a7a7a7;
                    text-align: justify;
                    margin-bottom: .3rem;
                }
            }
        }
        .detail-bg-pic {
            width: 100%;
            min-height: 1.18rem;
            display: block;
            min-height: 1.18rem;
        }
        .other-product {
            background: #ffffff;
            font-size: .28rem;
            h3 {
                text-align: center;
                font-size: .3rem;
                line-height: .9rem;
            }
        }
    }

    .increase {
        padding: 7px;
        background: #e50011;
        color: #ffffff;
        text-align: center;
        line-height: .6rem;
        border-radius: .1rem;
        font-style: normal;
        position: relative;
        top: 0;
        font-size: .22rem;
    }

    .shopBtn {
        position: relative;
        right: .6rem;
    }

    .product-price-wrap p {
        color: #e50011;
        font-size: .36rem;
    }
</style>