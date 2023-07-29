import { createRouter, createWebHashHistory } from 'vue-router';

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/login',
      component: import('../views/Login/index.vue'),
    },
    {
      path: '/main',
      component: import('../views/Main/index.vue'),
    },
  ],
});

export default route;
