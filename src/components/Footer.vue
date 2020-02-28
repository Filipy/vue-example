<template>
  <v-footer app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>

<style lang="scss" scoped>
span {
  margin-top: 2px;
  font-size: 14px;
  margin-bottom: 2px;
}
a {
  color: gray !important;
  text-decoration: none;
}
</style>
