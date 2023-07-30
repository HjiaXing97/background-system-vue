<template>
  <h2>Main</h2>
  <p>{{ countStore.count }}</p>
  <ElButton>s</ElButton>
</template>

<script lang="ts" setup>
import useCountStore from '@/store/module/count.ts';
import { onMounted } from 'vue';
import { ElButton } from 'element-plus';

const countStore = useCountStore();

onMounted(() => {});
</script>
