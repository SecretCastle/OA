<template>
    <div id="app">
        <vhead></vhead>
        <router-view></router-view>
        <vfoot></vfoot>
        <loading v-model="isLoading"></loading>
    </div>
</template>
<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';
import vhead from '@/libs/head';
import vfoot from '@/libs/foot';
export default {
    name: 'app',
    components: { vhead, vfoot, Loading },
    computed: {
	    ...mapState({
	    	isLoading: state => state.vux.isLoading
	    })
	}
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/app.css';
@import './assets/iconfont.css';
#app {
    position: relative;
    max-width: 720px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 100px;

}
</style>
