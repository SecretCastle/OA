<template>
    <div  style="padding-bottom: 100px;">
        <grid>
            <grid-item v-for="(item, index) in apps" :key="item.index" :label="item.label" :link="item.url">
                <i slot="icon" class="iconfont iconcolor" :class="item.icon"></i>
            </grid-item>
        </grid>
    </div>
</template>
<script>
import { Grid, GridItem } from 'vux'
export default {
    name: 'apps',
    components: { Grid, GridItem },
    data() {
        return {
            apps: [
                { label: '客户管理', url: '', icon: 'icon-customer' },
                { label: '地图导航', url: '', icon: 'icon-map' },
                { label: '统计分析', url: '', icon: 'icon-process' },
            ]
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','应用');
        this.$store.commit('rightTab',"");
        this.$store.commit('hasBack',{hasBack:false});
        this.$store.commit('hasFoot',{hasFoot:true});
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
.iconcolor:before { color: #f8a800; }
.weui-grid__icon { margin-bottom: 10px; }
</style>
