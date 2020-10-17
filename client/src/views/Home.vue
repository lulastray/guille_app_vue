<template>
  <section class="home-wrapper">
    <img src="@/assets/images/home.png" alt="imagen familia" width="60%">
      <router-link to="/tasks">My Tasks</router-link>
      <router-link to="/rewards">My Rewards</router-link>
  </section>
</template>

<script>

export default {
    name: "Home",

}
</script>
<style scope>
  .home-wrapper{
    height: 100%;
    background-color: #B2DFDB;
  }
</style>
