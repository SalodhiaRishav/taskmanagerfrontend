import Login from './components/Login.vue'
import ReportChart from './components/ReportChart.vue'
import ReportTable from './components/ReportTable.vue'
import HomePage from './components/HomePage.vue'
import TaskEntry from './components/TaskEntry.vue'


export const routes=[
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/table',
        component:ReportTable
    },
    {
        path:'/chart',
        component:ReportChart
    },
    {
        path:'/task',
        component:TaskEntry
    }
]