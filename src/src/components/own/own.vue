<template>
    <div>
        <vlist :list="list1" :type="type1"></vlist>
        <vlist :list="list2" :type="type2"></vlist>
    </div>
</template>
<script>
import vlist from "@/libs/list";
export default {
    name: 'own',
    components: { vlist },
    data() {
        return {
            type1: '2',
            list1: [
                {
                    Name: '',
                    postName: '',
                    src: ''
                }
            ],
            type2: '3',
            list2: [
                {
                    title: '我的权限',
                    desc: '管理员分配的权限',
                    icon: 'icon-myPermission'
                },
                {
                    title: '设置',
                    desc: '',
                    icon: 'icon-selfinfo-setting'
                }
            ]
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','我');
        this.$store.commit('rightTab',"");
        this.$store.commit('hasBack',{hasBack:false});
        this.$store.commit('hasFoot',{hasFoot:true});

        var that = this;
        var empId = localStorage.getItem("UserId")
        $ajax.get('/UserApi/GetEmp?empId='+ empId)
        .then(res=>{
            console.log(res)
            that.src = res.data.Avatar;
            that.Name = res.data.Name;
            that.postName = res.data.postName;
            // that.list1 = res.
        })
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
</style>
