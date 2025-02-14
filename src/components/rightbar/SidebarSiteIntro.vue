<script setup lang="ts">
import IconGit from '@/components/icons/home/IconGit.vue'
</script>
<template>
  <div class="container">
    <!-- TODO:图片懒加载 -->
    <img src="https://avatars.githubusercontent.com/u/149948695?v=4" alt="" class="site-logo" />
    <h2 class="site-title">KeepFaith1018</h2>
    <p class="site-intro">一个专注于分享前端技术的个人博客，记录学习和成长的点点滴滴。</p>
    <!-- 网站内容统计 -->
    <div class="site-stats">
      <div>
        <div class="site-stats-lable">文章</div>
        <div class="site-stats-value">100</div>
      </div>
      <div>
        <div class="site-stats-lable">标题</div>
        <div class="site-stats-value">100</div>
      </div>
      <div>
        <div class="site-stats-lable">分类</div>
        <div class="site-stats-value">100</div>
      </div>
    </div>
    <!-- 网站源码按钮，跳转到github -->
    <a class="site-link" href="https://github.com/KeepFaith1018/blog-front" target="_blank">
      <IconGit class="icon-git" />
      源码 GitHub
    </a>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 40rem;
  background-color: var(--color-bg);
  border-radius: 0.8rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  .site-logo {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  .site-logo:hover {
    transform: rotate(360deg);
  }
  .site-title {
    font-size: 2.2rem;
  }
  .site-intro {
    font-size: 1.4rem;
    text-align: center;
  }
  .site-stats {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .site-stats-lable {
      font-size: 1.4rem;
    }
    .site-stats-value {
      font-size: 1.8rem;
    }
  }
  .site-link {
    width: 100%;
    height: 4rem;
    border-radius: 0.5rem;
    line-height: 4rem;
    font-size: 1.4rem;
    text-align: center;
    background-color: var(--color-button);
    color: #fff;
    &:hover {
      background-color: var(--color-button-hover);
    }
  }
  .icon-git {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
