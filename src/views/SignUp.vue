<template>
  <v-layout justify-center align-center class="signup text-xs-center">
    <v-flex xs12 sm6 md4>
      <h1>Sign Up</h1>
      <v-text-field
        label="Email"
        v-model="email"
      />
      <v-text-field
        type="password"
        label="Password"
        v-model="password"
      />
      <v-btn
        color="primary"
        @click="signUp"
      >
        Sign Up
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    ...mapActions('app', ['signUpWithEmailAndPassword']),
    async signUp() {
      await this.signUpWithEmailAndPassword(this.$data);
    },
  },
};
</script>

<style scoped>
.signup {
  height: 100%;
}
</style>
