<template>
  <aside class="sidebar">
    Recentes
    <div class="card">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Gustavo <span></span></p>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AsideForum",
};
</script>
<style>
.sidebar {
  grid-area: sidebar;
  background: #191622;
  color: #ff79c6;
  padding: 17px;
}

.card p {
  background: #13111b;
  color: #ffffff;
  width: 100%;
  height: auto;
  font-size: 1rem;
  padding: 17px;
  margin-top: 17px;
}
</style>
