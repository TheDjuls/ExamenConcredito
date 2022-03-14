import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/capturaProspecto',
    name: 'capturaProspecto',
    component: () => import(/* webpackChunkName: "capturaProspecto" */ '../views/CapturaProspecto.vue')
  },
  {
    path: '/listadoProspectos',
    name: 'listadoProspectos',
    component: () => import(/* webpackChunkName: "listadoProspecto" */ '../views/ListadoProspectos.vue')
  },
  {
    path: '/evaluacionProspectos/:idProspecto',
    name: 'evaluacionProspectos',
    component: () => import(/* webpackChunkName: "listadoProspecto" */ '../views/EvaluacionProspectos.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
