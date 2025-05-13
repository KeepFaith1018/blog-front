<script setup lang="ts">
import IconRecent from '@/components/icons/home/IconRecent.vue'
type Article = {
  imageUrl: string
  title: string
  publishDate: string
}
const articles: Array<Article> = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: '探索自然之美sdfafsdfdasfasfsadsdfdsa',
    publishDate: '2024-12-20',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    title: '提升时间管理的10个小技巧',
    publishDate: '2024-12-18',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: '深入理解 JavaScript 闭包',
    publishDate: '2024-12-15',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: '如何用 Vue 搭建个人博客',
    publishDate: '2024-12-10',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    title: '人工智能的未来趋势',
    publishDate: '2024-12-05',
  },
]
</script>
<template>
  <div class="container">
    <h2 class="headline">
      <IconRecent class="icon-rencent" />
      最近文章
    </h2>
    <div class="item" v-for="article in articles" :key="article.title">
      <div class="article-img">
        <!-- TODO: 图片懒加载 -->
        <img :src="article.imageUrl" />
      </div>
      <div class="article-info">
        <div class="article-title">
          <a>{{ article.title }}</a>
        </div>
        <div class="article-date">{{ article.publishDate }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  margin-top: 2rem;
  width: 100%;
  background-color: var(--color-bg);
  border-radius: 0.8rem;
  padding: 2rem;
  .headline {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    .icon-rencent {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .item {
    width: 100%;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    margin: 1rem 0 0 0;
    border-bottom: 0.2rem dotted var(--color-border);
    .article-img {
      flex-shrink: 0;
      width: 5.5rem;
      height: 5.5rem;
      overflow: hidden;
      border-radius: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .article-info {
      flex: 1;
      min-width: 0;
      padding: 0.5rem 1rem;
      .article-title {
        width: 100%;
        height: 2rem;
        font-size: 1.4rem;
        color: var(--color-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .article-title:hover {
        a {
          color: #17a2b8;
        }
      }
      .article-date {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: var(--color-text-muted);
      }
    }
  }
  .item:last-child {
    border-bottom: none;
  }
  .item .article-img:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
