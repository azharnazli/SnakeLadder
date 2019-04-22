
<template>
  <v-app>
    <Navbar>
    </Navbar>
    <router-view>
    </router-view>
    <Footer>
    </Footer>
  </v-app>
</template>

<script>
  import Footer from './components/Footer'
  import Navbar from './components/Navbar'

<<<<<<< HEAD
export default {
  name: 'App',
  components: {
    Footer,
    Navbar
    
  },
  data () {
    return {
      //
    }
  }
}
=======
  export default {
    name: 'App',
    components: {
      Footer,
      Navbar

    },
    data() {
      return {
        //
      }
    }
  }
>>>>>>>  add room
</script>