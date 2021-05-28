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
          @input="searchOnTable"
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
  name: "MyBalance",
  props: ["data"],
  data() {
    return {
      search: '',
      searched:'',
      tokens:''
    };
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.tokens, this.search);
    },
  },
  created() {
    this.tokens = this.data;
    this.searched = this.tokens;
  },
};
</script>