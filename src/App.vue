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
import { mapActions } from 'vuex';
import router from '@/router';

export default {
  name: 'App',
  data() {
    return {
      user: firebase.auth().currentUser,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$data.user = user;
      } else {
        this.$data.user = null;
      }
    });
  },
  methods: {
    ...mapActions(['authorize', 'unauthorize']),
    async logIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      router.push('/');
    },
    async logOut() {
      await firebase.auth().signOut();
      router.push('/login');
    },
  },
};
</script>
