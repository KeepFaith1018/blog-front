<script setup lang="ts">
import HomeHeader from './HomeHeader.vue'
import HomeMain from './HomeMain.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import SideBar from '@/components/SideBar.vue'
import { useConfigStore } from '@/stores'
const configStore = useConfigStore()
</script>
<template>
  <div class="container" :data-theme="configStore.theme">
    <SideBar></SideBar>
    <HomeHeader></HomeHeader>
    <HomeMain></HomeMain>
    <CommonFooter></CommonFooter>
  </div>
</template>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-text-muted);
}
</style>
