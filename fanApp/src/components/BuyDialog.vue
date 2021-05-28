<template>
    
    <div class="dialog">
        <!-- {{data}} -->
      <md-dialog v-if="selectedToken" :md-active.sync="data.showDialog" @md-closed="reset()">
        <md-dialog-title>Buy/sell</md-dialog-title>
        <!-- {{data}}
        {{getToken(data.tokenId)}} -->
        <md-tabs md-dynamic-height>
          <md-tab md-label="General">
            <!-- {{selectedToken}} -->
            <md-avatar>
              <img :src="selectedToken.img" alt="People" />
            </md-avatar>

            <md-field :class="messageClass">
              <label>Desired Amount</label>
              <md-input v-model="required" required @input="eval"></md-input>
              <span class="md-error">There is an error</span>
            </md-field>

            <div class="md-list-item-text">
             <span>{{ selectedToken.name }} </span>
             <span>Supply {{ selectedToken.supply }}</span>
             <span>Value  <span :class="selectedToken.trend">{{ selectedToken.value }}</span> </span>
            </div>
          </md-tab>

          <md-tab md-label="Activity">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>

          <md-tab md-label="Pool">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>
        </md-tabs>

        <div class="md-tab">
          Your balance: {{userFanBalance}} Fan Tokens
        </div>

        <md-dialog-actions>
          <md-button class="md-primary" @click="data.showDialog = false">Cancel</md-button>
          <md-button class="md-primary" @click="buyToken()">Buy</md-button>
        </md-dialog-actions>
      </md-dialog>
      
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "BuyDialog",
    props: ["data"],
    data() {
    return {
      required: null,
      hasMessages: null
    };
  },
  computed: {
    ...mapGetters(["fanTokens","userFanBalance","userTokens", "getToken"]),
    messageClass () {
      return {
        'md-invalid': this.hasMessages
      }
    },
    selectedToken(){
      return this.getToken(this.data.tokenId)
    }
  },
  methods: {
    reset() { // no es necesario pero bueh...
    //   this.tokenToDialog = ''
      this.hasMessages = null
      this.required = null
    },
    buyToken(){
      if (this.required == null || this.required == ''){//validamos si hay amount
        this.hasMessages = true
      }else{
        this.$store.dispatch('buyToken', {token: this.getToken(this.data.tokenId), amount: this.required})
        this.reset()
        this.$router.push('/myportfolio')
      }
    },
    eval(){
      if (this.required) this.hasMessages = null
    }
  },

  created() {

  },
}
</script>
<style scoped>
  .up {
    color: #3acf56 !important;
  }
  .down {
    color: #eb3434 !important;
  }
</style>