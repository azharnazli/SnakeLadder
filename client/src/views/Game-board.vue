<template>
  <board 
  :room="roomData"
  :dice="roomData.dice"
  :roomId="roomData.id"
  ></board>
</template>

<script>
import board from '@/components/board.vue'
import db from '../firebase';


export default {
  components: {
    board
  },
  data(){
    return {
      roomData: []
    }
  },
  methods: {
    getRoom() {
      db.collection('rooms').doc(this.$route.params.id).onSnapshot((data)=> {
        this.roomData = data.data()
      })
    }
  },
  created() {
    this.getRoom()
  }
}
</script>
