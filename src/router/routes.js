
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dash.vue') },
      { path: '/casos', component: () => import('pages/Casos.vue') },
      { path: '/porCidade', component: () => import('pages/CasosPorCidade.vue') },
      { path: '/mapa', component: () => import('pages/Mapa.vue') },
      { path: '/sintomas', component: () => import('pages/Sintomas.vue') },
      { path: '/protecao', component: () => import('pages/Protecao.vue') },
      { path: '/sites', component: () => import('pages/Sites.vue') },
      { path: '/creditos', component: () => import('pages/Creditos.vue') },
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
