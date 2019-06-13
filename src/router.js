import firebase from 'firebase/app';
import 'firebase/auth';
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import SignUp from '@/views/SignUp.vue';
import LogIn from '@/views/LogIn.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/login' && to.fullPath !== '/signup') {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        next();
      } else {
        next({ path: '/login' });
      }
    });
  } else {
    next();
  }
});

export default router;
