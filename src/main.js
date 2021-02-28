import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import * as uiComponents from './components/ui';
import { registerComponents } from './utils';

const app = createApp(App);

app.use(router);
app.use(store);

registerComponents(app, uiComponents);

app.mount('#app');
