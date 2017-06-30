<template>
    <div>
        <div class="weui-list_access">
            <template v-if="type==='1'">
                <a v-for="item in list" :href="item.url">
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
            <template v-if="type==='2'">
                <a v-for="item in list" :href="item.url">
                    <div class="weui-media-box__hd" v-if="item.src">
                        <img class="weui-media-box__thumb" :src="item.src" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.Name}}</h4>
                        <p class="weui-media-box__desc">{{item.PostName}}</p>
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
        type: {
          type: String,
          default: '1'
        }
    },
    data() {
        return {
            // type: '1',
            // list: [
            //     {
            //         icon: 'iconfont icon-user',
            //         Name: '姓名',
            //         PostName: '职位',
            //         url: 'http://www.baidu.com',
            //         src: '111',
            //     }
            // ],
        }
    },
    created() {
    },
    mounted() {
    },
    computed: {},
    methods: {
    },
    destroyed() {}
}
</script>
<style scoped>
.weui-list_access a { position: relative; padding: 15px; display: block; color: #000; }
.weui-list_access a:before { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 1px; background: #eee; transform: scale(1,.3); }
.weui-list_access a:first-child:before { height: 0; }
.weui-list_access a:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #ccc; transform: scale(1,.3); }
.weui-media-box__hd { float: left; width: 40px; height: 40px; margin-right: 10px; }
.weui-media-box__title { font-size: 14px; font-weight: normal; }
.weui-media-box__desc { font-size: 12px; color: #ccc; }
.weui-cell__ft_in-access { content:" "; display:inline-block; height:10px; width:10px; border-width:2px 2px 0 0; border-color:#C8C8CD; border-style:solid;transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0); position:absolute; top:50%; right:17px; margin-top: -6px; }
.icon-user { display: block; width: 40px; height: 40px; background: #ccc; border-radius: 5px; text-align: center; }
</style>