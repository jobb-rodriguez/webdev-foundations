import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TemplateView from '@/views/TemplateView.vue'
import ReactivityView from '@/views/ReactivityView.vue'
import ComputedView from '@/views/ComputedView.vue'
import BindingView from '@/views/BindingView.vue'
import ListView from '@/views/ListView.vue'
import EventView from '@/views/EventView.vue'
import InputView from '@/views/InputView.vue'
import LifecycleView from '@/views/LifecycleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template',
      name: 'template',
      component: TemplateView
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: ReactivityView
    },
    {
      path: '/computed',
      name: 'computed',
      component: ComputedView
    },
    {
      path: '/bindings',
      name: 'bindings',
      component: BindingView
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/ConditionalView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    },
    {
      path: '/input',
      name: 'input',
      component: InputView
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifecycleView
    },
    {
      path: '/watcher',
      name: 'watcher',
      component: () => import('../views/WatcherView.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
  ]
})

export default router
