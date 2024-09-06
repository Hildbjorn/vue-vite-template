import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from "./views/about.vue";
import HomePage from "./views/home.vue";
import NotFoundPage from "./views/pageNotFound.vue";

// const routerHistory = createWebHistory();
const routerHistory = createWebHashHistory();

const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFoundPage,
        },
    ],
});

export default routes;