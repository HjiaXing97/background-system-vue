import JxRequest from '@/services/request';
import { BASE_URL, TIME_OUT } from '@/services/config';

const config = {
  baseURL: BASE_URL,
  timeout: TIME_OUT,
};

const jxRequest = new JxRequest({
  ...config,
  interceptors: {
    requestSuccessFn: function (config) {
      console.log('实例请求拦截');
      return config;
    },
  },
});

export default jxRequest;
