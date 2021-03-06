import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms : [],
    name: '',
    isLogin: false,
    userDetails: ''

  },
  mutations: {
    fetchRooms(state, payload) {
      state.rooms = payload
    },
    Login(state, payload) {
      state.isLogin = true
      localStorage.setItem('email', payload.email)
      localStorage.setItem('id', payload.email)
      state.userDetails = payload.email

    },
    Logout(state) {
      state.isLogin = false
      localStorage.clear()
    },
  },
  actions: {
    fetchRooms({commit}) {
      db.collection('rooms')
      .onSnapshot( (data) => {
        let allRoom = []
          data.forEach( el => {
            allRoom.push({
              id: el.id,
              ...el.data()
            })
          })
          commit('fetchRooms', allRoom)
        })
    },
    verifyLoggedIn() {
      firebase.auth().onAuthStateChanged(function() {

    })
  }
}
})
  
