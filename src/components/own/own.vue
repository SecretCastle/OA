<template>
    <div style="padding-bottom: 100px;">
        <vlist :list="list1" :type="type1" :hasMt="hasMt"></vlist>
        <vlist :list="list2" :type="type2" :hasMt="hasMt"></vlist>
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
            hasMt: !0,
            list1: [
                {
                    Name: '',
                    PostName: '',
                    src: '',
                    url: ''
                }
            ],
            type2: '3',
            hasMt: !0,
            list2: [
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
        this.$store.commit('getTitle','我');
        this.$store.commit('rightTab',"");
        this.$store.commit('hasBack',{hasBack:false});
        this.$store.commit('hasFoot',{hasFoot:true});

        var that = this;
        var empId = localStorage.getItem("UserId")
        $ajax.get('/UserApi/GetEmp?empId='+ empId)
        .then(res=>{
            console.log(res)
            that.list1[0].Avatar = res.data.Avatar;
            that.list1[0].Name = res.data.Name;
            that.list1[0].PostName = res.data.PostName;
            that.list1[0].url = './OwnInfo/' + empId;
        })
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
</style>
