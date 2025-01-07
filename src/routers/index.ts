import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/home/HomeIndex.vue') },
  {
    path: '/article/:id',
    component: () => import('../views/article/ArticleIndex.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
