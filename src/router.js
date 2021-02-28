import { createRouter, createWebHistory } from 'vue-router';

import { CoachDetail, CoachesList, CoachRegistration } from './pages/coaches';
import { CoachContact, RequestsReceived } from './pages/requests';
import Catch from './pages/Catch.vue';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [{ path: 'contact', component: CoachContact }]
  },
  { path: '/register', component: CoachRegistration },
  { path: '/requests', component: RequestsReceived },
  { path: '/:catch(.*)', component: Catch }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
