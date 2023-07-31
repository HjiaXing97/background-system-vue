<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ElForm, FormRules } from 'element-plus';
import useLoginStore from '@/store/module/login.ts';
import type { IUserAccount } from '@/types';

const formRef = ref<InstanceType<typeof ElForm>>();
const loginStore = useLoginStore();
const accountForm = reactive<IUserAccount>({
  name: '',
  password: '',
});

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
});

const loginAction = () => {
  formRef.value?.validate((validate) => {
    if (validate) {
      loginStore.accountLoginAction({ name: accountForm.name, password: accountForm.password });
    } else {
      console.log('请先填写用户名和密码');
    }
  });
};

defineExpose({
  loginAction,
});
</script>

<template>
  <div class="pane-account">
    <el-form
      ref="formRef"
      label-position="left"
      :rules="rules"
      label-width="70px"
      :model="accountForm"
      style="max-width: 460px"
    >
      <el-form-item label="用户名" prop="name">
        <el-input placeholder="请输入用户名" v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password placeholder="请输入密码" v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
