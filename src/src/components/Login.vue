<template>
    <div>
        <div class="banner">
            <img src="../assets/banner.jpg">
            <img class="logo" src="../assets/logo1.png">
        </div>
        <group>
            <x-input v-model="Tel" name="Tel" id="Tel" required placeholder="手机号" keyboard="number" :max="11" is-type="china-mobile" show-clear @on-focus="focusTel" @on-blur="blurTel">
                <i slot="label" class="weui-input-icon iconfont icon-user"></i>
            </x-input>
            <x-input v-model="Password" name="Password" id="pass" :type=" isPwd ? 'password' : 'text' " required placeholder="密码" show-clear @on-focus="focusPass" @on-blur="blurPass">
                <i slot="label" class="weui-input-icon iconfont icon-pass"></i>
                <i slot="right" @click="showPass" class="weui-input-icon iconfont icon-eye"></i>
            </x-input>
        </group>
        <x-button @click.native="loginApi" class="submit" text="登录"></x-button>
    </div>
</template>
<script>
import { Group, XInput, XButton } from 'vux'
export default {
    name: 'Login',
    components: { Group, XInput, XButton },
    data() {
        return {
            Tel: '',
            Password: '',
            isPwd: true
        }
    },
    created() {},
    mounted() {
        this.$store.commit('hasFoot',{hasFoot:false});
        this.$store.commit('hasBack',{hasBack:false});
    },
    computed: {},
    methods: {
        loginApi() {
            var data = { Tel: this.Tel, Password: this.Password }
            $api.post('/UserApi/login', data)
            .then(res => {
                console.log(res)
                if (res.data.Success) {
                    localStorage.setItem("Token", res.data.Data.Token);
                    localStorage.setItem("UserId", res.data.Data.UserId);
                    $router.push('msg/Msg')
                } else {
                    console.log(res.data.Message)
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        showPass(){
            this.isPwd = !this.isPwd;
            $('.icon-eye').toggleClass('blue')
        },
        focusTel(){
            $("#Tel").find('.icon-user').addClass('blue');
        },
        focusPass(){
            $("#pass").find('.icon-pass').addClass('blue');
        },
        blurTel(){
            $("#Tel").find('.icon-user').removeClass('blue');
        },
        blurPass(){
            $("#pass").find('.icon-pass').removeClass('blue');
        }
    },
    destroyed() {}
}
</script>
<style scoped>
    .banner { position: relative; text-align: center; }
    .logo { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); }
    .submit { margin: 30px auto; }
    .icon-eye { margin-right: 0; }
    .blue:before { color: #1296db; }
</style>
