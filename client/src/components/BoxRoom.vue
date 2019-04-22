<template>
  <div class="container">
    <div>
      <div class="box">
        <p class="text-xs-center">{{ room.name }}</p>
        <v-btn style="display:flex;" class="align-center" color="primary">ENTER</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['room']
  }
</script>
<style scoped>
  .box {
    height: 280px;
    width: 280px;
    border: 1px solid grey;
  }

  .v-btn__content {
    margin-left: 100px;
  }
</style>