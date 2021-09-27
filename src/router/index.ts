import { createRouter, createWebHistory } from 'vue-router';
import MainView from '/src/views/MainView.vue';


// Apps
import Pilotar from '/src/views/apps/Pilotar.vue';
// import Welcome from '/src/views/apps/Welcome.vue';
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
            path: '/pilotar',
            name: 'pilotar',
            component: Pilotar
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Profile
        }
    ]
});
export default router;