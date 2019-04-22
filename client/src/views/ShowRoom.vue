<template>
  <v-container>
    <BoxRoom 
    v-for=" room in rooms "
    :key="room.id"
    :room="room" />
  </v-container>
</template>
<script>
import BoxRoom from '../components/BoxRoom'
import db from '../firebase.js'
export default {
  data() {
    return {
      rooms: []
    }
  },
  components: {
    BoxRoom
  },
  created(){
    this.fetchRooms()
  },
  methods: {
    fetchRooms() {
      db.collection('rooms')
        .onSnapshot(({docs}) => {
          docs.forEach( el => {
            this.rooms.push({
              id: el.id,
              ...el.data()
            })
          })
        })
    }
  }
}
</script>