<template>
    <div>
        <x-header style="background: #000;" :left-options="{showBack:hasBack}" :right-options="{showMore: false}" @on-click-more="showMenus = true">{{ title }}<a v-if="rightTab" @click='rightFnTest' slot="right">{{ rightTab }}</a></x-header>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>
    </div>
</template>
<script>
    import {
        XHeader,
        Actionsheet,
        TransferDom
    } from 'vux';
    import {
        mapState
    } from 'vuex';
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
                showMore: state => state.vux.showMore,
                rightTab: state => state.vux.rightTab,
                hasBack: state => state.vux.hasBack,
                rightFn: state => state.vux.rightFn
            })
        },
        methods: {
            rightFnTest() {
                this.rightFn();
            }

        }
    }
</script>
<style scoped>

</style>