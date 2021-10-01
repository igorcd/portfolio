import { createRouter, createWebHistory } from 'vue-router';
import MainView from '/src/views/MainView.vue';


// Apps
import UnderDevelopment from '/src/views/apps/UnderDevelopment.vue';
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
            path: '/development',
            name: 'development',
            component: UnderDevelopment
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Profile
        }
    ]
});
export default router;