const AUTHORIZE = 'AUTHORIZE';
const UNAUTHORIZE = 'UNAUTHORIZE';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    [AUTHORIZE]: (state, user) => {
      state.user = user;
    },
    [UNAUTHORIZE]: (state) => {
      state.user = null;
    },
  },
  actions: {
    authorize: ({ commit }, user) => {
      commit(AUTHORIZE, user);
    },
    unauthorize: ({ commit }) => {
      commit(UNAUTHORIZE);
    },
  },
};
