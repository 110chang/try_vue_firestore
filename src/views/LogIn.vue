<template>
  <div class="login">
    <h1>This is an log in page</h1>
    <v-btn
      v-if="!user"
      color="primary"
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('app', ['user']),
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
