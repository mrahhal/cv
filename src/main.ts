import '@/components/globals';
import '@/filters/globals';

import Vue from 'vue';
import VueShowdown from 'vue-showdown';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueShowdown, {
  options: {
    emoji: true,
    simpleLineBreaks: true,
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
