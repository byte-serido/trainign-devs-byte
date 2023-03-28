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
    <div class="list">
      <div class="pergunta">
        <p>Não consigo mudar a versão do linux, como faço?</p>
      </div>
    </div>
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
  margin: 0 32px;
}

.boxcreate {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  margin-top: 15px;
  height: 77px;
  border: 0;
  border-radius: 4px;
  background: #191622;
  width: 1256px;

  color: #fff;
  padding-left: 15px;
}

.boxcreate::placeholder {
  color: #292730;
}
.duvidas {
  margin-top: 100px;
}
.pergunta {
  height: 77px;
  width: 1256px;
  background: #191622;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 10px;
}
</style>
