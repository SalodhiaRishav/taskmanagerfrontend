<template>
  <div id="app" class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import bargraph from "./components/bargraph.vue";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appBargraph: bargraph
  }
};
</script>

<style>
 @import './styles/AppVueStyle.css';
</style>
