<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import IconDate from '@/components/icons/home/IconDate.vue'
import IconTag from '@/components/icons/home/IconTag.vue'
import IconView from '@/components/icons/home/IconView.vue'
import IconCount from '@/components/icons/article/IconCount.vue'
import IconClock from '@/components/icons/article/IconClock.vue'
import NavBar from '@/components/NavBar.vue'

const props = defineProps<{
  backgroundImage: string
}>()
const bgStyle = computed(() => ({
  background: `url(${props.backgroundImage}) no-repeat center bottom / cover`,
}))
const isPostInfo = ref(true)
</script>
<template>
  <header :style="bgStyle" class="container">
    <NavBar></NavBar>
    <div v-if="isPostInfo" class="post-info-container">
      <h2 class="article-title">文章标题</h2>
      <div class="article-info-data">
        <!-- 文章数据 -->
        <span class="article-info-data-date">
          <IconDate class="icon-common"></IconDate>
          发表于 2020-05-28</span
        >
        <span class="article-info-data-tag">
          <IconTag class="icon-common"></IconTag>
          <a>Doc文档</a>
        </span>
      </div>
      <div class="article-info-data-next">
        <span class="article-info-data-view-count">
          <IconCount class="icon-common"></IconCount>
          字数统计：10000
        </span>
        <span class="article-info-data-view-date">
          <IconClock class="icon-common"></IconClock>
          阅读时间：10000
        </span>
        <span class="article-info-data-view">
          <IconView class="icon-common"></IconView>
          浏览量：10000
        </span>
      </div>
    </div>
    <div v-else class="other-container"></div>
  </header>
</template>
<style scoped lang="scss">
.container {
  position: relative;
  width: 100vw;
  height: 40rem;
  color: var(--color-text);
  background-color: var(--color-text-muted);
  .post-info-container {
    width: 120rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3rem;
    color: #fff;
    .article-title {
      font-size: 3.5rem;
      height: 5rem;
    }
    .icon-common {
      color: #fff;
      width: 1.4rem;
      height: 1.4rem;
      margin-right: 0.5rem;
      display: inline-block;
      vertical-align: middle;
    }
    .article-info-data-next {
      span {
        margin-right: 2rem;
      }
    }
  }
}
</style>
