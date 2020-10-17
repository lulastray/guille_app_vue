<template>
  <section class="reward-wrapper">
    <v-container>
      <v-row justify="center">
        <v-col sm="1" md="7" lg="3">
          <RewardLogo />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="ml-4" justify="center">
        <v-column cols="3" height="60px">
          <v-form v-if="rewards.length">
            <div v-for="reward in rewards" :key="reward._id">
              <v-checkbox
                class="mt-0"
                :label="reward.name"
                color="indigo"
                hide-details
              ></v-checkbox>
            </div>
          </v-form>
          <p v-else>is loading</p>
        </v-column>
      </v-row>
      <v-row justify="center" class="mt-4">
        <v-btn>Add new Reward</v-btn>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import RewardLogo from "@/components/rewards/RewardLogo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RewardList",
  components: {
    RewardLogo,
  },
  computed: {
    ...mapGetters(["rewards"]),
  },
  methods: {
    ...mapActions(["getRewards"]),
  },
  mounted() {
    this.getRewards();
  },
};
</script>

<style scoped>
.reward-wrapper {
  height: 100%;
  background: #cce3f0;
}
</style>
