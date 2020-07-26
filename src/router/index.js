import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../views/Start.vue';
import Game from '../views/Game.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Search',
        component: Search,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
