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
      <input type="text" placeholder="procure aqui ..." class="fontTexto"><button><img src="./assets/img/Shapebuscar.svg" alt=""></button>
    </div>
  </header>
  <main>
    <div class="principal edit">
      <div class="pergunta">
        <input type="text" class="fontTexto input" placeholder="escreva aqui sua duvida ou problema...">
        <button class="botao" @click="isComponent = !isComponent"><img src="./assets/img/Shape.svg"></button>
      </div>
      <h2 class="title">Duvidas e Perguntas</h2>
      <Duvida v-if="isComponent"></Duvida>
      <div v-else class="semComentario"><p >Nenhuma pergunta disponível... T_T</p></div>
    </div>
    <div id="lateral_edit" class="edit"><h2 class="title">Recentes</h2></div>
  </main>
  <footer>
  </footer>
</template>

<script>
import Duvida from "@/components/DuvidaPergunda.vue"
export default {
  components: {
    Duvida
  },
  data(){
    return{
      isComponent: false,
    }
  },


}
</script>
<style></style>