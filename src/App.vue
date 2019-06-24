<template>
  <div id="app" class="container">
    <app-header></app-header>
    
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
   
  </div>
</template>

<script>

import Header from './components/Header.vue';
import bargraph from './components/bargraph.vue';


export default {
  name: 'app',
  components: {
  appHeader:Header,
  appBargraph:bargraph
  },
  created(){
  
  }
}
</script>

<style>
body{
  padding: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
