<script>
import { Bar } from "vue-chartjs";
import categories from "./../data/categories";
import axios from "axios";

export default {
  extends: Bar,
  data: () => ({
    userTasks: null,
    categories: [],
    chartdata: null,
    options: {
      title: {
        display: true,
        text: "Total Tasks Per Domain",
        fontSize: 20,
        position: "bottom"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      //   responsive: true,
      maintainAspectRatio: false
    }
  }),
  methods: {
    drawBarGraph() {
      const userId = sessionStorage.getItem("id");
      this.$store.dispatch("setUserTasks", userId).then(data => {
        const userTaskArray = this.$store.getters.userTasks;
        if (data) {
          this.userTasks = this.$store.getters.userTasks;
        }
        let categoryCount = [];
        this.categories.forEach(function(category) {
          const count = userTaskArray.filter(
            task => task.taskDomain === category
          ).length;
          categoryCount.push(count);
        });
        let chartData = {
          labels: this.categories,
          datasets: [
            {
              label: "Categories Data",
              backgroundColor: "#f87979",
              data: categoryCount
            }
          ]
        };
        this.chartdata = chartData;
        this.renderChart(this.chartdata, this.options);
      });
    }
  },
  mounted() {
    this.categories = categories.categories;
    this.drawBarGraph();
  }
};
</script>

<style>
</style>
