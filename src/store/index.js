import Vue from 'vue'
import Vuex from 'vuex'
import Axios from './axios.js'
import UserProfile from './modules/UserProfile'
import MasterAudition from './modules/MasterAudition'
import Test from './modules/Test';
import Audition from './modules/Audition'
import Post from './modules/Post'
import Result from './modules/Result'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id : ''
  },
  mutations: {
    
  },
  actions: {
    getTests() {
        Axios.get('api/Tests').then(res => {
          console.log(res);
          
        });
    }
  },
  modules: {
    UserProfile,
    MasterAudition,
    Test,
    Audition,
    Post,
    Result
  }
})
