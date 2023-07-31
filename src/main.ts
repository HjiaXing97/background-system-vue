import { createApp } from 'vue';
// import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'normalize.css';

import App from '@/App.vue';
import route from './router';
import store from './store';
import '@/assets/style/index.less';

createApp(App).use(route).use(store).mount('#app');
