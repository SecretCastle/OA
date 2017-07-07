<template>
<div class="oie">
    <group>
        <radio v-if="type==='Gender'" :options="options" v-model="val" @on-change="chooseGender"></radio>
        <div v-else-if="type==='Contact'">
            <x-input v-for="(item,index) in Contact" :key="index" :title="item.Type" v-model="item.Value" placeholder="请输入联系方式" keyboard="number" required :readonly="index===0">
                <i :id="index" v-if="index>0" class="iconfont icon-del3" slot='right' @click="delContact"></i>
            </x-input>
        </div>
        <div v-else-if="type==='PostName'">
            <div @click="choose"><x-input title="部门" v-model="DepartName" placeholder="请选择您的部门" text-align="right" required :show-clear="!1" readonly class="odn">
                <div slot='right' class="weui-arr"></div>
            </x-input></div>
            <x-input title="职位" v-model="PostName" placeholder="请输入您的职位" required></x-input>
        </div>
        <x-input v-else v-model="val" required :placeholder="placeholder" @on-change="inputs"></x-input>
    </group>
    <div v-if="type==='Contact'" class="adc" @click.prevent="addContact">添加号码</div>
</div>
</template>
<script>
import { Group, XInput, Radio } from 'vux';
export default {
    name: 'ownInfoEdit',
    components: { Group, XInput, Radio },
    data() {
        return {
            type: '',
            val: '',
            placeholder: '',
            list: [
                {
                    id: 'Name',
                    name: '姓名',
                    placeholder: '请输入您的姓名'
                },
                {
                    id: 'Gender',
                    name: '性别',
                    placeholder: '请输入您的性别'
                },
                {
                    id: 'PostName',
                    name: '部门职位',
                    placeholder: '请输入部门职位'
                },
                {
                    id: 'JobNo',
                    name: '工号',
                    placeholder: '请输入您的工号'
                },
                {
                    id: 'Contact',
                    name: '联系方式',
                    placeholder: '请输入您的联系方式'
                },
                {
                    id: 'Email',
                    name: '邮箱',
                    placeholder: '请输入您的邮箱'
                },
                {
                    id: 'Address',
                    name: '地址',
                    placeholder: '请输入您的地址'
                }
            ],
            options: [ '男', '女'],
            Contact: [],
            DepartName: '',
            DepartmentId: 0,
            PostName: '',
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('rightTab',"完成");
        this.$store.commit('hasBack',{hasBack:true});
        this.$store.commit('hasFoot',{hasFoot:false});

        this.type = this.$route.params.val;
        console.log(this.type)

        var that = this;
        if(this.type==='Contact'){
            this.$store.commit('rightFn',function(){
                that.submit(id,that.Contact);
            });
        }else{
            this.$store.commit('rightFn',function(){
                that.submit(id,that.val);
            });
        }

        var list = this.list,
            id = this.$route.params.val;
        $ajax.get('/UserApi/GetEmp?empId='+ localStorage.getItem("empId"))
        .then(res=>{
            console.log(res)
            for(var i=0,lenI=list.length;i<lenI;i++){
                if(list[i].id===id){
                    this.placeholder = list[i].placeholder;
                    this.$store.commit('getTitle','编辑' + list[i].name);
                }
            }
            if(id==="Name"){
                id = "RealName";
                this.val = res.data.Name;
            }else if(id==="Gender"){
                this.val = res.data.Gender===0 ? '男' : '女';
            }else if(id==="PostName"){
                this.PostName = res.data.PostName;
                this.DepartName = res.data.DepartmentName;
            }else if(id==="JobNo"){
                this.val = res.data.JobNo;
            }else if(id==="Contact"){
                this.Contact = JSON.parse(res.data.Contact);
                console.log(this.Contact)
            }else if(id==="Email"){
                this.val = res.data.Email;
            }else if(id==="Address"){
                this.val = res.data.Address;
            }
        })
    },
    computed: {
    },
    methods: {
        submit(api,val){
            var params = {};
            if(api === "RealName"){
                params = {EmpUserId:localStorage.getItem("empId"),Name:val}
            }else if(api === 'JobNo'){
                params = {EmpUserId:localStorage.getItem("empId"),JobNo:val}
            }else if(api === 'Gender'){
                val = val==='男' ? 0 : 1;
                params = {EmpUserId:localStorage.getItem("empId"),Gender:val}
            }else if(api === 'PostName'){
                params = {EmpUserId:localStorage.getItem("empId"),PostName:val}
            }else if(api === 'JobNo'){
                params = {EmpUserId:localStorage.getItem("empId"),JobNo:val}
            }else if(api === 'Contact'){
                var arr = []
                for(var i=0;i<val.length;++i){
                    if(val[i].Value){
                        arr.push(val[i])
                    }
                }
                params = {EmpUserId:localStorage.getItem("empId"),Contact:arr}
            }else if(api === 'Email'){
                params = {EmpUserId:localStorage.getItem("empId"),Email:val}
            }else if(api === 'Address'){
                params = {EmpUserId:localStorage.getItem("empId"),Address:val}
            }else{}
            $ajax.post('/UserApi/set'+ api,params)
            .then(res=>{
                console.log(res)
                if(res.data.Success){
                    this.$vux.toast.show({
                        text: res.data.Message,
                        type: 'success'
                    })
                    setTimeout(()=>{
                        this.$router.go(-1)
                    },2e3)
                }else{
                    this.$vux.toast.show({
                        text: res.data.Message,
                        type: 'cancel'
                    })
                    return !1
                }
            })
        },
        inputs(val){
            this.val = val;
        },
        chooseGender(val){
            this.val = val==='男' ? 0 : 1;
            console.log(this.val)
        },
        delContact(e){
            console.log(e.target.id);
            this.Contact.splice(e.target.id,1);
        },
        addContact(){
            var obj = { Type: '电话', Value: '' };
            console.log(this.Contact.length)
            if(this.Contact.length<3){
                this.Contact.push(obj);
            }else{
                this.$vux.toast.show({
                    text: '最多只能设置3个联系方式',
                    type: 'cancel'
                })
                return !1;
            }
        },
        choose(){
            $router.push('../../../list/depart/0');
        }
    },
    destroyed() {}
}
</script>
<style scoped>
    .oie .icon-del3::before { content:"\e625"; color:#fc3e39; }
    .oie .adc { display: block; width: 80%; height: 35px; margin: 20px auto; background: #4582d5; border-radius: 3px; color: #fff; text-align: center; line-height: 35px; }
    .odn { padding-right: 45px; }
    .odn .weui-arr { position: absolute; right: 25px; }
</style>
