<template>
    <div>
        <vlist :list="list" :type="type"></vlist>
    </div>
</template>
<script>
import vlist from '@/libs/list';
export default {
    name: 'Company',
    components: { vlist },
    data() {
        return {
            parentDepartId: 0,
            type: '1',
            list: [],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','公司');
        this.$store.commit('getMenus',{menu1:"编辑部门"});

        var that = this;
        // this.parentDepartId = this.$route.params.parentDepartId;
        console.log(this.$route.params)
        $ajax.get('/UserApi/getDepartList?parentDepartId=' + this.parentDepartId)
        .then(res=>{
            console.log(res)
            for(var i in res.data.Departs){
                res.data.Departs[i].url= '?parentDepartId=' + res.data.Departs[i].Id
            }
            that.list = res.data.Departs;
        })
        .catch(function (err) {
            console.log(err);
        });
    },
    computed: {},
    methods: {
    },
    destroyed() {}
}
</script>
<style scoped>
</style>