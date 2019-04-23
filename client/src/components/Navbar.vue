<template>
  <v-toolbar color="#eaeaea">
    <v-btn flat to="/">
      <v-toolbar-title class="black--text">SnakeBoard</v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat color="primary" v-if="myEmail">
      <span>{{ myEmail }}</span>
      <v-icon left>sentiment_satisfied_alt</v-icon>
    </v-btn>
    <v-btn flat color="error" v-if="myEmail" @click="logout">
      <span>Logout</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
    <router-link to='/sign-up' v-if="!myEmail" style="textDecoration: none">
    <v-btn flat color="success">
      <span>Sign Up</span>
    <v-icon right>exit_to_app</v-icon>
    </v-btn>
    </router-link>
  </v-toolbar>
</template>
<script>
  import {  mapState  } from 'vuex'
  import firebase from 'firebase'

  export default {
    data(){
      return {
        myEmail: localStorage.getItem('email')
      }
    },
    methods: {
      checkLocalStorage() {
        console.log('masukl')
        if(this.$route.path != '/sign-up') {
          if (!localStorage.getItem('email')) {
            this.$router.push('/')
          }
        }
      },
      logout() {
        firebase.auth()
          .signOut()
          .then(() => {
             this.$router.push('/') 
             localStorage.clear()
             this.myEmail = ''
              this.$store.commit('Logout')
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
    ]),
    watch: {
      isLogin() {
        if(this.isLogin) {
          this.myEmail = localStorage.getItem('email')
        }
      }
    }

  }
</script>