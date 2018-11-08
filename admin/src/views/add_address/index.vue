<template>
    <div class="address-add-wrap">
        <template v-if="$route.query.data">
            <group title="default">
                <x-input title="联系人" placeholder="请输入姓名" v-model="this.$route.query.data.name"></x-input>
                <x-input title="手机号" placeholder="请输入手机号" v-model="this.$route.query.data.phone"></x-input>
                <x-address title="收货地址" :list="addressData" placeholder="请选择地址"></x-address>
                <x-input title="详细地址" placeholder="请输入详细地址" v-model="this.$route.query.data.address"></x-input>
                <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected" v-model="this.$route.query.data.label">
                    <h3 class="tit">选择地址标签</h3>
                    <checker-item value="住宅">住宅</checker-item>
                    <checker-item value="公司">公司</checker-item>
                    <checker-item value="学校">学校</checker-item>
                    <checker-item value="家人">家人</checker-item>
                    <checker-item value="同事">同事</checker-item>
                    <checker-item value="其他">其他</checker-item>
                </checker>
            </group>
        </template>
        <template v-else>
            <group title="default">
                <x-input title="联系人" placeholder="请输入姓名" v-model="addForm.name"></x-input>
                <x-input title="手机号" placeholder="请输入手机号" v-model="addForm.phone"></x-input>
                <x-address title="收货地址" v-model="addForm.city" :list="addressData" placeholder="请选择地址"></x-address>
                <x-input title="详细地址" placeholder="请输入详细地址" v-model="addForm.address"></x-input>
                <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected" v-model="addForm.label">
                    <h3 class="tit">选择地址标签</h3>
                    <checker-item value="住宅">住宅</checker-item>
                    <checker-item value="公司">公司</checker-item>
                    <checker-item value="学校">学校</checker-item>
                    <checker-item value="家人">家人</checker-item>
                    <checker-item value="同事">同事</checker-item>
                    <checker-item value="其他">其他</checker-item>
                </checker>
            </group>

        </template>
        <button class="save-btn" @click="add">保存</button>
    </div>
</template>
<script>
    import api from '@/api/index'
    import { Group, XAddress, XInput, Checker, CheckerItem, ChinaAddressV2Data } from 'vux'
    export default {
        name: 'AddAddress',
        data() {
            return {
                addForm: {
                    name: '',
                    phone: '',
                    city: [],
                    address: '',
                    label: '',
                },
                value: [],
                addressData: ChinaAddressV2Data,
            }
        },
        computed: {

        },
        components: {
            Group,
            XInput,
            ChinaAddressV2Data,
            XAddress,
            Checker,
            CheckerItem
        },
        created() {

        },
        methods: {
            add() {
                api.address.add(Object.assign({}, this.addForm, {
                    city: this.addForm.city.join(',')
                })).then((res) => {
                    this.$store.dispatch('User/get_address_list').then(() => {
                        if(this.addForm.name!=''&&this.addForm.phone!=''&&this.addForm.city!=''&&this.addForm.address!=''&&this.addForm.label!=''){
                            this.$router.back()
                        } else{
                            alert('请填写完整地址')
                        }
                    })
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .address-add-wrap {
        border-top: 1px solid #c3c3c3;
        padding-left: .30rem;
        font-size: .28rem;
        .demo1-item {
            border: 1px solid #ececec;
            padding: 5px 15px;
        }
        .demo1-item-selected {
            border: 1px solid green;
        }
        .tit {
            padding: 20px 0;
        }
        .save-btn {
            background: rgb(51, 51, 52);
            text-align: center;
            display: block;
            padding: 0;
            background: #c9c9c9;
            width: 6.9rem;
            line-height: .88rem;
            color: #fff;
            margin: .2rem 0;
            font-size: .36rem;
        }
    }
</style>