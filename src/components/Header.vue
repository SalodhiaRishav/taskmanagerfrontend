<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Task Manger</router-link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <router-link to="/login" activeClass="active" class="nav-item" tag="li"><a class="nav-link" v-if="!$store.getters.loginStatus">Login</a></router-link>   
        <router-link to="/task" activeClass="active" class="nav-item" tag="li"><a class="nav-link" v-if="$store.getters.loginStatus">New Task</a></router-link>
        <router-link to="/table" activeClass="active" class="nav-item" tag="li"><a class="nav-link" v-if="$store.getters.loginStatus">Table</a></router-link>
        <router-link to="/chart" activeClass="active" class="nav-item" tag="li"><a class="nav-link" v-if="$store.getters.loginStatus">Chart</a></router-link>   
        <li class="nav-item">
          <a class="nav-link" v-if="$store.getters.loginStatus" @click="logout">LogOut</a>
        </li>
    </ul>
   
  </div>
</nav>
    </div>
</template>

<script>
export default {
data(){
  return {
    isLogined:this.$store.getters.loginStatus,
  }
},
methods:{
  logout(){
             this.$store.dispatch('changeLoginStatus',false)
             sessionStorage.removeItem('id')
             this.$router.push('/login');
   
  }
}

}
</script>

<style>

</style>
