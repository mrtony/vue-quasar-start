import Vue from 'vue';
import Quasar, * as All from 'quasar';

import 'quasar-extras/material-icons';
import './styles/quasar.styl';
import App from './App.vue';

Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: All,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
