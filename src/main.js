import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import alphabetSortList from 'vue-alphabet-sort'

//modif pour le dashboard: j'ai ajouté /index
import router from './router/index'

//dashboard
import RouterPrefetch from 'vue-router-prefetch';
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";


Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

//Fin du dashboard

Vue.use(alphabetSortList)

Vue.use(VueAxios, axios)

Vue.use(Vuelidate)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
