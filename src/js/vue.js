import Vue from "vue";
import { ModalPlugin, BButton, BIcon, BIconAlarm } from "bootstrap-vue";
// import s from "./store"
import Logo from "../components/Logo.vue";

// Tree-shake bootstrap-vue since it's large
// Vue.use(BootstrapVue)
Vue.use(ModalPlugin);
Vue.component("BButton", BButton);
Vue.component("BIcon", BIcon);
Vue.component("BIconAlarm", BIconAlarm);

new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  components: {
    Logo,
  },
  data: {
    privateState: {},
    // sharedState: s.state
  },
  mounted() {},
  methods: {},
});
