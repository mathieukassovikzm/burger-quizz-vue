import Vue from 'vue';
import VueRouter from 'vue-router';
import PageHome from './pages/p-home/p-home';
import PageSelPoivre from './pages/p-sel-poivre/p-sel-poivre';
import PageBurgerDeLaMort from './pages/p-burger-de-la-mort/p-burger-de-la-mort';

import ScreenQuestion from './components/ScreenQuestion';
import Questions from './components/Questions/Questions';

Vue.use(VueRouter);

/*
 * Definition of the differents routes
 */
const routes = [
  { path: '/', component: PageHome, name: 'p-home' },
  { path: '/sel-poivre', component: PageSelPoivre, name: 'p-sel-poivre' },
  {
    path: '/burger-de-la-mort',
    component: PageBurgerDeLaMort,
    name: 'p-burger-de-la-mort'
  },
  {
    path: '/question',
    component: ScreenQuestion,
    name: 'screen-question',
    children: [
      { path: '/question/:id', component: Questions, name: 'screenQuestion' }
    ]
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
