<template>
  <div class="icon" :class="`icon-${name}`" :style="{ color: color, fontSize: size }"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'var(--primary)',
    },
    size: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
