import JxRequest from './request/index.ts';
import { BASE_URL, TIME_OUT } from '@/services/config';

const jxRequest = new JxRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestFulfilledFn: function (config) {
      console.log('实例请求拦截');
      return config;
    },
  },
});

export default jxRequest;
