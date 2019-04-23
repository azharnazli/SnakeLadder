<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <div class="text-xs-center">
            <h3>Let's Play Game</h3>
          </div>
        </v-flex>
        <v-flex xs12 md4  style="border: 1px solid #C2C5C3; border-radius: 20px" class="p-5 mt-5 shadow">
          <v-text-field v-model="email" label="E-mail"></v-text-field>
          <v-text-field type="password" v-model="password" label="Password"></v-text-field>
          <router-link to='/showRoom' style="textDecoration: none">
            <div class="text-xs-center">
              <v-btn flat class="success px-0 mx-0 mt-3 " @click="Login">Let's Play</v-btn>
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
  import firebase from 'firebase'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      checkLocal() {
        if (localStorage.getItem('id')) {
          this.$router.push('/showroom')
        }
      },
      Login: function () {
        firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(({ user }) => {
            this.$swal({
              position: 'center',
              type: 'success',
              title: 'Login Success',
              showConfirmButton: false,
              timer: 1500
            })
            this.$store.commit('Login', user)
            this.$router.push('/showroom')

          })
          .catch(err => {
            this.$swal({
              type: 'error',
              title: 'Oops...',
              text: `Something went wrong! ${err}`,
            })
          })
      }
    },
    created() {
      this.checkLocal()

    },
  }
</script>

<style>
</style>