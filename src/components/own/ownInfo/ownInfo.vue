<template>
    <group class="ownInfo">
        <cell v-for="(item,index) in list" :key="item.index" :title="item.title" primary="content" :link="linkIn">
            <img v-if="index==0" class="avatar" slot="value" :src="item.value" alt="" />
            <span v-else slot="value">{{item.value}}</span>
        </cell>
    </group>
</template>
<script>
    import {
        Group,
        Cell
    } from 'vux';
    export default {
        name: 'ownInfo',
        components: {
            Group,
            Cell
        },
        data() {
            return {
                list: [{
                    title: '头像',
                    value: '',
                    url: ''
                }, {
                    title: '姓名',
                    value: '',
                    url: ''
                }, {
                    title: '性别',
                    value: '',
                    url: ''
                }, {
                    title: '公司',
                    value: '安徽网新科技有限公司（帐号：10001）',
                    url: ''
                }, {
                    title: '部门职位',
                    value: '',
                    url: ''
                }, {
                    title: '工号',
                    value: '',
                    url: ''
                }, {
                    title: '联系方式',
                    value: '1',
                    url: ''
                }, {
                    title: '邮箱',
                    value: '',
                    url: ''
                }, {
                    title: '地址',
                    value: '',
                    url: ''
                }, {
                    title: '入职时间',
                    value: '',
                    url: ''
                }, ],
                linkIn: '../own'
            }
        },
        created() {},
        mounted() {
            this.$store.commit('getTitle', '详细信息');
            this.$store.commit('rightTab', "");
            this.$store.commit('hasBack', {
                hasBack: true
            });
            this.$store.commit('hasFoot', {
                hasFoot: false
            });

            var that = this;
            var empId = this.$route.params.empId;
            $ajax.get('/UserApi/GetEmp?empId=' + empId)
                .then(res => {
                    console.log('获得的数据', res)
                    that.list[0].value = res.data.Avatar;
                    that.list[1].value = res.data.Name;
                    that.list[2].value = res.data.Gender;
                    that.list[4].value = res.data.DepartmentName + " " + res.data.PostName;
                    that.list[5].value = res.data.JobNo;
                    var ContactList = [];
                    ContactList = JSON.parse(res.data.Contact);

                    console.log(ContactList)
                    console.log(ContactList.length)
                    var contact;
                    // for(var i =0, lenI=ContactList.length; i <lenI; i++){
                    //     contact += ContactList[i].Type + "：" + ContactList[i].Value + "\/n";
                    // }
                    that.list[6].value = contact;
                    that.list[7].value = res.data.Email;
                    that.list[8].value = res.data.Address;
                    that.list[9].value = res.data.JoinTimeStr;
                })
        },
        computed: {},
        methods: {},
        destroyed() {}
    }
</script>
<style scoped>
    .ownInfo .weui-cell {
        min-height: 40px;
    }
    
    .ownInfo .avatar {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
</style>