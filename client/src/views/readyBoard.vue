<template>
  <div class="board">
    <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <v-layout align-end justify-center row fill-height>
            <div v-for="(player, index) in room.players" :key="index">
              <v-btn :disabled="lock" v-if="player == myId" @click="ready">Ready</v-btn>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import db from '../firebase';

  export default {
    data() {
      return {
        room: {},
        myId: localStorage.getItem('id'),
        lock: false
      }
    },
    methods: {
      getRoom() {
        db.collection('rooms').doc(this.$route.params.id).onSnapshot((data) => {
          this.room = data.data()
        })
      },
      ready() {
        this.room.ready++
        if (this.room.position === undefined) {
          this.room.position = {}
          this.room.position[`${this.myId}`] = 0
        } else {
          this.room.position[`${this.myId}`] = 0
        }
        this.room.waiting.push(this.myId)
        console.log(this.room)
        db.collection('rooms').doc(this.$route.params.id).set(this.room)
          .then((data) => {
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })

      },
      checkButton() {
        if (this.room.waiting.indexOf(this.myId) != -1) {
          this.lock = true
        }
      }
    },
    created() {
      this.getRoom()
    },
    watch: {
      room() {
        if (this.room) {
          this.checkButton()
          if(this.room.ready == 4) {
            this.$router.push('/game-board/' + this.$route.params.id)
          }
        }
      },
    }
  }
</script>

<style>

</style>