import Vue from 'vue';
import './plugins/vuetify';
import firebase from 'firebase/app';
import router from './router';
import store from './stores';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIRESTORE_API_KEY,
  authDomain: process.env.VUE_APP_FIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIRESTORE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIRESTORE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
