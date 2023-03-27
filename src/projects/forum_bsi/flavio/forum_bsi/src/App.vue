<template>
  <div class="">
    <NavbarForum />
  </div>
</template>

<script>
import NavbarForum from "./components/NavbarForum.vue";

export default {
  name: "App",
  components: {
    NavbarForum,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Rubik", sans-serif;
  min-height: 100%;
  background: #13111b;
}
</style>
