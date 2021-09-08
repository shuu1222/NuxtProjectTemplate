import { getAccessorType } from 'typed-vuex';
import * as dashboard from './dashboard';

export const accessorType = getAccessorType({
  modules: {
    dashboard,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
