import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('../views/Home.vue'),
    meta: {
      prev: '',
      next: 'Slide 1'
    }
  },
  {
    path: '/slide-1',
    name: 'Slide 1',
    component:()=>import('../views/Slide1.vue'),
    meta: {
      prev: 'Home',
      next: 'Slide 2'
    }
  },
  {
    path: '/slide-2',
    name: 'Slide 2',
    component:()=>import('../views/Slide2.vue'),
    meta: {
      prev: 'Slide 1',
      next: 'Slide 3'
    }
  },
  {
    path: '/slide-3',
    name: 'Slide 3',
    component:()=>import('../views/Slide3.vue'),
    meta: {
      prev: 'Slide 2',
      next: 'Slide 4'
    }
  },
  {
    path: '/slide-4',
    name: 'Slide 4',
    component:()=>import('../views/Slide4.vue'),
    meta: {
      prev: 'Slide 3',
      next: ''
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
