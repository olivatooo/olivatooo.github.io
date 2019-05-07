
const routes = [
  {
    path: '/',
    component: () => import('layouts/home.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'faq',
        component: () => import('pages/Faq.vue')
      },
      {
        path: 'courses',
        component: () => import('pages/Courses.vue')
      },
      {
        path: 'achiev',
        component: () => import('pages/Achievements.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
