import { createRouter, createWebHistory } from 'vue-router'
import architectureResau from '../components/architectureReseau.vue'
import developpementWeb from '../components/developpementWeb.vue'

import HomePage from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage, // Page d'accueil avec les 3 composants
    },
   
  
    {
      path: '/architectureReseau',
      name: 'architectureReseau',
      component: architectureResau
    },
    {
      path: '/developpementweb',
      name: 'developpementweb',
      component: developpementWeb
    },
   
   
  ]
})

export default router
