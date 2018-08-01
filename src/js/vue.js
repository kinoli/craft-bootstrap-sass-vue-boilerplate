import Vue from 'vue'
// import s from "./store"
import Logo from '../components/Logo.vue'
import ModalGeneric from '../components/Modal-generic.vue'

// Lazy load scripts for components, not routes!
// const coolDiv = document.querySelector("#cool")
// if (coolDiv) import("./components/cool.js")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  components: {
    Logo, ModalGeneric
  },
  data: {
    privateState: {}
    // sharedState: s.state
  },
  mounted () {},
  methods: {}
})

/* eslint-enable */
