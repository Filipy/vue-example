import { RouteConfig } from 'vue-router';
import ClientRoutes from './user-info';
import UserInfoRoutes from './client';


const prefix = '/home';
const Home = () => import('@/views/Home.vue')

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "home",
    component: Home,
    redirect: `${prefix}/about`,
    children: [
      {
        path: "about",
        name: "about",
        component: () =>
          import("@/views/About.vue")
      },
      ...UserInfoRoutes,
      ...ClientRoutes,
    ]
  },
  
]

export default routes; 