<template lang="">
    <div id="nav-bar">
        <div class="card-img">
            <img src="../../public/img/tallys.jpeg" alt="usuario" class="foto-usuario-navbar">
            <h5>{{ usuario }}</h5>
        </div>
        <div class="area-busca">
        <input type="text" class="input-busca" placeholder=" ... Procure aqui">
        <img src="../../public/img/icons/icon-search.svg" alt="" id="search">
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            usuario: "Tallys",
        }
    },
}
</script>
<style  scoped>
    #nav-bar {
        background-color: #13111B;
        display: flex;
        width: 100%;
        height: 84px;
        box-sizing: border-box;
        border-bottom: 1px solid #292730;
        justify-content: space-between;
        align-items: center;
        padding-left: 36px;
        padding-right: 56px;

    }

    .card-img {
        display: flex;
        position: relative;
    }

    .foto-usuario-navbar {
        width: 50px;
        height: 50px;
        border-radius: 50px;

    }

    .card-img h5 {
        color: white;
        font-family: 'Rubik';
        margin: auto;
        padding: 16px;
        font-size: 18px;
    }

    .area-busca {
        width: 300px;
        height: 50px;
        /* background-color: aqua; */
        /* padding-right: 44px; */
    }

    .input-busca {
        width: 100%;
        height: 100%;
        background: #191622;
        border-radius: 4px;
        padding: 15px;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        border: none;
        text-transform: lowercase;        
    }

    #search {
        display: flex;
        position: relative;        
        left: 90%;
        bottom: 70%;
    }

</style>