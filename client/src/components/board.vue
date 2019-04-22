<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-6">
        <!-- board -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2 border">36</div>
            <div class="col-md-2 border">35</div>
            <div class="col-md-2 border">34</div>
            <div class="col-md-2 border bg-danger text-light">33</div>
            <div class="col-md-2 border">32</div>
            <div class="col-md-2 border">31</div>
          </div>
          <div class="row">
            <div class="col-md-2 border">25</div>
            <div class="col-md-2 border">26</div>
            <div class="col-md-2 border">27</div>
            <div class="col-md-2 border">28</div>
            <div class="col-md-2 border">29</div>
            <div class="col-md-2 border">30</div>
          </div>
          <div class="row">
            <div class="col-md-2 border bg-danger text-light">24</div>
            <div class="col-md-2 border">23</div>
            <div class="col-md-2 border">22</div>
            <div class="col-md-2 border">21</div>
            <div class="col-md-2 border bg-success text-light">20</div>
            <div class="col-md-2 border">19</div>
          </div>
          <div class="row">
            <div class="col-md-2 border">13</div>
            <div class="col-md-2 border bg-success text-light">14</div>
            <div class="col-md-2 border">15</div>
            <div class="col-md-2 border bg-danger text-light">16</div>
            <div class="col-md-2 border">17</div>
            <div class="col-md-2 border">18</div>
          </div>
          <div class="row">
            <div class="col-md-2 border">12</div>
            <div class="col-md-2 border">11</div>
            <div class="col-md-2 border">10</div>
            <div class="col-md-2 border">9</div>
            <div class="col-md-2 border">8</div>
            <div class="col-md-2 border">7</div>
          </div>
          <div class="row">
            <div class="col-md-2 border">1</div>
            <div class="col-md-2 border">2</div>
            <div class="col-md-2 border bg-success text-light">3</div>
            <div class="col-md-2 border">4</div>
            <div class="col-md-2 border">5</div>
            <div class="col-md-2 border">6</div>
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
          <button class="btn btn btn-info">
            <i class="fas fa-dice"></i> Roll Dice
          </button>
          <i style="font-size: 50px; color: red" class="fas fa-dice-one"></i>
          <i style="font-size: 50px; color: red" class="fas fa-dice-two"></i>
          <i style="font-size: 50px; color: red" class="fas fa-dice-three"></i>
          <i style="font-size: 50px; color: red" class="fas fa-dice-four"></i>
          <i style="font-size: 50px; color: red" class="fas fa-dice-five"></i>
          <i style="font-size: 50px; color: red" class="fas fa-dice-six"></i>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.border {
  height: 87px;
}
</style>
