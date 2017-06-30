<template>
    <div>
        <!-- <panel header="" :list="list" :type="type"></panel> -->
        <vlist :list="list" :type="type"></vlist>
    </div>
</template>
<script>
import { vlist } from '@/libs/list';
import { Panel } from 'vux';
export default {
    name: 'Company',
    components: { Panel, vlist },
    data() {
        return {
            type: '1',
            list: [
                {
                    icon: 'iconfont icon-user',
                    Name: '姓名',
                    PostName: '职位',
                    url: 'http://www.baidu.com',
                    src: '111',
                }
            ],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','公司');
        this.$store.commit('getMenus',{menu1:"编辑部门"});

        var that = this;
        var UserId = localStorage.getItem("UserId");
        var Token = localStorage.getItem("Token");
        var parentDepartId = 0;
        var data = { parentDepartId:parentDepartId, UserId:UserId, Token:Token }
        console.log(data)
        $ajax.get('/UserApi/getDepartList',{params:data})
        .then(res=>{
            console.log(res)
            var arr = [];
            arr = res.data.Departs;
            for(var i in arr){
                arr[i].title = arr[i].Name
            }
            that.list = arr;
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
