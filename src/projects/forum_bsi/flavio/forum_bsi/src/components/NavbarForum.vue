<template>
  <nav class="navbar">
    <div class="profile">
      <img class="img" :src="avatar" alt="avatar" height="40" width="40" />
      <label>{{ nome }}</label>
    </div>
    <div>
      <input
        class="search"
        type="search"
        name=""
        placeholder="Procure aqui"
        id=""
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarForum",
  data() {
    return {
      nome: "Lilia",
      avatar: "/img/avatar.png",
    };
  },
};
</script>
