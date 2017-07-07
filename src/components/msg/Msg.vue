<template>
    <div style="padding-bottom: 100px;">
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
        <vlist :list="list" :type="type" ></vlist>
    </div>
</template>
<script>
import { Search } from 'vux';
import vlist from '@/libs/list';
import vsearch from '@/libs/search';
export default {
    name: 'Msg',
    components: { vlist, Search, vsearch },
    data() {
        return {
            type: 'radio3',
            list: [
                {
                    title: '未处理审核',
                    url: '',
                    icon: 'icon-unhandel'
                },
                {
                    title: '提醒信息',
                    url: '',
                    icon: 'icon-reports'
                },
                {
                    title: '我的客户',
                    url: '',
                    icon: 'icon-subscribe'
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
        this.$store.commit('rightTab',"");
        this.$store.commit('hasFoot',{hasFoot:true});
        this.$store.commit('hasBack',{hasBack:false});
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

