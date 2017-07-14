<template>
    <div>
        <vlist :header="headerD" :list="listD" :type="typeD" :checkAble="checkAble" @get-radio-value="getValue"></vlist>
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
        this.$store.commit('hasBack',{hasBack:!0});
        this.$store.commit('hasFoot',{hasFoot:!1});

        var that = this;
        this.$store.commit('rightFn',function(){
            that.submit();
        });

        var DepartName = localStorage.getItem("DepartName");
        // console.log(this.$route.params.id)
        $ajax.get('/UserApi/getDepartList?parentDepartId=' + this.$route.params.id)
        .then(res=>{
            console.log(res)
            var Departs = res.data.Departs;
            for(var i in Departs){
                Departs[i].title = Departs[i].Name;
                Departs[i].url = './' + Departs[i].Id;
                Departs[i].checked = !1;
                if(Departs[i].Name===DepartName){
                    Departs[i].checked = !0;
                }
            }
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
        },
        submit(){
            var departName='';
            for(var i=0,lenI=this.listD.length;i<lenI;i++){
                if(this.listD[i].Id===this.valD){
                    departName = this.listD[i].Name;
                    break;
                }
            }
            var DepartItem = JSON.stringify({Id:this.valD,Name:departName});
            localStorage.setItem("DepartItem",DepartItem);
            // console.log($router)
            // $router.go();
            $router.replace('/Own/OwnInfoEdit/PostName');
        }
    },
    destroyed() {
        localStorage.removeItem("DepartName");
    }
}
</script>
<style scoped>
</style>
