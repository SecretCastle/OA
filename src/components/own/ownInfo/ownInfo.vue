<template>
    <group class="ownInfo">
        <cell v-for="(item,index) in list" :key="item.index" :id="item.id" :title="item.title" primary="content" :link="item.url">
            <img v-if="index==0" class="avatar" slot="value" :src="item.value" alt="" />
            <span v-else slot="value" v-html="item.value"></span>
        </cell>
    </group>
</template>
<script>
import { Group, Cell } from 'vux';
export default {
    name: 'ownInfo',
    components: { Group, Cell },
    data() {
        return {
            list: [
                {
                    id: 'Avatar',
                    title: '头像',
                    value: '',
                    url: '?'
                },
                {
                    id: 'Name',
                    title: '姓名',
                    value: '',
                    url: ''
                },
                {
                    id: 'Gender',
                    title: '性别',
                    value: '',
                    url: ''
                },
                {
                    id: 'Company',
                    title: '公司',
                    value: '安徽网新科技有限公司<br />帐号：10001',
                    url: '?'
                },
                {
                    id: 'PostName',
                    title: '部门职位',
                    value: '',
                    url: ''
                },
                {
                    id: 'JobNo',
                    title: '工号',
                    value: '',
                    url: ''
                },
                {
                    id: 'Contact',
                    title: '联系方式',
                    value: '1',
                    url: ''
                },
                {
                    id: 'Email',
                    title: '邮箱',
                    value: '',
                    url: ''
                },
                {
                    id: 'Address',
                    title: '地址',
                    value: '',
                    url: ''
                },
                {
                    id: 'JoinTimeStr',
                    title: '入职时间',
                    value: '',
                    url: '?'
                },
            ],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','个人信息');
        this.$store.commit('rightTab',"");
        this.$store.commit('hasBack',{hasBack:true});
        this.$store.commit('hasFoot',{hasFoot:false});

        var that = this;
        var empId = this.$route.params.empId;
        localStorage.setItem("empId",empId);
        $ajax.get('/UserApi/GetEmp?empId='+ empId)
        .then(res=>{
            console.log(res)
            var list = that.list;
            for(var i = 0,lenI=list.length;i<lenI;i++){
                if(list[i].url===''){
                    list[i].url = '../ownInfoEdit/' + list[i].id
                }
            }
            list[0].value = res.data.Avatar;
            list[1].value = res.data.Name;
            list[2].value = res.data.Gender===0 ? '男' : '女';
            list[4].value = res.data.DepartmentName + " " + res.data.PostName;
            list[5].value = res.data.JobNo;
            var ContactList = JSON.parse(res.data.Contact),
                contact ='';
            for(var i=0, lenI=ContactList.length; i<lenI; i++){
                contact += ContactList[i].Type + "：" + ContactList[i].Value + "\n";
            }
            list[6].value = contact.replace(/\n/,"<br />");
            list[7].value = res.data.Email;
            list[8].value = res.data.Address;
            list[9].value = res.data.JoinTimeStr;
        })
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
.ownInfo .weui-cell { min-height: 40px; }
.ownInfo .avatar { display: inline-block; width: 50px; height: 50px; border-radius: 100%; }
.ownInfo .weui-cell_access .weui-cell__ft { padding-right: 25px; }
</style>
