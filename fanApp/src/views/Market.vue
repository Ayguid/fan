<template>
  <div class="about">
    <h1>Market</h1>
    <!-- <TradeChart/> -->
    <!-- {{fanTokens}} -->
    <!-- <FanTokens v-if="fanTokens.length>0" @selectedToken="openInDialog" :data ="fanTokens"/> -->
    <FanTokens @selectedToken="openInDialog" />

    <BuyDialog :data="toDialog" />
  </div>
</template>
<script>
// import TradingVue from "trading-vue-js";
// import Data from "../store/tradeData.json";

import { mapGetters } from "vuex";
import FanTokens from "@/components/FanTokens";
import BuyDialog from "@/components/BuyDialog";

export default {
  name: "Market",
  props: {
    msg: String,
  },
  components: {
    // TradingVue,
    FanTokens,
    BuyDialog,
    // TradeChart
  },
  data() {
    return {
      toDialog: {
        tokenId: "",
        showDialog: false,
      },
    };
  },
  methods: {
    openInDialog(id) {
      // console.log(id)
      // const fanToken = this.fanTokens.find(token=> token.id == id)
      this.toDialog.tokenId = id;
      this.toDialog.showDialog = true;
    },
  },
  computed: {
    ...mapGetters(["fanTokens", "userFanBalance", "userTokens"]),
    messageClass() {
      return {
        "md-invalid": this.hasMessages,
      };
    },
  },

};
</script>
<style>
.small {
  max-width: 50%;
  color: '#424242';
  /* margin: auto auto; */
}
</style>