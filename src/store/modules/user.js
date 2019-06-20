import users from './../../data/users';
const state={
    users:[]
    }
    
    const mutations={
     setUsers:(state,users)=>{
         state.users=users;
     }
    }
    
    const getters={
        users:(state)=>{
            return state.users;
        }
    }
    
    const actions={
    initUsers:(context)=>{
            context.commit('setUsers',users);
    }
    }
    
    export default{
    state,
    mutations,
    getters,
    actions
    };
    
    
    
    