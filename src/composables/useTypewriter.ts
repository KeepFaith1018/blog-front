import { ref, watchEffect } from 'vue'
interface UseTypewriterOptions {
  speed?: number // 每个字符显示的速度
  pause?: number // 停顿时间
}

interface UseTypewriterReturn {
  displayedText: Readonly<{ value: string }>
}

/**
 * 返回一个相应式的数据,用作打字机效果
 * @param data string:string[]
 * @param options {speed?:number,pause?:number}
 * @returns
 */
export function useTypewriter(
  data: string | string[],
  options: UseTypewriterOptions = {},
): UseTypewriterReturn {
  const displayedText = ref('')
  const isAdding = ref(true)
  const { speed = 100, pause = 1000 } = options
  let currentIndex = 0
  let intervalId: NodeJS.Timeout | undefined
  // 获取当前的目标字符串
  const getCurrentText = (): string => {
    if (Array.isArray(data)) {
      return data[currentIndex]
    }
    return data
  }
  const startTyping = () => {
    intervalId = setInterval(() => {
      const currentText = getCurrentText()
      if (isAdding.value) {
        if (displayedText.value.length < currentText.length) {
          // 增加字符
          displayedText.value += currentText[displayedText.value.length]
        } else {
          isAdding.value = false
          clearInterval(intervalId)
          setTimeout(startTyping, pause)
        }
      } else {
        if (displayedText.value.length > 0) {
          // 删除字符
          displayedText.value = displayedText.value.slice(0, -1)
        } else {
          // 停顿后切换到下一个字符串或重新添加
          isAdding.value = true
          if (Array.isArray(data)) {
            currentIndex = (currentIndex + 1) % data.length
          }
          clearInterval(intervalId)
          setTimeout(startTyping, pause)
        }
      }
    }, speed)
  }

  startTyping()

  watchEffect(() => {
    return () => clearInterval(intervalId)
  })

  return { displayedText }
}
