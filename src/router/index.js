import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
import AddMovie from '../views/AddMovie.vue'
import Tags from '../views/Tags.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
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
  },
  {
    path: '/tags/:tag',
    name: 'Tags',
    component: Tags,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
