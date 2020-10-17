<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New Task</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
          
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn id="close" color="orange darken-1" text @click="close"
            >Close</v-btn
          >
          <v-btn id="save" color="orange darken-1" text @click="handleSubmit"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
</template>

<script>
import TasksLogo from "@/components/tasks/TasksLogo";

export default {
  name: "TaskAdd",

  
};
</script>

<style scoped>

</style>
