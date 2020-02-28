<template src="./Header.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import store from "../../store";
@Component({})
export default class Header extends Vue {
  public drawer: boolean = false;
  public routes: any[] = [
    "Rotas",
    [
      {
        title: "Exemplo 1",
        path: "/home1"
      },
      {
        title: "Exemplo 2",
        path: "/home2"
      }
    ]
  ];

  public logout() {
    const authModule = getModule(Auth, this.$store);
    authModule.logout();
  }

  public updateTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    if (this.$vuetify.theme.dark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  get name() {
    return this.$store.getters.name;
  }

  get themeTitle() {
    return this.$vuetify.theme.dark ? "Tema Noturno" : "Tema Diurno";
  }
}
</script>
<style lang="scss" src="./Header.scss" scoped></style>
