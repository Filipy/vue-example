import axios from './instance';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Vue from 'vue';
//import store from '@/plugins/Vuex/store';
//import ErrorHandler from './../error-handler';
const vm: any = new Vue();

export default class HttpClient {
  private loading: any;
  public constructor(private resource: string) {

  }

  public get(
    action: string = '',
    loading: boolean = true,
    params: any = null,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<AxiosResponse<any>> {
      debugger;
    this.showLoading(loading);
    return axios
      .get(
        `${this.resource}/${action}${this.createQueryString(params)}`,
        config,
      )
      .finally(loading ? this.hideLoading: () => {});
  }

  public deleteWithParam(
    action: string = '',
    params: any = null,
    loading: boolean = true,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<AxiosResponse<any>> {
    
    this.showLoading(loading);
    return axios
      .delete(
        `${this.resource}/${action}${this.createQueryString(params)}`,
        config,
      )
      .finally(loading ? this.hideLoading: () => {});
  }

  public post(
    action: string = '',
    body: any,
    loading:boolean = true,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<AxiosResponse<any>> {
    
    this.showLoading(loading);
    return axios
      .post(`${this.resource}/${action}`, body, config)
      .finally(loading ? this.hideLoading: () => {});
  }

  public put(
    action: string = '',
    body?: any | undefined,
    loading:boolean = true,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<AxiosResponse<any>> {
    
    this.showLoading(loading);
    return axios
      .put(`${this.resource}/${action}`, body, config)
      .finally(loading ? this.hideLoading: () => {});
  }


  public patch(
    action: string = '',
    body: any,
    loading:boolean = true,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<AxiosResponse<any>> {
    this.showLoading(loading);
    return axios
      .patch(`${this.resource}/${action}`, body, config)
      .finally(loading ? this.hideLoading: () => {});
  }

  public delete(
    action: string = '',
    loading:boolean = true,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<AxiosResponse<any>> {
    
    this.showLoading(loading);
    return axios
      .delete(`${this.resource}/${action}`, config)
      .finally(loading ? this.hideLoading: () => {});
  }

  private showLoading = (loading: boolean) => {
    if(loading && (this.loading == undefined || !this.loading.isActive)) {
        debugger;
        this.loading = vm.$loading.show();
    }
  };

  private hideLoading = () => {
    if(this.loading != undefined){
        debugger;
        this.loading.hide();
    }
  };

  public createQueryString(params: any) {
    if (params || (Array.isArray(params) && params.length > 0)) {
      return (
        '?' +
        Object.keys(params)
          .map((key) => {
            return (
              encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
            );
          })
          .join('&')
      );
    } else {
      return '';
    }
  }

  private get defaultConfig(): AxiosRequestConfig {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
    };
  }
}
