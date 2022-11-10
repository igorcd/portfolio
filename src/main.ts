import { createApp } from 'vue';
import App from './App.vue';

// Css
import './assets/css/tailwind.css';
import './assets/css/transitions.css';

// Plugins
import router from './router';
import { createI18n } from 'vue-i18n';

import pt from './locales/pt';

const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'pt',
    messages: {
        pt
    }
});

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
