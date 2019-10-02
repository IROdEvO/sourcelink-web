import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
