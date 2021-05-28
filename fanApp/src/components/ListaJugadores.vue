<template>
  <div>
    <md-table
      v-model="searched"
      md-sort="fName"
      md-sort-order="asc"
      md-card
      md-fixed-header
    >
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Player Trends</h1>
        </div>
        <!-- {{players}} -->
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            placeholder="Search by name..."
            v-model="search"
            @input="searchOnTable"
          />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No players found"
        :md-description="`No user found for this '${search}' query. Try a different search term.`"
      >
        <!-- <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button> -->
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell> -->
        <md-table-cell md-label="First Name" md-sort-by="fName">{{
          item.fName
        }}</md-table-cell>
        <md-table-cell md-label="Last Name" md-sort-by="fName">{{
          item.lName
        }}</md-table-cell>
        <md-table-cell md-label="Trend">
          <!-- Chart -->
          <!-- <PlayerTrendChart/> -->
          <!-- <md-chip :class="Math.random() < 0.5 ? 'is-primary' : 'is-danger'" md-clickable>${{item.ranking}}</md-chip> -->
          <md-chip class="trendChip" md-clickable></md-chip>
        </md-table-cell>
        <!-- <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
const toLower = (text) => {
  console.log(text);
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  // console.log(items, term)

  if (term) {
    return items.filter(
      (item) =>
        toLower(item.fName).includes(toLower(term)) ||
        toLower(item.lName).includes(toLower(term))
    );
  }

  return items;
};
//   import PlayerTrendChart from './PlayerTrendChart'

export default {
  name: "TableSearch",
  components: {
    // PlayerTrendChart
  },
  data() {
    return {
      search: "",
      searched: [],
      players: "",
    };
  },
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.players, this.search);
      // console.log(this.searched);
    },
  },
  created() {
    this.players = this.$store.state.playersData;
    this.searched = this.players;
  },
  mounted() {
    // setInterval(function () {//simulamos cambios en el trend en tiempo real
    //   var chips = document.getElementsByClassName("trendChip");
    //   chips.forEach((element) => {
    //     var num = Math.floor(Math.random()*10) + 1;
    //     num *= Math.round(Math.random()) ? 1 : -1;
    //     if (num>0) {
    //      // this will get a number between 1 and 99;
    //       element.classList.add("is-primary");
    //       element.classList.remove("is-danger");
    //     } else {
    //       element.classList.remove("is-primary");
    //       element.classList.add("is-danger");
    //     }

    //     element.firstChild.innerHTML = num + " %"
    //   });
    // }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
.is-primary {
  background-color: #34eb55 !important;
}
.is-danger {
  background-color: #eb3434 !important;
}
</style>