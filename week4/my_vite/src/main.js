import { createApp } from 'vue';
import App from './App.vue';
import 'styles/index.scss';
import element3 from 'plugins/element3';
import router from "./router";


createApp(App).use(router).use(element3).mount('#app')
