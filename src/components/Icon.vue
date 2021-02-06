<template>
  <div class="icon" :class="`icon-${name}`" :style="{ color, fontSize: size }" data-testid="icon"></div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    color: {
      type: String,
      default: 'var(--primary)',
    },
    size: {
      type: String,
      default: '24px',
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
