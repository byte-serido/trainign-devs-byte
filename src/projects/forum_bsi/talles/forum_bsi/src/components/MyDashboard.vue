<template>
    <div id="Dash-main">
        <div class="area-busca-dash">
            <input type="text" placeholder="Escreva aqui sua duvida ou problema..." class="input-busca-dash" />
            <img src="../../public/img/icons/icon-send.png" alt="send" id="send-input" />
        </div>
        <h1>Duvidas e Perguntas</h1>
    </div>
</template>

<script>
export default {
    name: "MyDashboard",
    data() {
        return {};
    },
};
</script>
<style scoped>
#Dash-main {
    padding-left: 36px;
    padding-top: 18px;
    /* display: flex; */
    /* background-color: rgb(107, 83, 227); */
    width: 76.8%;
    height: auto;
}

.area-busca-dash {
    width: 98%;
    height: 77px;
    margin-bottom: 77px;
}

.input-busca-dash {
    padding: 15px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-transform: lowercase;
    background: #191622;
}

#send-input {
    display: flex;
    position: relative;
    left: 96%;
    bottom: 65%;
}

h1 {
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #ff79c6;
}
</style>
