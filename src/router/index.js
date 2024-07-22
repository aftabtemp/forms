import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forms from "../components/Forms.vue"
import NotFoundView from "../views/NotFoundView.vue"
import Confirmation from "../components/Confirmation.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path:'/plans',
      name:'plans',
      component:Forms,
      props: route => ({ plan: route.query.val })

    },{
      path:'/confirmation',
      name:'confirmation',
      component: Confirmation,
      props: route =>({ obj: route.query.obj ? JSON.parse(route.query.obj) : null }),
    },{
      path:'/:catchAll(.*)',
      name:'not-found',
      component:NotFoundView

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
