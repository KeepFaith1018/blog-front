<script setup lang="ts">
import LayoutMain from '@/components/layout/LayoutMain.vue'
import HomeHeader from './HomeHeader.vue'
import ArticleCard from './ArticleCard.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import SidebarIndex from '@/components/rightbar/SidebarIndex.vue'
import SideBar from '@/components/SideBar.vue'
</script>
<template>
  <div class="home-container">
    <SideBar></SideBar>
    <HomeHeader></HomeHeader>
    <LayoutMain>
      <template v-slot:left-aside>
        <ArticleCard v-for="i in 10" :key="i" :isReverse="i % 2 == 0 ? true : false"></ArticleCard>
      </template>
      <template v-slot:right-aside>
        <SidebarIndex></SidebarIndex>
      </template>
    </LayoutMain>
    <LayoutFooter
      backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ></LayoutFooter>
  </div>
</template>
<style lang="scss" scoped>
.home-container {
  position: relative;
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-text-muted);
  .layout-main {
    width: 100%;
  }
}
</style>
