<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase mr-4">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/about">About</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        v-if="user"
        flat
        @click="logOut"
      >
        ログアウト
      </v-btn>
      <v-btn
        v-else
        flat
        @click="logIn"
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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapState, mapActions } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.authorize(user);
      } else {
        this.unauthorize();
      }
    });
  },
  methods: {
    ...mapActions(['authorize', 'unauthorize']),
    logIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logOut() {
      firebase.auth().signOut();
    },
  },
};
</script>
