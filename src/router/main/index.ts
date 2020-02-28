import { RouteConfig } from 'vue-router';

const prefix = '/home';
const Home = () => import('@/views/Main.vue')

import UserInfoRoutes from './user-info';

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
      ...UserInfoRoutes
    ]
  },
  
]

export default routes; 