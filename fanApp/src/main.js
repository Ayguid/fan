import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(VueMaterial)

// if (this.theme === "dark") {
//   this.$material.theming.theme = "default";
//   this.theme = "light";
// } else {
//   this.$material.theming.theme = "default-dark";
//   this.theme = "dark";
// }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
