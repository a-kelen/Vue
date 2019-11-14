import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auditions from '../views/Auditions.vue'
import Tests from '../views/Tests.vue'
import Results from '../views/Results.vue'
import MasterAudition from '../views/MasterAudition.vue'
import Chats from '../views/Chats.vue'
import UserCabinet from '../views/UserCabinet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auditions',
    name: 'auditions',
    component: Auditions
  },
  {
    path: '/tests',
    name: 'tests',
    component: Tests
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  },
  {
    path: '/master',
    name: 'master',
    component: MasterAudition
  },
  {
    path: '/chats',
    name: 'chats',
    component: Chats
  },
  {
    path: '/usercabinet',
    name: 'usercabinet',
    component: UserCabinet
  }
]

const router = new VueRouter({
  routes
})

export default router
