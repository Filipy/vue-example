import MainRoutes from './main';
// import ErrorRoutes from './error';

import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  { path: '', redirect: '/home' },
  ...MainRoutes,
//   ...ErrorRoutes,
//   { path: '*', redirect: '/error/404' },
];

export default routes;
