import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/spine-boy',
      name: 'SpineBoy',
      component: () => import('../views/SpineBoy/index.vue')
    },
    {
      path: '/learn',
      name: 'Learn',
      component: () => import('../views/Learn/index.vue')
    },
    {
      path: '/red-package',
      name: 'RedPackage',
      component: () => import('../views/RedPackage/index.vue')
    }
  ],
})

export default router
