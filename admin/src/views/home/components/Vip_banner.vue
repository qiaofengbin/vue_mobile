<template>
    <section class="enter-wrap">
        <ul>
            <li data-ca="进入会员中心">
                <a href="/page/vip/vip-level.html?lcjiance=Vip_Index" data-ca="进入会员中心">
                    <i class="icon-vip"><img src="https://m.lechun.cc/images/index/index-icon-vip.png" alt=""></i> 
                    <h5>会员专享</h5>
                    <p><b>福利</b>发放中</p>
                </a>
            </li>
            <li data-ca="进入储值页面">
                <a href="/account/balance.html?lcjiance=22" data-ca="进入储值页面">
                    <i class="icon-balance"><img src="https://m.lechun.cc/images/index/index-icon-balance.png" alt=""></i> 
                    <h5>储值有礼</h5>
                    <p>低至<b>95折</b></p>
                </a>
            </li>
            <li data-ca="进入包月页面" style="">
                <a href="/account/mouthly_index.html?lcjiance=24" data-ca="进入包月页面">
                    <i class="icon-long"><img src="https://m.lechun.cc/images/index/index-icon-long.png" alt=""></i>
                    <h5>包月套餐</h5>
                     <p>最高省<b>600元</b></p>
                </a>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'VipBanner'
    }
</script>
<style scoped lang="less">
    .enter-wrap {
        background: #ffffff;
        ul {
            display: flex;
            padding: .2rem .1rem;
            li {
                flex: 1;
                text-align: center;
                a {
                    background-color: transparent;
                    text-decoration: none;
                    color: #494949;
                    i {
                        img {
                            width: 44px;
                            height: 44px;
                        }
                    }
                }
            }
        }
    }
    
    .enter-wrap h5 {
        font-size: .22rem;
        line-height: .44rem;
        font-weight: normal;
        color: #222222;
        margin-bottom: -.05rem;
    }
    
    .enter-wrap p {
        font-size: .2rem;
        color: #999999;
    }
    
    .enter-wrap p b {
        color: #e50011;
        font-weight: normal;
    }
</style>