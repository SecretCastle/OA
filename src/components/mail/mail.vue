<template>
    <div style="padding-bottom: 100px;">
        <vlist :list="list" :type="type" :hasMt="hasMt"></vlist>
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
            hasMt: !0,
            list: [
                {
                    title: '公司',
                    url: './company/0',
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
        this.$store.commit('hasBack',{hasBack:!1});
        this.$store.commit('hasFoot',{hasFoot:!0});
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
