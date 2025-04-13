class ImageProxy {
  target: string
  constructor(url: string) {
    this.target = url
  }

  loadImage(el: HTMLImageElement) {
    const placeholder = '/blog.png'
    el.src = placeholder
    console.log('进入加载')
    console.log(this.target)

    const img = new Image()
    img.src = this.target
    img.onload = () => {
      console.log('加载完成')
      el.src = this.target
    }
    img.onerror = (e) => {
      console.log(e)
    }
  }
}

export default {
  mounted(el: HTMLImageElement, binding: { value: string }) {
    const imageProxy = new ImageProxy(binding.value)
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageProxy.loadImage(el) // 交给代理模式处理加载逻辑
          observer.unobserve(el) // 取消监听，避免重复加载
        }
      })
    })
    observer.observe(el)
  },
}
