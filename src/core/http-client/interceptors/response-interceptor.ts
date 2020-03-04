import { getModule } from "vuex-module-decorators";
import axios from "../instance";
import Vue from "vue";
import store from "@/store";
import Auth from "@/store/modules/Auth/Auth.module";
const vm: any = new Vue({ store: store });

const auth = getModule(Auth, vm.store);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      auth.logout();
    } else {
      handleErrorResponse(error);
    }
    return Promise.reject(error);
  }
);

const handleErrorResponse = ({ response: { data } }: any) => {
  if (Array.isArray(data)) {
    const erros = data.join("\n");
    vm.$snotify.error(erros);
  }
};
