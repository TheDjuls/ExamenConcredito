import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Inicio',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
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
