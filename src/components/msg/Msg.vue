<template>
    <div>
        <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top top="46px"
        @on-submit="onSubmit"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        placeholder="搜索姓名"
        ref="search"></search>
        <div class="mask" v-show="mask"></div>
        <!-- <vsearch></vsearch> -->
        <panel header="" :list="list" :type="type"></panel>
    </div>
</template>
<script>
import icon_msg_01 from '../../assets/images/icon_msg_01.png';
import icon_msg_02 from '../../assets/images/icon_msg_02.png';
import icon_msg_03 from '../../assets/images/icon_msg_03.png';
import { Panel, Search } from 'vux';
export default {
    name: 'Msg',
    components: { Panel, Search },
    data() {
        return {
            type: '1',
            list: [
                {
                    src: icon_msg_01,
                    title: '未处理审核',
                    desc: '加入申请',
                    url: '',
                },
                {
                    src: icon_msg_02,
                    title: '提醒信息',
                    desc: '客户跟进提醒',
                    url: ''
                },
                {
                    src: icon_msg_03,
                    title: '我的客户',
                    desc: '',
                    url: ''
                },
            ],
            results: [],
            value: '',
            mask: !1
        }
    },
    created() {},
    mounted() {
        this.$store.commit('getTitle','消息列表');
        this.$store.commit('getMenus',{menu1:"11",menu2:"22"});
    },
    computed: {},
    methods: {
        resultClick (item) {
          console.log('you click the result item: ' + JSON.stringify(item))
          this.mask = !1
        },
        getResult (val) {
          this.results = val ? getResult(this.value) : []
        },
        onSubmit () {
          this.$refs.search.setBlur()
        },
        onFocus(){
            this.mask = !0
        },
        onCancel(){
            this.mask = !1
        }
    },
    destroyed() {}
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style scoped>
</style>
