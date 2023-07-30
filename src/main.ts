import { createApp } from 'vue';
// import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from '@/App.vue';
import route from './router';
import store from './store';

createApp(App).use(route).use(store).mount('#app');
