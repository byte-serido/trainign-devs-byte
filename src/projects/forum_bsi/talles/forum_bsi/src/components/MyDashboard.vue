<template>
    <main id="main">
        <section id="dashboard">
            <div class="area-busca-dash">
                <input type="text" placeholder="Escreva aqui sua duvida ou problema..." class="input-busca-dash" />
                <img src="../../public/img/icons/icon-send.png" alt="send" id="send-input"
                    style="background-color: transparent" />
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
        </section>
        <aside>
            <h1>Recentes</h1>
            <section id="posts-recentes">
                <div class="new-post" v-show="post" v-for="postagem in posts" :key="postagem.id">
                    <div class="caixa-post">
                        {{ postagem.quest }}
                    </div>
                    <div class="interacoes-aside">
                        <h3>Tallys</h3>
                        <div style="background-color: transparent">
                            <img src="../../public/img/icons/icon-heart.svg" alt="" id="" class="icons">
                            <img src="../../public/img/icons/icon-thumbs-up.svg" alt="" class="icons">
                            <img src="../../public/img/icons/icon-thumbs-down.svg" alt="" class="icons">
                        </div>
                    </div>
                </div>
                <div class="feed-vazio" v-if="!post">
                    <h3>
                        Nenhuma pergunta disponivel ...T_T
                    </h3>
                </div>
            </section>
        </aside>
    </main>
</template>

<script>
export default {
    name: "MyDashboard",
    data() {
        return {
            post: true,
            posts: [{
                id: 1, quest: "Não consigo mudar a versão do meu Node no linux, como faço?"
            },
            { id: 2, quest: "Não consigo mudar a versão do meu Vue no linux, como faço?" },
            { id: 3, quest: "Não consigo mudar a versão do meu React no linux, como faço?" }
            ]
        };
    },
};
</script>
<style scoped>
#main {
    display: flex;
    width: 100%;
    height: 100%;
}

#dashboard {
    display: flex;
    flex-direction: column;
    padding-left: 36px;
    padding-top: 18px;
    width: 76%;
}

aside {
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
    border: none;
}

#send-input {
    display: flex;
    position: relative;
    left: 96%;
    bottom: 65%;
}

h1,
h2,
h3 {
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
padding: 25px;
width: 100%;
height: 100%;
background-color: #191622;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 15px 0px 0px 15px;
}

.interacoes {
max-width: 128px;
height: 70px;
align-items: center;
background: #292730;
display: flex;
align-items: center;
padding: 5px;
border-radius: 0px 15px 15px 0px;
}

.new-post {
    background-color: transparent;
    margin-bottom: 20px;
    
}

.caixa-post {
    color: white;
    padding: 17px;
    border-radius: 15px 15px 0px 0px;
}

#posts-recentes {
    margin: 15px;
    background-color: transparent;
}

.interacoes-aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 62px;
    background: #292730;
    padding: 15px;
    border-radius: 0px 0px 15px 15px;
}

.icons {
width: 22px;
height: 20px;
padding: 2px;
background: transparent;
cursor: pointer;
transition: transform 0.3s;
}
.icons:hover {
transform: scale(1.1);
}

.feed-vazio {
    color: white;
    background-color: transparent;
    display: flex;
    align-items: center;
    text-align: center;
    width: 250px;
    height: 250px;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
}

.feed-vazio h3 {
    color: white;
}</style>
