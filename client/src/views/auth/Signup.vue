<template>
  <section class="signUp-wrapper">
    <v-container>
      <h1 class="text-center mt-16">
        Welcome to GuilleApp
      </h1>
      <v-card max-width="80%" class="ma-auto mt-10">
        <v-card-title
          class="headline text-center blue-grey darken-2 white--text mb-3"
        >
          Signup
        </v-card-title>
        <v-card-subtitle class="mt-5">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              placeholder="********"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <div class="text-center">
              <v-btn :disabled="!valid" color="cyan" class="mt-5">
                Login
              </v-btn>
            </div>
          </v-form>
        </v-card-subtitle>
      </v-card>
      <div class="mt-4">
        <p class="white--text text-center">
          If you´re alreadey a user, please
          <router-link to="/" class="text-decoration-none yellow--text"
            >Login</router-link
          >
        </p>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      valid: false,
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
};
</script>

<style scope>
.signUp-wrapper {
  height: 100%;
  background-color: #26a69a;
}

h1 {
  color: #37474f;
  text-transform: uppercase;
}
</style>
