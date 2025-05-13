import './styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routers'
import lazeLoad from './directive/lazeLoad'
const pinia = createPinia()
createApp(App).use(router).directive('lazy', lazeLoad).use(pinia).mount('#app')
