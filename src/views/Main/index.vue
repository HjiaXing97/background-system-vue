<template>
  <h2>Main</h2>
  <p>{{ countStore.count }}</p>
</template>

<script lang="ts" setup>
import useCountStore from '@/store/module/count.ts';
import { onMounted } from 'vue';

const countStore = useCountStore();

onMounted(() => {});
</script>
