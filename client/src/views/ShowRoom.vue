<template>
  <div>
    <BoxRoom 
    :rooms="rooms" />
  </div>
</template>
<script>
import BoxRoom from '../components/BoxRoom'
import db from '../firebase.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      

  }
  },
  components: {
    BoxRoom
  },
  created(){
    this.$store.dispatch('fetchRooms')
  },
  methods: {
    
  },
  computed: mapState(['rooms'])

}
</script>