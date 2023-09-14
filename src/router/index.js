import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
import AddMovie from '../views/AddMovie.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/movie/:id',
    name: 'Details',
    component: Details,
    props:true
  },
  {
    path: '/add',
    name: 'AddMovie',
    component: AddMovie,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
