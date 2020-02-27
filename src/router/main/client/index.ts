import { RouteConfig } from 'vue-router';

const prefix = 'client';
const Client = () => import("@/views/Client/Client.vue");

const routes: RouteConfig[] = [
    {
        path: prefix,
        component: Client
      },
]

export default routes;