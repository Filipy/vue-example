import Vue from "vue";
import Vuex, { Payload, Store } from "vuex";
import Auth from "./modules/Auth/Auth.module";
import VuexPersist from "vuex-persist";
import { State } from "./state";
import { getModule } from "vuex-module-decorators";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  reducer: (state: State) => ({ auth: state.auth })
});

const store = new Vuex.Store({
  modules: {
    auth: Auth
  },
  plugins: [vuexLocalStorage.plugin]
});

export default store;
