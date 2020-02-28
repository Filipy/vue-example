<template>
  <v-app>
    <router-view name="header"></router-view>
    <main>
      <v-content>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-content>
    </main>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "app-root",
  created() {
    if (localStorage.getItem("theme") === "dark") {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  }
})
export default class App extends Vue {}
</script>
