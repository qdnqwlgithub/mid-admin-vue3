<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  value: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '100px'
  }

})

</script>

<template>
<svg :style="{width,height}">
    <use :xlink:href="prefix+value"></use>
  </svg>
</template>

<style scoped></style>
