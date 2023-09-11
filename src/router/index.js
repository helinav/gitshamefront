import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateAccountView from "@/views/AccountView.vue";
import PlayView from "@/views/PlayView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component() {
      return import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    }
  },
  {
    path: '/account',
    name: 'accountRoute',
    component: CreateAccountView
  },
  {
    path: '/play',
    name: '/play',
    component: PlayView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
