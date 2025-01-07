<script setup lang="ts">
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutMain from '@/components/layout/LayoutMain.vue'
import SideBar from '@/components/SideBar.vue'
import ArticleMainLeft from '@/views/article/ArticleMainLeft.vue'
import ArticleMainRight from '@/views/article/ArticleMainRight.vue'
</script>
<template>
  <div class="card-container">
    <SideBar></SideBar>
    <LayoutHeader background-image="https://images.unsplash.com/photo-1498050108023-c5249f4df085">
    </LayoutHeader>
    <LayoutMain>
      <template v-slot:left-aside>
        <ArticleMainLeft></ArticleMainLeft>
      </template>
      <template v-slot:right-aside>
        <ArticleMainRight></ArticleMainRight>
      </template>
    </LayoutMain>
    <LayoutFooter
      background-image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ></LayoutFooter>
  </div>
</template>
<style scoped lang="scss">
.card-container {
  position: relative;
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-text-muted);
}
</style>
