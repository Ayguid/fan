<template>
  <div class="about">
    <h1>Market</h1>

    <FanTokens @selectedToken="openInDialog" :data ="fanTokens"/>

    <BuyDialog :data="toDialog"/>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import FanTokens from "@/components/FanTokens";
import BuyDialog from "@/components/BuyDialog";

export default {
  name: "Market",
  props: {
    msg: String,
  },
  components: {
    FanTokens,
    BuyDialog
  },
  data() {
    return {
      toDialog: {
        token:'',
        showDialog: false
      }
    }
  },
  methods: {
    openInDialog(id){
      // console.log(id)
      const fanToken = this.fanTokens.find(token=> token.id == id)
      this.toDialog.token = fanToken
      this.toDialog.showDialog = true
    }
  },
  computed: {
    ...mapGetters(["fanTokens","userFanBalance","userTokens"]),
    messageClass () {
      return {
        'md-invalid': this.hasMessages
      }
    }
  },
  created() {

  },
};
</script>
<style>
.small {
  max-width: 50%;
  /* margin: auto auto; */
}
</style>