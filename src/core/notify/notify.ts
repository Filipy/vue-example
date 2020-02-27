import Vue from 'vue';
const vm: any = new Vue();

export default class Notify {

  public constructor() {

  }

  public success(message: string){
      debugger;
      vm.$snotify.success(message);
  }

  public warning(message: string){
      vm.$snotify.warning(message);
  }

  public error(message:string){
      vm.$snotify.error(message);
  }
  
}
