<template>
    <div>
        <div class="weui-check_access">
            <!-- radio部门列表 -->
            <template v-if="type==='radio1'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <div class="weui-cells_check">
                    <label v-for="(item,index) in list" class="weui-label_check" :class="{ 'weui-media_box_mt' : hasMt }">
                        <div v-if="checkAble" class="weui-cell__hd" @click="radio">
                            <input :name="Name" :id="index" type="radio" class="weui-check" :value="item.Id" v-model="radioVal">
                            <i :id="index" class="weui-icon-icon" :class="{'weui-icon-checked':item.checked}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <a :href="item.url ? item.url : 'javascript:void(0);'">
                                <h4 class="weui-check__title">{{item.title}}</h4>
                                <p class="weui-check__desc">{{item.desc}}</p>
                            </a>
                            <div v-if="item.url" class="weui-cell__ft_in-access"></div>
                        </div>
                    </label>
                </div>
            </template>
            <!-- radio联系人列表-左侧带头像 -->
            <template v-if="type==='radio2'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <div class="weui-cells_check">
                    <label v-for="(item,index) in list" class="weui-label_check" :class="{ 'weui-media_box_mt' : hasMt }">
                        <div v-if="checkAble" class="weui-cell__hd" @click="check">
                            <input :name="Name" :id="index" type="radio" class="weui-check" :value="item.Id">
                            <i :id="index" class="weui-icon-icon" :class="{'weui-icon-checked':item.checked}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <a class="weui-media_box" :href="item.url ? item.url : 'javascript:void(0);'">
                                <div class="weui-media-box__hd">
                                    <img v-if="item.Avatar" class="weui-media-box__avatar" :src="item.Avatar" alt="">
                                    <div v-else class="weui-media-box__noAvatar">{{item.title}}</div>
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                                    <p class="weui-media-box__desc">{{item.desc}}</p>
                                </div>
                            </a>
                            <div v-if="item.url" class="weui-cell__ft_in-access"></div>
                        </div>
                    </label>
                </div>
            </template>
            <!-- radio正常列表-左侧带图标 -->
            <template v-if="type==='radio3'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <div class="weui-cells_check">
                    <label v-for="(item,index) in list" class="weui-label_check" :class="{ 'weui-media_box_mt' : hasMt }">
                        <div v-if="checkAble" class="weui-cell__hd" @click="radio">
                            <input :name="Name" :id="index" type="radio" class="weui-check" :value="item.Id">
                            <i :id="index" class="weui-icon-icon" :class="{'weui-icon-checked':item.checked}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <a class="weui-media_box" :href="item.url ? item.url : 'javascript:void(0);'">
                                <div v-if="item.icon" class="weui-media-box__hd3">
                                    <i class="iconfont" :class="item.icon"></i>
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                                    <p class="weui-media-box__desc">{{item.desc}}</p>
                                </div>
                            </a>
                            <div v-if="item.url" class="weui-cell__ft_in-access"></div>
                        </div>
                    </label>
                </div>
            </template>
            <!-- checkbox部门列表 -->
            <template v-if="type==='check1'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <div class="weui-cells_check">
                    <label v-for="(item,index) in list" class="weui-label_check" :class="{ 'weui-media_box_mt' : hasMt }">
                        <div v-if="checkAble" class="weui-cell__hd" @click="checkbox">
                            <input :name="Name" :id="index" type="checkbox" class="weui-check" :value="item.Id">
                            <i :id="index" class="weui-icon-icon" :class="{'weui-icon-checked':item.checked}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <a :href="item.url ? item.url : 'javascript:void(0);'">
                                <h4 class="weui-check__title">{{item.title}}</h4>
                                <p class="weui-check__desc">{{item.desc}}</p>
                            </a>
                            <div v-if="item.url" class="weui-cell__ft_in-access"></div>
                        </div>
                    </label>
                </div>
            </template>
            <!-- checkbox联系人列表-左侧带头像 -->
            <template v-if="type==='check2'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <div class="weui-cells_check">
                    <label v-for="(item,index) in list" class="weui-label_check" :class="{ 'weui-media_box_mt' : hasMt }">
                        <div v-if="checkAble" class="weui-cell__hd" @click="checkbox">
                            <input :name="Name" :id="index" type="checkbox" class="weui-check" :value="item.Id">
                            <i :id="index" class="weui-icon-icon" :class="{'weui-icon-checked':item.checked}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <a class="weui-media_box" :href="item.url ? item.url : 'javascript:void(0);'">
                                <div class="weui-media-box__hd">
                                    <img v-if="item.Avatar" class="weui-media-box__avatar" :src="item.Avatar" alt="">
                                    <div v-else class="weui-media-box__noAvatar">{{item.title}}</div>
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                                    <p class="weui-media-box__desc">{{item.desc}}</p>
                                </div>
                            </a>
                            <div v-if="item.url" class="weui-cell__ft_in-access"></div>
                        </div>
                    </label>
                </div>
            </template>
            <!-- checkbox正常列表-左侧带图标 -->
            <template v-if="type==='check3'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <div class="weui-cells_check">
                    <label v-for="(item,index) in list" class="weui-label_check" :class="{ 'weui-media_box_mt' : hasMt }">
                        <div v-if="checkAble" class="weui-cell__hd" @click="checkbox">
                            <input :name="Name" :id="index" type="checkbox" class="weui-check" :value="item.Id">
                            <i :id="index" class="weui-icon-icon" :class="{'weui-icon-checked':item.checked}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <a class="weui-media_box" :href="item.url ? item.url : 'javascript:void(0);'">
                                <div v-if="item.icon" class="weui-media-box__hd3">
                                    <i class="iconfont" :class="item.icon"></i>
                                </div>
                                <div class="weui-media-box__bd">
                                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                                    <p class="weui-media-box__desc">{{item.desc}}</p>
                                </div>
                            </a>
                            <div v-if="item.url" class="weui-cell__ft_in-access"></div>
                        </div>
                    </label>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: 'List',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        header: String,
        type: {
            type: String,
            default: 'radio3'
        },
        checkAble: {
            type: Boolean,
            default: !1
        },
        Name: String,
        radioVal: String,
        checkVal: {
            type: Array,
            default: () => []
        },
        hasMt: {
            type: Boolean,
            default: !1
        },
    },
    // data() {
    //     return {
    //         type: 'check3',
    //         checkAble: !1,
    //         hasMt : !1,
    //         header: '部门',
    //         Name: 'depart',
    //         list: [
    //             { Id: 0, title: '周瑜', url: '/1', desc: '指挥官', icon: 'icon-company', checked: !1 },
    //             { Id: 1, title: '曹操', url: '/2', desc: '君主', checked: !1 },
    //             { Id: 2, title: '鲁肃', url: '', desc: '军师', checked: !1 },
    //             { Id: 3, title: '周泰', url: '/4', desc: '将军', checked: !1 },
    //         ],
    //         radioVal: '',
    //         checkVal: [],
    //     }
    // },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        radio(e){
            // console.log(typeof e.target.id)
            var list = this.list,
                index = e.target.id;
            for(var i in list){
                if(i !== index){
                    list[i].checked = !1;
                }
            }
            list[index].checked = !list[index].checked;
            var val = list[index].checked ? list[index].Id : '';
            // this.radioVal = val;
            console.log('radio选中了：' + val)

            this.$emit('radio',val)
        },
        checkbox(e){
            // console.log(typeof e.target.id)
            var list = this.list,
                index = e.target.id,
                arr = [];
            list[index].checked = !list[index].checked;
            for(var i in list){
                if(list[i].checked){
                    arr.push(list[i].Id);
                }
            }
            this.checkVal = arr || [];
            console.log('checkbox选中了：' +this.checkVal)
        }
    },
    watch: {},
    destroyed() {}
}
</script>
<style scoped>
.weui-t_bar { height: 35px; padding: 0 15px; background: #eeeff3; color: #000; font-size: 16px; line-height: 35px; }
.weui-cells_check { position: relative; }
.weui-cells_check:before { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }
/*.weui-cells_check:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }*/
.weui-label_check { position: relative; display: flex; padding: 10px 15px; background: #fff; line-height: 1.2; }
.weui-label_check:before { content: ""; position: absolute; left: 15px; top: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }
.weui-label_check:first-child:before { height: 0; }
.weui-cell__hd { position: relative; width: 23px; padding: 0 .2em; margin-right: .35em; }
.weui-check { position: absolute; left: -9999em; }
.weui-icon-checked { display: inline-block; vertical-align: middle; font: normal normal normal 14px/1 "weui"; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; }
.weui-icon-icon { position: absolute; top: 50%; transform: translateY(-50%); }
.weui-icon-icon:before { content: '\EA01'; margin: 0; font-size: 23px; }
.weui-icon-checked:before { content: '\EA06'; color: #f90; }
.weui-cell__bd { flex: 1; }
.weui-check__title { font-weight: 400; font-size: 17px; width: auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; word-wrap: normal; word-wrap: break-word; word-break: break-all; }
.weui-check__desc { color: #999; font-size: 13px; line-height: 1.3; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;}
.weui-cell__ft_in-access:after { content:" "; display:inline-block; height:10px; width:10px; border-width:2px 2px 0 0; border-color:#C8C8CD; border-style:solid;transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0); position:absolute; top:50%; right:17px; margin-top: -6px; }

/* avatar */
.weui-media_box { position: relative; display: flex; align-items: center; }
.weui-media-box__hd { width: 50px; height: 50px; margin-right: .55em; line-height: 50px; text-align: center; }
.weui-media-box__bd { flex: 1; min-width: 0; }
.weui-media-box__avatar { display: block; width: 50px; height: 50px; border-radius: 100%; }
.weui-media-box__noAvatar{ width: 50px; height: 50px; border-radius: 100%; background: #b9b9c8; color: #fff; font-size: 13px; overflow: hidden; }
.weui-media-box__title { font-size: 16px; font-weight: normal; }
.weui-media-box__desc { margin-top: 3px; font-size: 13px; color: #ccc; }

/* margin-top */
.weui-media_box_mt { margin-top: 15px; }
.weui-media_box_mt:first-child:before { height: 1px; }
.weui-media_box_mt:before { left: 0; }
.weui-media_box_mt:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }

/* iconfont */
.weui-media-box__hd3 { width: 40px; height: 40px; margin-right: .55em; line-height: 40px; text-align: center; }
.weui-media-box__hd3 .iconfont { display: block; width: 40px; height: 40px; border-radius: 5px; }
.weui-media-box__hd3 .iconfont:before { color: #fff; }


/* icon-background */
.icon-company { background: #6895d3;}
.icon-unhandel { background: #FFB200; }
.icon-reports { background: #00AAFF; }
.icon-subscribe { background: #14c0b6; }
.icon-myPermission { background: #004098; }
.icon-selfinfo-setting { background: #8f999a; }
</style>
