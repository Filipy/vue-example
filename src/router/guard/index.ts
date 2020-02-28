import Router from "vue-router";
import store from "@/store";
import { getModule } from "vuex-module-decorators";
import Auth from "@/store/modules/Auth/Auth.module";

const autModule = getModule(Auth, store);

export const beforeEach = (to: any, from: any, next: any) => {
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!autModule.accessToken) {
      next({
        path: "/error/403",
        params: { nextUrl: to.fullPath }
      });
    } else {
      verifyPermissions(to, next);
    }
  } else {
    next();
  }
};

export function verifyPermissions(to: any, next: any) {
  const requiredPermissions = to.matched.some(
    (record: any) => record.meta.requiredPemission
  );
  if (requiredPermissions) {
    let permissionsNeeded: any[] = [];
    to.matched.find(
      (record: any) => (permissionsNeeded = record.meta.requiredPemission)
    );
    if (autModule.permissions.some((x: any) => permissionsNeeded.indexOf(x))) {
      next();
    } else {
      next({
        path: "/error/403",
        params: { nextUrl: to.fullPath }
      });
    }
  } else {
    next();
  }
}
