<template>
  <v-container class="text-center height-center" fill-height>
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">Whoops, 404</h1>
        <p>A pagina que você está procurando não existe</p>
        <v-btn to="/home" color="primary" outlined>Tire-me daqui!</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "not-found"
};
</script>
