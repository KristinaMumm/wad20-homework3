import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LogIn from "./components/LogIn";
import Posts from "./components/Posts";
import BrowseUsers from "./components/BrowseUsers";
import store from './components/store'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    {path: '/login', name: 'login', component: LogIn},
    {path: '/posts', name: 'posts', component: Posts},
    {path: '/users', name: 'users', component: BrowseUsers}
];

const router = new VueRouter({routes});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
