import axios from './instance';
import './interceptors/request-interceptor';
import './interceptors/response-interceptor';
import HttpClient from './http-client';
//import store from '@/plugins/Vuex/store';

const key = 'Authorization';

//axios.defaults.headers.common[key] = `Bearer ` + store.state.accessToken;

export default (resource: string) =>
  new HttpClient(resource);
