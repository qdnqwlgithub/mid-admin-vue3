<script setup lang="ts">
import {login} from '@/api/user'
import { onMounted } from 'vue';
onMounted(()=>{
  login().then(r=>{
    console.log(r);
  })
})
</script>

<template>
  <div>hi</div>
  <svg-icon :value="'mi'"></svg-icon>
</template>

<style scoped lang="scss">
div {
  background-color: $loveColor;
}
</style>
