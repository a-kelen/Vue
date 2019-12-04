import Axios from '../axios'
import router from '../../router'
const state = {
    tests: [],
    allTests: [],
    count : 0
  }
  
  // getters
  const getters = {
    getTest: state => id => {
      return state.tests.find(x => x.id == id);
  }
  }
  
  const actions = {
    createTest({commit},obj) {
    
      Axios.post('/api/Tests/',obj).then(res => {          
        router.go(-1);
        commit('ADD_TEST',res.data);
      });
  },
  updateTest({commit},obj) {
      Axios.put('/api/Tests/'+obj.id,obj).then(res => {
          console.log(res);
      });
  },
  getTests({commit},id) {
    Axios.get('/api/Tests/byaudition/'+id).then(res => {
        commit('SET_TESTS',res.data);
        console.log(res);
        
    });
  },
    getAllTests({commit,state},page) {
      
      Axios.get('api/Tests/paging?Page='+page+'&Limit=2').then(res => {
          commit('SET_ALLTESTS',res.data);
          console.log(res);
      });
},
deleteTest({commit},id) {

  Axios.delete('/api/Tests/'+id).then(res => {
     console.log(res);
      commit('REMOVE_TEST',id);
  });
},


  }
  
  // mutations
  const mutations = {
    SET_TESTS (state, list) {
      state.tests = list;
  },
  SET_ALLTESTS (state, list) {
    state.allTests = list.items;
    if(list.allCount%2 == 0)
    state.count = list.allCount;
    else
    state.count = list.allCount + 1;

  },
  ADD_TEST (state, test) {
    state.tests.push(test);
  },
  REMOVE_TEST (state, id) {
    state.tests = state.tests.filter(x => x.id != id );
  }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }