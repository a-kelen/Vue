import Axios from '../axios'
const state = {
    id: '6c91bb36-8c88-49e1-b9e6-73cd8d0d8303',
    user : {
        Email: "abc@gmail.com",
        Id: "a5dfbdb1-fd84-47ad-af87-9a5614048fb3",
        UserName: "abc@gmail.com"
    },
    profile : {
        Birthday: "2000-02-16T12:12:00",
        FirstName: "Tony",
        Id: "e71a978c-fac1-45c9-d98d-08d775c04ced",
        LastName: "Stark",
        Sex: true,
        UserId: "a5dfbdb1-fd84-47ad-af87-9a5614048fb3"
    },
  }
  
  // getters
  const getters = {
    getUser(state, getters) {
        return state.profile;
    }
  }
  
  // actions
  const actions = {
    update({commit, state}) {
        state.profile.FirstName = 'Tony';
        state.profile.LastName = 'Stark';
        Axios({
            method: 'put',
            url: '/api/UserProfiles/a1301cad-2809-48d8-2302-08d775849c38',
            data: state.profile,
            }).then(res=>{
                console.log(res);
            });
    },
    getProfile({commit,state}) {
        Axios.get()
    }


  }
  
  // mutations
  const mutations = {
    SET_USER_ID (state, o){
        console.log(o);
        state.user = o.username;
        //state.id = o.username.Id;
        state.profile = o.profile;
        
    },
    SET_PROFILE (state, profile){
        console.log(profile);
        state.profile = profile;
        ;
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }