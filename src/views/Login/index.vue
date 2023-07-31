<template>
  <div class="login">
    <div class="login-box">
      <LoginPanel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './c-cpns/LoginPanel.vue';
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-box {
  width: 330px;
}
</style>
