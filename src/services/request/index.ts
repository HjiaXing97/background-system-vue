import type { AxiosInstance } from 'axios';
import axios from 'axios';

import type { JxRequestConfig } from '@/services/types';

class JxRequest {
  instance: AxiosInstance;

  constructor(config: JxRequestConfig) {
    this.instance = axios.create(config);
    /**
     * 全局拦截器
     */
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截');
        return config;
      },
      (error) => {
        return error;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        return error;
      }
    );

    /**
     * 针对特定实例添加拦截器
     */
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailureFn
      );

      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      );
    }
  }

  request<T = any>(config: JxRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: JxRequestConfig<T>) {
    return this.instance.request({ ...config, method: 'get' });
  }

  post<T = any>(config: JxRequestConfig<T>) {
    return this.instance.request({ ...config, method: 'post' });
  }
}

export default JxRequest;
