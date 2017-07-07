<template>
    <div>
        <vlist :header="headerD" :list="listD" :type="typeD" :checkAble="checkAble" @radio="getValue"></vlist>
    </div>
</template>
<script>
import vlist from '@/libs/list';
export default {
    name: 'Depart',
    components: { vlist },
    data() {
        return {
            typeD: 'radio1',
            checkAble: !0,
            headerD: '部门',
            listD: [],
            valD: ''
        }
    },
    created() {},
    mounted() {
        this.$store.commit('rightTab',"确定");
        this.$store.commit('hasBack',{hasBack:true});
        this.$store.commit('hasFoot',{hasFoot:false});

        // console.log(this.$route.params.id)
        $ajax.get('/UserApi/getDepartList?parentDepartId=' + this.$route.params.id)
        .then(res=>{
            console.log(res)
            var Departs = res.data.Departs;
            for(var i in Departs){
                Departs[i].title = Departs[i].Name;
                Departs[i].url = './' + Departs[i].Id;
                Departs[i].checked = !1;
            }
            console.log(this.valD)
            this.listD = Departs;
            var pTitle = res.data.Name ? res.data.Name : '公司'
            this.$store.commit('getTitle',pTitle);
        })
        .catch(function (err) {
            console.log(err);
        });
    },
    computed: {},
    methods: {
        getValue(val){
            this.valD = val;
        }
    },
    destroyed() {}
}
</script>
<style scoped>
</style>
