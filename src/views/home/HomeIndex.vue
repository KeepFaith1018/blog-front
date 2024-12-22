<script setup lang="ts">
import HomeHeader from './HomeHeader.vue'
import HomeMain from './HomeMain.vue'
import CommonFooter from '@/components/CommonFooter.vue'

import { useConfigStore } from '@/stores'
const configStore = useConfigStore()
</script>
<template>
  <div class="container" :data-theme="configStore.theme">
    <div class="sidebar">
      <button @click="configStore.setTheme(configStore.theme === 'light' ? 'dark' : 'light')">
        明
      </button>
    </div>
    <HomeHeader></HomeHeader>
    <HomeMain></HomeMain>
    <CommonFooter></CommonFooter>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-text-muted);
  .sidebar {
    position: fixed;
    right: 0;
    bottom: 15vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
