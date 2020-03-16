import Vue from 'vue';
import VueRouter from 'vue-router';
import PageHome from './pages/p-home/p-home';
import PageIntro from './pages/p-intro/p-intro';
import PageSelPoivre from './pages/p-sel-poivre/p-sel-poivre';
import PageMenus from './pages/p-menu/p-menu';
import PageNuggets from './pages/p-nuggets/p-nuggets';
import PageBurgerDeLaMort from './pages/p-burger-de-la-mort/p-burger-de-la-mort';
import ScreenQuestion from './components/ScreenQuestion';
import Questions from './components/Questions/Questions';

Vue.use(VueRouter);

/*
 * Definition of the differents routes
 */
const routes = [
  { path: '/', component: PageHome, name: 'p-home' },
  { path: '/intro', component: PageIntro, name: 'pageIntro' },
  { path: '/menu', component: PageMenus, name: 'pageMenus' },
  { path: '/nuggets', component: PageNuggets, name: 'pageNuggets' },
  { path: '/sel-poivre', component: PageSelPoivre, name: 'pageSelPoivre' },
  {
    path: '/burger-de-la-mort',
    component: PageBurgerDeLaMort,
    name: 'pageBurger2laMort'
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
