import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from "@/views/AccountView.vue";
import PlayView from "@/views/PlayView.vue";
import ErrorView from "@/views/ErrorView.vue";
import LoginView from "@/views/LoginView.vue";
import GameView from "@/views/GameView.vue";
import AvatarView from "@/views/AvatarView.vue";

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
    component: LoginView
  },
  {
    path: '/account',
    name: 'accountRoute',
    component: AccountView
  },
  {
    path: '/play',
    name: 'playRoute',
    component: PlayView
  },
  {
    path: '/game',
    name: 'gameRoute',
    component: GameView
  },
  {
    path: '/avatar',
    name: 'avatarRoute',
    component: AvatarView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
