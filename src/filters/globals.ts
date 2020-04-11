import Vue from 'vue';

import { config } from './config';

const filters = {
  config,
};

for (const key of Object.keys(filters)) {
  const filter = (filters as any)[key];
  Vue.filter(key, filter);
}
