<template>
    <div>
        <div class="banner">111111111111</div>
    </div>
</template>
<script>
import { Group, XInput, XButton } from 'vux'
export default {
    name: 'Depart',
    components: { Group, XInput, XButton },
    data() {
        return {
        }
    },
    created() {},
    mounted() {
        this.$store.commit('rightTab',"确定");
        this.$store.commit('hasBack',{hasBack:false});
        this.$store.commit('hasFoot',{hasFoot:false});
    },
    computed: {},
    methods: {
    },
    destroyed() {}
}
</script>
<style scoped>
</style>
