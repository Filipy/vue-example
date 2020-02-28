import { RouteConfig } from 'vue-router';
import ErrorComponent from '../../views/error/Error.vue';

const prefix = '/home';
const Home = () => import('@/views/Home.vue')

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path:`/error/`, 
    name: "error",
    component: ErrorComponent, 
  },
]

export default routes; 