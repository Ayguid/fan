<template>
  <div class="about">
    <h1>MyTrades</h1>
    {{userTransactions}}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userTransactions"]),
  },
}
</script>