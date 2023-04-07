<template>
    <div id="div2">
        <div class="questao">
            <p>{{ duvida }}</p>
        </div>
        <div class="botoes">
            <p>{{ nome }}</p>
            <div><button><img src="../assets/img/coracao.svg" alt=""></button>
            <button><img src="../assets/img/positivo.svg" width="26px"></button>
            <button><img src="../assets/img/negativo.svg" alt=""></button></div>
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        duvida: String,
        nome: String
    }

}
</script>
<style scoped>
p {
    font-size: 15px;
    padding-top: 12px;
}

#div2 {
    margin-left: 15px;
    margin-right: 38px;
    background-color: #13111B;
    border-radius: 4px;
    align-items: center;
    padding: 12px 0px 0px;
}

.questao {
    padding: 12px 15px;
}

.botoes {
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