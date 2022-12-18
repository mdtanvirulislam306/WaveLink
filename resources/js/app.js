require('./bootstrap');
//window.Vue = require('vue').default;
import Vue from "vue";
import VueRouter from "vue-router";
import {routes} from "./routes";
Vue.use(VueRouter);
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
