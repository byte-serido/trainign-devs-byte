<template>
  <div class="">
    <NavbarForum />
    <MainForum />
    <AsideForum />
  </div>
</template>

<script>
import MainForum from "./components/MainForum.vue";
import NavbarForum from "./components/NavbarForum.vue";
import AsideForum from "./components/AsideForum.vue";

export default {
  name: "App",
  components: {
    NavbarForum,
    MainForum,
    AsideForum,
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
