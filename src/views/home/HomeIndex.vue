<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HomeCard from '@/components/HomeCard.vue'
import { useConfigStore } from '@/stores'
const configStore = useConfigStore()
import { ref } from 'vue'
// TODO：打字机效果
const content = ref('欢迎来到我的博客')
// const data = ["欢迎来到我的博客", "我是 Faith", "一个前端开发者"];
// let dataIndex = 0; // 当前文本的索引
// let charIndex = 0; // 当前字符的索引
// let isDeleting = false; // 是否处于删除状态
// let timer;
// const type = () => {
//   const currentText = data[dataIndex]; // 当前文本
//   if (!isDeleting) {
//     content.value = currentText.slice(0, charIndex++);
//     if (charIndex > currentText.length) {
//       isDeleting = true; // 切换到删除阶段
//       clearTimeout(timer);
//       timer=setTimeout(type, 1000); // 停顿 1 秒后开始删除
//       return;
//     }
//   } else {
//     // 删除阶段
//     content.value = currentText.slice(0, charIndex--);
//     if (charIndex < 0) {
//       isDeleting = false;
//       dataIndex = (dataIndex + 1) % data.length;
//       content.value = ''; // 清空内容，避免显示完整文本
//       clearTimeout(timer)
//       timer = setTimeout(type, 1000); // 停顿 0.5 秒后开始新文本
//       return;
//     }
//   }
//
//   // 动态设置速度
//   const speed = isDeleting ? 100 : 200; // 删除速度较快
//   timer=setTimeout(type, speed);
// };
//
// // 开始打字效果
// type();
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
          <span>{{ content }}</span>
        </div>
      </div>
      <div class="site-scroll">向下翻页</div>
    </header>
    <main>
      <div class="left-aside">
        <home-card v-for="i in 10" :key="i" :isReverse="i % 2 == 0 ? true : false"></home-card>
      </div>
      <div class="right-aside">右边栏</div>
    </main>
    <footer>底部</footer>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  // background-color: var(--color-bg);
  color: var(--color-text);
  // 侧边栏
  .sidebar {
    position: fixed;
    right: 0;
    bottom: 15vh;
    display: flex;
    flex-direction: column;
  }
  header {
    width: 100vw;
    height: 100vh;
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
      bottom: 3vh;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  main {
    width: 120rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;
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
</style>
