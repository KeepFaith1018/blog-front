<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HomeCard from '@/components/HomeCard.vue'
import IconDown from '@/components/icons/home/IconDown.vue'
import { useConfigStore } from '@/stores'
const configStore = useConfigStore()
import { useTypewriter } from '@/composables/useTypewriter'
const typeContent = useTypewriter('欢迎来到我的博客').displayedText
</script>
<template>
  <div class="container" :data-theme="configStore.theme">
    <div class="sidebar">
      <button @click="configStore.setTheme(configStore.theme === 'light' ? 'dark' : 'light')">
        明
      </button>
    </div>
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
    <main>
      <div class="left-aside">
        <home-card v-for="i in 10" :key="i" :isReverse="i % 2 == 0 ? true : false"></home-card>
      </div>
      <div class="right-aside">右边栏</div>
    </main>
    <footer></footer>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  color: var(--color-text);
  background-color: var(--color-text-muted);
  .sidebar {
    position: fixed;
    right: 0;
    bottom: 15vh;
    display: flex;
    flex-direction: column;
  }
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
