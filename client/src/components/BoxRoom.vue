<template>
  <v-container>
    <v-btn @click="createRoom" color="blue" class="text-light">
      create room
    </v-btn>
    <v-layout row wrap class="top-margin">
      <v-flex v-for="room in rooms" :key="room.id" offset-xs1>
        <div class="boxes">
          <p class="text-xs-center">{{ room.name }}</p>
          <div class="center">
            <p class="text-xs-center">Enter Room</p>
            <v-btn :disabled="room.slot == room.maxSlot" @click="enterRoom(`${room.id}`)" :roomId="room.id"
              class="center-item" color="primary">
              {{ room.slot }}/{{room.maxSlot}}
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import db from '../firebase.js'
  import firebase from 'firebase'

  export default {
    props: ['rooms'],
    methods: {
      enterRoom(id) {
        let room = {}
        db.collection('rooms').doc(id).get()
          .then((doc) => {
            room.id = doc.id
            Object.assign(room, doc.data())
          })
          .then(() => {
            if (room.players.indexOf(localStorage.getItem('id')) == -1) {
              room.slot++
              room.players.push(localStorage.getItem('id'))
            }
            db.collection('rooms').doc(id).set(room)
          })
          .then(data => {
            this.$router.push('readyBoard/' + id)
          })
      },
      createRoom() {
        db.collection('rooms').add({
            name: 'snake ladder',
            slot: 0,
            maxSlot: 4,
            players: [],
            count: 0,
            ready: 0,
            dice: 1,
            isWinner: false,
            waiting: []
          })
          .then((doc) => {
            console.log(doc)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
<style scoped>
  .boxes {
    width: 180px;
    height: 180px;
    max-width: 180px !important;
    max-height: 180px !important;
    border: 1px solid grey;
  }

  .center-item {
    margin: 20 auto;
    margin-left: 25%;
  }

  .top-margin {
    margin-top: 50px;
  }
</style>