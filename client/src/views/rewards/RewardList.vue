<template>
  <section>
    <header>
      <RewardLogo class="logo" />
    </header>
    <article>
      <ul>
        <li v-for="reward in rewards" :key="reward._id">{{reward.name}}</li>
      </ul>
      <router-link to="/">Home</router-link>
    </article>
  </section>
</template>


<script>
import RewardLogo from "@/components/RewardLogo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RewardList",
  components: {
    RewardLogo
  },
  computed: {
    ...mapGetters(["rewards"])
  },
  methods: {
    ...mapActions(["getRewards"])
  },
  mounted() {
    this.getRewards();
  }
};
</script>

<style scoped>
.logo {
  width: 35%;
}
header {
  text-align: center;
}
</style>
