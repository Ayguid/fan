<template>
  <div class="about">
    <h1>MyPortfolio</h1>

    <div>
      <h3>Fan Tokens: {{userFanBalance}}</h3>
      <UserTokens :userTokens="userTokens" />
    </div>

    <div class="small">
      <h2>My Portfolio</h2>
      <PieChart :chart-data="chartdata" :options="chartOptions" />
    </div>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UserTokens from "@/components/UserTokens";
import PieChart from "@/components/charts/PieChart.js";
export default {
  name: "MyPortfolio",
  props: {
    msg: String,
  },
  components: {
    UserTokens,
    PieChart,
  },
  data() {
    return {
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "Data One",
            // backgroundColor: "#f87979",
            lineTension: 1, //curvatura de la linea
            borderColor: "#34eb55",
            backgroundColor: [ '#1E9600', '#99C802', '#FFF200', '#F89403',	'#FF0000' ],
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        legend: {
          display: true,
          position: "right",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["userFanBalance","userTokens"]),
  },
  created() {

    this.chartdata.labels = this.userTokens.map((a) => a.name);
    this.chartdata.datasets[0].data = this.userTokens.map((a) => a.balance)

  },
};
</script>
<style>
.small {
  max-width: 50%;
  /* margin: auto auto; */
}
</style>