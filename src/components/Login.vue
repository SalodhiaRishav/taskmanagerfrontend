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
import { constants } from 'crypto';
export default {
    data(){
        return {
            email:'test@gmail.com',
            password:'Lkjh@4321',
            users:this.$store.getters.users
        }
    },
    computed:{
        // users:()=>{
        //     return this.$store.getters.users;
        // }
    },
    methods:{
        submit(){
        let u=this.users.find(user=>{
            return user.email===this.email && user.password===this.password
        })
        if(u)
        {
            console.log('login success')
        }else
        {
            console.log('login failed')
        }
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
