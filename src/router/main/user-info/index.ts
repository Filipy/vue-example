import { RouteConfig } from 'vue-router';

const prefix = 'user-info';
const UserInfo = () => import('@/views/user-info/UserInfo.vue');

const routes: RouteConfig[] = [
    {
        path: prefix,
        component: UserInfo
      },
]

export default routes;