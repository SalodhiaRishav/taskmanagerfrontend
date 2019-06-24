<script>
import { Bar } from 'vue-chartjs'
import categories from './../data/categories';
import axios from 'axios';



export default {
  extends: Bar,
 
  data: () => ({
      categories:[],
      
    chartdata: null,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted () {
    this.categories=categories.categories;
     
        
       let uid = sessionStorage.getItem('id');
       let url='http://localhost:53757/api/user/'+uid;
      
       axios.get(url)
       .then((data)=>{
        let taskArray=data.data.tasks;
        let categoryCount=[];
        this.categories.forEach(function(category) {
        const count = taskArray.filter(task => task.taskDomain == category ).length; 
            categoryCount.push(count);   
          
        });
        let chartData= {
        labels: this.categories,
        datasets: [
            {
            label: 'Categories Data',
            backgroundColor: '#f87979',
            data:categoryCount
            }
        ]
        }      
       this.chartdata=chartData;  
  this.renderChart(this.chartdata, this.options)
       })
    
  
  }
}

</script>

<style>

</style>
