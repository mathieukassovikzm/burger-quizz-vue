import Vue from 'vue';
import VueRouter from 'vue-router';
import PageHome from './pages/p-home/p-home';
import PageIntro from './pages/p-intro/p-intro';
import PageNuggetsRules from './pages/p-nuggets/p-nuggets-rules';
import PageNuggetsVideo from './pages/p-nuggets/p-nuggets-video';
import PageSelPoivreRules from './pages/p-sel-poivre/p-sel-poivre-rules';
import PageSelPoivreVideo from './pages/p-sel-poivre/p-sel-poivre-video';
import PageMenusRules from './pages/p-menu/p-menu-rules';
import PageMenusVideo from './pages/p-menu/p-menu-video';
import PageDessertRules from './pages/p-dessert/p-dessert-rules';
import PageAdditionRules from './pages/p-addition/p-addition-rules';
import PageAdditionVideo from './pages/p-addition/p-addition-video';
import PageBurgerDeLaMortRules from './pages/p-burger-de-la-mort/p-burger-de-la-mort-rules';
import PageBurgerDeLaMortVideoKetchup from './pages/p-burger-de-la-mort/p-burger-de-la-mort-video-ketchup';
import PageBurgerDeLaMortKetchup from './pages/p-burger-de-la-mort/p-burger-de-la-mort-ketchup';
import PageBurgerDeLaMortVideoMayo from './pages/p-burger-de-la-mort/p-burger-de-la-mort-video-mayo';
import PageBurgerDeLaMortMayo from './pages/p-burger-de-la-mort/p-burger-de-la-mort-mayo';
import PageFin from './pages/p-fin/p-fin';
import ScreenQuestion from './components/ScreenQuestion';
import Questions from './components/Questions/Questions';

Vue.use(VueRouter);

/*
 * Definition of the differentes routes
 */
const routes = [
  { path: '/', component: PageHome, name: 'p-home' },
  { path: '/intro', component: PageIntro, name: 'pageIntro' },
  {
    path: '/nuggets-rules',
    component: PageNuggetsRules,
    name: 'pageNuggetsRules'
  },
  {
    path: '/nuggets-video',
    component: PageNuggetsVideo,
    name: 'pageNuggetsVideo'
  },
  {
    path: '/sel-poivre-rules',
    component: PageSelPoivreRules,
    name: 'pageSelPoivreRules'
  },
  {
    path: '/sel-poivre-video',
    component: PageSelPoivreVideo,
    name: 'pageSelPoivreVideo'
  },
  { path: '/menu-rules', component: PageMenusRules, name: 'pageMenusRules' },
  { path: '/menu-video', component: PageMenusVideo, name: 'pageMenusVideo' },
  {
    path: '/dessert-rules',
    component: PageDessertRules,
    name: 'pageDessertRules'
  },
  {
    path: '/addition-rules',
    component: PageAdditionRules,
    name: 'pageAdditionRules'
  },
  {
    path: '/addition-video',
    component: PageAdditionVideo,
    name: 'pageAdditionVideo'
  },
  {
    path: '/burger-de-la-mort-rules',
    component: PageBurgerDeLaMortRules,
    name: 'pageBurger2laMortRules'
  },
  {
    path: '/burger-de-la-mort-video-mayo',
    component: PageBurgerDeLaMortVideoMayo,
    name: 'pageBurger2laMortVideoMayo'
  },
  {
    path: '/burger-de-la-mort-mayo',
    component: PageBurgerDeLaMortMayo,
    name: 'pageBurger2laMortMayo'
  },
  {
    path: '/burger-de-la-mort-video-ketchup',
    component: PageBurgerDeLaMortVideoKetchup,
    name: 'pageBurger2laMortVideoKetchup'
  },
  {
    path: '/burger-de-la-mort-ketchup',
    component: PageBurgerDeLaMortKetchup,
    name: 'pageBurger2laMortKetchup'
  },
  {
    path: '/fin',
    component: PageFin,
    name: 'pageFin'
  },
  {
    path: '/question',
    component: ScreenQuestion,
    name: 'screen-question',
    children: [
      { path: '/question/:id', component: Questions, name: 'question' }
    ]
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
