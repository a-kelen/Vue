import Axios from '../axios'
const state = {
    auditions: [],
    subscribes: []
  }
  const getters = {
    getAudition: state => id => {
        return state.auditions.find(x => x.id == id);
    },
    getTests: state => id => {
        return state.auditions.find(x => x.id == id).tests;
    }
  }
  
  // actions
  const actions = {
    getAuditions({commit},id) {
        Axios.get('/api/Auditions/').then(res => {
            console.log(res);
            
            commit('SET_AUDITIONS',res.data)
        });
    },
    getSubscribes({commit},id) {
        Axios.get('/api/Subscribers/byuser/'+id).then(res => {
            
            
            commit('SET_SUBSCRIBES',res.data)
        });
    },
    subscribe({commit},obj) {
        
        Axios.post('/api/Auditions/subscribe/'+ obj.auditionId+'/'+obj.userId).then(res => {
            
            
            if(res.data == false){
                commit('REMOVE_SUBSCRIBE', obj.auditionId);
                
            }
            else {
                commit('ADD_SUBSCRIBE', res.data);
            }
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
    INCR_LIKE (state, obj) {
        state.auditions.forEach(a => {
            a.posts.forEach(p => {
                if(p.id == obj.id)
                p.likesCount = obj.likes;
            });
        });
    },
    
    SET_AUDITIONS (state, list) {
        state.auditions = list;
    },
    SET_SUBSCRIBES (state, list) {
        state.subscribes = list;
    },
    REMOVE_SUBSCRIBE(state, obj) {   
        state.subscribes = state.subscribes.filter(x => x.auditionId != obj );
    },
    ADD_SUBSCRIBE(state, obj) {
        state.subscribes.push(obj);
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }