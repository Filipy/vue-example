import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { AuthState } from "./model/Auth.state";
import store from "../../index";
import router from "@/router";

@Module({ namespaced: true, name: "auth" })
export default class Auth extends VuexModule {
  public userInfo: AuthState = new AuthState();

  @Mutation
  public setAccessToken(accessToken: string) {
    this.userInfo.accessToken = accessToken;
  }

  @Mutation
  public setPermissions(permissions: string[]) {
    this.userInfo.permissions = permissions;
  }

  @Mutation
  public setUserName(userName: string) {
    this.userInfo.accessToken = userName;
  }

  get accessToken() {
    return this.userInfo.accessToken;
  }

  get permissions() {
    return this.userInfo.permissions;
  }

  @Action
  public logout() {
    this.context.commit("setAccessToken", "");
    router.push("/account/login");
  }
}
