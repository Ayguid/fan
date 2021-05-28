<template>
  <div>

      <div class="md-toolbar-section-start">
        <!-- <h1 class="md-title">Player Trends</h1> -->
      </div>
      <!-- {{players}} -->
      <md-field md-clearable class="md-toolbar-section-end">
        <md-input
          placeholder="Search by token name..."
          v-model="search"
          
        />
      </md-field>


    <!-- {{ userTokens }} -->
    <md-list class="md-triple-line">
      <div v-for="(token, i) in searched" :key="i" >
        <md-list-item >
          <md-avatar>
            <img :src="token.img" alt="People" />
          </md-avatar>
          
          <!-- {{token}} -->

          <div class="md-list-item-text">
            <span >{{ token.name }}</span>
            <span>Supply {{ token.supply }}</span>
            <span>Value  <span :class="token.trend">{{ token.value }}</span> </span>
          </div>
            <md-button  @click="$emit('selectedToken', token.id)" class="md-icon-button">
            <md-icon>add_shopping_cart</md-icon>
          </md-button>
          
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </div>
    </md-list>

    <div v-if="searched.length == 0">
      {{`No token found for this ${search} query. Try a different search term.`}}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {

  if (term) {
    return items.filter(
      (item) =>
        toLower(item.name).includes(toLower(term))
    );
  }

  return items;
};

export default {
  name: "FanTokens",
  props: ["data"],
  data() {
    return {
      search: '',
    };
  },
  methods: {

  },
  computed :{
    ...mapGetters(["fanTokens","userFanBalance","userTokens"]),
    searched () {
      let x = ''
      if (this.search.length > 0){
        x = searchByName(this.fanTokens, this.search)
      }else{
        x = this.fanTokens
      }
      return x
    }
  }
};
</script>

<style scoped>
  .up {
    color: #3acf56 !important;
  }
  .down {
    color: #eb3434 !important;
  }
</style>