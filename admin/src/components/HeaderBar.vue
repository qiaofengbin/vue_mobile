<template>
    <header class="header">
        <div class="left">
            <slot name='left'></slot>
        </div>
        <h3 class="title"><slot></slot></h3>
        <div class="right">
            <slot name='right'></slot>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'HeaderBar'
    }
</script>

<style scoped>
    .header {
        position: relative;
        left: 0;
        top: 0;
        overflow: hidden;
        display: flex;
        width: 100%;
        height: 1.7rem;
        background: #fff;
        box-sizing: border-box;
        box-shadow: 0 2px 4px 0 rgba(63, 67, 89, .1);
        z-index: 10;
    }
    
    .title {
        /* position: absolute;
        left: 0;
        right: 0;
        display: flex;
        height: 0.6rem;
        justify-content: center;
        align-items: center;
        padding: 0 1.2rem; */
        display: block;
        -webkit-box-flex: 1;
        box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        margin: 0.2rem .2rem 0 .2rem;
        padding-left: .82667rem;
        background: url(https://sta.maodou.com/xinche_wap/static/images/search@2x.b969d657.png) #f5f5f5 no-repeat .32rem;
        background-size: .34667rem .34667rem;
        border-radius: 1.33333rem;
        font-size: .37333rem;
        color: #c6c8d5;
    }
    
    .left {
        /* float: left;
        display: flex;
        height: 0.6rem;
        justify-content: center;
        align-items: center; */
        display: block;
        height: 100%;
        padding: .05rem .45333rem 0 .08rem;
        background: url(https://sta.maodou.com/xinche_wap/static/images/city@2x.23aa0209.png) no-repeat;
        background-position: right 56%;
        background-size: .32rem .32rem;
        line-height: .92rem;
        font-size: .37333rem;
        color: #3f4359;
        box-sizing: border-box;
        letter-spacing: -.00747rem;
    }
    
    .right {
        /* float: right;
        display: flex;
        height: 0.6rem;
        justify-content: center;
        align-items: center; */
        display: block;
        width: .64rem;
        height: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: .64rem .64rem;
        line-height: .85333rem;
    }
</style>