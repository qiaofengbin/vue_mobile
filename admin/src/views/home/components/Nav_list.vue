<template>
    <nav class="nav-wrap">
        <a href="javascript:;" class="checked">单盒自选</a>
        <a href="javascript:;">纤巧装</a>
        <a href="javascript:;">家庭装</a>
        <a href="javascript:;">福利社</a>
    </nav>
</template>
<script>
    export default {
        name: 'NavList',
    }
</script>
<style scoped lang="less">
    .nav-wrap {
        position: fixed;
        top: .78rem;
        left: 0;
        z-index: 3;
        width: 100%;
        height: .9rem;
        padding-top: .02rem;
        background: #ffffff;
        box-sizing: border-box;
        box-shadow: 0 0.04rem 0.3rem rgba(0, 0, 0, .3);
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            flex: 1;
            font-size: .24rem;
            text-align: center;
            position: relative;
            line-height: .7rem;
            text-decoration: none;
            &.checked {
                color: #e50011;
                font-size: .28rem;
            }
        }
    }
    
    .nav-wrap a.checked:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        width: .5rem;
        height: .05rem;
        background: #e50011;
        display: block;
        border-radius: .03rem;
    }
</style>