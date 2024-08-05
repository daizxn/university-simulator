import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

import router from "@/router/index.js";
import '@/assets/css/global.css'

createApp(App).use(router).mount('#app')
