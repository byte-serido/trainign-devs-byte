<template>
    <div id="Dashboard">
        <div id="Dash-main">
            <div class="area-busca-dash">
                <input type="text" placeholder="Escreva aqui sua duvida ou problema..." class="input-busca-dash" />
                <img src="../../public/img/icons/icon-send.png" alt="send" id="send-input" />
            </div>
            <h1>Duvidas e Perguntas</h1>
            <div id="section-post">
                <div class="postagens" v-show="post" v-for="postagem in posts" :key="postagem.id">
                    <div class="post-quest">
                        {{ postagem.quest }}
                    </div>
                    <div class="interacoes">
                        <img src="../../public/img/icons/icon-heart.svg" alt="" id="" class="icons">
                        <img src="../../public/img/icons/icon-thumbs-up.svg" alt="" class="icons">
                        <img src="../../public/img/icons/icon-thumbs-down.svg" alt="" class="icons">
                    </div>
                </div>
                <div class="feed-vazio" v-if="!post">
                    <h3>
                        Nenhuma pergunta disponivel ...T_T
                    </h3>
                </div>
            </div>
        </div>
        <div id="Dash-second">
            <h1>Recentes</h1>
            <div id="posts-recentes">
                <div class="new-post" v-show="post" v-for="postagem in posts" :key="postagem.id">
                    <div class="caixa-post">
                        {{ postagem.quest }}
                    </div>
                    <div class="interacoes-second">
                        <h3>Tallys</h3>
                        <div style="background-color: transparent;">
                            <img src="../../public/img/icons/icon-heart.svg" alt="" id="" class="icons">
                            <img src="../../public/img/icons/icon-thumbs-up.svg" alt=""  class="icons">
                            <img src="../../public/img/icons/icon-thumbs-down.svg" alt=""  class="icons">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyDashboard",
    data() {
        return {
            post: true,
            posts: [{
                id: 1, quest: "Não consigo mudar a versão do meu Node no linux, como faço?" }
                // {id: 2, quest: "Não consigo mudar a versão do meu Vue no linux, como faço?" },
                // {id: 3, quest: "Não consigo mudar a versão do meu React no linux, como faço?" }
            ]
        };
    },
};
</script>
<style scoped>

#Dashboard {
    display: flex;
    width: 100%;
    height: 100%;
}

#Dash-main {
    display: flex;
    flex-direction: column;
    padding-left: 36px;
    padding-top: 18px;
    width: 76%;
}

#Dash-second {
    /* display: inline-block;
    position: relative;
    left: 0%; */
    display: flex;
    flex-direction: column;
    width: 24%;
    border-left: 1px solid #292730;
    padding: 15px;
    background: #191622;
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

h1,h2,h3 {
    color: #ff79c6;
    background-color: transparent;
}

#section-post {
    max-width: 97%;
}

.postagens {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 77px;
    margin-top: 18px;
}

.post-quest {
    padding:25px;
    width: 100%;
    height: 100%;
    background-color: #191622;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.interacoes {
    max-width: 128px;
    height: 70px;
    align-items: center;
    background: #292730;
    display: flex;
    align-items: center;
    padding: 5px;
}

.interacoes-second {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 62px;
    background: #292730;
    padding: 15px;
}

.icons {
    width: 22px;
    height: 20px;
    padding: 2px;
    background:  transparent;

}

.feed-vazio {
    /* background-color: #ff79c6; */
    display: flex;
    align-items: center;
    text-align: center;
    width: 250px;
    height: 250px;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
    color: white;
}

</style>
