<template>
    <div>
        <x-header style="background: #000;" :left-options="{showBack:hasBack}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{ title }}</x-header>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>
    </div>
</template>
<script>
import { XHeader, Actionsheet, TransferDom } from 'vux';
import { mapState } from 'vuex';
export default {
    name: 'head',
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Actionsheet
    },
    data() {
        return {
            showMenus: false
        }
    },
    computed: {
        ...mapState({
            title: state => state.vux.title,
            menus: state => state.vux.menus,
            hasBack: state => state.vux.hasBack
        })
    }
}
</script>
<style scoped>
</style>