import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Sendmail from '../views/Sendmail.vue'
import Validmail from '../views/Validmail.vue'
import Forgetpass from '../views/Forgetpass.vue'
import Newpass from '../views/Newpass.vue'
import Profil from '../views/Profil.vue'
import AnimeListe from '../views/AnimeListe.vue'
import DramaListe from '../views/DramaListe.vue'
import LiveEmissionListe from '../views/LiveEmissionListe.vue'
import AnimeStreaming from '../views/AnimeStreaming.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/login',
  name: 'Login',
  component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
  path: '/sendmail',
  name: 'SendMail',
  component: Sendmail
  },
  {
    path: '/validmail/:email',
    name: 'ValidMail',
    component: Validmail
    },
    {
      path: '/forgetpassword',
      name: 'ForgetPass',
      component: Forgetpass
      },
      {
        path: '/newpass/:forget',
        name: 'Newpass',
        component: Newpass
        },
   {
     path: '/profil/:id',
     name: 'Profil',
     component: Profil
   },
   {
    path: '/animeliste',
    name: 'AnimeListe',
    component: AnimeListe
  },   
  {
    path: '/dramaliste',
    name: 'DramaListe',
    component: DramaListe
  },  
  {
    path: '/liveemissionliste',
    name: 'LiveEmissionListe',
    component: LiveEmissionListe
  },
  {   
  path: '/animestreaming/:id',
  name: 'AnimeStreaming',
  component: AnimeStreaming
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
