<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <nav class="nav-bar">
    <span class="blog-info"><a>Faith's Blog</a></span>
    <div class="menus">
      <div class="search-btn">
        <span>
          <a>搜 索</a>
        </span>
      </div>
      <div class="index-btn">
        <span @click="router.push('/')">
          <a>首 页</a>
        </span>
      </div>
      <div class="atrical-btn">
        <span> <a>分 类</a> </span>
      </div>
      <div class="introduction-btn">
        <span> <a>关 于</a> </span>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-bar {
  width: 100vw;
  height: 6rem;
  // TODO: 更改为模式切换
  background-color: transparent;
  line-height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 3.6rem;
  justify-content: space-between;
  z-index: 1;
  .blog-info {
    font-size: 2rem;
  }
  .menus {
    display: flex;
    font-size: 1.5rem;
    div {
      margin: 0 2rem;
      position: relative;
    }
    span {
      width: 100%;
      vertical-align: middle;
    }
    span::after {
      content: '';
      position: absolute;
      bottom: 1.5rem;
      left: 0;
      width: 0;
      height: 2px;
      background: #007bff;
      animation: none;
    }
    span:hover {
      color: #007bff;
    }
    span:hover::after {
      animation: progress-bar 1s ease-out forwards;
    }
  }
}
@keyframes progress-bar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
