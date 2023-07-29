<template>
  <h2>Main</h2>
  <p>{{ countStore.count }}</p>
</template>

<script lang="ts" setup>
import useCountStore from '@/store/module/count.ts';
import { onMounted } from 'vue';
import jxRequest from '../../services/index';

const countStore = useCountStore();

onMounted(() => {
  jxRequest
    .request({
      url: '/home',
      interceptors: {
        requestFulfilledFn: function (config) {
          console.log('单个请求拦截');
          return config;
        },
      },
    })
    .then((res) => {
      console.log(res);
    });
});
</script>
