<script setup lang="ts">
import { reactive } from 'vue'
import SidebarTitle from './sidebar-title.vue';
</script>

<template>
  <div class="layout-container">
    <div class="left-sidebar">
        <SidebarTitle/>
    </div>
    <div class="right">
        <div class="topbar"></div>
        <div class="main"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .layout-container{
        display: flex;
        width: 100%;
        height: 100vh;
        .left-sidebar{
            $left-sidebar-width: 260px;
            width: $left-sidebar-width;
            background-color: green;
        }
        .right{
            flex: 1;
            // width: calc(100% - $left-sidebar-width);
        }
    }
</style>
