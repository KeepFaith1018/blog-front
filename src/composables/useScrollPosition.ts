// src/composables/useScrollPosition.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollPosition() {
  const position = ref(0) // 元素相对于视口顶部的距离

  const handleScroll = () => {
    position.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // 页面加载时立即获取一次位置
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { position } // 返回当前位置
}
