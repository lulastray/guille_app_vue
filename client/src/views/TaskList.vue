<template>
  <section>
    <header>
      <TasksLogo class="logo"/>
    </header>
    <article>
      <ul v-if="tasks.length">
        <li v-for="task in tasks" :key="task._id">{{task.name}}</li>
      </ul>
      <p v-else> is loading </p>
      <router-link to="/">Home</router-link>
      <router-link to="/add_task">Add new Task</router-link>
    </article>
  </section>
</template>

<script>
import TasksLogo from "@/components/TasksLogo";
import { mapActions, mapGetters} from "vuex"


export default {
  name: "TaskList",
  components: {
    TasksLogo
  },
  computed:{
    ...mapGetters(["tasks"])
  },
  methods: {
    ...mapActions(["getTasks"])
  },
  mounted() {
    this.getTasks();
  }
};
</script>

<style scoped>
.logo{
  width: 40%
}
</style>