<template>
    <section class="adv-banner-wrap">
        <p>
            <em>◦</em>
             120万
             <sup>+</sup>
             口碑推荐
        </p>
        <p>
            <em>◦</em>
             五星级酒店的选择
        </p>
        <p>
            <em>◦</em>
             超模也爱的明星酸奶
        </p>
    </section>
</template>
<script>
    export default {
        name: 'AdvBanner'
    }
</script>
<style scoped lang="less">
    .adv-banner-wrap {
        background: #ffffff;
        display: -webkit-box;
        -webkit-box-pack: justify;
        -webkit-box-align: center;
        font-size: .2rem;
        padding: .2rem .33rem .1rem;
        box-sizing: border-box;
        p {
            flex: 1;
            text-align: center;
        }
    }
</style>