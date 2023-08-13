<script setup lang="ts">
import setting from '@/setting';
</script>

<template>
    <div class="sidebar-title-container">
        <el-image style="width: 30px; height: 30px;margin-right: 15px;" :src="setting.logo" fit="fill" />
        <div class="title">{{ setting.sidebarTitle }}</div>
    </div>
</template>

<style scoped lang="scss">
.sidebar-title-container{
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
        font-weight: 700;
        font-size: 19px;
        color: white;
    }
}
</style>
