<template>
  <div class="sign-up">
    <v-form >
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
          </v-flex>
          <v-flex xs12 md4 style="border: 1px solid #C2C5C3; border-radius: 20px; margin-top: 120px" class="p-5 shadow">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            <div class="text-center">
            <v-btn color="pink" class="text-light mt-2" @click="signUp">Sign Up</v-btn><br>
            <span>or go back to <router-link to='/'>Login</router-link></span>
            </div>
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
          (user)=> {
            this.$swal({
              position: 'center',
              type: 'success',
              title: 'Sign Up Success',
              showConfirmButton: false,
              timer: 1500
            })
          },
           (err)=> {
            this.$swal({
              type: 'error',
              title: 'Oops...',
              text: `Something went wrong!, ${err}`,
            })
          }
        )
      }
    }
  }
</script>

<style>

</style>