<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <v-form v-model="valid">
=======
  <v-form >
>>>>>>> Add Firebase authentication
=======
  <v-form>
>>>>>>> Authentication update
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <div class="text-xs-center">
            <h3>Let's Play Game</h3>
          </div>
        </v-flex>
        <v-flex xs12 md4>
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

      register() {

        if(this.username == "" || this.email == "" || this.username == null || this.email == null)  {
          console.log('Username / Email is required')
        } else {
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
        }
      },
      checkLocal() {
        if(localStorage.getItem('id')) {
          this.$router.push('/showroom')
        }
      }
    },
    created() {
      this.checkLocal()
      Login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(
            function(user) {
              alert(`You can start to play now !`)
            },
            function(err) {
              console.log('masukkk kesini')
              alert(`Oops.` + err.message)
            }
          )

      Login: function () {
        firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(({ user }) => {
            // console.log(user.email, '-------')
            this.$swal({
              position: 'center',
              type: 'success',
              title: 'Login Success',
              showConfirmButton: false,
              timer: 1500
            })
            this.$store.commit('Login', user)
          })
          .catch(err => {
            this.$swal({
              type: 'error',
              title: 'Oops...',
              text: `Something went wrong! ${err}`,
            })
          })
>>>>>>> Authentication update
      }
    },
  }
</script>

<style>
</style>