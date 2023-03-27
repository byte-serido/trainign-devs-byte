<template>
  <main class="main">
    <div>
      <input
        class="boxcreate"
        type="text"
        placeholder="escreva sua duvida ou problema"
      />
    </div>
    <p class="duvidas">Duvidas e perguntas</p>
    <div class="list"></div>
  </main>
</template>

<script>
export default {
  name: "MainForum",
};
</script>

<style>
.main {
  grid-area: main;
  background: #13111b;
  color: #ff79c6;
}

.boxcreate {
  margin: 15px;
  margin-left: 32px;
  margin-right: 32px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  background: #191622;
  width: 80vh;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  padding-left: 15px;
}

.boxcreate::placeholder {
  color: #292730;
}
</style>
