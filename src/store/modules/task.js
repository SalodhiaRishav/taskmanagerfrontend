import axios from 'axios';

const state = {
    userTasks: null,
    newTaskAddedStatus:false
}

const mutations = {
    setUserTasks: (state, tasks) => {     
        state.userTasks = tasks;
    },
    changeNewTaskAddedStatus:(state,value)=>{
        state.newTaskAddedStatus=value
    }
}

const getters = {
    userTasks: (state) => {
        return state.userTasks;
    },
    newTaskAddedStatus:(state)=>{
        return state.newTaskAddedStatus
    }
}

const actions = {
    postNewTask: (context, task) => {
        return new Promise((resolve,reject)=>{
            const url = "http://localhost:53757/api/task"
            axios.post(url, task)
            .then((response)=>{
                context.commit('changeNewTaskAddedStatus',true)
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
            
        })
      
    },
    setUserTasks: (context, userId) => {
        return new Promise(
            (resolve, reject) => {
                const url = "http://localhost:53757/api/user/" + userId;
                axios.get(url)
                    .then((response => {
                        context.commit('setUserTasks', response.data.tasks);
                        resolve({ dataFetched: true });
                    }))
                    .catch((error)=>{
                        reject(error);
                    })
            }
        );

    }
}

export default {
    state,
    mutations,
    getters,
    actions
};



