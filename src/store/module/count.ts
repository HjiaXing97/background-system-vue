import { defineStore } from 'pinia';

const useCountStore = defineStore('count', {
  state: () => ({
    count: 100,
  }),
  getters: {},
});

export default useCountStore;
