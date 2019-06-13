import firebase from 'firebase/app';
import 'firebase/auth';

const AUTHORIZE = 'AUTHORIZE';
const UNAUTHORIZE = 'UNAUTHORIZE';
const START_LOGGING_IN = 'START_LOGGING_IN';
const FINISH_LOGGING_IN = 'FINISH_LOGGING_IN';

export default {
  namespaced: true,
  state: {
    user: null,
    nowLoggingIn: false,
  },
  mutations: {
    [AUTHORIZE]: (state, user) => {
      state.user = user;
    },
    [UNAUTHORIZE]: (state) => {
      state.user = null;
    },
    [START_LOGGING_IN]: (state) => {
      state.nowLoggingIn = true;
    },
    [FINISH_LOGGING_IN]: (state) => {
      state.nowLoggingIn = false;
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
    signUpWithEmailAndPassword: async ({ commit }, { email, password }) => {
      console.log(email, password);
      await firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        console.warn(error);
      });
      commit(FINISH_LOGGING_IN);
    },
    signInWithGoogle: async ({ commit }) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      commit(START_LOGGING_IN);
      await firebase.auth().signInWithPopup(provider);
      commit(FINISH_LOGGING_IN);
    },
    signOut: async () => {
      await firebase.auth().signOut();
    },
  },
};
