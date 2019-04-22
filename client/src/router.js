import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GameBoard from './views/Game-board.vue'
import ShowRoom from './views/ShowRoom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game-board',
      name: 'Game-board',
      component: GameBoard
    },
    {
      path: '/showRoom',
      name: 'ShowRoom',
      component: ShowRoom
    }
  ]
})
