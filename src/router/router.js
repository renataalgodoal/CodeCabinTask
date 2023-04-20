import { createRouter, createWebHistory } from 'vue-router'

import LoginScreen from '../components/loginScreen'
import PulseSurvey from '../components/pulseSurvey'
import UserDetails from '../components/userDetails.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginScreen
  },
  {
    path: '/pulse',
    name: 'pulse',
    component: PulseSurvey,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/details',
    name: 'details',
    component: UserDetails,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user')) || { isAuthenticated: false };
  if (to.matched.some((record) => record.meta.requiresAuth) && !user.isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});



export default router
