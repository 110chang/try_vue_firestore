<template>
  <div class="login">
    <h1>This is an log in page</h1>
    <v-btn
      color="primary"
      @click="logInWithGoogle"
    >
      Log in with Google
    </v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('app', ['user']),
  },
  methods: {
    ...mapActions('app', ['authorize']),
    async logInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      this.$router.push('/');
    },
  },
};
</script>
