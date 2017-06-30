<template>
    <div>
        <x-header style="background: #000;" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{ title }}</x-header>
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
            // title: '',
            // menus: {
            //     menu1: 'Take Photo',
            //     menu2: 'Choose from photos'
            // },
            showMenus: false
        }
    },
    computed: {
        ...mapState({
            title: state => state.vux.title,
            menus: state => state.vux.menus
        })
    }
}
</script>
<style scoped>
</style>
