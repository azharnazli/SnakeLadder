<template>
  <div class="sign-up">
    <v-form >
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            <v-btn @click="signUp">Sign Up</v-btn><br>
            <span>or go back to <router-link to='/'>Login</router-link></span>
          </v-flex>
          <v-flex xs12 md4>
            <div class="text-xs center">
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ]
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert('Your account has been created !')
          },
          function(err) {
            alert(`Oops.` + err.message)
          }
        )
      }
    }
  }
</script>

<style>

</style>