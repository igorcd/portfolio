import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const alias: Record<string, string> = {
    "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias
    },
    server: {
        host: '0.0.0.0'
    }
});
