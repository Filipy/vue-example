<template>

  <div class="home">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

  </b-navbar>
  </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
