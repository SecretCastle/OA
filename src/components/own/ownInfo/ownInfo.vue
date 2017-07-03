<template>
    <div>
        <vlist :list="list" :type="type"></vlist>
    </div>
</template>
<script>
import vlist from "@/libs/list";
export default {
    name: 'ownInfo',
    components: { vlist },
    data() {
        return {
            type: '3',
            list: [
                {
                    title: '我的权限',
                    desc: '管理员分配的权限',
                    icon: 'icon-myPermission',
                    url: '/'
                },
                {
                    title: '设置',
                    desc: '',
                    icon: 'icon-selfinfo-setting',
                    url: '/'
                }
            ]
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','详细信息');
        this.$store.commit('rightTab',"");
        this.$store.commit('hasBack',{hasBack:true});
        this.$store.commit('hasFoot',{hasFoot:false});

        var that = this;
        // $ajax.get('/UserApi/GetEmp?empId='+ empId)
        // .then(res=>{
        //     console.log(res)
        // })
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
</style>
