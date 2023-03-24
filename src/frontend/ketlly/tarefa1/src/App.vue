<template>
  <header class="cabecalho">
    <nav>
      <ul class="menu">
        <li><img src="./assets/img/girl-happy.jpg" class="imagem"></li>
        <li>
          <p>Lilia</p>
        </li>
      </ul>
    </nav>
    <div id="pesquisa">
      <input type="text" placeholder="procure aqui ..." class="fontTexto">
    </div>
  </header>
  <main>
    <div class="principal edit">
      <div class="pergunta">
        <input type="text" class="fontTexto input" placeholder="escreva aqui sua duvida ou problema...">
        <button class="botao"><img src="./assets/img/Shape.svg" alt=""></button>
      </div>
      <h2 class="title">Duvidas e Perguntas</h2>
      <div class="questoes"></div>
    </div>
    <div id="lateral_edit" class="edit"><h2 class="title">Recentes</h2></div>
  </main>
  <footer>
  </footer>
</template>

<script>
export default {

}
</script>
<style></style>