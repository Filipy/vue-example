<template src="./UserInfo.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Notify from "@/core/notify";
@Component({})
export default class UserInfo extends Vue {
  public notify = Notify();

  private success() {
    this.notify.success("a");
  }
}
</script>
