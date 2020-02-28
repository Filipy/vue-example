import { RouteConfig } from 'vue-router';

const prefix = '/account';
const Login = () => import('@/views/Login/Login.vue')

const routes: RouteConfig[] = [
    {
        path: prefix,
        redirect: `${prefix}/login`,
      },
      {
        path: `${prefix}/login`,
        component: Login,
      },
]

export default routes;