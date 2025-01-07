<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useConfigStore } from '@/stores/config/config'
import IconToTop from './icons/home/IconToTop.vue'
const configStore = useConfigStore()
const scrollProgress = ref(0)
const isShow = ref(false)
// 监听滚动事件
const updateScrollProgress = () => {
  const scrollTop = window.scrollY
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  scrollProgress.value = (scrollTop / (scrollHeight - clientHeight)) * 100
  if (scrollTop > clientHeight / 2) {
    isShow.value = true
  } else {
    isShow.value = false
  }
}

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 注册和注销事件
onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>
<template>
  <div>
    <transition name="fade-slide">
      <div class="side-toolbar" v-show="isShow">
        <!-- 明暗切换 -->
        <div
          class="btu-common"
          @click="configStore.setTheme(configStore.theme == 'dark' ? 'light' : 'dark')"
        >
          {{ configStore.theme == 'light' ? '明' : '暗' }}
        </div>
        <!-- 回到顶部 -->
        <div class="btu-common progress">{{ scrollProgress.toFixed(0) }}</div>
        <div class="btu-common" @click="scrollToTop">
          <IconToTop class="icon-to-top" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.side-toolbar {
  position: fixed;
  z-index: 1;
  top: 80%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  color: #fff;
  .btu-common {
    width: 3rem;
    height: 3rem;
    background-color: var(--color-button);
    font-size: 1.6rem;
    text-align: center;
    line-height: 3rem;
    cursor: pointer;
    border-radius: 0.4rem;
  }
  .btu-common:hover {
    background-color: var(--color-button-hover);
  }
  .progress {
    margin: 1rem 0;
  }
  .icon-to-top {
    width: 1.6rem;
    height: 1.6rem;
  }
}
/* 淡入淡出动画 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
