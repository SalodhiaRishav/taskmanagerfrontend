<template>
    <div>
      <form class="form-signin">
  <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
 
  <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
</form>

    </div>
</template>

<script>
import axios from 'axios';
import { constants } from 'crypto';
import VueRouter from 'vue-router'
export default {
    data(){
        return {
            email:'salodhiarishav@gmail.com',
            password:'Lkjh@4321',
           // users:null
        }
    },
    // created(){
    
    //  //  this.$store.dispatch('initUsers')
    //  // this.users=this.$store.getters.users
    // },
    // computed:{
    //     // users:()=>{
    //     //     return this.$store.getters.users;
    //     // }
    // },
    methods:{
        submit(){
           axios.get('http://localhost:53757/api/user')
          .then((data)=>{    
            let users=data.data;
            let u=users.find(user=>{
                return user.email===this.email && user.password===this.password
            })
            if(u)
            {
             this.$store.dispatch('changeLoginStatus',true)
             
              sessionStorage.setItem('id', u.id);
              this.$router.push('/table')
            }else
            {
                alert('login failed')
            }

          })
        }
           
    }

}
</script>

<style scoped>
 .form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
