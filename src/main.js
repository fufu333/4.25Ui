// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/TodoList.vue';
import { bus } from './bus';
import router from './router/index.js';
import { Search } from 'vant';

const app = createApp(App);
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if (!isLoggedIn) {
  router.push('/login');
}

app.component('AppHeader', AppHeader);
app.component('TodoList', TodoList);


app.config.globalProperties.$bus = bus;
app.use(router)
app.use(Search);
app.mount('#app');

