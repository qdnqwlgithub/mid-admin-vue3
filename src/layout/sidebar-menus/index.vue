<script setup lang="ts">
import {useUserStore} from "@/store/user";
import MenuItem from "@/layout/sidebar-menus/menu-item.vue";
let userStore = useUserStore();
</script>

<template>
  <div class="sidebar-menus-container">
    <el-scrollbar class="left-scroll">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
      >
        <MenuItem v-for="menuItem in userStore.routes" :menuItem="menuItem"></MenuItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
</style>
