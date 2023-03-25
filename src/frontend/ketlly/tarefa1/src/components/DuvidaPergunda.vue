<template>
    <div id="div">
        <div class="questao">
            <p>Não consigo mudar a versão Node no linux, como faço?</p>
        </div>
        <div class="botoes">
            <button><img src="../assets/img/coracao.svg" alt=""></button>
            <button ><img src="../assets/img/positivo.svg" width="27px"></button>
            <button><img src="../assets/img/negativo.svg" alt=""></button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
p {
    font-size: 15px;
    padding-top: 12px;
}

#div {
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 38px;
    background-color: #191622;
    border-radius: 4px;
}

.questao {
    padding: 12px 15px;
}

.botoes{
    background-color: #292730;
    height: 40px;
    padding: 10px 10px 10px 5px;
    display: flex;
    justify-content: space-between;
    border-radius: 0px 4px 4px 0px;
}

button {
    background-color: #292730;
    border: 0px;
    height: 40px;
}
</style>