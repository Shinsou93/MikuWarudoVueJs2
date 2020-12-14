import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
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

// Admin pages
const Dashboard = () =>
    import ( /* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");
const Profile = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Notifications.vue");
const Icons = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/TableList.vue");

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
      },{
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
