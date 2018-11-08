<template>
    <div class="time">
        <group :title="value[0]">
            <datetime-range :title="value[0]" start-date="2017-01-01" end-date="2017-02-02" v-model="value" @on-change="onChange">
            </datetime-range>
        </group>
    </div>
</template>
<script>
    import { DatetimeRange, Group } from 'vux'
    export default {
        name: 'DeliveryDate',
        components: {
            Group,
            DatetimeRange
        },
        methods: {
            onChange(val) {
                // console.log('change', val)
            }
        },
        data() {
            return {
                value: ['2017-01-15', '03', '05']
            }
        }
    }
</script>
<style lang="less">
    .time {
        .weui-cells__title {
            display: none;
        }
        .weui-cell__hd{
            display: none;
        }
    }
</style>