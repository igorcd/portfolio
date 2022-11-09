import { createApp } from 'vue';
import apps from './data/apps';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import pt from './locales/pt';

const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    messages: {
        pt
    }
});

  
import './assets/css/tailwind.css';
import './assets/css/transitions.css';
// 0, 1, 2, 6, 7, 8, 9,10 ,11, 15, 16
apps[0].options.pinned = true;
apps[1].options.pinned = true;
apps[6].options.pinned = true;
apps[7].options.pinned = true;
apps[8].options.pinned = true;


apps[9].options.pinned = true;
apps[10].options.pinned = true;
apps[11].options.pinned = true;
apps[15].options.pinned = true;
apps[16].options.pinned = true;

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
