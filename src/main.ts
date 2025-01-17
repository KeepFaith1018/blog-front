import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routers'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
