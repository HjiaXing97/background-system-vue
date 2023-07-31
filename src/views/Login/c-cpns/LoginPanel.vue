<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account" label="账号登录">
          <PaneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone" label="手机登录">
          <PanePhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="btns">
      <ElButton size="large" type="primary" @click="handleActiveName">立即登录</ElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PaneAccount from './PaneAccount.vue';
import PanePhone from './PanePhone.vue';

type IActiveName = 'account' | 'phone';
const activeName = ref<IActiveName>('account');
const accountRef = ref<InstanceType<typeof PaneAccount>>();

const handleActiveName = () => {
  accountRef.value?.loginAction();
};
</script>

<style lang="less" scoped>
.el-button--large {
  width: 100%;
}
h2 {
  text-align: center;
}
.tabs {
  margin: 20px 0;
}
</style>
