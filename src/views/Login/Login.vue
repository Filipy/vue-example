<template src="./Login.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store from "../../store";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";

@Component({})
export default class Login extends Vue {
  public setAuthToken() {
    this.$store.commit("auth/setAccessToken", "teste");
    // const myMod = getModule(Auth, this.$store);
  }
}
</script>
<style lang="scss" src="./Login.scss" scoped></style>
