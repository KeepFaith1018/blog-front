<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import IconDown from '@/components/icons/home/IconDown.vue'
import { useTypewriter } from '@/composables/useTypewriter'
const typeContent = useTypewriter('欢迎来到我的博客').displayedText
</script>

<template>
  <header>
    <nav-bar></nav-bar>
    <div class="site-info">
      <h1 class="site-title">Faith's Blog</h1>
      <div class="auto">
        <span>{{ typeContent }}</span>
      </div>
    </div>
    <div class="site-scroll">
      <a><IconDown class="site-scroll-icon"></IconDown></a>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative;
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  background: url('../../assets/images/home-header-2560x1600.jpg') no-repeat center center / cover;
  .site-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .site-title {
      width: 100vw;
      height: 6rem;
      text-align: center;
      line-height: 6rem;
      font-size: 5rem;
    }
    .auto {
      height: 4rem;
      line-height: 4rem;
      text-align: center;
      font-size: 4rem;
      span::after {
        content: '|';
        animation: blink 1s infinite;
      }
      @keyframes blink {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
  .site-scroll {
    position: absolute;
    bottom: 6vh;
    left: 50%;
    transform: translate(-50%, 0);
    animation: nextPage 2s infinite;
    :deep(.site-scroll-icon) {
      width: 3rem;
      height: 3rem;
    }
  }
}
@keyframes nextPage {
  0% {
    bottom: 6vh;
  }
  50% {
    bottom: 3vh;
  }
  100% {
    bottom: 6vh;
  }
}
</style>
