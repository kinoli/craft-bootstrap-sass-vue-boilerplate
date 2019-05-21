import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import s from "./store"
import Logo from '../components/Logo.vue'

Vue.use(BootstrapVue)

// Lazy load scripts for components, not routes!
// const coolDiv = document.querySelector("#cool")
// if (coolDiv) import("./components/cool.js")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  components: {
    Logo
  },
  data: {
    privateState: {}
    // sharedState: s.state
  },
  mounted () {},
  methods: {}
})

/* eslint-enable */
