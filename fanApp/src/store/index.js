import Vue from 'vue'
import Vuex from 'vuex'
//
import playersData from "./dummyPlayers.json"
import userData from "./dummyUserData.js"
// import fanTokens from "./dummyTokens.js"
//

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fanTokens: [],
    userData,
    playersData
  },
  getters: {
    fanTokens: state=> {
      return state.fanTokens
    },
    userFanBalance: state =>{
      return state.userData.fan_token_balance
    },
    userTokens: state => {
      return state.userData.user_tokens
    },
    userTransactions: state => {
      return state.userData.transactions
    },
    getToken: (state) => (id) => {
      return state.fanTokens.find(thing => thing.id === id)
    }
  },
  mutations: {
    BUY_TOKEN (state, token){
      state.userData.user_tokens.push(token)
    },
    UPDATE_TOKEN (state, payload) {
      const userToken = this.state.userData.user_tokens.find(token=>token.id==payload.token.id)
      // console.log(userToken.balance, parseInt(payload.amount))
      userToken.balance += parseInt(payload.amount) 
      // console.log(userToken.balance)
    },
    ADD_TRANSACTION(state, payload) {
      state.userData.transactions.push(payload)
    }
  },
  actions: {
    buyToken ({ commit }, payload) {
      const userHasToken = this.state.userData.user_tokens.find(token=>token.id==payload.token.id)
      // console.log( this.state.userData.user_tokens.find(token=>token.id==payload.token.id) )
      if (userHasToken) { // ya tiene el token,solo update la data del token
        commit('UPDATE_TOKEN', payload)
      } else { //nuevo token
        const userToken = {
          id: payload.token.id,
          name: payload.token.name,
          img: payload.token.img,
          balance: parseInt(payload.amount),   
       }
        commit('BUY_TOKEN', userToken)
      }
      // console.log(payload)
      const transaction = {
        date:new Date(),
        token: payload.token.name,
        amount:payload.amount,
        type: 'Buy',
        token_value: payload.token.value
      }
      commit('ADD_TRANSACTION', transaction)
    },
  },
  modules: {
  }
})
