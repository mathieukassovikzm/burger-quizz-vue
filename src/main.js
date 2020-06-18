import Vue from 'vue';
import Router from './router.js';
import Store from './store/index.js';
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  store: Store,
  router: Router,
  render: h => h(App)
}).$mount('#app');


// new Vue({
//   el: '#app',
//   store: Store,
//   router: Router,
//   render: h => h(App),
//   components: { App }
// })