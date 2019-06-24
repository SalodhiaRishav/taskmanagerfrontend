<script>
  import { Line,Bar } from 'vue-chartjs'
import axios from 'axios';
import categories from './../data/categories'

  export default {
  extends: Bar,Line,
  data: () => ({
      categories:categories.categories,
    chartData: null,        
    options: {
         title: {
             fontSize:20,
             position:'bottom',
            display: true,
            text: 'Expected Time vs Spent Time'
        },
      responsive: true,
      maintainAspectRatio: false
    }
  }),


  mounted(){
  //    console.log(this.);  

       let uid = sessionStorage.getItem('id');
       let url='http://localhost:53757/api/user/'+uid;
       axios.get(url)
       .then((data)=>{
           let expectedTimeArray=[];
           let timeSpentArray=[];
           this.categories.forEach((category)=>{
           let tasks= data.data.tasks.filter(task=>task.taskDomain===category);
           let expectedTimeCount=0;
           let timeSpentCount=0;
            tasks.forEach((task)=>{
                timeSpentCount+= task.timeSpent;
                expectedTimeCount+=task.expectedTime;
            })
            expectedTimeArray.push(expectedTimeCount);
            timeSpentArray.push(timeSpentCount);
           
           })
    let dataChart={
       
        labels: this.categories,
        datasets:[
        { // one line graph
           
          label: 'Expected Time',
           type:'line',
          data: expectedTimeArray,
          borderColor:'#ff0000',
          borderWidth: 3
        },
        { // one line graph
          label: 'Time Spent',
          type:'bar',
          data: timeSpentArray,
          borderColor:'#36495d',
          borderWidth: 3
        }
        ]
        }
            this.renderChart(dataChart, this.options)

        
       })
   
 
      
  }
  }
 
</script>

<style>
  .small {
    /* max-width: 600px; */
    margin:  150px auto;
  }
</style>



