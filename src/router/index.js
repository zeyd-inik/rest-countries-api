import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CountryDetail from '../views/CountryDetail.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/country-detail/:id',
            name: 'CountryDetail',
            component: CountryDetail,
        },
    ],
});

export default router;
