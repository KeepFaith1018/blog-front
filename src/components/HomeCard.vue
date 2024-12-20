<script setup lang="ts">
import IconDate from './icons/home/IconDate.vue'
import IconTag from './icons/home/IconTag.vue'
import IconView from './icons/home/IconView.vue'
const props = defineProps(['isReverse'])
</script>
<template>
  <div :class="props.isReverse ? 'card-container row-reverse ' : 'card-container'">
    <div class="card-img-container">
      <a href="">
        <img src="@/assets/images/text-img.jpg" alt="" />
      </a>
    </div>
    <div class="card-info">
      <h3 class="card-info-title">测试文章标题</h3>
      <div class="card-info-data">
        <!-- 文章数据 -->
        <span class="card-info-data-date">
          <IconDate class="card-info-data-icon"></IconDate>
          发表于 2020-05-28</span
        >
        <span class="card-info-data-tag">
          <IconTag class="card-info-data-icon"></IconTag>
          <a>Doc文档</a>
        </span>
        <span class="card-info-data-view">
          <IconView class="card-info-data-icon"></IconView> 10000
        </span>
      </div>
      <div class="card-info-introduce">
        <span
          >测试文章内容，这里这里展示的是文章的介绍。测试文章内容，这里这里展示的是文章的介绍</span
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-container {
  margin: 0 0 2rem;
  width: 100%;
  height: 24rem;
  background-color: var(--color-bg);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  .card-img-container {
    border-radius: 0.8rem;
    width: 40%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  .card-info {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 0 4rem;
    .card-info-title {
      font-size: 2rem;
    }
    .card-info-data {
      height: 3rem;
      line-height: 3rem;
      font-size: 1.4rem;
      color: var(--color-text-muted);
      margin: 2rem 0;
      display: flex;
      align-items: center;
      .card-info-data-tag {
        margin: 0 2rem;
      }
      .card-info-data-tag:hover {
        color: #17a2b8;
      }
    }

    .card-info-data-content {
      font-size: 1.6rem;
    }
  }
  &:hover {
    .card-img-container img {
      transform: scale(1.2);
    }
  }
}
.row-reverse {
  flex-direction: row-reverse;
}
:deep(.card-info-data-icon) {
  height: 2rem;
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
