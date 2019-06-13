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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  created() {
    this.initialize();
  },
  computed: {
    ...mapState('app', ['user']),
  },
  methods: {
    ...mapActions('app', [
      'initialize',
      'signOut',
    ]),
    async logOut() {
      await this.signOut();
      this.$router.push('/login');
    },
  },
};
</script>
