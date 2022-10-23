import { createApp } from 'vue';
import App from './App.vue';

import Router from "@core/router/router";
import vuetify from './core/plugins/vuetify';
import { loadFonts } from './core/plugins/webfontloader';

loadFonts();

createApp(App)
    .use(vuetify)
    .use(Router)
    .mount('#app');
