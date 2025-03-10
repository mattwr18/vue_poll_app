import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import ResultsView from '../views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/polls',
      name: 'home',
      component: HomeView,
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
