import { RouteConfig } from 'vue-router';



const prefix = '/home';
const Home = () => import('@/views/Home.vue')

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  
]

export default routes; 