<template>
    <div style="background: #f6f6f6;">
        <div class="emp-avatar">
            <img :src="Avatar" alt="" />
            <p class="emp-name">{{ Name }} <i class="iconfont" :class="Gender===0 ? 'icon-male' : 'icon-female'"></i></p>
            <p class="emp-btn clearfix">
                <a href=""><i class="iconfont icon-phone"></i>拨打电话</a>
                <a href=""><i class="iconfont icon-sms"></i>发送短信</a>
            </p>
        </div>
        <div class="space"></div>
        <ul class="emp-ul">
            <li><label>部门</label>{{ DepartmentName }}</li>
            <li><label>职位</label>{{ postName }}</li>
            <li><label>邮箱</label>{{ Email }}</li>
            <li><label>地址</label>{{ Address }}</li>
        </ul>
    </div>
</template>
<script>
import male from "../../assets/male.png";
import female from "../../assets/female.png";
export default {
    name: 'emp',
    components: {},
    data() {
        return {
            Avatar: '',
            postName: '',
            DepartmentName: '',
            Address: '',
            Email: '',
            UserName: '',
            Name: '',
            Gender: 0
        }
    },
    created() {
    },
    mounted() {
        this.$store.commit('rightTab',"编辑");
        this.$store.commit('getTitle','详细信息');

        var that = this;
        $ajax.get('/UserApi/GetEmp?empId=' + this.$route.params.empId)
        .then(res=>{
            console.log(res)
            that.Avatar = res.data.Avatar ? res.data.Avatar : res.data.Gender === 0 ? male : female;
            that.postName = res.data.postName;
            that.DepartmentName = res.data.DepartmentName;
            that.Address = res.data.Address;
            that.Email = res.data.Email;
            that.Name = res.data.Name;
            that.UserName = res.data.UserName;
            that.Gender = res.data.Gender;
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
.emp-avatar { background: #fff; }
.emp-avatar img { display: block; width: 88px; height: 88px; margin: 30px auto 0; border-radius: 100%; }
.emp-name { height: 26px; margin-top: 15px; font-size: 16px; text-align: center; line-height: 26px; }
.emp-btn { position: relative; margin-top: 15px; border-bottom: 1px solid #e6e6e6; }
.emp-btn:before { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.5); }
.emp-btn a { position: relative; display: block; float: left; width: 50%; height: 50px; text-align: center; line-height: 50px; }
.emp-btn a:before { content: ""; position: absolute; right: 0; top: 0; width: 1px; height: 100%; background: #ccc; transform: scale(.5,1); }
.emp-btn a:last-child:before { height: 0; }
.emp-btn a i { display: inline-block; height: 50px; margin-right: 5px; vertical-align: top; }
.icon-phone:before { color: #004098; }
.icon-sms:before { color: #ec881c; }
.emp-ul { padding: 15px 0 15px 30px; background: #fff; }
.emp-ul li { position: relative; height: 35px; padding: 5px 0; line-height: 35px; }
.emp-ul li:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }
.emp-ul li label { margin-right: 15px; color: #666; }

.emp-avatar .iconfont {  }
.icon-male,.icon-female { display: inline-block; height: 26px; vertical-align: top; }
.icon-male:before { color: #7bc3ff; font-size: 26px; }
.icon-female:before { color: #ff819f; font-size: 26px; }
</style>