<template>
    <div class="login-form">
        <img src="https://m.lechun.cc/images/login/login-bg.png" alt="" class="login-pic">
        <section class="login-content">
            <div class="login-item">
                <label for="pbone" class="icon-phone"></label>
                <input type="text" v-model="phone" id="pbone" placeholder="手机号码" ref="phone">
                <i class="icon-close" style="">✕</i>
            </div>
            <div class="login-item">
                <label for="code" class="icon-code"></label>
                <input type="text" v-model="code" placeholder="短信验证码" id="code" ref="code">
                <template v-if="time==0">
                    <button :disabled="!isCode" @click="getCode" class="get-code">获取验证码</button>
                </template>
                <template v-else>
                    <button :disabled="false" class="get-code">{{time}}秒后重新获取</button>
                </template>
            </div>
            <button @click="login" class="login-btn">登陆</button>
        </section>
    </div>
</template>
<script>
    import Fetch from '../../utiles/fetch.js'
    import api from '../../api/index.js'
    export default {
        name: 'Login',
        data() {
            return {
                phone: '',
                code: '',
                time: 0,
                timer: ''
            }
        },
        computed: {
            isCode() {
                const reg = /\d{11}/
                return reg.test(this.phone)
            },

        },
        methods: {
            getCode() {
                this.time = 60
                api.user.code('/api/msgCode', {
                    phone: this.phone
                }).then((res) => {
                    this.timer = setInterval(() => {
                        this.time -= 1;
                        if (this.time === 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)
                })
                // fetch('/api/msgCode/?phone=' + this.phone, {
                //     credentials: 'include',
                //     method: 'get',
                // }).then((res) => {
                //     return res.json()
                // }).then((data) => {
                //     console.log(data)
                //     this.timer = setInterval(() => {
                //         this.time -= 1;
                //         if (this.time === 0) {
                //             clearInterval(this.timer)
                //         }
                //     }, 1000)
                // })
            },
            login() {
                // this.$store.dispatch('User/login', {
                //         phone: this.phone,
                //         code: this.code
                //     }).then((res) => {
                //         this.$router.replace('/home')
                //             // if (this.$router.query.successUrl) {
                //             //     this.$router.replace(this.$router.query.successUrl)
                //             //         // this.$router.replace('/home')
                //             // } else {
                //             //     this.$router.replace('/home')
                //             // }
                //     })

                //
                // api.user.login('/api/login', {
                //         phone: this.phone,
                //         code: this.code
                //     }).then((res) => {
                //         console.log(res)
                //         // this.$router.replace('/home')
                //             // console.log(this.$router.query.successUrl)
                //             // if (this.$router.query.successUrl) {
                //             //     this.$router.replace(this.$router.query.successUrl)
                //             // } else {
                //             //     this.$router.replace('/home')
                //             // }

                //     })
                Fetch.post('/api/login', {
                    phone: this.phone,
                    code: this.code
                }).then((res) => {
                    if(this.$refs['phone'].value==this.phone&&this.$refs['code'].value==this.code){
                        this.$router.replace('/personal')
                    }
                })
                // fetch('/api/login', {
                //     method: 'POST',
                //     body: JSON.stringify({
                //         phone: this.phone,
                //         code: this.code
                //     }),
                //     credentials: 'include',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // }).then(async(res) => {
                //     if (res.ok) {
                //         return res.json()
                //     } else {
                //         const data = await res.json()
                //             // console.log(data)
                //         return Promise.reject(new Error(data.msg))
                //     }
                // }).then((data) => {
                //     this.$router.replace('/home')
                // }).catch((e) => {
                //     console.log(e.message)
                //         // return e.message()
                // })
            }
        }
    }
</script>
<style scoped lang="less">
    .login-form {
        width: 6rem;
        margin: .9rem auto;
    }

    .login-content {
        margin: .5rem 0 .8rem;
        .login-item {
            display: -webkit-box;
            -webkit-box-pack: justify;
            border-bottom: 1px solid #b2b2b2;
            height: 1rem;
            -webkit-box-align: center;
            -webkit-align-content: center;
            label {
                width: .28rem;
                height: .34rem;
                display: block;
                &.icon-phone {
                    background: url('https://m.lechun.cc/images/login/login-phone.png') top left no-repeat;
                    background-size: 100% auto;
                }
                &.icon-code {
                    background: url('https://m.lechun.cc/images/login/login-code.png') top left no-repeat;
                    background-size: 100% auto;
                }
            }
            input {
                -webkit-box-flex: 1;
                display: block;
                margin: 0 .2rem;
                padding: 0;
                border: 0;
                outline: 0;
                background: 0 0;
                color: #898989;
                -webkit-tap-highlight-color: transparent;
                -webkit-user-modify: read-write-plaintext-only;
                -webkit-appearance: none;
                font-size: .26rem;
            }
            .icon-close {
                position: relative;
                top: .1rem;
                width: .36rem;
                height: .36rem;
                display: block;
                background: #222222;
                border-radius: .19rem;
                color: #ffffff;
                text-align: center;
                line-height: .36rem;
                font-style: normal;
                font-size: .24rem;
                margin-right: .2rem;
            }
            .get-code {
                width: 1.8rem;
                display: block;
                border-left: 1px solid #b2b2b2;
            }

        }
        .login-btn {
            width: 100%;
            height: .86rem;
            text-align: center;
            line-height: .86rem;
            border-radius: .2rem;
            background: #202020;
            font-size: .3rem;
            color: #ffffff;
            margin-top: 0.3rem;
        }
    }

    button {
        -webkit-appearance: none;
        border: none;
        background: none;
        outline: none;
        padding: 0;
    }

    .login-pic {
        width: 3rem;
        display: block;
        margin: 0 auto;
    }
</style>