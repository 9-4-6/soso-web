import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/seachResult',
      name: 'SeachResult',
      component: () => import('@/views/SeachResultView.vue'),
    },
    {
      path: '/sysManager',
      name: 'SysManager',
      component: () => import('@/views/SysManagerView.vue'),
      children: [
        {
          path: '/content',
          name: 'content',
          component: () => import('@/views/ContentView.vue'),
        },
      ],
    },
  ],
})

export default router
