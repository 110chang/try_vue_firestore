<template>
  <v-layout align-center class="login text-xs-center">
    <v-flex xs="6">
    <h1>Welcome</h1>
    <v-btn
      v-if="!user"
      color="primary"
      :disabled="nowLoggingIn"
      @click="logInWithGoogle"
    >
      Log in with Google
    </v-btn>
    <v-alert
      :value="user"
      type="success"
    >
      You always logged in.
    </v-alert>
    <p>
      <router-link to="signup">Or sign up</router-link>
    </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LogIn',
  computed: {
    ...mapState('app', ['user', 'nowLoggingIn']),
  },
  methods: {
    ...mapActions('app', ['signInWithGoogle']),
    async logInWithGoogle() {
      await this.signInWithGoogle();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.login {
  height: 100%;
}
</style>
