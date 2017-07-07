<template>
    <div>
        <vlist :header="headerD" :list="listD" :type="typeD"></vlist>
        <div class="space"></div>
        <vlist :header="headerE" :list="listE" :type="typeE"></vlist>
    </div>
</template>
<script>
import vlist from '@/libs/list';
export default {
    name: 'Company',
    components: { vlist },
    data() {
        return {
            typeD: 'radio1',
            headerD: '部门',
            listD: [],
            typeE: 'radio2',
            headerE: '联系人',
            listE: [],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('rightTab',"编辑部门");
        this.$store.commit('hasFoot',{hasFoot:false});

        var that = this;
        $ajax.get('/UserApi/getDepartList?parentDepartId=' + this.$route.params.pid)
        .then(res=>{
            console.log(res)
            var Departs = res.data.Departs,
                Employees = res.data.Employees;
            for(var i in Departs){
                Departs[i].title = Departs[i].Name;
                Departs[i].url = './' + Departs[i].Id;
            }
            that.listD = Departs;
            for(var i in Employees){
                Employees[i].Avatar = Employees[i].Avatar;
                Employees[i].title = Employees[i].Name;
                Employees[i].desc = Employees[i].PostName;
                Employees[i].url = '../emp/' + Employees[i].Id;
            }
            that.listE = res.data.Employees;
            var pTitle = res.data.Name ? res.data.Name : '公司'
            this.$store.commit('getTitle',pTitle);
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