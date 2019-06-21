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
import axios from 'axios';

export default {
   data(){
       return {
           tasks:null,
           listFetched:false
       }
   },
   created()
   {
        

       let uid = sessionStorage.getItem('id');
       let url='http://localhost:53757/api/user/'+uid;
       axios.get(url)
       .then((data)=>{
          this.tasks= data.data.tasks;
          this.listFetched=true;
          
       })
   }

}
</script>

<style>

</style>
