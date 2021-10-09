import { createRouter, createWebHistory } from 'vue-router';
import MainView from '/src/views/MainView.vue';


// Apps
import GenericApp from '/src/views/apps/GenericApp.vue';
import Profile from '../views/apps/Profile.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainView,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        // === APPS ===
        {
            path: '/biopassIdDemo',
            name: 'BioPassID Demo',
            component: GenericApp
        },
        {
            path: '/certfyId',
            name: 'Certfy ID',
            component: GenericApp
        },
        {
            path: '/easyProctor',
            name: 'Easy Proctor',
            component: GenericApp
        },
        {
            path: '/examePratico',
            name: 'Exame Prático',
            component: GenericApp
        },
        {
            path: '/pilotar',
            name: 'Pilotar',
            component: GenericApp
        },
        {
            path: '/portalRed',
            name: 'Portal Red',
            component: GenericApp
        },
        {
            path: '/remote',
            name: 'Remote',
            component: GenericApp
        },
        {
            path: '/superAula',
            name: 'Super Aula',
            component: GenericApp
        },
        {
            path: '/gestor',
            name: 'SuperPrático Gestor',
            component: GenericApp
        },
    ]
});
export default router;