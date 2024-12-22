<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
</script>
<template>
  <main>
    <div class="left-aside">
      <ArticleCard v-for="i in 10" :key="i" :isReverse="i % 2 == 0 ? true : false"></ArticleCard>
    </div>
    <div class="right-aside">右边栏</div>
  </main>
</template>
<style scoped lang="scss">
main {
  width: 120rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  color: var(--color-text);
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  .left-aside {
    width: 70%;
  }
  .right-aside {
    padding: 0 0 0 1.5rem;
    background-color: var(--color-bg);
    width: 29%;
  }
}
</style>
