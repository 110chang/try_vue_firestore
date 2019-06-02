<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="authorized"
        flat
        @click="loggingOut"
      >
        ログアウト
      </v-btn>
      <v-btn
        v-else
        flat
        @click="loggingIn"
      >
        ログイン
      </v-btn>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      authorized: false,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.$data.authorized = true;
      } else {
        this.$data.authorized = false;
      }
    });
  },
  methods: {
    loggingIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    loggingOut() {
      firebase.auth().signOut();
    },
  },
};
</script>
