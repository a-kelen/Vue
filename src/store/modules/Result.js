import Axios from '../axios'
const state = {
    results : [], 
  }
  
  // getters
  const getters = {
  
  }
  
  // actions
  const actions = {
    getResults({commit},id) {
        Axios.get('/api/Results/byuser/'+id).then(res => {
            commit('SET_RESULTS',res.data);
            console.log(res);
        });
      },
      sendResult({commit}, obj) {
          Axios.post('/api/Results',obj).then(res => {
                commit('ADD_RESULT',res.data);
          });
      }
    }
  
  // mutations
  const mutations = {
   SET_RESULTS (state, list) {
    state.results = list;
    },
    ADD_RESULT (state, obj) {
        state.results.push(obj);
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }