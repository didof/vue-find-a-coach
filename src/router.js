import { createRouter, createWebHistory } from 'vue-router';

import { CoachDetail, CoachesList, CoachRegistration } from './pages/coaches';
import { CoachContact, RequestsReceived } from './pages/requests';
import Catch from './pages/Catch.vue';

const routes = [
  { name: 'home', path: '/', redirect: '/coaches' },
  { name: 'coaches-list', path: '/coaches', component: CoachesList },
  {
    name: 'coach-detail',
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [
      { name: 'coach-contact', path: 'contact', component: CoachContact }
    ]
  },
  {
    name: 'coach-registration',
    path: '/register',
    component: CoachRegistration
  },
  { name: 'requests-received', path: '/requests', component: RequestsReceived },
  { path: '/:catch(.*)', component: Catch }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
