<template>

  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <div class="text-xs-center">
            <h3>Let's Play Game</h3>
          </div>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field v-model="username" :rules="nameRules" :counter="10" label="Username" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <router-link to='/showRoom' style="textDecoration: none">
          <div class="text-xs-center">
            <v-btn flat class="success px-0 mx-0 mt-3 " @click="register">START</v-btn>
          </div>
          </router-link>
        </v-flex>
              
        <v-flex xs12 md4>
          <div class="text-xs center">
            <h3>Play Gameeee</h3>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  import db from '@/firebase.js'

  export default {
    data() {
      return {
        valid: false,
        username: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    methods: {
      register() {
        db.collection('snakeLadder').add({
            username: this.username,
            email: this.email
          })
          .then((doc) => {
            console.log(`Register new User with ID`, doc.id)
          })
          .catch(err => {
            console.log(`Error registering new Player`, err)
          })
      },

    }

  }
</script>

<style>

</style>