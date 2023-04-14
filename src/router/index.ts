import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mark',
      component: () => import('@/layouts/default/Default.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (Profile.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/Login.vue')

        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/Register.vue')

        },
        {
          path: 'profile',
          name: 'Profile',
          component: () => import('@/views/ProfileView.vue')
        },
        {
          path: 'roles',
          name: 'Experience',
          component: () => import('@/views/Experience.vue')
        },
        {
          path: 'roles/:id',
          name: 'Role',
          component: () => import('@/views/Role.vue'),
          beforeEnter: (to, from) => {
            if(from.name !== "Experience"){
              router.push({ name: "Experience" })
            }
          },
        },
        {
          path: 'information',
          name: 'Information',
          component: () => import('@/views/InformationView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    }
  ]
})

export default router
