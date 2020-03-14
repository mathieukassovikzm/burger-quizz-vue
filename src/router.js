import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenQuestion from './components/ScreenQuestion'
import Questions from './components/Questions/Questions'

Vue.use(VueRouter)

/*
 * Definition of the differents routes
 */
const routes = [
  { path: '/', component: ScreenQuestion, name: 'screen-question' },
  { path: '/question/:id', component: Questions, name: 'screenQuestion' },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router;
