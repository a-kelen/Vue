import Axios from '../axios'
const state = {
    posts: []
  }
  
  // getters
  const getters = {
  
  }
  
  // actions
  const actions = {
    getPosts({commit},id) {
      Axios.get('/api/Posts/byuser/'+id).then(res => {  
        console.log(res);
        commit('SET_POSTS',res.data);
      });
    },
    sendLike({commit},obj) {
      Axios.post('/api/Posts/like',obj).then(res => {
       
           commit('INCR_LIKE',res.data);
       
      });
    },
    sendComm({commit},obj) {
      Axios.post('/api/Comments',obj).then(res => {
         
          
      });
    }

  }
  
  // mutations
  const mutations = {
   SET_POSTS(state, list) {
     state.posts = list;
   },
   INCR_LIKE (state, obj) {
    
        state.posts.forEach(p => {
            if(p.id == obj.id)
            p.likesCount = obj.likes;
        });
    
},
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }