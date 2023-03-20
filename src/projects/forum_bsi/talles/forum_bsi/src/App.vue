<template lang="">
  <div>
    <MyNavbar/>
</div>
</template>
<script>
import MyNavbar from './components/MyNavbar.vue';
export default {
  components: {
    MyNavbar,
  },
}
</script>
<style>

  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(89, 8, 89);
  }

</style>