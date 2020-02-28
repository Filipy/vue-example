import { RouteConfig } from "vue-router";

const prefix = "user-info";
const UserInfo = () => import("@/views/user-info/UserInfo.vue");

const routes: RouteConfig[] = [
  {
    path: prefix,
    components: {
      // header: Header,
      default: UserInfo
      // footer: Footer
    }
  }
];

export default routes;
