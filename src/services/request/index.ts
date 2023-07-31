import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { JxRequestConfig } from '../types';

class JxRequest {
  instance: AxiosInstance;
  constructor(config: JxRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return error;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        return error;
      }
    );

    this.instance.interceptors.request.use(
      config.interceptors?.requestFulfilledFn,
      config.interceptors?.requestSuccessFn
    );

    this.instance.interceptors.response.use(
      config.interceptors?.responseFulfilledFn,
      config.interceptors?.responseSuccessFn
    );
  }

  request<T = any>(config: JxRequestConfig<T>) {
    if (config.interceptors?.requestFulfilledFn) {
      config = config.interceptors.requestFulfilledFn(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors?.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((e) => {
          reject(e);
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
