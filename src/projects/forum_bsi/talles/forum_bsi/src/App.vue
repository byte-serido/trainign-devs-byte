<template lang="">
  <div id="app">
    <MyNavbar/>
    <MyDashboard/>
</div>
</template>
<script>
import MyNavbar from './components/MyNavbar.vue';
import MyDashboard from './components/MyDashboard.vue';
export default {
  components: {
    MyNavbar,
    MyDashboard,

  },
}
</script>
<style>

  * {
    font-family: 'Rubik';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.737);
    background-color: #13111B;
  }

  #app{
    height: 100vh;
  }

</style>