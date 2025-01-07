<script setup lang="ts">
import IconAnalytics from '@/components/icons/home/IconAnalytics.vue'
</script>
<template>
  <div class="container">
    <h2 class="headline">
      <IconAnalytics class="icon-analytics" />
      文章结构
    </h2>
    <div class="item">
      <div>建议的 Git 分支策略和流程</div>
    </div>
    <div class="item">
      <div>持续集成（可选）</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  background-color: var(--color-bg);
  border-radius: 0.8rem;
  padding: 2rem;
  .headline {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    .icon-analytics {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .item {
    width: 85%;
    height: 3rem;
    line-height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 1.4rem;
  }
}
</style>
