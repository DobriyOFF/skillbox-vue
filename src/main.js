import { createApp } from 'vue';
import task1 from '@/data/task1_1';
import { str1, str2 } from '@/data/task1_2';
import App from './App.vue';

createApp(App).mount('#app');

task1(str1);
task1(str2);
