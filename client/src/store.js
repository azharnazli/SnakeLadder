import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms : []

  },
  mutations: {
    fetchRooms(state, payload) {
      state.rooms = payload
    }

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
    }
  }
})
