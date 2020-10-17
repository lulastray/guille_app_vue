<template>
  <v-app id="app" height="100vh">
    <v-main>
      <NavBar @newMatch="addDialog = true" />

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/common/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
