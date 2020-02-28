import { RouteConfig } from "vue-router";

const prefix = "/error";
const NotFound = () => import("@/views/NotFound.vue");

const routes: RouteConfig[] = [
  {
    path: `${prefix}/404`,
    component: NotFound
  }
];

export default routes;
