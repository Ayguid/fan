<template>
  <trading-vue
    :titleTxt="''"
    :data="chart"
    :width="this.width"
    :height="this.height"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText"
    :toolbar="true"
  >
  </trading-vue>
</template>
<script>
import TradingVue from "trading-vue-js";
import Data from "../store/tradeData.json";
export default {
    data(){
        return {
        chart: Data,
        width: window.innerWidth,
        height: window.innerHeight,
        colors: {
        colorBack: "#424242",
        colorGrid: "#424242",
        colorText: "#d4d6d5",
      }
    }
    },
    components :{
        TradingVue  
    },
    methods:{
    onResize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        },
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
}
</script>