<template>
  <body class="grid-container">
    <NavbarForum />
    <MainForum />
    <AsideForum />
  </body>
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
  padding: 5px;
}

.grid-container {
  display: grid;
  grid-template:
    "navbar" 50px
    "main" auto
    "sidebar" auto
    "footer" 50px;

  font-size: 1rem;
}

@media (min-width: 1000px) {
  .grid-container {
    grid-template:
      "navbar navbar" 60px
      "main sidebar" auto "footer footer" 50px;

    grid-template-columns: 4fr 1fr;
    font-size: 1.2rem;
  }
}
</style>
