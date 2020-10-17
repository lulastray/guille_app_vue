<template>
  <section class="task-wrapper">
    <v-container>
      <v-row justify="center">
        <v-col sm="9" md="7" lg="5">
          <TasksLogo />
        </v-col>
      </v-row>
</v-container>
    <v-container>
      <v-row class="ml-4" justify="center">
        <v-column
        cols="3"
        height="60px">
        <v-form v-if="tasks.length">
          <div v-for="task in tasks" :key="task._id" >
            <v-checkbox
              class="mt-0"
              :label="task.name"
              color="indigo"
              @change="changeProgress(task._id)"
              hide-details
            ></v-checkbox>
          </div>
        </v-form>
        <p v-else>is loading</p>
        </v-column>
      <v-btn @click="newTask">Add new Task </v-btn>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import TasksLogo from "@/components/tasks/TasksLogo";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TaskList",
  components: {
    TasksLogo,
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["getTasks"]),
  },
  mounted() {
    this.getTasks();
  },
};
</script>

<style scoped>
.task-wrapper {
  height: 100%;
  background: #bde0be;
}
</style>
