// 全局状态控制配置
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const theme = ref('dark')
  const setTheme = (_value: string) => (theme.value = _value)
  return {
    theme,
    setTheme,
  }
})
