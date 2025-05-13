<script setup lang="ts">
import { useScrollPosition } from '@/composables/useScrollPosition'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const showNavbar = ref(false)
const { position } = useScrollPosition()
watch(position, (newValue, oldValue) => {
  if (newValue === 0) {
    showNavbar.value = false
    return
  }
  if (newValue < oldValue) {
    showNavbar.value = true
  } else {
    showNavbar.value = false
  }
})
</script>

<template>
  <nav :class="['nav-bar', { fixed: showNavbar }]">
    <span class="blog-info" @click="router.push('/')"><a>Faith's Blog</a></span>
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
  background-color: transparent;
  line-height: 6rem;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 3.6rem;
  justify-content: space-between;
  z-index: 1;
  background-color: rgb(44, 44, 44);
  transition: top 0.3s ease-in-out; /* 平滑过渡 */

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(44, 44, 44, 0.4);
  }

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
