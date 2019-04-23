import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import GameBoard from './views/Game-board.vue'
import ReadyBoard from './views/readyBoard.vue'
import ShowRoom from './views/ShowRoom.vue'
import SignUp from './views/signUp.vue'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game-board/:id',
      name: 'Game-board',
      component: GameBoard
    },
    {
      path: '/readyBoard/:id',
      name: 'readyBoard',
      component: ReadyBoard,
    }, 
    {
      path: '/showroom',
      name: 'ShowRoom',
      component: ShowRoom,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('home');
  else next()

})

export default router;