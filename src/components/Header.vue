<template>
  <header app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>{{ routes[0] }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(routes, i) in routes[1]"
            :key="i"
            link
            v-text="routes.title"
            :to="routes.path"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">API</span>
      </v-toolbar-title>
      <v-spacer />
      <v-menu
        :close-on-click="true"
        :close-on-content-click="true"
        :offset-y="true"
      >
        <template v-slot:activator="{ on }">
          <div class="menu" v-on="on">
            <span class="name">Nome</span>
            <v-avatar>
              <img src="../../public/img/default/user.png" />
            </v-avatar>
          </div>
        </template>
        <v-list>
          <v-list-item @click="updateTheme()">
            <v-list-item-title>{{ themeTitle }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "app-header",
  computed: {
    name() {
      return this.$store.getters.name;
    },
    themeTitle() {
      return this.$vuetify.theme.dark ? "Tema Noturno" : "Tema Diurno";
    }
  },
  data: () => ({
    drawer: null,
    routes: [
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
    ]
  }),
  methods: {
    logout() {
      this.$store.dispatch("auth_logout").then(() => {
        this.$router.push("login");
      });
    },
    updateTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  cursor: pointer !important;
  height: 50px !important;
  padding-top: 1px;
}

.name {
  margin-right: 10px;
}

@media (max-width: 600px) {
  .name {
    display: none;
  }
}
</style>
