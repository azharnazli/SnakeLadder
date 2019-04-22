<template>
  <div class="board">
    <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <v-layout align-end justify-center row fill-height>
            <div 
            v-for="(player, index) in room.players"
            :key="index">
            <v-btn 
            v-if="player == myId"
            @click="ready"
            >Ready</v-btn>
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
        room : {},
        myId : localStorage.getItem('id')
      }
    },
    methods: {
      getRoom() {
        console.log(this.$route.params.id)
        db.collection('rooms').doc(this.$route.params.id).get()
        .then(doc => {
          this.room = doc.data()
        })
        .catch(err => {
          console.log(err)
        })
      },
      ready() {
        this.room.ready++
        db.collection('rooms').doc(this.$route.params.id).set(this.room)
        .then((data)=> {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })

      }
    },
    created() {
      this.getRoom()
    },
    watch: {
      room() {
        if(this.room.ready == 4) {
          this.$router.push('/game-board')
        }
      }
    }
  }
</script>

<style>

</style>