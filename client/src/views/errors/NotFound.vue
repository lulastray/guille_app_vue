<template>
  <section class="notFound">
    <v-container>
      <v-card max-width="80%" class="ma-auto mt-10">
        <v-card-title
          class="headline text-center blue-grey darken-2 white--text mb-3"
        >
          Page Not Found
        </v-card-title>
        <v-card-subtitle>
          <NotFoundLogo width="90%" class="ma-auto" />
          <p>Oooops I couldn´t find that page, sorry!</p>
          <p>Back to <router-link to="/home">Home</router-link>
</p>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import NotFoundLogo from "@/components/NotFoundLogo";
export default {
  name: "NotFound",
  components: {
    NotFoundLogo,
  },
};
</script>

<style>
.notFound {
  height: 100%;
  background-color: #ff6584;
}
</style>
