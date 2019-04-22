<template>
  <v-toolbar color="#eaeaea">
    <v-btn flat to="/"  >
      <v-toolbar-title class="black--text">SnakeBoard</v-toolbar-title>
    </v-btn>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    checkLocalStorage() {
      console.log('masukl')
      if(!localStorage.getItem('id')) {
        this.$router.push('/')
      }
    }
  },
  created() {
    this.checkLocalStorage()
  }
}
</script>