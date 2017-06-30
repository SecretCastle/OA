<template>
    <tabbar v-if="hasFoot">
        <tabbar-item link="/msg/msg">
            <!-- <i slot="icon" icon-class="iconfont icon-user" icon-active=""></i> -->
            <img slot="icon" src="../assets/images/icon_msg_on.png">
            <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item show-dot link="/mails/mails">
            <img slot="icon" src="../assets/images/icon_mailList_on.png">
            <span slot="label">通讯录</span>
        </tabbar-item>
        <tabbar-item link="/app/app">
            <img slot="icon" src="../assets/images/icon_app_on.png">
            <span slot="label">应用</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/own/own">
            <img slot="icon" src="../assets/images/icon_own_on.png">
            <span slot="label">我</span>
        </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux';
import { mapState } from 'vuex';
export default {
    name: 'foot',
    components: {
        Tabbar,
        TabbarItem
    },
    computed: {
        ...mapState({
            hasFoot: state => state.vux.hasFoot
        })
    }
}
</script>
<style scoped>
    .weui-tabbar { position: fixed; max-width: 720px; margin: 0 auto; background: #003680; }
    .weui-tabbar__label span { color: #fff; opacity: .6; }
    .weui-tabbar__icon img { opacity: .6; }
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label span,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon img { opacity: 1; }
</style>
