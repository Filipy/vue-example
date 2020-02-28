import axios from "../instance";
import Vue from "vue";
//import store from '@/plugins/Vuex/store';
const vm: any = new Vue();

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      //store.dispatch('unauthorized');
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
