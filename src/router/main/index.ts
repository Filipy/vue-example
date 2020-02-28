import { RouteConfig } from "vue-router";

const prefix = "/home";
const Home = () => import(/* webpackChunkName: "home" */ "@/views/Main.vue");

import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

import UserInfoRoutes from "./user-info";

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "home",
    components: {
      header: Header,
      default: Home,
      footer: Footer
    },
    meta: {
      requiresAuth: true
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
  }
];

export default routes;
