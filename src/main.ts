import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import pt from './locales/pt';

const i18n = createI18n({
    locale: 'pt',
    messages: {
        pt
    }
});

  
import './assets/css/tailwind.css';
import './assets/css/transitions.css';

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
