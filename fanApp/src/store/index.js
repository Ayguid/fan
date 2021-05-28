import Vue from 'vue'
import Vuex from 'vuex'
//
import playersData from "./dummyPlayers.json"
import userData from "./dummyUserData.js"
import fanTokens from "./dummyTokens.js"
//

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fanTokens,
    userData,
    playersData
  },
  getters: {
    fanTokens: state=> {
      return state.fanTokens.fan_tokens
    },
    userFanBalance: state =>{
      return state.userData.fan_token_balance
    },
    userTokens: state => {
      return state.userData.user_tokens
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

    },
  },
  modules: {
  }
})
