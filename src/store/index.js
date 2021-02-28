import { createStore } from 'vuex';
import * as modules from './modules';
import { formatModules, formatToNamespaces } from './helpers';

const except = [
  // 'coachesModule',
  // 'requestsModule'
];

export const ns = formatToNamespaces(modules, except);

const store = createStore({
  modules: formatModules(modules, except),
  state() {
    return {
      userId: 'c' + Math.floor(Math.random() * 100)
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
