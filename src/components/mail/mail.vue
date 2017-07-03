<template>
    <div style="padding-bottom: 100px;">
        <vlist :list="list" :type="type"></vlist>
    </div>
</template>
<script>
import vlist from '@/libs/list';
export default {
    name: 'mail',
    components: { vlist },
    data() {
        return {
            type: '3',
            list: [
                {
                    title: '公司',
                    url: 'company/0',
                    icon: 'icon-company'
                },
            ],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','通讯录');
        this.$store.commit('rightTab',"手动添加员工");
        this.$store.commit('hasBack',{hasBack:false});
        this.$store.commit('hasFoot',{hasFoot:true});
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
/*　这个样式无效？？？ */
.icon-company { background: #000; }
</style>
