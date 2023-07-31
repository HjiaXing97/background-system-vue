import { defineStore } from 'pinia';
import { loginActionRequest } from '@/services/module/login.ts';
import type { IUserAccount } from '@/types';
import { localCache } from '@/utils/cache.ts';
import { ID, NAME, TOKEN } from '@/constant';

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getValue(TOKEN) ?? '',
    id: localCache.getValue(ID) ?? '',
    name: localCache.getValue(NAME) ?? '',
  }),
  actions: {
    async accountLoginAction(account: IUserAccount) {
      const loginResult = await loginActionRequest({ ...account });
      this.token = loginResult.data.token;
      this.name = loginResult.data.name;
      this.id = loginResult.data.id;
      localCache.setValue(TOKEN, this.token);
      localCache.setValue(NAME, this.name);
      localCache.setValue(ID, this.id);
    },
  },
});

export default useLoginStore;
