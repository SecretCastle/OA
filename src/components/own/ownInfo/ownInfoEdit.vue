<template>
    <group>
        <x-input v-model="val" required :placeholder="placeholder"></x-input>
    </group>
</template>
<script>
import { Group, XInput } from 'vux';
export default {
    name: 'ownInfoEdit',
    components: { Group, XInput },
    data() {
        return {
            val: '',
            placeholder: '',
            list: [
                {
                    id: 'Name',
                    placeholder: '请输入您的姓名'
                },
                {
                    id: 'Gender',
                    placeholder: '请输入您的性别'
                },
                {
                    id: 'PostName',
                    placeholder: '请输入您的职位'
                },
                {
                    id: 'JobNo',
                    placeholder: '请输入您的工号'
                },
                {
                    id: 'Contact',
                    placeholder: '请输入您的联系方式'
                },
                {
                    id: 'Email',
                    placeholder: '请输入您的邮箱'
                },
                {
                    id: 'Address',
                    placeholder: '请输入您的地址'
                }
            ],
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('getTitle','个人信息编辑');
        this.$store.commit('rightTab',"完成");
        this.$store.commit('hasBack',{hasBack:true});
        this.$store.commit('hasFoot',{hasFoot:false});

        var that = this;
        console.log(this.$route.params)
        $ajax.get('/UserApi/GetEmp?empId='+ localStorage.getItem("empId"))
        .then(res=>{
            console.log(res)
            var list = that.list,
                id = that.$route.params.val;
            for(var i=0,lenI=list.length;i<lenI;i++){
                if(list[i].id===id){
                    that.placeholder = list[i].placeholder;
                }
            }
            if(id=="Name"){
                that.val = res.data.Name;
                this.submit(id,that.val);
            }else if(id=="Gender"){
                that.val = res.data.Gender
            }else if(id=="PostName"){
                that.val = res.data.PostName
            }else if(id=="JobNo"){
                that.val = res.data.JobNo
            }else if(id=="Contact"){
                that.val = res.data.Contact
            }else if(id=="Email"){
                that.val = res.data.Email
            }else if(id=="Address"){
                that.val = res.data.Address
            }
        })
    },
    computed: {
    },
    methods: {
        submit(api,val){
            $ajax.post('/UserApi/setRealname',{EmpUserId:localStorage.getItem("empId"),Name:val})
            .then(res=>{
                console.log(res)
            })
        }
    },
    destroyed() {}
}
</script>
<style scoped>
</style>
