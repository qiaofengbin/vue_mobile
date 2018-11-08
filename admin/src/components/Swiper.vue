<template>
    <div class="swiper">
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="(item, index) in slides" :key="index">

                <img :src="item">
            </swiper-slide>
            <!-- 小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
               <div class="swiper-button-next" slot="button-next"></div>  -->
        </swiper>
    </div>
</template>
<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper';
    export default {
        name: 'Swiper',
        data() {
            return {
                slides: [
                    'http://resource2.lechun.cc/imgStorage/3192666929356045256.png',
                    'https://image.guazistatic.com/gz01180629/16/54/34edfd24cb9e2c06fb9d995eebd4dd87.png@base@tag=imgScale&w=750&h=375&q=88',
                    'https://image.guazistatic.com/gz01180704/20/26/f56f09470078d236c8dac169dbaea706.jpg@base@tag=imgScale&w=750&h=375&q=88',
                    'https://image.guazistatic.com/gz01180621/16/53/75a7e746697238ebb0e18f7117e80e96.png@base@tag=imgScale&w=750&h=375&q=88'
                ],
                //轮播config  
                swiperOption: {
                    autoplay: 1000,
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                    },
                    // navigation: {
                    //     nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
                    //     prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
                    // },
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style>
    .swiper-box {
        /* margin: 10px; */
    }

    .swiper-pagination-bullet-active {
        opacity: 1;
        background: #fff;
    }

    .swiper-item img {
        width: 100%;
        height: 166px;
    }

    .swiper-pagination {
        background: none!important;
    }

    .swiper-button-prev,
    .swiper-button-next {
        outline: none;
    }
</style>