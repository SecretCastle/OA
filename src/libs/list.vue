<template>
    <div>
        <div class="weui-list_access">
            <!-- 部门列表-无图标 -->
            <template v-if="type==='1'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <a class="weui-media_box" v-for="item in list" :href="item.url">
                    <div class="weui-media-box__hd" v-if="item.icon">
                        <i :class="item.icon"></i>
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.Name}}</h4>
                        <p class="weui-media-box__desc">{{item.PostName}}</p>
                    </div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </a>
            </template>
            <!-- 联系人列表-左侧带头像 -->
            <template v-if="type==='2'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <a class="weui-media_box" v-for="item in list" :href="item.url">
                    <div class="weui-media-box__hd">
                        <img v-if="item.Avatar" class="weui-media-box__avatar" :src="item.Avatar" alt="">
                        <div v-else class="weui-media-box__noAvatar">{{item.Name}}</div>
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.Name}}</h4>
                        <p class="weui-media-box__desc">{{item.PostName}}</p>
                    </div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </a>
            </template>
            <!-- 正常列表-左侧带图标 -->
            <template v-if="type==='3'">
                <div v-if="header" class="weui-t_bar">{{ header }}{{ list.length ? '（'+list.length+'）' : '' }}</div>
                <a class="weui-media_box" v-for="item in list" :href="item.url">
                    <div class="weui-media-box__hd3">
                        <i class="iconfont" :class="item.icon"></i>
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.title}}</h4>
                        <p class="weui-media-box__desc">{{item.desc}}</p>
                    </div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </a>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: 'list',
    props: {
        list: Array,
        header: String,
        type: {
          type: String,
          default: '1'
        }
    },
    data() {
        return {}
    },
    created() {
    },
    mounted() {
    },
    computed: {},
    methods: {},
    destroyed() {}
}
</script>
<style scoped>
.weui-t_bar { height: 35px; padding: 0 15px; background: #eeeff3; color: #000; font-size: 16px; line-height: 35px; }
.weui-media_box { position: relative; margin-top: 15px; padding: 10px 15px; display: flex; align-items: center; color: #000; background: #fff; }
.weui-media_box:before { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }
.weui-media_box:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }
.weui-media-box__hd { width: 50px; height: 50px; margin-right: 10px; line-height: 50px; text-align: center; }
.weui-media-box__hd3 { width: 40px; height: 40px; margin-right: 10px; line-height: 40px; text-align: center; }
.weui-media-box__bd { flex: 1; min-width: 0; }
.weui-media-box__title { font-size: 16px; font-weight: normal; }
.weui-media-box__desc { font-size: 13px; color: #ccc; }
.weui-cell__ft_in-access { content:" "; display:inline-block; height:10px; width:10px; border-width:2px 2px 0 0; border-color:#C8C8CD; border-style:solid;transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0); position:absolute; top:50%; right:17px; margin-top: -6px; }
.weui-media-box__avatar { display: block; width: 50px; height: 50px; border-radius: 100%; }
.weui-media-box__noAvatar{ width: 50px; height: 50px; border-radius: 100%; background: #b9b9c8; color: #fff; font-size: 13px; overflow: hidden; }


.weui-media-box__hd3 .iconfont { display: block; width: 40px; height: 40px; border-radius: 5px; }
.weui-media-box__hd3 .iconfont:before { color: #fff; }
.icon-company { background: #6895d3;}
.icon-unhandel { background: #FFB200; }
.icon-reports { background: #00AAFF; }
.icon-subscribe { background: #14c0b6; }
.icon-myPermission { background: #004098; }
.icon-selfinfo-setting { background: #8f999a; }
</style>