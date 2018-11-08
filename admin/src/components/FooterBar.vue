<template>
    <div>
        <footer class="footer">
            <router-link to='/home' tag='a'>
                <dl class="f-home on">
                    <dt></dt>
                    <dd></dd>
                    首页
                </dl>
            </router-link>
            <li class="f-cart" @click="visibility=true">
                <div>
                    <img src="https://m.lechun.cc/images/member/f-cart.png" alt="">
                </div>
                <span>购物袋</span>
            </li>
            <router-link to='/personal' active-class='active' tag='a'>
                <dl class="f-my">
                    <dt></dt>
                    <dd></dd>
                    我的
                </dl>
            </router-link>
        </footer>
        <CarBox :visibility.sync="visibility"/>
    </div>

</template>
<script>
    import CarBox from './CarBox.vue'
    export default {
        name: 'FooterBar',
        data(){
            return{
                visibility:false
            }
        },
        components: {
            CarBox
        },

    }
</script>
<style scoped lang='less'>
    .footer {
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        padding-bottom: 9px;
        display: flex;
        background: #fff;
    }

    a {
        flex: 1;
        height: 100%;
        text-align: center;
        color: #3f4359;
    }

    dl {
        text-align: center;
        padding-top: 0.3rem;
        font-size: 0.18rem;
        height: .36rem;
    }

    dl.f-home {
        width: 100%;
        height: 100%;
        background: url('https://sta.maodou.com/xinche_wap/static/images/Home1@3x.1f2a6f6a.png') center 0.2rem no-repeat;
        ;
        background-size: 0.42rem 0.42rem;
        color: #101010;
    }

    .f-cart {
        position: relative;
        padding-top: .52rem;
        top: -61px;
        div {
            width: 100px;
        }
        span {
            position: absolute;
            bottom: -51px;
            left: 32px;
            font-size: 0.2rem;
        }
    }

    dl.f-home.on {
        background: url(https://m.lechun.cc/images/member/f-home-on.png) center .2rem no-repeat;
        background-size: .42rem .42rem;
        color: #e0433d!important;
    }

    .f-my {
        background: url('https://m.lechun.cc/images/member/f-my.png') center -.02rem no-repeat;
        background-size: 0.42rem 0.42rem;
        color: #101010;
    }

    dd {
        font-size: .28rem;
        margin-top: 3px;
    }

    dt {
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>