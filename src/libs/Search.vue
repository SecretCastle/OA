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
    </div>
</template>
<script>
import { Search } from 'vux';
export default {
    name: 'Search',
    components: {  Search },
    data() {
        return {
            results: [],
            value: '',
            mask: !1
        }
    },
    created() {},
    mounted() {},
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
