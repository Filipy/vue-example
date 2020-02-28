import { RouteConfig } from "vue-router";
import ErrorComponent from "../../views/error/Error.vue";

const prefix = "/home";
const Home = () => import("@/views/Main.vue");

import UserInfoRoutes from "./user-info";

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "home",
    component: Home,
    meta: {
      requiresAuth: false
    },
    redirect: `${prefix}/about`,
    children: [
      {
        path: "about",
        name: "about",
        component: () => import("@/views/About.vue")
      },
      ...UserInfoRoutes
    ]
  },
  {
    path: `/error/`,
    name: "error",
    component: ErrorComponent
  }
];

export default routes;
