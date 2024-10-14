import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/IndexPage.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    children: [
      {
        path: '/Home/About',
        name: 'About',
        component: () => import('@/views/AboutMe.vue')
      }
    ]
  },
  {
    path: '/Article',
    name: 'Article',
    component: () => import('@/views/ArticlePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router