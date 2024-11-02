import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
// import HomeView from '@/views/HomeView.vue'
// import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  //     {
  //       path: '/',
  //       name: 'home',
  //       component: HomeView,
  //     },
  //     {
  //       path: '/projects',
  //       name: 'projects',
  //       component: import('@/views/ProjectsView.vue'),
  //     },
  //     {
  //       //dynamic route
  //       path: '/projects/:id',
  //       name: 'single-project',
  //       component: import('@/views/SingleProjectView.vue'),
  //     },
  //     {
  //       // catch all 404 page
  //       path: '/:catchAll(.*)',
  //       name: 'not-found',
  //       component: h('p', { style: 'color: red' }, 'Not Found'),
  //     },
  // {
  //   //catch a 404 for a specific route
  //   path: '/projects/:catchAll(.*)',
  //   name: 'not-found',
  //   component: h('p', { style: 'color: red' }, '404 Project Not Found'),
  // },
})

export default router
