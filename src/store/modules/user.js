import axios from 'axios';
const state={
    users:[],
    loginStatus:false
    }
    
    const mutations={
     setUsers:(state,users)=>{
         state.users=users;
     },
     changeLoginStatus:(state,value)=>{
         state.loginStatus=value;
     }
    }
    
    const getters={
        users:(state)=>{           
            return state.users;
        },
        loginStatus:(state)=>{
            return state.loginStatus;
        }
    }
    
    const actions={
    initUsers:(context)=>{

        axios.get('http://localhost:53757/api/user')
        .then((data)=>{
            context.commit('setUsers',data);
           
        })
    },
    changeLoginStatus:(context,value)=>{
        context.commit('changeLoginStatus',value)
    }
    }
    
    export default{
    state,
    mutations,
    getters,
    actions
    };
    
    
    
    