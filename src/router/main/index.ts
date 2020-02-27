import { RouteConfig } from 'vue-router';
import UserInfoRoutes from './user-info';

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
    redirect: `${prefix}/about`,
    children: [
      {
        path: "about",
        name: "about",
        component: () =>
          import("@/views/About.vue")
      },
      ...UserInfoRoutes,
    ]
  },
  
]

export default routes; 