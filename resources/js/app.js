require('./bootstrap');
//window.Vue = require('vue').default;
import Vue from "vue";
import VueRouter from "vue-router";
import {routes} from "./routes";
import VueResource from "vue-resource";

import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "jszip";
import "pdfmake";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons-dt/css/jquery.dataTables.css";
import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.css";
import "datatables.net-select-bs5";
import "datatables.net-select-bs5/css/select.bootstrap5.css";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;
const router = new VueRouter({
    routes,
    mode:'history' // short for `routes: routes`
  })

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('app-component', require('./components/AppComponent.vue').default);
const app = new Vue({
    el: '#app',
    router
});
