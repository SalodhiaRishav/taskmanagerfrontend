// import axios from 'axios';
    const state={
        loginStatus:false
    }
    
    const mutations={
     changeLoginStatus:(state,value)=>{
         state.loginStatus=value;
     }
    }
    
    const getters={
        loginStatus:(state)=>{
            return state.loginStatus;
        }
    }
    
    const actions={
    
    changeLoginStatus:(context,value)=>{
        context.commit('changeLoginStatus',value)
    },
    
    }
    
    export default{
    state,
    mutations,
    getters,
    actions
    };
    
    
    
    