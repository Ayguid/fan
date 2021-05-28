<template>
  <div>
    <!-- {{ userTokens }} -->
    <md-list class="md-triple-line">
      <div v-for="(token, i) in userTokens" :key="i">
        <md-list-item>
          <md-avatar>
            <img :src="token.img" alt="People" />
          </md-avatar>
          <!-- {{token}} -->

          <div class="md-list-item-text">
            <span>{{ token.first_name }} {{ token.name }}</span>
            <span>Qty: {{ token.balance }}</span>
          </div>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </div>
    </md-list>
  </div>
</template>
<script>


export default {
  name: "MyBalance",
  props: ['userTokens'],
  data() {
    return {}
  },

};
</script>
