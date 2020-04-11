import '@/components/globals';
import '@/filters/globals';

import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
