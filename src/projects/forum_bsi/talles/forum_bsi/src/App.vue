<template lang="">
  <div>
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
  }

  body {
    background-color: rgb(89, 8, 89);
  }

</style>