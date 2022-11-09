import { createRouter, createWebHistory } from 'vue-router';
import MainView from '/src/views/MainView.vue';

// Apps
import GenericApp from '/src/views/apps/GenericApp.vue';
import Profile from '../views/apps/Profile.vue';

// Tools
import Notes from '../views/tools/Notes.vue';

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
        {
            path: '/face-sdk',
            name: 'Face SDK Demo',
            component: GenericApp
        },
        // TODO - FALTA AS FOTOS
        {
            path: '/guestt',
            name: 'Guestt',
            component: GenericApp
        },
        {
            path: '/mais-opcao',
            name: 'Mais Opção',
            component: GenericApp
        },
        {
            path: '/octadesk',
            name: 'Octadesk',
            component: GenericApp
        },
        {
            path: '/tcnApp',
            name: 'Todos com a Nota App',
            component: GenericApp
        },
        {
            path: '/wannaKnow',
            name: 'Wanna Know',
            component: GenericApp
        },

        // Tools
        {
            path: '/notes',
            name: 'Notes',
            component: Notes
        }
    ]
});
export default router;