import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './Views/LoginForm.vue';
import HomePage from './Views/HomePage.vue';
import ProfilePage from './Views/ProfilePage/ProfilePage.vue';
import RegisterForm from './Views/RegisterForm/RegisterForm.vue';
import ReportsPage from './Views/ReportesPage/ReportesPage.vue';
import EstadisticsPage from './Views/EstadisticsPage/EstadisticsPage.vue';
import InformationPage from './Views/InformationPage/InformationPage.vue';
import IsEntering from './Views/IsEntering/IsEntering.vue';
import HomeGuardias from './Views/Guardias/HomeGuardias.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/guardias',
    children: [
      {
        path: '', // "/guardias" carga ParkingStatus
        name: 'homeGuardias',
        component: HomeGuardias,
      },
      {
        path: 'scanner', // "/guardias/scanner"
        name: 'scanner',
        component: () => import('@/Views/Guardias/Scanner.vue'),
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: ProfilePage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/reportes',
    name: 'reportes',
    component: ReportsPage,
  },
  {
    path: '/estadisticas',
    name: 'estadisticas',
    component: EstadisticsPage,
  },
  {
    path: '/informacion',
    name: 'informacion',
    component: InformationPage,
  },
  {
    path: '/isentering',
    name: 'isentering',
    component: IsEntering,
  },
  {
    path: '/turnpage',
    name: 'turnpage',
    component: () => import('./Views/TurnPage/TurnPage.vue'),
  },
  {
    path: '/',
    redirect: () => {
      const isAuthenticated = localStorage.getItem('authToken');
      return isAuthenticated ? '/home' : '/login';
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;