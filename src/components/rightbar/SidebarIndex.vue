<script setup lang="ts">
import SidebarSiteIntro from './SidebarSiteIntro.vue'
import SidebarAnalytics from './SidebarAnalytics.vue'
import SidebarRecent from './SidebarRecent.vue'
</script>
<template>
  <div class="sidebar-container">
    <SidebarSiteIntro />
    <SidebarRecent />
    <SidebarAnalytics />
  </div>
</template>
<style scoped lang="scss">
.sidebar-container {
  width: 100%;
  padding: 0 0 2rem;
}
</style>
