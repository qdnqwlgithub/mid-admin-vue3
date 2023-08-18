<template>
  <!-- layout -->
  <el-sub-menu :index="menuItem.path" v-if="menuItem.children">
    <template #title>{{ menuItem.meta.title }}</template>
    <menu-item v-for="item in menuItem.children" :menu-item="item" />
  </el-sub-menu>
  <!-- not layout -->
  <el-menu-item v-else-if="!menuItem.meta.hidden" :index="menuItem.path">
    <template #title>
      <!-- todo -->
<!--        <el-icon></el-icon>-->
      <span>{{ menuItem.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
// import {defineComponent} from "vue";

// export default defineComponent({
//   name: 'menuItem'
// })

import MenuItem from '@/layout/sidebar-menus/menu-item.vue'

defineProps({
  menuItem: {
    type: Object,
    require: true
  }
})
</script>

<style scoped>

</style>
