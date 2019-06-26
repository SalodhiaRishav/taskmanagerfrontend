<script>
import { Line, Bar } from "vue-chartjs";
import {categories} from "./../data/categories";

export default {
  extends: Bar,
  Line,
  data: () => ({
      userTasks:null,
    categories: categories,
    chartData: null,
    options: {
      title: {
        fontSize: 20,
        position: "bottom",
        display: true,
        text: "Expected Time vs Spent Time"
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  methods: {
    drawLineGraph() {
      const userId = sessionStorage.getItem("id");
        
      this.$store.dispatch("setUserTasks", userId).then(data => {
          if(data){
              this.userTasks=this.$store.getters.userTasks;
          }
        let expectedTimeArray = [];
        let timeSpentArray = [];
        this.categories.forEach(category => {
          let tasks = this.userTasks.filter(
            task => task.taskDomain === category
          );
          let expectedTimeCount = 0;
          let timeSpentCount = 0;
          tasks.forEach(task => {
            timeSpentCount += task.timeSpent;
            expectedTimeCount += task.expectedTime;
          });
          expectedTimeArray.push(expectedTimeCount);
          timeSpentArray.push(timeSpentCount);
        });
        let dataChart = {
          labels: this.categories,
          datasets: [
            {
              label: "Expected Time",
              type: "line",
              data: expectedTimeArray,
              borderColor: "#ff0000",
              borderWidth: 3
            },
            {
              label: "Time Spent",
              type: "bar",
              data: timeSpentArray,
              borderColor: "#36495d",
              borderWidth: 3
            }
          ]
        };
        this.renderChart(dataChart, this.options);
      });
    }
  },

  mounted() {
    this.drawLineGraph();
  }
};
</script>

<style scoped>
.small {
  /* max-width: 600px; */
  margin: 150px auto;
}
</style>



