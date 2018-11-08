<template>
    <div class="topay-to">
        <img src="https://wx.lechun.cc/static/images/topay-to-title.png?v=c3ad486">
        <h3>请确认支付是否已完成</h3>
        <button class="topay-button" @click="finish">支付完成</button>
        <button class="topay-button topay-fail">支付遇到问题,重新支付</button>
    </div>
</template>
<script>
    export default {
        name: 'PayResult',
        methods:{
            finish(){
                this.$router.push('/pay_fail')
            }
        }
    }
</script>
<style scoped lang="less">
    .topay-to {
        font-size: .28rem;
        text-align: center;
        color: #e50011;
        img {
            width: 2.7rem;
            height: auto;
            display: block;
            margin: 1.1rem auto .5rem;
        }
        h3 {
            color: #ca1c1d;
            font-size: .36rem;
            font-weight: 400;
            margin: .5rem 0 .8rem;
        }
        button {
            border: none;
            background: none;
            outline: none;
        }
        .topay-button {
            width: 6rem;
            height: 1rem;
            display: block;
            background: #e50011;
            color: #fff;
            line-height: 1rem;
            border-radius: .5rem;
            font-size: .32rem;
            margin: 0 auto .3rem;
        }
        .topay-fail {
            background: #202020;
        }
    }
</style>