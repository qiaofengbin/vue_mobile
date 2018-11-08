<template>
    <div class="opera-content">
        <div class="btn-wrap" v-show="showBtn">
            <button class="decrease" @click="decrease" :disabled="count==0">－</button>
            <span>{{count}}</span>
            <button class="increase" v-on:click="increase">＋</button>
        </div>
        <div v-show="count==0">
            <slot :increase="increase"></slot>
        </div>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex';

    export default {
        name: 'ShopCarBtn',
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        created() { },
        computed: {
            ...mapState('Product', ['carList']),
            showBtn() {
                return Object.keys(this.$scopedSlots).length == 0 || (Object.keys(this.$scopedSlots).length > 0 && this.count != 0)
            },
            shopping_add() {
                return this.$store.state.Product.carList
            },
            count: {
                get() {
                    const carItem = this.carList.filter((item, index) => {
                        return item.id == this.product.id
                    })
                    return carItem.length >= 1 ? carItem[0].shopCount : 0
                },
                set(newVal) {
                    // console.log(this.product)
                    // this.$store.commit('Product/SHOPPING_ADD', {
                    //     ...this.product,
                    //     shopCount: newVal
                    // })
                    this.$store.dispatch('Product/setCarItem', {
                        ...this.product,
                        shopCount: newVal
                    })
                }
            }

        },
        methods: {
            increase() { // 点击‘+’
                this.count += 1
            },
            decrease() {
                this.count = this.count - 1 <= 0 ? 0 : this.count - 1
            }
        }
    }
</script>
<style scoped>
    .opera-content {
        width: 1.6rem;
        -webkit-box-align: end;
        display: -webkit-box;
        -webkit-box-pack: end;
        -webkit-align-items: center;
        position: absolute;
        bottom: .2rem;
        right: .3rem;
    }

    .btn-wrap {
        display: flex;
    }

    .opera-content button {
        width: .52rem;
        height: .52rem;
        border: 1px solid #e50011;
        box-sizing: border-box;
        border-radius: .26rem;
        display: block;
        text-align: center;
        line-height: .48rem;
        font-style: normal;
        font-size: .4rem;

    }

    .opera-content .decrease {
        color: #e50011;
    }

    .opera-content span {
        display: block;
        font-weight: normal;
        line-height: .52rem;
        font-size: .26rem;
        margin: 0 .2rem;
    }

    .btn-wrap {
        width: 100%;
    }

    .opera-content .increase {
        background: #e50011;
        color: #ffffff;
    }
</style>