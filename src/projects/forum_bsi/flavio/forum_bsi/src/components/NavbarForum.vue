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

<style>
.navbar {
  grid-area: navbar;
  background-color: #13111b;
  border-bottom: 1px solid #292730;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile {
  margin-left: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.img {
  border-radius: 50%;
  box-shadow: 4px 0px 10px rgba(255, 121, 198, 0.25);
}
.search {
  border: 0;
  margin-right: 32px;
  background: #191622;
  box-shadow: 0px 2px 4px rgba(255, 121, 198, 0.25);
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 50px;
  width: 363px;
  border-radius: 4px;
}

.search::placeholder {
  color: #292730;
  text-transform: lowercase;
  display: flex;
  align-items: center;
}
</style>
