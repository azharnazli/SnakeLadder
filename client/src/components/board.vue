<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-6">
        <!-- board -->
        <div class="container-fluid">
          <div class="row">
            <div  class="kotak col-md-2 border">36</div>
            <div  class="kotak col-md-2 border">35</div>
            <div  class="kotak col-md-2 border">34</div>
            <div  class="kotak col-md-2 border bg-danger text-light">33</div>
            <div  class="kotak col-md-2 border">32</div>
            <div  class="kotak col-md-2 border">31</div>
          </div>
          <div class="row">
            <div  class="kotak col-md-2 border">25</div>
            <div  class="kotak col-md-2 border">26</div>
            <div  class="kotak col-md-2 border">27</div>
            <div  class="kotak col-md-2 border">28</div>
            <div  class="kotak col-md-2 border">29</div>
            <div  class="kotak col-md-2 border">30</div>
          </div>
          <div class="row">
            <div  class="kotak col-md-2 border bg-danger text-light">24</div>
            <div  class="kotak col-md-2 border">23</div>
            <div  class="kotak col-md-2 border">22</div>
            <div  class="kotak col-md-2 border">21</div>
            <div  class="kotak col-md-2 border bg-success text-light">20</div>
            <div  class="kotak col-md-2 border">19</div>
          </div>
          <div class="row">
            <div  class="kotak col-md-2 border">13</div>
            <div  class="kotak col-md-2 border bg-success text-light">14</div>
            <div  class="kotak col-md-2 border">15</div>
            <div  class="kotak col-md-2 border bg-danger text-light">16</div>
            <div  class="kotak col-md-2 border">17</div>
            <div  class="kotak col-md-2 border">18</div>
          </div>
          <div class="row">
            <div  class="kotak col-md-2 border">12</div>
            <div  class="kotak col-md-2 border">11</div>
            <div  class="kotak col-md-2 border">10</div>
            <div  class="kotak col-md-2 border">9</div>
            <div  class="kotak col-md-2 border">8</div>
            <div  class="kotak col-md-2 border">7</div>
          </div>
          <div class="row">
            <div  class="kotak col-md-2 border">1</div>
            <div  class="kotak col-md-2 border">2</div>
            <div  class="kotak col-md-2 border bg-success text-light">3</div>
            <div  class="kotak col-md-2 border">4</div>
            <div  class="kotak col-md-2 border">5</div>
            <div  class="kotak col-md-2 border">6</div>
          </div>
        </div>
        <!-- end board -->
      </div>

      <!--  -->
      <div class="col-md-4">
        <div class="border mb-3"></div>
        <div class="border mb-3 p-2">
          <button class="btn btn-info">Play</button>
        </div>
        <div class="border mb-3 p-2">
          <button id="dice" :style="hide" @click="rollDice" class="btn btn btn-info">
            <i class="fas fa-dice"></i> Roll Dice
          </button>
          <i v-if="data.dice == 1" style="font-size: 50px; color: red" class="fas fa-dice-one"></i>
          <i v-if="data.dice == 2" style="font-size: 50px; color: red" class="fas fa-dice-two"></i>
          <i v-if="data.dice == 3" style="font-size: 50px; color: red" class="fas fa-dice-three"></i>
          <i v-if="data.dice == 4" style="font-size: 50px; color: red" class="fas fa-dice-four"></i>
          <i v-if="data.dice == 5" style="font-size: 50px; color: red" class="fas fa-dice-five"></i>
          <i v-if="data.dice == 6" style="font-size: 50px; color: red" class="fas fa-dice-six"></i>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
  import db from '../firebase';

  export default {
    data() {
      return {
        data: [],
        myId: localStorage.getItem('id'),
        playerIdx : '',
        hide: null
      }
    },
    methods: {
      getRoom() {
        db.collection('rooms').doc(this.$route.params.id).onSnapshot(doc => {
          this.data = doc.data()
        })
      },
      kotaks() {
       let boxes =  document.getElementsByClassName('kotak') 
       let value = Object.values(boxes)
       let allPlayers = Object.values(this.data.position)
       let name = Object.keys(this.data.position)
       value.forEach( el => {
         allPlayers.forEach( (pos, idx) => {
           if(el.innerHTML == pos) {

             el.innerHTML = name[idx].slice(0,3)
           }
         })
        //  if(el.innerHTML == this.data.position[`${this.myId}`]) {
        //    console.log(this.numbers)
        //    this.numbers = el.innerHTML
        //    el.innerHTML = `<div>${this.myId.slice(0,3)}</div>`
        //  }

       })
       
      },
      randomizer() {
        return Math.floor(Math.random() * 6) + 1
      },
      rollDice() {
        this.data.dice = this.randomizer()
        this.data.count++
        this.data.position[`${this.myId}`] += +this.data.dice
        if(this.data.position[`${this.myId}`]>= 36) {
          this.data.position[`${this.myId}`] = 36
        }
        db.collection('rooms').doc(this.$route.params.id).set(this.data)
      },
      gameRule() {
        console.log('ok')
        if(this.data.count % 4 !== this.playerIdx && !this.data.isWinner) {
          this.hide = 'display: none'
        } else {
          this.hide = 'display: block'
        }
        Object.values(this.data.position).forEach( el => {
          if(el >= 36 ) {
            this.data.isWinner = true
            db.collection('rooms').doc(this.$route.params.id).set(this.data)
            .then(()=> {
              this.hide = 'display: none'
            })
          }
        })
      }
    },
    created() {
      this.getRoom()
    },
    watch: {
      data : function() {
        if(this.data) {
          this.playerIdx =  this.data.players.indexOf(this.myId)
          this.gameRule()
          this.kotaks()
        }
      }
    }

  }
</script>

<style scoped>
  .border {
    height: 87px;
  }

</style>