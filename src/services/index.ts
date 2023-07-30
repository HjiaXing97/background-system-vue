import JxRequest from './request/index.ts';
import { BASE_URL, TIME_OUT } from '@/services/config';

const jxRequest = new JxRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export default jxRequest;
