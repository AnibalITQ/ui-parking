import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './Views/LoginForm.vue';
import HomePage from './Views/HomePage.vue';
import ParkingStatus from './Views/Guardias/ParkingStatus.vue';
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/home',
    name :'home',
    component: HomePage,
  },
  {
    path:'/parking',
    name:'parking',
    component: ParkingStatus,
  },
  {
    path:'/scanner',
    name:'scanner',
    component: () => import('@/Views/Guardias/Scanner.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
