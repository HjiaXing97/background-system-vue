import jxRequest from '@/services';
import type { IUserAccount } from '@/types';

export function loginActionRequest(data: IUserAccount) {
  return jxRequest.post({
    url: '/login',
    data,
  });
}
