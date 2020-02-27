import Notify from './notify';
//import store from '@/plugins/Vuex/store';

const key = 'Authorization';

//axios.defaults.headers.common[key] = `Bearer ` + store.state.accessToken;

export default () =>
  new Notify();
