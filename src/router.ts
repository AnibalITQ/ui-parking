import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './Views/LoginForm.vue';
import HomePage from './Views/HomePage.vue';
import ProfilePage from './Views/ProfilePage/ProfilePage.vue';
import RegisterForm from './Views/RegisterForm/RegisterForm.vue';
import ReportsPage from './Views/ReportesPage/ReportesPage.vue';
import EstadisticsPage from './Views/EstadisticsPage/EstadisticsPage.vue';
import InformationPage from './Views/InformationPage/InformationPage.vue';
import IsEntering from './Views/IsEntering/IsEntering.vue';
import path from 'path';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: ProfilePage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/Reportes',
    name: 'reportes',
    component: ReportsPage,
  },
  {
    path: '/Estadisticas',
    name: 'estadisticas',
    component: EstadisticsPage,
  },
  {
    path: '/Informacion',
    name: 'informacion',
    component: InformationPage,
  },
  {
    path: '/IsEntering',
    name: 'IsEntering',
    component: IsEntering,
  },
  {
    path: '/',
    redirect: () => {
      const isAuthenticated = localStorage.getItem('authToken');
      return isAuthenticated ? '/home' : '/login';
    },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
