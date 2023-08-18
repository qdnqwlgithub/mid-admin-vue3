<script setup lang="ts">
import SidebarTitle from './sidebar-title.vue'
import SideBarMenus from './sidebar-menus/index.vue'
</script>

<template>
  <div class="layout-container">
    <div class="left-sidebar">
      <SidebarTitle/>
      <SideBarMenus/>
    </div>
    <div class="right">
      <div class="topbar"></div>
      <div class="main">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  display: flex;
  width: 100%;
  height: 100vh;
  & > .left-sidebar {
    $left-sidebar-width: 260px;
    width: $left-sidebar-width;
    background-color: green;
    & > .left-scroll{
        height: calc(100vh - $sidebarTitleHeight);
    }
  }
  .right {
    flex: 1;
    &>.main{
      &>.fade-enter-from {
        opacity: 0;
        transform: rotate(0deg);
      }
      &>.fade-enter-active {
        transition: all 1s;
      }
      &>.fade-enter-to {
        opacity: 1;
        transform: rotate(360deg);
      }
    }
  }
}
</style>
