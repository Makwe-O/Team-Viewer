import Vue from "vue";
import VueResource from "vue-resource";
import Toasted from "vue-toasted";
import App from "./App.vue";

Vue.use(Toasted);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
