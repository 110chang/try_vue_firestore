import firebase from 'firebase/app';
import 'firebase/auth';

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
    initialize: ({ commit }) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit(AUTHORIZE, user);
        } else {
          commit(UNAUTHORIZE);
        }
      });
    },
    signInWithGoogle: async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    },
    signOut: async () => {
      await firebase.auth().signOut();
    },
  },
};
