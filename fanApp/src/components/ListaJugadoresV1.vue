<template>
  <div class="">
    <!-- lista
    <hr /> -->

    <md-list class="md-triple-line">
      <div v-for="(player, i) in players" :key="i">
        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People" />
          </md-avatar>
          <!-- {{player}} -->

          <div class="md-list-item-text">
            <span>{{ player.first_name }} {{ player.last_name }}</span>
            <span>{{ player.team }}</span>
            <p>{{ player.position }}</p>
          </div>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </div>
    </md-list>
    <!-- {{players}} -->
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: "ListaJugadores",
  props: {
    msg: String,
  },
  data() {
    return {
      page: 2,
      players: this.$store.state.playersData,
    }
  },

  mounted() {},
};
</script>

