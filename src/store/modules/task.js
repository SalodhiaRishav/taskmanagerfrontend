import axios from 'axios';

const state = {
    userTasks: null
}

const mutations = {
    setUserTasks: (state, tasks) => {     
        state.userTasks = tasks;
    },
}

const getters = {
    userTasks: (state) => {
        return state.userTasks;
    }
}

const actions = {
    postNewTask: (context, task) => {
        const url = "http://localhost:53757/api/task"
        return axios.post(url, task);
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



