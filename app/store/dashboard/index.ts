import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const mutationType = {} as const;

type State = {};

export const state = (): State => ({});

export const getters = getterTree(state, {});

export const mutations = mutationTree(state, {});

export const actions = actionTree(
  { state, getters, mutations },
  {
    test(): void {
      console.log(`test`);
    },
  },
);
