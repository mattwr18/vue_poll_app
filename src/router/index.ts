import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{ path: '/polls', component: HomeView, alias: ['/polls'] }],
    },
    {
      path: '/polls/:id',
      name: 'details',
      component: DetailView,
    },
    {
      path: '/polls/:id/results',
      name: 'results',
      component: ResultsView,
    },
  ],
})

export default router
