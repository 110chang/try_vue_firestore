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
import router from '@/router';

export default {
  name: 'App',
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authorize(user);
      } else {
        this.unauthorize();
      }
    });
  },
  computed: {
    ...mapState('app', ['user']),
  },
  methods: {
    ...mapActions('app', ['authorize', 'unauthorize']),
    async logOut() {
      await firebase.auth().signOut();
      router.push('/login');
    },
  },
};
</script>
