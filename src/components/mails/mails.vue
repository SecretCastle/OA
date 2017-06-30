<template>
    <div>
        <panel header="" :list="list" :type="type"></panel>
    </div>
</template>
<script>
import icon_company from '../../assets/images/icon_company.png';
import { Panel } from 'vux';
export default {
    name: 'mails',
    components: { Panel },
    data() {
        return {
            type: '3',
            list: [
                {
                    src: icon_company,
                    title: '公司',
                    desc: '',
                    url: 'company?parentDepartId=0',
                },
            ],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','通讯录');
        this.$store.commit('getMenus',{menu1:"手动添加员工"});
    },
    computed: {},
    methods: {
    },
    destroyed() {}
}
</script>
<style scoped>
</style>
