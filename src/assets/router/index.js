import Vue from 'vue';
import Router from 'vue-router';
import About from 'pages/About/Index';
import Webs from 'pages/Webs/Index';
import Design from 'pages/Design/Index';

Vue.use(Router);
export default new Router({
  mode: 'hash',
  // hash: false,
  routes: [
    {
      path: '/',
      name: 'index',
      component: About,
      meta: {
        title: 'Test123',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/webs',
      name: 'webs',
      component: Webs,
    },
    {
      path: '/design',
      name: 'design',
      component: Design,
    },
  ],
});
