<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <label for="name">name</label>
      <!-- simbolo del dolar es para el vuelidate  -->
      <input v-model="$v.task.name.$model" name="name" type="text" />

      <label for="description">description</label>
      <input v-model="$v.task.description.$model" name="description" type="text" />

      <label for="value">value</label>
      <input v-model="$v.task.value.$model" name="value" type="text" />
      <button type="submit">new task</button>
    </form>
    <p>{{message}}</p>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TaskForm",
  data() {
    return {
      task: {
        //hay que poner cada propiedad el objeto para vuelidate
        name: "",
        description: "",
        value: ""
      }
    };
  },
  computed: {
    ...mapGetters(["message"])
  },
  methods: {
    ...mapActions(["createTask", "clearMessage"]),
    handleSubmit() {
      this.clearMessage();
      this.createTask(this.task);
      this.task = {
        name: "",
        description: "",
        value: ""
      };
    }
  },
  validations: {
    task: {
      name: { required },
      description: { required },
      value: { required }
    }
  }
};
</script>

<style>
</style>