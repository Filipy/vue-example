import VueRouter from 'vue-router';
import routes from './root';
import Vue from 'vue';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes,
});
