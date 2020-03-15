import Vue from 'vue';
import Router from './router.js';
import Store from './store/index.js';
import App from './App.vue';

new Vue({
  store: Store,
  router: Router,
  render: h => h(App)
}).$mount('#app');
