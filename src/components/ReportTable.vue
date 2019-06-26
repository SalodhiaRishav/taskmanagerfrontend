<template>
  <div>
    <table class="table table-striped" v-if="listFetched">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task Domain</th>
          <th scope="col">User Story</th>
          <th scope="col">TaskDate</th>
          <th scope="col">TimeSpent (in hrs.)</th>
          <th scope="col">ExpectedTime (in hrs.)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks">
          <th scope="row">{{index+1}}</th>
          <td>{{task.taskDomain}}</td>
          <td>{{task.userStory}}</td>
          <td>{{task.taskDate.substring(0, 10)}}</td>
          <td>{{task.timeSpent}}</td>
          <td>{{task.expectedTime}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tasks: null,
      listFetched: false
    };
  },
  created() {
    let userId = sessionStorage.getItem("id");
    this.$store.dispatch("setUserTasks", userId).then(data => {
      if (data) {
        this.tasks = this.$store.getters.userTasks;
        this.listFetched = true;
      }
    });
  }
};
</script>

<style>
</style>
