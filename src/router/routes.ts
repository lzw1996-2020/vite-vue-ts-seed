const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login.vue'), //路由懒加载
  },

  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
    redirect: '/home/user', //重定向
    children: [
      {
        path: '/home/user',
        component: () => import('@/pages/user.vue'),
      },
      {
        path: '/home/manage/:id',
        component: () => import('@/pages/manage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound.vue'),
  },
];

export default routes;
