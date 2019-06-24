<template>
   <div>
     <form>
        <!-- <div class="row">
          <div class="col-xs-12 mb-3">
            <label for="firstName">Task Domain</label>
            <input type="text" class="form-control" id="taskDomain" required v-model="task.taskdomain">          
          </div>
        </div> -->
         <div class="row">
          <div class="col-6 mb-3">
            <label for="category">Task Domain</label>
      <select v-model="task.taskdomain" id="category">
      <option v-for="category in categories" :value="category" >{{category}}</option>
    </select>
          </div>
         </div>
           <div class="row">
            <div class="col-6 mb-3">
            <label for="userStory">User Story</label>
            <input type="text" class="form-control" id="userStory" required v-model="task.userstory">          
          </div>        
        </div>
         <div class="row">
          <div class="col-6 mb-3">
            <label for="timeSpent">Time Spent</label>
            <input type="number" class="form-control" id="timeSpent" required v-model="task.timespent">          
          </div>
        </div>
         <div class="row">
          <div class="col-6 mb-3">
            <label for="expectedTime">Expected Time</label>
            <input type="number" class="form-control" id="expectedTime" required v-model="task.expectedtime">          
          </div>
        </div>
      
        <div class="row">
          <div class="col-6 mb-3">
            <label for="taskDate">Task Date</label>
            <input type="date" class="form-control" id="taskDate" required value="2013-01-08" v-model="task.taskdate">          
          </div>
        </div>
        <div class="row">
         <button class="col-6 btn btn-lg btn-primary btn-block" type="submit" @click.prevent="submit">Add New Task</button>
      </div>
     </form>
   </div>
</template>

<script>
import axios from 'axios';
import categories from './../data/categories';

export default {
data (){
    return {
        categories:null,
        task:{
            taskdate:"2013-01-08",
            taskdomain:"Testing",
            expectedtime:3,
            timespent:2,
            userid:1,
            userstory:"basics"
        }
              
    }
},
created()
{
  this.categories=categories.categories;
  
},
 methods:{
    clearTask()
    {
            this.task.taskdate="",
           this.task.taskdomain="",
           this.task.expectedtime=0,
            this.task.timespent=0,          
            this.task.userstory=""
           
    },
     submit()
     {
      //  console.log(this.task);
       let uid=sessionStorage.getItem('id');
       if(uid===null)
       {
         return;
       }
       else
       {
          this.task.userid=uid;
          axios.post('http://localhost:53757/api/task',this.task)
          .then(()=>{

             this.clearTask();
          })
          .catch(err=>{
            alert(err);
          })
      }
      
     }
 }
}
</script>

<style>

</style>
