<template>
  <v-toolbar color="#eaeaea">
    <v-btn flat to="/">
      <v-toolbar-title class="black--text">SnakeBoard</v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat color="primary">
      <span>{{ myEmail }}</span>
      <v-icon left>sentiment_satisfied_alt</v-icon>
    </v-btn>
    <v-btn flat color="error" @click="logout">
      <span>Logout</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
  import {  mapState  } from 'vuex'
  import firebase from 'firebase'

  export default {
    data(){
      return {
        myEmail: ''
      }
    },
    methods: {
      checkLocalStorage() {
        console.log('masukl')
        if (!localStorage.getItem('email')) {
          this.$router.push('/')
        }
      },
      logout() {
        firebase.auth()
          .signOut()
          .then(() => {
             this.$router.replace('home') 
             localStorage.clear()
          })
          .catch(err => {
            this.$swal({
              type: 'error',
              title: 'Oops...',
              text: `Something went wrong!, ${err}`,
            })
          })
      },
      addEmail() {
        this.myEmail = localStorage.getItem('email')
      }

    },
    created() {
      this.checkLocalStorage()
      this.addEmail()
    },
    computed: mapState([
      'userDetails',
      'isLogin'
    ])

  }
</script>