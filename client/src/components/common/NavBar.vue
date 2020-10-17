<template>
  <header>
    <v-toolbar color="blue-grey" dark>
          <!-- <v-btn
      class="mx-2"
      fab
      dark
      color=""
      @click="drawer = true"
    > -->
      <v-icon dark @click="drawer = true">
        mdi-format-list-bulleted-square
      </v-icon>
    <!-- </v-btn> -->
      <!-- <v-app-bar-nav-icon @click="drawer = true" /> -->
      <v-toolbar-title class="text-right ml-5">Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      
        <v-icon>mdi-account-supervisor</v-icon>
              <v-toolbar-title class="text-right mr-5">Guille</v-toolbar-title>

        <v-btn
      class="mx-2"
      fab
      dark
      medium
      color=""
    >
    30 pts
    </v-btn>
      
    
    </v-toolbar>

    <v-navigation-drawer class="blue-grey" v-model="drawer" absolute temporary left>
      <v-list nav rounded class="mt-6">
        <v-list-item
          v-for="(item, idx) in items"
          :key="idx"
          @click="goToPath(item.path)"
          class="mt-6"
          active-class
        >
          <v-list-item-icon>
            <v-icon class="white--text" v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-title class="white--text" v-text="item.title" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { HOME_PATH, TASKS_LIST_PATH, REWARDS_LIST_PATH } from "@/router";

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
             {
          title: "Home",
          icon: "mdi-podium-gold",
          path: HOME_PATH,
        },
        {
          title: "My Tasks",
          icon: "mdi-podium-gold",
          path: TASKS_LIST_PATH,
        },

        {
          title: "My Rewards",
          icon: "mdi-basketball",
          path: REWARDS_LIST_PATH,
        },
     
      ],
    };
  },
  methods: {
    newMatch() {
      this.$emit("newMatch");
    },
    goToPath(path) {
      if (this.$router.currentRoute.path != path) {
        this.$router.push(path);
      } else {
        this.drawer = false;
      }
    },
  },
};
</script>
