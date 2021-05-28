<template>
  <div id="app">

  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">FAN APP</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list @click="menuVisible = !menuVisible">
          <md-list-item to="/" exact >
            <md-icon>trending_up</md-icon>
            <span class="md-list-item-text">Trends</span>
          </md-list-item>

          <md-list-item to="/market" >
            <md-icon>stacked_bar_chart</md-icon>
            <span class="md-list-item-text">Market</span>
          </md-list-item>

          <md-list-item to="/dashboard">
            <md-icon>dashboard</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>

          <md-list-item to="/mytrades">
            <md-icon>history</md-icon>
            <span class="md-list-item-text">My Trades</span>
          </md-list-item>

          <md-list-item to="/myportfolio">
            <md-icon>account_balance</md-icon>
            <span class="md-list-item-text">My Portfolio</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>




    <!-- <router-view/> -->
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'Reveal',
  data (){
    return {
      menuVisible: false,
      socket : io('http://192.168.1.107:7070')
    }
  },
  mounted () {
      this.socket.on('mount', (data) => {
      console.log(data)
    })

      this.socket.on('message', (data) => {
      console.log('msg')
      this.$store.state.fanTokens = data
    })
  }
}
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
