<script setup lang="ts">
import { login } from '@/api/user'
import { onMounted } from 'vue'
onMounted(() => {
  login().then((r) => {
    console.log(r)
  })
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
</style>
