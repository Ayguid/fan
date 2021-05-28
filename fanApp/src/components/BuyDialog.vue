<template>
    
    <div class="dialog">
        <!-- {{data}} -->
      <md-dialog :md-active.sync="data.showDialog" @md-closed="reset()">
        <md-dialog-title>Buy/sell</md-dialog-title>

        <md-tabs md-dynamic-height>
          <md-tab md-label="General">

            <md-avatar>
              <img :src="data.token.img" alt="People" />
            </md-avatar>

            <md-field :class="messageClass">
              <label>Desired Amount</label>
              <md-input v-model="required" required @input="eval"></md-input>
              <span class="md-error">There is an error</span>
            </md-field>

            <div class="md-list-item-text">
             <span>{{ data.token.name }} </span>
             <span>Supply {{ data.token.supply }}</span>
            </div>
          </md-tab>

          <md-tab md-label="Activity">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>

          <md-tab md-label="Account">
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
  methods: {
    reset() { // no es necesario pero bueh...
    //   this.tokenToDialog = ''
      this.hasMessages = null
      this.required = null
    },
    buyToken(){
      if (this.required == null || this.required == ''){
        this.hasMessages = true
      }else{
        this.$store.dispatch('buyToken', {token:this.data.token, amount: this.required})
        this.reset()
        //this.showDialog = false
        this.$router.push('/myportfolio')
      }
    },
    eval(){
      if (this.required) this.hasMessages = null
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
}
</script>