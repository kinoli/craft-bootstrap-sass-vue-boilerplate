<template lang="html">
  <section class="logo">
    <img
      :src="privateState.imgSrc"
      alt="Logo"
    >
  </section>
</template>

<script lang="js">
import img from '../img/logo.png'
// import s from "../store"

export default {
  name: 'Logo',
  data () {
    return {
      privateState: {
        imgSrc: img
      }
      // sharedState: s.state
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.logo {
  img {
    width: 100px;
  }
}
</style>
