import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
export interface JxInterceptors<T> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestFulfilledFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFulfilledFn?: (err: any) => any;
}

export interface JxRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JxInterceptors<T>;
}
